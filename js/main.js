let taReview = document.getElementById('taReview');
let allRadius = document.getElementById('allRadius');

let radiousLT = document.getElementById('radiousLT');
let inputLT = document.getElementById('inputLT');

let radiousRT = document.getElementById('radiousRT');
let inputRT = document.getElementById('inputRT');

let radiousLB = document.getElementById('radiousLB');
let inputLB = document.getElementById('inputLB');

let radiousRB = document.getElementById('radiousRB');
let inputRB = document.getElementById('inputRB');

let widthBorder = document.getElementById('widthBorder');
let border1 = document.getElementById('border1');
let numBorder = document.getElementById('numBorder');

let borderColor = document.getElementById('borderColor');
let radiousColor = document.getElementById('radiousColor');

let borderSolid = document.getElementById('borderSolid');
let borderDotted = document.getElementById('borderDotted');
let borderDashed = document.getElementById('borderDashed');
let borderDouble = document.getElementById('borderDouble');
let borderGroove = document.getElementById('borderGroove');
let borderRidge = document.getElementById('borderRidge');
let borderInset = document.getElementById('borderInset');
let borderOutset = document.getElementById('borderOutset');
let borderHidden = document.getElementById('borderHidden');
let borderNone = document.getElementById('borderNone');

let allBorder = document.getElementById('allBorder');
let topBorder = document.getElementById('topBorder');
let rightBorder = document.getElementById('rightBorder');
let bottomBorder = document.getElementById('bottomBorder');
let leftBorder = document.getElementById('leftBorder');

let opacidad1 = document.getElementById('opacidad1');4
taReview.style.borderStyle = "solid";
let stilo;

radiousLT.oninput = function(){
    inputLT.value=radiousLT.value;
    if(!allRadius.checked){
        taReview.style.borderTopLeftRadius = radiousLT.value+"px";
    }
    else{
        inputRT.value=radiousLT.value;
        inputLB.value=radiousLT.value;
        inputRB.value=radiousLT.value;
        radiousRT.value=radiousLT.value;
        radiousLB.value=radiousLT.value;
        radiousRB.value=radiousLT.value;
        taReview.style.borderRadius = radiousLT.value+"px";
    }
};

radiousRT.oninput = function(){
    inputRT.value=radiousRT.value;
    taReview.style.borderTopRightRadius = radiousRT.value+"px";
};

radiousLB.oninput = function(){
    inputLB.value=radiousLB.value;
    taReview.style.borderBottomLeftRadius = radiousLB.value+"px";
};

radiousRB.oninput = function(){
    inputRB.value=radiousRB.value;
    taReview.style.borderBottomRightRadius = radiousRB.value+"px";
};

allRadius.onclick = function(){
    if(!allRadius.checked){
        taReview.style.borderRadius = "0px";
        inputRT.value=0;
        inputLB.value=0;
        inputRB.value=0;
        radiousRT.value=0;
        radiousLB.value=0;
        radiousRB.value=0;
        taReview.style.borderTopLeftRadius = radiousLT.value+"px";
    }
    else{
        inputRT.value=radiousLT.value;
        inputLB.value=radiousLT.value;
        inputRB.value=radiousLT.value;
        radiousRT.value=radiousLT.value;
        radiousLB.value=radiousLT.value;
        radiousRB.value=radiousLT.value;
        taReview.style.borderRadius = radiousLT.value+"px";
    }
};

widthBorder.oninput = function(){
    taReview.style.borderWidth = widthBorder.value+"px";
    numBorder.innerHTML=widthBorder.value;
};

border1.onclick = function(){
    taReview.style.borderWidth = "1px";
    widthBorder.value = 1;
    numBorder.innerHTML = 1;
};

borderColor.oninput = function(){
    var r=parseInt(borderColor.value.substring(1,3), 16);
    var g=parseInt(borderColor.value.substring(3,5), 16);
    var b=parseInt(borderColor.value.substring(5,7), 16);
    taReview.style.borderColor = "rgb("+r+", "+g+", "+b+", "+radiousColor.value/100+")"
};

