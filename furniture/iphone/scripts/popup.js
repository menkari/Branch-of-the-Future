var iPhonePopupButton=function popupButton(C){var A="OK";
var D="grey-button";
if(C===undefined||C===null){C={}
}if(C.className!==undefined&&C.className!==null){D=C.className
}if(C.text!==undefined&&C.text!=null){A=C.text
}var B=newEl("div",{className:"button "+D},A);
if(C.callback!==undefined||C.callback!==null){addEvent(B,"click",C.callback)
}return B
};
var iPhonePopup=function iphonePopup(){var K=null;
var I=null;
var E=null;
var D=null;
var A=null;
var C=null;
var J=280;
var H=180;
var B="";
var G=false;
var F=false;
return{init:function(){var L=this;
K=newEl("span",{className:"popup-title"});
I=newEl("div",{className:"popup-body"});
buttons=newEl("div",{className:"popup-buttons"});
D=newEl("div",{className:"popup-panel"},[K,I,buttons]);
E=newEl("div",{className:"popup"},D);
C=newEl("div",{className:"loader-panel"});
A=newEl("div",{className:"loader"},C);
B=navigator.userAgent.toLowerCase();
if(navigator.userAgent.indexOf("IEMobile")>-1){if(E.attachEvent){E.attachEvent("onclick",function(){L.hide()
})
}}$ac(document.body,E);
$ac(document.body,A);
G=true;
L.setOk()
},show:function(){var L=this;
closeKeypad();
hideAddressBar();
L.hideLoader();
L.updatePosition();
E.style.display="block";
addClass(D,"popup-show")
},updatePosition:function(){if(!G){return 
}var W=document.body.offsetHeight;
var R=document.body.offsetWidth;
var N=(D.offsetHeight)?D.offsetHeight:H;
var M=(C.offsetWidth)?C.offsetWidth:40;
var T=(C.offsetHeight)?C.offsetHeight:40;
var P=(window.pageYOffset&&window.pageYOffset>0)?window.pageYOffset:20;
var L=(window.innerHeight&&window.innerHeight>0)?window.innerHeight:480;
var Q=(window.innerWidth&&window.innerWidth>0)?window.innerWidth:320;
E.style.height=W+"px";
E.style.width="100%";
A.style.height=W+"px";
A.style.width="100%";
var U,O,S,V;
U=parseInt((R-J)/2,10);
O=parseInt(P+(L-N)/2,10);
if(B.indexOf("blackberry9000")>-1){O=90
}S=parseInt((R-M)/2,10);
V=parseInt(P+(L-T)/2,10);
D.style.left=U+"px";
D.style.top=O+"px";
C.style.left=S+"px";
C.style.top=V+"px"
},hide:function(){E.style.display="none"
},showLoader:function(){var L=this;
L.updatePosition();
A.style.display="block"
},hideLoader:function(){var L=this;
A.style.display="none"
},setConfirm:function(L,M){$dc(buttons);
addClass(buttons,"confirm-buttons");
$ac(buttons,L);
$ac(buttons,M)
},setOk:function(N){var M=this;
$dc(buttons);
var L=iPhonePopupButton({callback:function(){M.hide();
if(N!==undefined){N()
}}});
$ac(buttons,L)
},setTitle:function(L){K.innerHTML=L
},setBody:function(L){if(isScalar(L)){I.innerHTML=L
}else{$dc(I);
$ac(I,L)
}},debug:function(L){I.innerHTML+="<br>"+L
}}
}();
addEvent(window,"load",function(){iPhonePopup.init()
});
addEvent(window,"scroll",function(){iPhonePopup.updatePosition()
});
window.onorientationchange=function(){setTimeout("updatePosition()",100)
};