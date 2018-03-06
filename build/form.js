!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("react"),require("prop-types"),require("lodash.omit")):"function"===typeof define&&define.amd?define(["react","prop-types","lodash.omit"],t):"object"===typeof exports?exports.form=t(require("react"),require("prop-types"),require("lodash.omit")):e.form=t(e.React,e.PropTypes,e["_.omit"])}(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=100)}({100:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),u=r.n(s),c=r(9),f=r.n(c),l=r(96),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),b=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=(e.getValues,e.validate,e.validateAll,e.showError,e.hideError,n(e,["getValues","validate","validateAll","showError","hideError"]));return u.a.createElement("form",t)}}]),t}(s.Component);b.propTypes={getValues:f.a.func.isRequired,validate:f.a.func.isRequired,validateAll:f.a.func.isRequired,showError:f.a.func.isRequired,hideError:f.a.func.isRequired},t.default=Object(l.a)(b)},2:function(t,r){t.exports=e},9:function(e,r){e.exports=t},96:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t,r,c;return r=t=function(t){function r(e,t){i(this,r);var n=s(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));return c.call(n),n.state={byName:{},byId:{},hasError:!0},n}return u(r,t),h(r,[{key:"getChildContext",value:function(){var e=this;return{_register:this._register,_unregister:this._unregister,_setProps:this._setProps,_handleChange:this._handleChange,_handleBlur:this._handleBlur,_getProps:this._getProps,_errors:Object.keys(this.state.byId).filter(function(t){return e.state.byId[t].error})}}},{key:"render",value:function(){return l.a.createElement(e,Object.assign({},this.props,{validate:this.validate,validateAll:this.validateAll,getValues:this.getValues,showError:this.showError,hideError:this.hideError}))}}]),r}(f.PureComponent),t.displayName="Form("+e.name+")",t.propTypes={},t.childContextTypes={_register:b.a.func.isRequired,_unregister:b.a.func.isRequired,_setProps:b.a.func.isRequired,_handleChange:b.a.func.isRequired,_handleBlur:b.a.func.isRequired,_getProps:b.a.func.isRequired,_errors:b.a.array},c=function(){var e=this;this._register=function(t,r){e.setState(function(e){return{byName:Object.assign({},e.byName,a({},t.props.name,[].concat(o(e.byName[t.props.name]||[]),[r]))),byId:Object.assign({},e.byId,a({},r,Object.assign({},t.props,{isCheckable:g(t),value:t.props.value||""},g(t)?{checked:!!t.props.checked}:{})))}},e._setErrors)},this._unregister=function(t,r){var n=[].concat(o(e.state.byName[t.props.name]));n.splice(n.indexOf(r),1);var i=n.length?Object.assign({},e.state.byName,a({},t.props.name,n)):y()(e.state.byName,t.props.name);e.setState({byName:i,byId:y()(e.state.byId,r)})},this._getProps=function(t){if(e.state.byId[t]){var r=e.state.byId[t];r.validations,r.isCheckable;return n(r,["validations","isCheckable"])}},this._setProps=function(t,r){e.setState(function(e){return{byId:Object.assign({},e.byId,a({},r,Object.assign({},e.byId[r],t)))}},e._setErrors)},this._handleChange=function(t,r){var n=e.state.byId[r].isCheckable;e.setState({byId:Object.assign({},e.state.byId,n?Object.assign({},e.state.byName[e.state.byId[r].name].reduce(function(t,r){return t[r]=Object.assign({},e.state.byId[r],{checked:!1}),t},{})):{},a({},r,Object.assign({},e.state.byId[r],{isChanged:!0,value:t.target.value},n&&{checked:t.target.checked})))},e._setErrors)},this._handleBlur=function(t,r){e.setState({byId:Object.assign({},e.state.byId,a({},r,Object.assign({},e.state.byId[r],{isUsed:!0,value:t.target.value})))},e._setErrors)},this._setErrors=function(){var t=!1;e.setState(function(e){return{byId:Object.keys(e.byId).reduce(function(r,n){var a=e.byId[n].validations,o=e.byId[n],i=Object.keys(e.byName).reduce(function(t,r){return t[r]=e.byName[r].map(function(t){return e.byId[t]}),t},{}),s=o.value;r[n]=Object.assign({},e.byId[n]);var u=!0,c=!1,f=void 0;try{for(var l,d=a[Symbol.iterator]();!(u=(l=d.next()).done);u=!0){var b=l.value,p=b(s,o,i);if(p){r[n].error=p,t=!0;break}t=!1,delete r[n].error}}catch(e){c=!0,f=e}finally{try{!u&&d.return&&d.return()}finally{if(c)throw f}}return r},{}),hasError:t}})},this.getValues=function(){return Object.keys(e.state.byName).reduce(function(t,r){return e.state.byName[r].length>1?t[r]=e.state.byName[r].map(function(t){return e.state.byId[t].value}):t[r]=e.state.byId[e.state.byName[r][0]].value,t},{})},this.validate=function(t){e.setState(function(e){return{byId:Object.assign({},e.byId,e.byName[t].reduce(function(t,r){return t[r]=Object.assign({},e.byId[r],{isChanged:!0,isUsed:!0}),t},{}))}},e._setErrors)},this.validateAll=function(){return e.setState(function(e){return{byId:Object.assign({},e.byId,Object.keys(e.byName).reduce(function(t,r){return e.byName[r].reduce(function(r,n){return t[n]=Object.assign({},e.byId[n],{isChanged:!0,isUsed:!0}),r},{}),t},{}))}},e._setErrors()),e.state.hasError},this.showError=function(t,r){t&&setTimeout(function(){e.setState({byId:Object.assign({},e.state.byId,a({},t.id,Object.assign({},e.state.byId[t.id],{isChanged:!0,isUsed:!0,error:r})))})},0)},this.hideError=function(t){e.setState(function(e){return{byId:Object.assign({},e.byId,a({},t.id,Object.assign({},y()(e.byId[t.id],"error"),{isChanged:!1,isUsed:!1})))}})},this.hasError=function(){return e.state.hasError}},r}t.a=c;var f=r(2),l=r.n(f),d=r(9),b=r.n(d),p=r(97),y=r.n(p),h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),g=function(e){return"radio"===e.props.type||"checkbox"===e.props.type}},97:function(e,t){e.exports=r}})});
//# sourceMappingURL=form.js.map