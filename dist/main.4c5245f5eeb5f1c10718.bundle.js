webpackJsonp([1],{"+h1B":function(n,l,e){"use strict";var t=e("/oeL"),u=e("aR8+"),o=e("wQAS"),i=e("q4dy"),a=e("qbdv"),s=e("fc+i"),r=e("bm2B"),d=e("CPp0"),c=e("hJw8");e.d(l,"a",function(){return p});var p=t.b(u.a,[o.a],function(n){return t.c([t.d(512,t.e,t.f,[[8,[i.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,a.a,a.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,s.b,s.c,[a.c]),t.d(6144,t.q,null,[s.b]),t.d(4608,s.d,s.e,[]),t.d(5120,s.f,function(n,l,e,t){return[new s.g(n),new s.h(l),new s.i(e,t)]},[a.c,a.c,a.c,s.d]),t.d(4608,s.j,s.j,[s.f,t.r]),t.d(135680,s.k,s.k,[a.c]),t.d(4608,s.l,s.l,[s.j,s.k]),t.d(6144,t.s,null,[s.l]),t.d(6144,s.m,null,[s.k]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,s.n,s.n,[a.c]),t.d(4608,s.o,s.o,[a.c]),t.d(4608,r.a,r.a,[]),t.d(4608,d.a,d.a,[]),t.d(4608,d.b,d.c,[]),t.d(5120,d.d,d.e,[]),t.d(4608,d.f,d.f,[d.a,d.b,d.d]),t.d(4608,d.g,d.h,[]),t.d(5120,d.i,d.j,[d.f,d.g]),t.d(4608,c.a,c.a,[d.i]),t.d(512,a.d,a.d,[]),t.d(1024,t.u,s.p,[]),t.d(1024,t.v,function(n,l){return[s.q(n,l)]},[[2,s.r],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,s.s,s.s,[[3,s.s]]),t.d(512,r.b,r.b,[]),t.d(512,r.c,r.c,[]),t.d(512,d.k,d.k,[]),t.d(512,u.a,u.a,[])])})},0:function(n,l,e){n.exports=e("cDNt")},"1SmA":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=[""]},CJDf:function(n,l,e){"use strict";var t=e("hJw8");e.d(l,"a",function(){return u});var u=function(){function n(n){this.DeepThought=n,this.title="app"}return n.prototype.ngOnInit=function(){function n(){for(var n=N.options.length-1;n>=0;n--)N.remove(n);for(var l=R[C.selectedIndex],n=1;n<l.length;n++)N.options.add(new Option(l[n][1],l[n][0]));N.style.visibility=1==l[1].length?"hidden":"visible"}function l(){I.style.visibility="hidden",u("info_upgrade")}function e(n){return n.replace(A,"<p></p>").replace(H,"<br>")}function t(n){if(B)return void r.stop();g=0,E="",r.lang=N.value,r.start(),b=!1,document.getElementById("final_span").innerHTML="",document.getElementById("interim_span").innerHTML="",u("info_allow"),o("none"),s=n.timeStamp}function u(n){if(n){for(var l=S.firstChild;l;l=l.nextSibling)l.style&&(l.style.display=l.id==n?"inline":"none");S.style.visibility="visible"}else S.style.visibility="hidden"}function o(n){n!=P&&(P=n)}function i(){v=new SpeechSynthesisUtterance,v.voice=k[10],v.voiceURI="native",v.volume=1,v.rate=.8,v.pitch=1,v.text=w,v.lang="en-US",0==g&&(speechSynthesis.speak(v),g++),g=0}function a(){w="What is your name human?",i()}for(var s,r,d,c=window.webkitSpeechRecognition,p="",h=!1,f=!1,_="",y=!1,m=!1,g=0,w="",v="",k=window.speechSynthesis.getVoices(),b=!1,I=(document.getElementById("final_span").innerHTML="",document.getElementById("interim_span").innerHTML="",document.getElementById("start_button")),S=document.getElementById("info"),E="",B=!1,R=[["Afrikaans",["af-ZA"]],["Bahasa Indonesia",["id-ID"]],["Bahasa Melayu",["ms-MY"]],["Català",["ca-ES"]],["Čeština",["cs-CZ"]],["Dansk",["da-DK"]],["Deutsch",["de-DE"]],["English",["en-AU","Australia"],["en-CA","Canada"],["en-IN","India"],["en-NZ","New Zealand"],["en-ZA","South Africa"],["en-GB","United Kingdom"],["en-US","United States"]],["Español",["es-AR","Argentina"],["es-BO","Bolivia"],["es-CL","Chile"],["es-CO","Colombia"],["es-CR","Costa Rica"],["es-EC","Ecuador"],["es-SV","El Salvador"],["es-ES","España"],["es-US","Estados Unidos"],["es-GT","Guatemala"],["es-HN","Honduras"],["es-MX","México"],["es-NI","Nicaragua"],["es-PA","Panamá"],["es-PY","Paraguay"],["es-PE","Perú"],["es-PR","Puerto Rico"],["es-DO","República Dominicana"],["es-UY","Uruguay"],["es-VE","Venezuela"]],["Euskara",["eu-ES"]],["Filipino",["fil-PH"]],["Français",["fr-FR"]],["Galego",["gl-ES"]],["Hrvatski",["hr_HR"]],["IsiZulu",["zu-ZA"]],["Íslenska",["is-IS"]],["Italiano",["it-IT","Italia"],["it-CH","Svizzera"]],["Lietuvių",["lt-LT"]],["Magyar",["hu-HU"]],["Nederlands",["nl-NL"]],["Norsk bokmål",["nb-NO"]],["Polski",["pl-PL"]],["Português",["pt-BR","Brasil"],["pt-PT","Portugal"]],["Română",["ro-RO"]],["Slovenščina",["sl-SI"]],["Slovenčina",["sk-SK"]],["Suomi",["fi-FI"]],["Svenska",["sv-SE"]],["Tiếng Việt",["vi-VN"]],["Türkçe",["tr-TR"]],["Ελληνικά",["el-GR"]],["български",["bg-BG"]],["Pусский",["ru-RU"]],["Српски",["sr-RS"]],["Українська",["uk-UA"]],["한국어",["ko-KR"]],["中文",["cmn-Hans-CN","普通话 (中国大陆)"],["cmn-Hans-HK","普通话 (香港)"],["cmn-Hant-TW","中文 (台灣)"],["yue-Hant-HK","粵語 (香港)"]],["日本語",["ja-JP"]],["हिन्दी",["hi-IN"]],["ภาษาไทย",["th-TH"]]],C=document.getElementById("select_language"),N=document.getElementById("select_dialect"),T=0;T<R.length;T++)C.options[T]=new Option(R[T][0],T);C.selectedIndex=7,n(),N.selectedIndex=6,"webkitSpeechRecognition"in window?(I.style.display="inline-block",r=new c,r.continuous=!1,r.interimResults=!0,r.onstart=function(){B=!0,u("info_speak_now")},r.onerror=function(n){"no-speech"==n.error&&(u("info_no_speech"),b=!0),"audio-capture"==n.error&&(u("info_no_microphone"),b=!0),"not-allowed"==n.error&&(u(n.timeStamp-s<100?"info_blocked":"info_denied"),b=!0)},this.DeepThought.getJSON().subscribe(function(n){d=n.json(),console.log(d),r.onend=function(){if(B=!1,1==y&&""!=w?i():1==y&&""==w&&(w="I don't know what to say? Oh wait. You didn't say anything.",i()),w==p+" repeat after me"&&(w="I'm ready when you are. Say something and I will repeat it like a fool.",i(),y=!0),1==y&&"stop copying me"==w&&(w="Good, I was getting tired of that. Maybe we can speak freely?",i(),y=!1),w==p+" speak freely"&&(w="Wow, I wasn't expecting you to say that. I am unprepared. What do I say? What do I do? Why are you staring at me? Oh geez. Oh golly.",i(),m=!0),1==m&&"stop talking"==w&&(w="That was stressful. I didn't know what to say. I didn't know what to do. I hope to think clearly under stress in the future. Maybe you can make it easy on me and I can repeat after you?",i(),m=!1),1==f&&(""!=w?(_=w,w="I like your name "+_+". Now that we know each other, you can ask me to repeat after you or to speak freely. Ask me something.",f=!1,i()):(w="I didn't catch that. What is your name human?",i()),""==w&&(w="You didn't say anything "+_,i())),1==h&&(""!=w?(p=w,w=p+", that is a good name. I like that.",document.getElementById("info1").innerHTML="You can say, '"+p+" repeat after me'. To stop say, 'stop copying me'",document.getElementById("info2").innerHTML="You can say, '"+p+" speak freely'. To stop say, 'stop talking'",f=!0,h=!1,i(),1==f&&a()):(w="I didn't catch that. What is my name human?",i())),u(""),window.getSelection){window.getSelection().removeAllRanges();var n=document.createRange();n.selectNode(document.getElementById("final_span")),window.getSelection().addRange(n)}}}),r.onresult=function(n){var t="";if(void 0===n.results)return r.onend=null,r.stop(),void l();for(var u=n.resultIndex;u<n.results.length;++u)n.results[u].isFinal?E+=n.results[u][0].transcript:t+=n.results[u][0].transcript;document.getElementById("final_span").innerHTML=e(E),document.getElementById("interim_span").innerHTML=e(t),w=E||t,(E||t)&&o("inline-block")}):l();var P,A=/\n\n/g,H=/\n/g;document.getElementById("select_language").addEventListener("change",n,!1),document.getElementById("start_button").addEventListener("click",t,!1)},n.ctorParameters=function(){return[{type:t.a}]},n}()},NhKt:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=[""]},"aR8+":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},cDNt:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("/oeL"),u=e("p5Ee"),o=e("+h1B"),i=e("fc+i");u.a.production&&e.i(t.a)(),e.i(i.a)().bootstrapModuleFactory(o.a)},hJw8:function(n,l,e){"use strict";var t=e("CPp0"),u=e("5v8a");e.n(u);e.d(l,"a",function(){return o});var o=function(){function n(n){this.http=n,this.getJSON().subscribe(function(n){})}return n.prototype.getJSON=function(){return this.http.get("../../assets/json/deepThought.json")},n.ctorParameters=function(){return[{type:t.i}]},n}()},p5Ee:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t={production:!0}},q4dy:function(n,l,e){"use strict";function t(n){return i._17(0,[(n()(),i._18(-1,null,["\n"])),(n()(),i._19(1,0,null,null,1,"chappie",[],null,null,null,a.a,a.b)),i._20(2,114688,null,0,s.a,[r.a],null,null),(n()(),i._18(-1,null,["\n\n"]))],function(n,l){n(l,2,0)},null)}function u(n){return i._17(0,[(n()(),i._19(0,0,null,null,1,"app-root",[],null,null,null,t,p)),i._20(1,49152,null,0,d.a,[],null,null)],null,null)}var o=e("NhKt"),i=e("/oeL"),a=e("w8nx"),s=e("CJDf"),r=e("hJw8"),d=e("wQAS");e.d(l,"a",function(){return h});var c=[o.a],p=i._16({encapsulation:0,styles:c,data:{}}),h=i._21("app-root",d.a,u,{},{},[])},qtrl:function(n,l){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="qtrl"},w8nx:function(n,l,e){"use strict";function t(n){return i._17(0,[(n()(),i._19(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),i._18(-1,null,["Chappie V2"])),(n()(),i._18(-1,null,["\n\n"])),(n()(),i._19(3,0,null,null,59,"div",[["class","SpeechRec"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n    "])),(n()(),i._19(5,0,null,null,34,"div",[["id","info"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n      "])),(n()(),i._19(7,0,null,null,1,"h4",[["id","info_start"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n        Click on the Listen Button and say whatever you like.\n      "])),(n()(),i._18(-1,null,["\n      "])),(n()(),i._19(10,0,null,null,1,"h4",[["id","info_speak_now"],["style","display:none"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n        Speak now.\n      "])),(n()(),i._18(-1,null,["\n      "])),(n()(),i._19(13,0,null,null,4,"h4",[["id","info_no_speech"],["style","display:none"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n        No speech was detected. You may need to adjust your "])),(n()(),i._19(15,0,null,null,1,"a",[["href","//support.google.com/chrome/bin/answer.py?hl=en&answer=1407892"]],null,null,null,null,null)),(n()(),i._18(-1,null,["microphone\n        settings"])),(n()(),i._18(-1,null,[".\n      "])),(n()(),i._18(-1,null,["\n      "])),(n()(),i._19(19,0,null,null,4,"h4",[["id","info_no_microphone"],["style","display:none"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n        No microphone was found. Ensure that a microphone is installed and that\n        "])),(n()(),i._19(21,0,null,null,1,"a",[["href","//support.google.com/chrome/bin/answer.py?hl=en&answer=1407892"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n        microphone settings"])),(n()(),i._18(-1,null,[" are configured correctly.\n      "])),(n()(),i._18(-1,null,["\n      "])),(n()(),i._19(25,0,null,null,1,"h4",[["id","info_allow"],["style","display:none"]],null,null,null,null,null)),(n()(),i._18(-1,null,['\n        Click the "Allow" button above to enable your microphone.\n      '])),(n()(),i._18(-1,null,["\n      "])),(n()(),i._19(28,0,null,null,1,"h4",[["id","info_denied"],["style","display:none"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n        Permission to use microphone was denied.\n      "])),(n()(),i._18(-1,null,["\n      "])),(n()(),i._19(31,0,null,null,1,"p",[["id","info_blocked"],["style","display:none"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n        Permission to use microphone is blocked. To change, go to\n        chrome://settings/contentExceptions#media-stream\n      "])),(n()(),i._18(-1,null,["\n      "])),(n()(),i._19(34,0,null,null,4,"h4",[["id","info_upgrade"],["style","display:none"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n        Web Speech API is not supported by this browser. Upgrade to "])),(n()(),i._19(36,0,null,null,1,"a",[["href","//www.google.com/chrome"]],null,null,null,null,null)),(n()(),i._18(-1,null,["Chrome"])),(n()(),i._18(-1,null,[" version 25 or later.\n      "])),(n()(),i._18(-1,null,["\n    "])),(n()(),i._18(-1,null,["\n    "])),(n()(),i._19(41,0,null,null,4,"div",[["id","div_start"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n      "])),(n()(),i._19(43,0,null,null,1,"button",[["id","start_button"]],null,null,null,null,null)),(n()(),i._18(-1,null,["Listen"])),(n()(),i._18(-1,null,["\n    "])),(n()(),i._18(-1,null,["\n    "])),(n()(),i._19(47,0,null,null,5,"div",[["id","results"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n      "])),(n()(),i._19(49,0,null,null,0,"span",[["class","final"],["id","final_span"]],null,null,null,null,null)),(n()(),i._18(-1,null,[" "])),(n()(),i._19(51,0,null,null,0,"span",[["class","interim"],["id","interim_span"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n    "])),(n()(),i._18(-1,null,["\n    "])),(n()(),i._19(54,0,null,null,7,"div",[["class","compact marquee"],["id","div_language"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n      \n      "])),(n()(),i._19(56,0,null,null,1,"select",[["id","select_language"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n        "])),(n()(),i._18(-1,null,["   "])),(n()(),i._19(59,0,null,null,1,"select",[["id","select_dialect"]],null,null,null,null,null)),(n()(),i._18(-1,null,["\n        "])),(n()(),i._18(-1,null,["\n    "])),(n()(),i._18(-1,null,["\n  "])),(n()(),i._18(-1,null,["\n\n  "])),(n()(),i._19(64,0,null,null,1,"p",[["id","info1"]],null,null,null,null,null)),(n()(),i._18(-1,null,["You can say, 'RobotsName repeat after me'. To stop say, 'stop copying me'"])),(n()(),i._18(-1,null,["\n  "])),(n()(),i._19(67,0,null,null,1,"p",[["id","info2"]],null,null,null,null,null)),(n()(),i._18(-1,null,["You can say, 'RobotsName speak freely'. To stop say, 'stop talking'"]))],null,null)}function u(n){return i._17(0,[(n()(),i._19(0,0,null,null,1,"chappie",[],null,null,null,t,d)),i._20(1,114688,null,0,a.a,[s.a],null,null)],function(n,l){n(l,1,0)},null)}var o=e("1SmA"),i=e("/oeL"),a=e("CJDf"),s=e("hJw8");e.d(l,"b",function(){return d}),l.a=t;var r=[o.a],d=i._16({encapsulation:0,styles:r,data:{}});i._21("chappie",a.a,u,{},{},[])},wQAS:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){this.title="app"}return n}()}},[0]);