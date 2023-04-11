import{c as Xe}from"./sanity-68843429.js";function qe(j,$){for(var y=0;y<$.length;y++){const T=$[y];if(typeof T!="string"&&!Array.isArray(T)){for(const _ in T)if(_!=="default"&&!(_ in j)){const h=Object.getOwnPropertyDescriptor(T,_);h&&Object.defineProperty(j,_,h.get?h:{enumerable:!0,get:()=>T[_]})}}}return Object.freeze(Object.defineProperty(j,Symbol.toStringTag,{value:"Module"}))}var ee={},Ue={get exports(){return ee},set exports(j){ee=j}};/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */(function(j,$){(function(y){var T=y.setTimeout,_=y.clearTimeout,h=y.XMLHttpRequest,ue=y.XDomainRequest,ce=y.ActiveXObject,K=y.EventSource,I=y.document,Ae=y.Promise,Z=y.fetch,le=y.Response,J=y.TextDecoder,ve=y.TextEncoder,te=y.AbortController;if(typeof window<"u"&&typeof I<"u"&&!("readyState"in I)&&I.body==null&&(I.readyState="loading",window.addEventListener("load",function(e){I.readyState="complete"},!1)),h==null&&ce!=null&&(h=function(){return new ce("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function r(){}return r.prototype=e,new r}),Date.now||(Date.now=function(){return new Date().getTime()}),te==null){var De=Z;Z=function(e,r){var n=r.signal;return De(e,{headers:r.headers,credentials:r.credentials,cache:r.cache}).then(function(t){var i=t.body.getReader();return n._reader=i,n._aborted&&n._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return i}}}})},te=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function he(){this.bitsNeeded=0,this.codePoint=0}he.prototype.decode=function(e){function r(d,u,o){if(o===1)return d>=128>>u&&d<<u<=2047;if(o===2)return d>=2048>>u&&d<<u<=55295||d>=57344>>u&&d<<u<=65535;if(o===3)return d>=65536>>u&&d<<u<=1114111;throw new Error}function n(d,u){if(d===6*1)return u>>6>15?3:u>31?2:1;if(d===6*2)return u>15?3:2;if(d===6*3)return 3;throw new Error}for(var t=65533,i="",a=this.bitsNeeded,s=this.codePoint,c=0;c<e.length;c+=1){var f=e[c];a!==0&&(f<128||f>191||!r(s<<6|f&63,a-6,n(a,s)))&&(a=0,s=t,i+=String.fromCharCode(s)),a===0?(f>=0&&f<=127?(a=0,s=f):f>=192&&f<=223?(a=6*1,s=f&31):f>=224&&f<=239?(a=6*2,s=f&15):f>=240&&f<=247?(a=6*3,s=f&7):(a=0,s=t),a!==0&&!r(s,a,n(a,s))&&(a=0,s=t)):(a-=6,s=s<<6|f&63),a===0&&(s<=65535?i+=String.fromCharCode(s):(i+=String.fromCharCode(55296+(s-65535-1>>10)),i+=String.fromCharCode(56320+(s-65535-1&1023))))}return this.bitsNeeded=a,this.codePoint=s,i};var xe=function(){try{return new J().decode(new ve().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(J==null||ve==null||!xe())&&(J=he);var R=function(){};function M(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=R,this.onload=R,this.onerror=R,this.onreadystatechange=R,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=R}M.prototype.open=function(e,r){this._abort(!0);var n=this,t=this._xhr,i=1,a=0;this._abort=function(o){n._sendTimeout!==0&&(_(n._sendTimeout),n._sendTimeout=0),(i===1||i===2||i===3)&&(i=4,t.onload=R,t.onerror=R,t.onabort=R,t.onprogress=R,t.onreadystatechange=R,t.abort(),a!==0&&(_(a),a=0),o||(n.readyState=4,n.onabort(null),n.onreadystatechange())),i=0};var s=function(){if(i===1){var o=0,l="",x=void 0;if("contentType"in t)o=200,l="OK",x=t.contentType;else try{o=t.status,l=t.statusText,x=t.getResponseHeader("Content-Type")}catch{o=0,l="",x=void 0}o!==0&&(i=2,n.readyState=2,n.status=o,n.statusText=l,n._contentType=x,n.onreadystatechange())}},c=function(){if(s(),i===2||i===3){i=3;var o="";try{o=t.responseText}catch{}n.readyState=3,n.responseText=o,n.onprogress()}},f=function(o,l){if((l==null||l.preventDefault==null)&&(l={preventDefault:R}),c(),i===1||i===2||i===3){if(i=4,a!==0&&(_(a),a=0),n.readyState=4,o==="load")n.onload(l);else if(o==="error")n.onerror(l);else if(o==="abort")n.onabort(l);else throw new TypeError;n.onreadystatechange()}},d=function(o){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&f(t.responseText===""?"error":"load",o):t.readyState===3?"onprogress"in t||c():t.readyState===2&&s())},u=function(){a=T(function(){u()},500),t.readyState===3&&c()};"onload"in t&&(t.onload=function(o){f("load",o)}),"onerror"in t&&(t.onerror=function(o){f("error",o)}),"onabort"in t&&(t.onabort=function(o){f("abort",o)}),"onprogress"in t&&(t.onprogress=c),"onreadystatechange"in t&&(t.onreadystatechange=function(o){d(o)}),("contentType"in t||!("ontimeout"in h.prototype))&&(r+=(r.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,r,!0),"readyState"in t&&(a=T(function(){u()},0))},M.prototype.abort=function(){this._abort(!1)},M.prototype.getResponseHeader=function(e){return this._contentType},M.prototype.setRequestHeader=function(e,r){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,r)},M.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},M.prototype.send=function(){if((!("ontimeout"in h.prototype)||!("sendAsBinary"in h.prototype)&&!("mozAnon"in h.prototype))&&I!=null&&I.readyState!=null&&I.readyState!=="complete"){var e=this;e._sendTimeout=T(function(){e._sendTimeout=0,e.send()},4);return}var r=this._xhr;"withCredentials"in r&&(r.withCredentials=this.withCredentials);try{r.send(void 0)}catch(n){throw n}};function pe(e){return e.replace(/[A-Z]/g,function(r){return String.fromCharCode(r.charCodeAt(0)+32)})}function ye(e){for(var r=Object.create(null),n=e.split(`\r
`),t=0;t<n.length;t+=1){var i=n[t],a=i.split(": "),s=a.shift(),c=a.join(": ");r[pe(s)]=c}this._map=r}ye.prototype.get=function(e){return this._map[pe(e)]},h!=null&&h.HEADERS_RECEIVED==null&&(h.HEADERS_RECEIVED=2);function ge(){}ge.prototype.open=function(e,r,n,t,i,a,s){e.open("GET",i);var c=0;e.onprogress=function(){var d=e.responseText,u=d.slice(c);c+=u.length,n(u)},e.onerror=function(d){d.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===h.HEADERS_RECEIVED){var d=e.status,u=e.statusText,o=e.getResponseHeader("Content-Type"),l=e.getAllResponseHeaders();r(d,u,o,new ye(l))}},e.withCredentials=a;for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&e.setRequestHeader(f,s[f]);return e.send(),e};function Ee(e){this._headers=e}Ee.prototype.get=function(e){return this._headers.get(e)};function we(){}we.prototype.open=function(e,r,n,t,i,a,s){var c=null,f=new te,d=f.signal,u=new J;return Z(i,{headers:s,credentials:a?"include":"same-origin",signal:d,cache:"no-store"}).then(function(o){return c=o.body.getReader(),r(o.status,o.statusText,o.headers.get("Content-Type"),new Ee(o.headers)),new Ae(function(l,x){var z=function(){c.read().then(function(S){if(S.done)l(void 0);else{var E=u.decode(S.value,{stream:!0});n(E),z()}}).catch(function(S){x(S)})};z()})}).catch(function(o){if(o.name!=="AbortError")return o}).then(function(o){t(o)}),{abort:function(){c!=null&&c.cancel(),f.abort()}}};function V(){this._listeners=Object.create(null)}function me(e){T(function(){throw e},0)}V.prototype.dispatchEvent=function(e){e.target=this;var r=this._listeners[e.type];if(r!=null)for(var n=r.length,t=0;t<n;t+=1){var i=r[t];try{typeof i.handleEvent=="function"?i.handleEvent(e):i.call(this,e)}catch(a){me(a)}}},V.prototype.addEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];t==null&&(t=[],n[e]=t);for(var i=!1,a=0;a<t.length;a+=1)t[a]===r&&(i=!0);i||t.push(r)},V.prototype.removeEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];if(t!=null){for(var i=[],a=0;a<t.length;a+=1)t[a]!==r&&i.push(t[a]);i.length===0?delete n[e]:n[e]=i}};function X(e){this.type=e,this.target=void 0}function Te(e,r){X.call(this,e),this.data=r.data,this.lastEventId=r.lastEventId}Te.prototype=Object.create(X.prototype);function re(e,r){X.call(this,e),this.status=r.status,this.statusText=r.statusText,this.headers=r.headers}re.prototype=Object.create(X.prototype);function Se(e,r){X.call(this,e),this.error=r.error}Se.prototype=Object.create(X.prototype);var ne=-1,H=0,q=1,W=2,ae=-1,L=0,ie=1,Ce=2,Oe=3,Fe=/^text\/event\-stream(;.*)?$/i,Ne=1e3,Ie=18e6,oe=function(e,r){var n=e==null?r:parseInt(e,10);return n!==n&&(n=r),se(n)},se=function(e){return Math.min(Math.max(e,Ne),Ie)},U=function(e,r,n){try{typeof r=="function"&&r.call(e,n)}catch(t){me(t)}};function A(e,r){V.call(this),r=r||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,je(this,e,r)}function He(){return h!=null&&"withCredentials"in h.prototype||ue==null?new h:new ue}var Le=Z!=null&&le!=null&&"body"in le.prototype;function je(e,r,n){r=String(r);var t=!!n.withCredentials,i=n.lastEventIdQueryParameterName||"lastEventId",a=se(1e3),s=oe(n.heartbeatTimeout,45e3),c="",f=a,d=!1,u=0,o=n.headers||{},l=n.Transport,x=Le&&l==null?void 0:new M(l!=null?new l:He()),z=l!=null&&typeof l!="string"?new l:x==null?new we:new ge,S=void 0,E=0,D=ne,B="",Y="",O="",k="",w=L,fe=0,P=0,Me=function(p,v,C,b){if(D===H)if(p===200&&C!=null&&Fe.test(C)){D=q,d=Date.now(),f=a,e.readyState=q;var m=new re("open",{status:p,statusText:v,headers:b});e.dispatchEvent(m),U(e,e.onopen,m)}else{var g="";p!==200?(v&&(v=v.replace(/\s+/g," ")),g="EventSource's response has a status "+p+" "+v+" that is not 200. Aborting the connection."):g="EventSource's response has a Content-Type specifying an unsupported type: "+(C==null?"-":C.replace(/\s+/g," "))+". Aborting the connection.",de();var m=new re("error",{status:p,statusText:v,headers:b});e.dispatchEvent(m),U(e,e.onerror,m),console.error(g)}},Pe=function(p){if(D===q){for(var v=-1,C=0;C<p.length;C+=1){var b=p.charCodeAt(C);(b===`
`.charCodeAt(0)||b==="\r".charCodeAt(0))&&(v=C)}var m=(v!==-1?k:"")+p.slice(0,v+1);k=(v===-1?k:"")+p.slice(v+1),p!==""&&(d=Date.now(),u+=p.length);for(var g=0;g<m.length;g+=1){var b=m.charCodeAt(g);if(w===ae&&b===`
`.charCodeAt(0))w=L;else if(w===ae&&(w=L),b==="\r".charCodeAt(0)||b===`
`.charCodeAt(0)){if(w!==L){w===ie&&(P=g+1);var F=m.slice(fe,P-1),N=m.slice(P+(P<g&&m.charCodeAt(P)===" ".charCodeAt(0)?1:0),g);F==="data"?(B+=`
`,B+=N):F==="id"?Y=N:F==="event"?O=N:F==="retry"?(a=oe(N,a),f=a):F==="heartbeatTimeout"&&(s=oe(N,s),E!==0&&(_(E),E=T(function(){Q()},s)))}if(w===L){if(B!==""){c=Y,O===""&&(O="message");var G=new Te(O,{data:B.slice(1),lastEventId:Y});if(e.dispatchEvent(G),O==="open"?U(e,e.onopen,G):O==="message"?U(e,e.onmessage,G):O==="error"&&U(e,e.onerror,G),D===W)return}B="",O=""}w=b==="\r".charCodeAt(0)?ae:L}else w===L&&(fe=g,w=ie),w===ie?b===":".charCodeAt(0)&&(P=g+1,w=Ce):w===Ce&&(w=Oe)}}},_e=function(p){if(D===q||D===H){D=ne,E!==0&&(_(E),E=0),E=T(function(){Q()},f),f=se(Math.min(a*16,f*2)),e.readyState=H;var v=new Se("error",{error:p});e.dispatchEvent(v),U(e,e.onerror,v),p!=null&&console.error(p)}},de=function(){D=W,S!=null&&(S.abort(),S=void 0),E!==0&&(_(E),E=0),e.readyState=W},Q=function(){if(E=0,D!==ne){if(!d&&S!=null)_e(new Error("No activity within "+s+" milliseconds. "+(D===H?"No response received.":u+" chars received.")+" Reconnecting.")),S!=null&&(S.abort(),S=void 0);else{var p=Math.max((d||Date.now())+s-Date.now(),1);d=!1,E=T(function(){Q()},p)}return}d=!1,u=0,E=T(function(){Q()},s),D=H,B="",O="",Y=c,k="",fe=0,P=0,w=L;var v=r;if(r.slice(0,5)!=="data:"&&r.slice(0,5)!=="blob:"&&c!==""){var C=r.indexOf("?");v=C===-1?r:r.slice(0,C+1)+r.slice(C+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(N,G){return G===i?"":N}),v+=(r.indexOf("?")===-1?"?":"&")+i+"="+encodeURIComponent(c)}var b=e.withCredentials,m={};m.Accept="text/event-stream";var g=e.headers;if(g!=null)for(var F in g)Object.prototype.hasOwnProperty.call(g,F)&&(m[F]=g[F]);try{S=z.open(x,Me,Pe,_e,v,b,m)}catch(N){throw de(),N}};e.url=r,e.readyState=H,e.withCredentials=t,e.headers=o,e._close=de,Q()}A.prototype=Object.create(V.prototype),A.prototype.CONNECTING=H,A.prototype.OPEN=q,A.prototype.CLOSED=W,A.prototype.close=function(){this._close()},A.CONNECTING=H,A.OPEN=q,A.CLOSED=W,A.prototype.withCredentials=void 0;var be=K;h!=null&&(K==null||!("withCredentials"in K.prototype))&&(be=A),function(e){{var r=e($);r!==void 0&&(j.exports=r)}}(function(e){e.EventSourcePolyfill=A,e.NativeEventSource=K,e.EventSource=be})})(typeof globalThis>"u"?typeof window<"u"?window:typeof self<"u"?self:Xe:globalThis)})(Ue,ee);var Re=ee.EventSourcePolyfill;const Ge=qe({__proto__:null,default:Re},[Re]);export{Ge as b};