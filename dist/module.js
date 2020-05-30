define(["react","@grafana/data","@grafana/ui"],(function(e,t,n){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";n.r(t);var a=n(1),r={mode:a.ThresholdsMode.Absolute,steps:[{value:-1/0,color:"red"},{value:95,color:"orange"},{value:99,color:"yellow"},{value:100,color:"green"}]},o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function i(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(a=o.next()).done;)l.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return l}function c(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(i(arguments[t]));return e}var s=n(0),u=n.n(s);function f(e){var t=e.fontSizePercent,n=e.className,a=e.children,r=parseInt(t,10)/100*38;return u.a.createElement("span",{className:n,style:{fontSize:r+"px"}},a)}var p=n(2),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onPercentOfChanged=function(e){var n=e.value;t.props.onOptionsChange(l(l({},t.props.options),{percentOf:n||""}))},t.onOverChanged=function(e){var n=e.value;t.props.onOptionsChange(l(l({},t.props.options),{over:n||""}))},t.onDecimalChanged=function(e){var n=e.value;t.props.onOptionsChange(l(l({},t.props.options),{decimal:void 0===n?-1:n}))},t.onValueFontSizeChanged=function(e){var n=e.value;t.props.onOptionsChange(l(l({},t.props.options),{valueFontSize:n||""}))},t.onPercentFontSizeChanged=function(e){var n=e.value;t.props.onOptionsChange(l(l({},t.props.options),{percentFontSize:n||""}))},t.onMaxValueChanged=function(e){t.props.onOptionsChange(l(l({},t.props.options),{maxValue:e.target.value||""}))},t}return function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.render=function(){var e=this.props,t=e.options,n=e.data;if(!n)return"No data available, have you defined a query ?";if(!n.series)return"No time serie available, have you defined a time serie query ? Percent+ plugin requires 2 time series queries.";var a=n.series.map((function(e){return e.fields.filter((function(e){return"number"===e.type})).map((function(){return{label:e.name,value:e.name}}))})).reduce((function(e,t){return c(e,t)}),[]),r=c([{label:"No limit",value:-1}],[0,1,2,3,4,5,6,7].map((function(e){return{label:""+e,value:e}}))),o=[20,30,50,70,80,100,110,120,150,170,200].map((function(e){return{label:e+"%",value:""+e}}));return u.a.createElement("div",{className:"section",style:{width:"100%"}},u.a.createElement("div",{className:"gf-form"},u.a.createElement("label",{className:"gf-form-label width-9"},"Percent of"),u.a.createElement("div",{className:"gf-form-select-wrapper",style:{width:"100%"}},u.a.createElement(p.Select,{value:{label:t.percentOf,value:t.percentOf},options:a,onChange:this.onPercentOfChanged}))),u.a.createElement("div",{className:"gf-form"},u.a.createElement("label",{className:"gf-form-label width-9"},"Over"),u.a.createElement("div",{className:"gf-form-select-wrapper",style:{width:"100%"}},u.a.createElement(p.Select,{value:{label:t.over,value:t.over},options:a,onChange:this.onOverChanged}))),u.a.createElement("div",{className:"gf-form"},u.a.createElement("label",{className:"gf-form-label width-9"},"Max value"),u.a.createElement("div",{className:"gf-form-select-wrapper",style:{width:"100%"}},u.a.createElement(p.Input,{value:t.maxValue,onChange:this.onMaxValueChanged}))),u.a.createElement("div",{className:"gf-form"},u.a.createElement("label",{className:"gf-form-label width-9"},"Decimals"),u.a.createElement("div",{className:"gf-form-select-wrapper",style:{width:"100%"}},u.a.createElement(p.Select,{value:r.find((function(e){return e.value===t.decimal})),options:r,onChange:this.onDecimalChanged}))),u.a.createElement("div",{className:"gf-form"},u.a.createElement("label",{className:"gf-form-label width-9"},"Value font size"),u.a.createElement("div",{className:"gf-form-select-wrapper",style:{width:"100%"}},u.a.createElement(p.Select,{value:o.find((function(e){return e.value===t.valueFontSize})),options:o,onChange:this.onValueFontSizeChanged}))),u.a.createElement("div",{className:"gf-form"},u.a.createElement("label",{className:"gf-form-label width-9"},"% font size"),u.a.createElement("div",{className:"gf-form-select-wrapper",style:{width:"100%"}},u.a.createElement(p.Select,{value:o.find((function(e){return e.value===t.percentFontSize})),options:o,onChange:this.onPercentFontSizeChanged}))))},t}(s.PureComponent);n.d(t,"plugin",(function(){return d}));var d=new a.PanelPlugin((function(e){var t,n=e.options,r=e.data,o=e.fieldConfig;console.log(e);var l=u.a.useCallback((function(e,t){if(e){var n=e.closest(".panel-container");n&&(n.style.background=t)}}),[]),i=r.series.find((function(e){return e.name===n.percentOf})),s=r.series.find((function(e){return e.name===n.over}));if(!i||!s)return u.a.createElement("p",null,"Selected series are not available");var p=i.fields.find((function(e){return"Value"===e.name})),m=s.fields.find((function(e){return"Value"===e.name}));if(!p||!m)return u.a.createElement("p",null,"Selected fields are not available");var d=p.values.toArray().reduce((function(e,t){return e+t}),0),v=m.values.toArray().reduce((function(e,t){return e+t}),0),g=Number(n.maxValue),h=100*d/v,b=isNaN(g)?h:Math.min(h,g),y=c(null===(t=o.defaults.thresholds)||void 0===t?void 0:t.steps).sort((function(e,t){return t.value-e.value})).find((function(e){return e.value<=b}))||{color:"transparent"};return u.a.createElement("div",{className:"singlestat-panel",style:{background:Object(a.getColorFromHexRgbOrName)(y.color)},ref:function(e){return l(e,Object(a.getColorFromHexRgbOrName)(y.color))}},u.a.createElement("div",{className:"singlestat-panel-value-container"},u.a.createElement(f,{className:"singlestat-panel-value",fontSizePercent:n.valueFontSize},-1!==n.decimal?b.toFixed(n.decimal):b),u.a.createElement(f,{className:"singlestat-panel-postfix",fontSizePercent:n.percentFontSize},"%")))})).setDefaults({percentOf:"",over:"",decimal:-1,valueFontSize:"80",percentFontSize:"50",maxValue:"Infinity"}).useFieldConfig({standardOptions:[a.FieldConfigProperty.Thresholds],standardOptionsDefaults:{thresholds:r}}).setNoPadding().setEditor(m)}])}));
//# sourceMappingURL=module.js.map