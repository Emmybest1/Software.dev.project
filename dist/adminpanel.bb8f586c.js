parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hkZP":[function(require,module,exports) {
!function(){var a=document.querySelector(".studentsInfoContainer");db.collection("EuasPanky").onSnapshot(function(n){n.docChanges().map(function(n){var e,t,c;"added"==n.type&&(e=n.doc.data(),t=n.doc.id,c='\n      <ul data-id="'.concat(t,'" class="studentDetailsWrapper">\n          <li class="type">Submission Type: ').concat(e.category,' </li>\n          <li class="departmen">Student Department: ').concat(e.department,' </li>\n          <li class="name">Submitted By: ').concat(e.name,' </li>\n          <li class="email">Student Email: ').concat(e.email,' </li>\n          <li class="message">Message: ').concat(e.message,' </li>\n          <li class="time">Submission Time: ').concat(e.created_at.toDate()," </li>\n      </ul>"),a.innerHTML+=c,console.log(n.doc.data(),n.doc.id))})})}();
},{}]},{},["hkZP"], null)
//# sourceMappingURL=/adminpanel.bb8f586c.js.map