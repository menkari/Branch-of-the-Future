function $id(A){return document.getElementById(A)
}function $class(B){if(document.getElementsByClassName){return document.getElementsByClassName(B)
}else{var C=[];
var A=document.getElementsByTagName("*");
for(var D=0;
D<A.length;
D++){if((" "+A[D].className+" ").indexOf(" "+B+" ")>-1){C.push(A[D])
}}return C
}}function $name(A){return document.getElementsByTagName(A)
}function addEvent(B,A,C){if(B.addEventListener){B.addEventListener(A,C,false)
}else{if(B.attachEvent){B.attachEvent("on"+A,C,false)
}}}function newEl(D,C,A){var B=document.createElement(D);
if(C!==null&&C!==undefined){for(var E in C){switch(E.toLowerCase()){case"classname"||"class":B.className=C[E];
break;
case"colspan":B.colSpan=C[E];
break;
case"rowspan":B.rowSpan=C[E];
break;
case"htmlfor"||"for":B.htmlFor=C[E];
break;
default:B.setAttribute(E,C[E])
}}}if(A){if(isScalar(A)){B.innerHTML=A
}else{$ac(B,A)
}}return B
}function isScalar(A){var C=typeof (A);
var B=C==typeof (" ")||C==typeof (1)||C==typeof (1.2)||C==typeof (true)||!A;
return B
}function addClass(C,B){var A=C.className;
if(A===""||A===undefined){C.className=B;
return 
}else{if(!hasClass(C,B)){C.className+=" "+B
}}}function hasClass(B,A){var C=B.className;
if(C===""){return false
}else{var E=C.split(" ");
for(var D=0;
D<E.length;
D++){if(E[D]===A){return true
}}}return false
}function removeClass(B,A){if(!hasClass(B,A)){return false
}else{var D=B.className.split(" ");
var C=D.filter(A).join(" ");
B.className=C;
return true
}}function $ac(A,B){$nodeAction(B,function(C){A.appendChild(C)
})
}function $dc(A){while(A.firstChild){A.removeChild(A.firstChild)
}}function $nodeAction(B,A){if(is_array(B)){for(var D=0;
D<B.length;
D++){var C=B[D];
if(C.mainNode){C=C.mainNode
}A(C)
}}else{if(B.mainNode){B=B.mainNode
}A(B)
}}function is_array(A){return A.length&&A.push
}String.prototype.insertAtIndex=function(E,A){var B=this;
var C=B.substring(0,E);
var D=B.substring(E,B.length);
return(C+A+D)
};
String.prototype.removeAtIndex=function(D){var A=this;
var B=A.substring(0,D);
var C=A.substring(D+1,A.length);
return B+C
};
String.prototype.setCharAt=function(B,C){var A=this;
if(B>A.length-1){return A
}else{return A.substr(0,B)+C+A.substr(B+1)
}};
Array.prototype.copy=function(){var A=this;
return A.slice(0)
};
Array.prototype.filter=function(A){var C=this.copy();
if(is_array(A)){for(var B=0;
B<A.length;
B++){C=C.filter(A[B])
}}else{for(var B=0;
B<C.length;
B++){if(A===C[B]){C.splice(B,1)
}}}return C
};
function makeElementsClickable(){makeMenusClickable();
makeButtonsClickable();
makeNewWindows()
}var Selector=function(A,B){B=B===undefined?document:B;
return{find:function(C){if(document.querySelector&&document.querySelectorAll){return A==="all"?B.querySelectorAll(C):B.querySelector(C)
}else{return null
}}}
};
function find(C,A){var B=new Selector("all",A);
return B.find(C)
}function findOne(C,A){var B=new Selector("one",A);
return B.find(C)
}function makeClickable(C){var A=findOne("a",C);
if(A){var B=A.href;
if(removeClass(A,"new-window")){A.removeAttribute("href");
addEvent(C,"click",function(){window.open(B)
})
}else{if(Number(getIosVersion())<5){A.removeAttribute("href");
addEvent(C,"click",function(){window.location=B
})
}}}}function makeNewWindows(){var A=find("a.new-window");
if(A){for(var D=0;
D<A.length;
D++){var B=A[D];
if(removeClass(B,"new-window")){var C=B.href;
B.removeAttribute("href");
addEvent(B,"click",function(){window.open(C)
})
}}}}function makeMenusClickable(){var D=$class("menu");
var B=$class("panel");
var F=[D,B];
for(var C=0;
C<F.length;
C++){var E=F[C];
for(var A=0;
A<E.length;
A++){var G=E[A].children[0].children;
for(var H=0;
H<G.length;
H++){makeClickable(G[H])
}}}}function makeButtonsClickable(){var C=$class("button");
var D=[C];
for(var B=0;
B<D.length;
B++){var A=D[B];
for(var E=0;
E<A.length;
E++){makeClickable(A[E])
}}}function updateOrientation(){if(isProfile()){document.body.setAttribute("class","profile")
}else{document.body.setAttribute("class","landscape")
}try{iPhonePopup.updatePosition()
}catch(A){}hideAddressBar()
}function isProfile(){return(window.orientation==0||window.orientation==180)
}function hideAddressBar(){if(window.pageYOffset==0){window.scrollTo(0,1)
}}function closeKeypad(){var A=document.activeElement;
if(A){A.blur()
}}function gotoMainMenu(){var A=getCookie("PD-S-SESSION-ID");
if(A){iPhonePopup.setTitle("Sign Out");
iPhonePopup.setBody("If you return to the Main Menu you will be signed out of Mobile Banking");
iPhonePopup.setConfirm(iPhonePopupButton({text:"Cancel",callback:function(){iPhonePopup.hide()
}}),iPhonePopupButton({text:"Sign Out",callback:function(){document.location="/pkmslogout?filename=Iphone+Landing.html";
iPhonePopup.hide()
}}));
iPhonePopup.show()
}else{document.location="http://www.westpac.com.au/mobile"
}}function gotoMainMenu2(){document.location="http://www.westpac.com.au/mobile"
}function goToSignIn(){cleanUpSession();
document.location="https://online.westpac.com.au/mobile/"
}function cleanUpSession(){deleteCookie("ESIAuthenticated");
deleteCookie("temporarypassword");
deleteCookie("PLAB");
deleteCookie("OLBLocation");
deleteCookie("TransactionID");
deleteCookie("DP-SESSION-ID");
deleteCookie("boundary");
deleteCookie("checker");
deleteCookie("LtpaToken");
deleteCookie("esisapp")
}function setCookie(B,D,F,C){var G="";
if(F){var A=new Date();
var E=F*24*60*60*1000;
var H=E>0?E:0;
A.setTime(A.getTime()+E);
G=";expires="+A.toGMTString()+";Max-Age="+H
}if(C){document.cookie=B+"="+D+G+";domain="+C+";path=/"
}else{document.cookie=B+"="+D+G+";path=/"
}}function getCookie(B){var C=new RegExp(B+"=([^;]+);");
var A=C.exec(document.cookie);
if(A!=null){return A[1]
}return null
}function deleteCookie(F){var B=document.domain;
var D=B.split(".");
var E=D.filter(["co","nz","com","au"]);
for(var A=0;
A<E.length;
A++){var C=D.slice(A).join(".");
setCookie(F,"null",-3,C);
setCookie(F,"null",-3,"."+C)
}setCookie(F,"null",-3)
}function ios5NumberFix(){var A=["customerId","dobDay","dobMonth","dobYear","sms-code"];
if(getIosVersion()>=5){for(var B=0;
B<A.length;
B++){var C=document.getElementById(A[B]);
if(C&&C.getAttribute("type")=="number"){C.setAttribute("type","text");
C.setAttribute("pattern","[0-9]*")
}}}}function getIosVersion(){var D=navigator.userAgent;
var A=/iPhone OS [0-9]{1}/;
var C=D.match(A);
var B=-1;
if(C){B=C.toString().replace("iPhone OS ","")
}return B
}setTimeout(hideAddressBar,100);
addEvent(window,"load",makeElementsClickable);
addEvent(window,"load",updateOrientation);
addEvent(window,"load",ios5NumberFix);
window.onorientationchange=function(){updateOrientation()
};