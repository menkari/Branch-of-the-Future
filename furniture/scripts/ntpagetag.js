var wbcTagging={_id:"WestpacID",_domain:"westpac.com.au"};
wbcTagging.isdefined=function(A){return(typeof (A)==="undefined")?false:true
};
wbcTagging.addEvent=function(A,B,C){if(typeof A.attachEvent!=="undefined"){A.attachEvent("on"+B,C)
}else{if(typeof A.addEventListener!=="undefined"){A.addEventListener(B,C,false)
}else{A["on"+B]=C
}}};
wbcTagging.createIDCookie=function(){var C=new Date();
var A=new Date(C.getTime()+365*24*60*60*1000*3);
var D=wbcTagging.getCookie(wbcTagging._id);
if(D==null||D==""){var B=(Math.random()*1000000);
CurrentYear=C.getYear();
if(CurrentYear<1000){CurrentYear=CurrentYear+1900
}D="d"+CurrentYear+(C.getMonth()+1)+C.getDate()+"t"+C.getHours()+C.getMinutes()+C.getSeconds()+C.getTime()+"r"+Math.floor(B);
document.cookie=wbcTagging._id+"="+escape(D)+"; expires="+A.toGMTString()+"; domain=."+wbcTagging._domain+";path=/"
}};
wbcTagging.getCookie=function(E){var B=E+"=";
var D=document.cookie.split(";");
for(var A=0;
A<D.length;
A++){var C=D[A];
while(C.charAt(0)==" "){C=C.substring(1,C.length)
}if(C.indexOf(B)==0){return C.substring(B.length,C.length)
}}return null
};
wbcTagging.isExternalLink=function(A){if(A.indexOf(wbcTagging._domain)!=-1){return false
}if(A.match(/^\s*javascript:/i)){return false
}return true
};
wbcTagging.isPopUp=function(A){if((A.target)&&(A.target!="")){return true
}try{return($(A).hasClass("pdf")||$(A).hasClass("mis-popup"))
}catch(B){}return false
};
wbcTagging.isDocument=function(A){var B=wbcTagging.extMatcher.exec(A);
return(B!==null)
};
wbcTagging.linkWrapper=function(B,C){var A=C?"lk=1&":"";
var D=B;
wbcTagging.addEvent(D,"click",function(E){return ntptEventTag(A+"lc="+D.href+"&rf="+document.location,NTPT_MAXTAGWAIT)
})
};
wbcTagging.setUpLinkTagging=function(){var E=document.links;
var F,D,C,B;
for(x=0;
x<E.length;
x++){F=E[x].href.toLowerCase();
if(WBC_DEBUG){D=wbcTagging.isDocument(F);
C=wbcTagging.isPopUp(E[x]);
B=wbcTagging.isExternalLink(F);
var A="<ul><li>id      : "+E[x].id+"</li><li>url     : "+F+"</li><li>isDoc   : "+D+"</li><li>isPopUp : "+C+"</li><li>isExt   : "+B+"</li></ul>";
document.getElementById(E[x].id+"-info").innerHTML=A
}if(wbcTagging.isExternalLink(F)){wbcTagging.linkWrapper(E[x],true);
continue
}if(wbcTagging.isDocument(F)){wbcTagging.linkWrapper(E[x],false);
continue
}}};
wbcTagging.init=function(){wbcTagging.createIDCookie();
if(!WBC_DO_NOT_RUN_LINK_TAGGING){wbcTagging.addEvent(window,"load",wbcTagging.setUpLinkTagging)
}};
try{if(!wbcTagging.isdefined(WBC_DO_NOT_RUN_LINK_TAGGING)){var WBC_DO_NOT_RUN_LINK_TAGGING=false
}if(!wbcTagging.isdefined(WBC_DEBUG)){var WBC_DEBUG=false
}wbcTagging.init()
}catch(e){}wbcTagging.docExtRegex="(pptx)|(ppsx)|(docx)|(xlsx)|(ppt)|(pps)|(doc)|(xls)|(csv)|(pdf)|(mp3)|(m3u)|(zip)|(wav)|(swf)|(wma)|(rm)|(png)|(mov)";
wbcTagging.extMatcher=new RegExp(".("+wbcTagging.docExtRegex+")([W][^s]*)*$","i");
if(!wbcTagging.isdefined(NTPT_IMGSRC)){var NTPT_IMGSRC="../../analytics.westpac.com.au/furniture/images/ntpagetag.gif"
}if(!wbcTagging.isdefined(NTPT_HTTPSIMGSRC)){var NTPT_HTTPSIMGSRC="../../analytics.westpac.com.au/furniture/images/ntpagetag.gif"
}try{if(wbcTagging.isdefined(NTPT_PGEXTRA)){if(wbcPage){NTPT_PGEXTRA+="&"+wbcPage.getParam("NTPT_PGEXTRA","&")
}}else{if(wbcPage){var NTPT_PGEXTRA=wbcPage.getParam("NTPT_PGEXTRA","&")
}}}catch(e){}var NTPT_FLDS=new Object();
NTPT_FLDS.lc=true;
NTPT_FLDS.rf=true;
NTPT_FLDS.rs=true;
NTPT_FLDS.cd=true;
NTPT_FLDS.ln=true;
NTPT_FLDS.tz=true;
NTPT_FLDS.jv=true;
NTPT_FLDS.ck=true;
var NTPT_MAXTAGWAIT=3;
var NTPT_GLBLREFTOP=false;
var NTPT_SET_IDCOOKIE=true;
var NTPT_IDCOOKIE_NAME=wbcTagging._id;
var NTPT_GLBLEXTRA="";
var NTPT_IDCOOKIE_DOMAIN=wbcTagging._domain;
var NTPT_GLBLCOOKIES=[wbcTagging._id];
if(typeof (NTPT_WPC_HTTPSTATUS)!="undefined"){NTPT_GLBLEXTRA=NTPT_GLBLEXTRA+"&sc="+NTPT_WPC_HTTPSTATUS
}function OOOO000(B,C,F,D){var E="";
E=B+"\x3d"+escape(C)+"\x3b";
if(D){E+="\x20\x64\x6f\x6d\x61\x69\x6e\x3d"+D+"\x3b"
}if(F>(7525+435-7960)){var A=new Date();
A.setTime(A.getTime()+(F*(2470+2102-3572)));
E+="\x20\x65\x78\x70\x69\x72\x65\x73\x3d"+A.toGMTString()+"\x3b"
}E+="\x20\x70\x61\x74\x68\x3d\x2f";
document.cookie=E
}function OOOO00(D){var A=D+"\x3d";
if(document.cookie.length>(5679+0-5679)){var B;
B=document.cookie.indexOf(A);
if(B!=-(262+5772-6033)){var C;
B+=A.length;
C=document.cookie.indexOf("\x3b",B);
if(C==-(4764+4910-9673)){C=document.cookie.length
}return unescape(document.cookie.substring(B,C))
}else{return null
}}}function O00000O(B){var A="";
for(OO00O in B){if((typeof (B[OO00O])=="\x73\x74\x72\x69\x6e\x67")&&(B[OO00O]!="")){if(A!=""){A+="\x3b"
}A+=OO00O+"\x3d"+B[OO00O]
}}return A
}var O00OOO=["\x41","\x42","\x43","\x44","\x45","\x46","\x47","\x48","\x49","\x4a","\x4b","\x4c","\x4d","\x4e","\x4f","\x50","\x51","\x52","\x53","\x54","\x55","\x56","\x57","\x58","\x59","\x5a","\x61","\x62","\x63","\x64","\x65","\x66","\x67","\x68","\x69","\x6a","\x6b","\x6c","\x6d","\x6e","\x6f","\x70","\x71","\x72","\x73","\x74","\x75","\x76","\x77","\x78","\x79","\x7a","\x30","\x31","\x32","\x33","\x34","\x35","\x36","\x37","\x38","\x39"];
function OOOOOO0(A){if(A<(65+9084-9087)){return O00OOO[A]
}else{return(OOOOOO0(Math.floor(A/(4451+644-5033)))+O00OOO[A%(7260+1570-8768)])
}}function O0O000O(){var B="";
var A=new Date();
for(OOO0O0O=(5040+769-5809);
OOO0O0O<(623+3070-3682);
OOO0O0O++){B+=O00OOO[Math.round(Math.random()*(2914+1003-3856))]
}return(B+"\x2d"+OOOOOO0(A.getTime()))
}function OO0OO(O0O0000,OOO0O00){return(eval("\x74\x79\x70\x65\x6f\x66\x20"+O0O0000+"\x20\x21\x3d\x20\x22\x75\x6e\x64\x65\x66\x69\x6e\x65\x64\x22")?eval(O0O0000):OOO0O00)
}function OO0O000(B,A){return(B+(((B=="")||((A=="")||(A.substring((7625+2039-9664),(5186+4474-9659))=="\x26")))?"":"\x26")+A)
}function O000O00(){var A=new Date();
return(A.getTime()+"\x2e"+Math.floor(Math.random()*(3801+1573-4374)))
}function O00OO(B,A){OOO00[B]=A.toString()
}function O0OO0O0(A){OOO00[A]=""
}function OOO0000(C){var D="",A,B;
OO00OO(OO0OO("\x4e\x54\x50\x54\x5f\x47\x4c\x42\x4c\x45\x58\x54\x52\x41",""));
if(!LnkLck){OO00OO(OO0OO("\x4e\x54\x50\x54\x5f\x50\x47\x45\x58\x54\x52\x41",""))
}OO00OO(C);
for(A in OOO00){B=OOO00[A];
if(typeof (B)=="\x73\x74\x72\x69\x6e\x67"){if(B&&(B!="")){D=OO0O000(D,(A+"\x3d"+(self.encodeURIComponent?encodeURIComponent(B):escape(B))))
}}}return D
}function O000000(){var A;
OOOOO0.OOO00=new Array();
for(A in OOO00){OOOOO0.OOO00[A]=OOO00[A]
}}function OOO00OO(){var A;
OOO00=new Array();
for(A in OOOOO0.OOO00){OOO00[A]=OOOOO0.OOO00[A]
}}function OO0O0OO(D,B,A){if(OOOO0[D]!=null){var C=new Function(B);
OOOO0[D].onload=C;
OOOO0[D].onerror=C;
OOOO0[D].onabort=C
}setTimeout(B,(A*(1523+3206-3729)))
}function O0O00O0(A,B){if(A==""){return 
}O0000=((O0000+(4882+1405-6286))%OOOO0.length);
if(OOOO0[O0000]==null){OOOO0[O0000]=new Image((4101+4276-8376),(4616+715-5330))
}OOOO0[O0000].src=A+"\x3f"+B
}function OOOOO0O(C){var B;
var A;
if((O00O00O!="")&&(document.location.protocol=="\x68\x74\x74\x70\x73\x3a")){B=O00O00O
}else{B=O0000OO
}A=OOO0000(C);
O0O00O0(B,A);
OOO00OO()
}function OO00OO(D){var A;
var B;
if(!D){return 
}D=D.toString();
if(D==""){return 
}A=D.split("\x26");
for(B=(220+1230-1450);
B<A.length;
B++){var C=A[B].split("\x3d");
if(C.length==(2109+4370-6477)){O00OO(C[(4672+5137-9809)],(self.decodeURIComponent?decodeURIComponent(C[(2685+3816-6500)]):unescape(C[(3471+2979-6449)])))
}}}function O0O0OO(A){O00OO("\x65\x74\x73",O000O00());
OOOOO0O(A);
return true
}function O00OO0O(C,D,A){var E;
if(!C||!C.href){return true
}if(LnkLck){return false
}LnkLck=C;
if(OO000.lc){O00OO("\x6c\x63",C.href)
}if(OO000.rf){if(!O0OO000||!top||!top.document){O00OO("\x72\x66",document.location)
}}O0O0OO(D);
if(A){E=A
}else{E=NTPT_MAXTAGWAIT
}if(E>(1625+6874-8499)){var B;
if(C.click){C.tmpclck=C.onclick;
C.onclick=null;
B="\x69\x66\x20\x28\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x29\x20\x7b\x20\x4c\x6e\x6b\x4c\x63\x6b\x2e\x63\x6c\x69\x63\x6b\x28\x29\x3b\x20\x4c\x6e\x6b\x4c\x63\x6b\x2e\x6f\x6e\x63\x6c\x69\x63\x6b\x20\x3d\x20\x4c\x6e\x6b\x4c\x63\x6b\x2e\x74\x6d\x70\x63\x6c\x63\x6b\x3b\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x3d\x20\x6e\x75\x6c\x6c\x3b\x20\x7d"
}else{B="\x69\x66\x20\x28\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x29\x20\x7b\x20\x77\x69\x6e\x64\x6f\x77\x2e\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x20\x3d\x20\x22"+C.href+"\x22\x3b\x20\x4c\x6e\x6b\x4c\x63\x6b\x20\x3d\x20\x6e\x75\x6c\x6c\x3b\x20\x7d"
}OO0O0OO(O0000,B,E);
return false
}LnkLck=null;
return true
}function O000OO0(A,C,B){var D;
if(!A||!A.submit){return true
}if(FrmLck){return false
}FrmLck=A;
O0O0OO(C);
if(B){D=B
}else{D=NTPT_MAXTAGWAIT
}if(D>(5271+4406-9677)){A.tmpsbmt=A.onsubmit;
A.onsubmit=null;
OO0O0OO(O0000,"\x69\x66\x20\x28\x20\x46\x72\x6d\x4c\x63\x6b\x20\x29\x20\x7b\x20\x46\x72\x6d\x4c\x63\x6b\x2e\x73\x75\x62\x6d\x69\x74\x28\x29\x3b\x20\x46\x72\x6d\x4c\x63\x6b\x2e\x6f\x6e\x73\x75\x62\x6d\x69\x74\x20\x3d\x20\x46\x72\x6d\x4c\x63\x6b\x2e\x74\x6d\x70\x73\x62\x6d\x74\x3b\x20\x46\x72\x6d\x4c\x63\x6b\x20\x3d\x20\x6e\x75\x6c\x6c\x3b\x20\x7d",D);
return false
}FrmLck=null;
return true
}var O0000OO=NTPT_IMGSRC;
var OO000=NTPT_FLDS;
var O00OO0=OO0OO("\x4e\x54\x50\x54\x5f\x47\x4c\x42\x4c\x43\x4f\x4f\x4b\x49\x45\x53",null);
var OOOO0O=OO0OO("\x4e\x54\x50\x54\x5f\x50\x47\x43\x4f\x4f\x4b\x49\x45\x53",null);
var OOO00O0=OO0OO("\x4e\x54\x50\x54\x5f\x53\x45\x54\x5f\x49\x44\x43\x4f\x4f\x4b\x49\x45",false);
var OO0OO0=OO0OO("\x4e\x54\x50\x54\x5f\x49\x44\x43\x4f\x4f\x4b\x49\x45\x5f\x4e\x41\x4d\x45","\x53\x61\x6e\x65\x49\x44");
var OO00O00=OO0OO("\x4e\x54\x50\x54\x5f\x49\x44\x43\x4f\x4f\x4b\x49\x45\x5f\x44\x4f\x4d\x41\x49\x4e",null);
var OO0OOOO=OO0OO("\x4e\x54\x50\x54\x5f\x49\x44\x43\x4f\x4f\x4b\x49\x45\x5f\x45\x58\x50\x49\x52\x45",155520000);
var O00O00O=OO0OO("\x4e\x54\x50\x54\x5f\x48\x54\x54\x50\x53\x49\x4d\x47\x53\x52\x43","");
var O0OO000=OO0OO("\x4e\x54\x50\x54\x5f\x50\x47\x52\x45\x46\x54\x4f\x50",OO0OO("\x4e\x54\x50\x54\x5f\x47\x4c\x42\x4c\x52\x45\x46\x54\x4f\x50",false));
var OO00000=OO0OO("\x4e\x54\x50\x54\x5f\x4e\x4f\x49\x4e\x49\x54\x49\x41\x4c\x54\x41\x47",false);
var ntptAddPair=O00OO;
var ntptDropPair=O0OO0O0;
var ntptEventTag=O0O0OO;
var ntptLinkTag=O00OO0O;
var ntptSubmitTag=O000OO0;
var OOO00=new Array();
var OOOOO0=new Object();
var OOOO0=Array((791+3540-4321));
var O0000;
for(O0000=(5508+3590-9098);
O0000<OOOO0.length;
O0000++){OOOO0[O0000]=null
}var LnkLck=null;
var FrmLck=null;
O00OO("\x6a\x73","\x31");
O00OO("\x74\x73",O000O00());
if(OO000.lc){O00OO("\x6c\x63",document.location)
}if(OO000.rf){var OOO0OO;
if(O0OO000&&top&&top.document){OOO0OO=top.document.referrer
}else{OOO0OO=document.referrer
}O00OO("\x72\x66",OOO0OO)
}if(self.screen){if(OO000.rs){O00OO("\x72\x73",self.screen.width+"\x78"+self.screen.height)
}if(OO000.cd){O00OO("\x63\x64",self.screen.colorDepth)
}}if(OO000.ln){var OOO0O;
if(navigator.language){OOO0O=navigator.language
}else{if(navigator.userLanguage){OOO0O=navigator.userLanguage
}else{OOO0O=""
}}if(OOO0O.length>(1122+2203-3323)){OOO0O=OOO0O.substring((3653+3555-7208),(390+8395-8783))
}OOO0O=OOO0O.toLowerCase();
O00OO("\x6c\x6e",OOO0O)
}if(OO000.tz){var OO0O0;
var O0O00O=new Date();
var O0O00=O0O00O.getTimezoneOffset();
var O0OO00;
OO0O0="\x47\x4d\x54";
if(O0O00!=(4628+4348-8976)){if(O0O00>(1907+6772-8679)){OO0O0+="\x20\x2d"
}else{OO0O0+="\x20\x2b"
}O0O00=Math.abs(O0O00);
O0OO00=Math.floor(O0O00/(2168+3391-5499));
O0O00-=O0OO00*(3131+4046-7117);
if(O0OO00<(5094+969-6053)){OO0O0+="\x30"
}OO0O0+=O0OO00+"\x3a";
if(O0O00<(2977+208-3175)){OO0O0+="\x30"
}OO0O0+=O0O00
}O00OO("\x74\x7a",OO0O0)
}if(OO000.jv){var O0000O;
if(navigator.javaEnabled()){O0000O="\x31"
}else{O0000O="\x30"
}O00OO("\x6a\x76",O0000O)
}var O0OO0=new Array();
var O00O0OO=false;
if(OO000.ck){var O0O0O0;
var O00O0,O0OOO0;
if(O00OO0){for(O0O0O0=(2170+7306-9476);
O0O0O0<O00OO0.length;
O0O0O0++){O0OO0[O00OO0[O0O0O0]]=""
}}if(OOOO0O){for(O0O0O0=(6954+931-7885);
O0O0O0<OOOO0O.length;
O0O0O0++){O0OO0[OOOO0O[O0O0O0]]=""
}}for(OO00O in O0OO0){O00O0=OOOO00(OO00O);
if(O00O0){O0OO0[OO00O]=O00O0
}}if(OOO00O0){O00O0=OOOO00(OO0OO0);
if(O00O0){O0OO0[OO0OO0]=O00O0;
O00O0OO=true
}}O0OOO0=O00000O(O0OO0);
if(O0OOO0!=""){O00OO("\x63\x6b",O0OOO0)
}}O000000();
if(!OO00000){OOOOO0O("")
}if(OOO00O0&&!O00O0OO){var O00O0=OOOO00(OO0OO0);
if(!O00O0){O00O0=O0O000O();
OOOO000(OO0OO0,O00O0,OO0OOOO,OO00O00);
if(OO000.ck&&OOOO00(OO0OO0)){O0OO0[OO0OO0]=O00O0;
var O0OOO0=O00000O(O0OO0);
if(O0OOO0!=""){O00OO("\x63\x6b",O0OOO0);
O000000()
}}}};