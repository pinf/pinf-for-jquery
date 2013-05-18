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

    <script src="jquery.js"></script>
    <script src="pinf.jquery.js"></script>
    
    $.pinf.sandbox("bundle.js", function(sandbox) {
        sandbox.main();
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
