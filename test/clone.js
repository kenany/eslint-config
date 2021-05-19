const crossSpawn = require('cross-spawn');
const mkdirp = require('mkdirp');
const path = require('path');
const test = require('tape');
const os = require('os');
const parallelLimit = require('run-parallel-limit');
const fs = require('graceful-fs');

const GIT = 'git';
const TMP = path.resolve(__dirname, '..', 'tmp');
const LINT = path.resolve(__dirname, '..', 'bin', 'cmd.js');

const URLS = require('./repos.json');

const PARALLEL_LIMIT = os.cpus().length;

const MODULES = {};
URLS.forEach((url) => {
  const spliturl = url.split('/');
  const name = spliturl[spliturl.length - 1];
  MODULES[name] = `${url}.git`;
});

test('test github repos that use @kenan/eslint-config', (t) => {
  t.plan(URLS.length);

  mkdirp.sync(TMP);

  parallelLimit(Object.keys(MODULES).map((pkg) => {
    const name = pkg;
    const url = MODULES[pkg];
    const folder = path.resolve(TMP, name);
    return (cb) => {
      fs.access(path.resolve(TMP, name), fs.R_OK | fs.W_OK, (err) => {
        downloadPackage((err) => {
          if (err) {
            cb(err);
            return;
          }
          runLint(cb);
        });

        function downloadPackage(cb) {
          if (err) {
            gitClone(cb);
          }
          else {
            gitPull(cb);
          }
        }

        function gitClone(cb) {
          const args = ['clone', '--depth', 1, url, path.join(TMP, name)];
          spawn(GIT, args, { stdio: 'ignore' }, (err) => {
            if (err) {
              err.message += ` (git clone) (${name})`;
            }
            cb(err);
          });
        }

        function gitPull(cb) {
          const args = ['pull'];
          spawn(GIT, args, { cwd: folder, stdio: 'ignore' }, (err) => {
            if (err) {
              err.message += ` (git pull) (${name})`;
            }
            cb(err);
          });
        }

        function runLint(cb) {
          const args = ['--verbose'];
          if (pkg.args) {
            args.push(...pkg.args);
          }
          spawn(LINT, args, { cwd: folder }, (err) => {
            const str = `${name} (${url})`;
            if (err) {
              t.fail(str);
            }
            else {
              t.pass(str);
            }
            cb(null);
          });
        }
      });
    };
  }), PARALLEL_LIMIT, (err) => {
    if (err) {
      throw err;
    }
  });
});

function spawn(command, args, opts, cb) {
  if (!opts.stdio) {
    opts.stdio = 'inherit';
  }

  const child = crossSpawn(command, args, opts);
  child.on('error', cb);
  child.on('close', (code) => {
    if (code !== 0) {
      cb(new Error('non-zero exit code: ' + code));
      return;
    }
    cb(null);
  });
  return child;
}
