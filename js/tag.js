/**
 *author:jr312;
 *e-mail:2680934747@qq.com;
 * 
 **/

function viewBackground(obj,box){
	var str="<ul class='cl'>";
	for(var i=0;i<obj.length;i++){
		str+='<li>'+obj[i].name+'</li>';
	}
	str+='</ul>';
	box.innerHTML=str;
	var w = window.getComputedStyle(box).width;
	var ul=document.getElementsByTagName('ul')[0];
	ul.style.cssText='list-style: none;overflow: hidden;margin:0 auto;width:'+w+';padding:0;';
	var colors=['#cc3a3a','#5dcc3a','#3accab','#3a75cc','#673acc','#cc3aa8','#cc3a45','#996699','#00CC00'];
	var lis=document.getElementsByTagName('li');
	for(var i=0;i<lis.length;i++){
		var Index = Math.floor(Math.random()*colors.length);
		lis[i].style.cssText='color:#fff;background:'+colors[Index]+';float: left;padding: 5px 10px;margin: 5px;cursor: pointer;border-radius: 5px 5px;';
	};
	var boxheight = window.getComputedStyle(box).height.split('px')[0];	
	for(var i=12;i<boxheight;i++){
		var ulheight = window.getComputedStyle(ul).height.split('px')[0];
		if(ulheight>boxheight){
			ul.style.cssText='font-size:'+(i-2)+'px;list-style: none;overflow: hidden;margin:0 auto;width:'+w+';padding:0;';
			break;
		}else{
			ul.style.cssText='font-size:'+i+'px;list-style: none;overflow: hidden;margin:0 auto;width:'+w+';padding:0;';
		}
	}
}

function viewBorder(obj,box){
	var str="<ul class='cl'>";
	for(var i=0;i<obj.length;i++){
		str+='<li>'+obj[i].name+'</li>';
	}
	str+='</ul>';
	box.innerHTML=str;
	var w = window.getComputedStyle(box).width;
	var ul=document.getElementsByTagName('ul')[0];
	ul.style.cssText='list-style: none;overflow: hidden;margin:0 auto;width:'+w+';padding:0;';
	var colors=['#cc3a3a','#5dcc3a','#3accab','#3a75cc','#673acc','#cc3aa8','#cc3a45','#996699','#00CC00'];
	var lis=document.getElementsByTagName('li');
	for(var i=0;i<lis.length;i++){
		var Index = Math.floor(Math.random()*colors.length);
		lis[i].style.cssText='color:'+colors[Index]+';border:1px solid'+colors[Index]+';float: left;padding: 5px 10px;margin: 5px;cursor: pointer;border-radius: 5px 5px;';
	};
	var boxheight = window.getComputedStyle(box).height.split('px')[0];	
	for(var i=12;i<boxheight;i++){
		var ulheight = window.getComputedStyle(ul).height.split('px')[0];
		if(ulheight>boxheight){
			ul.style.cssText='font-size:'+(i-2)+'px;list-style: none;overflow: hidden;margin:0 auto;width:'+w+';padding:0;';
			break;
		}else{
			ul.style.cssText='font-size:'+i+'px;list-style: none;overflow: hidden;margin:0 auto;width:'+w+';padding:0;';
		}
	}
}
