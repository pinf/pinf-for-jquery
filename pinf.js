
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {

	// NOTE: DO NOT EDIT THIS CODE! IT IS AUTO-INJECTED ON `make build`.
	// @inject <loader>
	// @inject </loader>

    $.pinf = PINF;

    return $;
}));
