function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function O(e){return c=e,f=setTimeout(j,t),l?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function j(){var e=m();if(S(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?g(n,i-(e-c)):n}(e))}function h(e){return f=void 0,p&&r?y(e):(r=o=void 0,a)}function w(){var e=m(),n=S(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return O(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=b(t)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:h(m())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),O=e=>!!localStorage.getItem(e);((e,t)=>{if(!O(t))return;const n=JSON.parse(localStorage.getItem(t));for(const t in n)Object.hasOwnProperty.call(n,t)&&(e.elements[t].value=n[t])})(y,"feedback-form-state"),y.addEventListener("input",e(t)(((e,t={})=>{const n="feedback-form-state";O(n)&&(t=JSON.parse(localStorage.getItem(n))),t[e.target.name]=e.target.value,localStorage.setItem(n,JSON.stringify(t))}),500)),y.addEventListener("submit",(e=>{const t="feedback-form-state",n=O(t)?JSON.parse(localStorage.getItem(t)):{email:"",message:""};console.log(n),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(t)}));
//# sourceMappingURL=03-feedback.f6dd1ef6.js.map