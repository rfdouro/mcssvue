/**
 * The browser data
 * @type Window.navigator.userAgent|String
 */
var n = window.navigator.userAgent;
console.log(n);

/**
 * Set initial defaults for materializecss
 * Duration to modal in view
 * @type Number
 */
M.Modal.defaults.inDuration = 0;
/**
 * Set initial defaults for materializecss
 * Duration to modal out view
 * @type Number
 */
M.Modal.defaults.outDuration = 0;
/**
 * Set initial defaults for materializecss
 * Sidenav edge default
 * @type String
 */
M.Sidenav.defaults.edge = 'left';
/**
 * Set initial defaults for materializecss
 * Sidenav draggable default
 * @type Boolean
 */
M.Sidenav.defaults.draggable = true;
M.Sidenav.defaults.inDuration = 250;
M.Sidenav.defaults.outDuration = 250;
