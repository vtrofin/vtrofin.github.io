webpackJsonp([35783957827783],{88:function(e,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,r=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,s=u&&u(Object);e.exports=function e(t,c,d){if("string"!=typeof c){if(s){var f=u(c);f&&f!==s&&e(t,f,d)}var m=r(c);o&&(m=m.concat(o(c)));for(var p=0;p<m.length;++p){var y=m[p];if(!(a[y]||n[y]||d&&d[y])){var h=i(c,y);try{l(t,y,h)}catch(e){}}}return t}return t}},180:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),o=function(e){var t=e.educationItem,a=t.yearStart,n=t.yearEnd,l=t.school;return r.default.createElement("li",null,r.default.createElement("div",null,l),r.default.createElement("div",null,a+" - "+n))};t.default=o,e.exports=t.default},181:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),o=a(180),i=n(o),u=function(e){return r.default.createElement("div",null,r.default.createElement("ul",null,e.education.map(function(e,t){return r.default.createElement(i.default,{key:t,educationItem:e})})))};t.default=u,e.exports=t.default},182:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),o=a(184),i=n(o),u=function(e){return r.default.createElement("div",{className:"employmentSection"},r.default.createElement("ul",{className:"jobsUl"},e.jobs.map(function(e,t){return r.default.createElement(i.default,{key:t,jobItem:e})})))};t.default=u,e.exports=t.default},183:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),o=a(185),i=n(o),u=a(407),s=n(u),c=function(e){var t=e.personalDetails,a=t.name,n=t.location,l=t.email,o=t.phone,u=t.age;return r.default.createElement("div",{className:"generalDetails"},r.default.createElement("div",{className:"generalText"},r.default.createElement("h1",null,a),r.default.createElement("p",null,n),r.default.createElement("p",null,o),r.default.createElement("p",null,r.default.createElement("a",{href:"mailto:"+l+"?Subject=Hello%20Victor",target:"_top"},"Email")),r.default.createElement("p",null,"Age: ",u)),r.default.createElement(i.default,{src:s.default}))};t.default=c,e.exports=t.default},184:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),o=function(e){var t=e.jobItem,a=t.company,n=t.yearStart,l=t.yearEnd,o=t.city,i=t.jobTitle,u=t.jobDescription;return r.default.createElement("li",{className:"liJobItem"},r.default.createElement("div",{className:"jobItem"},r.default.createElement("div",{className:"jobItemFirstLine"},r.default.createElement("h3",null,a),r.default.createElement("p",null,n+" - "+l)),r.default.createElement("p",{style:{fontStyle:"italic"}},o),r.default.createElement("p",null,i),r.default.createElement("div",null,r.default.createElement("ul",{className:"jobItemUl"},u.map(function(e,t){return r.default.createElement("li",{key:t,dangerouslySetInnerHTML:{__html:e}})})))))};t.default=o,e.exports=t.default},185:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),o=function(e){return r.default.createElement("div",{className:"profilePic"},r.default.createElement("img",{title:"profile picture",src:e.src}))};t.default=o,e.exports=t.default},186:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),o=function(e){return r.default.createElement("div",{className:"sectionSubtitle"},r.default.createElement("h2",null,e.subtitleText))};t.default=o,e.exports=t.default},187:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),o=function(e){return r.default.createElement("div",{className:"simpleSection"},r.default.createElement("ul",null,e.content.map(function(e,t){return r.default.createElement("li",{key:t,dangerouslySetInnerHTML:{__html:e}})})))};t.default=o,e.exports=t.default},407:function(e,t,a){e.exports=a.p+"static/profilepic.6cc6ffbd.jpg"},190:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(2),u=n(i),s=a(85),c=(n(s),a(183)),d=n(c),f=a(186),m=n(f),p=a(187),y=n(p),h=a(181),E=n(h),b=a(182),v=n(b),g=function(e){function t(a){l(this,t);var n=r(this,e.call(this,a));return n.state={personalDetails:{name:"Victor Trofin",location:"Kyoto, Japan",email:"trofin.victor@gmail.com",phone:"+81-80-4496-5881",age:33},skills:["JavaScript with emphasis on the React ecosystem, HTML, CSS and SASS, SQL","Fullstack React JS: React Router, Redux, GraphQL & GraphQL Server, Relay","Familiar with React Native","Familiar with Meteor","Unit Testing with Jest and Enzyme","Familiar with Webpack and Git","Problem solving oriented and strong business judgment","Good time management skills","Strong sense of responsibility and very good adaptability","Self-learner","Good communication and presentation skills","Languages spoken: Romanian – mother tongue, fluent in English, intermediate Italian, basic Japanese"],education:[{yearStart:"2009",yearEnd:"2013",school:"Bucharest University of Economic Studies – Master in International Business"},{yearStart:"2003",yearEnd:"2008",school:"Politehnica University of Bucharest – Faculty of Power Engineering"}],jobs:[{company:"SmoothJapan",yearStart:"Sep 2017",yearEnd:"",city:"Kyoto",jobTitle:"Front End work for WordPress websites:",jobDescription:['Restyling components for <a href="http://makersboot.camp/">Makers Bootcamp</a>','Resizing and styling for mobile devices for <a href="http://kyotomakersgarage.com/">Kyoto Makers Garage</a> and <a href="http://gvh-osaka.com/">GVH Osaka</a>']},{company:"Self-employed",yearStart:"2011",yearEnd:"2015",city:"Bucharest",jobTitle:"Managed several websites",jobDescription:["Managed contact with developers","Performed light development work in HTML, CSS, PHP","Sales and Marketing – prospected for new customers and advertisers","On-site SEO","Customer support"]},,],other:['<a href="https://www.sayonaranippon.com/">Sayonaranippon</a> – project made using ReactJS, React Router, Fetch API and Graphcool’s GraphQL API to practice my React theoretical knowledge',"Active in the Kansai developers’ community: co-organizer of the Osaka Web Designers and Developers Meetup, taking part in Hacker News Kansai and React Osaka meetups"]},n}return o(t,e),t.prototype.render=function(){return u.default.createElement("div",null,u.default.createElement(d.default,{personalDetails:this.state.personalDetails}),u.default.createElement(m.default,{subtitleText:"Skills and abilities profile"}),u.default.createElement(y.default,{content:this.state.skills}),u.default.createElement(m.default,{subtitleText:"Education"}),u.default.createElement(E.default,{education:this.state.education}),u.default.createElement(m.default,{subtitleText:"Employment history*"}),u.default.createElement(v.default,{jobs:this.state.jobs}),u.default.createElement(m.default,{subtitleText:"Other activities and interests"}),u.default.createElement(y.default,{content:this.state.other}),u.default.createElement("p",{style:{fontStyle:"italic"}},"*only relevant positions mentioned. "))},t}(u.default.Component);t.default=g,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-1f268e93a30a44216ec8.js.map