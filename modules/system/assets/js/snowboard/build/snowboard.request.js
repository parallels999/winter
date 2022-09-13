(self.webpackChunk_wintercms_wn_system_module=self.webpackChunk_wintercms_wn_system_module||[]).push([[988],{26:function(){function e(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function t(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?e(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}if(void 0===window.Snowboard)throw new Error("Snowboard must be loaded in order to use the Request plugin.");class o extends Snowboard.PluginBase{construct(e,t,s){if("string"==typeof e){const t=document.querySelector(e);if(null===t)throw new Error(`No element was found with the given selector: ${e}`);this.element=t}else this.element=e;if(this.handler=t,this.options=s||{},this.fetchOptions={},this.responseData=null,this.responseError=null,this.cancelled=!1,this.checkRequest(),this.snowboard.globalEvent("ajaxSetup",this)){if(this.element){const e=new Event("ajaxSetup",{cancelable:!0});if(e.request=this,this.element.dispatchEvent(e),e.defaultPrevented)return void(this.cancelled=!0)}this.doClientValidation()?this.confirm?this.doConfirm().then((e=>{e&&this.doAjax().then((e=>{if(e.cancelled)return this.cancelled=!0,void this.complete();this.responseData=e,this.processUpdate(e).then((()=>{!1===e.X_WINTER_SUCCESS?this.processError(e):this.processResponse(e)}))}),(e=>{this.responseError=e,this.processError(e)}))})):this.doAjax().then((e=>{if(e.cancelled)return this.cancelled=!0,void this.complete();this.responseData=e,this.processUpdate(e).then((()=>{!1===e.X_WINTER_SUCCESS?this.processError(e):this.processResponse(e)}))}),(e=>{this.responseError=e,this.processError(e)})):this.cancelled=!0}else this.cancelled=!0}dependencies(){return["cookie","jsonParser"]}checkRequest(){if(this.element&&this.element instanceof Element==!1)throw new Error("The element provided must be an Element instance");if(void 0===this.handler)throw new Error("The AJAX handler name is not specified.");if(!this.handler.match(/^(?:\w+:{2})?on*/))throw new Error('Invalid AJAX handler name. The correct handler name format is: "onEvent".')}getFetch(){return this.fetchOptions=void 0!==this.options.fetchOptions&&"object"==typeof this.options.fetchOptions?this.options.fetchOptions:{method:"POST",headers:this.headers,body:this.data,redirect:"follow",mode:"same-origin"},this.snowboard.globalEvent("ajaxFetchOptions",this.fetchOptions,this),fetch(this.url,this.fetchOptions)}doClientValidation(){return!0!==this.options.browserValidate||!this.form||!1!==this.form.checkValidity()||(this.form.reportValidity(),!1)}doAjax(){if(!1===this.snowboard.globalEvent("ajaxBeforeSend",this))return Promise.resolve({cancelled:!0});const e=new Promise(((e,s)=>{this.getFetch().then((o=>{o.ok||406===o.status?o.headers.has("Content-Type")&&o.headers.get("Content-Type").includes("/json")?o.json().then((s=>{e(t(t({},s),{},{X_WINTER_SUCCESS:406!==o.status,X_WINTER_RESPONSE_CODE:o.status}))}),(e=>{s(this.renderError(`Unable to parse JSON response: ${e}`))})):o.text().then((t=>{e(t)}),(e=>{s(this.renderError(`Unable to process response: ${e}`))})):o.headers.has("Content-Type")&&o.headers.get("Content-Type").includes("/json")?o.json().then((e=>{s(this.renderError(e.message,e.exception,e.file,e.line,e.trace))}),(e=>{s(this.renderError(`Unable to parse JSON response: ${e}`))})):o.text().then((e=>{s(this.renderError(e))}),(e=>{s(this.renderError(`Unable to process response: ${e}`))}))}),(e=>{s(this.renderError(`Unable to retrieve a response from the server: ${e}`))}))}));if(this.snowboard.globalEvent("ajaxStart",e,this),this.element){const t=new Event("ajaxPromise");t.promise=e,this.element.dispatchEvent(t)}return e}processUpdate(e){return new Promise(((t,s)=>{if("function"==typeof this.options.beforeUpdate&&!1===this.options.beforeUpdate.apply(this,[e]))return void s();const o={};if(Object.entries(e).forEach((e=>{const[t,s]=e;"X_WINTER"!==t.substr(0,8)&&(o[t]=s)})),0===Object.keys(o).length)return void(e.X_WINTER_ASSETS?this.processAssets(e.X_WINTER_ASSETS).then((()=>{t()}),(()=>{s()})):t());this.snowboard.globalPromiseEvent("ajaxBeforeUpdate",e,this).then((async()=>{e.X_WINTER_ASSETS&&await this.processAssets(e.X_WINTER_ASSETS),this.doUpdate(o).then((()=>{window.requestAnimationFrame((()=>t()))}),(()=>{s()}))}),(()=>{s()}))}))}doUpdate(e){return new Promise((t=>{const s=[];Object.entries(e).forEach((e=>{const[t,o]=e;let r=this.options.update&&this.options.update[t]?this.options.update[t]:t,n="replace";"@"===r.substr(0,1)?(n="append",r=r.substr(1)):"^"===r.substr(0,1)&&(n="prepend",r=r.substr(1));const i=document.querySelectorAll(r);i.length>0&&i.forEach((e=>{switch(n){case"append":e.innerHTML+=o;break;case"prepend":e.innerHTML=o+e.innerHTML;break;default:e.innerHTML=o}s.push(e),this.snowboard.globalEvent("ajaxUpdate",e,o,this);const t=new Event("ajaxUpdate");t.content=o,e.dispatchEvent(t)}))})),this.snowboard.globalEvent("ajaxUpdateComplete",s,this),t()}))}processResponse(e){if((!this.options.success||"function"!=typeof this.options.success||!1!==this.options.success(this.responseData,this))&&!1!==this.snowboard.globalEvent("ajaxSuccess",this.responseData,this)){if(this.element){const e=new Event("ajaxDone",{cancelable:!0});if(e.responseData=this.responseData,e.request=this,this.element.dispatchEvent(e),e.defaultPrevented)return}this.flash&&e.X_WINTER_FLASH_MESSAGES&&this.processFlashMessages(e.X_WINTER_FLASH_MESSAGES),this.redirect||e.X_WINTER_REDIRECT?this.processRedirect(this.redirect||e.X_WINTER_REDIRECT):this.complete()}}processError(e){if((!this.options.error||"function"!=typeof this.options.error||!1!==this.options.error(this.responseError,this))&&!1!==this.snowboard.globalEvent("ajaxError",this.responseError,this)){if(this.element){const e=new Event("ajaxFail",{cancelable:!0});if(e.responseError=this.responseError,e.request=this,this.element.dispatchEvent(e),e.defaultPrevented)return}e instanceof Error?this.processErrorMessage(e.message):(e.X_WINTER_ERROR_FIELDS&&this.processValidationErrors(e.X_WINTER_ERROR_FIELDS),e.X_WINTER_ERROR_MESSAGE&&this.processErrorMessage(e.X_WINTER_ERROR_MESSAGE)),this.complete()}}processRedirect(e){"function"==typeof this.options.handleRedirectResponse&&!1===this.options.handleRedirectResponse.apply(this,[e])||!1!==this.snowboard.globalEvent("ajaxRedirect",e,this)&&(window.addEventListener("popstate",(()=>{if(this.element){const e=document.createEvent("CustomEvent");e.eventName="ajaxRedirected",this.element.dispatchEvent(e)}}),{once:!0}),window.location.assign(e))}processErrorMessage(e){"function"==typeof this.options.handleErrorMessage&&!1===this.options.handleErrorMessage.apply(this,[e])||!1!==this.snowboard.globalEvent("ajaxErrorMessage",e,this)&&window.alert(e)}processFlashMessages(e){"function"==typeof this.options.handleFlashMessages&&!1===this.options.handleFlashMessages.apply(this,[e])||this.snowboard.globalEvent("ajaxFlashMessages",e,this)}processValidationErrors(e){"function"==typeof this.options.handleValidationErrors&&!1===this.options.handleValidationErrors.apply(this,[this.form,e])||this.snowboard.globalEvent("ajaxValidationErrors",this.form,e,this)}processAssets(e){return this.snowboard.globalPromiseEvent("ajaxLoadAssets",e)}async doConfirm(){if("function"==typeof this.options.handleConfirmMessage)return!1!==this.options.handleConfirmMessage.apply(this,[this.confirm]);if(0===this.snowboard.listensToEvent("ajaxConfirmMessage").length)return window.confirm(this.confirm);const e=this.snowboard.globalPromiseEvent("ajaxConfirmMessage",this.confirm,this);try{if(await e)return!0}catch(e){return!1}return!1}complete(){if(this.options.complete&&"function"==typeof this.options.complete&&this.options.complete(this.responseData,this),this.snowboard.globalEvent("ajaxDone",this.responseData,this),this.element){const e=new Event("ajaxAlways");e.request=this,e.responseData=this.responseData,e.responseError=this.responseError,this.element.dispatchEvent(e)}this.destruct()}get form(){return this.options.form?"string"==typeof this.options.form?document.querySelector(this.options.form):this.options.form:this.element?"FORM"===this.element.tagName?this.element:this.element.closest("form"):null}get context(){return{handler:this.handler,options:this.options}}get headers(){const e={"X-Requested-With":"XMLHttpRequest","X-WINTER-REQUEST-HANDLER":this.handler,"X-WINTER-REQUEST-PARTIALS":this.extractPartials(this.options.update||[])};return this.flash&&(e["X-WINTER-REQUEST-FLASH"]=1),this.xsrfToken&&(e["X-XSRF-TOKEN"]=this.xsrfToken),e}get loading(){return this.options.loading||!1}get url(){return this.options.url||window.location.href}get redirect(){return this.options.redirect&&this.options.redirect.length?this.options.redirect:null}get flash(){return this.options.flash||!1}get files(){return!0===this.options.files&&(void 0!==FormData||(this.snowboard.debug("This browser does not support file uploads"),!1))}get xsrfToken(){return this.snowboard.cookie().get("XSRF-TOKEN")}get data(){const e="object"==typeof this.options.data?this.options.data:{},t=new FormData(this.form||void 0);return Object.keys(e).length>0&&Object.entries(e).forEach((e=>{const[s,o]=e;t.append(s,o)})),t}get confirm(){return this.options.confirm||!1}extractPartials(e){return Object.keys(e).join("&")}renderError(e,t,s,o,r){const n=new Error(e);return n.exception=t||null,n.file=s||null,n.line=o||null,n.trace=r||[],n}}Snowboard.addPlugin("request",o)}},function(e){var t;t=26,e(e.s=t)}]);