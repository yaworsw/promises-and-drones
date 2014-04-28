require('colors');

GLOBAL.fs     = require('fs');
GLOBAL.path   = require('path');

GLOBAL._      = require('lodash');
GLOBAL.slice  = require('sliced');
GLOBAL.Q      = require('q');

GLOBAL.config = require('./config/config');

GLOBAL.ROOT       = __dirname;
GLOBAL.PUBLIC_DIR = path.join(ROOT, 'public');
