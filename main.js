(()=>{"use strict";var e={734:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},84:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},565:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,o.default)(2,arguments),!t||"object"!=typeof t)return new Date(NaN);var n="years"in t?(0,s.default)(t.years):0,u="months"in t?(0,s.default)(t.months):0,d="weeks"in t?(0,s.default)(t.weeks):0,c="days"in t?(0,s.default)(t.days):0,l="hours"in t?(0,s.default)(t.hours):0,h="minutes"in t?(0,s.default)(t.minutes):0,f="seconds"in t?(0,s.default)(t.seconds):0,m=(0,i.default)(e),g=u||n?(0,a.default)(m,u+12*n):m,w=c||d?(0,r.default)(g,c+7*d):g,p=h+60*l,v=f+60*p,y=1e3*v,b=new Date(w.getTime()+y);return b};var r=u(n(262)),a=u(n(581)),i=u(n(171)),o=u(n(734)),s=u(n(84));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},262:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,i.default)(2,arguments);var n=(0,a.default)(e),o=(0,r.default)(t);return isNaN(o)?new Date(NaN):o?(n.setDate(n.getDate()+o),n):n};var r=o(n(84)),a=o(n(171)),i=o(n(734));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},581:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,i.default)(2,arguments);var n=(0,a.default)(e),o=(0,r.default)(t);if(isNaN(o))return new Date(NaN);if(!o)return n;var s=n.getDate(),u=new Date(n.getTime());u.setMonth(n.getMonth()+o+1,0);var d=u.getDate();return s>=d?u:(n.setFullYear(u.getFullYear(),u.getMonth(),s),n)};var r=o(n(84)),a=o(n(171)),i=o(n(734));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},171:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,a.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var r,a=(r=n(734))&&r.__esModule?r:{default:r};e.exports=t.default}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e={projectsContainer:document.querySelector(".projects-container"),today:document.querySelector("#today"),week:document.querySelector("#thisweek"),mainContainer:document.querySelector(".main-container")},t=class{constructor(e,t=[]){this.title=e,this.array=t}};function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(e){r(1,arguments);var t=a(e);return!isNaN(t)}var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var u,d={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,u=a.width?String(a.width):e.defaultWidth;r=e.values[u]||e.values[s]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],s=r.match(o);if(!s)return null;var u,d=s[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(d))return n}(c):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(d))return n}(c),u=e.valueCallback?e.valueCallback(u):u,{value:u=a.valueCallback?a.valueCallback(u):u,rest:r.slice(d.length)}}}const f={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof o[e]?o[e]:1===t?o[e].one:o[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:d,formatRelative:function(e,t,n,r){return c[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(u={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(u.matchPattern);if(!a)return null;var i=a[0],o=n.match(u.parsePattern);if(!o)return null;var s=u.valueCallback?u.valueCallback(o[0]):o[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(i.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function m(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function g(e,t){r(2,arguments);var n=a(e).getTime(),i=m(t);return new Date(n+i)}function w(e,t){r(2,arguments);var n=m(t);return g(e,-n)}function p(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const v=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return p("yy"===t?r%100:r,t.length)},y=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):p(n+1,2)},b=function(e,t){return p(e.getUTCDate(),t.length)},C=function(e,t){return p(e.getUTCHours()%12||12,t.length)},T=function(e,t){return p(e.getUTCHours(),t.length)},M=function(e,t){return p(e.getUTCMinutes(),t.length)},x=function(e,t){return p(e.getUTCSeconds(),t.length)},P=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return p(Math.floor(r*Math.pow(10,n-3)),t.length)};var D=864e5;function k(e){r(1,arguments);var t=1,n=a(e),i=n.getUTCDay(),o=(i<t?7:0)+i-t;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function E(e){r(1,arguments);var t=a(e),n=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var o=k(i),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var u=k(s);return t.getTime()>=o.getTime()?n+1:t.getTime()>=u.getTime()?n:n-1}function S(e){r(1,arguments);var t=E(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=k(n);return a}var j=6048e5;function N(e,t){r(1,arguments);var n=t||{},i=n.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:m(o),u=null==n.weekStartsOn?s:m(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=a(e),c=d.getUTCDay(),l=(c<u?7:0)+c-u;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function U(e,t){r(1,arguments);var n=a(e,t),i=n.getUTCFullYear(),o=t||{},s=o.locale,u=s&&s.options&&s.options.firstWeekContainsDate,d=null==u?1:m(u),c=null==o.firstWeekContainsDate?d:m(o.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,c),l.setUTCHours(0,0,0,0);var h=N(l,t),f=new Date(0);f.setUTCFullYear(i,0,c),f.setUTCHours(0,0,0,0);var g=N(f,t);return n.getTime()>=h.getTime()?i+1:n.getTime()>=g.getTime()?i:i-1}function L(e,t){r(1,arguments);var n=t||{},a=n.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:m(i),s=null==n.firstWeekContainsDate?o:m(n.firstWeekContainsDate),u=U(e,t),d=new Date(0);d.setUTCFullYear(u,0,s),d.setUTCHours(0,0,0,0);var c=N(d,t);return c}var O=6048e5;function W(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+p(i,2)}function Y(e,t){return e%60==0?(e>0?"-":"+")+p(Math.abs(e)/60,2):q(e,t)}function q(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+p(Math.floor(a/60),2)+n+p(a%60,2)}const A={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return v(e,t)},Y:function(e,t,n,r){var a=U(e,r),i=a>0?a:1-a;return"YY"===t?p(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):p(i,t.length)},R:function(e,t){return p(E(e),t.length)},u:function(e,t){return p(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return p(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return p(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return y(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return p(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,i){var o=function(e,t){r(1,arguments);var n=a(e),i=N(n,t).getTime()-L(n,t).getTime();return Math.round(i/O)+1}(e,i);return"wo"===t?n.ordinalNumber(o,{unit:"week"}):p(o,t.length)},I:function(e,t,n){var i=function(e){r(1,arguments);var t=a(e),n=k(t).getTime()-S(t).getTime();return Math.round(n/j)+1}(e);return"Io"===t?n.ordinalNumber(i,{unit:"week"}):p(i,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):b(e,t)},D:function(e,t,n){var i=function(e){r(1,arguments);var t=a(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),o=n-i;return Math.floor(o/D)+1}(e);return"Do"===t?n.ordinalNumber(i,{unit:"dayOfYear"}):p(i,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return p(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return p(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return p(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return C(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):T(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):p(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):p(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):M(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):x(e,t)},S:function(e,t){return P(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return Y(a);case"XXXX":case"XX":return q(a);case"XXXXX":case"XXX":default:return q(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return Y(a);case"xxxx":case"xx":return q(a);case"xxxxx":case"xxx":default:return q(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+W(a,":");case"OOOO":default:return"GMT"+q(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+W(a,":");case"zzzz":default:return"GMT"+q(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return p(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return p((r._originalDate||e).getTime(),t.length)}};function _(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function F(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const z={p:F,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return _(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",_(a,t)).replace("{{time}}",F(i,t))}};function B(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var H=["D","DD"],X=["YY","YYYY"];function Q(e){return-1!==H.indexOf(e)}function G(e){return-1!==X.indexOf(e)}function R(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,V=/^'([^]*?)'?$/,K=/''/g,$=/[a-zA-Z]/;function Z(e,t,n){r(2,arguments);var o=String(t),s=n||{},u=s.locale||f,d=u.options&&u.options.firstWeekContainsDate,c=null==d?1:m(d),l=null==s.firstWeekContainsDate?c:m(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=u.options&&u.options.weekStartsOn,g=null==h?0:m(h),p=null==s.weekStartsOn?g:m(s.weekStartsOn);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var v=a(e);if(!i(v))throw new RangeError("Invalid time value");var y=B(v),b=w(v,y),C={firstWeekContainsDate:l,weekStartsOn:p,locale:u,_originalDate:v},T=o.match(J).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,z[t])(e,u.formatLong,C):e})).join("").match(I).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return ee(n);var a=A[r];if(a)return!s.useAdditionalWeekYearTokens&&G(n)&&R(n,t,e),!s.useAdditionalDayOfYearTokens&&Q(n)&&R(n,t,e),a(b,n,u.localize,C);if(r.match($))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return T}function ee(e){return e.match(V)[1].replace(K,"'")}const te=class{constructor(e,t="",n=Z(new Date,"P"),r="Low",a=!1){this.title=e,this.description=t,this.dueDate=n,this.priority=r,this.complete=a}};var ne=n(565),re=n.n(ne);const ae=e=>{localStorage.setItem("projectsArray",JSON.stringify([e])),console.log(localStorage)},ie=(()=>{const t=e.mainContainer,n=document.createElement("div");return n.classList.add("add-item-button"),n.textContent="+ Add Task",t.appendChild(n),n.addEventListener("click",(()=>{t.removeChild(n);const e=document.createElement("input");e.type="text",e.classList.add("item-input"),t.appendChild(e);const r=document.createElement("div");r.setAttribute("style","width: 60%; margin-left: 30px; margin-top: 0; cursor: default; align-items: baseline; display: flex; justify-content: center;"),t.appendChild(r);const a=document.createElement("button");a.textContent="✓",r.appendChild(a),a.addEventListener("click",(()=>{const a=e.value,i=new te(a),o=document.getElementsByClassName("selected"),s=de.dateProjectArray,u=se.projectsArray;for(let e=0;e<s.length;e++)if(s[e].title===o[0].id){if("thisweek"===s[e].title){const t=new te(a,"",Z(re()(new Date,{days:7}),"P"));s[e].array.push(t)}else s[e].array.push(i);console.log(s[e].array)}for(let e=0;e<u.length;e++)u[e].title.toLowerCase()===o[0].id&&(u[e].array.push(i),console.log(u[e].array));ae(u),t.removeChild(r),t.removeChild(e),t.appendChild(n),ue.renderPage()}));const i=document.createElement("button");i.textContent="✕",r.appendChild(i),i.addEventListener("click",(()=>{t.removeChild(r),t.removeChild(e),t.appendChild(n)}))})),{addItemButton:n}})(),oe=(e,t)=>{t=t.filter((t=>t.title!=e.title)),localStorage.setItem("projectsArray",JSON.stringify([t])),se.setProjectsArray(t),ue.renderNames(t)},se=(()=>{const n=e.projectsContainer,r=document.createElement("div");r.textContent="+",r.classList.add("project-div"),r.setAttribute("style","font-size: 50px; justify-content: center; font-weight: bolder;"),n.appendChild(r);const a=new t("Default");let i=[];return i.push(a),r.addEventListener("click",(()=>{const e=document.createElement("input");e.type="text",n.appendChild(e),n.removeChild(r);const a=document.createElement("div");a.setAttribute("style","width: 60%; margin-left: 30px; margin-top: 0; cursor: default; align-items: baseline; display: flex; justify-content: center;"),n.appendChild(a);const o=document.createElement("button");o.textContent="✓",a.appendChild(o),o.addEventListener("click",(()=>{const o=e.value;let s=i.map((e=>e.title));if(""!=o&&!1===s.includes(o)){const s=new t(o);i.push(s);for(let e=0;e<i.length;e++)i[e].dataProject=e;n.removeChild(a),n.removeChild(e),ue.renderNames(i),console.log(ae(i)),n.appendChild(r)}}));const s=document.createElement("button");s.textContent="✕",a.appendChild(s),s.addEventListener("click",(()=>{n.removeChild(a),n.removeChild(e),n.appendChild(r)}))})),{projectsArray:i,addProjectButton:r,projectsContainer:n,setProjectsArray:e=>(i=e,i)}})(),ue=(()=>{let t=[];const n=e.projectsContainer,r=r=>{for(;n.hasChildNodes();)n.removeChild(n.firstChild);const i=document.createElement("h2");i.textContent="Projects",n.appendChild(i);for(let i=0;i<r.length;i++){const o=document.createElement("div");o.classList.add("project-div"),o.id=r[i].title.toLowerCase(),n.appendChild(o),t.push(o);for(let n=0;n<t.length;n++)t[n].addEventListener("click",(()=>{for(let e=0;e<t.length;e++)t[e].classList.remove("selected");e.today.classList.remove("selected"),e.week.classList.remove("selected"),t[n].classList.add("selected"),a()}));const s=document.createElement("i");s.classList.add("fas","fa-list"),o.appendChild(s);const u=document.createElement("a");u.textContent=r[i].title,o.appendChild(u);const d=document.createElement("h3");d.textContent="×","Default"!=r[i].title&&o.appendChild(d),d.addEventListener("click",(()=>{const e=r[i];oe(e,r)})),n.appendChild(se.addProjectButton)}},a=()=>{const t=document.getElementsByClassName("selected"),n=de.dateProjectArray,r=se.projectsArray;let i=[],o="";for(let e=0;e<n.length;e++)n[e].title===t[0].id&&(console.log(n),i=n[e].array,o=n[e].title);for(let e=0;e<r.length;e++)r[e].title.toLowerCase()===t[0].id&&(console.log(r),i=r[e].array,o=r[e].title);o=o.charAt(0).toUpperCase()+o.slice(1);const s=e.mainContainer;for(;s.hasChildNodes();)s.removeChild(s.firstChild);const u=document.createElement("h2");"Thisweek"===o&&(o="This Week"),u.textContent=o,u.classList.add("title"),s.appendChild(u);for(let e=0;e<i.length;e++)if(!1===i[e].complete){const t=document.createElement("div");t.classList.add("item-div");const n=document.createElement("div");n.classList.add("title-container"),t.appendChild(n);const r=document.createElement("i");r.classList.add("far","fa-circle"),n.appendChild(r),r.addEventListener("click",(()=>{i[e].complete=!0,a()}));const o=document.createElement("h3");o.textContent=i[e].title,n.appendChild(o),s.appendChild(t),o.addEventListener("click",(()=>{const t=document.createElement("input");t.type="text",t.value=i[e].title,n.appendChild(t),n.removeChild(o),t.addEventListener("keypress",(r=>{console.log(r.key),"Enter"===r.key&&(i[e].title=t.value,n.removeChild(t),o.textContent=i[e].title,n.appendChild(o))}))}));const u=document.createElement("div");u.classList.add("date-container"),t.appendChild(u);const d=document.createElement("h3");d.textContent=i[e].dueDate,d.classList.add("date"),u.appendChild(d),d.addEventListener("click",(()=>{u.removeChild(d);const t=document.createElement("input");t.type="date",t.min=Z(new Date,"y-MM-d"),u.appendChild(t),t.addEventListener("change",(()=>{i[e].dueDate=Z(new Date(t.value),"P"),d.textContent=i[e].dueDate,u.removeChild(t),u.appendChild(d)}))}))}const d=ie.addItemButton;s.appendChild(d)};return r(se.projectsArray),n.appendChild(se.addProjectButton),{renderNames:r,renderPage:a,projectDivArray:t}})(),de=(()=>{const n=e.today,r=e.week,a=new t("today"),i=new t("thisweek");let o=[];o.push(a,i);let s=[],u=ue.projectDivArray;s.push(n,r);for(let e=0;e<s.length;e++)s[e].addEventListener("click",(()=>{for(let e=0;e<u.length;e++)u[e].classList.remove("selected");for(let e=0;e<s.length;e++)s[e].classList.remove("selected");s[e].classList.add("selected"),ue.renderPage()}));return{dateProjectArray:o}})();(()=>{let e=JSON.parse(localStorage.getItem("projectsArray"));e=e[0],console.log(e),se.setProjectsArray(e),ue.renderNames(e),se.projectsArray=e})(),ue.renderPage()})()})();