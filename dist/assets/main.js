(()=>{function Qn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function rp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Xi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Va={duration:.5,overwrite:!1,delay:0},dc,ci,Rt,dn=1e8,_t=1/dn,rc=Math.PI*2,Xx=rc/4,qx=0,sp=Math.sqrt,Yx=Math.cos,Zx=Math.sin,ti=function(e){return typeof e=="string"},Bt=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},vl=function(e){return typeof e>"u"},Fn=function(e){return typeof e=="object"},Wi=function(e){return e!==!1},hc=function(){return typeof window<"u"},ll=function(e){return Bt(e)||ti(e)},ap=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vi=Array.isArray,Jx=/random\([^)]+\)/g,Kx=/,\s*/g,Kh=/(?:-?\.?\d|\.)+/gi,pc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$u=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mc=/[+-]=-?[.\d]+/,$x=/[^,'"\[\]\s]+/gi,Qx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,Dn,sc,gc,ji={},dl={},op,lp=function(e){return(dl=Fs(e,ji))&&yi},yl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ha=function(e,t){return!t&&console.warn(e)},fp=function(e,t){return e&&(ji[e]=t)&&dl&&(dl[e]=t)||ji},Wa=function(){return 0},jx={suppressEvents:!0,isStart:!0,kill:!1},fl={suppressEvents:!0,kill:!1},e0={suppressEvents:!0},xc={},Tr=[],ac={},up,Vi={},Qu={},$h=30,ul=[],_c="",vc=function(e){var t=e[0],i,n;if(Fn(t)||Bt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=ul.length;n--&&!ul[n].targetTest(t););i=ul[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new bc(e[n],i)))||e.splice(n,1);return e},Ar=function(e){return e._gsap||vc(hn(e))[0]._gsap},yc=function(e,t,i){return(i=e[t])&&Bt(i)?e[t]():vl(i)&&e.getAttribute&&e.getAttribute(t)||i},Ii=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},ss=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},t0=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},hl=function(){var e=Tr.length,t=Tr.slice(0),i,n;for(ac={},Tr.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Sc=function(e){return!!(e._initted||e._startAt||e.add)},cp=function(e,t,i,n){Tr.length&&!ci&&hl(),e.render(t,i,n||!!(ci&&t<0&&Sc(e))),Tr.length&&!ci&&hl()},dp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match($x).length<2?t:ti(e)?e.trim():e},hp=function(e){return e},en=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},i0=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Fs=function(e,t){for(var i in t)e[i]=t[i];return e},Qh=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Fn(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},pl=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},ka=function(e){var t=e.parent||Dt,i=e.keyframes?i0(vi(e.keyframes)):en;if(Wi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},n0=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},pp=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},Sl=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},Er=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ts=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},r0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},oc=function(e,t,i,n){return e._startAt&&(ci?e._startAt.revert(fl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},s0=function r(e){return!e||e._ts&&r(e.parent)},jh=function(e){return e._repeat?Us(e._tTime,e=e.duration()+e._rDelay)*e:0},Us=function(e,t){var i=Math.floor(e=Lt(e/t));return e&&i===e?i-1:i},ml=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ml=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},bl=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Lt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ml(e),i._dirty||ts(i,e)),e},mp=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ml(e.rawTime(),t),(!t._dur||Za(0,t.totalDuration(),i)-t._tTime>_t)&&t.render(i,!0)),ts(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-_t}},Nn=function(e,t,i,n){return t.parent&&Er(t),t._start=Lt((er(i)?i:!i&&gl(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:i||e!==Dt?cn(e,i,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pp(e,t,"_first","_last",e._sort?"_start":0),gl(t)||(e._recent=t),n||mp(e,t),e._ts<0&&bl(e,e._tTime),e},gp=function(e,t){return(ji.ScrollTrigger||yl("scrollTrigger",t))&&ji.ScrollTrigger.create(t,e)},xp=function(e,t,i,n,s){if(Ac(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!ci&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&up!==Hi.frame)return Tr.push(e),e._lazy=[s,n],1},a0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},gl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},o0=function(e,t,i,n){var s=e.ratio,a=t<0||!t&&(!e._start&&a0(e)&&!(!e._initted&&gl(e))||(e._ts<0||e._dp._ts<0)&&!gl(e))?0:1,o=e._rDelay,l=0,f,u,h;if(o&&e._repeat&&(l=Za(0,e._tDur,t),u=Us(l,o),e._yoyo&&u&1&&(a=1-a),u!==Us(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||ci||n||e._zTime===_t||!t&&e._zTime){if(!e._initted&&xp(e,t,n,i,l))return;for(h=e._zTime,e._zTime=t||(i?_t:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,f=e._pt;f;)f.r(a,f.d),f=f._next;t<0&&oc(e,t,i,!0),e._onUpdate&&!i&&Qi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Qi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Er(e,1),!i&&!ci&&(Qi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},l0=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Os=function(e,t,i,n){var s=e._repeat,a=Lt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Lt(a*(s+1)+e._rDelay*s):a,o>0&&!n&&bl(e,e._tTime=e._tDur*o),e.parent&&Ml(e),i||ts(e.parent,e),e},ep=function(e){return e instanceof _i?ts(e):Os(e,e._dur)},f0={_start:0,endTime:Wa,totalDuration:Wa},cn=function r(e,t,i){var n=e.labels,s=e._recent||f0,a=e.duration()>=dn?s.endTime(!1):e._dur,o,l,f;return ti(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),f=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(f?(o<0?s:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),f&&i&&(l=l/100*(vi(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},za=function(e,t,i){var n=er(t[1]),s=(n?2:1)+(e<2?0:1),a=t[s],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Wi(l.vars.inherit)&&l.parent;a.immediateRender=Wi(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Vt(t[0],a,t[s+1])},Cr=function(e,t){return e||e===0?t(e):t},Za=function(e,t,i){return i<e?e:i>t?t:i},di=function(e,t){return!ti(e)||!(t=Qx.exec(e))?"":t[1]},u0=function(e,t,i){return Cr(i,function(n){return Za(e,t,n)})},lc=[].slice,_p=function(e,t){return e&&Fn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fn(e[0]))&&!e.nodeType&&e!==Dn},c0=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return ti(n)&&!t||_p(n,1)?(s=i).push.apply(s,hn(n)):i.push(n)})||i},hn=function(e,t,i){return Rt&&!t&&Rt.selector?Rt.selector(e):ti(e)&&!i&&(sc||!Bs())?lc.call((t||gc).querySelectorAll(e),0):vi(e)?c0(e,i):_p(e)?lc.call(e,0):e?[e]:[]},fc=function(e){return e=hn(e)[0]||Ha("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return hn(t,i.querySelectorAll?i:i===e?Ha("Invalid scope")||gc.createElement("div"):e)}},vp=function(e){return e.sort(function(){return .5-Math.random()})},yp=function(e){if(Bt(e))return e;var t=Fn(e)?e:{each:e},i=is(t.ease),n=t.from||0,s=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,f=t.axis,u=n,h=n;return ti(n)?u=h={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(u=n[0],h=n[1]),function(d,c,x){var _=(x||t).length,p=a[_],m,v,A,y,T,w,g,M,P;if(!p){if(P=t.grid==="auto"?0:(t.grid||[1,dn])[1],!P){for(g=-dn;g<(g=x[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=a[_]=[],m=l?Math.min(P,_)*u-.5:n%P,v=P===dn?0:l?_*h/P-.5:n/P|0,g=0,M=dn,w=0;w<_;w++)A=w%P-m,y=v-(w/P|0),p[w]=T=f?Math.abs(f==="y"?y:A):sp(A*A+y*y),T>g&&(g=T),T<M&&(M=T);n==="random"&&vp(p),p.max=g-M,p.min=M,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(P>_?_-1:f?f==="y"?_/P:P:Math.max(P,_/P))||0)*(n==="edges"?-1:1),p.b=_<0?s-_:s,p.u=di(t.amount||t.each)||0,i=i&&_<0?w0(i):i}return _=(p[d]-p.min)/p.max||0,Lt(p.b+(i?i(_):_)*p.v)+p.u}},uc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Lt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(er(i)?0:di(i))}},Sp=function(e,t){var i=vi(e),n,s;return!i&&Fn(e)&&(n=i=e.radius||dn,e.values?(e=hn(e.values),(s=!er(e[0]))&&(n*=n)):e=uc(e.increment)),Cr(t,i?Bt(e)?function(a){return s=e(a),Math.abs(s-a)<=n?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),f=dn,u=0,h=e.length,d,c;h--;)s?(d=e[h].x-o,c=e[h].y-l,d=d*d+c*c):d=Math.abs(e[h]-o),d<f&&(f=d,u=h);return u=!n||f<=n?e[u]:a,s||u===a||er(a)?u:u+di(a)}:uc(e))},Mp=function(e,t,i,n){return Cr(vi(e)?!t:i===!0?!!(i=0):!n,function(){return vi(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},d0=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,a){return a(s)},n)}},h0=function(e,t){return function(i){return e(parseFloat(i))+(t||di(i))}},p0=function(e,t,i){return wp(e,t,0,1,i)},bp=function(e,t,i){return Cr(i,function(n){return e[~~t(n)]})},m0=function r(e,t,i){var n=t-e;return vi(e)?bp(e,r(0,e.length),t):Cr(i,function(s){return(n+(s-e)%n)%n+e})},g0=function r(e,t,i){var n=t-e,s=n*2;return vi(e)?bp(e,r(0,e.length-1),t):Cr(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>n?s-a:a)})},ks=function(e){return e.replace(Jx,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Kx);return Mp(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},wp=function(e,t,i,n,s){var a=t-e,o=n-i;return Cr(s,function(l){return i+((l-e)/a*o||0)})},x0=function r(e,t,i,n){var s=isNaN(e+t)?0:function(c){return(1-c)*e+c*t};if(!s){var a=ti(e),o={},l,f,u,h,d;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(vi(e)&&!vi(t)){for(u=[],h=e.length,d=h-2,f=1;f<h;f++)u.push(r(e[f-1],e[f]));h--,s=function(x){x*=h;var _=Math.min(d,~~x);return u[_](x-_)},i=t}else n||(e=Fs(vi(e)?[]:{},e));if(!u){for(l in t)wc.call(o,e,l,"get",t[l]);s=function(x){return Rc(x,o)||(a?e.p:e)}}}return Cr(i,s)},tp=function(e,t,i){var n=e.labels,s=dn,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Qi=function(e,t,i){var n=e.vars,s=n[t],a=Rt,o=e._ctx,l,f,u;if(s)return l=n[t+"Params"],f=n.callbackScope||e,i&&Tr.length&&hl(),o&&(Rt=o),u=l?s.apply(f,l):s.call(f),Rt=a,u},Oa=function(e){return Er(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ci),e.progress()<1&&Qi(e,"onInterrupt"),e},Ns,Tp=[],Ap=function(e){if(e)if(e=!e.name&&e.default||e,hc()||e.headless){var t=e.name,i=Bt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Wa,render:Rc,add:wc,kill:N0,modifier:D0,rawVars:0},a={targetTest:0,get:0,getSetter:wl,aliases:{},register:0};if(Bs(),e!==n){if(Vi[t])return;en(n,en(pl(e,s),a)),Fs(n.prototype,Fs(s,pl(e,a))),Vi[n.prop=t]=n,e.targetTest&&(ul.push(n),xc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}fp(t,n),e.register&&e.register(yi,n,Li)}else Tp.push(e)},bt=255,Ba={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},ju=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*bt+.5|0},Ep=function(e,t,i){var n=e?er(e)?[e>>16,e>>8&bt,e&bt]:0:Ba.black,s,a,o,l,f,u,h,d,c,x;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ba[e])n=Ba[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&bt,n&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(n=x=e.match(Kh),!t)l=+n[0]%360/360,f=+n[1]/100,u=+n[2]/100,a=u<=.5?u*(f+1):u+f-u*f,s=u*2-a,n.length>3&&(n[3]*=1),n[0]=ju(l+1/3,s,a),n[1]=ju(l,s,a),n[2]=ju(l-1/3,s,a);else if(~e.indexOf("="))return n=e.match(pc),i&&n.length<4&&(n[3]=1),n}else n=e.match(Kh)||Ba.transparent;n=n.map(Number)}return t&&!x&&(s=n[0]/bt,a=n[1]/bt,o=n[2]/bt,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=f=0:(c=h-d,f=u>.5?c/(2-h-d):c/(h+d),l=h===s?(a-o)/c+(a<o?6:0):h===a?(o-s)/c+2:(s-a)/c+4,l*=60),n[0]=~~(l+.5),n[1]=~~(f*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},Cp=function(e){var t=[],i=[],n=-1;return e.split(jn).forEach(function(s){var a=s.match(rs)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},ip=function(e,t,i){var n="",s=(e+n).match(jn),a=t?"hsla(":"rgba(",o=0,l,f,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Ep(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=Cp(e),l=i.c,l.join(n)!==u.c.join(n)))for(f=e.replace(jn,"1").split(rs),h=f.length-1;o<h;o++)n+=f[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!f)for(f=e.split(jn),h=f.length-1;o<h;o++)n+=f[o]+s[o];return n+f[h]},jn=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ba)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),_0=/hsl[a]?\(/,Mc=function(e){var t=e.join(" "),i;if(jn.lastIndex=0,jn.test(t))return i=_0.test(t),e[1]=ip(e[1],i),e[0]=ip(e[0],i,Cp(e[1])),!0},Xa,Hi=(function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,a=s,o=[],l,f,u,h,d,c,x=function _(p){var m=r()-n,v=p===!0,A,y,T,w;if((m>e||m<0)&&(i+=m-t),n+=m,T=n-i,A=T-a,(A>0||v)&&(w=++h.frame,d=T-h.time*1e3,h.time=T=T/1e3,a+=A+(A>=s?0:s-A),y=1),v||(l=f(_)),y)for(c=0;c<o.length;c++)o[c](T,d,w,p)};return h={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){op&&(!sc&&hc()&&(Dn=sc=window,gc=Dn.document||{},ji.gsap=yi,(Dn.gsapVersions||(Dn.gsapVersions=[])).push(yi.version),lp(dl||Dn.GreenSockGlobals||!Dn.gsap&&Dn||{}),Tp.forEach(Ap)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),f=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Xa=1,x(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Xa=0,f=Wa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,v){var A=m?function(y,T,w,g){p(y,T,w,g),h.remove(A)}:p;return h.remove(p),o[v?"unshift":"push"](A),Bs(),A},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&c>=m&&c--},_listeners:o},h})(),Bs=function(){return!Xa&&Hi.wake()},rt={},v0=/^[\d.\-M][\d.\-,\s]/,y0=/["']/g,S0=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,a=i.length,o,l,f;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,f=l.substr(0,o),t[n]=isNaN(f)?f.replace(y0,"").trim():+f,n=l.substr(o+1).trim();return t},M0=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},b0=function(e){var t=(e+"").split("("),i=rt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[S0(t[1])]:M0(e).split(",").map(dp)):rt._CE&&v0.test(e)?rt._CE("",e):i},w0=function(e){return function(t){return 1-e(1-t)}},is=function(e,t){return e&&(Bt(e)?e:rt[e]||b0(e))||t},as=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},a;return Ii(e,function(o){rt[o]=ji[o]=s,rt[a=o.toLowerCase()]=i;for(var l in s)rt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[o+"."+l]=s[l]}),s},Rp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ec=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/rc*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*Zx((u-a)*s)+1},l=e==="out"?o:e==="in"?function(f){return 1-o(1-f)}:Rp(o);return s=rc/s,l.config=function(f,u){return r(e,f,u)},l},tc=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Rp(i);return n.config=function(s){return r(e,s)},n};Ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;as(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;as("Elastic",ec("in"),ec("out"),ec());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(o){return o<t?r*o*o:o<i?r*Math.pow(o-1.5/e,2)+.75:o<n?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};as("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);as("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});as("Circ",function(r){return-(sp(1-r*r)-1)});as("Sine",function(r){return r===1?1:-Yx(r*Xx)+1});as("Back",tc("in"),tc("out"),tc());rt.SteppedEase=rt.steps=ji.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,a=1-_t;return function(o){return((n*Za(0,a,o)|0)+s)*i}}};Va.ease=rt["quad.out"];Ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return _c+=r+","+r+"Params,"});var bc=function(e,t){this.id=qx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:yc,this.set=t?t.getSetter:wl},qa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Os(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Xa||Hi.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Os(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Bs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(bl(this,i),!s._dp||s.parent||mp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Nn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===_t||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),cp(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+jh(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+jh(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?Us(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?ml(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-_t?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Za(-Math.abs(this._delay),o,s),n!==!1),Ml(this),r0(this)},e.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Bs(),this._ts=this._rts;var n=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==_t,a;if(s)for(this._tTime-=_t,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=n+_t){s=!1;break}a=a._next}this.totalTime(n,s)}return this},e.startTime=function(i){if(arguments.length){this._start=Lt(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Nn(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Wi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ml(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=e0);var n=ci;return ci=i,Sc(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ci=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ep(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,ep(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(cn(this,i),Wi(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Wi(n)),this._dur||(this._zTime=-_t),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-_t)},e.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this,s=n._prom;return new Promise(function(a){var o=Bt(i)?i:hp,l=function(){var u=n.then;n.then=null,s&&s(),Bt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=u),a(o),n.then=u};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){Oa(this)},r})();en(qa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var _i=(function(r){rp(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Wi(i.sortChildren),Dt&&Nn(i.parent||Dt,Qn(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&gp(Qn(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,a){return za(0,arguments,this),this},t.from=function(n,s,a){return za(1,arguments,this),this},t.fromTo=function(n,s,a,o){return za(2,arguments,this),this},t.set=function(n,s,a){return s.duration=0,s.parent=this,ka(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Vt(n,s,cn(this,a),1),this},t.call=function(n,s,a){return Nn(this,Vt.delayedCall(0,n,s),a)},t.staggerTo=function(n,s,a,o,l,f,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=f,a.onCompleteParams=u,a.parent=this,new Vt(n,a,cn(this,l)),this},t.staggerFrom=function(n,s,a,o,l,f,u){return a.runBackwards=1,ka(a).immediateRender=Wi(a.immediateRender),this.staggerTo(n,s,a,o,l,f,u)},t.staggerFromTo=function(n,s,a,o,l,f,u,h){return o.startAt=a,ka(o).immediateRender=Wi(o.immediateRender),this.staggerTo(n,s,o,l,f,u,h)},t.render=function(n,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,f=this._dur,u=n<=0?0:Lt(n),h=this._zTime<0!=n<0&&(this._initted||!f),d,c,x,_,p,m,v,A,y,T,w,g;if(this!==Dt&&u>l&&n>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&f&&(u+=this._time-o,n+=this._time-o),d=u,y=this._start,A=this._ts,m=!A,h&&(f||(o=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,p=f+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,s,a);if(d=Lt(u%p),u===l?(_=this._repeat,d=f):(T=Lt(u/p),_=~~T,_&&_===T&&(d=f,_--),d>f&&(d=f)),T=Us(this._tTime,p),!o&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),w&&_&1&&(d=f-d,g=1),_!==T&&!this._lock){var M=w&&T&1,P=M===(w&&_&1);if(_<T&&(M=!M),o=M?0:u%f?f:u,this._lock=1,this.render(o||(g?0:Lt(_*p)),s,!f)._lock=0,this._tTime=u,!s&&this.parent&&Qi(this,"onRepeat"),this.vars.repeatRefresh&&!g&&(this.invalidate()._lock=1,T=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,l=this._tDur,P&&(this._lock=2,o=M?f:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!g&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=l0(this,Lt(o),Lt(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&u&&f&&!s&&!T&&(Qi(this,"onStart"),this._tTime!==u))return this;if(d>=o&&n>=0)for(c=this._first;c;){if(x=c._next,(c._act||d>=c._start)&&c._ts&&v!==c){if(c.parent!==this)return this.render(n,s,a);if(c.render(c._ts>0?(d-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(d-c._start)*c._ts,s,a),d!==this._time||!this._ts&&!m){v=0,x&&(u+=this._zTime=-_t);break}}c=x}else{c=this._last;for(var C=n<0?n:d;c;){if(x=c._prev,(c._act||C<=c._end)&&c._ts&&v!==c){if(c.parent!==this)return this.render(n,s,a);if(c.render(c._ts>0?(C-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(C-c._start)*c._ts,s,a||ci&&Sc(c)),d!==this._time||!this._ts&&!m){v=0,x&&(u+=this._zTime=C?-_t:_t);break}}c=x}}if(v&&!s&&(this.pause(),v.render(d>=o?0:-_t)._zTime=d>=o?1:-1,this._ts))return this._start=y,Ml(this),this.render(n,s,a);this._onUpdate&&!s&&Qi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((n||!f)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Er(this,1),!s&&!(n<0&&!o)&&(u||o||!l)&&(Qi(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var a=this;if(er(s)||(s=cn(this,s,n)),!(n instanceof qa)){if(vi(n))return n.forEach(function(o){return a.add(o,s)}),this;if(ti(n))return this.addLabel(n,s);if(Bt(n))n=Vt.delayedCall(0,n);else return this}return this!==n?Nn(this,n,s):this},t.getChildren=function(n,s,a,o){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-dn);for(var l=[],f=this._first;f;)f._start>=o&&(f instanceof Vt?s&&l.push(f):(a&&l.push(f),n&&l.push.apply(l,f.getChildren(!0,s,a)))),f=f._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},t.remove=function(n){return ti(n)?this.removeLabel(n):Bt(n)?this.killTweensOf(n):(n.parent===this&&Sl(this,n),n===this._recent&&(this._recent=this._last),ts(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(Hi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=cn(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,a){var o=Vt.delayedCall(0,s||Wa,a);return o.data="isPause",this._hasPause=1,Nn(this,o,cn(this,n))},t.removePause=function(n){var s=this._first;for(n=cn(this,n);s;)s._start===n&&s.data==="isPause"&&Er(s),s=s._next},t.killTweensOf=function(n,s,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)wr!==o[l]&&o[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var a=[],o=hn(n),l=this._first,f=er(s),u;l;)l instanceof Vt?t0(l._targets,o)&&(f?(!wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(n,s){s=s||{};var a=this,o=cn(a,n),l=s,f=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,c,x=Vt.to(a,en({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(f&&"time"in f?f.time:a._time))/a.timeScale())||_t,onStart:function(){if(a.pause(),!c){var p=s.duration||Math.abs((o-(f&&"time"in f?f.time:a._time))/a.timeScale());x._dur!==p&&Os(x,p,0,1).render(x._time,!0,!0),c=1}u&&u.apply(x,h||[])}},s));return d?x.render(0):x},t.tweenFromTo=function(n,s,a){return this.tweenTo(s,en({startAt:{time:cn(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),tp(this,cn(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),tp(this,cn(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(n,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,f;for(n=Lt(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(s)for(f in l)l[f]>=a&&(l[f]+=n);return ts(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ts(this)},t.totalDuration=function(n){var s=0,a=this,o=a._last,l=dn,f,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(h=a.parent;o;)f=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Nn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Lt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=f;Os(a,a===Dt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(Dt._ts&&(cp(Dt,ml(n,Dt)),up=Hi.frame),Hi.frame>=$h){$h+=Xi.autoSleep||120;var s=Dt._first;if((!s||!s._ts)&&Xi.autoSleep&&Hi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hi.sleep()}}},e})(qa);en(_i.prototype,{_lock:0,_hasPause:0,_forcing:0});var T0=function(e,t,i,n,s,a,o){var l=new Li(this._pt,e,t,0,1,Cc,null,s),f=0,u=0,h,d,c,x,_,p,m,v;for(l.b=i,l.e=n,i+="",n+="",(m=~n.indexOf("random("))&&(n=ks(n)),a&&(v=[i,n],a(v,e,t),i=v[0],n=v[1]),d=i.match($u)||[];h=$u.exec(n);)x=h[0],_=n.substring(f,h.index),c?c=(c+1)%5:_.substr(-5)==="rgba("&&(c=1),x!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:x.charAt(1)==="="?ss(p,x)-p:parseFloat(x)-p,m:c&&c<4?Math.round:0},f=$u.lastIndex);return l.c=f<n.length?n.substring(f,n.length):"",l.fp=o,(mc.test(n)||m)&&(l.e=0),this._pt=l,l},wc=function(e,t,i,n,s,a,o,l,f,u){Bt(n)&&(n=n(s||0,e,a));var h=e[t],d=i!=="get"?i:Bt(h)?f?e[t.indexOf("set")||!Bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](f):e[t]():h,c=Bt(h)?f?P0:Ip:Ec,x;if(ti(n)&&(~n.indexOf("random(")&&(n=ks(n)),n.charAt(1)==="="&&(x=ss(d,n)+(di(d)||0),(x||x===0)&&(n=x))),!u||d!==n||cc)return!isNaN(d*n)&&n!==""?(x=new Li(this._pt,e,t,+d||0,n-(d||0),typeof h=="boolean"?L0:Lp,0,c),f&&(x.fp=f),o&&x.modifier(o,this,e),this._pt=x):(!h&&!(t in e)&&yl(t,n),T0.call(this,e,t,d,n,c,l||Xi.stringFilter,f))},A0=function(e,t,i,n,s){if(Bt(e)&&(e=Ga(e,s,t,i,n)),!Fn(e)||e.style&&e.nodeType||vi(e)||ap(e))return ti(e)?Ga(e,s,t,i,n):e;var a={},o;for(o in e)a[o]=Ga(e[o],s,t,i,n);return a},Tc=function(e,t,i,n,s,a){var o,l,f,u;if(Vi[e]&&(o=new Vi[e]).init(s,o.rawVars?t[e]:A0(t[e],n,s,a,i),i,n,a)!==!1&&(i._pt=l=new Li(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ns))for(f=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)f[o._props[u]]=l;return o},wr,cc,Ac=function r(e,t,i){var n=e.vars,s=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,f=n.onUpdate,u=n.runBackwards,h=n.yoyoEase,d=n.keyframes,c=n.autoRevert,x=e._dur,_=e._startAt,p=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:p,A=e._overwrite==="auto"&&!dc,y=e.timeline,T=n.easeReverse||h,w,g,M,P,C,N,D,G,I,B,H,O,te;if(y&&(!d||!s)&&(s="none"),e._ease=is(s,Va.ease),e._rEase=T&&(is(T)||e._ease),e._from=!y&&!!n.runBackwards,e._from&&(e.ratio=1),!y||d&&!n.stagger){if(G=p[0]?Ar(p[0]).harness:0,O=G&&n[G.prop],w=pl(n,xc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!c?_.render(-1,!0):_.revert(u&&x?fl:jx),_._lazy=0),a){if(Er(e._startAt=Vt.set(p,en({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Wi(l),startAt:null,delay:0,onUpdate:f&&function(){return Qi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ci||!o&&!c)&&e._startAt.revert(fl),o&&x&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&x&&!_){if(t&&(o=!1),M=en({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Wi(l),immediateRender:o,stagger:0,parent:m},w),O&&(M[G.prop]=O),Er(e._startAt=Vt.set(p,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ci?e._startAt.revert(fl):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&Wi(l)||l&&!x,g=0;g<p.length;g++){if(C=p[g],D=C._gsap||vc(p)[g]._gsap,e._ptLookup[g]=B={},ac[D.id]&&Tr.length&&hl(),H=v===p?g:v.indexOf(C),G&&(I=new G).init(C,O||w,e,H,v)!==!1&&(e._pt=P=new Li(e._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){B[W]=P}),I.priority&&(N=1)),!G||O)for(M in w)Vi[M]&&(I=Tc(M,w,e,H,C,v))?I.priority&&(N=1):B[M]=P=wc.call(e,C,M,"get",w[M],H,v,0,n.stringFilter);e._op&&e._op[g]&&e.kill(C,e._op[g]),A&&e._pt&&(wr=e,Dt.killTweensOf(C,B,e.globalTime(t)),te=!e.parent,wr=0),e._pt&&l&&(ac[D.id]=1)}N&&Pc(e),e._onInit&&e._onInit(e)}e._onUpdate=f,e._initted=(!e._op||e._pt)&&!te,d&&t<=0&&y.render(dn,!0,!0)},E0=function(e,t,i,n,s,a,o,l){var f=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,c;if(!f)for(f=e._ptCache[t]=[],d=e._ptLookup,c=e._targets.length;c--;){if(u=d[c][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return cc=1,e.vars[t]="+=0",Ac(e,o),cc=0,l?Ha(t+" not eligible for reset. Try splitting into individual properties"):1;f.push(u)}for(c=f.length;c--;)h=f[c],u=h._pt||h,u.s=(n||n===0)&&!s?n:u.s+(n||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=kt(i)+di(h.e)),h.b&&(h.b=u.s+di(h.b))},C0=function(e,t){var i=e[0]?Ar(e[0]).harness:0,n=i&&i.aliases,s,a,o,l;if(!n)return t;s=Fs({},t);for(a in n)if(a in s)for(l=n[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},R0=function(e,t,i,n){var s=t.ease||n||"power1.inOut",a,o;if(vi(t))o=i[e]||(i[e]=[]),t.forEach(function(l,f){return o.push({t:f/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ga=function(e,t,i,n,s){return Bt(e)?e.call(t,i,n,s):ti(e)&&~e.indexOf("random(")?ks(e):e},xl=_c+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Pp={};Ii(xl+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Pp[r]=1});xl=xl.split(",");var Vt=(function(r){rp(e,r);function e(i,n,s,a){var o;typeof n=="number"&&(s.duration=n,n=s,s=null),o=r.call(this,a?n:ka(n))||this;var l=o.vars,f=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,c=l.overwrite,x=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=n.parent||Dt,v=(vi(i)||ap(i)?er(i[0]):"length"in n)?[i]:hn(i),A,y,T,w,g,M,P,C;if(o._targets=v.length?vc(v):Ha("GSAP target "+i+" not found. https://gsap.com",!Xi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=c,x||d||ll(f)||ll(u)){n=o.vars;var N=n.easeReverse||n.yoyoEase;if(A=o.timeline=new _i({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:v}),A.kill(),A.parent=A._dp=Qn(o),A._start=0,d||ll(f)||ll(u)){if(w=v.length,P=d&&yp(d),Fn(d))for(g in d)~xl.indexOf(g)&&(C||(C={}),C[g]=d[g]);for(y=0;y<w;y++)T=pl(n,Pp),T.stagger=0,N&&(T.easeReverse=N),C&&Fs(T,C),M=v[y],T.duration=+Ga(f,Qn(o),y,M,v),T.delay=(+Ga(u,Qn(o),y,M,v)||0)-o._delay,!d&&w===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),A.to(M,T,P?P(y,M,v):0),A._ease=rt.none;A.duration()?f=u=0:o.timeline=0}else if(x){ka(en(A.vars.defaults,{ease:"none"})),A._ease=is(x.ease||n.ease||"none");var D=0,G,I,B;if(vi(x))x.forEach(function(H){return A.to(v,H,">")}),A.duration();else{T={};for(g in x)g==="ease"||g==="easeEach"||R0(g,x[g],T,x.easeEach);for(g in T)for(G=T[g].sort(function(H,O){return H.t-O.t}),D=0,y=0;y<G.length;y++)I=G[y],B={ease:I.e,duration:(I.t-(y?G[y-1].t:0))/100*f},B[g]=I.v,A.to(v,B,D),D+=B.duration;A.duration()<f&&A.to({},{duration:f-A.duration()})}}f||o.duration(f=A.duration())}else o.timeline=0;return c===!0&&!dc&&(wr=Qn(o),Dt.killTweensOf(v),wr=0),Nn(m,Qn(o),s),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(h||!f&&!x&&o._start===Lt(m._time)&&Wi(h)&&s0(Qn(o))&&m.data!=="nested")&&(o._tTime=-_t,o.render(Math.max(0,-u)||0)),p&&gp(Qn(o),p),o}var t=e.prototype;return t.render=function(n,s,a){var o=this._time,l=this._tDur,f=this._dur,u=n<0,h=n>l-_t&&!u?l:n<_t?0:n,d,c,x,_,p,m,v,A;if(!f)o0(this,n,s,a);else if(h!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,A=this.timeline,this._repeat){if(_=f+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+n,s,a);if(d=Lt(h%_),h===l?(x=this._repeat,d=f):(p=Lt(h/_),x=~~p,x&&x===p?(d=f,x--):d>f&&(d=f)),m=this._yoyo&&x&1,m&&(d=f-d),p=Us(this._tTime,_),d===o&&!a&&this._initted&&x===p)return this._tTime=h,this;x!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(Lt(_*x),!0).invalidate()._lock=0)}if(!this._initted){if(xp(this,u?n:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&x!==p))return this;if(f!==this._dur)return this.render(n,s,a)}if(this._rEase){var y=d<o;if(y!==this._inv){var T=y?o:f-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/f);if(this._from&&(this.ratio=v=1-v),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!p&&(Qi(this,"onStart"),this._tTime!==h))return this;for(c=this._pt;c;)c.r(v,c.d),c=c._next;A&&A.render(n<0?n:A._dur*A._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(u&&oc(this,n,s,a),Qi(this,"onUpdate")),this._repeat&&x!==p&&this.vars.onRepeat&&!s&&this.parent&&Qi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&oc(this,n,!0,!0),(n||!f)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Er(this,1),!s&&!(u&&!o)&&(h||o||m)&&(Qi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,a,o,l){Xa||Hi.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ac(this,f),u=this._ease(f/this._dur),E0(this,n,s,a,o,u,f,l)?this.resetTo(n,s,a,o,1):(bl(this,0),this.parent||pp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Oa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ci),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,wr&&wr.vars.overwrite!==!0)._first||Oa(this),this.parent&&a!==this.timeline.totalDuration()&&Os(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?hn(n):o,f=this._ptLookup,u=this._pt,h,d,c,x,_,p,m;if((!s||s==="all")&&n0(o,l))return s==="all"&&(this._pt=0),Oa(this);for(h=this._op=this._op||[],s!=="all"&&(ti(s)&&(_={},Ii(s,function(v){return _[v]=1}),s=_),s=C0(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){d=f[m],s==="all"?(h[m]=s,x=d,c={}):(c=h[m]=h[m]||{},x=s);for(_ in x)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Sl(this,p,"_pt"),delete d[_]),c!=="all"&&(c[_]=1)}return this._initted&&!this._pt&&u&&Oa(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return za(1,arguments)},e.delayedCall=function(n,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,s,a){return za(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,a){return Dt.killTweensOf(n,s,a)},e})(qa);en(Vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ii("staggerTo,staggerFrom,staggerFromTo",function(r){Vt[r]=function(){var e=new _i,t=lc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ec=function(e,t,i){return e[t]=i},Ip=function(e,t,i){return e[t](i)},P0=function(e,t,i,n){return e[t](n.fp,i)},I0=function(e,t,i){return e.setAttribute(t,i)},wl=function(e,t){return Bt(e[t])?Ip:vl(e[t])&&e.setAttribute?I0:Ec},Lp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},L0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cc=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Rc=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},D0=function(e,t,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(e,t,i),s=a},N0=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Sl(this,t,"_pt"):t.dep||(i=1),t=n;return!i},F0=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Pc=function(e){for(var t=e._pt,i,n,s,a;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=s},Li=(function(){function r(t,i,n,s,a,o,l,f,u){this.t=i,this.s=s,this.c=a,this.p=n,this.r=o||Lp,this.d=l||this,this.set=f||Ec,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=F0,this.m=i,this.mt=s,this.tween=n},r})();Ii(_c+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return xc[r]=1});ji.TweenMax=ji.TweenLite=Vt;ji.TimelineLite=ji.TimelineMax=_i;Dt=new _i({sortChildren:!1,defaults:Va,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xi.stringFilter=Mc;var ns=[],cl={},U0=[],np=0,O0=0,ic=function(e){return(cl[e]||U0).map(function(t){return t()})},Ya=function(){var e=Date.now(),t=[];e-np>2&&(ic("matchMediaInit"),ns.forEach(function(i){var n=i.queries,s=i.conditions,a,o,l,f;for(o in n)a=Dn.matchMedia(n[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,f=1);f&&(i.revert(),l&&t.push(i))}),ic("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),np=e,ic("matchMedia"))},Dp=(function(){function r(t,i){this.selector=i&&fc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=O0++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){Bt(i)&&(s=n,n=i,i=Bt);var a=this,o=function(){var f=Rt,u=a.selector,h;return f&&f!==a&&f.data.push(a),s&&(a.selector=fc(s)),Rt=a,h=n.apply(a,arguments),Bt(h)&&a._r.push(h),Rt=f,a.selector=u,a.isReverted=!1,h};return a.last=o,i===Bt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=Rt;Rt=null,i(this),Rt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof Vt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,f;l--;)f=s.data[l],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)f=s.data[l],f instanceof _i?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof Vt)&&f.revert&&f.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n){for(var a=ns.length;a--;)ns[a].id===this.id&&ns.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Ya):o.removeEventListener("change",Ya)}),this._mqs=null}},e.revert=function(i){this.kill(i||{})},r})(),B0=(function(){function r(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){Fn(i)||(i={matches:i});var a=new Dp(0,s||this.scope),o=a.conditions={},l,f,u;Rt&&!a.selector&&(a.selector=Rt.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(f in i)f==="all"?u=1:(l=Dn.matchMedia(i[f]),l&&(ns.indexOf(a)<0&&ns.push(a),(o[f]=l.matches)&&(u=1),l.addListener?l.addListener(Ya):l.addEventListener("change",Ya),(a._mqs||(a._mqs=[])).push(l)));return u&&n(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),_l={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Ap(n)})},timeline:function(e){return new _i(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,i,n){ti(e)&&(e=hn(e)[0]);var s=Ar(e||{}).get,a=i?hp:dp;return i==="native"&&(i=""),e&&(t?a((Vi[t]&&Vi[t].get||s)(e,t,i,n)):function(o,l,f){return a((Vi[o]&&Vi[o].get||s)(e,o,l,f))})},quickSetter:function(e,t,i){if(e=hn(e),e.length>1){var n=e.map(function(u){return yi.quickSetter(u,t,i)}),s=n.length;return function(u){for(var h=s;h--;)n[h](u)}}e=e[0]||{};var a=Vi[t],o=Ar(e),l=o.harness&&(o.harness.aliases||{})[t]||t,f=a?function(u){var h=new a;Ns._pt=0,h.init(e,i?u+i:u,Ns,0,[e]),h.render(1,h),Ns._pt&&Rc(1,Ns)}:o.set(e,l);return a?f:function(u){return f(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var n,s=yi.to(e,en((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,f,u){return s.resetTo(t,l,f,u)};return a.tween=s,a},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=is(e.ease,Va.ease)),Qh(Va,e||{})},config:function(e){return Qh(Xi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!Vi[o]&&!ji[o]&&Ha(t+" effect requires "+o+" plugin.")}),Qu[t]=function(o,l,f){return i(hn(o),en(l||{},s),f)},a&&(_i.prototype[t]=function(o,l,f){return this.add(Qu[t](o,Fn(l)?l:(f=l)&&{},this),f)})},registerEase:function(e,t){rt[e]=is(t)},parseEase:function(e,t){return arguments.length?is(e,t):rt},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new _i(e),n,s;for(i.smoothChildTiming=Wi(e.smoothChildTiming),Dt.remove(i),i._dp=0,i._time=i._tTime=Dt._time,n=Dt._first;n;)s=n._next,(t||!(!n._dur&&n instanceof Vt&&n.vars.onComplete===n._targets[0]))&&Nn(i,n,n._start-n._delay),n=s;return Nn(Dt,i,0),i},context:function(e,t){return e?new Dp(e,t):Rt},matchMedia:function(e){return new B0(e)},matchMediaRefresh:function(){return ns.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Ya()},addEventListener:function(e,t){var i=cl[e]||(cl[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=cl[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:m0,wrapYoyo:g0,distribute:yp,random:Mp,snap:Sp,normalize:p0,getUnit:di,clamp:u0,splitColor:Ep,toArray:hn,selector:fc,mapRange:wp,pipe:d0,unitize:h0,interpolate:x0,shuffle:vp},install:lp,effects:Qu,ticker:Hi,updateRoot:_i.updateRoot,plugins:Vi,globalTimeline:Dt,core:{PropTween:Li,globals:fp,Tween:Vt,Timeline:_i,Animation:qa,getCache:Ar,_removeLinkedListItem:Sl,reverting:function(){return ci},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return dc=e}}};Ii("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _l[r]=Vt[r]});Hi.add(_i.updateRoot);Ns=_l.to({},{duration:0});var k0=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},z0=function(e,t){var i=e._targets,n,s,a;for(n in t)for(s=i.length;s--;)a=e._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=k0(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[s],n))},nc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,s,a){a._onInit=function(o){var l,f;if(ti(s)&&(l={},Ii(s,function(u){return l[u]=1}),s=l),t){l={};for(f in s)l[f]=t(s[f]);s=l}z0(o,s)}}}},yi=_l.registerPlugin({name:"attr",init:function(e,t,i,n,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)ci?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},nc("roundProps",uc),nc("modifiers"),nc("snap",Sp))||_l;Vt.version=_i.version=yi.version="3.15.1";op=1;hc()&&Bs();var G0=rt.Power0,V0=rt.Power1,H0=rt.Power2,W0=rt.Power3,X0=rt.Power4,q0=rt.Linear,Y0=rt.Quad,Z0=rt.Cubic,J0=rt.Quart,K0=rt.Quint,$0=rt.Strong,Q0=rt.Elastic,j0=rt.Back,e_=rt.SteppedEase,t_=rt.Bounce,i_=rt.Sine,n_=rt.Expo,r_=rt.Circ;var Np,Rr,Gs,Uc,us,s_,Fp,Oc,a_=function(){return typeof window<"u"},ir={},fs=180/Math.PI,Vs=Math.PI/180,zs=Math.atan2,Up=1e8,Bc=/([A-Z])/g,o_=/(left|right|width|margin|padding|x)/i,l_=/[\s,\(]\S/,Un={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},f_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},u_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},c_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},d_=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Wp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},h_=function(e,t,i){return e.style[t]=i},p_=function(e,t,i){return e.style.setProperty(t,i)},m_=function(e,t,i){return e._gsap[t]=i},g_=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},x_=function(e,t,i,n,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},__=function(e,t,i,n,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Nt="transform",qi=Nt+"Origin",v_=function r(e,t){var i=this,n=this.target,s=n.style,a=n._gsap;if(e in ir&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Un[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=tr(n,o)}):this.tfm[e]=a.x?a[e]:tr(n,e),e===qi&&(this.tfm.zOrigin=a.zOrigin);else return Un.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(Nt)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(qi,t,"")),e=Nt}(s||t)&&this.props.push(e,t,s[e])},qp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},y_=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Bc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Oc(),(!s||!s.isStart)&&!i[Nt]&&(qp(i),n.zOrigin&&i[qi]&&(i[qi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Yp=function(e,t){var i={target:e,props:[],revert:y_,save:v_};return e._gsap||yi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Zp,Dc=function(e,t){var i=Rr.createElementNS?Rr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Rr.createElement(e);return i&&i.style?i:Rr.createElement(e)},tn=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Bc,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,Hs(t)||t,1)||""},Op="O,Moz,ms,Ms,Webkit".split(","),Hs=function(e,t,i){var n=t||us,s=n.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Op[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Op[a]:"")+e},Nc=function(){a_()&&window.document&&(Np=window,Rr=Np.document,Gs=Rr.documentElement,us=Dc("div")||{style:{}},s_=Dc("div"),Nt=Hs(Nt),qi=Nt+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zp=!!Hs("perspective"),Oc=yi.core.reverting,Uc=1)},Bp=function(e){var t=e.ownerSVGElement,i=Dc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),s;n.style.display="block",i.appendChild(n),Gs.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),Gs.removeChild(i),s},kp=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Jp=function(e){var t,i;try{t=e.getBBox()}catch{t=Bp(e),i=1}return t&&(t.width||t.height)||i||(t=Bp(e)),t&&!t.width&&!t.x&&!t.y?{x:+kp(e,["x","cx","x1"])||0,y:+kp(e,["y","cy","y1"])||0,width:0,height:0}:t},Kp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jp(e))},Ir=function(e,t){if(t){var i=e.style,n;t in ir&&t!==qi&&(t=Nt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Bc,"-$1").toLowerCase())):i.removeAttribute(t)}},Pr=function(e,t,i,n,s,a){var o=new Li(e._pt,t,i,0,1,a?Xp:Wp);return e._pt=o,o.b=n,o.e=s,e._props.push(i),o},zp={deg:1,rad:1,turn:1},S_={grid:1,flex:1},Lr=function r(e,t,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=us.style,l=o_.test(t),f=e.tagName.toLowerCase()==="svg",u=(f?"client":"offset")+(l?"Width":"Height"),h=100,d=n==="px",c=n==="%",x,_,p,m;if(n===a||!s||zp[n]||zp[a])return s;if(a!=="px"&&!d&&(s=r(e,t,i,"px")),m=e.getCTM&&Kp(e),(c||a==="%")&&(ir[t]||~t.indexOf("adius")))return x=m?e.getBBox()[l?"width":"height"]:e[u],kt(c?s/x*h:s/100*x);if(o[l?"width":"height"]=h+(d?a:n),_=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!f?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Rr||!_.appendChild)&&(_=Rr.body),p=_._gsap,p&&c&&p.width&&l&&p.time===Hi.time&&!p.uncache)return kt(s/p.width*h);if(c&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+n,x=e[u],v?e.style[t]=v:Ir(e,t)}else(c||a==="%")&&!S_[tn(_,"display")]&&(o.position=tn(e,"position")),_===e&&(o.position="static"),_.appendChild(us),x=us[u],_.removeChild(us),o.position="absolute";return l&&c&&(p=Ar(_),p.time=Hi.time,p.width=_[u]),kt(d?x*s/h:x&&s?h/x*s:0)},tr=function(e,t,i,n){var s;return Uc||Nc(),t in Un&&t!=="transform"&&(t=Un[t],~t.indexOf(",")&&(t=t.split(",")[0])),ir[t]&&t!=="transform"?(s=$a(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Al(tn(e,qi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Tl[t]&&Tl[t](e,t,i)||tn(e,t)||yc(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Lr(e,t,s,i)+i:s},M_=function(e,t,i,n){if(!i||i==="none"){var s=Hs(t,e,1),a=s&&tn(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=tn(e,"borderTopColor"))}var o=new Li(this._pt,e.style,t,0,1,Cc),l=0,f=0,u,h,d,c,x,_,p,m,v,A,y,T;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=tn(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=e.style[t],e.style[t]=n,n=tn(e,t)||n,_?e.style[t]=_:Ir(e,t)),u=[i,n],Mc(u),i=u[0],n=u[1],d=i.match(rs)||[],T=n.match(rs)||[],T.length){for(;h=rs.exec(n);)p=h[0],v=n.substring(l,h.index),x?x=(x+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(x=1),p!==(_=d[f++]||"")&&(c=parseFloat(_)||0,y=_.substr((c+"").length),p.charAt(1)==="="&&(p=ss(c,p)+y),m=parseFloat(p),A=p.substr((m+"").length),l=rs.lastIndex-A.length,A||(A=A||Xi.units[t]||y,l===n.length&&(n+=A,o.e+=A)),y!==A&&(c=Lr(e,t,_,A)||0),o._pt={_next:o._pt,p:v||f===1?v:",",s:c,c:m-c,m:x&&x<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?Xp:Wp;return mc.test(n)&&(o.e=0),this._pt=o,o},Gp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},b_=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Gp[i]||i,t[1]=Gp[n]||n,t.join(" ")},w_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,a=i._gsap,o,l,f;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),f=s.length;--f>-1;)o=s[f],ir[o]&&(l=1,o=o==="transformOrigin"?qi:Nt),Ir(i,o);l&&(Ir(i,Nt),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",$a(i,1),a.uncache=1,qp(n)))}},Tl={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var a=e._pt=new Li(e._pt,t,i,0,0,w_);return a.u=n,a.pr=-10,a.tween=s,e._props.push(i),1}}},Ka=[1,0,0,1,0,0],$p={},Qp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vp=function(e){var t=tn(e,Nt);return Qp(t)?Ka:t.substr(7).match(pc).map(kt)},kc=function(e,t){var i=e._gsap||Ar(e),n=e.style,s=Vp(e),a,o,l,f;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ka:s):(s===Ka&&!e.offsetParent&&e!==Gs&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(f=1,o=e.nextElementSibling,Gs.appendChild(e)),s=Vp(e),l?n.display=l:Ir(e,"display"),f&&(o?a.insertBefore(e,o):a?a.appendChild(e):Gs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Fc=function(e,t,i,n,s,a){var o=e._gsap,l=s||kc(e,!0),f=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,c=l[0],x=l[1],_=l[2],p=l[3],m=l[4],v=l[5],A=t.split(" "),y=parseFloat(A[0])||0,T=parseFloat(A[1])||0,w,g,M,P;i?l!==Ka&&(g=c*p-x*_)&&(M=y*(p/g)+T*(-_/g)+(_*v-p*m)/g,P=y*(-x/g)+T*(c/g)-(c*v-x*m)/g,y=M,T=P):(w=Jp(e),y=w.x+(~A[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(A[1]||A[0]).indexOf("%")?T/100*w.height:T)),n||n!==!1&&o.smooth?(m=y-f,v=T-u,o.xOffset=h+(m*c+v*_)-m,o.yOffset=d+(m*x+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=T,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[qi]="0px 0px",a&&(Pr(a,o,"xOrigin",f,y),Pr(a,o,"yOrigin",u,T),Pr(a,o,"xOffset",h,o.xOffset),Pr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},$a=function(e,t){var i=e._gsap||new bc(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),f=tn(e,qi)||"0",u,h,d,c,x,_,p,m,v,A,y,T,w,g,M,P,C,N,D,G,I,B,H,O,te,W,R,ie,Se,Ue,J,ue;return u=h=d=_=p=m=v=A=y=0,c=x=1,i.svg=!!(e.getCTM&&Kp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Nt]!=="none"?l[Nt]:"")),n.scale=n.rotate=n.translate="none"),g=kc(e,i.svg),i.svg&&(i.uncache?(te=e.getBBox(),f=i.xOrigin-te.x+"px "+(i.yOrigin-te.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Fc(e,O||f,!!O||i.originIsAbsolute,i.smooth!==!1,g)),T=i.xOrigin||0,w=i.yOrigin||0,g!==Ka&&(N=g[0],D=g[1],G=g[2],I=g[3],u=B=g[4],h=H=g[5],g.length===6?(c=Math.sqrt(N*N+D*D),x=Math.sqrt(I*I+G*G),_=N||D?zs(D,N)*fs:0,v=G||I?zs(G,I)*fs+_:0,v&&(x*=Math.abs(Math.cos(v*Vs))),i.svg&&(u-=T-(T*N+w*G),h-=w-(T*D+w*I))):(ue=g[6],Ue=g[7],R=g[8],ie=g[9],Se=g[10],J=g[11],u=g[12],h=g[13],d=g[14],M=zs(ue,Se),p=M*fs,M&&(P=Math.cos(-M),C=Math.sin(-M),O=B*P+R*C,te=H*P+ie*C,W=ue*P+Se*C,R=B*-C+R*P,ie=H*-C+ie*P,Se=ue*-C+Se*P,J=Ue*-C+J*P,B=O,H=te,ue=W),M=zs(-G,Se),m=M*fs,M&&(P=Math.cos(-M),C=Math.sin(-M),O=N*P-R*C,te=D*P-ie*C,W=G*P-Se*C,J=I*C+J*P,N=O,D=te,G=W),M=zs(D,N),_=M*fs,M&&(P=Math.cos(M),C=Math.sin(M),O=N*P+D*C,te=B*P+H*C,D=D*P-N*C,H=H*P-B*C,N=O,B=te),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),c=kt(Math.sqrt(N*N+D*D+G*G)),x=kt(Math.sqrt(H*H+ue*ue)),M=zs(B,H),v=Math.abs(M)>2e-4?M*fs:0,y=J?1/(J<0?-J:J):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Qp(tn(e,Nt)),O&&e.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(c*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(x*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=kt(c),i.scaleY=kt(x),i.rotation=kt(_)+o,i.rotationX=kt(p)+o,i.rotationY=kt(m)+o,i.skewX=v+o,i.skewY=A+o,i.transformPerspective=y+a,(i.zOrigin=parseFloat(f.split(" ")[2])||!t&&i.zOrigin||0)&&(n[qi]=Al(f)),i.xOffset=i.yOffset=0,i.force3D=Xi.force3D,i.renderTransform=i.svg?A_:Zp?jp:T_,i.uncache=0,i},Al=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ic=function(e,t,i){var n=di(t);return kt(parseFloat(t)+parseFloat(Lr(e,"x",i+"px",n)))+n},T_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jp(e,t)},os="0deg",Ja="0px",ls=") ",jp=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,f=i.rotation,u=i.rotationY,h=i.rotationX,d=i.skewX,c=i.skewY,x=i.scaleX,_=i.scaleY,p=i.transformPerspective,m=i.force3D,v=i.target,A=i.zOrigin,y="",T=m==="auto"&&e&&e!==1||m===!0;if(A&&(h!==os||u!==os)){var w=parseFloat(u)*Vs,g=Math.sin(w),M=Math.cos(w),P;w=parseFloat(h)*Vs,P=Math.cos(w),a=Ic(v,a,g*P*-A),o=Ic(v,o,-Math.sin(w)*-A),l=Ic(v,l,M*P*-A+A)}p!==Ja&&(y+="perspective("+p+ls),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(T||a!==Ja||o!==Ja||l!==Ja)&&(y+=l!==Ja||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ls),f!==os&&(y+="rotate("+f+ls),u!==os&&(y+="rotateY("+u+ls),h!==os&&(y+="rotateX("+h+ls),(d!==os||c!==os)&&(y+="skew("+d+", "+c+ls),(x!==1||_!==1)&&(y+="scale("+x+", "+_+ls),v.style[Nt]=y||"translate(0, 0)"},A_=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,f=i.skewX,u=i.skewY,h=i.scaleX,d=i.scaleY,c=i.target,x=i.xOrigin,_=i.yOrigin,p=i.xOffset,m=i.yOffset,v=i.forceCSS,A=parseFloat(a),y=parseFloat(o),T,w,g,M,P;l=parseFloat(l),f=parseFloat(f),u=parseFloat(u),u&&(u=parseFloat(u),f+=u,l+=u),l||f?(l*=Vs,f*=Vs,T=Math.cos(l)*h,w=Math.sin(l)*h,g=Math.sin(l-f)*-d,M=Math.cos(l-f)*d,f&&(u*=Vs,P=Math.tan(f-u),P=Math.sqrt(1+P*P),g*=P,M*=P,u&&(P=Math.tan(u),P=Math.sqrt(1+P*P),T*=P,w*=P)),T=kt(T),w=kt(w),g=kt(g),M=kt(M)):(T=h,M=d,w=g=0),(A&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(A=Lr(c,"x",a,"px"),y=Lr(c,"y",o,"px")),(x||_||p||m)&&(A=kt(A+x-(x*T+_*g)+p),y=kt(y+_-(x*w+_*M)+m)),(n||s)&&(P=c.getBBox(),A=kt(A+n/100*P.width),y=kt(y+s/100*P.height)),P="matrix("+T+","+w+","+g+","+M+","+A+","+y+")",c.setAttribute("transform",P),v&&(c.style[Nt]=P)},E_=function(e,t,i,n,s){var a=360,o=ti(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?fs:1),f=l-n,u=n+f+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(f%=a,f!==f%(a/2)&&(f+=f<0?a:-a)),h==="cw"&&f<0?f=(f+a*Up)%a-~~(f/a)*a:h==="ccw"&&f>0&&(f=(f-a*Up)%a-~~(f/a)*a)),e._pt=d=new Li(e._pt,t,i,n,f,f_),d.e=u,d.u="deg",e._props.push(i),d},Hp=function(e,t){for(var i in t)e[i]=t[i];return e},C_=function(e,t,i){var n=Hp({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,f,u,h,d,c,x;n.svg?(f=i.getAttribute("transform"),i.setAttribute("transform",""),a[Nt]=t,o=$a(i,1),Ir(i,Nt),i.setAttribute("transform",f)):(f=getComputedStyle(i)[Nt],a[Nt]=t,o=$a(i,1),a[Nt]=f);for(l in ir)f=n[l],u=o[l],f!==u&&s.indexOf(l)<0&&(c=di(f),x=di(u),h=c!==x?Lr(i,l,f,x):parseFloat(f),d=parseFloat(u),e._pt=new Li(e._pt,o,l,h,d-h,Lc),e._pt.u=x||0,e._props.push(l));Hp(o,n)};Ii("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",a=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(o){return e<2?r+o:"border"+o+r});Tl[e>1?"border"+r:r]=function(o,l,f,u,h){var d,c;if(arguments.length<4)return d=a.map(function(x){return tr(o,x,f)}),c=d.join(" "),c.split(d[0]).length===5?d[0]:c;d=(u+"").split(" "),c={},a.forEach(function(x,_){return c[x]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,c,h)}});var zc={name:"css",register:Nc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var a=this._props,o=e.style,l=i.vars.startAt,f,u,h,d,c,x,_,p,m,v,A,y,T,w,g,M,P;Uc||Nc(),this.styles=this.styles||Yp(e),M=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Vi[_]&&Tc(_,t,i,n,e,s)))){if(c=typeof u,x=Tl[_],c==="function"&&(u=u.call(i,n,e,s),c=typeof u),c==="string"&&~u.indexOf("random(")&&(u=ks(u)),x)x(this,e,_,u,i)&&(g=1);else if(_.substr(0,2)==="--")f=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",jn.lastIndex=0,jn.test(f)||(p=di(f),m=di(u),m?p!==m&&(f=Lr(e,_,f,m)+m):p&&(u+=p)),this.add(o,"setProperty",f,u,n,s,0,0,_),a.push(_),M.push(_,0,o[_]);else if(c!=="undefined"){if(l&&_ in l?(f=typeof l[_]=="function"?l[_].call(i,n,e,s):l[_],ti(f)&&~f.indexOf("random(")&&(f=ks(f)),di(f+"")||f==="auto"||(f+=Xi.units[_]||di(tr(e,_))||""),(f+"").charAt(1)==="="&&(f=tr(e,_))):f=tr(e,_),d=parseFloat(f),v=c==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),_ in Un&&(_==="autoAlpha"&&(d===1&&tr(e,"visibility")==="hidden"&&h&&(d=0),M.push("visibility",0,o.visibility),Pr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Un[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in ir,A){if(this.styles.save(_),P=u,c==="string"&&u.substring(0,6)==="var(--"){if(u=tn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=u,u=tn(e,"perspective"),C?e.style.perspective=C:Ir(e,"perspective")}h=parseFloat(u)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||$a(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new Li(this._pt,o,Nt,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new Li(this._pt,T,"scaleY",T.scaleY,(v?ss(T.scaleY,v+h):h)-T.scaleY||0,Lc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){M.push(qi,0,o[qi]),u=b_(u),T.svg?Fc(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==T.zOrigin&&Pr(this,T,"zOrigin",T.zOrigin,m),Pr(this,o,_,Al(f),Al(u)));continue}else if(_==="svgOrigin"){Fc(e,u,1,w,0,this);continue}else if(_ in $p){E_(this,T,_,d,v?ss(d,v+u):u);continue}else if(_==="smoothOrigin"){Pr(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){C_(this,u,e);continue}}else _ in o||(_=Hs(_)||_);if(A||(h||h===0)&&(d||d===0)&&!l_.test(u)&&_ in o)p=(f+"").substr((d+"").length),h||(h=0),m=di(u)||(_ in Xi.units?Xi.units[_]:p),p!==m&&(d=Lr(e,_,f,m)),this._pt=new Li(this._pt,A?T:o,_,d,(v?ss(d,v+h):h)-d,!A&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?d_:Lc),this._pt.u=m||0,A&&P!==u?(this._pt.b=f,this._pt.e=P,this._pt.r=c_):p!==m&&m!=="%"&&(this._pt.b=f,this._pt.r=u_);else if(_ in o)M_.call(this,e,_,f,v?v+u:u);else if(_ in e)this.add(e,_,f||e[_],v?v+u:u,n,s);else if(_!=="parseTransform"){yl(_,u);continue}A||(_ in o?M.push(_,0,o[_]):typeof e[_]=="function"?M.push(_,2,e[_]()):M.push(_,1,f||e[_])),a.push(_)}}g&&Pc(this)},render:function(e,t){if(t.tween._time||!Oc())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:tr,aliases:Un,getSetter:function(e,t,i){var n=Un[t];return n&&n.indexOf(",")<0&&(t=n),t in ir&&t!==qi&&(e._gsap.x||tr(e,"x"))?i&&Fp===i?t==="scale"?g_:m_:(Fp=i||{})&&(t==="scale"?x_:__):e.style&&!vl(e.style[t])?h_:~t.indexOf("-")?p_:wl(e,t)},core:{_removeProperty:Ir,_getMatrix:kc}};yi.utils.checkPrefix=Hs;yi.core.getStyleSaver=Yp;(function(r,e,t,i){var n=Ii(r+","+e+","+t,function(s){ir[s]=1});Ii(e,function(s){Xi.units[s]="deg",$p[s]=1}),Un[n[13]]=r+","+e,Ii(i,function(s){var a=s.split(":");Un[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Xi.units[r]="px"});yi.registerPlugin(zc);var On=yi.registerPlugin(zc)||yi,Pw=On.core.Tween;function em(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function R_(r,e,t){return e&&em(r.prototype,e),t&&em(r,t),r}var hi,Rl,P_,Yi,Dr,Nr,Xs,im,cs,qs,nm,nr,Mn,rm,sm=function(){return hi||typeof window<"u"&&(hi=window.gsap)&&hi.registerPlugin&&hi},am=1,Ws=[],Xe=[],bn=[],ja=Date.now,Gc=function(e,t){return t},I_=function(){var e=qs.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,Xe),n.push.apply(n,bn),Xe=i,bn=n,Gc=function(a,o){return t[a](o)}},sr=function(e,t){return~bn.indexOf(e)&&bn[bn.indexOf(e)+1][t]},eo=function(e){return!!~nm.indexOf(e)},Ni=function(e,t,i,n,s){return e.addEventListener(t,i,{passive:n!==!1,capture:!!s})},Di=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},El="scrollLeft",Cl="scrollTop",Vc=function(){return nr&&nr.isPressed||Xe.cache++},Pl=function(e,t){var i=function n(s){if(s||s===0){am&&Yi.history.scrollRestoration!=="manual"&&(Yi.history.scrollRestoration="manual");var a=nr&&nr.isPressed;s=n.v=Math.round(s)||(nr&&nr.iOS?1:0),e(s),n.cacheID=Xe.cache,a&&Gc("ss",s)}else(t||Xe.cache!==n.cacheID||Gc("ref"))&&(n.cacheID=Xe.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},Si={s:El,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Pl(function(r){return arguments.length?Yi.scrollTo(r,Zt.sc()):Yi.pageXOffset||Dr[El]||Nr[El]||Xs[El]||0})},Zt={s:Cl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Si,sc:Pl(function(r){return arguments.length?Yi.scrollTo(Si.sc(),r):Yi.pageYOffset||Dr[Cl]||Nr[Cl]||Xs[Cl]||0})},Fi=function(e,t){return(t&&t._ctx&&t._ctx.selector||hi.utils.toArray)(e)[0]||(typeof e=="string"&&hi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},L_=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},rr=function(e,t){var i=t.s,n=t.sc;eo(e)&&(e=Dr.scrollingElement||Nr);var s=Xe.indexOf(e),a=n===Zt.sc?1:2;!~s&&(s=Xe.push(e)-1),Xe[s+a]||Ni(e,"scroll",Vc);var o=Xe[s+a],l=o||(Xe[s+a]=Pl(sr(e,i),!0)||(eo(e)?n:Pl(function(f){return arguments.length?e[i]=f:e[i]})));return l.target=e,o||(l.smooth=hi.getProperty(e,"scrollBehavior")==="smooth"),l},Il=function(e,t,i){var n=e,s=e,a=ja(),o=a,l=t||50,f=Math.max(500,l*3),u=function(x,_){var p=ja();_||p-a>l?(s=n,n=x,o=a,a=p):i?n+=x:n=s+(x-s)/(p-o)*(a-o)},h=function(){s=n=i?0:n,o=a=0},d=function(x){var _=o,p=s,m=ja();return(x||x===0)&&x!==n&&u(x),a===o||m-o>f?0:(n+(i?p:-p))/((i?m:a)-_)*1e3};return{update:u,reset:h,getVelocity:d}},Qa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},tm=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},om=function(){qs=hi.core.globals().ScrollTrigger,qs&&qs.core&&I_()},lm=function(e){return hi=e||sm(),!Rl&&hi&&typeof document<"u"&&document.body&&(Yi=window,Dr=document,Nr=Dr.documentElement,Xs=Dr.body,nm=[Yi,Dr,Nr,Xs],P_=hi.utils.clamp,rm=hi.core.context||function(){},cs="onpointerenter"in Xs?"pointer":"mouse",im=zt.isTouch=Yi.matchMedia&&Yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mn=zt.eventTypes=("ontouchstart"in Nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return am=0},500),Rl=1),qs||om(),Rl};Si.op=Zt;Xe.cache=0;var zt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(i){Rl||lm(hi)||console.warn("Please gsap.registerPlugin(Observer)"),qs||om();var n=i.tolerance,s=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,f=i.debounce,u=i.preventDefault,h=i.onStop,d=i.onStopDelay,c=i.ignore,x=i.wheelSpeed,_=i.event,p=i.onDragStart,m=i.onDragEnd,v=i.onDrag,A=i.onPress,y=i.onRelease,T=i.onRight,w=i.onLeft,g=i.onUp,M=i.onDown,P=i.onChangeX,C=i.onChangeY,N=i.onChange,D=i.onToggleX,G=i.onToggleY,I=i.onHover,B=i.onHoverEnd,H=i.onMove,O=i.ignoreCheck,te=i.isNormalizer,W=i.onGestureStart,R=i.onGestureEnd,ie=i.onWheel,Se=i.onEnable,Ue=i.onDisable,J=i.onClick,ue=i.scrollSpeed,ye=i.capture,be=i.allowClicks,me=i.lockAxis,De=i.onLockAxis;this.target=o=Fi(o)||Nr,this.vars=i,c&&(c=hi.utils.toArray(c)),n=n||1e-9,s=s||0,x=x||1,ue=ue||1,a=a||"wheel,touch,pointer",f=f!==!1,l||(l=parseFloat(Yi.getComputedStyle(Xs).lineHeight)||22);var gt,Ae,Ve,Ie,Fe,ft,at,Z=this,Ke=0,Wt=0,vt=i.passive||!u&&i.passive!==!1,nt=rr(o,Si),Ft=rr(o,Zt),Gt=nt(),U=Ft(),ct=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Mn[0]==="pointerdown",ot=eo(o),ze=o.ownerDocument||Dr,ce=[0,0,0],ut=[0,0,0],Le=0,Oe=function(){return Le=ja()},E=function(pe,re){return(Z.event=pe)&&c&&L_(pe.target,c)||re&&ct&&pe.pointerType!=="touch"||O&&O(pe,re)},S=function(){Z._vx.reset(),Z._vy.reset(),Ae.pause(),h&&h(Z)},z=function(){var pe=Z.deltaX=tm(ce),re=Z.deltaY=tm(ut),j=Math.abs(pe)>=n,xe=Math.abs(re)>=n;N&&(j||xe)&&N(Z,pe,re,ce,ut),j&&(T&&Z.deltaX>0&&T(Z),w&&Z.deltaX<0&&w(Z),P&&P(Z),D&&Z.deltaX<0!=Ke<0&&D(Z),Ke=Z.deltaX,ce[0]=ce[1]=ce[2]=0),xe&&(M&&Z.deltaY>0&&M(Z),g&&Z.deltaY<0&&g(Z),C&&C(Z),G&&Z.deltaY<0!=Wt<0&&G(Z),Wt=Z.deltaY,ut[0]=ut[1]=ut[2]=0),(Ie||Ve)&&(H&&H(Z),Ve&&(p&&Ve===1&&p(Z),v&&v(Z),Ve=0),Ie=!1),ft&&!(ft=!1)&&De&&De(Z),Fe&&(ie(Z),Fe=!1),gt=0},se=function(pe,re,j){ce[j]+=pe,ut[j]+=re,Z._vx.update(pe),Z._vy.update(re),f?gt||(gt=requestAnimationFrame(z)):z()},ne=function(pe,re){me&&!at&&(Z.axis=at=Math.abs(pe)>Math.abs(re)?"x":"y",ft=!0),at!=="y"&&(ce[2]+=pe,Z._vx.update(pe,!0)),at!=="x"&&(ut[2]+=re,Z._vy.update(re,!0)),f?gt||(gt=requestAnimationFrame(z)):z()},fe=function(pe){if(!E(pe,1)){pe=Qa(pe,u);var re=pe.clientX,j=pe.clientY,xe=re-Z.x,ee=j-Z.y,we=Z.isDragging;Z.x=re,Z.y=j,(we||(xe||ee)&&(Math.abs(Z.startX-re)>=s||Math.abs(Z.startY-j)>=s))&&(Ve||(Ve=we?2:1),we||(Z.isDragging=!0),ne(xe,ee))}},ge=Z.onPress=function(ae){E(ae,1)||ae&&ae.button||(Z.axis=at=null,Ae.pause(),Z.isPressed=!0,ae=Qa(ae),Ke=Wt=0,Z.startX=Z.x=ae.clientX,Z.startY=Z.y=ae.clientY,Z._vx.reset(),Z._vy.reset(),Ni(te?o:ze,Mn[1],fe,vt,!0),Z.deltaX=Z.deltaY=0,A&&A(Z))},V=Z.onRelease=function(ae){if(!E(ae,1)){Di(te?o:ze,Mn[1],fe,!0);var pe=!isNaN(Z.y-Z.startY),re=Z.isDragging,j=re&&(Math.abs(Z.x-Z.startX)>3||Math.abs(Z.y-Z.startY)>3),xe=Qa(ae);!j&&pe&&(Z._vx.reset(),Z._vy.reset(),u&&be&&hi.delayedCall(.08,function(){if(ja()-Le>300&&!ae.defaultPrevented){if(ae.target.click)ae.target.click();else if(ze.createEvent){var ee=ze.createEvent("MouseEvents");ee.initMouseEvent("click",!0,!0,Yi,1,xe.screenX,xe.screenY,xe.clientX,xe.clientY,!1,!1,!1,!1,0,null),ae.target.dispatchEvent(ee)}}})),Z.isDragging=Z.isGesturing=Z.isPressed=!1,h&&re&&!te&&Ae.restart(!0),Ve&&z(),m&&re&&m(Z),y&&y(Z,j)}},Q=function(pe){return pe.touches&&pe.touches.length>1&&(Z.isGesturing=!0)&&W(pe,Z.isDragging)},le=function(){return(Z.isGesturing=!1)||R(Z)},L=function(pe){if(!E(pe)){var re=nt(),j=Ft();se((re-Gt)*ue,(j-U)*ue,1),Gt=re,U=j,h&&Ae.restart(!0)}},$=function(pe){if(!E(pe)){pe=Qa(pe,u),ie&&(Fe=!0);var re=(pe.deltaMode===1?l:pe.deltaMode===2?Yi.innerHeight:1)*x;se(pe.deltaX*re,pe.deltaY*re,0),h&&!te&&Ae.restart(!0)}},K=function(pe){if(!E(pe)){var re=pe.clientX,j=pe.clientY,xe=re-Z.x,ee=j-Z.y;Z.x=re,Z.y=j,Ie=!0,h&&Ae.restart(!0),(xe||ee)&&ne(xe,ee)}},de=function(pe){Z.event=pe,I(Z)},oe=function(pe){Z.event=pe,B(Z)},he=function(pe){return E(pe)||Qa(pe,u)&&J(Z)};Ae=Z._dc=hi.delayedCall(d||.25,S).pause(),Z.deltaX=Z.deltaY=0,Z._vx=Il(0,50,!0),Z._vy=Il(0,50,!0),Z.scrollX=nt,Z.scrollY=Ft,Z.isDragging=Z.isGesturing=Z.isPressed=!1,rm(this),Z.enable=function(ae){return Z.isEnabled||(Ni(ot?ze:o,"scroll",Vc),a.indexOf("scroll")>=0&&Ni(ot?ze:o,"scroll",L,vt,ye),a.indexOf("wheel")>=0&&Ni(o,"wheel",$,vt,ye),(a.indexOf("touch")>=0&&im||a.indexOf("pointer")>=0)&&(Ni(o,Mn[0],ge,vt,ye),Ni(ze,Mn[2],V),Ni(ze,Mn[3],V),be&&Ni(o,"click",Oe,!0,!0),J&&Ni(o,"click",he),W&&Ni(ze,"gesturestart",Q),R&&Ni(ze,"gestureend",le),I&&Ni(o,cs+"enter",de),B&&Ni(o,cs+"leave",oe),H&&Ni(o,cs+"move",K)),Z.isEnabled=!0,Z.isDragging=Z.isGesturing=Z.isPressed=Ie=Ve=!1,Z._vx.reset(),Z._vy.reset(),Gt=nt(),U=Ft(),ae&&ae.type&&ge(ae),Se&&Se(Z)),Z},Z.disable=function(){Z.isEnabled&&(Ws.filter(function(ae){return ae!==Z&&eo(ae.target)}).length||Di(ot?ze:o,"scroll",Vc),Z.isPressed&&(Z._vx.reset(),Z._vy.reset(),Di(te?o:ze,Mn[1],fe,!0)),Di(ot?ze:o,"scroll",L,ye),Di(o,"wheel",$,ye),Di(o,Mn[0],ge,ye),Di(ze,Mn[2],V),Di(ze,Mn[3],V),Di(o,"click",Oe,!0),Di(o,"click",he),Di(ze,"gesturestart",Q),Di(ze,"gestureend",le),Di(o,cs+"enter",de),Di(o,cs+"leave",oe),Di(o,cs+"move",K),Z.isEnabled=Z.isPressed=Z.isDragging=!1,Ue&&Ue(Z))},Z.kill=Z.revert=function(){Z.disable();var ae=Ws.indexOf(Z);ae>=0&&Ws.splice(ae,1),nr===Z&&(nr=0)},Ws.push(Z),te&&eo(o)&&(nr=Z),Z.enable(_)},R_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();zt.version="3.15.1";zt.create=function(r){return new zt(r)};zt.register=lm;zt.getAll=function(){return Ws.slice()};zt.getById=function(r){return Ws.filter(function(e){return e.vars.id===r})[0]};sm()&&hi.registerPlugin(zt);var Ee,Ks,Ze,xt,sn,pt,id,Yl,po,oo,io,Ll,Mi,Kl,Jc,Oi,fm,um,$s,Am,Hc,Em,Ui,Kc,Cm,Rm,Fr,$c,nd,Qs,rd,Ur,Qc,Wc,Dl=1,bi=Date.now,Xc=bi(),gn=0,no=0,cm=function(e,t,i){var n=rn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},dm=function(e,t){return t&&(!rn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},D_=function r(){return no&&requestAnimationFrame(r)},hm=function(){return Kl=1},pm=function(){return Kl=0},Bn=function(e){return e},ro=function(e){return Math.round(e*1e5)/1e5||0},Pm=function(){return typeof window<"u"},Im=function(){return Ee||Pm()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},xs=function(e){return!!~id.indexOf(e)},Lm=function(e){return(e==="Height"?rd:Ze["inner"+e])||sn["client"+e]||pt["client"+e]},Dm=function(e){return sr(e,"getBoundingClientRect")||(xs(e)?function(){return ql.width=Ze.innerWidth,ql.height=rd,ql}:function(){return ar(e)})},N_=function(e,t,i){var n=i.d,s=i.d2,a=i.a;return(a=sr(e,"getBoundingClientRect"))?function(){return a()[n]}:function(){return(t?Lm(s):e["client"+s])||0}},F_=function(e,t){return!t||~bn.indexOf(e)?Dm(e):function(){return ql}},kn=function(e,t){var i=t.s,n=t.d2,s=t.d,a=t.a;return Math.max(0,(i="scroll"+n)&&(a=sr(e,i))?a()-Dm(e)()[s]:xs(e)?(sn[i]||pt[i])-Lm(n):e[i]-e["offset"+n])},Nl=function(e,t){for(var i=0;i<$s.length;i+=3)(!t||~t.indexOf($s[i+1]))&&e($s[i],$s[i+1],$s[i+2])},rn=function(e){return typeof e=="string"},wi=function(e){return typeof e=="function"},so=function(e){return typeof e=="number"},ds=function(e){return typeof e=="object"},to=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Ys=function(e,t,i){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);n&&n.totalTime&&(e.callbackAnimation=n)}},Zs=Math.abs,Nm="left",Fm="top",sd="right",ad="bottom",ps="width",ms="height",lo="Right",fo="Left",uo="Top",co="Bottom",Jt="padding",pn="margin",ea="Width",od="Height",ii="px",mn=function(e){return Ze.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},U_=function(e){var t=mn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},mm=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},ar=function(e,t){var i=t&&mn(e)[Jc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},Zl=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Um=function(e){var t=[],i=e.labels,n=e.duration(),s;for(s in i)t.push(i[s]/n);return t},O_=function(e){return function(t){return Ee.utils.snap(Um(e),t)}},ld=function(e){var t=Ee.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,s){return n-s});return i?function(n,s,a){a===void 0&&(a=.001);var o;if(!s)return t(n);if(s>0){for(n-=a,o=0;o<i.length;o++)if(i[o]>=n)return i[o];return i[o-1]}else for(o=i.length,n+=a;o--;)if(i[o]<=n)return i[o];return i[0]}:function(n,s,a){a===void 0&&(a=.001);var o=t(n);return!s||Math.abs(o-n)<a||o-n<0==s<0?o:t(s<0?n-e:n+e)}},B_=function(e){return function(t,i){return ld(Um(e))(t,i.direction)}},Fl=function(e,t,i,n){return i.split(",").forEach(function(s){return e(t,s,n)})},oi=function(e,t,i,n,s){return e.addEventListener(t,i,{passive:!n,capture:!!s})},ai=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Ul=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},gm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ol={toggleActions:"play",anticipatePin:0},Jl={top:0,left:0,center:.5,bottom:1,right:1},Vl=function(e,t){if(rn(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in Jl?Jl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Bl=function(e,t,i,n,s,a,o,l){var f=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,c=s.fontWeight,x=xt.createElement("div"),_=xs(i)||sr(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?pt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,A=v?f:u,y="border-color:"+A+";font-size:"+h+";color:"+A+";font-weight:"+c+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(n===Zt?sd:ad)+":"+(a+parseFloat(d))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),x._isStart=v,x.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),x.style.cssText=y,x.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(x,m.children[0]):m.appendChild(x),x._offset=x["offset"+n.op.d2],Hl(x,0,n,v),x},Hl=function(e,t,i,n){var s={display:"block"},a=i[n?"os2":"p2"],o=i[n?"p2":"os2"];e._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+a+ea]=1,s["border"+o+ea]=0,s[i.p]=t+"px",Ee.set(e,s)},Ye=[],jc={},mo,xm=function(){return bi()-gn>34&&(mo||(mo=requestAnimationFrame(or)))},Js=function(){(!Ui||!Ui.isPressed||Ui.startX>pt.clientWidth)&&(Xe.cache++,Ui?mo||(mo=requestAnimationFrame(or)):or(),gn||vs("scrollStart"),gn=bi())},qc=function(){Rm=Ze.innerWidth,Cm=Ze.innerHeight},ao=function(e){Xe.cache++,(e===!0||!Mi&&!Em&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!Kc||Rm!==Ze.innerWidth||Math.abs(Ze.innerHeight-Cm)>Ze.innerHeight*.25))&&Yl.restart(!0)},_s={},k_=[],Om=function r(){return ai(Je,"scrollEnd",r)||hs(!0)},vs=function(e){return _s[e]&&_s[e].map(function(t){return t()})||k_},nn=[],Bm=function(e){for(var t=0;t<nn.length;t+=5)(!e||nn[t+4]&&nn[t+4].query===e)&&(nn[t].style.cssText=nn[t+1],nn[t].getBBox&&nn[t].setAttribute("transform",nn[t+2]||""),nn[t+3].uncache=1)},km=function(){Xe.cache++,Xe.forEach(function(e){return wi(e)&&(e.rec=e())})},fd=function(e,t){var i;for(Oi=0;Oi<Ye.length;Oi++)i=Ye[Oi],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Ur=!0,t&&Bm(t),t||vs("revert")},zm=function(e,t){Xe.cache++,(t||!Bi)&&Xe.forEach(function(i){return wi(i)&&i.cacheID++&&(i.rec=0)}),rn(e)&&(nd=e,Ze.history.scrollRestoration!==e&&(Ze.history.scrollRestoration=e))},Bi,gs=0,_m,z_=function(){if(_m!==gs){var e=_m=gs;requestAnimationFrame(function(){return e===gs&&hs(!0)})}},Gm=function(){pt.appendChild(Qs),rd=!Ui&&Qs.offsetHeight||Ze.innerHeight,pt.removeChild(Qs)},vm=function(e){return po(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},hs=function(e,t){if(sn=xt.documentElement,pt=xt.body,id=[Ze,xt,sn,pt],gn&&!e&&!Ur){oi(Je,"scrollEnd",Om);return}Gm(),Bi=Je.isRefreshing=!0,Ur||km();var i=vs("refreshInit");Am&&Je.sort(),t||fd(),Xe.forEach(function(n){wi(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),Ye.slice(0).forEach(function(n){return n.refresh()}),Ur=!1,Ye.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",a=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-a),n.refresh()}}),Qc=1,vm(!0),Ye.forEach(function(n){var s=kn(n.scroller,n._dir),a=n.vars.end==="max"||n._endClamp&&n.end>s,o=n._startClamp&&n.start>=s;(a||o)&&n.setPositions(o?s-1:n.start,a?Math.max(o?s:n.start+1,s):n.end,!0)}),vm(!1),Qc=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),Xe.forEach(function(n){wi(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),zm(nd,1),Yl.pause(),gs++,Bi=2,or(2),Ye.forEach(function(n){return wi(n.vars.onRefresh)&&n.vars.onRefresh(n)}),Bi=Je.isRefreshing=!1,vs("refresh")},ed=0,Wl=1,ho,or=function(e){if(e===2||!Bi&&!Ur){Je.isUpdating=!0,ho&&ho.update(0);var t=Ye.length,i=bi(),n=i-Xc>=50,s=t&&Ye[0].scroll();if(Wl=ed>s?-1:1,Bi||(ed=s),n&&(gn&&!Kl&&i-gn>200&&(gn=0,vs("scrollEnd")),io=Xc,Xc=i),Wl<0){for(Oi=t;Oi-- >0;)Ye[Oi]&&Ye[Oi].update(0,n);Wl=1}else for(Oi=0;Oi<t;Oi++)Ye[Oi]&&Ye[Oi].update(0,n);Je.isUpdating=!1}mo=0},td=[Nm,Fm,ad,sd,pn+co,pn+lo,pn+uo,pn+fo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Xl=td.concat([ps,ms,"boxSizing","max"+ea,"max"+od,"position",pn,Jt,Jt+uo,Jt+lo,Jt+co,Jt+fo]),G_=function(e,t,i){js(i);var n=e._gsap;if(n.spacerIsNative)js(n.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Yc=function(e,t,i,n){if(!e._gsap.swappedIn){for(var s=td.length,a=t.style,o=e.style,l;s--;)l=td[s],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[ad]=o[sd]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ps]=Zl(e,Si)+ii,a[ms]=Zl(e,Zt)+ii,a[Jt]=o[pn]=o[Fm]=o[Nm]="0",js(n),o[ps]=o["max"+ea]=i[ps],o[ms]=o["max"+od]=i[ms],o[Jt]=i[Jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},V_=/([A-Z])/g,js=function(e){if(e){var t=e.t.style,i=e.length,n=0,s,a;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;n<i;n+=2)a=e[n+1],s=e[n],a?t[s]=a:t[s]&&t.removeProperty(s.replace(V_,"-$1").toLowerCase())}},kl=function(e){for(var t=Xl.length,i=e.style,n=[],s=0;s<t;s++)n.push(Xl[s],i[Xl[s]]);return n.t=e,n},H_=function(e,t,i){for(var n=[],s=e.length,a=i?8:0,o;a<s;a+=2)o=e[a],n.push(o,o in t?t[o]:e[a+1]);return n.t=e.t,n},ql={left:0,top:0},ym=function(e,t,i,n,s,a,o,l,f,u,h,d,c,x){wi(e)&&(e=e(l)),rn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Vl("0"+e.substr(3),i):0));var _=c?c.time():0,p,m,v;if(c&&c.seek(0),isNaN(e)||(e=+e),so(e))c&&(e=Ee.utils.mapRange(c.scrollTrigger.start,c.scrollTrigger.end,0,d,e)),o&&Hl(o,i,n,!0);else{wi(t)&&(t=t(l));var A=(e||"0").split(" "),y,T,w,g;v=Fi(t,l)||pt,y=ar(v)||{},(!y||!y.left&&!y.top)&&mn(v).display==="none"&&(g=v.style.display,v.style.display="block",y=ar(v),g?v.style.display=g:v.style.removeProperty("display")),T=Vl(A[0],y[n.d]),w=Vl(A[1]||"0",i),e=y[n.p]-f[n.p]-u+T+s-w,o&&Hl(o,w,n,i-w<20||o._isStart&&w>20),i-=i-w}if(x&&(l[x]=e||-.001,e<0&&(e=0)),a){var M=e+i,P=a._isStart;p="scroll"+n.d2,Hl(a,M,n,P&&M>20||!P&&(h?Math.max(pt[p],sn[p]):a.parentNode[p])<=M+1),h&&(f=ar(o),h&&(a.style[n.op.p]=f[n.op.p]-n.op.m-a._offset+ii))}return c&&v&&(p=ar(v),c.seek(d),m=ar(v),c._caScrollDist=p[n.p]-m[n.p],e=e/c._caScrollDist*d),c&&c.seek(_),c?e:Math.round(e)},W_=/(webkit|moz|length|cssText|inset)/i,Sm=function(e,t,i,n){if(e.parentNode!==t){var s=e.style,a,o;if(t===pt){e._stOrig=s.cssText,o=mn(e);for(a in o)!+a&&!W_.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=i,s.left=n}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},Vm=function(e,t,i){var n=t,s=n;return function(a){var o=Math.round(e());return o!==n&&o!==s&&Math.abs(o-n)>3&&Math.abs(o-s)>3&&(a=o,i&&i()),s=n,n=Math.round(a),n}},zl=function(e,t,i){var n={};n[t.p]="+="+i,Ee.set(e,n)},Mm=function(e,t){var i=rr(e,t),n="_scroll"+t.p2,s=function a(o,l,f,u,h){var d=a.tween,c=l.onComplete,x={};f=f||i();var _=Vm(i,f,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||o-f,d&&d.kill(),l[n]=o,l.inherit=!1,l.modifiers=x,x[n]=function(){return _(f+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){Xe.cache++,a.tween&&or()},l.onComplete=function(){a.tween=0,c&&c.call(d)},d=a.tween=Ee.to(e,l),d};return e[n]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},oi(e,"wheel",i.wheelHandler),Je.isTouch&&oi(e,"touchmove",i.wheelHandler),s},Je=(function(){function r(t,i){Ks||r.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),$c(this),this.init(t,i)}var e=r.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!no){this.update=this.refresh=this.kill=Bn;return}i=mm(rn(i)||so(i)||i.nodeType?{trigger:i}:i,Ol);var s=i,a=s.onUpdate,o=s.toggleClass,l=s.id,f=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,c=s.pin,x=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,v=s.onSnapComplete,A=s.once,y=s.snap,T=s.pinReparent,w=s.pinSpacer,g=s.containerAnimation,M=s.fastScrollEnd,P=s.preventOverlaps,C=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Si:Zt,N=!h&&h!==0,D=Fi(i.scroller||Ze),G=Ee.core.getCache(D),I=xs(D),B=("pinType"in i?i.pinType:sr(D,"pinType")||I&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=N&&i.toggleActions.split(" "),te="markers"in i?i.markers:Ol.markers,W=I?0:parseFloat(mn(D)["border"+C.p2+ea])||0,R=this,ie=i.onRefreshInit&&function(){return i.onRefreshInit(R)},Se=N_(D,I,C),Ue=F_(D,I),J=0,ue=0,ye=0,be=rr(D,C),me,De,gt,Ae,Ve,Ie,Fe,ft,at,Z,Ke,Wt,vt,nt,Ft,Gt,U,ct,ot,ze,ce,ut,Le,Oe,E,S,z,se,ne,fe,ge,V,Q,le,L,$,K,de,oe;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=D,R.scroll=g?g.time.bind(g):be,Ae=be(),Ur&&be.rec==null&&(be.rec=Ae),R.vars=i,n=n||i.animation,"refreshPriority"in i&&(Am=1,i.refreshPriority===-9999&&(ho=R)),G.tweenScroll=G.tweenScroll||{top:Mm(D,Zt),left:Mm(D,Si)},R.tweenTo=me=G.tweenScroll[C.p],R.scrubDuration=function(j){Q=so(j)&&j,Q?V?V.duration(j):V=Ee.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:function(){return m&&m(R)}}):(V&&V.progress(1).kill(),V=0)},n&&(n.vars.lazy=!1,n._initted&&!R.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),R.animation=n.pause(),n.scrollTrigger=R,R.scrubDuration(h),fe=0,l||(l=n.vars.id)),y&&((!ds(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in pt.style&&Ee.set(I?[pt,sn]:D,{scrollBehavior:"auto"}),Xe.forEach(function(j){return wi(j)&&j.target===(I?xt.scrollingElement||sn:D)&&(j.smooth=!1)}),gt=wi(y.snapTo)?y.snapTo:y.snapTo==="labels"?O_(n):y.snapTo==="labelsDirectional"?B_(n):y.directional!==!1?function(j,xe){return ld(y.snapTo)(j,bi()-ue<500?0:xe.direction)}:Ee.utils.snap(y.snapTo),le=y.duration||{min:.1,max:2},le=ds(le)?oo(le.min,le.max):oo(le,le),L=Ee.delayedCall(y.delay||Q/2||.1,function(){var j=be(),xe=bi()-ue<500,ee=me.tween;if((xe||Math.abs(R.getVelocity())<10)&&!ee&&!Kl&&J!==j){var we=(j-Ie)/nt,$e=n&&!N?n.totalProgress():we,He=xe?0:($e-ge)/(bi()-io)*1e3||0,Et=Ee.utils.clamp(-we,1-we,Zs(He/2)*He/.185),Xt=we+(y.inertia===!1?0:Et),Ct,yt,ht=y,Qt=ht.onStart,St=ht.onInterrupt,mi=ht.onComplete;if(Ct=gt(Xt,R),so(Ct)||(Ct=Xt),yt=Math.max(0,Math.round(Ie+Ct*nt)),j<=Fe&&j>=Ie&&yt!==j){if(ee&&!ee._initted&&ee.data<=Zs(yt-j))return;y.inertia===!1&&(Et=Ct-we),me(yt,{duration:le(Zs(Math.max(Zs(Xt-$e),Zs(Ct-$e))*.185/He/.05||0)),ease:y.ease||"power3",data:Zs(yt-j),onInterrupt:function(){return L.restart(!0)&&St&&Ys(R,St)},onComplete:function(){R.update(),J=be(),n&&!N&&(V?V.resetTo("totalProgress",Ct,n._tTime/n._tDur):n.progress(Ct)),fe=ge=n&&!N?n.totalProgress():R.progress,v&&v(R),mi&&Ys(R,mi)}},j,Et*nt,yt-j-Et*nt),Qt&&Ys(R,Qt,me.tween)}}else R.isActive&&J!==j&&L.restart(!0)}).pause()),l&&(jc[l]=R),d=R.trigger=Fi(d||c!==!0&&c),oe=d&&d._gsap&&d._gsap.stRevert,oe&&(oe=oe(R)),c=c===!0?d:Fi(c),rn(o)&&(o={targets:d,className:o}),c&&(x===!1||x===pn||(x=!x&&c.parentNode&&c.parentNode.style&&mn(c.parentNode).display==="flex"?!1:Jt),R.pin=c,De=Ee.core.getCache(c),De.spacer?Ft=De.pinState:(w&&(w=Fi(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),De.spacerIsNative=!!w,w&&(De.spacerState=kl(w))),De.spacer=ct=w||xt.createElement("div"),ct.classList.add("pin-spacer"),l&&ct.classList.add("pin-spacer-"+l),De.pinState=Ft=kl(c)),i.force3D!==!1&&Ee.set(c,{force3D:!0}),R.spacer=ct=De.spacer,ne=mn(c),Oe=ne[x+C.os2],ze=Ee.getProperty(c),ce=Ee.quickSetter(c,C.a,ii),Yc(c,ct,ne),U=kl(c)),te){Wt=ds(te)?mm(te,gm):gm,Z=Bl("scroller-start",l,D,C,Wt,0),Ke=Bl("scroller-end",l,D,C,Wt,0,Z),ot=Z["offset"+C.op.d2];var he=Fi(sr(D,"content")||D);ft=this.markerStart=Bl("start",l,he,C,Wt,ot,0,g),at=this.markerEnd=Bl("end",l,he,C,Wt,ot,0,g),g&&(de=Ee.quickSetter([ft,at],C.a,ii)),!B&&!(bn.length&&sr(D,"fixedMarkers")===!0)&&(U_(I?pt:D),Ee.set([Z,Ke],{force3D:!0}),S=Ee.quickSetter(Z,C.a,ii),se=Ee.quickSetter(Ke,C.a,ii))}if(g){var ae=g.vars.onUpdate,pe=g.vars.onUpdateParams;g.eventCallback("onUpdate",function(){R.update(0,0,1),ae&&ae.apply(g,pe||[])})}if(R.previous=function(){return Ye[Ye.indexOf(R)-1]},R.next=function(){return Ye[Ye.indexOf(R)+1]},R.revert=function(j,xe){if(!xe)return R.kill(!0);var ee=j!==!1||!R.enabled,we=Mi;ee!==R.isReverted&&(ee&&($=Math.max(be(),R.scroll.rec||0),ye=R.progress,K=n&&n.progress()),ft&&[ft,at,Z,Ke].forEach(function($e){return $e.style.display=ee?"none":"block"}),ee&&(Mi=R,R.update(ee)),c&&(!T||!R.isActive)&&(ee?G_(c,ct,Ft):Yc(c,ct,mn(c),E)),ee||R.update(ee),Mi=we,R.isReverted=ee)},R.refresh=function(j,xe,ee,we){if(!((Mi||!R.enabled)&&!xe)){if(c&&j&&gn){oi(r,"scrollEnd",Om);return}!Bi&&ie&&ie(R),Mi=R,me.tween&&!ee&&(me.tween.kill(),me.tween=0),V&&V.pause(),_&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(k){return k.vars.immediateRender&&k.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var $e=Se(),He=Ue(),Et=g?g.duration():kn(D,C),Xt=nt<=.01||!nt,Ct=0,yt=we||0,ht=ds(ee)?ee.end:i.end,Qt=i.endTrigger||d,St=ds(ee)?ee.start:i.start||(i.start===0||!d?0:c?"0 0":"0 100%"),mi=R.pinnedContainer=i.pinnedContainer&&Fi(i.pinnedContainer,R),Ki=d&&Math.max(0,Ye.indexOf(R))||0,Ut=Ki,qt,jt,$i,Ds,ei,Ot,un,Ua,al,Mr,b,F,q;for(te&&ds(ee)&&(F=Ee.getProperty(Z,C.p),q=Ee.getProperty(Ke,C.p));Ut-- >0;)Ot=Ye[Ut],Ot.end||Ot.refresh(0,1)||(Mi=R),un=Ot.pin,un&&(un===d||un===c||un===mi)&&!Ot.isReverted&&(Mr||(Mr=[]),Mr.unshift(Ot),Ot.revert(!0,!0)),Ot!==Ye[Ut]&&(Ki--,Ut--);for(wi(St)&&(St=St(R)),St=cm(St,"start",R),Ie=ym(St,d,$e,C,be(),ft,Z,R,He,W,B,Et,g,R._startClamp&&"_startClamp")||(c?-.001:0),wi(ht)&&(ht=ht(R)),rn(ht)&&!ht.indexOf("+=")&&(~ht.indexOf(" ")?ht=(rn(St)?St.split(" ")[0]:"")+ht:(Ct=Vl(ht.substr(2),$e),ht=rn(St)?St:(g?Ee.utils.mapRange(0,g.duration(),g.scrollTrigger.start,g.scrollTrigger.end,Ie):Ie)+Ct,Qt=d)),ht=cm(ht,"end",R),Fe=Math.max(Ie,ym(ht||(Qt?"100% 0":Et),Qt,$e,C,be()+Ct,at,Ke,R,He,W,B,Et,g,R._endClamp&&"_endClamp"))||-.001,Ct=0,Ut=Ki;Ut--;)Ot=Ye[Ut]||{},un=Ot.pin,un&&Ot.start-Ot._pinPush<=Ie&&!g&&Ot.end>0&&(qt=Ot.end-(R._startClamp?Math.max(0,Ot.start):Ot.start),(un===d&&Ot.start-Ot._pinPush<Ie||un===mi)&&isNaN(St)&&(Ct+=qt*(1-Ot.progress)),un===c&&(yt+=qt));if(Ie+=Ct,Fe+=Ct,R._startClamp&&(R._startClamp+=Ct),R._endClamp&&!Bi&&(R._endClamp=Fe||-.001,Fe=Math.min(Fe,kn(D,C))),nt=Fe-Ie||(Ie-=.01)&&.001,Xt&&(ye=Ee.utils.clamp(0,1,Ee.utils.normalize(Ie,Fe,$))),R._pinPush=yt,ft&&Ct&&(qt={},qt[C.a]="+="+Ct,mi&&(qt[C.p]="-="+be()),Ee.set([ft,at],qt)),c&&!(Qc&&R.end>=kn(D,C)))qt=mn(c),Ds=C===Zt,$i=be(),ut=parseFloat(ze(C.a))+yt,!Et&&Fe>1&&(b=(I?xt.scrollingElement||sn:D).style,b={style:b,value:b["overflow"+C.a.toUpperCase()]},I&&mn(pt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(b.style["overflow"+C.a.toUpperCase()]="scroll")),Yc(c,ct,qt),U=kl(c),jt=ar(c,!0),Ua=B&&rr(D,Ds?Si:Zt)(),x?(E=[x+C.os2,nt+yt+ii],E.t=ct,Ut=x===Jt?Zl(c,C)+nt+yt:0,Ut&&(E.push(C.d,Ut+ii),ct.style.flexBasis!=="auto"&&(ct.style.flexBasis=Ut+ii)),js(E),mi&&Ye.forEach(function(k){k.pin===mi&&k.vars.pinSpacing!==!1&&(k._subPinOffset=!0)}),B&&be($)):(Ut=Zl(c,C),Ut&&ct.style.flexBasis!=="auto"&&(ct.style.flexBasis=Ut+ii)),B&&(ei={top:jt.top+(Ds?$i-Ie:Ua)+ii,left:jt.left+(Ds?Ua:$i-Ie)+ii,boxSizing:"border-box",position:"fixed"},ei[ps]=ei["max"+ea]=Math.ceil(jt.width)+ii,ei[ms]=ei["max"+od]=Math.ceil(jt.height)+ii,ei[pn]=ei[pn+uo]=ei[pn+lo]=ei[pn+co]=ei[pn+fo]="0",ei[Jt]=qt[Jt],ei[Jt+uo]=qt[Jt+uo],ei[Jt+lo]=qt[Jt+lo],ei[Jt+co]=qt[Jt+co],ei[Jt+fo]=qt[Jt+fo],Gt=H_(Ft,ei,T),Bi&&be(0)),n?(al=n._initted,Hc(1),n.render(n.duration(),!0,!0),Le=ze(C.a)-ut+nt+yt,z=Math.abs(nt-Le)>1,B&&z&&Gt.splice(Gt.length-2,2),n.render(0,!0,!0),al||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Hc(0)):Le=nt,b&&(b.value?b.style["overflow"+C.a.toUpperCase()]=b.value:b.style.removeProperty("overflow-"+C.a));else if(d&&be()&&!g)for(jt=d.parentNode;jt&&jt!==pt;)jt._pinOffset&&(Ie-=jt._pinOffset,Fe-=jt._pinOffset),jt=jt.parentNode;Mr&&Mr.forEach(function(k){return k.revert(!1,!0)}),R.start=Ie,R.end=Fe,Ae=Ve=Bi?$:be(),!g&&!Bi&&!Ur&&(Ae<$&&be($),R.scroll.rec=0),R.revert(!1,!0),ue=bi(),L&&(J=-1,L.restart(!0)),Mi=0,n&&N&&(n._initted||K)&&n.progress()!==K&&n.progress(K||0,!0).render(n.time(),!0,!0),(Xt||ye!==R.progress||g||_||n&&!n._initted)&&(n&&!N&&(n._initted||ye||n.vars.immediateRender!==!1)&&n.totalProgress(g&&Ie<-.001&&!ye?Ee.utils.normalize(Ie,Fe,0):ye,!0),R.progress=Xt||(Ae-Ie)/nt===ye?0:ye),c&&x&&(ct._pinOffset=Math.round(R.progress*Le)),V&&V.invalidate(),isNaN(F)||(F-=Ee.getProperty(Z,C.p),q-=Ee.getProperty(Ke,C.p),zl(Z,C,F),zl(ft,C,F-(we||0)),zl(Ke,C,q),zl(at,C,q-(we||0))),Xt&&!Bi&&R.update(),u&&!Bi&&!vt&&(vt=!0,u(R),vt=!1)}},R.getVelocity=function(){return(be()-Ve)/(bi()-io)*1e3||0},R.endAnimation=function(){to(R.callbackAnimation),n&&(V?V.progress(1):n.paused()?N||to(n,R.direction<0,1):to(n,n.reversed()))},R.labelToScroll=function(j){return n&&n.labels&&(Ie||R.refresh()||Ie)+n.labels[j]/n.duration()*nt||0},R.getTrailing=function(j){var xe=Ye.indexOf(R),ee=R.direction>0?Ye.slice(0,xe).reverse():Ye.slice(xe+1);return(rn(j)?ee.filter(function(we){return we.vars.preventOverlaps===j}):ee).filter(function(we){return R.direction>0?we.end<=Ie:we.start>=Fe})},R.update=function(j,xe,ee){if(!(g&&!ee&&!j)){var we=Bi===!0?$:R.scroll(),$e=j?0:(we-Ie)/nt,He=$e<0?0:$e>1?1:$e||0,Et=R.progress,Xt,Ct,yt,ht,Qt,St,mi,Ki;if(xe&&(Ve=Ae,Ae=g?be():we,y&&(ge=fe,fe=n&&!N?n.totalProgress():He)),p&&c&&!Mi&&!Dl&&gn&&(!He&&Ie<we+(we-Ve)/(bi()-io)*p?He=1e-4:He===1&&Fe>we+(we-Ve)/(bi()-io)*p&&(He=.9999)),He!==Et&&R.enabled){if(Xt=R.isActive=!!He&&He<1,Ct=!!Et&&Et<1,St=Xt!==Ct,Qt=St||!!He!=!!Et,R.direction=He>Et?1:-1,R.progress=He,Qt&&!Mi&&(yt=He&&!Et?0:He===1?1:Et===1?2:3,N&&(ht=!St&&O[yt+1]!=="none"&&O[yt+1]||O[yt],Ki=n&&(ht==="complete"||ht==="reset"||ht in n))),P&&(St||Ki)&&(Ki||h||!n)&&(wi(P)?P(R):R.getTrailing(P).forEach(function($i){return $i.endAnimation()})),N||(V&&!Mi&&!Dl?(V._dp._time-V._start!==V._time&&V.render(V._dp._time-V._start),V.resetTo?V.resetTo("totalProgress",He,n._tTime/n._tDur):(V.vars.totalProgress=He,V.invalidate().restart())):n&&n.totalProgress(He,!!(Mi&&(ue||j)))),c){if(j&&x&&(ct.style[x+C.os2]=Oe),!B)ce(ro(ut+Le*He));else if(Qt){if(mi=!j&&He>Et&&Fe+1>we&&we+1>=kn(D,C),T)if(!j&&(Xt||mi)){var Ut=ar(c,!0),qt=we-Ie;Sm(c,pt,Ut.top+(C===Zt?qt:0)+ii,Ut.left+(C===Zt?0:qt)+ii)}else Sm(c,ct);js(Xt||mi?Gt:U),z&&He<1&&Xt||ce(ut+(He===1&&!mi?Le:0))}}y&&!me.tween&&!Mi&&!Dl&&L.restart(!0),o&&(St||A&&He&&(He<1||!Wc))&&po(o.targets).forEach(function($i){return $i.classList[Xt||A?"add":"remove"](o.className)}),a&&!N&&!j&&a(R),Qt&&!Mi?(N&&(Ki&&(ht==="complete"?n.pause().totalProgress(1):ht==="reset"?n.restart(!0).pause():ht==="restart"?n.restart(!0):n[ht]()),a&&a(R)),(St||!Wc)&&(f&&St&&Ys(R,f),H[yt]&&Ys(R,H[yt]),A&&(He===1?R.kill(!1,1):H[yt]=0),St||(yt=He===1?1:3,H[yt]&&Ys(R,H[yt]))),M&&!Xt&&Math.abs(R.getVelocity())>(so(M)?M:2500)&&(to(R.callbackAnimation),V?V.progress(1):to(n,ht==="reverse"?1:!He,1))):N&&a&&!Mi&&a(R)}if(se){var jt=g?we/g.duration()*(g._caScrollDist||0):we;S(jt+(Z._isFlipped?1:0)),se(jt)}de&&de(-we/g.duration()*(g._caScrollDist||0))}},R.enable=function(j,xe){R.enabled||(R.enabled=!0,oi(D,"resize",ao),I||oi(D,"scroll",Js),ie&&oi(r,"refreshInit",ie),j!==!1&&(R.progress=ye=0,Ae=Ve=J=be()),xe!==!1&&R.refresh())},R.getTween=function(j){return j&&me?me.tween:V},R.setPositions=function(j,xe,ee,we){if(g){var $e=g.scrollTrigger,He=g.duration(),Et=$e.end-$e.start;j=$e.start+Et*j/He,xe=$e.start+Et*xe/He}R.refresh(!1,!1,{start:dm(j,ee&&!!R._startClamp),end:dm(xe,ee&&!!R._endClamp)},we),R.update()},R.adjustPinSpacing=function(j){if(E&&j){var xe=E.indexOf(C.d)+1;E[xe]=parseFloat(E[xe])+j+ii,E[1]=parseFloat(E[1])+j+ii,js(E)}},R.disable=function(j,xe){if(j!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,xe||V&&V.pause(),$=0,De&&(De.uncache=1),ie&&ai(r,"refreshInit",ie),L&&(L.pause(),me.tween&&me.tween.kill()&&(me.tween=0)),!I)){for(var ee=Ye.length;ee--;)if(Ye[ee].scroller===D&&Ye[ee]!==R)return;ai(D,"resize",ao),I||ai(D,"scroll",Js)}},R.kill=function(j,xe){R.disable(j,xe),V&&!xe&&V.kill(),l&&delete jc[l];var ee=Ye.indexOf(R);ee>=0&&Ye.splice(ee,1),ee===Oi&&Wl>0&&Oi--,ee=0,Ye.forEach(function(we){return we.scroller===R.scroller&&(ee=1)}),ee||Bi||Ur||(R.scroll.rec=0),n&&(n.scrollTrigger=null,j&&n.revert({kill:!1}),xe||n.kill()),ft&&[ft,at,Z,Ke].forEach(function(we){return we.parentNode&&we.parentNode.removeChild(we)}),ho===R&&(ho=0),c&&(De&&(De.uncache=1),ee=0,Ye.forEach(function(we){return we.pin===c&&ee++}),ee||(De.spacer=0)),i.onKill&&i.onKill(R)},Ye.push(R),R.enable(!1,!1),oe&&oe(R),n&&n.add&&!nt){var re=R.update;R.update=function(){R.update=re,Xe.cache++,Ie||Fe||R.refresh()},Ee.delayedCall(.01,R.update),nt=.01,Ie=Fe=0}else R.refresh();c&&z_()},r.register=function(i){return Ks||(Ee=i||Im(),Pm()&&window.document&&r.enable(),Ks=no),Ks},r.defaults=function(i){if(i)for(var n in i)Ol[n]=i[n];return Ol},r.disable=function(i,n){no=0,Ye.forEach(function(a){return a[n?"kill":"disable"](i)}),ai(Ze,"wheel",Js),ai(xt,"scroll",Js),clearInterval(Ll),ai(xt,"touchcancel",Bn),ai(pt,"touchstart",Bn),Fl(ai,xt,"pointerdown,touchstart,mousedown",hm),Fl(ai,xt,"pointerup,touchend,mouseup",pm),Yl.kill(),Nl(ai);for(var s=0;s<Xe.length;s+=3)Ul(ai,Xe[s],Xe[s+1]),Ul(ai,Xe[s],Xe[s+2])},r.enable=function(){if(Ze=window,xt=document,sn=xt.documentElement,pt=xt.body,Ee){if(po=Ee.utils.toArray,oo=Ee.utils.clamp,$c=Ee.core.context||Bn,Hc=Ee.core.suppressOverwrites||Bn,nd=Ze.history.scrollRestoration||"auto",ed=Ze.pageYOffset||0,Ee.core.globals("ScrollTrigger",r),pt){no=1,Qs=document.createElement("div"),Qs.style.height="100vh",Qs.style.position="absolute",Gm(),D_(),zt.register(Ee),r.isTouch=zt.isTouch,Fr=zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Kc=zt.isTouch===1,oi(Ze,"wheel",Js),id=[Ze,xt,sn,pt],Ee.matchMedia?(r.matchMedia=function(u){var h=Ee.matchMedia(),d;for(d in u)h.add(d,u[d]);return h},Ee.addEventListener("matchMediaInit",function(){km(),fd()}),Ee.addEventListener("matchMediaRevert",function(){return Bm()}),Ee.addEventListener("matchMedia",function(){hs(0,1),vs("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return qc(),qc})):console.warn("Requires GSAP 3.11.0 or later"),qc(),oi(xt,"scroll",Js);var i=pt.hasAttribute("style"),n=pt.style,s=n.borderTopStyle,a=Ee.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=ar(pt),Zt.m=Math.round(o.top+Zt.sc())||0,Si.m=Math.round(o.left+Si.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),i||(pt.setAttribute("style",""),pt.removeAttribute("style")),Ll=setInterval(xm,250),Ee.delayedCall(.5,function(){return Dl=0}),oi(xt,"touchcancel",Bn),oi(pt,"touchstart",Bn),Fl(oi,xt,"pointerdown,touchstart,mousedown",hm),Fl(oi,xt,"pointerup,touchend,mouseup",pm),Jc=Ee.utils.checkPrefix("transform"),Xl.push(Jc),Ks=bi(),Yl=Ee.delayedCall(.2,hs).pause(),$s=[xt,"visibilitychange",function(){var u=Ze.innerWidth,h=Ze.innerHeight;xt.hidden?(fm=u,um=h):(fm!==u||um!==h)&&ao()},xt,"DOMContentLoaded",hs,Ze,"load",hs,Ze,"resize",ao],Nl(oi),Ye.forEach(function(u){return u.enable(0,1)}),l=0;l<Xe.length;l+=3)Ul(ai,Xe[l],Xe[l+1]),Ul(ai,Xe[l],Xe[l+2])}else if(xt){var f=function u(){r.enable(),xt.removeEventListener("DOMContentLoaded",u)};xt.addEventListener("DOMContentLoaded",f)}}},r.config=function(i){"limitCallbacks"in i&&(Wc=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Ll)||(Ll=n)&&setInterval(xm,n),"ignoreMobileResize"in i&&(Kc=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Nl(ai)||Nl(oi,i.autoRefreshEvents||"none"),Em=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var s=Fi(i),a=Xe.indexOf(s),o=xs(s);~a&&Xe.splice(a,o?6:2),n&&(o?bn.unshift(Ze,n,pt,n,sn,n):bn.unshift(s,n))},r.clearMatchMedia=function(i){Ye.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,s){var a=(rn(i)?Fi(i):i).getBoundingClientRect(),o=a[s?ps:ms]*n||0;return s?a.right-o>0&&a.left+o<Ze.innerWidth:a.bottom-o>0&&a.top+o<Ze.innerHeight},r.positionInViewport=function(i,n,s){rn(i)&&(i=Fi(i));var a=i.getBoundingClientRect(),o=a[s?ps:ms],l=n==null?o/2:n in Jl?Jl[n]*o:~n.indexOf("%")?parseFloat(n)*o/100:parseFloat(n)||0;return s?(a.left+l)/Ze.innerWidth:(a.top+l)/Ze.innerHeight},r.killAll=function(i){if(Ye.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=_s.killAll||[];_s={},n.forEach(function(s){return s()})}},r})();Je.version="3.15.1";Je.saveStyles=function(r){return r?po(r).forEach(function(e){if(e&&e.style){var t=nn.indexOf(e);t>=0&&nn.splice(t,5),nn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),$c())}}):nn};Je.revert=function(r,e){return fd(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?ao(!0):(Ks||Je.register())&&hs(!0)};Je.update=function(r){return++Xe.cache&&or(r===!0?2:0)};Je.clearScrollMemory=zm;Je.maxScroll=function(r,e){return kn(r,e?Si:Zt)};Je.getScrollFunc=function(r,e){return rr(Fi(r),e?Si:Zt)};Je.getById=function(r){return jc[r]};Je.getAll=function(){return Ye.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!gn};Je.snapDirectional=ld;Je.addEventListener=function(r,e){var t=_s[r]||(_s[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=_s[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Je.batch=function(r,e){var t=[],i={},n=e.interval||.016,s=e.batchMax||1e9,a=function(f,u){var h=[],d=[],c=Ee.delayedCall(n,function(){u(h,d),h=[],d=[]}).pause();return function(x){h.length||c.restart(!0),h.push(x.trigger),d.push(x),s<=h.length&&c.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&wi(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return wi(s)&&(s=s(),oi(Je,"refresh",function(){return s=e.batchMax()})),po(r).forEach(function(l){var f={};for(o in i)f[o]=i[o];f.trigger=l,t.push(Je.create(f))}),t};var bm=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},Zc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(zt.isTouch?" pinch-zoom":""):"none",e===sn&&r(pt,t)},Gl={auto:1,scroll:1},X_=function(e){var t=e.event,i=e.target,n=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ee.core.getCache(s),o=bi(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Gl[(l=mn(s)).overflowY]||Gl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==i&&!xs(s)&&(Gl[(l=mn(s)).overflowY]||Gl[l.overflowX]),a._isScrollT=o}(a._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Hm=function(e,t,i,n){return zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&X_,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&oi(xt,zt.eventTypes[0],Tm,!1,!0)},onDisable:function(){return ai(xt,zt.eventTypes[0],Tm,!0)}})},q_=/(input|label|select|textarea)/i,wm,Tm=function(e){var t=q_.test(e.target.tagName);(t||wm)&&(e._gsapAllow=!0,wm=t)},Y_=function(e){ds(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,f=Fi(e.target)||sn,u=Ee.core.globals().ScrollSmoother,h=u&&u.get(),d=Fr&&(e.content&&Fi(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),c=rr(f,Zt),x=rr(f,Si),_=1,p=(zt.isTouch&&Ze.visualViewport?Ze.visualViewport.scale*Ze.visualViewport.width:Ze.outerWidth)/Ze.innerWidth,m=0,v=wi(n)?function(){return n(o)}:function(){return n||2.8},A,y,T=Hm(f,e.type,!0,s),w=function(){return y=!1},g=Bn,M=Bn,P=function(){l=kn(f,Zt),M=oo(Fr?1:0,l),i&&(g=oo(0,kn(f,Si))),A=gs},C=function(){d._gsap.y=ro(parseFloat(d._gsap.y)+c.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",c.offset=c.cacheID=0},N=function(){if(y){requestAnimationFrame(w);var te=ro(o.deltaY/2),W=M(c.v-te);if(d&&W!==c.v+c.offset){c.offset=W-c.v;var R=ro((parseFloat(d&&d._gsap.y)||0)-c.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",c.cacheID=Xe.cache,or()}return!0}c.offset&&C(),y=!0},D,G,I,B,H=function(){P(),D.isActive()&&D.vars.scrollY>l&&(c()>l?D.progress(1)&&c(l):D.resetTo("scrollY",l))};return d&&Ee.set(d,{y:"+=0"}),e.ignoreCheck=function(O){return Fr&&O.type==="touchmove"&&N(O)||_>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){y=!1;var O=_;_=ro((Ze.visualViewport&&Ze.visualViewport.scale||1)/p),D.pause(),O!==_&&Zc(f,_>1.01?!0:i?!1:"x"),G=x(),I=c(),P(),A=gs},e.onRelease=e.onGestureStart=function(O,te){if(c.offset&&C(),!te)B.restart(!0);else{Xe.cache++;var W=v(),R,ie;i&&(R=x(),ie=R+W*.05*-O.velocityX/.227,W*=bm(x,R,ie,kn(f,Si)),D.vars.scrollX=g(ie)),R=c(),ie=R+W*.05*-O.velocityY/.227,W*=bm(c,R,ie,kn(f,Zt)),D.vars.scrollY=M(ie),D.invalidate().duration(W).play(.01),(Fr&&D.vars.scrollY>=l||R>=l-1)&&Ee.to({},{onUpdate:H,duration:W})}a&&a(O)},e.onWheel=function(){D._ts&&D.pause(),bi()-m>1e3&&(A=0,m=bi())},e.onChange=function(O,te,W,R,ie){if(gs!==A&&P(),te&&i&&x(g(R[2]===te?G+(O.startX-O.x):x()+te-R[1])),W){c.offset&&C();var Se=ie[2]===W,Ue=Se?I+O.startY-O.y:c()+W-ie[1],J=M(Ue);Se&&Ue!==J&&(I+=J-Ue),c(J)}(W||te)&&or()},e.onEnable=function(){Zc(f,i?!1:"x"),Je.addEventListener("refresh",H),oi(Ze,"resize",H),c.smooth&&(c.target.style.scrollBehavior="auto",c.smooth=x.smooth=!1),T.enable()},e.onDisable=function(){Zc(f,!0),ai(Ze,"resize",H),Je.removeEventListener("refresh",H),T.kill()},e.lockAxis=e.lockAxis!==!1,o=new zt(e),o.iOS=Fr,Fr&&!c()&&c(1),Fr&&Ee.ticker.add(Bn),B=o._dc,D=Ee.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Vm(c,c(),function(){return D.pause()})},onUpdate:or,onComplete:B.vars.onComplete}),o};Je.sort=function(r){if(wi(r))return Ye.sort(r);var e=Ze.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Ze.innerHeight}),Ye.sort(r||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new zt(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return Ui;if(r===!0&&Ui)return Ui.enable();if(r===!1){Ui&&Ui.kill(),Ui=r;return}var e=r instanceof zt?r:Y_(r);return Ui&&Ui.target===e.target&&Ui.kill(),xs(e.target)&&(Ui=e),e};Je.core={_getVelocityProp:Il,_inputObserver:Hm,_scrollers:Xe,_proxies:bn,bridge:{ss:function(){gn||vs("scrollStart"),gn=bi()},ref:function(){return Mi}}};Im()&&Ee.registerPlugin(Je);var $l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Wm=([r,e,t])=>{let i=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(e).forEach(n=>{i.setAttribute(n,String(e[n]))}),t?.length&&t.forEach(n=>{let s=Wm(n);i.appendChild(s)}),i},Xm=(r,e={})=>{let i={...$l,...e};return Wm(["svg",i,r])};var qm=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();var Ym=r=>{for(let e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var Zm=r=>{let e="",t=!1;for(let i of r){if(i==="-"||i==="_"||i<=" "){t=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=t?i.toUpperCase():i,t=!1}return e};var Jm=r=>{let e=Zm(r);return e.charAt(0).toUpperCase()+e.slice(1)};var Z_=r=>Array.from(r.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),Km=r=>typeof r=="string"?r:!r||!r.class?"":r.class&&typeof r.class=="string"?r.class.split(" "):r.class&&Array.isArray(r.class)?r.class:"",ud=(r,{nameAttr:e,icons:t,attrs:i})=>{let n=r.getAttribute(e);if(n==null)return;let s=Jm(n),a=t[s];if(!a)return console.warn(`${r.outerHTML} icon name was not found in the provided icons object.`);let o=Z_(r),l=Ym(o)?{}:{"aria-hidden":"true"},f={...$l,"data-lucide":n,...l,...i,...o},u=Km(o),h=Km(i),d=qm("lucide",`lucide-${n}`,...u,...h);d&&Object.assign(f,{class:d});let c=Xm(a,f);return r.parentNode?.replaceChild(c,r)};var cd=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];var dd=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];var hd=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];var pd=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];var md=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];var gd=[["path",{d:"M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"}],["path",{d:"M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"}]];var xd=[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]];var _d=[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]];var vd=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"}]];var yd=({icons:r={},nameAttr:e="data-lucide",attrs:t={},root:i=document,inTemplates:n}={})=>{if(!Object.values(r).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof i>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(i.querySelectorAll(`[${e}]`)).forEach(a=>ud(a,{nameAttr:e,icons:r,attrs:t})),n&&Array.from(i.querySelectorAll("template")).forEach(o=>yd({icons:r,nameAttr:e,attrs:t,root:o.content,inTemplates:n})),e==="data-lucide"){let a=i.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(o=>ud(o,{nameAttr:"icon-name",icons:r,attrs:t})))}};var bg=0,$d=1,wg=2;var qo=1,Tg=2,Ca=3,Kr=0,Gi=1,qn=2,Es=0,Ra=1,Qd=2,jd=3,eh=4,Ag=5;var Cs=100,Eg=101,Cg=102,Rg=103,Pg=104,Ig=200,Lg=201,Dg=202,Ng=203,th=204,ih=205,Fg=206,Ug=207,Og=208,Bg=209,kg=210,zg=211,Gg=212,Vg=213,Hg=214,bf=0,wf=1,Tf=2,xa=3,Af=4,Ef=5,Cf=6,Rf=7,nh=0,Wg=1,Xg=2,Yn=0,rh=1,sh=2,ah=3,Yo=4,oh=5,lh=6,fh=7;var uh=300,Rs=301,Pa=302,eu=303,tu=304,Pf=1e3,Gn=1001,If=1002,fi=1003,qg=1004;var Zo=1005;var ki=1006,iu=1007;var _r=1008;var Zi=1009,ch=1010,dh=1011,Ia=1012,nu=1013,Pn=1014,vn=1015,In=1016,ru=1017,su=1018,Ps=1020,hh=35902,ph=35899,mh=1021,gh=1022,Ln=1023,mr=1026,vr=1027,au=1028,ou=1029,$r=1030,lu=1031;var fu=1033,Jo=33776,Ko=33777,$o=33778,Qo=33779,uu=35840,cu=35841,du=35842,hu=35843,pu=36196,mu=37492,gu=37496,xu=37488,_u=37489,jo=37490,vu=37491,yu=37808,Su=37809,Mu=37810,bu=37811,wu=37812,Tu=37813,Au=37814,Eu=37815,Cu=37816,Ru=37817,Pu=37818,Iu=37819,Lu=37820,Du=37821,Nu=36492,Fu=36494,Uu=36495,Ou=36283,Bu=36284,el=36285,ku=36286;var bo=2300,Lf=2301,yf=2302,Hd=2303,Wd=2400,Xd=2401,qd=2402;var Yg=3200;var zu=0,Zg=1,yr="",Ei="srgb",wo="srgb-linear",To="linear",mt="srgb";var Sf=7680;var Jg=519,Kg=512,$g=513,Qg=514,xh=515,jg=516,ex=517,_h=518,vh=519,tx=35044;var yh="300 es",_n=2e3,_a=2001;function J_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function K_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function va(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ix(){let r=va("canvas");return r.style.display="block",r}var $m={},ya=null;function Sh(...r){let e="THREE."+r.shift();ya?ya("log",e,...r):console.log(e,...r)}function nx(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Be(...r){r=nx(r);let e="THREE."+r.shift();if(ya)ya("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ke(...r){r=nx(r);let e="THREE."+r.shift();if(ya)ya("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Mo(...r){let e=r.join(" ");e in $m||($m[e]=!0,Be(...r))}function rx(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var sx={[bf]:bf,[Tf]:Cf,[Af]:Af,[xa]:Ef,[wf]:wf,[Cf]:Tf,[Rf]:Rf,[Ef]:xa},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},Ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sd=Math.PI/180,Df=180/Math.PI;function tl(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ti[r&255]+Ti[r>>8&255]+Ti[r>>16&255]+Ti[r>>24&255]+"-"+Ti[e&255]+Ti[e>>8&255]+"-"+Ti[e>>16&15|64]+Ti[e>>24&255]+"-"+Ti[t&63|128]+Ti[t>>8&255]+"-"+Ti[t>>16&255]+Ti[t>>24&255]+Ti[i&255]+Ti[i>>8&255]+Ti[i>>16&255]+Ti[i>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function $_(r,e){return(r%e+e)%e}function Md(r,e,t){return(1-t)*r+t*e}function ax(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Mh(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Q_(r,e){if(e.constructor===Float32Array)return r;let t=Mh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function j_(r,e){if(e.constructor===Float32Array)return r;let t=Mh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var Eh=class Eh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Eh.prototype.isVector2=!0;var Qe=Eh,Hn=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],f=i[n+1],u=i[n+2],h=i[n+3],d=s[a+0],c=s[a+1],x=s[a+2],_=s[a+3];if(h!==_||l!==d||f!==c||u!==x){let p=l*d+f*c+u*x+h*_;p<0&&(d=-d,c=-c,x=-x,_=-_,p=-p);let m=1-o;if(p<.9995){let v=Math.acos(p),A=Math.sin(v);m=Math.sin(m*v)/A,o=Math.sin(o*v)/A,l=l*m+d*o,f=f*m+c*o,u=u*m+x*o,h=h*m+_*o}else{l=l*m+d*o,f=f*m+c*o,u=u*m+x*o,h=h*m+_*o;let v=1/Math.sqrt(l*l+f*f+u*u+h*h);l*=v,f*=v,u*=v,h*=v}}e[t]=l,e[t+1]=f,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],f=i[n+2],u=i[n+3],h=s[a],d=s[a+1],c=s[a+2],x=s[a+3];return e[t]=o*x+u*h+l*c-f*d,e[t+1]=l*x+u*d+f*h-o*c,e[t+2]=f*x+u*c+o*d-l*h,e[t+3]=u*x-o*h-l*d-f*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,f=o(i/2),u=o(n/2),h=o(s/2),d=l(i/2),c=l(n/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*h+f*c*x,this._y=f*c*h-d*u*x,this._z=f*u*x+d*c*h,this._w=f*u*h-d*c*x;break;case"YXZ":this._x=d*u*h+f*c*x,this._y=f*c*h-d*u*x,this._z=f*u*x-d*c*h,this._w=f*u*h+d*c*x;break;case"ZXY":this._x=d*u*h-f*c*x,this._y=f*c*h+d*u*x,this._z=f*u*x+d*c*h,this._w=f*u*h-d*c*x;break;case"ZYX":this._x=d*u*h-f*c*x,this._y=f*c*h+d*u*x,this._z=f*u*x-d*c*h,this._w=f*u*h+d*c*x;break;case"YZX":this._x=d*u*h+f*c*x,this._y=f*c*h+d*u*x,this._z=f*u*x-d*c*h,this._w=f*u*h-d*c*x;break;case"XZY":this._x=d*u*h-f*c*x,this._y=f*c*h-d*u*x,this._z=f*u*x+d*c*h,this._w=f*u*h+d*c*x;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],f=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){let c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(u-l)*c,this._y=(s-f)*c,this._z=(a-n)*c}else if(i>o&&i>h){let c=2*Math.sqrt(1+i-o-h);this._w=(u-l)/c,this._x=.25*c,this._y=(n+a)/c,this._z=(s+f)/c}else if(o>h){let c=2*Math.sqrt(1+o-i-h);this._w=(s-f)/c,this._x=(n+a)/c,this._y=.25*c,this._z=(l+u)/c}else{let c=2*Math.sqrt(1+h-i-o);this._w=(a-n)/c,this._x=(s+f)/c,this._y=(l+u)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,f=t._z,u=t._w;return this._x=i*u+a*o+n*f-s*l,this._y=n*u+a*l+s*o-i*f,this._z=s*u+a*f+i*l-n*o,this._w=a*u-i*o-n*l-s*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let f=Math.acos(o),u=Math.sin(f);l=Math.sin(l*f)/u,t=Math.sin(t*f)/u,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ch=class Ch{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,f=2*(a*n-o*i),u=2*(o*t-s*n),h=2*(s*i-a*t);return this.x=t+l*f+a*h-o*u,this.y=i+l*u+o*f-s*h,this.z=n+l*h+s*u-a*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bd.copy(this).projectOnVector(e),this.sub(bd)}reflect(e){return this.sub(bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ch.prototype.isVector3=!0;var Y=Ch,bd=new Y,Qm=new Hn,Rh=class Rh{constructor(e,t,i,n,s,a,o,l,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,f)}set(e,t,i,n,s,a,o,l,f){let u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],f=i[1],u=i[4],h=i[7],d=i[2],c=i[5],x=i[8],_=n[0],p=n[3],m=n[6],v=n[1],A=n[4],y=n[7],T=n[2],w=n[5],g=n[8];return s[0]=a*_+o*v+l*T,s[3]=a*p+o*A+l*w,s[6]=a*m+o*y+l*g,s[1]=f*_+u*v+h*T,s[4]=f*p+u*A+h*w,s[7]=f*m+u*y+h*g,s[2]=d*_+c*v+x*T,s[5]=d*p+c*A+x*w,s[8]=d*m+c*y+x*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],f=e[7],u=e[8];return t*a*u-t*o*f-i*s*u+i*o*l+n*s*f-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],f=e[7],u=e[8],h=u*a-o*f,d=o*l-u*s,c=f*s-a*l,x=t*h+i*d+n*c;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=h*_,e[1]=(n*f-u*i)*_,e[2]=(o*i-n*a)*_,e[3]=d*_,e[4]=(u*t-n*l)*_,e[5]=(n*s-o*t)*_,e[6]=c*_,e[7]=(i*l-f*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),f=Math.sin(s);return this.set(i*l,i*f,-i*(l*a+f*o)+a+e,-n*f,n*l,-n*(-f*a+l*o)+o+t,0,0,1),this}scale(e,t){return Mo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wd.makeScale(e,t)),this}rotate(e){return Mo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wd.makeRotation(-e)),this}translate(e,t){return Mo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rh.prototype.isMatrix3=!0;var Ge=Rh,wd=new Ge,jm=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eg=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ev(){let r={enabled:!0,workingColorSpace:wo,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(n.r=pr(n.r),n.g=pr(n.g),n.b=pr(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(n.r=ga(n.r),n.g=ga(n.g),n.b=ga(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===yr?To:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[wo]:{primaries:e,whitePoint:i,transfer:To,toXYZ:jm,fromXYZ:eg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:jm,fromXYZ:eg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),r}var tt=ev();function pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ga(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ta,Nf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ta===void 0&&(ta=va("canvas")),ta.width=e.width,ta.height=e.height;let n=ta.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=ta}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=va("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=pr(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pr(t[i]/255)*255):t[i]=pr(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tv=0,Sa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Td(n[a].image)):s.push(Td(n[a]))}else s=Td(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Td(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var iv=0,Ad=new Y,zi=class r extends Vn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=Gn,n=Gn,s=ki,a=_r,o=Ln,l=Zi,f=r.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=tl(),this.name="",this.source=new Sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ad).x}get height(){return this.source.getSize(Ad).y}get depth(){return this.source.getSize(Ad).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pf:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case If:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pf:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case If:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zi.DEFAULT_IMAGE=null;zi.DEFAULT_MAPPING=uh;zi.DEFAULT_ANISOTROPY=1;var Ph=class Ph{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,f=l[0],u=l[4],h=l[8],d=l[1],c=l[5],x=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(x+p)<.1&&Math.abs(f+c+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(f+1)/2,y=(c+1)/2,T=(m+1)/2,w=(u+d)/4,g=(h+_)/4,M=(x+p)/4;return A>y&&A>T?A<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(A),n=w/i,s=g/i):y>T?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=w/n,s=M/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=g/s,n=M/s),this.set(i,n,s,t),this}let v=Math.sqrt((p-x)*(p-x)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((f+c+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ph.prototype.isVector4=!0;var Pt=Ph,Ff=class extends Vn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ki,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new zi({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ki,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Sa(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends Ff{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ao=class extends zi{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=fi,this.minFilter=fi,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uf=class extends zi{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=fi,this.minFilter=fi,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var jf=class jf{constructor(e,t,i,n,s,a,o,l,f,u,h,d,c,x,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,f,u,h,d,c,x,_,p)}set(e,t,i,n,s,a,o,l,f,u,h,d,c,x,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=f,m[6]=u,m[10]=h,m[14]=d,m[3]=c,m[7]=x,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jf().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/ia.setFromMatrixColumn(e,0).length(),s=1/ia.setFromMatrixColumn(e,1).length(),a=1/ia.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),f=Math.sin(n),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=a*u,c=a*h,x=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=f,t[1]=c+x*f,t[5]=d-_*f,t[9]=-o*l,t[2]=_-d*f,t[6]=x+c*f,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,c=l*h,x=f*u,_=f*h;t[0]=d+_*o,t[4]=x*o-c,t[8]=a*f,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=c*o-x,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,c=l*h,x=f*u,_=f*h;t[0]=d-_*o,t[4]=-a*h,t[8]=x+c*o,t[1]=c+x*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*f,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,c=a*h,x=o*u,_=o*h;t[0]=l*u,t[4]=x*f-c,t[8]=d*f+_,t[1]=l*h,t[5]=_*f+d,t[9]=c*f-x,t[2]=-f,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,c=a*f,x=o*l,_=o*f;t[0]=l*u,t[4]=_-d*h,t[8]=x*h+c,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-f*u,t[6]=c*h+x,t[10]=d-_*h}else if(e.order==="XZY"){let d=a*l,c=a*f,x=o*l,_=o*f;t[0]=l*u,t[4]=-h,t[8]=f*u,t[1]=d*h+_,t[5]=a*u,t[9]=c*h-x,t[2]=x*h-c,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nv,e,rv)}lookAt(e,t,i){let n=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Or.crossVectors(i,an),Or.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Or.crossVectors(i,an)),Or.normalize(),Ql.crossVectors(an,Or),n[0]=Or.x,n[4]=Ql.x,n[8]=an.x,n[1]=Or.y,n[5]=Ql.y,n[9]=an.y,n[2]=Or.z,n[6]=Ql.z,n[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],f=i[12],u=i[1],h=i[5],d=i[9],c=i[13],x=i[2],_=i[6],p=i[10],m=i[14],v=i[3],A=i[7],y=i[11],T=i[15],w=n[0],g=n[4],M=n[8],P=n[12],C=n[1],N=n[5],D=n[9],G=n[13],I=n[2],B=n[6],H=n[10],O=n[14],te=n[3],W=n[7],R=n[11],ie=n[15];return s[0]=a*w+o*C+l*I+f*te,s[4]=a*g+o*N+l*B+f*W,s[8]=a*M+o*D+l*H+f*R,s[12]=a*P+o*G+l*O+f*ie,s[1]=u*w+h*C+d*I+c*te,s[5]=u*g+h*N+d*B+c*W,s[9]=u*M+h*D+d*H+c*R,s[13]=u*P+h*G+d*O+c*ie,s[2]=x*w+_*C+p*I+m*te,s[6]=x*g+_*N+p*B+m*W,s[10]=x*M+_*D+p*H+m*R,s[14]=x*P+_*G+p*O+m*ie,s[3]=v*w+A*C+y*I+T*te,s[7]=v*g+A*N+y*B+T*W,s[11]=v*M+A*D+y*H+T*R,s[15]=v*P+A*G+y*O+T*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],f=e[13],u=e[2],h=e[6],d=e[10],c=e[14],x=e[3],_=e[7],p=e[11],m=e[15],v=l*c-f*d,A=o*c-f*h,y=o*d-l*h,T=a*c-f*u,w=a*d-l*u,g=a*h-o*u;return t*(_*v-p*A+m*y)-i*(x*v-p*T+m*w)+n*(x*A-_*T+m*g)-s*(x*y-_*w+p*g)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],a=e[5],o=e[9],l=e[2],f=e[6],u=e[10];return t*(a*u-o*f)-i*(s*u-o*l)+n*(s*f-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],f=e[7],u=e[8],h=e[9],d=e[10],c=e[11],x=e[12],_=e[13],p=e[14],m=e[15],v=t*o-i*a,A=t*l-n*a,y=t*f-s*a,T=i*l-n*o,w=i*f-s*o,g=n*f-s*l,M=u*_-h*x,P=u*p-d*x,C=u*m-c*x,N=h*p-d*_,D=h*m-c*_,G=d*m-c*p,I=v*G-A*D+y*N+T*C-w*P+g*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(o*G-l*D+f*N)*B,e[1]=(n*D-i*G-s*N)*B,e[2]=(_*g-p*w+m*T)*B,e[3]=(d*w-h*g-c*T)*B,e[4]=(l*C-a*G-f*P)*B,e[5]=(t*G-n*C+s*P)*B,e[6]=(p*y-x*g-m*A)*B,e[7]=(u*g-d*y+c*A)*B,e[8]=(a*D-o*C+f*M)*B,e[9]=(i*C-t*D-s*M)*B,e[10]=(x*w-_*y+m*v)*B,e[11]=(h*y-u*w-c*v)*B,e[12]=(o*P-a*N-l*M)*B,e[13]=(t*N-i*P+n*M)*B,e[14]=(_*A-x*T-p*v)*B,e[15]=(u*T-h*A+d*v)*B,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,f=s*a,u=s*o;return this.set(f*a+i,f*o-n*l,f*l+n*o,0,f*o+n*l,u*o+i,u*l-n*a,0,f*l-n*o,u*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,f=s+s,u=a+a,h=o+o,d=s*f,c=s*u,x=s*h,_=a*u,p=a*h,m=o*h,v=l*f,A=l*u,y=l*h,T=i.x,w=i.y,g=i.z;return n[0]=(1-(_+m))*T,n[1]=(c+y)*T,n[2]=(x-A)*T,n[3]=0,n[4]=(c-y)*w,n[5]=(1-(d+m))*w,n[6]=(p+v)*w,n[7]=0,n[8]=(x+A)*g,n[9]=(p-v)*g,n[10]=(1-(d+_))*g,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ia.set(n[0],n[1],n[2]).length(),o=ia.set(n[4],n[5],n[6]).length(),l=ia.set(n[8],n[9],n[10]).length();s<0&&(a=-a),wn.copy(this);let f=1/a,u=1/o,h=1/l;return wn.elements[0]*=f,wn.elements[1]*=f,wn.elements[2]*=f,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,t.setFromRotationMatrix(wn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,a,o=_n,l=!1){let f=this.elements,u=2*s/(t-e),h=2*s/(i-n),d=(t+e)/(t-e),c=(i+n)/(i-n),x,_;if(l)x=s/(a-s),_=a*s/(a-s);else if(o===_n)x=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===_a)x=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return f[0]=u,f[4]=0,f[8]=d,f[12]=0,f[1]=0,f[5]=h,f[9]=c,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=_,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=_n,l=!1){let f=this.elements,u=2/(t-e),h=2/(i-n),d=-(t+e)/(t-e),c=-(i+n)/(i-n),x,_;if(l)x=1/(a-s),_=a/(a-s);else if(o===_n)x=-2/(a-s),_=-(a+s)/(a-s);else if(o===_a)x=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return f[0]=u,f[4]=0,f[8]=0,f[12]=d,f[1]=0,f[5]=h,f[9]=0,f[13]=c,f[2]=0,f[6]=0,f[10]=x,f[14]=_,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};jf.prototype.isMatrix4=!0;var wt=jf,ia=new Y,wn=new wt,nv=new Y(0,0,0),rv=new Y(1,1,1),Or=new Y,Ql=new Y,an=new Y,tg=new wt,ig=new Hn,gr=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],f=n[5],u=n[9],h=n[2],d=n[6],c=n[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,c),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,f),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,c),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,c),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,c),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,c));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,f),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,c),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ig.setFromEuler(this),this.setFromQuaternion(ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gr.DEFAULT_ORDER="XYZ";var Eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sv=0,ng=new Y,na=new Hn,lr=new wt,jl=new Y,go=new Y,av=new Y,ov=new Hn,rg=new Y(1,0,0),sg=new Y(0,1,0),ag=new Y(0,0,1),og={type:"added"},lv={type:"removed"},ra={type:"childadded",child:null},Ed={type:"childremoved",child:null},pi=class r extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new Y,t=new gr,i=new Hn,n=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ge}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(rg,e)}rotateY(e){return this.rotateOnAxis(sg,e)}rotateZ(e){return this.rotateOnAxis(ag,e)}translateOnAxis(e,t){return ng.copy(e).applyQuaternion(this.quaternion),this.position.add(ng.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rg,e)}translateY(e){return this.translateOnAxis(sg,e)}translateZ(e){return this.translateOnAxis(ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jl.copy(e):jl.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(go,jl,this.up):lr.lookAt(jl,go,this.up),this.quaternion.setFromRotationMatrix(lr),n&&(lr.extractRotation(n.matrixWorld),na.setFromRotationMatrix(lr),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(og),ra.child=e,this.dispatchEvent(ra),ra.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lv),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(og),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,av),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,ov,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let f=0,u=l.length;f<u;f++){let h=l[f];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,f=this.material.length;l<f;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),f=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),c=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),f.length>0&&(i.textures=f),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),c.length>0&&(i.animations=c),x.length>0&&(i.nodes=x)}return i.object=n,i;function a(o){let l=[];for(let f in o){let u=o[f];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pi.DEFAULT_UP=new Y(0,1,0);pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hr=class extends pi{constructor(){super(),this.isGroup=!0,this.type="Group"}},fv={type:"move"},Ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),m=this._getHandJoint(f,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=f.joints["index-finger-tip"],h=f.joints["thumb-tip"],d=u.position.distanceTo(h.position),c=.02,x=.005;f.inputState.pinching&&d>c+x?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&d<=c-x&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fv)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},ef={h:0,s:0,l:0};function Cd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=tt.workingColorSpace){if(e=$_(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Cd(a,s,e+1/3),this.g=Cd(a,s,e),this.b=Cd(a,s,e-1/3)}return tt.colorSpaceToWorking(this,n),this}setStyle(e,t=Ei){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ei){let i=ox[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return tt.workingToColorSpace(Ai.copy(this),e),Math.round(st(Ai.r*255,0,255))*65536+Math.round(st(Ai.g*255,0,255))*256+Math.round(st(Ai.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ai.copy(this),t);let i=Ai.r,n=Ai.g,s=Ai.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,f,u=(o+a)/2;if(o===a)l=0,f=0;else{let h=a-o;switch(f=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-i)/h+2;break;case s:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=f,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ai.copy(this),t),e.r=Ai.r,e.g=Ai.g,e.b=Ai.b,e}getStyle(e=Ei){tt.workingToColorSpace(Ai.copy(this),e);let t=Ai.r,i=Ai.g,n=Ai.b;return e!==Ei?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(ef);let i=Md(Br.h,ef.h,t),n=Md(Br.s,ef.s,t),s=Md(Br.l,ef.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ai=new it;it.NAMES=ox;var Co=class extends pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Tn=new Y,fr=new Y,Rd=new Y,ur=new Y,sa=new Y,aa=new Y,lg=new Y,Pd=new Y,Id=new Y,Ld=new Y,Dd=new Pt,Nd=new Pt,Fd=new Pt,Vr=class r{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Tn.subVectors(e,t),n.cross(Tn);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Tn.subVectors(n,t),fr.subVectors(i,t),Rd.subVectors(e,t);let a=Tn.dot(Tn),o=Tn.dot(fr),l=Tn.dot(Rd),f=fr.dot(fr),u=fr.dot(Rd),h=a*f-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,c=(f*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-c-x,x,c)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ur.x),l.addScaledVector(a,ur.y),l.addScaledVector(o,ur.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return Dd.setScalar(0),Nd.setScalar(0),Fd.setScalar(0),Dd.fromBufferAttribute(e,t),Nd.fromBufferAttribute(e,i),Fd.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Dd,s.x),a.addScaledVector(Nd,s.y),a.addScaledVector(Fd,s.z),a}static isFrontFacing(e,t,i,n){return Tn.subVectors(i,t),fr.subVectors(e,t),Tn.cross(fr).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Tn.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;sa.subVectors(n,i),aa.subVectors(s,i),Pd.subVectors(e,i);let l=sa.dot(Pd),f=aa.dot(Pd);if(l<=0&&f<=0)return t.copy(i);Id.subVectors(e,n);let u=sa.dot(Id),h=aa.dot(Id);if(u>=0&&h<=u)return t.copy(n);let d=l*h-u*f;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(sa,a);Ld.subVectors(e,s);let c=sa.dot(Ld),x=aa.dot(Ld);if(x>=0&&c<=x)return t.copy(s);let _=c*f-l*x;if(_<=0&&f>=0&&x<=0)return o=f/(f-x),t.copy(i).addScaledVector(aa,o);let p=u*x-c*h;if(p<=0&&h-u>=0&&c-x>=0)return lg.subVectors(s,n),o=(h-u)/(h-u+(c-x)),t.copy(n).addScaledVector(lg,o);let m=1/(p+_+d);return a=_*m,o=d*m,t.copy(i).addScaledVector(sa,a).addScaledVector(aa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wn=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(s,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tf.copy(i.boundingBox)),tf.applyMatrix4(e.matrixWorld),this.union(tf)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),nf.subVectors(this.max,xo),oa.subVectors(e.a,xo),la.subVectors(e.b,xo),fa.subVectors(e.c,xo),kr.subVectors(la,oa),zr.subVectors(fa,la),ys.subVectors(oa,fa);let t=[0,-kr.z,kr.y,0,-zr.z,zr.y,0,-ys.z,ys.y,kr.z,0,-kr.x,zr.z,0,-zr.x,ys.z,0,-ys.x,-kr.y,kr.x,0,-zr.y,zr.x,0,-ys.y,ys.x,0];return!Ud(t,oa,la,fa,nf)||(t=[1,0,0,0,1,0,0,0,1],!Ud(t,oa,la,fa,nf))?!1:(rf.crossVectors(kr,zr),t=[rf.x,rf.y,rf.z],Ud(t,oa,la,fa,nf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},cr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],An=new Y,tf=new Wn,oa=new Y,la=new Y,fa=new Y,kr=new Y,zr=new Y,ys=new Y,xo=new Y,nf=new Y,rf=new Y,Ss=new Y;function Ud(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Ss.fromArray(r,s);let o=n.x*Math.abs(Ss.x)+n.y*Math.abs(Ss.y)+n.z*Math.abs(Ss.z),l=e.dot(Ss),f=t.dot(Ss),u=i.dot(Ss);if(Math.max(-Math.max(l,f,u),Math.min(l,f,u))>o)return!1}return!0}var Kt=new Y,sf=new Qe,uv=0,Cn=class extends Vn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tx,this.updateRanges=[],this.gpuType=vn,this.version=0,this._normalizationScale=e!==void 0?Mh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sf.fromBufferAttribute(this,t),sf.applyMatrix3(e),this.setXY(t,sf.x,sf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Q_(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):j_(e,this.array)}};var Ro=class extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Po=class extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ht=class extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}},cv=new Wn,_o=new Y,Od=new Y,Hr=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):cv.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);let t=_o.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(_o,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(Od)),this.expandByPoint(_o.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},dv=0,xn=new wt,Bd=new pi,ua=new Y,on=new Wn,vo=new Wn,li=new Y,Rn=class r extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J_(e)?Po:Ro)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(li.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(li),li.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(li)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){let i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];vo.setFromBufferAttribute(o),this.morphTargetsRelative?(li.addVectors(on.min,vo.min),on.expandByPoint(li),li.addVectors(on.max,vo.max),on.expandByPoint(li)):(on.expandByPoint(vo.min),on.expandByPoint(vo.max))}on.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)li.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(li));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let f=0,u=o.count;f<u;f++)li.fromBufferAttribute(o,f),l&&(ua.fromBufferAttribute(e,f),li.add(ua)),n=Math.max(n,i.distanceToSquared(li))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],f=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new Y,l[P]=new Y;let u=new Y,h=new Y,d=new Y,c=new Qe,x=new Qe,_=new Qe,p=new Y,m=new Y;function v(P,C,N){f[P]=f[C]=f[N]=1,u.fromBufferAttribute(i,P),h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,N),c.fromBufferAttribute(s,P),x.fromBufferAttribute(s,C),_.fromBufferAttribute(s,N),h.sub(u),d.sub(u),x.sub(c),_.sub(c);let D=1/(x.x*_.y-_.x*x.y);isFinite(D)&&(p.copy(h).multiplyScalar(_.y).addScaledVector(d,-x.y).multiplyScalar(D),m.copy(d).multiplyScalar(x.x).addScaledVector(h,-_.x).multiplyScalar(D),o[P].add(p),o[C].add(p),o[N].add(p),l[P].add(m),l[C].add(m),l[N].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let P=0,C=A.length;P<C;++P){let N=A[P],D=N.start,G=N.count;for(let I=D,B=D+G;I<B;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new Y,T=new Y,w=new Y,g=new Y;function M(P){w.fromBufferAttribute(n,P),g.copy(w);let C=o[P];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),T.crossVectors(g,C);let D=T.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,C=i.count;P<C;++P)f[P]&&M(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,c=i.count;d<c;d++)i.setXYZ(d,0,0,0);let n=new Y,s=new Y,a=new Y,o=new Y,l=new Y,f=new Y,u=new Y,h=new Y;if(e)for(let d=0,c=e.count;d<c;d+=3){let x=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);n.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(n,s),u.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),f.fromBufferAttribute(i,p),o.add(u),l.add(u),f.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,f.x,f.y,f.z)}else for(let d=0,c=t.count;d<c;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(n,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)li.fromBufferAttribute(e,t),li.normalize(),e.setXYZ(t,li.x,li.y,li.z)}toNonIndexed(){function e(o,l){let f=o.array,u=o.itemSize,h=o.normalized,d=new f.constructor(l.length*u),c=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?c=l[_]*o.data.stride+o.offset:c=l[_]*u;for(let m=0;m<u;m++)d[x++]=f[c++]}return new Cn(d,u,h)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],f=e(l,i);t.setAttribute(o,f)}let s=this.morphAttributes;for(let o in s){let l=[],f=s[o];for(let u=0,h=f.length;u<h;u++){let d=f[u],c=e(d,i);l.push(c)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let f=a[o];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let f in l)l[f]!==void 0&&(e[f]=l[f]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let f=i[l];e.data.attributes[l]=f.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let f=this.morphAttributes[l],u=[];for(let h=0,d=f.length;h<d;h++){let c=f[h];u.push(c.toJSON(e.data))}u.length>0&&(n[l]=u,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let f in n){let u=n[f];this.setAttribute(f,u.clone(t))}let s=e.morphAttributes;for(let f in s){let u=[],h=s[f];for(let d=0,c=h.length;d<c;d++)u.push(h[d].clone(t));this.morphAttributes[f]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let f=0,u=a.length;f<u;f++){let h=a[f];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var kd=new Y,hv=new Y,pv=new Ge,En=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=kd.subVectors(i,t).cross(hv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(kd),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||pv.getNormalMatrix(e),n=this.coplanarPoint(kd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},mv=0,Wr=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=Ra,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=ih,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sf,this.stencilZFail=Sf,this.stencilZPass=Sf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new En().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var dr=new Y,zd=new Y,af=new Y,of=new Y,Of=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){zd.copy(e).add(t).multiplyScalar(.5),af.copy(t).sub(e).normalize(),of.copy(this.origin).sub(zd);let s=e.distanceTo(t)*.5,a=-this.direction.dot(af),o=of.dot(this.direction),l=-of.dot(af),f=of.lengthSq(),u=Math.abs(1-a*a),h,d,c,x;if(u>0)if(h=a*l-o,d=a*o-l,x=s*u,h>=0)if(d>=-x)if(d<=x){let _=1/u;h*=_,d*=_,c=h*(h+a*d+2*o)+d*(a*h+d+2*l)+f}else d=s,h=Math.max(0,-(a*d+o)),c=-h*h+d*(d+2*l)+f;else d=-s,h=Math.max(0,-(a*d+o)),c=-h*h+d*(d+2*l)+f;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),c=-h*h+d*(d+2*l)+f):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),c=d*(d+2*l)+f):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),c=-h*h+d*(d+2*l)+f);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),c=-h*h+d*(d+2*l)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(zd).addScaledVector(af,d),c}intersectSphere(e,t){if(e.radius<0)return null;dr.subVectors(e.center,this.origin);let i=dr.dot(this.direction),n=dr.dot(dr)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,f=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return f>=0?(i=(e.min.x-d.x)*f,n=(e.max.x-d.x)*f):(i=(e.max.x-d.x)*f,n=(e.min.x-d.x)*f),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,i,n,s){let a=this.origin,o=this.direction,l=o.x,f=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,c=e.z-a.z,x=t.x-a.x,_=t.y-a.y,p=t.z-a.z,m=i.x-a.x,v=i.y-a.y,A=i.z-a.z,y=Math.abs(l),T=Math.abs(f),w=Math.abs(u),g,M,P,C,N,D,G,I,B,H,O,te;if(y>=T&&y>=w?(P=l,D=h,B=x,te=m,l>=0?(g=f,M=u,C=d,N=c,G=_,I=p,H=v,O=A):(g=u,M=f,C=c,N=d,G=p,I=_,H=A,O=v)):T>=w?(P=f,D=d,B=_,te=v,f>=0?(g=u,M=l,C=c,N=h,G=p,I=x,H=A,O=m):(g=l,M=u,C=h,N=c,G=x,I=p,H=m,O=A)):(P=u,D=c,B=p,te=A,u>=0?(g=l,M=f,C=h,N=d,G=x,I=_,H=m,O=v):(g=f,M=l,C=d,N=h,G=_,I=x,H=v,O=m)),P===0)return null;let W=g/P,R=M/P,ie=1/P,Se=C-W*D,Ue=N-R*D,J=G-W*B,ue=I-R*B,ye=H-W*te,be=O-R*te,me=ye*ue-be*J,De=Se*be-Ue*ye,gt=J*Ue-ue*Se;if(n){if(me<0||De<0||gt<0)return null}else if((me<0||De<0||gt<0)&&(me>0||De>0||gt>0))return null;let Ae=me+De+gt;if(Ae===0)return null;let Ve=ie*(me*D+De*B+gt*te);return(Ae>0?Ve<0:Ve>0)?null:this.at(Ve/Ae,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ws=class extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fg=new wt,Ms=new Of,lf=new Hr,ug=new Y,ff=new Y,uf=new Y,cf=new Y,Gd=new Y,df=new Y,cg=new Y,hf=new Y,$t=class extends pi{constructor(e=new Rn,t=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){df.set(0,0,0);for(let l=0,f=s.length;l<f;l++){let u=o[l],h=s[l];u!==0&&(Gd.fromBufferAttribute(h,e),a?df.addScaledVector(Gd,u):df.addScaledVector(Gd.sub(t),u))}t.add(df)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lf.copy(i.boundingSphere),lf.applyMatrix4(s),Ms.copy(e.ray).recast(e.near),!(lf.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(lf,ug)===null||Ms.origin.distanceToSquared(ug)>(e.far-e.near)**2))&&(fg.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(fg),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,f=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,c=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){let p=d[x],m=a[p.materialIndex],v=Math.max(p.start,c.start),A=Math.min(o.count,Math.min(p.start+p.count,c.start+c.count));for(let y=v,T=A;y<T;y+=3){let w=o.getX(y),g=o.getX(y+1),M=o.getX(y+2);n=pf(this,m,e,i,f,u,h,w,g,M),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let x=Math.max(0,c.start),_=Math.min(o.count,c.start+c.count);for(let p=x,m=_;p<m;p+=3){let v=o.getX(p),A=o.getX(p+1),y=o.getX(p+2);n=pf(this,a,e,i,f,u,h,v,A,y),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){let p=d[x],m=a[p.materialIndex],v=Math.max(p.start,c.start),A=Math.min(l.count,Math.min(p.start+p.count,c.start+c.count));for(let y=v,T=A;y<T;y+=3){let w=y,g=y+1,M=y+2;n=pf(this,m,e,i,f,u,h,w,g,M),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let x=Math.max(0,c.start),_=Math.min(l.count,c.start+c.count);for(let p=x,m=_;p<m;p+=3){let v=p,A=p+1,y=p+2;n=pf(this,a,e,i,f,u,h,v,A,y),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}};function gv(r,e,t,i,n,s,a,o){let l;if(e.side===Gi?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Kr,o),l===null)return null;hf.copy(o),hf.applyMatrix4(r.matrixWorld);let f=t.ray.origin.distanceTo(hf);return f<t.near||f>t.far?null:{distance:f,point:hf.clone(),object:r}}function pf(r,e,t,i,n,s,a,o,l,f){r.getVertexPosition(o,ff),r.getVertexPosition(l,uf),r.getVertexPosition(f,cf);let u=gv(r,e,t,i,ff,uf,cf,cg);if(u){let h=new Y;Vr.getBarycoord(cg,ff,uf,cf,h),n&&(u.uv=Vr.getInterpolatedAttribute(n,o,l,f,h,new Qe)),s&&(u.uv1=Vr.getInterpolatedAttribute(s,o,l,f,h,new Qe)),a&&(u.normal=Vr.getInterpolatedAttribute(a,o,l,f,h,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c:f,normal:new Y,materialIndex:0};Vr.getNormal(ff,uf,cf,d.normal),u.face=d,u.barycoord=h}return u}var Io=class extends zi{constructor(e=null,t=1,i=1,n,s,a,o,l,f=fi,u=fi,h,d){super(null,a,o,l,f,u,n,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lo=class extends Cn{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ca=new wt,dg=new wt,mf=[],hg=new Wn,xv=new wt,yo=new $t,So=new Hr,Do=class extends $t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,xv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ca),hg.copy(e.boundingBox).applyMatrix4(ca),this.boundingBox.union(hg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ca),So.copy(e.boundingSphere).applyMatrix4(ca),this.boundingSphere.union(So)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(i),e.ray.intersectsSphere(So)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,ca),dg.multiplyMatrices(i,ca),yo.matrixWorld=dg,yo.raycast(e,mf);for(let a=0,o=mf.length;a<o;a++){let l=mf[a];l.instanceId=s,l.object=this,t.push(l)}mf.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Io(new Float32Array(n*this.count),n,this.count,au,vn));let s=this.morphTexture.source.data.data,a=0;for(let f=0;f<i.length;f++)a+=i[f];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bs=new Hr,_v=new Qe(.5,.5),gf=new Y,Xr=class{constructor(e=new En,t=new En,i=new En,n=new En,s=new En,a=new En){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_n,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],f=s[3],u=s[4],h=s[5],d=s[6],c=s[7],x=s[8],_=s[9],p=s[10],m=s[11],v=s[12],A=s[13],y=s[14],T=s[15];if(n[0].setComponents(f-a,c-u,m-x,T-v).normalize(),n[1].setComponents(f+a,c+u,m+x,T+v).normalize(),n[2].setComponents(f+o,c+h,m+_,T+A).normalize(),n[3].setComponents(f-o,c-h,m-_,T-A).normalize(),i)n[4].setComponents(l,d,p,y).normalize(),n[5].setComponents(f-l,c-d,m-p,T-y).normalize();else if(n[4].setComponents(f-l,c-d,m-p,T-y).normalize(),t===_n)n[5].setComponents(f+l,c+d,m+p,T+y).normalize();else if(t===_a)n[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);let t=_v.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(gf.x=n.normal.x>0?e.max.x:e.min.x,gf.y=n.normal.y>0?e.max.y:e.min.y,gf.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(gf)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},pg=new wt,Bf=class r{constructor(){this.coordinateSystem=_n,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let s=t[n];pg.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new Xr),i[n].setFromProjectionMatrix(pg,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Xr),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new r().copy(this)}};var No=class extends zi{constructor(e=[],t=Rs,i,n,s,a,o,l,f,u){super(e,t,i,n,s,a,o,l,f,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var xr=class extends zi{constructor(e,t,i=Pn,n,s,a,o=fi,l=fi,f,u=mr,h=1){if(u!==mr&&u!==vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,n,s,a,o,l,u,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fo=class extends xr{constructor(e,t=Pn,i=Rs,n,s,a=fi,o=fi,l,f=mr){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,n,s,a,o,l,f),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Uo=class extends zi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qr=class r extends Rn{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],f=[],u=[],h=[],d=0,c=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,n,a,2),x("x","z","y",1,-1,e,i,-t,n,a,3),x("x","y","z",1,-1,e,t,i,n,s,4),x("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ht(f,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function x(_,p,m,v,A,y,T,w,g,M,P){let C=y/g,N=T/M,D=y/2,G=T/2,I=w/2,B=g+1,H=M+1,O=0,te=0,W=new Y;for(let R=0;R<H;R++){let ie=R*N-G;for(let Se=0;Se<B;Se++){let Ue=Se*C-D;W[_]=Ue*v,W[p]=ie*A,W[m]=I,f.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[m]=w>0?1:-1,u.push(W.x,W.y,W.z),h.push(Se/g),h.push(1-R/M),O+=1}}for(let R=0;R<M;R++)for(let ie=0;ie<g;ie++){let Se=d+ie+B*R,Ue=d+ie+B*(R+1),J=d+(ie+1)+B*(R+1),ue=d+(ie+1)+B*R;l.push(Se,Ue,ue),l.push(Ue,J,ue),te+=6}o.addGroup(c,te,P),c+=te,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ba=class r extends Rn{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],f=new Y,u=new Qe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let c=i+h/t*n;f.x=e*Math.cos(c),f.y=e*Math.sin(c),a.push(f.x,f.y,f.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(o,3)),this.setAttribute("uv",new Ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Oo=class r extends Rn{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let f=this;n=Math.floor(n),s=Math.floor(s);let u=[],h=[],d=[],c=[],x=0,_=[],p=i/2,m=0;v(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(c,2));function v(){let y=new Y,T=new Y,w=0,g=(t-e)/i;for(let M=0;M<=s;M++){let P=[],C=M/s,N=C*(t-e)+e;for(let D=0;D<=n;D++){let G=D/n,I=G*l+o,B=Math.sin(I),H=Math.cos(I);T.x=N*B,T.y=-C*i+p,T.z=N*H,h.push(T.x,T.y,T.z),y.set(B,g,H).normalize(),d.push(y.x,y.y,y.z),c.push(G,1-C),P.push(x++)}_.push(P)}for(let M=0;M<n;M++)for(let P=0;P<s;P++){let C=_[P][M],N=_[P+1][M],D=_[P+1][M+1],G=_[P][M+1];(e>0||P!==0)&&(u.push(C,N,G),w+=3),(t>0||P!==s-1)&&(u.push(N,D,G),w+=3)}f.addGroup(m,w,0),m+=w}function A(y){let T=x,w=new Qe,g=new Y,M=0,P=y===!0?e:t,C=y===!0?1:-1;for(let D=1;D<=n;D++)h.push(0,p*C,0),d.push(0,C,0),c.push(.5,.5),x++;let N=x;for(let D=0;D<=n;D++){let I=D/n*l+o,B=Math.cos(I),H=Math.sin(I);g.x=P*H,g.y=p*C,g.z=P*B,h.push(g.x,g.y,g.z),d.push(0,C,0),w.x=B*.5+.5,w.y=H*.5*C+.5,c.push(w.x,w.y),x++}for(let D=0;D<n;D++){let G=T+D,I=N+D;y===!0?u.push(I,I+1,G):u.push(I+1,I,G),M+=3}f.addGroup(m,M,y===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bo=class r extends Rn{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),f=o+1,u=l+1,h=e/o,d=t/l,c=[],x=[],_=[],p=[];for(let m=0;m<u;m++){let v=m*d-a;for(let A=0;A<f;A++){let y=A*h-s;x.push(y,-v,0),_.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let A=v+f*m,y=v+f*(m+1),T=v+1+f*(m+1),w=v+1+f*m;c.push(A,y,w),c.push(y,T,w)}this.setIndex(c),this.setAttribute("position",new Ht(x,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ts=class r extends Rn{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],f=[],u=[],h=[],d=new Y,c=new Y,x=new Y;for(let _=0;_<=i;_++){let p=a+_/i*o;for(let m=0;m<=n;m++){let v=m/n*s;c.x=(e+t*Math.cos(p))*Math.cos(v),c.y=(e+t*Math.cos(p))*Math.sin(v),c.z=t*Math.sin(p),f.push(c.x,c.y,c.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),x.subVectors(c,d).normalize(),u.push(x.x,x.y,x.z),h.push(m/n),h.push(_/i)}}for(let _=1;_<=i;_++)for(let p=1;p<=n;p++){let m=(n+1)*_+p-1,v=(n+1)*(_-1)+p-1,A=(n+1)*(_-1)+p,y=(n+1)*_+p;l.push(m,v,y),l.push(v,A,y)}this.setIndex(l),this.setAttribute("position",new Ht(f,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Is(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];if(mg(n))n.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(mg(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Ri(r){let e={};for(let t=0;t<r.length;t++){let i=Is(r[t]);for(let n in i)e[n]=i[n]}return e}function mg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function vv(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function bh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var lx={clone:Is,merge:Ri},yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yv,this.fragmentShader=Sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(n.value);break;case"v2":this.uniforms[i].value=new Qe().fromArray(n.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(n.value);break;case"m4":this.uniforms[i].value=new wt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},kf=class extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},As=class extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zf=class extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gf=class extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function da(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function xf(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Yr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vf=class extends Yr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wd,endingEnd:Wd}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xd:s=e,o=2*t-i;break;case qd:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xd:a=e,l=2*i-t;break;case qd:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let f=(i-t)*.5,u=this.valueSize;this._weightPrev=f/(t-o),this._weightNext=f/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,f=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,c=this._weightNext,x=(i-t)/(n-t),_=x*x,p=_*x,m=-d*p+2*d*_-d*x,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*x+1,A=(-1-c)*p+(1.5+c)*_+.5*x,y=c*p-c*_;for(let T=0;T!==o;++T)s[T]=m*a[u+T]+v*a[f+T]+A*a[l+T]+y*a[h+T];return s}},Hf=class extends Yr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,f=l-o,u=(i-t)/(n-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[f+d]*h+a[l+d]*u;return s}},Wf=class extends Yr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Xf=class extends Yr{interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,f=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let x=(i-t)/(n-t),_=1-x;for(let p=0;p!==o;++p)s[p]=a[f+p]*_+a[l+p]*x;return s}let d=o*2,c=e-1;for(let x=0;x!==o;++x){let _=a[f+x],p=a[l+x],m=c*d+x*2,v=h[m],A=h[m+1],y=e*d+x*2,T=u[y],w=u[y+1],g=bv(i,t,v,T,n);s[x]=fx(g,_,A,w,p)}return s}};function fx(r,e,t,i,n){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*i+r*r*r*n}function Mv(r,e,t,i,n){let s=1-r;return 3*s*s*(t-e)+6*s*r*(i-t)+3*r*r*(n-i)}function bv(r,e,t,i,n){let s=(r-e)/(n-e);for(let a=0;a<8;a++){let o=fx(s,e,t,i,n)-r;if(Math.abs(o)<1e-10)break;let l=Mv(s,e,t,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var fn=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=da(t,this.TimeBufferType),this.values=da(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:da(e.times,Array),values:da(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),xf(e.settings)&&(i.settings={inTangents:da(e.settings.inTangents,Array),outTangents:da(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Wf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case bo:t=this.InterpolantFactoryMethodDiscrete;break;case Lf:t=this.InterpolantFactoryMethodLinear;break;case yf:t=this.InterpolantFactoryMethodSmooth;break;case Hd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return Lf;case this.InterpolantFactoryMethodSmooth:return yf;case this.InterpolantFactoryMethodBezier:return Hd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;xf(this.settings)&&(gg(this.settings.inTangents,e),gg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;xf(this.settings)&&(xg(this.settings.inTangents,e),xg(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&K_(n))for(let o=0,l=n.length;o!==l;++o){let f=n[o];if(isNaN(f)){ke("KeyframeTrack: Value is not a valid number.",this,o,f),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===yf,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,f=e[o],u=e[o+1];if(f!==u&&(o!==1||f!==e[0]))if(n)l=!0;else{let h=o*i,d=h-i,c=h+i;for(let x=0;x!==i;++x){let _=t[h+x];if(_!==t[d+x]||_!==t[c+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let c=0;c!==i;++c)t[d+c]=t[h+c]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,f=0;f!==i;++f)t[l+f]=t[o+f];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,xf(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function gg(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]+=e}function xg(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]*=e}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Lf;var Zr=class extends fn{constructor(e,t,i){super(e,t,i)}};Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=bo;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var qf=class extends fn{constructor(e,t,i,n){super(e,t,i,n)}};qf.prototype.ValueTypeName="color";var Yf=class extends fn{constructor(e,t,i,n){super(e,t,i,n)}};Yf.prototype.ValueTypeName="number";var Zf=class extends Yr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),f=e*o;for(let u=f+o;f!==u;f+=4)Hn.slerpFlat(s,0,a,f-o,a,f,l);return s}},ko=class extends fn{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Zf(this.times,this.values,this.getValueSize(),e)}};ko.prototype.ValueTypeName="quaternion";ko.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends fn{constructor(e,t,i){super(e,t,i)}};Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=bo;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Jf=class extends fn{constructor(e,t,i,n){super(e,t,i,n)}};Jf.prototype.ValueTypeName="vector";var Mf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(_g(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!_g(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function _g(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Kf=class{constructor(e,t,i){let n=this,s=!1,a=0,o=0,l,f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&n.onStart!==void 0&&n.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return f.push(u,h),this},this.removeHandler=function(u){let h=f.indexOf(u);return h!==-1&&f.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=f.length;h<d;h+=2){let c=f[h],x=f[h+1];if(c.global&&(c.lastIndex=0),c.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ux=new Kf,wa=class{constructor(e){this.manager=e!==void 0?e:ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ha=new WeakMap,$f=class extends wa{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Mf.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=ha.get(a);h===void 0&&(h=[],ha.set(a,h)),h.push({onLoad:t,onError:n})}return a}let o=va("img");function l(){u(),t&&t(this);let h=ha.get(this)||[];for(let d=0;d<h.length;d++){let c=h[d];c.onLoad&&c.onLoad(this)}ha.delete(this),s.manager.itemEnd(e)}function f(h){u(),n&&n(h),Mf.remove(`image:${e}`);let d=ha.get(this)||[];for(let c=0;c<d.length;c++){let x=d[c];x.onError&&x.onError(h)}ha.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",f,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Mf.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var zo=class extends wa{constructor(e){super(e)}load(e,t,i,n){let s=new zi,a=new $f(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},Ta=class extends pi{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Vd=new wt,vg=new Y,yg=new Y,Go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=Zi,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(vg),yg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Vd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Vd,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,f=n?n.y/s.y:0;e.coordinateSystem===_a||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+f,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+f,0,0,.5,.5,0,0,0,1),t.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_f=new Y,vf=new Hn,zn=new Y,Vo=class extends pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_f,vf,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_f,vf,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(_f,vf,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_f,vf,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gr=new Y,Sg=new Qe,Mg=new Qe,Ci=class extends Vo{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Df*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Df*2*Math.atan(Math.tan(Sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,Sg,Mg),t.subVectors(Mg,Sg)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sd*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,f=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/f,n*=a.width/l,i*=a.height/f}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Yd=class extends Go{constructor(){super(new Ci(90,1,.5,500)),this.isPointLightShadow=!0}},Ho=class extends Ta{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Yd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Wo=class extends Vo{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,a=s+f*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zd=class extends Go{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Aa=class extends Ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pi.DEFAULT_UP),this.updateMatrix(),this.target=new pi,this.shadow=new Zd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Xo=class extends Ta{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var pa=-90,ma=1,Ea=class extends pi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ci(pa,ma,e,t);n.layers=this.layers,this.add(n);let s=new Ci(pa,ma,e,t);s.layers=this.layers,this.add(s);let a=new Ci(pa,ma,e,t);a.layers=this.layers,this.add(a);let o=new Ci(pa,ma,e,t);o.layers=this.layers,this.add(o);let l=new Ci(pa,ma,e,t);l.layers=this.layers,this.add(l);let f=new Ci(pa,ma,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let f of t)this.remove(f);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,f,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,c),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Qf=class extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var wh="\\[\\]\\.:\\/",wv=new RegExp("["+wh+"]","g"),Th="[^"+wh+"]",Tv="[^"+wh.replace("\\.","")+"]",Av=/((?:WC+[\/:])*)/.source.replace("WC",Th),Ev=/(WCOD+)?/.source.replace("WCOD",Tv),Cv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),Rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),Pv=new RegExp("^"+Av+Ev+Cv+Rv+"$"),Iv=["material","materials","bones","map"],Jd=class{constructor(e,t,i){let n=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},At=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wv,"")}static parseTrackName(e){let t=Pv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Iv.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=t.objectIndex;switch(i){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===f){f=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(f!==void 0){if(e[f]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}let a=e[n];if(a===void 0){let f=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+f+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Jd;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m1=new Float32Array(1);var Ih=class Ih{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};Ih.prototype.isMatrix2=!0;var Kd=Ih;function Ah(r,e,t,i){let n=Lv(i);switch(t){case mh:return r*e;case au:return r*e/n.components*n.byteLength;case ou:return r*e/n.components*n.byteLength;case $r:return r*e*2/n.components*n.byteLength;case lu:return r*e*2/n.components*n.byteLength;case gh:return r*e*3/n.components*n.byteLength;case Ln:return r*e*4/n.components*n.byteLength;case fu:return r*e*4/n.components*n.byteLength;case Jo:case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $o:case Qo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cu:case hu:return Math.max(r,16)*Math.max(e,8)/4;case uu:case du:return Math.max(r,8)*Math.max(e,8)/2;case pu:case mu:case xu:case _u:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gu:case jo:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Su:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case bu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case wu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Au:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Cu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Iu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Du:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Nu:case Fu:case Uu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ou:case Bu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case el:case ku:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lv(r){switch(r){case Zi:case ch:return{byteLength:1,components:1};case Ia:case dh:case In:return{byteLength:2,components:1};case ru:case su:return{byteLength:2,components:4};case Pn:case nu:case vn:return{byteLength:4,components:1};case hh:case ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Lx(){let r=null,e=!1,t=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Nv(r){let e=new WeakMap;function t(o,l){let f=o.array,u=o.usage,h=f.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,f,u),o.onUploadCallback();let c;if(f instanceof Float32Array)c=r.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)c=r.HALF_FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?c=r.HALF_FLOAT:c=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)c=r.SHORT;else if(f instanceof Uint32Array)c=r.UNSIGNED_INT;else if(f instanceof Int32Array)c=r.INT;else if(f instanceof Int8Array)c=r.BYTE;else if(f instanceof Uint8Array)c=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)c=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:c,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,f){let u=l.array,h=l.updateRanges;if(r.bindBuffer(f,o),h.length===0)r.bufferSubData(f,0,u);else{h.sort((c,x)=>c.start-x.start);let d=0;for(let c=1;c<h.length;c++){let x=h[d],_=h[c];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++d,h[d]=_)}h.length=d+1;for(let c=0,x=h.length;c<x;c++){let _=h[c];r.bufferSubData(f,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let f=e.get(o);if(f===void 0)e.set(o,t(o,l));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,o,l),f.version=o.version}}return{get:n,remove:s,update:a}}var Fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Wv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ry=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",cy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,py=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_y=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,My=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,by=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ty=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ay=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ly=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uy=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,By=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zy=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,uS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_S=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ES=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,NS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Fv,alphahash_pars_fragment:Uv,alphamap_fragment:Ov,alphamap_pars_fragment:Bv,alphatest_fragment:kv,alphatest_pars_fragment:zv,aomap_fragment:Gv,aomap_pars_fragment:Vv,batching_pars_vertex:Hv,batching_vertex:Wv,begin_vertex:Xv,beginnormal_vertex:qv,bsdfs:Yv,iridescence_fragment:Zv,bumpmap_pars_fragment:Jv,clipping_planes_fragment:Kv,clipping_planes_pars_fragment:$v,clipping_planes_pars_vertex:Qv,clipping_planes_vertex:jv,color_fragment:ey,color_pars_fragment:ty,color_pars_vertex:iy,color_vertex:ny,common:ry,defaultnormal_vertex:sy,displacementmap_pars_vertex:ay,displacementmap_vertex:oy,emissivemap_fragment:ly,emissivemap_pars_fragment:fy,colorspace_fragment:uy,colorspace_pars_fragment:cy,envmap_fragment:dy,envmap_common_pars_fragment:hy,envmap_pars_fragment:py,envmap_pars_vertex:my,envmap_physical_pars_fragment:Ay,envmap_vertex:gy,fog_vertex:xy,fog_pars_vertex:_y,fog_fragment:vy,fog_pars_fragment:yy,gradientmap_pars_fragment:Sy,lightmap_pars_fragment:My,lights_lambert_fragment:by,lights_lambert_pars_fragment:wy,lights_pars_begin:Ty,lights_toon_fragment:Ey,lights_toon_pars_fragment:Cy,lights_phong_fragment:Ry,lights_phong_pars_fragment:Py,lights_physical_fragment:Iy,lights_physical_pars_fragment:Ly,lights_fragment_begin:Dy,lights_fragment_maps:Ny,lights_fragment_end:Fy,lightprobes_pars_fragment:Uy,logdepthbuf_fragment:Oy,logdepthbuf_pars_fragment:By,logdepthbuf_pars_vertex:ky,logdepthbuf_vertex:zy,map_fragment:Gy,map_pars_fragment:Vy,map_particle_fragment:Hy,map_particle_pars_fragment:Wy,metalnessmap_fragment:Xy,metalnessmap_pars_fragment:qy,morphinstance_vertex:Yy,morphcolor_vertex:Zy,morphnormal_vertex:Jy,morphtarget_pars_vertex:Ky,morphtarget_vertex:$y,normal_fragment_begin:Qy,normal_fragment_maps:jy,normal_pars_fragment:eS,normal_pars_vertex:tS,normal_vertex:iS,normalmap_pars_fragment:nS,clearcoat_normal_fragment_begin:rS,clearcoat_normal_fragment_maps:sS,clearcoat_pars_fragment:aS,iridescence_pars_fragment:oS,opaque_fragment:lS,packing:fS,premultiplied_alpha_fragment:uS,project_vertex:cS,dithering_fragment:dS,dithering_pars_fragment:hS,roughnessmap_fragment:pS,roughnessmap_pars_fragment:mS,shadowmap_pars_fragment:gS,shadowmap_pars_vertex:xS,shadowmap_vertex:_S,shadowmask_pars_fragment:vS,skinbase_vertex:yS,skinning_pars_vertex:SS,skinning_vertex:MS,skinnormal_vertex:bS,specularmap_fragment:wS,specularmap_pars_fragment:TS,tonemapping_fragment:AS,tonemapping_pars_fragment:ES,transmission_fragment:CS,transmission_pars_fragment:RS,uv_pars_fragment:PS,uv_pars_vertex:IS,uv_vertex:LS,worldpos_vertex:DS,background_vert:NS,background_frag:FS,backgroundCube_vert:US,backgroundCube_frag:OS,cube_vert:BS,cube_frag:kS,depth_vert:zS,depth_frag:GS,distance_vert:VS,distance_frag:HS,equirect_vert:WS,equirect_frag:XS,linedashed_vert:qS,linedashed_frag:YS,meshbasic_vert:ZS,meshbasic_frag:JS,meshlambert_vert:KS,meshlambert_frag:$S,meshmatcap_vert:QS,meshmatcap_frag:jS,meshnormal_vert:eM,meshnormal_frag:tM,meshphong_vert:iM,meshphong_frag:nM,meshphysical_vert:rM,meshphysical_frag:sM,meshtoon_vert:aM,meshtoon_frag:oM,points_vert:lM,points_frag:fM,shadow_vert:uM,shadow_frag:cM,sprite_vert:dM,sprite_frag:hM},Me={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Jn={basic:{uniforms:Ri([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ri([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ri([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ri([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ri([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ri([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ri([Me.points,Me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ri([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ri([Me.common,Me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ri([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ri([Me.sprite,Me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Ri([Me.common,Me.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Ri([Me.lights,Me.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Jn.physical={uniforms:Ri([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Gu={r:0,b:0,g:0},pM=new wt,Dx=new Ge;Dx.set(-1,0,0,0,1,0,0,0,1);function mM(r,e,t,i,n,s){let a=new it(0),o=n===!0?0:1,l,f,u=null,h=0,d=null;function c(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let y=v.backgroundBlurriness>0;A=e.get(A,y)}return A}function x(v){let A=!1,y=c(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),A=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,A){let y=c(A);y&&y.isCubeTexture?(f===void 0&&(f=new $t(new qr(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Is(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=y,f.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(pM.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Dx),f.material.toneMapped=tt.getTransfer(y.colorSpace)!==mt,(u!==y||h!==y.version||d!==r.toneMapping)&&(f.material.needsUpdate=!0,u=y,h=y.version,d=r.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new $t(new Bo(2,2),new Xn({name:"BackgroundMaterial",uniforms:Is(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=tt.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,A){v.getRGB(Gu,bh(r)),t.buffers.color.setClear(Gu.r,Gu.g,Gu.b,A,s)}function m(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:x,addToRenderList:_,dispose:m}}function gM(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(N,D,G,I,B){let H=!1,O=h(N,I,G,D);s!==O&&(s=O,f(s.object)),H=c(N,I,G,B),H&&x(N,I,G,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(N,D,G,I),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function f(N){return r.bindVertexArray(N)}function u(N){return r.deleteVertexArray(N)}function h(N,D,G,I){let B=I.wireframe===!0,H=i[D.id];H===void 0&&(H={},i[D.id]=H);let O=N.isInstancedMesh===!0?N.id:0,te=H[O];te===void 0&&(te={},H[O]=te);let W=te[G.id];W===void 0&&(W={},te[G.id]=W);let R=W[B];return R===void 0&&(R=d(l()),W[B]=R),R}function d(N){let D=[],G=[],I=[];for(let B=0;B<t;B++)D[B]=0,G[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:I,object:N,attributes:{},index:null}}function c(N,D,G,I){let B=s.attributes,H=D.attributes,O=0,te=G.getAttributes();for(let W in te)if(te[W].location>=0){let ie=B[W],Se=H[W];if(Se===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),ie===void 0||ie.attribute!==Se||Se&&ie.data!==Se.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function x(N,D,G,I){let B={},H=D.attributes,O=0,te=G.getAttributes();for(let W in te)if(te[W].location>=0){let ie=H[W];ie===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));let Se={};Se.attribute=ie,ie&&ie.data&&(Se.data=ie.data),B[W]=Se,O++}s.attributes=B,s.attributesNum=O,s.index=I}function _(){let N=s.newAttributes;for(let D=0,G=N.length;D<G;D++)N[D]=0}function p(N){m(N,0)}function m(N,D){let G=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;G[N]=1,I[N]===0&&(r.enableVertexAttribArray(N),I[N]=1),B[N]!==D&&(r.vertexAttribDivisor(N,D),B[N]=D)}function v(){let N=s.newAttributes,D=s.enabledAttributes;for(let G=0,I=D.length;G<I;G++)D[G]!==N[G]&&(r.disableVertexAttribArray(G),D[G]=0)}function A(N,D,G,I,B,H,O){O===!0?r.vertexAttribIPointer(N,D,G,B,H):r.vertexAttribPointer(N,D,G,I,B,H)}function y(N,D,G,I){_();let B=I.attributes,H=G.getAttributes(),O=D.defaultAttributeValues;for(let te in H){let W=H[te];if(W.location>=0){let R=B[te];if(R===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),R!==void 0){let ie=R.normalized,Se=R.itemSize,Ue=e.get(R);if(Ue===void 0)continue;let J=Ue.buffer,ue=Ue.type,ye=Ue.bytesPerElement,be=ue===r.INT||ue===r.UNSIGNED_INT||R.gpuType===nu;if(R.isInterleavedBufferAttribute){let me=R.data,De=me.isInterleavedBuffer===!0?me.stride:me.itemSize,gt=R.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Ae=0;Ae<W.locationSize;Ae++)m(W.location+Ae,me.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)p(W.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,J);for(let Ae=0;Ae<W.locationSize;Ae++)A(W.location+Ae,Se/W.locationSize,ue,ie,De*ye,(gt+Se/W.locationSize*Ae)*ye,be)}else{if(R.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)m(W.location+me,R.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let me=0;me<W.locationSize;me++)p(W.location+me);r.bindBuffer(r.ARRAY_BUFFER,J);for(let me=0;me<W.locationSize;me++)A(W.location+me,Se/W.locationSize,ue,ie,Se*ye,Se/W.locationSize*me*ye,be)}}else if(O!==void 0){let ie=O[te];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(W.location,ie);break;case 3:r.vertexAttrib3fv(W.location,ie);break;case 4:r.vertexAttrib4fv(W.location,ie);break;default:r.vertexAttrib1fv(W.location,ie)}}}}v()}function T(){P();for(let N in i){let D=i[N];for(let G in D){let I=D[G];for(let B in I){let H=I[B];for(let O in H)u(H[O].object),delete H[O];delete I[B]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;let D=i[N.id];for(let G in D){let I=D[G];for(let B in I){let H=I[B];for(let O in H)u(H[O].object),delete H[O];delete I[B]}}delete i[N.id]}function g(N){for(let D in i){let G=i[D];for(let I in G){let B=G[I];if(B[N.id]===void 0)continue;let H=B[N.id];for(let O in H)u(H[O].object),delete H[O];delete B[N.id]}}}function M(N){for(let D in i){let G=i[D],I=N.isInstancedMesh===!0?N.id:0,B=G[I];if(B!==void 0){for(let H in B){let O=B[H];for(let te in O)u(O[te].object),delete O[te];delete B[H]}delete G[I],Object.keys(G).length===0&&delete i[D]}}}function P(){C(),a=!0,s!==n&&(s=n,f(s.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function xM(r,e,t){let i;function n(l){i=l}function s(l,f){r.drawArrays(i,l,f),t.update(f,i,1)}function a(l,f,u){u!==0&&(r.drawArraysInstanced(i,l,f,u),t.update(f,i,u))}function o(l,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,f,0,u);let d=0;for(let c=0;c<u;c++)d+=f[c];t.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function _M(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(g){return!(g!==Ln&&i.convert(g)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let M=g===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Zi&&g!==vn&&!M&&i.convert(g)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp",u=l(f);u!==f&&(Be("WebGLRenderer:",f,"not supported, using",u,"instead."),f=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:c,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:y,maxSamples:T,samples:w}}function vM(r){let e=this,t=null,i=0,n=!1,s=!1,a=new En,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let c=h.length!==0||d||i!==0||n;return n=d,i=h.length,c},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,c){let x=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!n||x===null||x.length===0||s&&!p)s?u(null):f();else{let v=s?0:i,A=v*4,y=m.clippingState||null;l.value=y,y=u(x,d,A,c);for(let T=0;T!==A;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function f(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,c,x){let _=h!==null?h.length:0,p=null;if(_!==0){if(p=l.value,x!==!0||p===null){let m=c+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,y=c;A!==_;++A,y+=4)a.copy(h[A]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var rl=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new No(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new qr(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gi,blending:Es});s.uniforms.tEquirect.value=t;let a=new $t(n,s),o=t.minFilter;return t.minFilter===_r&&(t.minFilter=ki),new Ea(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},cx=256,yM=3,SM=20,Nx=256,Fx=16,MM=3,bM=new Y,wM=new it,Hu=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ea(1,10,null),this._boxMesh=new $t(new qr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=bM}=s,l=this._renderer;this._setSize(a);let f=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,c=l.autoClearDepth,x=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(wM));let p=new Ea(i,n,u);return p.position.copy(o),p.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=c,l.autoClearStencil=x,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(f,t)),this._applyPMREM(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=px(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cx,ax(e))}_fromTexture(e,t){e.mapping===Rs||e.mapping===Pa?this._setSize(e.image.length===0?cx:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=dx(e,!1,!1),i=Math.log2(e)-yM;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=dx(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Rs||e.mapping===Pa?(this._cubemapMaterial===null&&(this._cubemapMaterial=px()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hx()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=TM(),this._integrationMaterial=AM());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Fx);for(let a=0;a<=i;a++){let o=r.lodToRoughness(a,i);if(a>i-MM)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Nx*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=EM());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(s,0,i)}};function dx(r,e,t){return new rl(r,{minFilter:_r,generateMipmaps:e,type:In,colorSpace:wo,depthBuffer:t})}function sl(r,e,t){return new Xn({name:r,uniforms:e,vertexShader:qe.cube_vert,fragmentShader:t,side:Gi,blending:Es,depthTest:!1,depthWrite:!1})}function TM(){return sl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Nx}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function AM(){return sl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function EM(){return sl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${SM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function hx(){return sl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function px(){return sl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function CM(r){let e=new WeakMap,t=new WeakMap,i=null;function n(d,c=!1){return d==null?null:c?a(d):s(d)}function s(d){if(d&&d.isTexture){let c=d.mapping;if(c===eu||c===tu)if(e.has(d)){let x=e.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let _=new rl(x.height);return _.fromEquirectangularTexture(r,d),e.set(d,_),d.addEventListener("dispose",f),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let c=d.mapping,x=c===eu||c===tu,_=c===Rs||c===Pa;if(x||_){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Hu(r)),p=x?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let v=d.image;return x&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new Hu(r)),p=x?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,c){return c===eu?d.mapping=Rs:c===tu&&(d.mapping=Pa),d}function l(d){let c=0,x=6;for(let _=0;_<x;_++)d[_]!==void 0&&c++;return c===x}function f(d){let c=d.target;c.removeEventListener("dispose",f);let x=e.get(c);x!==void 0&&(e.delete(c),x.dispose())}function u(d){let c=d.target;c.removeEventListener("dispose",u);let x=t.get(c);x!==void 0&&(t.delete(c),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:h}}function RM(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Mo("WebGLRenderer: "+i+" extension not supported."),n}}}function PM(r,e,t,i){let n={},s=new WeakMap,a=new FinalizationRegistry(x=>delete n[x]);function o(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(let p in x.attributes)e.remove(x.attributes[p]);x.removeEventListener("dispose",o),delete n[x.id],a.unregister(x);let _=s.get(x);_&&(e.remove(_),s.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(x,_){return n[_.id]!==void 0||(_.addEventListener("dispose",o),n[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function u(x){let _=x.attributes;for(let p in _)e.update(_[p],r.ARRAY_BUFFER)}function h(x){let _=x.index,p=x.attributes.position,m=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,A=p.count>=65535?Po:Ro,y=new A(Math.ceil(v/3)*6,1),T=y.array;if(_!==null){let g=_.array;m=_.version;for(let M=0,P=0;M<v;M+=3){let C=g[M+0],N=g[M+1],D=g[M+2];T[P++]=C,T[P++]=N,T[P++]=N,T[P++]=D,T[P++]=D,T[P++]=C}}else{m=p.version;for(let g=0,M=0;g<v;g+=3){let P=g+0,C=g+1,N=g+2;T[M++]=P,T[M++]=C,T[M++]=C,T[M++]=N,T[M++]=N,T[M++]=P}}y.version=m;let w=s.get(x);w&&e.remove(w),s.set(x,y)}function d(x){let _=s.get(x);if(_){let p=x.index;p!==null&&_.version<p.version&&h(x)}else h(x);return s.get(x)}function c(){for(let x in n){let _=n[x].deref();_!==void 0&&l(_)}}return{get:f,update:u,getWireframeAttribute:d,dispose:c}}function IM(r,e,t){let i;function n(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(i,d,s,h*a),t.update(d,i,1)}function f(h,d,c){c!==0&&(r.drawElementsInstanced(i,d,s,h*a,c),t.update(d,i,c))}function u(h,d,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,c);let _=0;for(let p=0;p<c;p++)_+=d[p];t.update(_,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=f,this.renderMultiDraw=u}function LM(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ke("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function DM(r,e,t){let i=new WeakMap,n=new Pt;function s(a,o,l){let f=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let P=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let c=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],A=0;c===!0&&(A=1),x===!0&&(A=2),_===!0&&(A=3);let y=o.attributes.position.count*A,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*T*4*h),g=new Ao(w,y,T,h);g.type=vn,g.needsUpdate=!0;let M=A*4;for(let C=0;C<h;C++){let N=p[C],D=m[C],G=v[C],I=y*T*4*C;for(let B=0;B<N.count;B++){let H=B*M;c===!0&&(n.fromBufferAttribute(N,B),w[I+H+0]=n.x,w[I+H+1]=n.y,w[I+H+2]=n.z,w[I+H+3]=0),x===!0&&(n.fromBufferAttribute(D,B),w[I+H+4]=n.x,w[I+H+5]=n.y,w[I+H+6]=n.z,w[I+H+7]=0),_===!0&&(n.fromBufferAttribute(G,B),w[I+H+8]=n.x,w[I+H+9]=n.y,w[I+H+10]=n.z,w[I+H+11]=G.itemSize===4?n.w:1)}}d={count:h,texture:g,size:new Qe(y,T)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let c=0;for(let _=0;_<f.length;_++)c+=f[_];let x=o.morphTargetsRelative?1:1-c;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",f)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function NM(r,e,t,i,n){let s=new WeakMap;function a(f){let u=n.render.frame,h=f.geometry,d=e.get(f,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),f.isInstancedMesh&&(f.hasEventListener("dispose",l)===!1&&f.addEventListener("dispose",l),s.get(f)!==u&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),s.set(f,u))),f.isSkinnedMesh){let c=f.skeleton;s.get(c)!==u&&(c.update(),s.set(c,u))}return d}function o(){s=new WeakMap}function l(f){let u=f.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var FM={[rh]:"LINEAR_TONE_MAPPING",[sh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[Yo]:"ACES_FILMIC_TONE_MAPPING",[lh]:"AGX_TONE_MAPPING",[fh]:"NEUTRAL_TONE_MAPPING",[oh]:"CUSTOM_TONE_MAPPING"};function UM(r,e,t,i,n,s){let a=new ln(e,t,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,f=null,u=new Rn;u.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ht([0,2,0,0,2,0],2));let h=new kf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new $t(u,h),c=new Wo(-1,1,1,-1,0,1),x=null,_=null,p=!1,m,v=null,A=[],y=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let g=0;g<A.length;g++){let M=A[g];M.setSize&&M.setSize(T,w)}},this.setEffects=function(T){A=T,y=A.length>0&&A[0].isRenderPass===!0;let w=a.width,g=a.height;A.length>0&&o===null&&(o=new ln(w,g,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new ln(w,g,{type:In,depthBuffer:!1,stencilBuffer:!1}));let M=n===!0&&A.some(P=>P.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&f===null&&(f=new xr(w,g),s===!0&&(f.format=vr,f.type=Ps)),a.dispose(),a.depthTexture=M?f:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let P=0;P<A.length;P++){let C=A[P];C.setSize&&C.setSize(w,g),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(f)}},this.begin=function(T,w){if(p||T.toneMapping===Yn&&A.length===0)return!1;if(v=w,w!==null){let g=w.width,M=w.height;(a.width!==g||a.height!==M)&&this.setSize(g,M)}return y===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=Yn,!0},this.hasRenderPass=function(){return y},this.end=function(T,w){T.toneMapping=m,p=!0;let g=a,M=o;for(let P=0;P<A.length;P++){let C=A[P];C.enabled!==!1&&(C.render(T,M,g,w),C.needsSwap!==!1&&(g=M,M=M===o?l:o))}if(x!==T.outputColorSpace||_!==T.toneMapping){x=T.outputColorSpace,_=T.toneMapping,h.defines={},tt.getTransfer(x)===mt&&(h.defines.SRGB_TRANSFER="");let P=FM[_];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(v),T.render(d,c),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Ux=new zi,Ox=new xr(1,1),Bx=new Fo(1),kx=new Ao,zx=new Uf,Gx=new No,mx=[],gx=[],xx=new Float32Array(16),_x=new Float32Array(9),vx=new Float32Array(4);function Da(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=mx[n];if(s===void 0&&(s=new Float32Array(n),mx[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ni(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ri(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Xu(r,e){let t=gx[e];t===void 0&&(t=new Int32Array(e),gx[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function OM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function BM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;r.uniform2fv(this.addr,e),ri(t,e)}}function kM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ni(t,e))return;r.uniform3fv(this.addr,e),ri(t,e)}}function zM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;r.uniform4fv(this.addr,e),ri(t,e)}}function GM(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ri(t,e)}else{if(ni(t,i))return;vx.set(i),r.uniformMatrix2fv(this.addr,!1,vx),ri(t,i)}}function VM(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ri(t,e)}else{if(ni(t,i))return;_x.set(i),r.uniformMatrix3fv(this.addr,!1,_x),ri(t,i)}}function HM(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ri(t,e)}else{if(ni(t,i))return;xx.set(i),r.uniformMatrix4fv(this.addr,!1,xx),ri(t,i)}}function WM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function XM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;r.uniform2iv(this.addr,e),ri(t,e)}}function qM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ni(t,e))return;r.uniform3iv(this.addr,e),ri(t,e)}}function YM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;r.uniform4iv(this.addr,e),ri(t,e)}}function ZM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function JM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;r.uniform2uiv(this.addr,e),ri(t,e)}}function KM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ni(t,e))return;r.uniform3uiv(this.addr,e),ri(t,e)}}function $M(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;r.uniform4uiv(this.addr,e),ri(t,e)}}function qu(r){return r.version===0&&(r.compareFunction=vh,r.needsUpdate=!0),r}function QM(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=qu(Ox):s=Ux,t.setTexture2D(e||s,n)}function jM(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||zx,n)}function eb(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=qu(Bx):s=Gx,t.setTextureCube(e||s,n)}function tb(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||kx,n)}function ib(r){switch(r){case 5126:return OM;case 35664:return BM;case 35665:return kM;case 35666:return zM;case 35674:return GM;case 35675:return VM;case 35676:return HM;case 5124:case 35670:return WM;case 35667:case 35671:return XM;case 35668:case 35672:return qM;case 35669:case 35673:return YM;case 5125:return ZM;case 36294:return JM;case 36295:return KM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return tb}}function nb(r,e){r.uniform1fv(this.addr,e)}function rb(r,e){let t=Da(e,this.size,2);r.uniform2fv(this.addr,t)}function sb(r,e){let t=Da(e,this.size,3);r.uniform3fv(this.addr,t)}function ab(r,e){let t=Da(e,this.size,4);r.uniform4fv(this.addr,t)}function ob(r,e){let t=Da(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lb(r,e){let t=Da(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function fb(r,e){let t=Da(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ub(r,e){r.uniform1iv(this.addr,e)}function cb(r,e){r.uniform2iv(this.addr,e)}function db(r,e){r.uniform3iv(this.addr,e)}function hb(r,e){r.uniform4iv(this.addr,e)}function pb(r,e){r.uniform1uiv(this.addr,e)}function mb(r,e){r.uniform2uiv(this.addr,e)}function gb(r,e){r.uniform3uiv(this.addr,e)}function xb(r,e){r.uniform4uiv(this.addr,e)}function _b(r,e,t){let i=this.cache,n=e.length,s=Xu(t,n);ni(i,s)||(r.uniform1iv(this.addr,s),ri(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=qu(Ox):a=Ux;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function vb(r,e,t){let i=this.cache,n=e.length,s=Xu(t,n);ni(i,s)||(r.uniform1iv(this.addr,s),ri(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||zx,s[a])}function yb(r,e,t){let i=this.cache,n=e.length,s=Xu(t,n);ni(i,s)||(r.uniform1iv(this.addr,s),ri(i,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=qu(Bx):a=Gx;for(let o=0;o!==n;++o)t.setTextureCube(e[o]||a,s[o])}function Sb(r,e,t){let i=this.cache,n=e.length,s=Xu(t,n);ni(i,s)||(r.uniform1iv(this.addr,s),ri(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||kx,s[a])}function Mb(r){switch(r){case 5126:return nb;case 35664:return rb;case 35665:return sb;case 35666:return ab;case 35674:return ob;case 35675:return lb;case 35676:return fb;case 5124:case 35670:return ub;case 35667:case 35671:return cb;case 35668:case 35672:return db;case 35669:case 35673:return hb;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Sb}}var Nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ib(t.type)}},Fh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mb(t.type)}},Uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Lh=/(\w+)(\])?(\[|\.)?/g;function yx(r,e){r.seq.push(e),r.map[e.id]=e}function bb(r,e,t){let i=r.name,n=i.length;for(Lh.lastIndex=0;;){let s=Lh.exec(i),a=Lh.lastIndex,o=s[1],l=s[2]==="]",f=s[3];if(l&&(o=o|0),f===void 0||f==="["&&a+2===n){yx(t,f===void 0?new Nh(o,r,e):new Fh(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Uh(o),yx(t,h)),t=h}}}var La=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);bb(o,l,this)}let n=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Sx(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var wb=37297,Tb=0;function Ab(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Mx=new Ge;function Eb(r){tt._getMatrix(Mx,tt.workingColorSpace,r);let e=`mat3( ${Mx.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(r)){case To:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function bx(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ab(r.getShaderSource(e),o)}else return s}function Cb(r,e){let t=Eb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Rb={[rh]:"Linear",[sh]:"Reinhard",[ah]:"Cineon",[Yo]:"ACESFilmic",[lh]:"AgX",[fh]:"Neutral",[oh]:"Custom"};function Pb(r,e){let t=Rb[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Vu=new Y;function Ib(){tt.getLuminanceCoefficients(Vu);let r=Vu.x.toFixed(4),e=Vu.y.toFixed(4),t=Vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function Db(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Nb(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(e,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function nl(r){return r!==""}function wx(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Tx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(r){return r.replace(Fb,Ub)}function Ub(r,e){let t=qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Oh(t)}var Ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ax(r){return r.replace(Ob,Bb)}function Bb(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ex(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var kb={[qo]:"SHADOWMAP_TYPE_PCF",[Ca]:"SHADOWMAP_TYPE_VSM"};function zb(r){return kb[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Gb={[Pa]:"ENVMAP_MODE_REFRACTION"};function Vb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Gb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Hb={[nh]:"ENVMAP_BLENDING_MULTIPLY",[Wg]:"ENVMAP_BLENDING_MIX",[Xg]:"ENVMAP_BLENDING_ADD"};function Wb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Hb[r.combine]||"ENVMAP_BLENDING_NONE"}function Xb(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=zb(t),f=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Vb(t),h=Wb(t),d=Lb(t),c=Db(s),x=n.createProgram(),_,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,c].filter(nl).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,c].filter(nl).join(`
`),p.length>0&&(p+=`
`)):(_=[Ex(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,c,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),p=[Ex(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,c,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Yn?Pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Cb("linearToOutputTexel",t.outputColorSpace),Ib(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nl).join(`
`)),a=Oh(a),a=wx(a,t),a=Tx(a,t),o=Oh(o),o=wx(o,t),o=Tx(o,t),a=Ax(a),o=Ax(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=m+_+a,A=m+p+o,y=Sx(n,n.VERTEX_SHADER,v),T=Sx(n,n.FRAGMENT_SHADER,A);n.attachShader(x,y),n.attachShader(x,T),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function w(C){if(r.debug.checkShaderErrors){let N=n.getProgramInfoLog(x)||"",D=n.getShaderInfoLog(y)||"",G=n.getShaderInfoLog(T)||"",I=N.trim(),B=D.trim(),H=G.trim(),O=!0,te=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,y,T);else{let W=bx(n,y,"vertex"),R=bx(n,T,"fragment");ke("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+W+`
`+R)}else I!==""?Be("WebGLProgram: Program Info Log:",I):(B===""||H==="")&&(te=!1);te&&(C.diagnostics={runnable:O,programLog:I,vertexShader:{log:B,prefix:_},fragmentShader:{log:H,prefix:p}})}n.deleteShader(y),n.deleteShader(T),g=new La(n,x),M=Nb(n,x)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(x,wb)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=T,this}var qb=0,Bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new kh(e),t.set(e,i)),i}},kh=class{constructor(e){this.id=qb++,this.code=e,this.usedTimes=0}};function Yb(r){return r===$r||r===jo||r===el}function Zb(r,e,t,i,n,s){let a=new Eo,o=new Bh,l=new Set,f=[],u=new Map,h=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function c(g){return l.add(g),g===0?"uv":`uv${g}`}function x(g,M,P,C,N,D){let G=C.fog,I=N.geometry,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,O=e.get(g.envMap||B,H),te=d[g.type],W=i.precision;g.precision!==null&&(W=i.getMaxPrecision(g.precision),W!==g.precision&&Be("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ie=R!==void 0?R.length:0,Se=0;I.morphAttributes.position!==void 0&&(Se=1),I.morphAttributes.normal!==void 0&&(Se=2),I.morphAttributes.color!==void 0&&(Se=3);let Ue,J,ue,ye;if(te){let ee=Jn[te];Ue=ee.vertexShader,J=ee.fragmentShader}else{Ue=g.vertexShader,J=g.fragmentShader;let ee=o.getVertexShaderStage(g),we=o.getFragmentShaderStage(g);o.update(g,ee,we),ue=ee.id,ye=we.id}let be=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),De=N.isInstancedMesh===!0,gt=N.isBatchedMesh===!0,Ae=!!g.map,Ve=!!g.matcap,Ie=!!O,Fe=Ie&&O.isPMREMTexture===!0,ft=!!g.aoMap,at=!!g.lightMap,Z=!!g.bumpMap&&g.wireframe===!1,Ke=!!g.normalMap,Wt=!!g.displacementMap,vt=!!g.emissiveMap,nt=!!g.metalnessMap,Ft=!!g.roughnessMap,Gt=g.anisotropy>0,U=g.clearcoat>0,ct=g.diffuseRoughness>0,ot=g.dispersion>0,ze=g.retroreflectivity>0,ce=g.iridescence>0,ut=g.sheen>0,Le=g.transmission>0,Oe=Gt&&!!g.anisotropyMap,E=U&&!!g.clearcoatMap,S=U&&!!g.clearcoatNormalMap,z=U&&!!g.clearcoatRoughnessMap,se=ct&&!!g.diffuseRoughnessMap,ne=ce&&!!g.iridescenceMap,fe=ce&&!!g.iridescenceThicknessMap,ge=ut&&!!g.sheenColorMap,V=ut&&!!g.sheenRoughnessMap,Q=!!g.specularMap,le=!!g.specularColorMap,L=!!g.specularIntensityMap,$=Le&&!!g.transmissionMap,K=Le&&!!g.thicknessMap,de=!!g.gradientMap,oe=!!g.alphaMap,he=g.alphaTest>0,ae=!!g.alphaHash,pe=!!g.extensions,re=Yn;g.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(re=r.toneMapping);let j=Fe?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,xe={shaderID:te,shaderType:g.type,shaderName:g.name,vertexShader:Ue,fragmentShader:J,defines:g.defines,customVertexShaderID:ue,customFragmentShaderID:ye,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:gt,batchingColor:gt&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ae,matcap:Ve,envMap:Ie,envMapMode:Ie&&O.mapping,envMapPMREM:Fe,envMapMaxLod:Fe?j.length-1:null,envMapSize:Fe?j[0].width:null,aoMap:ft,lightMap:at,bumpMap:Z,normalMap:Ke,displacementMap:Wt,emissiveMap:vt,normalMapObjectSpace:Ke&&g.normalMapType===Zg,normalMapTangentSpace:Ke&&g.normalMapType===zu,packedNormalMap:Ke&&g.normalMapType===zu&&Yb(g.normalMap.format),metalnessMap:nt,roughnessMap:Ft,anisotropy:Gt,anisotropyMap:Oe,clearcoat:U,clearcoatMap:E,clearcoatNormalMap:S,clearcoatRoughnessMap:z,diffuseRoughness:ct,diffuseRoughnessMap:se,dispersion:ot,retroreflection:ze,iridescence:ce,iridescenceMap:ne,iridescenceThicknessMap:fe,sheen:ut,sheenColorMap:ge,sheenRoughnessMap:V,specularMap:Q,specularColorMap:le,specularIntensityMap:L,transmission:Le,transmissionMap:$,thicknessMap:K,gradientMap:de,opaque:g.transparent===!1&&g.blending===Ra&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:he,alphaHash:ae,combine:g.combine,mapUv:Ae&&c(g.map.channel),aoMapUv:ft&&c(g.aoMap.channel),lightMapUv:at&&c(g.lightMap.channel),bumpMapUv:Z&&c(g.bumpMap.channel),normalMapUv:Ke&&c(g.normalMap.channel),displacementMapUv:Wt&&c(g.displacementMap.channel),emissiveMapUv:vt&&c(g.emissiveMap.channel),metalnessMapUv:nt&&c(g.metalnessMap.channel),roughnessMapUv:Ft&&c(g.roughnessMap.channel),anisotropyMapUv:Oe&&c(g.anisotropyMap.channel),clearcoatMapUv:E&&c(g.clearcoatMap.channel),clearcoatNormalMapUv:S&&c(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&c(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&c(g.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&c(g.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&c(g.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&c(g.sheenColorMap.channel),sheenRoughnessMapUv:V&&c(g.sheenRoughnessMap.channel),specularMapUv:Q&&c(g.specularMap.channel),specularColorMapUv:le&&c(g.specularColorMap.channel),specularIntensityMapUv:L&&c(g.specularIntensityMap.channel),transmissionMapUv:$&&c(g.transmissionMap.channel),thicknessMapUv:K&&c(g.thicknessMap.channel),alphaMapUv:oe&&c(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ke||Gt),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Ae||oe),fog:!!G,useFog:g.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&Ke===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Se,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(ee=>ee.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:Ae&&g.map.isVideoTexture===!0&&tt.getTransfer(g.map.colorSpace)===mt,decodeVideoTextureEmissive:vt&&g.emissiveMap.isVideoTexture===!0&&tt.getTransfer(g.emissiveMap.colorSpace)===mt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===qn,flipSided:g.side===Gi,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:pe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&g.extensions.multiDraw===!0||gt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function _(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let P in g.defines)M.push(P),M.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(p(M,g),m(M,g),M.push(r.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function p(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function m(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function v(g){let M=d[g.type],P;if(M){let C=Jn[M];P=lx.clone(C.uniforms)}else P=g.uniforms;return P}function A(g,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new Xb(r,M,g,n),f.push(P),u.set(M,P)),P}function y(g){if(--g.usedTimes===0){let M=f.indexOf(g);f[M]=f[f.length-1],f.pop(),u.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:v,acquireProgram:A,releaseProgram:y,releaseShaderCache:T,programs:f,dispose:w}}function Jb(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Kb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Cx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Rx(){let r=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(d){let c=0;return d.isInstancedMesh&&(c+=2),d.isSkinnedMesh&&(c+=1),c}function o(d,c,x,_,p,m){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:c,material:x,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:m},r[e]=v):(v.id=d.id,v.object=d,v.geometry=c,v.material=x,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=p,v.group=m),e++,v}function l(d,c,x,_,p,m,v){v.reversedDepth===!0&&(p=-p);let A=o(d,c,x,_,p,m);x.transmission>0?i.push(A):x.transparent===!0?n.push(A):t.push(A)}function f(d,c,x,_,p,m){let v=o(d,c,x,_,p,m);x.transmission>0?i.unshift(v):x.transparent===!0?n.unshift(v):t.unshift(v)}function u(d,c){t.length>1&&t.sort(d||Kb),i.length>1&&i.sort(c||Cx),n.length>1&&n.sort(c||Cx)}function h(){for(let d=e,c=r.length;d<c;d++){let x=r[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:f,finish:h,sort:u}}function $b(){let r=new WeakMap;function e(i,n){let s=r.get(i),a;return s===void 0?(a=new Rx,r.set(i,[a])):n>=s.length?(a=new Rx,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Qb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new it};break;case"SpotLight":t={position:new Y,direction:new Y,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function jb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var ew=0;function tw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function iw(r){let e=new Qb,t=jb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new Y);let n=new Y,s=new wt,a=new wt;function o(f){let u=0,h=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let c=0,x=0,_=0,p=0,m=0,v=0,A=0,y=0,T=0,w=0,g=0,M=0,P=0,C=0;f.sort(tw);for(let D=0,G=f.length;D<G;D++){let I=f[D],B=I.color,H=I.intensity,O=I.distance,te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===$r?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*H,h+=B.g*H,d+=B.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],H);C++}else if(I.isSunLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,ie=t.get(I);ie.shadowIntensity=R.intensity,ie.shadowBias=R.bias,ie.shadowNormalBias=R.normalBias,ie.shadowRadius=R.radius,ie.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),i.sunShadow[x]=ie,i.sunShadowMap[x]=te;let Se=R.getViewportCount();for(let Ue=0;Ue<Se;Ue++)i.sunShadowMatrix[_+Ue]=R.getMatrix(Ue),i.sunShadowCascade[_+Ue]=R._cascadeData[Ue];_+=Se,x++}i.sun[c]=W,c++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,ie=t.get(I);ie.shadowIntensity=R.intensity,ie.shadowBias=R.bias,ie.shadowNormalBias=R.normalBias,ie.shadowRadius=R.radius,ie.shadowMapSize=R.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=I.shadow.matrix,T++}i.directional[p]=W,p++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(H),W.distance=O,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[v]=W;let R=I.shadow;if(I.map&&(i.spotLightMap[M]=I.map,M++,R.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[v]=R.matrix,I.castShadow){let ie=t.get(I);ie.shadowIntensity=R.intensity,ie.shadowBias=R.bias,ie.shadowNormalBias=R.normalBias,ie.shadowRadius=R.radius,ie.shadowMapSize=R.mapSize,i.spotShadow[v]=ie,i.spotShadowMap[v]=te,g++}v++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(B).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[A]=W,A++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let R=I.shadow,ie=t.get(I);ie.shadowIntensity=R.intensity,ie.shadowBias=R.bias,ie.shadowNormalBias=R.normalBias,ie.shadowRadius=R.radius,ie.shadowMapSize=R.mapSize,ie.shadowCameraNear=R.camera.near,ie.shadowCameraFar=R.camera.far,i.pointShadow[m]=ie,i.pointShadowMap[m]=te,i.pointShadowMatrix[m]=I.shadow.matrix,w++}i.point[m]=W,m++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[y]=W,y++}}A>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let N=i.hash;(N.sunLength!==c||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==v||N.rectAreaLength!==A||N.hemiLength!==y||N.numSunShadows!==x||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==g||N.numSpotMaps!==M||N.numLightProbes!==C)&&(i.sun.length=c,i.directional.length=p,i.spot.length=v,i.rectArea.length=A,i.point.length=m,i.hemi.length=y,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+M-P,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,N.sunLength=c,N.directionalLength=p,N.pointLength=m,N.spotLength=v,N.rectAreaLength=A,N.hemiLength=y,N.numSunShadows=x,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=g,N.numSpotMaps=M,N.numLightProbes=C,i.version=ew++)}function l(f,u){let h=0,d=0,c=0,x=0,_=0,p=0,m=u.matrixWorldInverse;for(let v=0,A=f.length;v<A;v++){let y=f[v];if(y.isSunLight){let T=i.sun[h];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),h++}else if(y.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(m),d++}else if(y.isSpotLight){let T=i.spot[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(m),x++}else if(y.isRectAreaLight){let T=i.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let T=i.point[c];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),c++}else if(y.isHemisphereLight){let T=i.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Px(r){let e=new iw(r),t=[],i=[],n=[];function s(h){u.camera=h,t.length=0,i.length=0,n.length=0}function a(h){h.isLightProbeGrid?n.push(h):t.push(h)}function o(h){i.push(h)}function l(){e.setup(t),n.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function f(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o}}function nw(r){let e=new WeakMap;function t(n,s=0){let a=e.get(n),o;return a===void 0?(o=new Px(r),e.set(n,[o])):s>=a.length?(o=new Px(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aw=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],ow=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Ix=new wt,il=new Y,Dh=new Y;function lw(r,e,t){let i=new Xr,n=new Qe,s=new Qe,a=new Pt,o=new zf,l=new Gf,f={},u=t.maxTextureSize,h={[Kr]:Gi,[Gi]:Kr,[qn]:qn},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:rw,fragmentShader:sw}),c=d.clone();c.defines.HORIZONTAL_PASS=1;let x=new Rn;x.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $t(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let m=this.type;this.render=function(w,g,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Tg&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qo);let P=r.getRenderTarget(),C=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Es),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let G=m!==this.type;G&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=w.length;I<B;I++){let H=w[I],O=H.shadow;if(O===void 0){Be("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let te=O.getFrameExtents();n.multiply(te),s.copy(O.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/te.x),n.x=s.x*te.x,O.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/te.y),n.y=s.y*te.y,O.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ca){if(H.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ln(n.x,n.y,{format:$r,type:In,minFilter:ki,magFilter:ki,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new xr(n.x,n.y,vn),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=mr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=fi,O.map.depthTexture.magFilter=fi}else H.isPointLight?(O.map=new rl(n.x),O.map.depthTexture=new Fo(n.x,Pn)):(O.map=new ln(n.x,n.y),O.map.depthTexture=new xr(n.x,n.y,Pn)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=mr,this.type===qo?(O.map.depthTexture.compareFunction=W?_h:xh,O.map.depthTexture.minFilter=ki,O.map.depthTexture.magFilter=ki):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=fi,O.map.depthTexture.magFilter=fi);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==n.x||O.map.height!==n.y)&&O.map.setSize(n.x,n.y);let R=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();H.isPointLight!==!0&&O.updateMatrices(H,M);let ie=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:M.layers;for(let Se=0;Se<R;Se++){let Ue=O.getCamera(Se);if(H.isPointLight){let J=O.camera,ue=O.matrix,ye=H.distance||J.far;ye!==J.far&&(J.far=ye,J.updateProjectionMatrix()),il.setFromMatrixPosition(H.matrixWorld),J.position.copy(il),Dh.copy(J.position),Dh.add(aw[Se]),J.up.copy(ow[Se]),J.lookAt(Dh),J.updateMatrixWorld(),ue.makeTranslation(-il.x,-il.y,-il.z),Ix.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ix,J.coordinateSystem,J.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,Se),r.clear();else{Se===0&&(r.setRenderTarget(O.map),r.clear());let J=O.getViewport(Se);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),D.viewport(a)}i=O.getFrustum(Se),y(g,M,Ue,H,ie,this.type)}O.isPointLightShadow!==!0&&this.type===Ca&&v(O,M),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(P,C,N)};function v(w,g){let M=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,c.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,c.needsUpdate=!0),w.mapPass===null?w.mapPass=new ln(n.x,n.y,{format:$r,type:In}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(g,null,M,d,_,null),c.uniforms.shadow_pass.value=w.mapPass.texture,c.uniforms.resolution.value.set(w.map.width,w.map.height),c.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(g,null,M,c,_,null)}function A(w,g,M,P){let C=null,N=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)C=N;else if(C=M.isPointLight===!0?l:o,r.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let D=C.uuid,G=g.uuid,I=f[D];I===void 0&&(I={},f[D]=I);let B=I[G];B===void 0&&(B=C.clone(),I[G]=B,g.addEventListener("dispose",T)),C=B}if(C.visible=g.visible,C.wireframe=g.wireframe,P===Ca?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:h[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=r.properties.get(C);D.light=M}return C}function y(w,g,M,P,C,N){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Ca)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let I=e.update(w),B=w.material;if(Array.isArray(B)){let H=I.groups;for(let O=0,te=H.length;O<te;O++){let W=H[O],R=B[W.materialIndex];if(R&&R.visible){let ie=A(w,R,P,N);w.onBeforeShadow(r,w,g,M,I,ie,W),r.renderBufferDirect(M,null,I,ie,w,W),w.onAfterShadow(r,w,g,M,I,ie,W)}}}else if(B.visible){let H=A(w,B,P,N);w.onBeforeShadow(r,w,g,M,I,H,null),r.renderBufferDirect(M,null,I,H,w,null),w.onAfterShadow(r,w,g,M,I,H,null)}}let G=w.children;for(let I=0,B=G.length;I<B;I++)y(G[I],g,M,P,C,N)}function T(w){w.target.removeEventListener("dispose",T);for(let M in f){let P=f[M],C=w.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function fw(r,e){function t(){let L=!1,$=new Pt,K=null,de=new Pt(0,0,0,0);return{setMask:function(oe){K!==oe&&!L&&(r.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){L=oe},setClear:function(oe,he,ae,pe,re){re===!0&&(oe*=pe,he*=pe,ae*=pe),$.set(oe,he,ae,pe),de.equals($)===!1&&(r.clearColor(oe,he,ae,pe),de.copy($))},reset:function(){L=!1,K=null,de.set(-1,0,0,0)}}}function i(){let L=!1,$=!1,K=null,de=null,oe=null;return{setReversed:function(he){if($!==he){let ae=e.get("EXT_clip_control");he?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),$=he;let pe=oe;oe=null,this.setClear(pe)}},getReversed:function(){return $},setTest:function(he){he?me(r.DEPTH_TEST):De(r.DEPTH_TEST)},setMask:function(he){K!==he&&!L&&(r.depthMask(he),K=he)},setFunc:function(he){if($&&(he=sx[he]),de!==he){switch(he){case bf:r.depthFunc(r.NEVER);break;case wf:r.depthFunc(r.ALWAYS);break;case Tf:r.depthFunc(r.LESS);break;case xa:r.depthFunc(r.LEQUAL);break;case Af:r.depthFunc(r.EQUAL);break;case Ef:r.depthFunc(r.GEQUAL);break;case Cf:r.depthFunc(r.GREATER);break;case Rf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=he}},setLocked:function(he){L=he},setClear:function(he){oe!==he&&(oe=he,$&&(he=1-he),r.clearDepth(he))},reset:function(){L=!1,K=null,de=null,oe=null,$=!1}}}function n(){let L=!1,$=null,K=null,de=null,oe=null,he=null,ae=null,pe=null,re=null;return{setTest:function(j){L||(j?me(r.STENCIL_TEST):De(r.STENCIL_TEST))},setMask:function(j){$!==j&&!L&&(r.stencilMask(j),$=j)},setFunc:function(j,xe,ee){(K!==j||de!==xe||oe!==ee)&&(r.stencilFunc(j,xe,ee),K=j,de=xe,oe=ee)},setOp:function(j,xe,ee){(he!==j||ae!==xe||pe!==ee)&&(r.stencilOp(j,xe,ee),he=j,ae=xe,pe=ee)},setLocked:function(j){L=j},setClear:function(j){re!==j&&(r.clearStencil(j),re=j)},reset:function(){L=!1,$=null,K=null,de=null,oe=null,he=null,ae=null,pe=null,re=null}}}let s=new t,a=new i,o=new n,l={},f=new WeakMap,u={},h={},d={},c=new WeakMap,x=[],_=null,p=!1,m=null,v=null,A=null,y=null,T=null,w=null,g=null,M=new it(0,0,0),P=0,C=!1,N=null,D=null,G=null,I=null,B=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,te=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=te>=2);let R=null,ie={},Se=r.getParameter(r.SCISSOR_BOX),Ue=r.getParameter(r.VIEWPORT),J=new Pt().fromArray(Se),ue=new Pt().fromArray(Ue);function ye(L,$,K,de){let oe=new Uint8Array(4),he=r.createTexture();r.bindTexture(L,he),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<K;ae++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D($,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D($+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return he}let be={};be[r.TEXTURE_2D]=ye(r.TEXTURE_2D,r.TEXTURE_2D,1),be[r.TEXTURE_CUBE_MAP]=ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[r.TEXTURE_2D_ARRAY]=ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),be[r.TEXTURE_3D]=ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(r.DEPTH_TEST),a.setFunc(xa),Z(!1),Ke($d),me(r.CULL_FACE),ft(Es);function me(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function De(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function gt(L,$){return d[L]!==$?(r.bindFramebuffer(L,$),d[L]=$,L===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=$),L===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=$),!0):!1}function Ae(L,$){let K=x,de=!1;if(L){K=c.get($),K===void 0&&(K=[],c.set($,K));let oe=L.textures;if(K.length!==oe.length||K[0]!==r.COLOR_ATTACHMENT0){for(let he=0,ae=oe.length;he<ae;he++)K[he]=r.COLOR_ATTACHMENT0+he;K.length=oe.length,de=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,de=!0);de&&r.drawBuffers(K)}function Ve(L){return _!==L?(r.useProgram(L),_=L,!0):!1}let Ie={[Cs]:r.FUNC_ADD,[Eg]:r.FUNC_SUBTRACT,[Cg]:r.FUNC_REVERSE_SUBTRACT};Ie[Rg]=r.MIN,Ie[Pg]=r.MAX;let Fe={[Ig]:r.ZERO,[Lg]:r.ONE,[Dg]:r.SRC_COLOR,[th]:r.SRC_ALPHA,[kg]:r.SRC_ALPHA_SATURATE,[Og]:r.DST_COLOR,[Fg]:r.DST_ALPHA,[Ng]:r.ONE_MINUS_SRC_COLOR,[ih]:r.ONE_MINUS_SRC_ALPHA,[Bg]:r.ONE_MINUS_DST_COLOR,[Ug]:r.ONE_MINUS_DST_ALPHA,[zg]:r.CONSTANT_COLOR,[Gg]:r.ONE_MINUS_CONSTANT_COLOR,[Vg]:r.CONSTANT_ALPHA,[Hg]:r.ONE_MINUS_CONSTANT_ALPHA};function ft(L,$,K,de,oe,he,ae,pe,re,j){if(L===Es){p===!0&&(De(r.BLEND),p=!1);return}if(p===!1&&(me(r.BLEND),p=!0),L!==Ag){if(L!==m||j!==C){if((v!==Cs||T!==Cs)&&(r.blendEquation(r.FUNC_ADD),v=Cs,T=Cs),j)switch(L){case Ra:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qd:r.blendFunc(r.ONE,r.ONE);break;case jd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case eh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ke("WebGLState: Invalid blending: ",L);break}else switch(L){case Ra:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case jd:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",L);break}A=null,y=null,w=null,g=null,M.set(0,0,0),P=0,m=L,C=j}return}oe=oe||$,he=he||K,ae=ae||de,($!==v||oe!==T)&&(r.blendEquationSeparate(Ie[$],Ie[oe]),v=$,T=oe),(K!==A||de!==y||he!==w||ae!==g)&&(r.blendFuncSeparate(Fe[K],Fe[de],Fe[he],Fe[ae]),A=K,y=de,w=he,g=ae),(pe.equals(M)===!1||re!==P)&&(r.blendColor(pe.r,pe.g,pe.b,re),M.copy(pe),P=re),m=L,C=!1}function at(L,$){L.side===qn?De(r.CULL_FACE):me(r.CULL_FACE);let K=L.side===Gi;$&&(K=!K),Z(K),L.blending===Ra&&L.transparent===!1?ft(Es):ft(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):De(r.SAMPLE_ALPHA_TO_COVERAGE)}function Z(L){N!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),N=L)}function Ke(L){L!==bg?(me(r.CULL_FACE),L!==D&&(L===$d?r.cullFace(r.BACK):L===wg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):De(r.CULL_FACE),D=L}function Wt(L){L!==G&&(O&&r.lineWidth(L),G=L)}function vt(L,$,K){L?(me(r.POLYGON_OFFSET_FILL),(I!==$||B!==K)&&(I=$,B=K,a.getReversed()&&($=-$,K=-K),r.polygonOffset($,K))):De(r.POLYGON_OFFSET_FILL)}function nt(L){L?me(r.SCISSOR_TEST):De(r.SCISSOR_TEST)}function Ft(L){L===void 0&&(L=r.TEXTURE0+H-1),R!==L&&(r.activeTexture(L),R=L)}function Gt(L,$,K){K===void 0&&(R===null?K=r.TEXTURE0+H-1:K=R);let de=ie[K];de===void 0&&(de={type:void 0,texture:void 0},ie[K]=de),(de.type!==L||de.texture!==$)&&(R!==K&&(r.activeTexture(K),R=K),r.bindTexture(L,$||be[L]),de.type=L,de.texture=$)}function U(){let L=ie[R];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ct(){try{r.compressedTexImage2D(...arguments)}catch(L){ke("WebGLState:",L)}}function ot(){try{r.compressedTexImage3D(...arguments)}catch(L){ke("WebGLState:",L)}}function ze(){try{r.texSubImage2D(...arguments)}catch(L){ke("WebGLState:",L)}}function ce(){try{r.texSubImage3D(...arguments)}catch(L){ke("WebGLState:",L)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(L){ke("WebGLState:",L)}}function Le(){try{r.compressedTexSubImage3D(...arguments)}catch(L){ke("WebGLState:",L)}}function Oe(){try{r.texStorage2D(...arguments)}catch(L){ke("WebGLState:",L)}}function E(){try{r.texStorage3D(...arguments)}catch(L){ke("WebGLState:",L)}}function S(){try{r.texImage2D(...arguments)}catch(L){ke("WebGLState:",L)}}function z(){try{r.texImage3D(...arguments)}catch(L){ke("WebGLState:",L)}}function se(L){return h[L]!==void 0?h[L]:r.getParameter(L)}function ne(L,$){h[L]!==$&&(r.pixelStorei(L,$),h[L]=$)}function fe(L){J.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function ge(L){ue.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function V(L,$){let K=f.get($);K===void 0&&(K=new WeakMap,f.set($,K));let de=K.get(L);de===void 0&&(de=r.getUniformBlockIndex($,L.name),r.uniformBlockBinding($,de,de),K.set(L,de))}function Q(L,$,K){let oe=f.get($).get(L);l[oe]!==K&&(r.bindBufferBase(r.UNIFORM_BUFFER,oe,K),l[oe]=K)}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},R=null,ie={},d={},l={},c=new WeakMap,x=[],_=null,p=!1,m=null,v=null,A=null,y=null,T=null,w=null,g=null,M=new it(0,0,0),P=0,C=!1,N=null,D=null,G=null,I=null,B=null,J.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:De,bindFramebuffer:gt,drawBuffers:Ae,useProgram:Ve,setBlending:ft,setMaterial:at,setFlipSided:Z,setCullFace:Ke,setLineWidth:Wt,setPolygonOffset:vt,setScissorTest:nt,activeTexture:Ft,bindTexture:Gt,unbindTexture:U,compressedTexImage2D:ct,compressedTexImage3D:ot,texImage2D:S,texImage3D:z,pixelStorei:ne,getParameter:se,updateUBOMapping:V,uniformBlockBinding:Q,texStorage2D:Oe,texStorage3D:E,texSubImage2D:ze,texSubImage3D:ce,compressedTexSubImage2D:ut,compressedTexSubImage3D:Le,scissor:fe,viewport:ge,reset:le}}function uw(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Qe,u=new WeakMap,h=new Set,d,c=new WeakMap,x=new Set,_=new FinalizationRegistry(E=>x.delete(E)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,S){return p?new OffscreenCanvas(E,S):va("canvas")}function v(E,S,z){let se=1,ne=Oe(E);if((ne.width>z||ne.height>z)&&(se=z/Math.max(ne.width,ne.height)),se<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let fe=Math.floor(se*ne.width),ge=Math.floor(se*ne.height);d===void 0&&(d=m(fe,ge));let V=S?m(fe,ge):d;return V.width=fe,V.height=ge,V.getContext("2d").drawImage(E,0,0,fe,ge),Be("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+fe+"x"+ge+")."),V}else return"data"in E&&Be("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),E;return E}function A(E){return E.generateMipmaps}function y(E){r.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(E,S,z,se,ne,fe=!1){if(E!==null){if(r[E]!==void 0)return r[E];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ge;se&&(ge=e.get("EXT_texture_norm16"),ge||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=S;if(S===r.RED&&(z===r.FLOAT&&(V=r.R32F),z===r.HALF_FLOAT&&(V=r.R16F),z===r.UNSIGNED_BYTE&&(V=r.R8),z===r.UNSIGNED_SHORT&&ge&&(V=ge.R16_EXT),z===r.SHORT&&ge&&(V=ge.R16_SNORM_EXT)),S===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(V=r.R8UI),z===r.UNSIGNED_SHORT&&(V=r.R16UI),z===r.UNSIGNED_INT&&(V=r.R32UI),z===r.BYTE&&(V=r.R8I),z===r.SHORT&&(V=r.R16I),z===r.INT&&(V=r.R32I)),S===r.RG&&(z===r.FLOAT&&(V=r.RG32F),z===r.HALF_FLOAT&&(V=r.RG16F),z===r.UNSIGNED_BYTE&&(V=r.RG8),z===r.UNSIGNED_SHORT&&ge&&(V=ge.RG16_EXT),z===r.SHORT&&ge&&(V=ge.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(V=r.RG8UI),z===r.UNSIGNED_SHORT&&(V=r.RG16UI),z===r.UNSIGNED_INT&&(V=r.RG32UI),z===r.BYTE&&(V=r.RG8I),z===r.SHORT&&(V=r.RG16I),z===r.INT&&(V=r.RG32I)),S===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(V=r.RGB8UI),z===r.UNSIGNED_SHORT&&(V=r.RGB16UI),z===r.UNSIGNED_INT&&(V=r.RGB32UI),z===r.BYTE&&(V=r.RGB8I),z===r.SHORT&&(V=r.RGB16I),z===r.INT&&(V=r.RGB32I)),S===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(V=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(V=r.RGBA16UI),z===r.UNSIGNED_INT&&(V=r.RGBA32UI),z===r.BYTE&&(V=r.RGBA8I),z===r.SHORT&&(V=r.RGBA16I),z===r.INT&&(V=r.RGBA32I)),S===r.RGB&&(z===r.UNSIGNED_SHORT&&ge&&(V=ge.RGB16_EXT),z===r.SHORT&&ge&&(V=ge.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(V=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(V=r.R11F_G11F_B10F)),S===r.RGBA){let Q=fe?To:tt.getTransfer(ne);z===r.FLOAT&&(V=r.RGBA32F),z===r.HALF_FLOAT&&(V=r.RGBA16F),z===r.UNSIGNED_BYTE&&(V=Q===mt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&ge&&(V=ge.RGBA16_EXT),z===r.SHORT&&ge&&(V=ge.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(V=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(V=r.RGB5_A1)}return(V===r.R16F||V===r.R32F||V===r.RG16F||V===r.RG32F||V===r.RGBA16F||V===r.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function g(E,S){let z;return E?S===null||S===Pn||S===Ps?z=r.DEPTH24_STENCIL8:S===vn?z=r.DEPTH32F_STENCIL8:S===Ia&&(z=r.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pn||S===Ps?z=r.DEPTH_COMPONENT24:S===vn?z=r.DEPTH_COMPONENT32F:S===Ia&&(z=r.DEPTH_COMPONENT16),z}function M(E,S){return A(E)===!0||E.isFramebufferTexture&&E.minFilter!==fi&&E.minFilter!==ki?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function P(E){let S=new WeakRef(E);i.get(E).__ref=S,x.add(S),_.register(E,S,S)}function C(E){let S=i.get(E).__ref;S!==void 0&&(x.delete(S),_.unregister(S))}function N(E){G(E.target)}function D(E){I(E.target)}function G(E){E.removeEventListener("dispose",N),C(E),H(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function I(E){E.removeEventListener("dispose",D),C(E),te(E)}function B(){for(let E of x){let S=E.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):G(S))}x.clear(),h.clear()}function H(E){let S=i.get(E);if(S.__webglInit===void 0)return;let z=E.source,se=c.get(z);if(se){let ne=se[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(E),Object.keys(se).length===0&&c.delete(z)}i.remove(E)}function O(E){let S=i.get(E);r.deleteTexture(S.__webglTexture);let z=E.source,se=c.get(z);delete se[S.__cacheKey],a.memory.textures--}function te(E){let S=i.get(E);S.__depthDisposeCallback&&S.__depthDisposeCallback();let z=E.depthTexture;if(z&&z.renderTarget===E&&G(z),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let fe=0;fe<S.__webglFramebuffer[ne].length;fe++)r.deleteFramebuffer(S.__webglFramebuffer[ne][fe]);else r.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)r.deleteFramebuffer(S.__webglFramebuffer[ne]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let se=E.textures;for(let ne=0,fe=se.length;ne<fe;ne++){let ge=i.get(se[ne]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(se[ne])}i.remove(E)}let W=0;function R(){W=0}function ie(){return W}function Se(E){W=E}function Ue(){let E=W;return E>=n.maxTextures&&Be("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,E}function J(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.mipmapsAutoUpdate),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function ue(E,S){let z=i.get(E);if(E.isVideoTexture&&ut(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){let se=E.image;if(se===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{at(z,E,S);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+S)}function ye(E,S){let z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){at(z,E,S);return}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+S)}function be(E,S){let z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){at(z,E,S);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+S)}function me(E,S){let z=i.get(E);if(E.version>0&&z.__version!==E.version){Z(z,E,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+S)}let De={[Pf]:r.REPEAT,[Gn]:r.CLAMP_TO_EDGE,[If]:r.MIRRORED_REPEAT},gt={[fi]:r.NEAREST,[qg]:r.NEAREST_MIPMAP_NEAREST,[Zo]:r.NEAREST_MIPMAP_LINEAR,[ki]:r.LINEAR,[iu]:r.LINEAR_MIPMAP_NEAREST,[_r]:r.LINEAR_MIPMAP_LINEAR},Ae={[Kg]:r.NEVER,[vh]:r.ALWAYS,[$g]:r.LESS,[xh]:r.LEQUAL,[Qg]:r.EQUAL,[_h]:r.GEQUAL,[jg]:r.GREATER,[ex]:r.NOTEQUAL};function Ve(E,S){if(S.type===vn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ki||S.magFilter===iu||S.magFilter===Zo||S.magFilter===_r||S.minFilter===ki||S.minFilter===iu||S.minFilter===Zo||S.minFilter===_r)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,De[S.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,De[S.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,De[S.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,gt[S.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,gt[S.minFilter]),S.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,Ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fi||S.minFilter!==Zo&&S.minFilter!==_r||S.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ie(E,S){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",N),P(S));let se=S.source,ne=c.get(se);ne===void 0&&(ne={},c.set(se,ne));let fe=J(S);if(fe!==E.__cacheKey){ne[fe]===void 0&&(ne[fe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[fe].usedTimes++;let ge=ne[E.__cacheKey];ge!==void 0&&(ne[E.__cacheKey].usedTimes--,ge.usedTimes===0&&O(S)),E.__cacheKey=fe,E.__webglTexture=ne[fe].texture}return z}function Fe(E,S,z){return Math.floor(Math.floor(E/z)/S)}function ft(E,S,z,se){let fe=E.updateRanges;if(fe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,z,se,S.data);else{fe.sort((L,$)=>L.start-$.start);let ge=0;for(let L=1;L<fe.length;L++){let $=fe[ge],K=fe[L],de=$.start+$.count,oe=Fe(K.start,S.width,4),he=Fe($.start,S.width,4);K.start<=de+1&&oe===he&&Fe(K.start+K.count-1,S.width,4)===oe?$.count=Math.max($.count,K.start+K.count-$.start):(++ge,fe[ge]=K)}fe.length=ge+1;let V=t.getParameter(r.UNPACK_ROW_LENGTH),Q=t.getParameter(r.UNPACK_SKIP_PIXELS),le=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let L=0,$=fe.length;L<$;L++){let K=fe[L],de=Math.floor(K.start/4),oe=Math.ceil(K.count/4),he=de%S.width,ae=Math.floor(de/S.width),pe=oe,re=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,he),t.pixelStorei(r.UNPACK_SKIP_ROWS,ae),t.texSubImage2D(r.TEXTURE_2D,0,he,ae,pe,re,z,se,S.data)}E.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,V),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(r.UNPACK_SKIP_ROWS,le)}}function at(E,S,z){let se=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=r.TEXTURE_3D);let ne=Ie(E,S),fe=S.source;t.bindTexture(se,E.__webglTexture,r.TEXTURE0+z);let ge=i.get(fe);if(fe.version!==ge.__version||ne===!0){if(t.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let re=tt.getPrimaries(tt.workingColorSpace),j=S.colorSpace===yr?null:tt.getPrimaries(S.colorSpace),xe=S.colorSpace===yr||re===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=v(S.image,!1,n.maxTextureSize);Q=Le(S,Q);let le=s.convert(S.format,S.colorSpace),L=s.convert(S.type),$=w(S.internalFormat,le,L,S.normalized,S.colorSpace,S.isVideoTexture);Ve(se,S);let K,de=S.mipmaps,oe=S.isVideoTexture!==!0,he=ge.__version===void 0||ne===!0,ae=fe.dataReady,pe=M(S,Q);if(S.isDepthTexture)$=g(S.format===vr,S.type),he&&(oe?t.texStorage2D(r.TEXTURE_2D,1,$,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,$,Q.width,Q.height,0,le,L,null));else if(S.isDataTexture)if(de.length>0){oe&&he&&t.texStorage2D(r.TEXTURE_2D,pe,$,de[0].width,de[0].height);for(let re=0,j=de.length;re<j;re++)K=de[re],oe?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,K.width,K.height,le,L,K.data):t.texImage2D(r.TEXTURE_2D,re,$,K.width,K.height,0,le,L,K.data);S.generateMipmaps=!1}else oe?(he&&t.texStorage2D(r.TEXTURE_2D,pe,$,Q.width,Q.height),ae&&ft(S,Q,le,L)):t.texImage2D(r.TEXTURE_2D,0,$,Q.width,Q.height,0,le,L,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){oe&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,$,de[0].width,de[0].height,Q.depth);for(let re=0,j=de.length;re<j;re++)if(K=de[re],S.format!==Ln)if(le!==null)if(oe){if(ae)if(S.layerUpdates.size>0){let xe=Ah(K.width,K.height,S.format,S.type);for(let ee of S.layerUpdates){let we=K.data.subarray(ee*xe/K.data.BYTES_PER_ELEMENT,(ee+1)*xe/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ee,K.width,K.height,1,le,we)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,Q.depth,le,K.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,$,K.width,K.height,Q.depth,0,K.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,Q.depth,le,L,K.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,$,K.width,K.height,Q.depth,0,le,L,K.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{oe&&he&&t.texStorage2D(r.TEXTURE_2D,pe,$,de[0].width,de[0].height);for(let re=0,j=de.length;re<j;re++)K=de[re],S.format!==Ln?le!==null?oe?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,K.width,K.height,le,K.data):t.compressedTexImage2D(r.TEXTURE_2D,re,$,K.width,K.height,0,K.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,K.width,K.height,le,L,K.data):t.texImage2D(r.TEXTURE_2D,re,$,K.width,K.height,0,le,L,K.data)}else if(S.isDataArrayTexture)if(oe){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,$,Q.width,Q.height,Q.depth),ae)if(S.layerUpdates.size>0){let re=Ah(Q.width,Q.height,S.format,S.type);for(let j of S.layerUpdates){let xe=Q.data.subarray(j*re/Q.data.BYTES_PER_ELEMENT,(j+1)*re/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,le,L,xe)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,L,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,$,Q.width,Q.height,Q.depth,0,le,L,Q.data);else if(S.isData3DTexture)oe?(he&&t.texStorage3D(r.TEXTURE_3D,pe,$,Q.width,Q.height,Q.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,L,Q.data)):t.texImage3D(r.TEXTURE_3D,0,$,Q.width,Q.height,Q.depth,0,le,L,Q.data);else if(S.isFramebufferTexture){if(he)if(oe)t.texStorage2D(r.TEXTURE_2D,pe,$,Q.width,Q.height);else{let re=Q.width,j=Q.height;for(let xe=0;xe<pe;xe++)t.texImage2D(r.TEXTURE_2D,xe,$,re,j,0,le,L,null),re>>=1,j>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let re=r.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Q.parentNode!==re){re.appendChild(Q),h.add(S),re.onpaint=j=>{let xe=j.changedElements;for(let ee of h)xe.includes(ee.image)&&(ee.needsUpdate=!0)},re.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Q);else{let xe=r.RGBA,ee=r.RGBA,we=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xe,ee,we,Q)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(de.length>0){if(oe&&he){let re=Oe(de[0]);t.texStorage2D(r.TEXTURE_2D,pe,$,re.width,re.height)}for(let re=0,j=de.length;re<j;re++)K=de[re],oe?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,le,L,K):t.texImage2D(r.TEXTURE_2D,re,$,le,L,K);S.generateMipmaps=!1}else if(oe){if(he){let re=Oe(Q);t.texStorage2D(r.TEXTURE_2D,pe,$,re.width,re.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,L,Q)}else t.texImage2D(r.TEXTURE_2D,0,$,le,L,Q);A(S)&&S.mipmapsAutoUpdate===!0&&y(se),ge.__version=fe.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Z(E,S,z){if(S.image.length!==6)return;let se=Ie(E,S),ne=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+z);let fe=i.get(ne);if(ne.version!==fe.__version||se===!0){t.activeTexture(r.TEXTURE0+z);let ge=tt.getPrimaries(tt.workingColorSpace),V=S.colorSpace===yr?null:tt.getPrimaries(S.colorSpace),Q=S.colorSpace===yr||ge===V?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let le=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,$=[];for(let ee=0;ee<6;ee++)!le&&!L?$[ee]=v(S.image[ee],!0,n.maxCubemapSize):$[ee]=L?S.image[ee].image:S.image[ee],$[ee]=Le(S,$[ee]);let K=$[0],de=s.convert(S.format,S.colorSpace),oe=s.convert(S.type),he=w(S.internalFormat,de,oe,S.normalized,S.colorSpace),ae=S.isVideoTexture!==!0,pe=fe.__version===void 0||se===!0,re=ne.dataReady,j=M(S,K);Ve(r.TEXTURE_CUBE_MAP,S);let xe;if(S.isDepthTexture){if(he=g(S.format===vr,S.type),pe)if(ae)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,he,K.width,K.height);else for(let ee=0;ee<6;ee++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,he,K.width,K.height,0,de,oe,null)}else if(le){ae&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,j,he,K.width,K.height);for(let ee=0;ee<6;ee++){xe=$[ee].mipmaps;for(let we=0;we<xe.length;we++){let $e=xe[we];S.format!==Ln?de!==null?ae?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,$e.width,$e.height,de,$e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,he,$e.width,$e.height,0,$e.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,$e.width,$e.height,de,oe,$e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,he,$e.width,$e.height,0,de,oe,$e.data)}}}else{if(xe=S.mipmaps,ae&&pe){xe.length>0&&j++;let ee=Oe($[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,j,he,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(L){ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,$[ee].width,$[ee].height,de,oe,$[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,he,$[ee].width,$[ee].height,0,de,oe,$[ee].data);for(let we=0;we<xe.length;we++){let He=xe[we].image[ee].image;ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,He.width,He.height,de,oe,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,he,He.width,He.height,0,de,oe,He.data)}}else{ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de,oe,$[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,he,de,oe,$[ee]);for(let we=0;we<xe.length;we++){let $e=xe[we];ae?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,de,oe,$e.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,he,de,oe,$e.image[ee])}}}A(S)&&S.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),fe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Ke(E,S,z,se,ne,fe){let ge=s.convert(z.format,z.colorSpace),V=s.convert(z.type),Q=w(z.internalFormat,ge,V,z.normalized,z.colorSpace),le=i.get(S),L=i.get(z);if(L.__renderTarget=S,!le.__hasExternalTextures){let $=Math.max(1,S.width>>fe),K=Math.max(1,S.height>>fe);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,fe,Q,$,K,S.depth,0,ge,V,null):t.texImage2D(ne,fe,Q,$,K,0,ge,V,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),ce(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ne,L.__webglTexture,0,ze(S)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ne,L.__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(E,S,z){if(r.bindRenderbuffer(r.RENDERBUFFER,E),S.depthBuffer){let se=S.depthTexture,ne=se&&se.isDepthTexture?se.type:null,fe=g(S.stencilBuffer,ne),ge=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ce(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ze(S),fe,S.width,S.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ze(S),fe,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,fe,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,E)}else{let se=S.textures;for(let ne=0;ne<se.length;ne++){let fe=se[ne],ge=s.convert(fe.format,fe.colorSpace),V=s.convert(fe.type),Q=w(fe.internalFormat,ge,V,fe.normalized,fe.colorSpace);ce(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ze(S),Q,S.width,S.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ze(S),Q,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Q,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(E,S,z){let se=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(S.depthTexture);ne.__renderTarget=S;let fe=se?S.depthTexture.image[0]:S.depthTexture.image;(!ne.__webglTexture||fe.width!==S.width||fe.height!==S.height)&&(fe.width=S.width,fe.height=S.height,S.depthTexture.needsUpdate=!0),se?me(S.depthTexture,0):ue(S.depthTexture,0);let ge=ne.__webglTexture,V=ze(S),Q=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,le=S.depthTexture.format===vr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===mr)ce(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,Q,ge,0,V):r.framebufferTexture2D(r.FRAMEBUFFER,le,Q,ge,0);else if(S.depthTexture.format===vr)ce(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,Q,ge,0,V):r.framebufferTexture2D(r.FRAMEBUFFER,le,Q,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(E){let S=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){let se=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){let ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",ne)};se.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=se}if(E.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let se=0;se<6;se++)vt(S.__webglFramebuffer[se],E,se);else E.texture.mipmaps.length>0?vt(S.__webglFramebuffer[0],E,0):vt(S.__webglFramebuffer,E,0);else if(z){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=r.createRenderbuffer(),Wt(S.__webglDepthbuffer[se],E,!1);else{let ne=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=S.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,fe)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Wt(S.__webglDepthbuffer,E,!1);else{let ne=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,fe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(E,S,z){let se=i.get(E);S!==void 0&&Ke(se.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&nt(E)}function Gt(E){let S=E.texture,z=i.get(E),se=i.get(S);E.addEventListener("dispose",D),P(E);let ne=E.textures,fe=E.isWebGLCubeRenderTarget===!0,ge=ne.length>1;if(ge||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=S.version,a.memory.textures++),fe){z.__webglFramebuffer=[];for(let V=0;V<6;V++)if(S.mipmaps.length>0){z.__webglFramebuffer[V]=[];for(let Q=0;Q<S.mipmaps.length;Q++)z.__webglFramebuffer[V][Q]=r.createFramebuffer()}else z.__webglFramebuffer[V]=r.createFramebuffer()}else{if(S.mipmaps.length>0){z.__webglFramebuffer=[];for(let V=0;V<S.mipmaps.length;V++)z.__webglFramebuffer[V]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ge)for(let V=0,Q=ne.length;V<Q;V++){let le=i.get(ne[V]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),a.memory.textures++)}if(E.samples>0&&ce(E)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let V=0;V<ne.length;V++){let Q=ne[V];z.__webglColorRenderbuffer[V]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[V]);let le=s.convert(Q.format,Q.colorSpace),L=s.convert(Q.type),$=w(Q.internalFormat,le,L,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),K=ze(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,$,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,z.__webglColorRenderbuffer[V])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Wt(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),Ve(r.TEXTURE_CUBE_MAP,S);for(let V=0;V<6;V++)if(S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)Ke(z.__webglFramebuffer[V][Q],E,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q);else Ke(z.__webglFramebuffer[V],E,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);A(S)?y(r.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let V=0,Q=ne.length;V<Q;V++){let le=ne[V],L=i.get(le),$=r.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture($,L.__webglTexture),Ve($,le),Ke(z.__webglFramebuffer,E,le,r.COLOR_ATTACHMENT0+V,$,0),A(le)&&y($)}t.unbindTexture()}else{let V=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(V=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(V,se.__webglTexture),Ve(V,S),S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)Ke(z.__webglFramebuffer[Q],E,S,r.COLOR_ATTACHMENT0,V,Q);else Ke(z.__webglFramebuffer,E,S,r.COLOR_ATTACHMENT0,V,0);A(S)?y(V):S.mipmaps.length>0&&r.texParameteri(V,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&nt(E)}function U(E){let S=E.textures;for(let z=0,se=S.length;z<se;z++){let ne=S[z];if(A(ne)&&ne.mipmapsAutoUpdate===!0){let fe=T(E),ge=i.get(ne).__webglTexture;t.bindTexture(fe,ge),y(fe),t.unbindTexture()}}}let ct=[];function ot(E){if(E.samples>0){if(ce(E)===!1){let S=E.textures,z=E.width,se=E.height,ne=r.COLOR_BUFFER_BIT,fe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=i.get(E),V=S.length>1;if(V)for(let le=0;le<S.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let le=0;le<S.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),V){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[le]);let L=i.get(S[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,L,0)}r.blitFramebuffer(0,0,z,se,0,0,z,se,ne,r.NEAREST),l===!0&&(ct.length=0,ct.push(r.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&ct.push(fe),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),V)for(let le=0;le<S.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,ge.__webglColorRenderbuffer[le]);let L=i.get(S[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,L,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let S=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function ze(E){return Math.min(n.maxSamples,E.samples)}function ce(E){let S=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ut(E){let S=a.render.frame;u.get(E)!==S&&(u.set(E,S),E.update())}function Le(E,S){let z=E.colorSpace,se=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==wo&&z!==yr&&(tt.getTransfer(z)===mt?(se!==Ln||ne!==Zi)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",z)),S}function Oe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(f.width=E.naturalWidth||E.width,f.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(f.width=E.displayWidth,f.height=E.displayHeight):(f.width=E.width,f.height=E.height),f}this.allocateTextureUnit=Ue,this.resetTextureUnits=R,this.getTextureUnits=ie,this.setTextureUnits=Se,this.setTexture2D=ue,this.setTexture2DArray=ye,this.setTexture3D=be,this.setTextureCube=me,this.rebindTextures=Ft,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=ce,this.dispose=B}function cw(r,e){function t(i,n=yr){let s,a=tt.getTransfer(n);if(i===Zi)return r.UNSIGNED_BYTE;if(i===ru)return r.UNSIGNED_SHORT_4_4_4_4;if(i===su)return r.UNSIGNED_SHORT_5_5_5_1;if(i===hh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===ph)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===ch)return r.BYTE;if(i===dh)return r.SHORT;if(i===Ia)return r.UNSIGNED_SHORT;if(i===nu)return r.INT;if(i===Pn)return r.UNSIGNED_INT;if(i===vn)return r.FLOAT;if(i===In)return r.HALF_FLOAT;if(i===mh)return r.ALPHA;if(i===gh)return r.RGB;if(i===Ln)return r.RGBA;if(i===mr)return r.DEPTH_COMPONENT;if(i===vr)return r.DEPTH_STENCIL;if(i===au)return r.RED;if(i===ou)return r.RED_INTEGER;if(i===$r)return r.RG;if(i===lu)return r.RG_INTEGER;if(i===fu)return r.RGBA_INTEGER;if(i===Jo||i===Ko||i===$o||i===Qo)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uu||i===cu||i===du||i===hu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===uu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===du)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pu||i===mu||i===gu||i===xu||i===_u||i===jo||i===vu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pu||i===mu)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===xu)return s.COMPRESSED_R11_EAC;if(i===_u)return s.COMPRESSED_SIGNED_R11_EAC;if(i===jo)return s.COMPRESSED_RG11_EAC;if(i===vu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yu||i===Su||i===Mu||i===bu||i===wu||i===Tu||i===Au||i===Eu||i===Cu||i===Ru||i===Pu||i===Iu||i===Lu||i===Du)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Su)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Au)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Eu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ru)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Iu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Du)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nu||i===Fu||i===Uu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nu)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ou||i===Bu||i===el||i===ku)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ou)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===el)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ku)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}var dw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Uo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Xn({vertexShader:dw,fragmentShader:hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new Bo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gh=class extends Vn{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,f=null,u=null,h=null,d=null,c=null,x=null,_=typeof XRWebGLBinding<"u",p=new zh,m={},v=t.getContextAttributes(),A=null,y=null,T=[],w=[],g=new Qe,M=null,P=null,C=new Ci;C.viewport=new Pt;let N=new Ci;N.viewport=new Pt;let D=[C,N],G=new Qf,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=T[J];return ue===void 0&&(ue=new Ma,T[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=T[J];return ue===void 0&&(ue=new Ma,T[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=T[J];return ue===void 0&&(ue=new Ma,T[J]=ue),ue.getHandSpace()};function H(J){let ue=w.indexOf(J.inputSource);if(ue===-1)return;let ye=T[ue];ye!==void 0&&(ye.update(J.inputSource,J.frame,f||a),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",te);for(let J=0;J<T.length;J++){let ue=w[J];ue!==null&&(w[J]=null,T[J].disconnect(ue))}I=null,B=null,p.reset();for(let J in m)delete m[J];if(e.setRenderTarget(A),c=null,d=null,h=null,n=null,y=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(g.width,g.height,!1),P!==null){let J=P.camera;J.fov=P.fov,J.zoom=P.zoom,J.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(J){f=J},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(A=e.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",O),n.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(g),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,be=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?vr:mr,be=v.stencil?Ps:Pn);let De={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(De),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ln(d.textureWidth,d.textureHeight,{format:Ln,type:Zi,depthTexture:new xr(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};c=new XRWebGLLayer(n,t,ye),n.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),y=new ln(c.framebufferWidth,c.framebufferHeight,{format:Ln,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),f=null,a=await n.requestReferenceSpace(o),Ue.setContext(n),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(J){for(let ue=0;ue<J.removed.length;ue++){let ye=J.removed[ue],be=w.indexOf(ye);be>=0&&(w[be]=null,T[be].disconnect(ye))}for(let ue=0;ue<J.added.length;ue++){let ye=J.added[ue],be=w.indexOf(ye);if(be===-1){for(let De=0;De<T.length;De++)if(De>=w.length){w.push(ye),be=De;break}else if(w[De]===null){w[De]=ye,be=De;break}if(be===-1)break}let me=T[be];me&&me.connect(ye)}}function W(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let ue=J.near,ye=J.far;p.texture!==null&&(p.depthNear>0&&(ue=p.depthNear),p.depthFar>0&&(ye=p.depthFar)),G.near=N.near=C.near=ue,G.far=N.far=C.far=ye,(I!==G.near||B!==G.far)&&(n.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,B=G.far),G.layers.mask=J.layers.mask|6,C.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;let be=J.parent,me=G.cameras;W(G,be);for(let De=0;De<me.length;De++)W(me[De],be);G.projectionMatrix.copy(C.projectionMatrix),G.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&J.isPerspectiveCamera&&(P={camera:J,fov:J.fov,zoom:J.zoom}),R(J,G,be)};function R(J,ue,ye){ye===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Df*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&c===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(J){return m[J]};let ie=null;function Se(J,ue){if(u=ue.getViewerPose(f||a),x=ue,u!==null){let ye=u.views;c!==null&&(e.setRenderTargetFramebuffer(y,c.framebuffer),e.setRenderTarget(y));let be=!1;ye.length!==G.cameras.length&&(G.cameras.length=0,be=!0);for(let Ae=0;Ae<ye.length;Ae++){let Ve=ye[Ae],Ie=null;if(c!==null)Ie=c.getViewport(Ve);else{let ft=h.getViewSubImage(d,Ve);Ie=ft.viewport,Ae===0&&(e.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(y))}let Fe=D[Ae];Fe===void 0&&(Fe=new Ci,Fe.layers.enable(Ae),Fe.viewport=new Pt,D[Ae]=Fe),Fe.matrix.fromArray(Ve.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ve.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Ae===0&&(G.matrix.copy(Fe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),be===!0&&G.cameras.push(Fe)}let me=n.enabledFeatures;if(me&&me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){h=i.getBinding();let Ae=h.getDepthInformation(ye[0]);Ae&&Ae.isValid&&Ae.texture&&p.init(Ae,n.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let Ae=0;Ae<ye.length;Ae++){let Ve=ye[Ae].camera;if(Ve){let Ie=m[Ve];Ie||(Ie=new Uo,m[Ve]=Ie);let Fe=h.getCameraImage(Ve);Ie.sourceTexture=Fe}}}}for(let ye=0;ye<T.length;ye++){let be=w[ye],me=T[ye];be!==null&&me!==void 0&&me.update(be,ue,f||a)}ie&&ie(J,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),x=null}let Ue=new Lx;Ue.setAnimationLoop(Se),this.setAnimationLoop=function(J){ie=J},this.dispose=function(){}}},pw=new wt,Vx=new Ge;Vx.set(-1,0,0,0,1,0,0,0,1);function mw(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,bh(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,v,A,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&c(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),x(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,A):m.isSpriteMaterial?f(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Gi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Gi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),A=v.envMap,y=v.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(pw.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Vx),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function f(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function c(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function gw(r,e,t,i){let n={},s={};function a(v,A){let y=A.program;i.uniformBlockBinding(v,y,n[v.id])}function o(v,A){let y=n[v.id];y===void 0&&(x(v),y=l(v),n[v.id]=y,v.addEventListener("dispose",p));let T=A.program;i.updateUBOMapping(v,T);let w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function l(v){let A=r.createBuffer(),y=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),A}function f(v){let A=n[v.id],y=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let w=0,g=y.length;w<g;w++){let M=y[w];if(Array.isArray(M))for(let P=0,C=M.length;P<C;P++)u(M[P],w,P,T);else u(M,w,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(v,A,y,T){if(d(v,A,y,T)===!0){let w=v.__offset,g=v.value;if(Array.isArray(g)){let M=0;for(let P=0;P<g.length;P++){let C=g[P],N=_(C,!0);h(C,v.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else h(g,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,v.__data)}}function h(v,A,y){typeof v=="number"||typeof v=="boolean"?A[y]=v:v.isMatrix3?(A[y]=v.elements[0],A[y+1]=v.elements[1],A[y+2]=v.elements[2],A[y+3]=0,A[y+4]=v.elements[3],A[y+5]=v.elements[4],A[y+6]=v.elements[5],A[y+7]=0,A[y+8]=v.elements[6],A[y+9]=v.elements[7],A[y+10]=v.elements[8],A[y+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-y),y):v.toArray(A,y)}function d(v,A,y,T){let w=v.value,g=A+"_"+y;if(Array.isArray(w)){T[g]===void 0&&(T[g]=[]);let M=T[g],P=!1;for(let C=0;C<w.length;C++)c(w[C],M,C)===!0&&(P=!0);return P}return c(w,T,g)}function c(v,A,y){if(A[y]===void 0)return typeof v=="number"||typeof v=="boolean"?A[y]=v:ArrayBuffer.isView(v)?A[y]=v.slice():A[y]=v.clone(),!0;{let T=A[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return A[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function x(v){let A=v.uniforms,y=0,T=16;for(let g=0,M=A.length;g<M;g++){let P=Array.isArray(A[g])?A[g]:[A[g]];for(let C=0,N=P.length;C<N;C++){let D=P[C],G=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(A[g])||Array.isArray(D.value),B=y;for(let O=0,te=G.length;O<te;O++){let W=G[O],R=_(W,I),ie=y%T,Se=ie%R.boundary,Ue=ie+Se;y+=Se,Ue!==0&&T-Ue<R.storage&&(y+=T-Ue),O===0&&(B=y),y+=R.storage}let H=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new H((y-B)/Float32Array.BYTES_PER_ELEMENT),D.__offset=B}}let w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function _(v,A){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let A=v.target;A.removeEventListener("dispose",p),r.deleteBuffer(n[A.id]),delete n[A.id],delete s[A.id]}function m(){for(let v in n)r.deleteBuffer(n[v]);n={},s={}}return{bind:a,update:o,dispose:m}}var xw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function _w(){return Zn===null&&(Zn=new Io(xw,16,16,$r,In),Zn.name="DFG_LUT",Zn.minFilter=ki,Zn.magFilter=ki,Zn.wrapS=Gn,Zn.wrapT=Gn,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var Wu=class{constructor(e={}){let{canvas:t=ix(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:c=Zi}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let _=c,p=new Set([fu,lu,ou]),m=new Set([Zi,Pn,Ia,Ps,ru,su]),v=new Uint32Array(4),A=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,w=null,g=[],M=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,D=null,G=null,I=null,B=null;this._outputColorSpace=Ei;let H=0,O=0,te=null,W=-1,R=null,ie=new Pt,Se=new Pt,Ue=null,J=new it(0),ue=0,ye=t.width,be=t.height,me=1,De=null,gt=null,Ae=new Pt(0,0,ye,be),Ve=new Pt(0,0,ye,be),Ie=!1,Fe=new Xr,ft=new Bf,at=!1,Z=!1,Ke=new wt,Wt=new Y,vt=new Pt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function Gt(){return te===null?me:1}let U=i;function ct(b,F){return t.getContext(b,F)}let ot,ze,ce,ut,Le,Oe,E,S,z,se,ne,fe,ge,V,Q,le,L,$,K,de,oe,he,ae;try{let b={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ee,!1),U===null){let F="webgl2";if(U=ct(F,b),U===null)throw ct(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(b){throw t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ke("WebGLRenderer: "+b.message),b}function pe(){ot=new RM(U),ot.init(),oe=new cw(U,ot),ze=new _M(U,ot,e,oe),ce=new fw(U,ot),ze.reversedDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),G=U.createFramebuffer(),I=U.createFramebuffer(),B=U.createFramebuffer(),ut=new LM(U),Le=new Jb,Oe=new uw(U,ot,ce,Le,ze,oe,ut),E=new CM(C),S=new Nv(U),he=new gM(U,S),z=new PM(U,S,ut,he),se=new NM(U,z,S,he,ut),$=new DM(U,ze,Oe),Q=new vM(Le),ne=new Zb(C,E,ot,ze,he,Q),fe=new mw(C,Le),ge=new $b,V=new nw(ot),L=new mM(C,E,ce,se,x,l),le=new lw(C,se,ze),ae=new gw(U,ut,ze,ce),K=new xM(U,ot,ut),de=new IM(U,ot,ut),ut.programs=ne.programs,C.capabilities=ze,C.extensions=ot,C.properties=Le,C.renderLists=ge,C.shadowMap=le,C.state=ce,C.info=ut}_!==Zi&&(P=new UM(_,t.width,t.height,o,n,s));let re=new Gh(C,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=ot.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ot.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(b){b!==void 0&&(me=b,this.setSize(ye,be,!1))},this.getSize=function(b){return b.set(ye,be)},this.setSize=function(b,F,q=!0){if(re.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=b,be=F,t.width=Math.floor(b*me),t.height=Math.floor(F*me),q===!0&&(t.style.width=b+"px",t.style.height=F+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(ye*me,be*me).floor()},this.setDrawingBufferSize=function(b,F,q){ye=b,be=F,me=q,t.width=Math.floor(b*q),t.height=Math.floor(F*q),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(_===Zi){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(Ae)},this.setViewport=function(b,F,q,k){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,F,q,k),ce.viewport(ie.copy(Ae).multiplyScalar(Gt()).round())},this.getScissor=function(b){return b.copy(Ve)},this.setScissor=function(b,F,q,k){b.isVector4?Ve.set(b.x,b.y,b.z,b.w):Ve.set(b,F,q,k),ce.scissor(Se.copy(Ve).multiplyScalar(Gt()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(b){ce.setScissorTest(Ie=b)},this.setOpaqueSort=function(b){De=b},this.setTransparentSort=function(b){gt=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,q=!0){let k=0;if(b){let X=!1;if(te!==null){let ve=te.texture.format;X=p.has(ve)}if(X){let ve=te.texture.type,Ce=m.has(ve),_e=L.getClearColor(),Te=L.getClearAlpha(),Ne=_e.r,We=_e.g,je=_e.b;Ce?(v[0]=Ne,v[1]=We,v[2]=je,v[3]=Te,U.clearBufferuiv(U.COLOR,0,v)):(A[0]=Ne,A[1]=We,A[2]=je,A[3]=Te,U.clearBufferiv(U.COLOR,0,A))}else k|=U.COLOR_BUFFER_BIT}F&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),L.dispose(),ge.dispose(),V.dispose(),Oe.dispose(),Le.dispose(),E.dispose(),se.dispose(),z.dispose(),he.dispose(),ae.dispose(),ne.dispose(),re.dispose(),re.removeEventListener("sessionstart",yt),re.removeEventListener("sessionend",ht),Qt.stop()};function j(b){b.preventDefault(),Sh("WebGLRenderer: Context Lost."),N=!0}function xe(){Sh("WebGLRenderer: Context Restored."),N=!1;let b=ut.autoReset,F=le.enabled,q=le.autoUpdate,k=le.needsUpdate,X=le.type;pe(),ut.autoReset=b,le.enabled=F,le.autoUpdate=q,le.needsUpdate=k,le.type=X}function ee(b){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function we(b){let F=b.target;F.removeEventListener("dispose",we),$e(F)}function $e(b){He(b),Le.remove(b)}function He(b){let F=Le.get(b).programs;F!==void 0&&(F.forEach(function(q){ne.releaseProgram(q)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,q,k,X,ve){F===null&&(F=nt);let Ce=X.isMesh&&X.matrixWorld.determinantAffine()<0,_e=un(b,F,q,k,X);ce.setMaterial(k,Ce);let Te=q.index,Ne=1;if(k.wireframe===!0){if(Te=z.getWireframeAttribute(q),Te===void 0)return;Ne=2}let We=q.drawRange,je=q.attributes.position,Re=We.start*Ne,et=(We.start+We.count)*Ne;ve!==null&&(Re=Math.max(Re,ve.start*Ne),et=Math.min(et,(ve.start+ve.count)*Ne)),Te!==null?(Re=Math.max(Re,0),et=Math.min(et,Te.count)):je!=null&&(Re=Math.max(Re,0),et=Math.min(et,je.count));let Yt=et-Re;if(Yt<0||Yt===1/0)return;he.setup(X,k,_e,q,Te);let Tt,Mt=K;if(Te!==null&&(Tt=S.get(Te),Mt=de,Mt.setIndex(Tt)),X.isMesh)k.wireframe===!0?(ce.setLineWidth(k.wireframeLinewidth*Gt()),Mt.setMode(U.LINES)):Mt.setMode(U.TRIANGLES);else if(X.isLine){let gi=k.linewidth;gi===void 0&&(gi=1),ce.setLineWidth(gi*Gt()),X.isLineSegments?Mt.setMode(U.LINES):X.isLineLoop?Mt.setMode(U.LINE_LOOP):Mt.setMode(U.LINE_STRIP)}else X.isPoints?Mt.setMode(U.POINTS):X.isSprite&&Mt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let gi=X._multiDrawStarts,Pe=X._multiDrawCounts,Pi=X._multiDrawCount,dt=Te?S.get(Te).bytesPerElement:1,jr=Le.get(k).currentProgram.getUniforms();for(let xi=0;xi<Pi;xi++)jr.setValue(U,"_gl_DrawID",xi),Mt.render(gi[xi]/dt,Pe[xi])}else if(X.isInstancedMesh)Mt.renderInstances(Re,Yt,X.count);else if(q.isInstancedBufferGeometry){let gi=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pe=Math.min(q.instanceCount,gi);Mt.renderInstances(Re,Yt,Pe)}else Mt.render(Re,Yt)};function Et(b,F,q,k){D!==null&&b.isNodeMaterial&&D.setObject(k,b),at===!0&&Q.setState(b,q,!1),b.transparent===!0&&b.side===qn&&b.forceSinglePass===!1?(b.side=Gi,b.needsUpdate=!0,$i(b,F,k),b.side=Kr,b.needsUpdate=!0,$i(b,F,k),b.side=qn):$i(b,F,k)}this.compile=function(b,F,q=null){q===null&&(q=b),D!==null&&D.renderStart(b,F,q),w=V.get(q),w.init(F),M.push(w),q.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),b!==q&&b.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),Z=this.localClippingEnabled,at=Q.init(this.clippingPlanes,Z),at===!0&&Q.setGlobalState(this.clippingPlanes,F),D!==null&&le.render(w.state.shadowsArray,q,F);let k=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ve=X.material;if(ve)if(Array.isArray(ve))for(let Ce=0;Ce<ve.length;Ce++){let _e=ve[Ce];Et(_e,q,F,X),k.add(_e)}else Et(ve,q,F,X),k.add(ve)}),w=M.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(b,F,q=null){let k=this.compile(b,F,q);return new Promise(X=>{function ve(){if(k.forEach(function(Ce){let Te=Le.get(Ce).currentProgram;(Te===void 0||Te.isReady())&&k.delete(Ce)}),k.size===0){X(b);return}setTimeout(ve,10)}ot.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Xt=null;function Ct(b){Xt&&Xt(b)}function yt(){Qt.stop()}function ht(){Qt.start()}let Qt=new Lx;Qt.setAnimationLoop(Ct),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(b){Xt=b,re.setAnimationLoop(b),b===null?Qt.stop():Qt.start()},re.addEventListener("sessionstart",yt),re.addEventListener("sessionend",ht),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(b,F);let q=re.enabled===!0&&re.isPresenting===!0,k=P!==null&&(te===null||q)&&P.begin(C,te);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,F,te),w=V.get(b,M.length),w.init(F),w.state.textureUnits=Oe.getTextureUnits(),M.push(w),Ke.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ft.setFromArrayCamera(F):Fe.setFromProjectionMatrix(Ke,_n,F.reversedDepth),Z=this.localClippingEnabled,at=Q.init(this.clippingPlanes,Z),T=ge.get(b,g.length),T.init(),g.push(T),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&St(Ce,F,-1/0,C.sortObjects)}St(b,F,0,C.sortObjects),T.finish(),D!==null&&D.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(De,gt),Ft=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ft&&L.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),at===!0&&Q.beginShadows();let X=w.state.shadowsArray;if(le.render(X,b,F),at===!0&&Q.endShadows(),(k&&P.hasRenderPass())===!1){let Ce=T.opaque,_e=T.transmissive;if(w.setupLights(),F.isArrayCamera){let Te=F.cameras;if(_e.length>0)for(let Ne=0,We=Te.length;Ne<We;Ne++){let je=Te[Ne];Ki(Ce,_e,b,je)}Ft&&L.render(b);for(let Ne=0,We=Te.length;Ne<We;Ne++){let je=Te[Ne];mi(T,b,je,je.viewport)}}else _e.length>0&&Ki(Ce,_e,b,F),Ft&&L.render(b),mi(T,b,F)}te!==null&&O===0&&(Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te)),k&&P.end(C),b.isScene===!0&&b.onAfterRender(C,b,F),he.resetDefaultState(),W=-1,R=null,M.pop(),M.length>0?(w=M[M.length-1],Oe.setTextureUnits(w.state.textureUnits),at===!0&&Q.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,D!==null&&D.renderEnd()};function St(b,F,q,k){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Ce=F.isArrayCamera?ft:Fe;if(!b.frustumCulled||b.intersectsFrustum(Ce)){k&&vt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ke);let _e=se.update(b),Te=b.material;Te.visible&&T.push(b,_e,Te,q,vt.z,null,F)}}else if(b.isMesh||b.isLine||b.isPoints){let Ce=F.isArrayCamera?ft:Fe;if(!b.frustumCulled||b.intersectsFrustum(Ce)){let _e=se.update(b),Te=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),vt.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),vt.copy(_e.boundingSphere.center)),vt.applyMatrix4(b.matrixWorld).applyMatrix4(Ke)),Array.isArray(Te)){let Ne=_e.groups;for(let We=0,je=Ne.length;We<je;We++){let Re=Ne[We],et=Te[Re.materialIndex];et&&et.visible&&T.push(b,_e,et,q,vt.z,Re,F)}}else Te.visible&&T.push(b,_e,Te,q,vt.z,null,F)}}}let ve=b.children;for(let Ce=0,_e=ve.length;Ce<_e;Ce++)St(ve[Ce],F,q,k)}function mi(b,F,q,k){let{opaque:X,transmissive:ve,transparent:Ce}=b;w.setupLightsView(q),at===!0&&Q.setGlobalState(C.clippingPlanes,q),k&&ce.viewport(ie.copy(k)),X.length>0&&Ut(X,F,q),ve.length>0&&Ut(ve,F,q),Ce.length>0&&Ut(Ce,F,q),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Ki(b,F,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Re=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new ln(1,1,{generateMipmaps:!0,type:Re?In:Zi,minFilter:_r,samples:Math.max(4,ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let ve=w.state.transmissionRenderTarget[k.id],Ce=k.viewport||ie;ve.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let _e=C.getRenderTarget(),Te=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(ve),C.getClearColor(J),ue=C.getClearAlpha(),ue<1&&C.setClearColor(16777215,.5),C.clear(),Ft&&L.render(q);let We=C.toneMapping;C.toneMapping=Yn;let je=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),at===!0&&Q.setGlobalState(C.clippingPlanes,k),Ut(b,q,k),Oe.updateMultisampleRenderTarget(ve),Oe.updateRenderTargetMipmap(ve),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let et=0,Yt=F.length;et<Yt;et++){let Tt=F[et],{object:Mt,geometry:gi,material:Pe,group:Pi}=Tt;if(Pe.side===qn&&Mt.layers.test(k.layers)){let dt=Pe.side;Pe.side=Gi,Pe.needsUpdate=!0,qt(Mt,q,k,gi,Pe,Pi),Pe.side=dt,Pe.needsUpdate=!0,Re=!0}}Re===!0&&(Oe.updateMultisampleRenderTarget(ve),Oe.updateRenderTargetMipmap(ve))}C.setRenderTarget(_e,Te,Ne),C.setClearColor(J,ue),je!==void 0&&(k.viewport=je),C.toneMapping=We}function Ut(b,F,q){let k=F.isScene===!0?F.overrideMaterial:null;for(let X=0,ve=b.length;X<ve;X++){let Ce=b[X],{object:_e,geometry:Te,group:Ne}=Ce,We=Ce.material;We.allowOverride===!0&&k!==null&&(We=k),_e.layers.test(q.layers)&&qt(_e,F,q,Te,We,Ne)}}function qt(b,F,q,k,X,ve){D!==null&&X.isNodeMaterial&&D.setObject(b,X),b.onBeforeRender(C,F,q,k,X,ve),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(C,F,q,k,b,ve),X.transparent===!0&&X.side===qn&&X.forceSinglePass===!1?(X.side=Gi,X.needsUpdate=!0,C.renderBufferDirect(q,F,k,X,b,ve),X.side=Kr,X.needsUpdate=!0,C.renderBufferDirect(q,F,k,X,b,ve),X.side=qn):C.renderBufferDirect(q,F,k,X,b,ve),b.onAfterRender(C,F,q,k,X,ve)}function jt(b){let F=0;for(let q of b)q.texture!==null&&F++;return F}function $i(b,F,q){F.isScene!==!0&&(F=nt);let k=Le.get(b),X=w.state.lights,ve=w.state.shadowsArray,Ce=X.state.version,_e=ne.getParameters(b,X.state,ve,F,q,w.state.lightProbeGridArray),Te=ne.getProgramCacheKey(_e),Ne=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let We=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=E.get(b.envMap||k.environment,We),k.envMapRotation=k.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener("dispose",we),Ne=new Map,k.programs=Ne,k.programVariants=new Map);let je=Ne.get(Te);if(je!==void 0){if(k.currentProgram===je&&k.lightsStateVersion===Ce)return Ot(b,_e),je}else _e.uniforms=ne.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,q,_e),b.onBeforeCompile(_e,C),je=ne.acquireProgram(_e,Te),Ne.set(Te,je),k.uniforms=_e.uniforms;let Re=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=Q.uniform),Ot(b,_e),k.needsLights=al(b),k.lightsStateVersion=Ce,k.needsLights&&(Re.ambientLightColor.value=X.state.ambient,Re.lightProbe.value=X.state.probe,Re.sunLights.value=X.state.sun,Re.sunLightShadows.value=X.state.sunShadow,Re.directionalLights.value=X.state.directional,Re.directionalLightShadows.value=X.state.directionalShadow,Re.spotLights.value=X.state.spot,Re.spotLightShadows.value=X.state.spotShadow,Re.rectAreaLights.value=X.state.rectArea,Re.ltc_1.value=X.state.rectAreaLTC1,Re.ltc_2.value=X.state.rectAreaLTC2,Re.pointLights.value=X.state.point,Re.pointLightShadows.value=X.state.pointShadow,Re.hemisphereLights.value=X.state.hemi,Re.sunShadowMatrix.value=X.state.sunShadowMatrix,Re.sunShadowCascade.value=X.state.sunShadowCascade,Re.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Re.spotLightMatrix.value=X.state.spotLightMatrix,Re.spotLightMap.value=X.state.spotLightMap,Re.pointShadowMatrix.value=X.state.pointShadowMatrix),k.numLightProbeGrids=jt(w.state.lightProbeGridArray),k.currentProgram=je,k.uniformsList=null,je}function Ds(b,F,q,k,X){let ve=Le.get(b),Ce=ve.currentProgram.id+","+k+","+X,_e=ve.programVariants.get(Ce);return _e===void 0?(_e=$i(b,F,q),ve.programVariants.set(Ce,_e)):(ve.currentProgram=_e,ve.uniformsList=null,ve.outputColorSpace=k,ve.toneMapping=X),_e}function ei(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=La.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Ot(b,F){let q=Le.get(b);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function un(b,F,q,k,X){F.isScene!==!0&&(F=nt),Oe.resetTextureUnits();let ve=F.fog,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,_e=te===null?C.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:tt.workingColorSpace,Te=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ne=E.get(k.envMap||Ce,Te),We=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,Yt=!!q.morphAttributes.color,Tt=Yn;k.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Tt=C.toneMapping);let Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,gi=Mt!==void 0?Mt.length:0,Pe=Le.get(k),Pi=w.state.lights;if(at===!0&&(Z===!0||b!==R)){let It=b===R&&k.id===W;Q.setState(k,b,It)}let dt=!1,jr=!1;k.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==Pi.state.version||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Ne||k.fog===!0&&Pe.fog!==ve||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Q.numPlanes||Pe.numIntersection!==Q.numIntersection)||Pe.vertexAlphas!==We||Pe.vertexTangents!==je||Pe.morphTargets!==Re||Pe.morphNormals!==et||Pe.morphColors!==Yt||Pe.morphTargetsCount!==gi||Pe.numLightProbeGrids!==jt(w.state.lightProbeGridArray)?dt=!0:(Pe.outputColorSpace!==_e||Pe.toneMapping!==Tt)&&(jr=!0):(dt=!0,Pe.__version=k.version);let xi=Pe.currentProgram;(dt===!0||jr===!0)&&(xi=jr===!0?Ds(k,F,X,_e,Tt):$i(k,F,X),D&&k.isNodeMaterial&&D.onUpdateProgram(k,xi,Pe));let ol=!1,br=!1,es=!1,lt=xi.getUniforms(),ui=Pe.uniforms;if(ce.useProgram(xi.program)&&(ol=!0,br=!0,es=!0),k.id!==W&&(W=k.id,br=!0),ol||R!==b){ce.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),lt.setValue(U,"projectionMatrix",b.projectionMatrix),lt.setValue(U,"viewMatrix",b.matrixWorldInverse);let si=lt.map.cameraPosition;si!==void 0&&si.setValue(U,Wt.setFromMatrixPosition(b.matrixWorld)),ze.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,br=!0,es=!0)}if(Pe.needsLights&&(Pi.state.sunShadowMap.length>0&&lt.setValue(U,"sunShadowMap",Pi.state.sunShadowMap,Oe),Pi.state.directionalShadowMap.length>0&&lt.setValue(U,"directionalShadowMap",Pi.state.directionalShadowMap,Oe),Pi.state.spotShadowMap.length>0&&lt.setValue(U,"spotShadowMap",Pi.state.spotShadowMap,Oe),Pi.state.pointShadowMap.length>0&&lt.setValue(U,"pointShadowMap",Pi.state.pointShadowMap,Oe)),X.isSkinnedMesh){lt.setOptional(U,X,"bindMatrix"),lt.setOptional(U,X,"bindMatrixInverse");let It=X.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),lt.setValue(U,"boneTexture",It.boneTexture,Oe))}X.isBatchedMesh&&(lt.setOptional(U,X,"batchingTexture"),lt.setValue(U,"batchingTexture",X._matricesTexture,Oe),lt.setOptional(U,X,"batchingIdTexture"),lt.setValue(U,"batchingIdTexture",X._indirectTexture,Oe),lt.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&lt.setValue(U,"batchingColorTexture",X._colorsTexture,Oe));let Sn=q.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&$.update(X,q,xi),(br||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,lt.setValue(U,"receiveShadow",X.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(ui.envMapIntensity.value=F.environmentIntensity),ui.dfgLUT!==void 0&&(ui.dfgLUT.value=_w()),br){if(lt.setValue(U,"toneMappingExposure",C.toneMappingExposure),Pe.needsLights&&Ua(ui,es),ve&&k.fog===!0&&fe.refreshFogUniforms(ui,ve),fe.refreshMaterialUniforms(ui,k,me,be,w.state.transmissionRenderTarget[b.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){let It=y,si=0;for(let $n of w.state.lightProbeGridArray)$n.texture!==null&&(It.textures[si]=$n.texture,It.min[si]=$n.boundingBox.min,It.max[si]=$n.boundingBox.max,It.resolution[si]=$n.resolution,si++);for(let $n in It)It[$n].length=si;ui.probesSH.value=It.textures,ui.probesMin.value=It.min,ui.probesMax.value=It.max,ui.probesResolution.value=It.resolution}La.upload(U,ei(Pe),ui,Oe)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(La.upload(U,ei(Pe),ui,Oe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(U,"center",X.center),lt.setValue(U,"modelViewMatrix",X.modelViewMatrix),lt.setValue(U,"normalMatrix",X.normalMatrix),lt.setValue(U,"modelMatrix",X.matrixWorld),k.uniformsGroups!==void 0){let It=k.uniformsGroups;for(let si=0,$n=It.length;si<$n;si++){let Jh=It[si];ae.update(Jh,xi),ae.bind(Jh,xi)}}return xi}function Ua(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function al(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(b,F,q){let k=Le.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Le.get(b.texture).__webglTexture=F,Le.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let q=Le.get(b);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,q=0){te=b,H=F,O=q;let k=null,X=!1,ve=!1;if(b){let _e=Le.get(b);if(_e.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(U.FRAMEBUFFER,_e.__webglFramebuffer),ie.copy(b.viewport),Se.copy(b.scissor),Ue=b.scissorTest,ce.viewport(ie),ce.scissor(Se),ce.setScissorTest(Ue),W=-1;return}else if(_e.__webglFramebuffer===void 0)Oe.setupRenderTarget(b);else if(_e.__hasExternalTextures)Oe.rebindTextures(b,Le.get(b.texture).__webglTexture,Le.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let We=b.depthTexture;if(_e.__boundDepthTexture!==We){if(We!==null&&Le.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(b)}}let Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);let Ne=Le.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?k=Ne[F][q]:k=Ne[F],X=!0):b.samples>0&&Oe.useMultisampledRTT(b)===!1?k=Le.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[q]:k=Ne,ie.copy(b.viewport),Se.copy(b.scissor),Ue=b.scissorTest}else ie.copy(Ae).multiplyScalar(me).floor(),Se.copy(Ve).multiplyScalar(me).floor(),Ue=Ie;if(q!==0&&(k=G),ce.bindFramebuffer(U.FRAMEBUFFER,k)&&ce.drawBuffers(b,k),ce.viewport(ie),ce.scissor(Se),ce.setScissorTest(Ue),X){let _e=Le.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,q)}else if(ve){let _e=F;for(let Te=0;Te<b.textures.length;Te++){let Ne=Le.get(b.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,Ne.__webglTexture,q,_e)}}else if(b!==null&&q!==0){let _e=Le.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,q)}W=-1};function Mr(b){let F=Le.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=ze.textureFormatReadable(b.format),F.__typeReadable=ze.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,q,k,X,ve,Ce,_e=0){if(!(b&&b.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce],Array.isArray(Te)&&(Te=Te[0])),Te){ce.bindFramebuffer(U.FRAMEBUFFER,Te);try{let Ne=b.textures[_e],We=Ne.format,je=Ne.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);let Re=Mr(Ne);if(Re.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-k&&q>=0&&q<=b.height-X&&U.readPixels(F,q,k,X,oe.convert(We),oe.convert(je),ve)}finally{let Ne=te!==null?Le.get(te).__webglFramebuffer:null;ce.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(b,F,q,k,X,ve,Ce,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce],Array.isArray(Te)&&(Te=Te[0])),Te)if(F>=0&&F<=b.width-k&&q>=0&&q<=b.height-X){ce.bindFramebuffer(U.FRAMEBUFFER,Te);let Ne=b.textures[_e],We=Ne.format,je=Ne.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);let Re=Mr(Ne);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,et),U.bufferData(U.PIXEL_PACK_BUFFER,ve.byteLength,U.STREAM_READ),U.readPixels(F,q,k,X,oe.convert(We),oe.convert(je),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Yt=te!==null?Le.get(te).__webglFramebuffer:null;ce.bindFramebuffer(U.FRAMEBUFFER,Yt);let Tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await rx(U,Tt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,et),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ve),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(et),U.deleteSync(Tt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,q=0){let k=Math.pow(2,-q),X=Math.floor(b.image.width*k),ve=Math.floor(b.image.height*k),Ce=F!==null?F.x:0,_e=F!==null?F.y:0;Oe.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Ce,_e,X,ve),ce.unbindTexture()},this.copyTextureToTexture=function(b,F,q=null,k=null,X=0,ve=0){let Ce,_e,Te,Ne,We,je,Re,et,Yt,Tt=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(q!==null)Ce=q.max.x-q.min.x,_e=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,We=q.min.y,je=q.isBox3?q.min.z:0;else{let lt=Math.pow(2,-X);Ce=Math.floor(Tt.width*lt),_e=Math.floor(Tt.height*lt),b.isDataArrayTexture?Te=Tt.depth:b.isData3DTexture?Te=Math.floor(Tt.depth*lt):Te=1,Ne=0,We=0,je=0}k!==null?(Re=k.x,et=k.y,Yt=k.z):(Re=0,et=0,Yt=0);let Mt=oe.convert(F.format),gi=oe.convert(F.type),Pe;F.isData3DTexture?(Oe.setTexture3D(F,0),Pe=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Oe.setTexture2DArray(F,0),Pe=U.TEXTURE_2D_ARRAY):(Oe.setTexture2D(F,0),Pe=U.TEXTURE_2D),ce.activeTexture(U.TEXTURE0),ce.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),ce.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ce.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let Pi=ce.getParameter(U.UNPACK_ROW_LENGTH),dt=ce.getParameter(U.UNPACK_IMAGE_HEIGHT),jr=ce.getParameter(U.UNPACK_SKIP_PIXELS),xi=ce.getParameter(U.UNPACK_SKIP_ROWS),ol=ce.getParameter(U.UNPACK_SKIP_IMAGES);ce.pixelStorei(U.UNPACK_ROW_LENGTH,Tt.width),ce.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Tt.height),ce.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),ce.pixelStorei(U.UNPACK_SKIP_ROWS,We),ce.pixelStorei(U.UNPACK_SKIP_IMAGES,je);let br=b.isDataArrayTexture||b.isData3DTexture,es=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let lt=Le.get(b),ui=Le.get(F),Sn=Le.get(lt.__renderTarget),It=Le.get(ui.__renderTarget);ce.bindFramebuffer(U.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let si=0;si<Te;si++)br&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(b).__webglTexture,X,je+si),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(F).__webglTexture,ve,Yt+si)),U.blitFramebuffer(Ne,We,Ne+Ce,We+_e,Re,et,Re+Ce,et+_e,U.DEPTH_BUFFER_BIT,U.NEAREST);ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Le.has(b)){let lt=Le.get(b),ui=Le.get(F);ce.bindFramebuffer(U.READ_FRAMEBUFFER,I),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let Sn=0;Sn<Te;Sn++)br?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,lt.__webglTexture,X,je+Sn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,lt.__webglTexture,X),es?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ui.__webglTexture,ve,Yt+Sn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ui.__webglTexture,ve),X!==0?U.blitFramebuffer(Ne,We,Ne+Ce,We+_e,Re,et,Re+Ce,et+_e,U.COLOR_BUFFER_BIT,U.NEAREST):es?U.copyTexSubImage3D(Pe,ve,Re,et,Yt+Sn,Ne,We,Ce,_e):U.copyTexSubImage2D(Pe,ve,Re,et,Ne,We,Ce,_e);ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else es?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Pe,ve,Re,et,Yt,Ce,_e,Te,Mt,gi,Tt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,ve,Re,et,Yt,Ce,_e,Te,Mt,Tt.data):U.texSubImage3D(Pe,ve,Re,et,Yt,Ce,_e,Te,Mt,gi,Tt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ve,Re,et,Ce,_e,Mt,gi,Tt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ve,Re,et,Tt.width,Tt.height,Mt,Tt.data):U.texSubImage2D(U.TEXTURE_2D,ve,Re,et,Ce,_e,Mt,gi,Tt);ce.pixelStorei(U.UNPACK_ROW_LENGTH,Pi),ce.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt),ce.pixelStorei(U.UNPACK_SKIP_PIXELS,jr),ce.pixelStorei(U.UNPACK_SKIP_ROWS,xi),ce.pixelStorei(U.UNPACK_SKIP_IMAGES,ol),ve===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&U.generateMipmap(Pe),ce.unbindTexture()},this.initRenderTarget=function(b){Le.get(b).__webglFramebuffer===void 0&&Oe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Oe.setTextureCube(b,0):b.isData3DTexture?Oe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Oe.setTexture2DArray(b,0):Oe.setTexture2D(b,0),ce.unbindTexture()},this.resetState=function(){H=0,O=0,te=null,ce.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};yd({icons:{ArrowUpRight:dd,ArrowDown:cd,ArrowUp:hd,MoveDown:xd,MoveRight:_d,MessageSquare:md,MessagesSquare:gd,Zap:vd,Globe:pd},attrs:{"aria-hidden":"true"}});var Na=window.matchMedia("(prefers-reduced-motion: reduce)"),Ls=document.querySelector(".menu-toggle"),Ku=document.querySelector("#mobile-nav");function Zh(){Ls.setAttribute("aria-expanded","false"),Ls.setAttribute("aria-label","Open navigation"),Ku.hidden=!0}Ls.addEventListener("click",()=>{let r=Ls.getAttribute("aria-expanded")!=="true";Ls.setAttribute("aria-expanded",String(r)),Ls.setAttribute("aria-label",r?"Close navigation":"Open navigation"),Ku.hidden=!r});Ku.querySelectorAll("a").forEach(r=>r.addEventListener("click",Zh));document.addEventListener("keydown",r=>{r.key==="Escape"&&!Ku.hidden&&(Zh(),Ls.focus())});window.matchMedia("(min-width: 761px)").addEventListener("change",r=>{r.matches&&Zh()});On.registerPlugin(Je);var yw=On.matchMedia();yw.add("(prefers-reduced-motion: no-preference)",()=>{On.from(".hero h1 .line > span",{yPercent:108,duration:1.2,stagger:.12,ease:"power4.out",delay:.1}),On.from(".hero-reveal",{y:20,opacity:0,duration:1,stagger:.08,ease:"power3.out",delay:.4}),On.from(".hero-visual",{opacity:0,duration:1.4,delay:.25}),On.utils.toArray(".reveal").forEach(r=>On.from(r,{y:36,opacity:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 91%",once:!0}})),On.to(".hero-visual .orbit-lines",{rotation:10,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}})});document.fonts.ready.then(()=>Je.refresh());var Sr=document.querySelector("#hero-visual"),Hx=document.querySelector("#dragon-scene"),Kn,Qr,Fa,yn,Ju=0,Vh=!1,Wx=!0,Hh=0,Wh=0,Xh=0,qh=0,Yu=0,Zu=0,Ji=[];function Yh(){cancelAnimationFrame(Ju),Ji.forEach(r=>r.dispose?.()),Kn?.dispose(),Sr.classList.remove("webgl-ready")}try{let T=function(w){if(Vh)return;let g=Zu?Math.min((w-Zu)/1e3,.05):0;Zu=w,Wx&&!document.hidden&&(Yu+=g,Xh+=(Hh-Xh)*.035,qh+=(Wh-qh)*.035,yn.rotation.set(-.1+(Na.matches?0:Math.sin(Yu*.5)*.035+qh*.14),-.3+(Na.matches?0:Math.sin(Yu*.35)*.12+Xh*.35),-.14),yn.position.y=Na.matches?0:Math.sin(Yu*.8)*.075,Kn.render(Qr,Fa)),Na.matches||(Ju=requestAnimationFrame(T))};Kn=new Wu({canvas:Hx,alpha:!0,antialias:!0,powerPreference:"low-power"}),Kn.setPixelRatio(Math.min(window.devicePixelRatio,1.65)),Kn.setClearColor(0,0),Kn.outputColorSpace=Ei,Kn.toneMapping=Yo,Kn.toneMappingExposure=1.15,Qr=new Co,Fa=new Ci(34,1,.1,50),Fa.position.set(0,0,10.8),Qr.add(new Xo(16773072,2.1));let r=new Aa(16770982,7);r.position.set(-3,5,6),Qr.add(r);let e=new Aa(15331583,3);e.position.set(4,-2,3),Qr.add(e);let t=new Ho(15776011,70,20);t.position.set(0,1,-3),Qr.add(t),yn=new hr,Qr.add(yn);let i=new As({color:14788889,metalness:.87,roughness:.29});Ji.push(i);let n=new As({color:16240212,metalness:.78,roughness:.22});Ji.push(n);let s=new As({color:1118733,roughness:.48,metalness:.35});Ji.push(s);let a=new Oo(2.36,2.36,.37,128);Ji.push(a);let o=new $t(a,i);o.rotation.x=Math.PI/2,yn.add(o);let l=new Ts(2.3,.075,12,128);Ji.push(l);let f=new $t(l,n);f.position.z=.205,yn.add(f);let u=new $t(l,i);u.position.z=-.2,yn.add(u);let h=new Ts(2.17,.018,8,128);Ji.push(h);let d=new $t(h,i);d.position.z=.24,yn.add(d);let c=new ba(2.23,128);Ji.push(c);let x=new $t(c,s);x.rotation.y=Math.PI,x.position.z=-.19,yn.add(x);let _=new qr(.016,.075,.28);Ji.push(_);let p=new Do(_,n,120),m=new pi;for(let w=0;w<120;w++){let g=w/120*Math.PI*2;m.position.set(Math.cos(g)*2.364,Math.sin(g)*2.364,0),m.rotation.z=g,m.updateMatrix(),p.setMatrixAt(w,m.matrix)}yn.add(p);let v=new ba(2.2,128);Ji.push(v),new zo().load("beploer-dragon.png",w=>{if(Vh){w.dispose();return}w.colorSpace=Ei,w.anisotropy=Math.min(Kn.capabilities.getMaxAnisotropy(),8),Ji.push(w);let g=new ws({map:w,toneMapped:!1});Ji.push(g);let M=new $t(v,g);M.position.z=.222,yn.add(M),Sr.classList.add("webgl-ready"),T(performance.now())},void 0,()=>{Yh()});let A=new ws({color:9268763,transparent:!0,opacity:.23});Ji.push(A),[3.12,3.47].forEach((w,g)=>{let M=new Ts(w,.008,6,160);Ji.push(M);let P=new $t(M,A);P.rotation.set(.9+g*.3,-.55,-.4+g*.3),P.position.z=-1,Qr.add(P)});let y=new ResizeObserver(()=>{let{width:w,height:g}=Sr.getBoundingClientRect();!w||!g||(Kn.setSize(w,g,!1),Fa.aspect=w/g,Fa.position.z=w<450?10.5:11.2,Fa.updateProjectionMatrix(),Na.matches&&yn&&T(performance.now()))});y.observe(Sr),Sr.addEventListener("pointermove",w=>{if(w.pointerType==="touch")return;let g=Sr.getBoundingClientRect();Hh=(w.clientX-g.left)/g.width-.5,Wh=(w.clientY-g.top)/g.height-.5}),Sr.addEventListener("pointerleave",()=>{Hh=0,Wh=0}),new IntersectionObserver(w=>{Wx=w[0].isIntersecting},{threshold:0}).observe(Sr),Na.addEventListener("change",()=>{cancelAnimationFrame(Ju),Zu=0,T(performance.now())}),Hx.addEventListener("webglcontextlost",w=>{w.preventDefault(),cancelAnimationFrame(Ju),Sr.classList.remove("webgl-ready")}),window.addEventListener("pagehide",()=>{Vh=!0,y.disconnect(),Yh()},{once:!0})}catch{Yh()}})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

lucide/dist/esm/defaultAttributes.mjs:
lucide/dist/esm/createElement.mjs:
lucide/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide/dist/esm/replaceElement.mjs:
lucide/dist/esm/icons/arrow-down.mjs:
lucide/dist/esm/icons/arrow-up-right.mjs:
lucide/dist/esm/icons/arrow-up.mjs:
lucide/dist/esm/icons/globe.mjs:
lucide/dist/esm/icons/message-square.mjs:
lucide/dist/esm/icons/messages-square.mjs:
lucide/dist/esm/icons/move-down.mjs:
lucide/dist/esm/icons/move-right.mjs:
lucide/dist/esm/icons/zap.mjs:
lucide/dist/esm/lucide.mjs:
  (**
   * @license lucide v1.70.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