radiousColor.oninput = function(){
    var r=parseInt(borderColor.value.substring(1,3), 16);
    var g=parseInt(borderColor.value.substring(3,5), 16);
    var b=parseInt(borderColor.value.substring(5,7), 16);
    taReview.style.borderColor = "rgb("+r+", "+g+", "+b+", "+radiousColor.value/100+")"
};


opacidad1.onclick = function(){
    var r=parseInt(borderColor.value.substring(1,3), 16);
    var g=parseInt(borderColor.value.substring(3,5), 16);
    var b=parseInt(borderColor.value.substring(5,7), 16);
    taReview.style.borderColor = "rgb("+r+", "+g+", "+b+", "+1+")";
    radiousColor.value = "100";
};

function apagarBotones(){
    borderSolid.style.background = "#eeeeee";
    borderDotted.style.background = "#eeeeee";
    borderDashed.style.background = "#eeeeee";
    borderDouble.style.background = "#eeeeee";
    borderGroove.style.background = "#eeeeee";
    borderRidge.style.background = "#eeeeee";
    borderInset.style.background = "#eeeeee";
    borderOutset.style.background = "#eeeeee";
    borderHidden.style.background = "#eeeeee";
    borderNone.style.background = "#eeeeee";
};

function apagarBotones2(){
    allBorder.style.background = "#eeeeee";
    topBorder.style.background = "#eeeeee";
    rightBorder.style.background = "#eeeeee";
    bottomBorder.style.background = "#eeeeee";
    leftBorder.style.background = "#eeeeee";
};

borderSolid.onclick = function(){
    apagarBotones();
    borderSolid.style.backgroundColor = "#D0E4F5";
    taReview.style.borderStyle = "solid";
};

borderDotted.onclick = function(){
    apagarBotones();
    borderDotted.style.backgroundColor = "#D0E4F5";
    taReview.style.borderStyle = "dotted";
};

borderDashed.onclick = function(){
    apagarBotones();
    borderDashed.style.backgroundColor = "#D0E4F5";
    taReview.style.borderStyle = "dashed";
};
borderDouble.onclick = function(){
    apagarBotones();
    borderDouble.style.backgroundColor = "#D0E4F5";
    taReview.style.borderStyle = "double";
};
borderGroove.onclick = function(){
    apagarBotones();
    borderGroove.style.backgroundColor = "#D0E4F5";
    taReview.style.borderStyle = "groove";
};
borderRidge.onclick = function(){
    apagarBotones();
    borderRidge.style.backgroundColor = "#D0E4F5";
    taReview.style.borderStyle = "ridge";
};
borderInset.onclick = function(){
    apagarBotones();
    borderInset.style.backgroundColor = "#D0E4F5";
    taReview.style.borderStyle = "inset";
};
borderOutset.onclick = function(){
    apagarBotones();
    borderOutset.style.backgroundColor = "#D0E4F5";
    taReview.style.borderStyle = "outset";
};
borderHidden.onclick = function(){
    apagarBotones();
    borderHidden.style.backgroundColor = "#D0E4F5";
    taReview.style.borderStyle = "hidden";
};
borderNone.onclick = function(){
    apagarBotones();
    borderNone.style.backgroundColor = "#D0E4F5";
    taReview.style.borderStyle = "none";
};

allBorder.onclick = function(){
    apagarBotones2();
    allBorder.style.backgroundColor = "#D0E4F5";
    if(!taReview.style.borderStyle == ""){
        stilo = taReview.style.borderStyle;
    }
    taReview.style.border = widthBorder.value+"px"+ " "+stilo+" "+borderColor.value;
};

topBorder.onclick = function(){
    apagarBotones2();
    topBorder.style.backgroundColor = "#D0E4F5";
    if(!taReview.style.borderStyle == ""){
        stilo = taReview.style.borderStyle;
    }
    taReview.style.borderTop = widthBorder.value+"px"+ " "+stilo+" "+borderColor.value;
/*     console.log(widthBorder.value+"px"+ " "+stilo+" "+borderColor.value); */
    taReview.style.borderLeft = "0px";
    taReview.style.borderTop = "0px";
    taReview.style.borderRight = "0px";
};