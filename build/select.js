!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("react"),require("prop-types"),require("uuid/v4")):"function"===typeof define&&define.amd?define(["react","prop-types","uuid/v4"],t):"object"===typeof exports?exports.select=t(require("react"),require("prop-types"),require("uuid/v4")):e.select=t(e.React,e.PropTypes,e.uuid)}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=13)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){var t,n;return n=t=function(t){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),f(n,[{key:"render",value:function(){var t=this.context._getProps(this.id);return t?c.a.createElement(e,Object.assign({},t,{onChange:this.handleChange,onBlur:this.handleBlur})):null}}]),n}(s.a),t.displayName="Control("+e.name+")",n}t.a=u;var a=n(0),c=n.n(a),s=n(3),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),c=(n.n(a),n(1)),s=n.n(c),f=n(4),p=n.n(f),l=n(5),d=n.n(l),h=n(6),y=n.n(h),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(e){function t(){var e,n,r,u;o(this,t);for(var a=arguments.length,c=Array(a),s=0;s<a;s++)c[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.id=y()(),r.handleChange=function(e){e.persist(),r.context._handleChange(e,r.id),r.props.onChange&&r.props.onChange(e)},r.handleBlur=function(e){e.persist(),r.context._handleBlur(e,r.id),r.props.onBlur&&r.props.onBlur(e)},u=n,i(r,u)}return u(t,e),v(t,[{key:"componentDidMount",value:function(){this.context._register(this,this.id)}},{key:"componentWillUnmount",value:function(){this.context._unregister(this,this.id)}},{key:"componentWillReceiveProps",value:function(e){var t=e.validations,n=r(e,["validations"]),o=this.props,i=o.validations,u=r(o,["validations"]);d()(u,n)&&p()(i,t)||this.context._setProps(n,this.id)}},{key:"shouldComponentUpdate",value:function(e,t,n){return n!==this.context}},{key:"render",value:function(){return null}}]),t}(a.Component);b.contextTypes={_register:s.a.func.isRequired,_unregister:s.a.func.isRequired,_setProps:s.a.func.isRequired,_handleChange:s.a.func.isRequired,_handleBlur:s.a.func.isRequired,_getProps:s.a.func.isRequired},b.propTypes={validations:s.a.arrayOf(s.a.func),onChange:s.a.func,onBlur:s.a.func},b.defaultProps={validations:[]},t.a=b},function(e,t){e.exports=function(e,t){if(e===t)return!0;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}},function(e,t){e.exports=function(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var i=0;i<o;i++){var u=n[i];if(e[u]!==t[u])return!1}return!0}},function(e,t){e.exports=n},,,,,,,function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n.n(o),u=n(1),a=n.n(u),c=n(2),s=function(e){var t=e.error,n=e.isChanged,o=e.isUsed,u=r(e,["error","isChanged","isUsed"]);return i.a.createElement("div",null,i.a.createElement("select",u),n&&o&&t)};s.propTypes={error:a.a.oneOfType([a.a.node,a.a.string])},t.default=Object(c.a)(s)}])});
//# sourceMappingURL=select.js.map