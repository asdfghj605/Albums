window.onload=function(){
    waterfall('main','box');

    var dataInt = {'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},]};

    window.onscroll=function(){
        if (checkScrollSlide){
            var oParent = document.getElementById('main');
            for(var i=0; i<dataInt.data.length; i++){
                var oBox = document.createElement('div');
                oBox.className = 'box';
                oParent.appendChild(oBox);
                var oPic = document.createElement('div');
                oPic.className = 'pic';
                oBox.appendChild(oPic);
                var oImage = document.createElement('img');
                oImage.src = 'images/' + dataInt.data[i].src;
                oPic.appendChild(oImage);
            }
            waterfall('main','box');
        }
    }
}


function waterfall(parent,box){
    var oParent = document.getElementById(parent);
    var oBoxs = getClass(oParent,box);
    var oBoxW = oBoxs[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth/oBoxW);

    oParent.style.cssText = "width:" + oBoxW*cols + "px; margin: 0 auto;"
    var hArr = new Array();

    for(var i=0; i<oBoxs.length; i++){
        if(i<cols){
            hArr.push(oBoxs[i].offsetHeight);
        }
        else{
            var minH = Math.min.apply(null,hArr);
            var index = getIndexMinH(hArr,minH);
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
	        oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
		    hArr[index]+=oBoxs[i].offsetHeight;
         }
    }
}



function getClass(dad,CLN){
    var oElements = dad.getElementsByTagName('*');
    var boxArr = new Array();
    for(var i=0; i<oElements.length; i++){
        if(oElements[i].className == CLN){
            boxArr.push(oElements[i]);
        }
    }
    return boxArr;
};


function getIndexMinH(arr,val){
    for(var i in arr){
        if(arr[i]==val){
            return i;    
        }
    }
}



function checkScrollSlide(){
    var oParent = document.getElementById('main');
    var oBoxs = getClass(oParent,'box');
    var lastTop = oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
    var view = document.body.clientHeight || document.documentElement.clientHeight;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return (view+scrollTop>lastTop)?true:false;
}


