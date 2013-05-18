
PINF.bundle("", function(require) {
	require.memoize("/main.js", function(require, exports, module) {
		exports.main = function(options) {
			$("<h1>Hello World</h1>").appendTo("body");
			console.log("Hello World");
		}
	});
});
