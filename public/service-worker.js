parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"AaGI":[function(require,module,exports) {
const e="cache-v1",t=["./app.js"];self.addEventListener("install",c=>{console.log("Event: Install"),c.waitUntil(caches.open(e).then(e=>e.addAll(t).then(()=>{console.log("All files cached")})).catch(e=>{console.log("Error occured while caching ",e)}))}),self.addEventListener("activate",t=>{console.log("Event: Activate"),t.waitUntil(caches.keys().then(t=>Promise.all(t.map(t=>{if(t!==e)return caches.delete(t)}))))}),self.addEventListener("fetch",t=>{console.log("Event: Fetch");const{request:c}=t;t.respondWith(caches.match(c).then(t=>t||fetch(c).then(n=>{const l=n.clone();return caches.open(e).then(e=>{e.put(c,l)}),t})))});
},{}]},{},["AaGI"], null)
//# sourceMappingURL=/service-worker.map