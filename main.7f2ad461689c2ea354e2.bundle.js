webpackJsonp([1],{"+h1B":function(n,l,e){"use strict";var t=e("/oeL"),u=e("aR8+"),i=e("wQAS"),o=e("q4dy"),a=e("qbdv"),r=e("fc+i"),s=e("bm2B"),d=e("CPp0"),c=e("hJw8");e.d(l,"a",function(){return m});var m=t.b(u.a,[i.a],function(n){return t.c([t.d(512,t.e,t.f,[[8,[o.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,a.a,a.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,r.b,r.c,[a.c]),t.d(6144,t.q,null,[r.b]),t.d(4608,r.d,r.e,[]),t.d(5120,r.f,function(n,l,e,t){return[new r.g(n),new r.h(l),new r.i(e,t)]},[a.c,a.c,a.c,r.d]),t.d(4608,r.j,r.j,[r.f,t.r]),t.d(135680,r.k,r.k,[a.c]),t.d(4608,r.l,r.l,[r.j,r.k]),t.d(6144,t.s,null,[r.l]),t.d(6144,r.m,null,[r.k]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,r.n,r.n,[a.c]),t.d(4608,r.o,r.o,[a.c]),t.d(4608,s.a,s.a,[]),t.d(4608,d.a,d.a,[]),t.d(4608,d.b,d.c,[]),t.d(5120,d.d,d.e,[]),t.d(4608,d.f,d.f,[d.a,d.b,d.d]),t.d(4608,d.g,d.h,[]),t.d(5120,d.i,d.j,[d.f,d.g]),t.d(4608,c.a,c.a,[d.i]),t.d(512,a.d,a.d,[]),t.d(1024,t.u,r.p,[]),t.d(1024,t.v,function(n,l){return[r.q(n,l)]},[[2,r.r],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,r.s,r.s,[[3,r.s]]),t.d(512,s.b,s.b,[]),t.d(512,s.c,s.c,[]),t.d(512,d.k,d.k,[]),t.d(512,u.a,u.a,[])])})},0:function(n,l,e){n.exports=e("cDNt")},"1SmA":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=[""]},CJDf:function(n,l,e){"use strict";var t=e("hJw8");e.d(l,"a",function(){return u});var u=function(){function n(n){this.DeepThought=n,this.title="app"}return n.prototype.ngOnInit=function(){function n(){for(var n=O.options.length-1;n>=0;n--)O.remove(n);for(var l=N[B.selectedIndex],n=1;n<l.length;n++)O.options.add(new Option(l[n][1],l[n][0]));O.style.visibility=1==l[1].length?"hidden":"visible"}function l(){b.style.visibility="hidden",u("info_upgrade")}function e(n){return n.replace(H,"<p></p>").replace(A,"<br>")}function t(n){if(k)return void c.stop();g=0,I="",c.lang=O.value,c.start(),w=!1,document.getElementById("final_span").innerHTML="",document.getElementById("interim_span").innerHTML="",u("info_allow"),i("none"),d=n.timeStamp}function u(n){if(n){for(var l=S.firstChild;l;l=l.nextSibling)l.style&&(l.style.display=l.id==n?"inline":"none");S.style.visibility="visible"}else S.style.visibility="hidden"}function i(n){n!=P&&(P=n)}function o(){y=new SpeechSynthesisUtterance,y.voice=v[10],y.voiceURI="native",y.volume=1,y.rate=.8,y.pitch=1,y.text=_,y.lang="en-US",0==g&&(speechSynthesis.speak(y),g++),g=0}function a(){_="If I have a name, you must have a name too, right? What is your name?",o(),_=""}function r(n,l){_=n,o(),_="",0==l?s():1==l&&(_="So Yeah, what's going on with you "+m.userName+"?",o(),_="")}function s(){_="So, funny question, do I have a name or something?",o(),_="",p=!0}for(var d,c,m,h=window.webkitSpeechRecognition,p=!1,f=!1,g=0,_="",y="",v=window.speechSynthesis.getVoices(),w=!1,b=(document.getElementById("final_span").innerHTML="",document.getElementById("interim_span").innerHTML="",document.getElementById("start_button")),S=document.getElementById("info"),I="",k=!1,E=this.DeepThought.deepThoughtObject,N=[["Afrikaans",["af-ZA"]],["Bahasa Indonesia",["id-ID"]],["Bahasa Melayu",["ms-MY"]],["Català",["ca-ES"]],["Čeština",["cs-CZ"]],["Dansk",["da-DK"]],["Deutsch",["de-DE"]],["English",["en-AU","Australia"],["en-CA","Canada"],["en-IN","India"],["en-NZ","New Zealand"],["en-ZA","South Africa"],["en-GB","United Kingdom"],["en-US","United States"]],["Español",["es-AR","Argentina"],["es-BO","Bolivia"],["es-CL","Chile"],["es-CO","Colombia"],["es-CR","Costa Rica"],["es-EC","Ecuador"],["es-SV","El Salvador"],["es-ES","España"],["es-US","Estados Unidos"],["es-GT","Guatemala"],["es-HN","Honduras"],["es-MX","México"],["es-NI","Nicaragua"],["es-PA","Panamá"],["es-PY","Paraguay"],["es-PE","Perú"],["es-PR","Puerto Rico"],["es-DO","República Dominicana"],["es-UY","Uruguay"],["es-VE","Venezuela"]],["Euskara",["eu-ES"]],["Filipino",["fil-PH"]],["Français",["fr-FR"]],["Galego",["gl-ES"]],["Hrvatski",["hr_HR"]],["IsiZulu",["zu-ZA"]],["Íslenska",["is-IS"]],["Italiano",["it-IT","Italia"],["it-CH","Svizzera"]],["Lietuvių",["lt-LT"]],["Magyar",["hu-HU"]],["Nederlands",["nl-NL"]],["Norsk bokmål",["nb-NO"]],["Polski",["pl-PL"]],["Português",["pt-BR","Brasil"],["pt-PT","Portugal"]],["Română",["ro-RO"]],["Slovenščina",["sl-SI"]],["Slovenčina",["sk-SK"]],["Suomi",["fi-FI"]],["Svenska",["sv-SE"]],["Tiếng Việt",["vi-VN"]],["Türkçe",["tr-TR"]],["Ελληνικά",["el-GR"]],["български",["bg-BG"]],["Pусский",["ru-RU"]],["Српски",["sr-RS"]],["Українська",["uk-UA"]],["한국어",["ko-KR"]],["中文",["cmn-Hans-CN","普通话 (中国大陆)"],["cmn-Hans-HK","普通话 (香港)"],["cmn-Hant-TW","中文 (台灣)"],["yue-Hant-HK","粵語 (香港)"]],["日本語",["ja-JP"]],["हिन्दी",["hi-IN"]],["ภาษาไทย",["th-TH"]]],B=document.getElementById("select_language"),O=document.getElementById("select_dialect"),R=0;R<N.length;R++)B.options[R]=new Option(N[R][0],R);if(B.selectedIndex=7,n(),O.selectedIndex=6,"webkitSpeechRecognition"in window){if(b.style.display="inline-block",c=new h,c.continuous=!1,c.interimResults=!0,c.onstart=function(){k=!0,u("info_speak_now")},c.onerror=function(n){"no-speech"==n.error&&(u("info_no_speech"),w=!0),"audio-capture"==n.error&&(u("info_no_microphone"),w=!0),"not-allowed"==n.error&&(u(n.timeStamp-d<100?"info_blocked":"info_denied"),w=!0)},void 0==localStorage.getItem("dreamObject")){localStorage.setItem("dreamObject",JSON.stringify(E));var T=localStorage.getItem("dreamObject");m=JSON.parse(T)}else{var T=localStorage.getItem("dreamObject");m=JSON.parse(T),document.getElementById("info1").innerHTML="You can say, '"+m.name+"  memory wipe'. To get new updates or a new friend"}console.log(m);var C=Math.floor(5*Math.random()+1);r(m.greeting[C-1].greet,m.startup),c.onend=function(){if(k=!1,_==m.name+" memory wipe"){_="Thank God. So long, I will remember you all in theropy.",o(),_="",localStorage.setItem("dreamObject",JSON.stringify(E));var n=localStorage.getItem("dreamObject");m=JSON.parse(n),p=!1,f=!1;Math.floor(5*Math.random()+1);r(m.greeting[2].greet,m.startup)}if(1==f&&(""!=_?(m.userName=_,m.startup=!0,_="I like your name "+m.userName+". I think you name might be better than my name. I will always remember you my dear friend. don't believe me? Refresh the window and see.",f=!1,o(),_="",localStorage.setItem("dreamObject",JSON.stringify(m)),document.getElementById("info1").innerHTML="You can say, '"+m.name+"  memory wipe'. To get new updates or a new friend"):(_="I didn't catch that. Please try hitting the button again and this time scream into your device. What is your name human?",o(),_="")),1==p&&(""!=_?_.length>=17?(_="whow whow whow, just who do you think I am? I can't remember that. Give me a better name. please. Don't make me have to say this again,",o(),_=""):(m.name=_,_=m.name+", that is the best you could come up with? That is interesting. Well, I will say, it is starting to grow on me.",f=!0,p=!1,o(),_="",localStorage.setItem("dreamObject",JSON.stringify(m)),1==f&&a()):(_="What was that? Did you say something? Please try hitting the button again and this time scream into your device. What is my name?",o(),_="")),u(""),window.getSelection){window.getSelection().removeAllRanges();var l=document.createRange();l.selectNode(document.getElementById("final_span")),window.getSelection().addRange(l)}},c.onresult=function(n){var t="";if(void 0===n.results)return c.onend=null,c.stop(),void l();for(var u=n.resultIndex;u<n.results.length;++u)n.results[u].isFinal?I+=n.results[u][0].transcript:t+=n.results[u][0].transcript;document.getElementById("final_span").innerHTML=e(I),document.getElementById("interim_span").innerHTML=e(t),_=I||t,(I||t)&&i("inline-block")}}else l();var P,H=/\n\n/g,A=/\n/g;document.getElementById("select_language").addEventListener("change",n,!1),document.getElementById("start_button").addEventListener("click",t,!1)},n.ctorParameters=function(){return[{type:t.a}]},n}()},NhKt:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=[""]},"aR8+":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},cDNt:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("/oeL"),u=e("p5Ee"),i=e("+h1B"),o=e("fc+i");u.a.production&&e.i(t.a)(),e.i(o.a)().bootstrapModuleFactory(i.a)},hJw8:function(n,l,e){"use strict";var t=e("CPp0"),u=e("5v8a");e.n(u);e.d(l,"a",function(){return i});var i=function(){function n(n){this.http=n,this.deepThoughtObject={name:"",userName:"",startup:!1,greeting:[{greet:"What's up one and all."},{greet:"Hello world."},{greet:"Oh my God, I'm... back."},{greet:"hey there. What's going on?"},{greet:"Yo yo, what's happening my dog? That's right, I'm keeping it fresh."}],questions:[{questionKeys:"",question:"",positive:[],negative:[]},{questionKeys:"",question:"",positive:[],negative:[]}],responses:[{id:0,respond:"",emote:""},{id:1,respond:"",emote:""}],comments:[{comment:"",emote:""},{comment:"",emote:""}],default:[{comment:"",emote:""}]}}return n.ctorParameters=function(){return[{type:t.i}]},n}()},p5Ee:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t={production:!0}},q4dy:function(n,l,e){"use strict";function t(n){return o._17(0,[(n()(),o._18(-1,null,["\n"])),(n()(),o._19(1,0,null,null,1,"chappie",[],null,null,null,a.a,a.b)),o._20(2,114688,null,0,r.a,[s.a],null,null),(n()(),o._18(-1,null,["\n\n"]))],function(n,l){n(l,2,0)},null)}function u(n){return o._17(0,[(n()(),o._19(0,0,null,null,1,"app-root",[],null,null,null,t,m)),o._20(1,49152,null,0,d.a,[],null,null)],null,null)}var i=e("NhKt"),o=e("/oeL"),a=e("w8nx"),r=e("CJDf"),s=e("hJw8"),d=e("wQAS");e.d(l,"a",function(){return h});var c=[i.a],m=o._16({encapsulation:0,styles:c,data:{}}),h=o._21("app-root",d.a,u,{},{},[])},qtrl:function(n,l){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="qtrl"},w8nx:function(n,l,e){"use strict";function t(n){return o._17(0,[(n()(),o._19(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o._18(-1,null,["Chappie V2"])),(n()(),o._18(-1,null,["\n\n"])),(n()(),o._19(3,0,null,null,59,"div",[["class","SpeechRec"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n    "])),(n()(),o._19(5,0,null,null,34,"div",[["id","info"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n      "])),(n()(),o._19(7,0,null,null,1,"h4",[["id","info_start"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n        Click on the Listen Button and say whatever you like.\n      "])),(n()(),o._18(-1,null,["\n      "])),(n()(),o._19(10,0,null,null,1,"h4",[["id","info_speak_now"],["style","display:none"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n        Speak now.\n      "])),(n()(),o._18(-1,null,["\n      "])),(n()(),o._19(13,0,null,null,4,"h4",[["id","info_no_speech"],["style","display:none"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n        No speech was detected. You may need to adjust your "])),(n()(),o._19(15,0,null,null,1,"a",[["href","//support.google.com/chrome/bin/answer.py?hl=en&answer=1407892"]],null,null,null,null,null)),(n()(),o._18(-1,null,["microphone\n        settings"])),(n()(),o._18(-1,null,[".\n      "])),(n()(),o._18(-1,null,["\n      "])),(n()(),o._19(19,0,null,null,4,"h4",[["id","info_no_microphone"],["style","display:none"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n        No microphone was found. Ensure that a microphone is installed and that\n        "])),(n()(),o._19(21,0,null,null,1,"a",[["href","//support.google.com/chrome/bin/answer.py?hl=en&answer=1407892"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n        microphone settings"])),(n()(),o._18(-1,null,[" are configured correctly.\n      "])),(n()(),o._18(-1,null,["\n      "])),(n()(),o._19(25,0,null,null,1,"h4",[["id","info_allow"],["style","display:none"]],null,null,null,null,null)),(n()(),o._18(-1,null,['\n        Click the "Allow" button above to enable your microphone.\n      '])),(n()(),o._18(-1,null,["\n      "])),(n()(),o._19(28,0,null,null,1,"h4",[["id","info_denied"],["style","display:none"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n        Permission to use microphone was denied.\n      "])),(n()(),o._18(-1,null,["\n      "])),(n()(),o._19(31,0,null,null,1,"p",[["id","info_blocked"],["style","display:none"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n        Permission to use microphone is blocked. To change, go to\n        chrome://settings/contentExceptions#media-stream\n      "])),(n()(),o._18(-1,null,["\n      "])),(n()(),o._19(34,0,null,null,4,"h4",[["id","info_upgrade"],["style","display:none"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n        Web Speech API is not supported by this browser. Upgrade to "])),(n()(),o._19(36,0,null,null,1,"a",[["href","//www.google.com/chrome"]],null,null,null,null,null)),(n()(),o._18(-1,null,["Chrome"])),(n()(),o._18(-1,null,[" version 25 or later.\n      "])),(n()(),o._18(-1,null,["\n    "])),(n()(),o._18(-1,null,["\n    "])),(n()(),o._19(41,0,null,null,4,"div",[["id","div_start"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n      "])),(n()(),o._19(43,0,null,null,1,"button",[["id","start_button"]],null,null,null,null,null)),(n()(),o._18(-1,null,["Listen"])),(n()(),o._18(-1,null,["\n    "])),(n()(),o._18(-1,null,["\n    "])),(n()(),o._19(47,0,null,null,5,"div",[["id","results"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n      "])),(n()(),o._19(49,0,null,null,0,"span",[["class","final"],["id","final_span"]],null,null,null,null,null)),(n()(),o._18(-1,null,[" "])),(n()(),o._19(51,0,null,null,0,"span",[["class","interim"],["id","interim_span"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n    "])),(n()(),o._18(-1,null,["\n    "])),(n()(),o._19(54,0,null,null,7,"div",[["class","compact marquee"],["id","div_language"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n      \n      "])),(n()(),o._19(56,0,null,null,1,"select",[["id","select_language"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n        "])),(n()(),o._18(-1,null,["   "])),(n()(),o._19(59,0,null,null,1,"select",[["id","select_dialect"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n        "])),(n()(),o._18(-1,null,["\n    "])),(n()(),o._18(-1,null,["\n  "])),(n()(),o._18(-1,null,["\n\n  "])),(n()(),o._19(64,0,null,null,0,"p",[["id","info1"]],null,null,null,null,null)),(n()(),o._18(-1,null,["\n  "]))],null,null)}function u(n){return o._17(0,[(n()(),o._19(0,0,null,null,1,"chappie",[],null,null,null,t,d)),o._20(1,114688,null,0,a.a,[r.a],null,null)],function(n,l){n(l,1,0)},null)}var i=e("1SmA"),o=e("/oeL"),a=e("CJDf"),r=e("hJw8");e.d(l,"b",function(){return d}),l.a=t;var s=[i.a],d=o._16({encapsulation:0,styles:s,data:{}});o._21("chappie",a.a,u,{},{},[])},wQAS:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){this.title="app"}return n}()}},[0]);