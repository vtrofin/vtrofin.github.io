(self.webpackChunkvtrofin_github_io=self.webpackChunkvtrofin_github_io||[]).push([[678],{4852:function(e){"use strict";e.exports=Object.assign},649:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return it}});var r,a,i,o,s=n(7294),c=n(5697),l=n.n(c),u=n(3524),p=n.n(u),f=n(9590),d=n.n(f),m=n(4852),y=n.n(m),h="bodyAttributes",g="htmlAttributes",b="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(E).map((function(e){return E[e]})),"charset"),T="cssText",S="href",M="http-equiv",w="innerHTML",x="itemprop",N="name",C="property",I="rel",j="src",L="target",A={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},O="defaultTitle",k="defer",D="encodeSpecialCharacters",P="onChangeClientState",z="titleTemplate",R=Object.keys(A).reduce((function(e,t){return e[A[t]]=t,e}),{}),U=[E.NOSCRIPT,E.SCRIPT,E.STYLE],B="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(e){var t=K(e,E.TITLE),n=K(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=K(e,O);return t||r||void 0},W=function(e){return K(e,P)||function(){}},_=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||n===I&&"canonical"===e[n].toLowerCase()||c===I&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==w&&s!==T&&s!==x||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=y()({},r[s],a[s]);r[s]=c}return e}),[]).reverse()},K=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){q(e)}),0)}),X=function(e){return clearTimeout(e)},$="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||q:n.g.requestAnimationFrame||q,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:n.g.cancelAnimationFrame||X,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,p=e.title,f=e.titleAttributes;oe(E.BODY,r),oe(E.HTML,a),ie(p,f);var d={baseTag:se(E.BASE,n),linkTags:se(E.LINK,i),metaTags:se(E.META,o),noscriptTags:se(E.NOSCRIPT,s),scriptTags:se(E.SCRIPT,l),styleTags:se(E.STYLE,u)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),c(e,m,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),oe(E.TITLE,t)},oe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);a.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==o.join(",")&&n.setAttribute(B,o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"["+B+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===w)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(B,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ce=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[A[n]||n]=e[n],t}),t)},ue=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,a=le(n,r),[s.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ce(n),i=ae(t);return a?"<"+e+" "+B+'="true" '+a+">"+V(i,r)+"</"+e+">":"<"+e+" "+B+'="true">'+V(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case g:return{toComponent:function(){return le(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=A[e]||e;if(n===w||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),s.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===w||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===U.indexOf(e);return t+"<"+e+" "+B+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,p=void 0===u?"":u,f=e.titleAttributes;return{base:ue(E.BASE,t,r),bodyAttributes:ue(h,n,r),htmlAttributes:ue(g,a,r),link:ue(E.LINK,i,r),meta:ue(E.META,o,r),noscript:ue(E.NOSCRIPT,s,r),script:ue(E.SCRIPT,c,r),style:ue(E.STYLE,l,r),title:ue(E.TITLE,{title:p,titleAttributes:f},r)}},fe=p()((function(e){return{baseTag:J([S,L],e),bodyAttributes:_(h,e),defer:K(e,k),encode:K(e,D),htmlAttributes:_(g,e),linkTags:Q(E.LINK,[I,S],e),metaTags:Q(E.META,[N,v,M,C,x],e),noscriptTags:Q(E.NOSCRIPT,[w],e),onChangeClientState:W(e),scriptTags:Q(E.SCRIPT,[j,w],e),styleTags:Q(E.STYLE,[T],e),title:F(e),titleAttributes:_(b,e)}}),(function(e){ne&&ee(ne),e.defer?ne=$((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),pe)((function(){return null})),de=(a=fe,o=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return G({},r,((t={})[n.type]=[].concat(r[n.type]||[],[G({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case E.TITLE:return G({},a,((t={})[r.type]=o,t.titleAttributes=G({},i),t));case E.BODY:return G({},a,{bodyAttributes:G({},i)});case E.HTML:return G({},a,{htmlAttributes:G({},i)})}return G({},a,((n={})[r.type]=G({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=G({},t);return Object.keys(e).forEach((function(t){var r;n=G({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(Z(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Z(e,["children"]),r=G({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(a,r)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);de.renderStatic=de.rewind;var me=de;var ye=e=>{let{children:t}=e;return s.createElement("div",null,s.createElement(me,{title:"Victor Trofin, web engineer in Japan",meta:[{name:"description",content:"Full-stack web engineer in Kyoto, Japan. Currently at Ship&co, working with Node.js, Vue.js and React"},{name:"keywords",content:"React, Vue.js, Node.js, CV, Kyoto"}]}),s.createElement("div",{className:"layout"},t))};function he(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function ge(e){return ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ge(e)}function be(e){he(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===ge(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function Ee(e,t){he(2,arguments);var n=be(e),r=be(t),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function ve(e,t){he(2,arguments);var n=be(e),r=be(t),a=Ee(n,r),i=Math.abs(function(e,t){he(2,arguments);var n=be(e),r=be(t);return n.getFullYear()-r.getFullYear()}(n,r));n.setFullYear(1584),r.setFullYear(1584);var o=Ee(n,r)===-a,s=a*(i-Number(o));return 0===s?0:s}function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te.apply(this,arguments)}function Se(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var Me=n(4578);function we(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var xe=n(3935),Ne=!1,Ce=s.createContext(null),Ie=function(e){return e.scrollTop},je="unmounted",Le="exited",Ae="entering",Oe="entered",ke="exiting",De=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a=Le,r.appearStatus=Ae):a=Oe:a=t.unmountOnExit||t.mountOnEnter?je:Le,r.state={status:a},r.nextCallback=null,r}(0,Me.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===je?{status:Le}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==Ae&&n!==Oe&&(t=Ae):n!==Ae&&n!==Oe||(t=ke)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===Ae){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:xe.findDOMNode(this);n&&Ie(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Le&&this.setState({status:je})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[xe.findDOMNode(this),r],i=a[0],o=a[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!e&&!n||Ne?this.safeSetState({status:Oe},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:Ae},(function(){t.props.onEntering(i,o),t.onTransitionEnd(c,(function(){t.safeSetState({status:Oe},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:xe.findDOMNode(this);t&&!Ne?(this.props.onExit(r),this.safeSetState({status:ke},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:Le},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:Le},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:xe.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===je)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Se(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(Ce.Provider,{value:null},"function"==typeof n?n(e,r):s.cloneElement(s.Children.only(n),r))},t}(s.Component);function Pe(){}De.contextType=Ce,De.propTypes={},De.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Pe,onEntering:Pe,onEntered:Pe,onExit:Pe,onExiting:Pe,onExited:Pe},De.UNMOUNTED=je,De.EXITED=Le,De.ENTERING=Ae,De.ENTERED=Oe,De.EXITING=ke;var ze=De,Re=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=we(n.className,r):n.setAttribute("class",we(n.className&&n.className.baseVal||"",r)));var n,r}))},Ue=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),a=r[0],i=r[1];t.removeClasses(a,"exit"),t.addClass(a,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),a=r[0],i=r[1]?"appear":"enter";t.addClass(a,i,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),a=r[0],i=r[1]?"appear":"enter";t.removeClasses(a,i),t.addClass(a,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,a=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:a,activeClassName:r?a+"-active":n[e+"Active"],doneClassName:r?a+"-done":n[e+"Done"]}},t}(0,Me.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&a&&(r+=" "+a),"active"===n&&e&&Ie(e),r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,a=n.active,i=n.done;this.appliedClasses[t]={},r&&Re(e,r),a&&Re(e,a),i&&Re(e,i)},n.render=function(){var e=this.props,t=(e.classNames,Se(e,["classNames"]));return s.createElement(ze,Te({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(s.Component);Ue.defaultProps={classNames:""},Ue.propTypes={};var Be=Ue;var He=e=>{let{phone:t}=e;const{0:n,1:r}=(0,s.useState)(!1);return(0,s.useEffect)((()=>(window.addEventListener("beforeprint",(e=>r(!0))),window.addEventListener("afterprint",(e=>r(!1))),()=>{window.removeEventListener("beforeprint",(e=>r(!0))),window.removeEventListener("afterprint",(e=>r(!1)))})),[]),s.createElement("div",null,!n&&s.createElement("div",{className:"phone-number-button",onClick:()=>r(!0)},"Phone number"),s.createElement(Be,{timeout:300,in:n,classNames:"phone-number",onExited:()=>r(!1),unmountOnExit:!0},s.createElement("p",{className:"phone-number"},t)))};var Ye=e=>s.createElement("div",{className:"profilePic"},s.createElement("img",{title:"profile picture",alt:"Victor Trofin full stack web engineer in Kyoto, Japan",src:e.src,loading:"lazy"})),Ge=n.p+"static/victor_light_yellow-e0717c80e535192c4c566ffdefb4aa6c.jpg";var Ze=e=>{const{name:t,location:n,email:r,phone:a}=e.personalDetails;return s.createElement("div",{className:"generalDetails"},s.createElement("div",{className:"generalText"},s.createElement("h1",null,t),s.createElement("h3",null,"トロフィン ビクトル"),s.createElement("p",null,"Romanian national living in ",n),s.createElement("p",null,"Married, one child"),s.createElement("p",null,"Age: ",(()=>{const e=new Date("1984-09-05T06:00:00+0200"),t=new Date,n=ve(t,e);if(isNaN(n)){const e=t.getMonth()+1,n=t.getDay(),r=t.getFullYear()-1984;return e>=9&&n>=5?r:r-1}return n})()),s.createElement(He,{phone:a}),s.createElement("p",{className:"paper-email"},r),s.createElement("div",{className:"contacts"},s.createElement("a",{href:"mailto:"+r,target:"_top"},s.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9ImVudmVsb3BlSWNvblRpdGxlIGVudmVsb3BlSWNvbkRlc2MiIHN0cm9rZT0iIzIzMjgyZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWxsPSJub25lIiBjb2xvcj0iIzIzMjgyZSI+IDx0aXRsZSBpZD0iZW52ZWxvcGVJY29uVGl0bGUiPkVudmVsb3BlPC90aXRsZT4gPGRlc2MgaWQ9ImVudmVsb3BlSWNvbkRlc2MiPkljb24gb2YgYW4gcGFwZXIgZW52ZWxvcGU8L2Rlc2M+IDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxNCIgeD0iMiIgeT0iNSIvPiA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yIDVsMTAgOSAxMC05Ii8+IDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIgMTlsNi44MjUtNy44Ii8+IDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIyIDE5bC02Ljg0NC03LjgyMiIvPiA8L3N2Zz4=",alt:"email",id:"envelope-icon",loading:"lazy"})),s.createElement("a",{href:"https://github.com/vtrofin"},s.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==",alt:"github profile",id:"git-icon",loading:"lazy"})))),s.createElement(Ye,{src:Ge}))};var Ve=e=>{let{size:t}=e;const n=t?"about-container "+t:"about-container";return s.createElement("div",{className:n},s.createElement("p",null,"My area of expertise, not limited to, lies in building systems for e-commerce and logistics. I work at"," ",s.createElement("a",{href:"https://www.shipandco.com",target:"_blank",rel:"noopener noreferrer"},"Ship&co"),", an awesome startup building an all-in-one shipping management solution for e-commerce."," "))};var Fe=e=>s.createElement("div",{className:"sectionSubtitle"},s.createElement("h2",null,e.subtitleText));var We=e=>s.createElement("div",{className:"simpleSection"},s.createElement("ul",null,e.content.map(((e,t)=>s.createElement("li",{key:t,dangerouslySetInnerHTML:{__html:e}})))));var _e=e=>{const{yearStart:t,yearEnd:n,school:r}=e.educationItem;return s.createElement("li",null,s.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},s.createElement("div",null,r),s.createElement("div",null,t+" - "+n)))};var Je=e=>s.createElement("div",null,s.createElement("ul",null,e.education.map(((e,t)=>s.createElement(_e,{key:t,educationItem:e})))));const Qe=e=>{let{title:t}=e;return t?s.createElement("p",{style:{fontStyle:"italic"}},t):null},Ke=e=>{let{item:t}=e;if("string"==typeof t)return s.createElement("li",null,t);const{description:n,achievements:r}=t;return s.createElement("li",{className:"no-indent"},n,s.createElement("ul",{className:"achievements"},r.map(((e,t)=>s.createElement("li",{key:t},e)))))};var qe=e=>{let{jobItem:t}=e;const{company:n,yearStart:r,yearEnd:a,city:i,jobTitle:o,jobDescription:c}=t;return s.createElement("li",{className:"liJobItem"},s.createElement("div",{className:"jobItem"},s.createElement("div",{className:"jobItemFirstLine"},s.createElement("h3",null,n),s.createElement("p",{className:"employment-years"},r+" - "+(a||""))),i&&s.createElement("p",{style:{fontStyle:"italic"}},i),s.createElement(Qe,{title:o}),s.createElement("div",null,s.createElement("ul",{className:"jobItemUl"},c.map(((e,t)=>s.createElement(Ke,{key:t,item:e})))))))};var Xe=e=>{let{jobs:t}=e;return s.createElement("div",{className:"employmentSection"},s.createElement("ul",{className:"jobsUl"},t.map(((e,t)=>s.createElement(qe,{key:t,jobItem:e})))))};const $e={name:"Victor Trofin",location:"Kyoto, Japan"},et=["Programming Languages: Javascript, Node.js, Python, Go","Front-end: React, Vue.js, Handlebars, Next.js, Gatsby, CSS, SASS","Back-end: Express, Feathers JS, Fastify, Vercel serverless, Meteor, MongoDB, SQL","APIs: XML, REST, GraphQL","Unit testing with Mocha and Jest","Familiar with React Native and Kotlin"],tt=["Problem solving oriented and strong business judgment","Strong sense of responsibility and very good adaptability","Good communication and presentation skills","Good time management skills","Languages spoken: Romanian – mother tongue, fluent in English, intermediate Italian, basic Japanese"],nt=[{yearStart:"2009",yearEnd:"2013",school:"Bucharest University of Economic Studies – Master in International Business"},{yearStart:"2003",yearEnd:"2008",school:"Politehnica University of Bucharest – Faculty of Power Engineering"}],rt=[{company:"BertrandCo",yearStart:"Feb 2018",jobTitle:"Full-stack web engineer, Kyoto",jobDescription:[{description:"Ship&co: Web app to compare shipping rates and create shipping labels",achievements:["Integration of API and major releases: Shopify, QuickBook Commerce, DHL, DHL eCommerce Asia, Yamato","Implement new pricing strategy: build the UI and back-end bug fixes","Implement GDPR requirements: download and delete user data","Implement scheduling of Pickups in Ship&co"]},{description:"Stock&co: Shopify app that syncs products and inventory across multiple stores",achievements:["Restructure the database to enable synchronization across stores","Set-up REST API with endpoints for product and inventory synchronization","Implemented user validation, logging and Slack alerts"]},{description:"Ship&Co Internal apps and Bento&Co",achievements:["UI and back-end enhancements and performance optimizations"]}]},{company:"SmoothJapan",yearStart:"Sep 2017",yearEnd:"Dec 2017",jobTitle:"Web engineer, Kyoto",jobDescription:["Markup for various clients: Makers Bootcamp, Kyoto Makers Garage, GVH Osaka"]},{company:"Universal Campus | 京進の英会話教室 ユニバーサルキャンパス",yearStart:"2016",yearEnd:"2018",jobTitle:"English teacher, Kyoto",jobDescription:["Taught English while re-focusing my career towards web-engineering"]},{company:"Self-employed",yearStart:"2011",yearEnd:"2015",jobTitle:"Managed several websites, Bucharest",jobDescription:["Light development tasks in HTML, CSS and PHP, web marketing and customer support"]},{company:"CII Group",yearStart:"2009",yearEnd:"2011",jobTitle:"Consultant, Bucharest",jobDescription:["Organizational restructuring and project management in the field of logistics"]},{company:"Roland Berger Strategy Consultants",yearStart:"2008",yearEnd:"2009",jobTitle:"Business Analyst, Bucharest",jobDescription:["Strategy consulting and organizational restructuring in the fields of manufacturing and logistics"]}],at=['Active in the Kansai developer community: <a href="https://www.meetup.com/Osaka-Web-Designers-and-Developers-Meetup/">Osaka Web Designers and Developers</a> and <a href="https://www.meetup.com/Hacker-News-Kansai/">Hacker News Kansai</a>',"I spend my free time gaining knowledge in Machine Learning","Alumnus of Board of European Students of Technology"];var it=e=>{const{0:t,1:n}=(0,s.useState)("page-break"),{0:r,1:a}=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=window.navigator.userAgent,r=/firefox/gi.test(e),i=/chrome/gi.test(e),o=/safari/gi.test(e),s=/bot|googlebot|crawler|spider|robot|crawling|google|baidu|bing|msn|teoma|slurp|yandex/i.test(window.navigator.userAgent);a(s),r?n(t+" firefox"):i?n(t+" chrome"):!i&&o&&n(t+" safari")}),[]),s.createElement(ye,null,s.createElement(Ze,{personalDetails:{...$e,email:r?"":e.data.site.siteMetadata.email,phone:r?"":e.data.site.siteMetadata.phone}}),s.createElement(Ve,null),s.createElement(Fe,{subtitleText:"Technical Skills"}),s.createElement(We,{content:et}),s.createElement(Fe,{subtitleText:"Abilities"}),s.createElement(We,{content:tt}),s.createElement(Fe,{subtitleText:"Education"}),s.createElement(Je,{education:nt}),s.createElement("div",{className:t+" top"}),s.createElement(Fe,{subtitleText:"Employment history"}),s.createElement(Xe,{jobs:rt}),s.createElement("div",{className:t+" bottom"}),s.createElement(Fe,{subtitleText:"Other activities and interests"}),s.createElement(We,{content:at}))}},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof o.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof o.toString)return e.toString()===o.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],o[l[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),p.canUseDOM?t(c):n&&(c=n(c))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(p,"canUseDOM",s),p}}}}]);
//# sourceMappingURL=component---src-pages-index-js-53592f971ddcb0ad6a53.js.map