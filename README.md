*Status: DEV*

PINF JavaScript Loader for jQuery
=================================

A [jQuery](http://jquery.com/) [plugin](http://requirejs.org/docs/plugins.html) for
loading [PINF JavaScript Bundles](https://github.com/pinf/pinf-loader-js).


Install
-------

    npm install pinf-for-jquery


Usage
-----

`http://localhost/index.html`

    <script src="jquery.js"></script>
    <script src="pinf.jquery.js"></script>
    <script>
        $.pinf.sandbox("bundle.js", function(sandbox) {
            sandbox.main();
        });
    </script>

`http://localhost/bundle.js`

    PINF.bundle("", function(require) {
        require.memoize("/main.js", function(require, exports, module) {
            exports.main = function(options) {
                console.log("HelloWorld!");
            }
        });
    });


Test & Development
==================

Requirements:

  * [NodeJS](http://nodejs.org/)

Run tests:

    make test

Launch development workspace:

    make run-dev
    open http://localhost:8080/

Build
-----

    make build


License
=======

[UNLICENSE](http://unlicense.org/)
