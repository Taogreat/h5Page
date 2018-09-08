		window.onload=function(){
			var arrow=document.querySelector("#wrap > #head > .headMain > .arrow");
			var hlis=document.querySelectorAll("#wrap > #head > .headMain > .nav > ul > li");
			var ups=document.querySelectorAll("#wrap > #head > .headMain > .nav > ul > li .up");
			var content=document.querySelector("#wrap > #content");
			var clis=document.querySelectorAll("#wrap > #content > .list > li");
			var head=document.querySelector("#wrap > #head");
			var clist=document.querySelector("#wrap > #content > .list");
			var home1lis=document.querySelectorAll("#wrap > #content > .list >.home .home1 > li");
			var home2lis=document.querySelectorAll("#wrap > #content > .list >.home .home2 > li");
			var home1=document.querySelector("#wrap > #content > .list >.home .home1");
			var aboutUls=document.querySelectorAll("#wrap > #content > .list >.about .about3 > .item > ul");
			var dotLis=document.querySelectorAll("#wrap > #content > .dot > li");
			var teamLis=document.querySelectorAll("#wrap > #content > .list >.team .team3 ul li");
			var team3=document.querySelector("#wrap > #content > .list >.team .team3");
			var music=document.querySelector("#wrap > #head > .headMain > .music");
			var audio=document.querySelector("#wrap > #head > .headMain > .music > audio");
			var line=document.querySelector("#wrap > #mask > .line");
			var mians=document.querySelectorAll("#wrap > #mask > div");
			var mask=document.querySelector("#wrap > #mask");
			//同步当前屏
			var now=0;
			
			//上一屏
			var prevIndex=0;
			
			
			//开场动画
			loadingAn();
			function loadingAn(){
				var arr = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png','greenLine.png'];
				var flag=0;
				for(var i=0;i<arr.length;i++){
					var img=new Image();
					img.src="img/h5Project/"+arr[i];
					img.onload=function(){
						flag++;
						line.style.width=flag/arr.length*100+"%";
					}
				}
				line.addEventListener("transitionend",function(){
					if(flag==arr.length){
						for(var i=0;i<mians.length;i++){
							mians[i].style.height=0+"px";
						}
						this.style.display="none";
					}
				})
				
				mians[0].addEventListener("transitionend",function(){
					mask.remove();
					audio.play();
					home3D();
				})
			}
			
			//音频
			music.onclick=function(){
				if(audio.paused){
					audio.play();
					music.style.background ="url(../img/h5Project/musicon.gif)";
				}else{
					audio.pause();
					music.style.background ="url(../img/h5Project/musicoff.gif)";
				}
			}
			//入场动画
			var anArr=[
				{inAn:function(){
					var home1=document.querySelector("#wrap > #content > .list >.home .home1");
					var home2=document.querySelector("#wrap > #content > .list >.home .home2");
					home1.style.transform="translateY(0)";
					home1.style.opacity=1;
					home2.style.transform="translateY(0)";
					home2.style.opacity=1;
				},
				outAn:function(){
					var home1=document.querySelector("#wrap > #content > .list >.home .home1");
					var home2=document.querySelector("#wrap > #content > .list >.home .home2");
					home1.style.transform="translateY(-400px)";
					home1.style.opacity=0;
					home2.style.transform="translateY(200px)";
					home2.style.opacity=0;
				}},
				{inAn:function(){
					var plane1=document.querySelector("#content .course .plane1");
					var plane2=document.querySelector("#content .course .plane2");
					var plane3=document.querySelector("#content .course .plane3");
					plane1.style.transform="translate(0px,0px)";
					plane2.style.transform="translate(0px,0px)";
					plane3.style.transform="translate(0px,0px)";
				},
				outAn:function(){
					var plane1=document.querySelector("#content .course .plane1");
					var plane2=document.querySelector("#content .course .plane2");
					var plane3=document.querySelector("#content .course .plane3");
					plane1.style.transform = "translate(-200px,-200px)";
					plane2.style.transform = "translate(-200px,200px)";
					plane3.style.transform = "translate(200px,-200px)";
				}},
				{inAn:function(){
					var pencel1 = document.querySelector("#content  .works .pencel1");
					var pencel2 = document.querySelector("#content  .works .pencel2");
					var pencel3 = document.querySelector("#content  .works .pencel3");
					
					pencel1.style.transform = "translateY(0px)";
					pencel2.style.transform = "translateY(0px)";
					pencel3.style.transform = "translateY(0px)";
				},
				outAn:function(){
					var pencel1 = document.querySelector("#content  .works .pencel1");
					var pencel2 = document.querySelector("#content  .works .pencel2");
					var pencel3 = document.querySelector("#content  .works .pencel3");
					
					pencel1.style.transform = "translateY(-100px)";
					pencel2.style.transform = "translateY(100px)";
					pencel3.style.transform = "translateY(100px)";
				}},
				{inAn:function(){
					var Rect1 = document.querySelector("#wrap > #content > .list >.about .about3 > .item:nth-of-type(1)");
					var Rect2 = document.querySelector("#wrap > #content > .list >.about .about3 > .item:nth-of-type(2)");
					
					Rect1.style.transform = "rotate(0deg)";
					Rect2.style.transform = "rotate(0deg)";
				},
				outAn:function(){
					var Rect1 = document.querySelector("#wrap > #content > .list >.about .about3 > .item:nth-of-type(1)");
					var Rect2 = document.querySelector("#wrap > #content > .list >.about .about3 > .item:nth-of-type(2)");
					
					Rect1.style.transform = "rotate(45deg)";
					Rect2.style.transform = "rotate(-45deg)";
				}},
				{inAn:function(){
					var Rect1 = document.querySelector("#wrap > #content > .list >.team .team1");
					var Rect2 = document.querySelector("#wrap > #content > .list >.team .team2");
					
					Rect1.style.transform = "translateX(0px)";
					Rect2.style.transform = "translateX(0px)";
				},
				outAn:function(){
					var Rect1 = document.querySelector("#wrap > #content > .list >.team .team1");
					var Rect2 = document.querySelector("#wrap > #content > .list >.team .team2");
					
					Rect1.style.transform = "translateX(-200px)";
					Rect2.style.transform = "translateX(200px)";
				}}
				]
			for(var i=0;i<anArr.length;i++){
				anArr[i]["outAn"]();
			}
			
			setTimeout(function(){
				anArr[0]["inAn"]();
			},2000)
			
			//窗口或框架被调整尺寸 
			window.onresize=function(){
				contentBind();
				arrow.style.left=hlis[now].offsetLeft+hlis[now].offsetWidth/2-arrow.offsetWidth/2+"px";
				clist.style.top=-now*(document.documentElement.clientHeight-head.offsetHeight)+"px";
			}
			//鼠标滚动
			var timer=0;
			if(content.addEventListener){
				content.addEventListener("DOMMouseScroll",function(e){
					e=e||event;
					clearTimeout(timer);
					timer=setTimeout(function(){fn(e)},200);
				})
			}
			content.onmousewheel=function(e){
				e=e||event;
				clearTimeout(timer);
				timer=setTimeout(function(){fn(e)},200);
			}
			var dir='';
			function fn(e){
				if(e.wheelDelta){
					dir = e.wheelDelta>0?"up":"down";
				}else if(e.detail){
					dir = e.detail<0?"up":"down";
				}
				prevIndex=now;
				switch(dir){
					case 'up':
						if(now > 0){
							now--;
							move(now);
						}
						break;
					case 'down':
						if(now < clis.length-1){
							now++;
							move(now);
						}
						break;
				}
			}
			//头部交互
			headBind();
			function headBind(){
				ups[0].style.width="100%";
				arrow.style.left=hlis[0].offsetLeft+hlis[0].offsetWidth/2-arrow.offsetWidth/2+"px";
				for(var i=0;i<hlis.length;i++){
					hlis[i].index=i;
					hlis[i].onclick=function(){
						prevIndex=now;
						move(this.index);
						now=this.index;
					}
				}
				for(var i=0;i<dotLis.length;i++){
					dotLis[i].index=i;
					dotLis[i].onclick=function(){
						prevIndex=now;
						move(this.index);
						now=this.index;
					}
				}
			}
			//核心函数
			function move(index){
				for(var i=0;i<ups.length;i++){
						ups[i].style.width="";
				}
				arrow.style.left=hlis[index].offsetLeft+hlis[index].offsetWidth/2-arrow.offsetWidth/2+"px";
				ups[index].style.width="100%";
				clist.style.top=-index*(document.documentElement.clientHeight-head.offsetHeight)+"px";
				for(var i=0;i<dotLis.length;i++){
						dotLis[i].className="";
				}
				dotLis[index].className="active";
				if(anArr[index]["inAn"]&&typeof anArr[index]["inAn"]==="function"){
					anArr[index]["inAn"]();
				}
				if(anArr[prevIndex]["outAn"]&&typeof anArr[prevIndex]["outAn"]==="function"){
					anArr[prevIndex]["outAn"]();
				}
			}
		
			//内容区交互
			contentBind();
			function contentBind(){
				content.style.height=document.documentElement.clientHeight-head.offsetHeight+"px";
				for(var i=0;i<clis.length;i++){
					clis[i].style.height=document.documentElement.clientHeight-head.offsetHeight+"px";
				}
			}
			
			
			//第一屏
			var oldIndex=0;
			var timer3D=0;
			var autoIndex=0;
			//home3D();
			function home3D(){
				for(var i=0;i<home2lis.length;i++){
					home2lis[i].index=i;
					home2lis[i].onclick=function(){	
						clearInterval(timer3D);
						for(var i=0;i<home2lis.length;i++){
							home2lis[i].classList.remove("active");
						}
						this.classList.add("active");
						//从左往右
						if(oldIndex < this.index){
							home1lis[oldIndex].classList.remove("rightHide");
							home1lis[oldIndex].classList.remove("rightShow");
							home1lis[oldIndex].classList.remove("leftShow");
							home1lis[oldIndex].classList.add("leftHide");
							
							home1lis[this.index].classList.remove("rightHide");
							home1lis[this.index].classList.remove("leftHide");
							home1lis[this.index].classList.remove("leftShow");
							home1lis[this.index].classList.add("rightShow");
						}
						//从右往左
						if(oldIndex > this.index){
							home1lis[oldIndex].classList.remove("rightShow");
							home1lis[oldIndex].classList.remove("leftShow");
							home1lis[oldIndex].classList.remove("leftHide");
							home1lis[oldIndex].classList.add("rightHide");
							
							home1lis[this.index].classList.remove("rightHide");
							home1lis[this.index].classList.remove("rightShow");
							home1lis[this.index].classList.remove("leftHide");
							home1lis[this.index].classList.add("leftShow");
						}
						
						oldIndex=this.index;
						autoIndex=this.index;
						move();
					}
				}
				
				move();
				function move(){
					clearInterval(timer3D);
					timer3D=setInterval(function(){
						autoIndex++;
						if(autoIndex==home1lis.length){
							autoIndex=0;
						}
						for(var i=0;i<home2lis.length;i++){
							home2lis[i].classList.remove("active");
						}
						home2lis[autoIndex].classList.add("active");
						
						
						home1lis[oldIndex].classList.remove("rightHide");
						home1lis[oldIndex].classList.remove("rightShow");
						home1lis[oldIndex].classList.remove("leftShow");
						home1lis[oldIndex].classList.add("leftHide");
						
						home1lis[autoIndex].classList.remove("rightHide");
						home1lis[autoIndex].classList.remove("leftHide");
						home1lis[autoIndex].classList.remove("leftShow");
						home1lis[autoIndex].classList.add("rightShow");
						
						oldIndex=autoIndex;
					},3000)
				}
				
				home1.onmouseenter=function(){
					clearInterval(timer3D);
				}
				
				home1.onmouseleave=function(){
					move();
				}
			}
		
			
			//第四屏
			
			picBoom();
			function picBoom(){
				for(var i=0;i<aboutUls.length;i++){
					change(aboutUls[i]);
				}
				function change(UL){
					var src=UL.dataset.src;
					var w=UL.offsetWidth/2;
					var h=UL.offsetHeight/2;
					for(var i=0;i<4;i++){
						var abLi=document.createElement("li");
						var abImg=document.createElement("img");
						abImg.src=src;
						abLi.style.width=w+"px";
						abLi.style.height=h+"px";
						//0	 0	0
						//-w 0	1
						//0 -h	2
						//-w -h	3
						abImg.style.left=-(i%2)*w+"px";
						abImg.style.top=-Math.floor(i/2)*h+"px";
						abLi.appendChild(abImg);
						UL.appendChild(abLi);

					}
					UL.onmouseenter=function(){
						//0	 h	0
						//-2w 0	1
						//w -h	2
						//-w -2h	3
						var imgs=this.querySelectorAll("li > img");
						imgs[0].style.top=h+"px";
						imgs[1].style.left=-2*w+"px";
						imgs[2].style.left=w+"px";
						imgs[3].style.top=-2*h+"px";
					}
					UL.onmouseleave=function(){
						var imgNodes = this.querySelectorAll("li>img");
						imgNodes[0].style.top = 0+"px";
						imgNodes[1].style.left = -w+"px";
						imgNodes[2].style.left = 0+"px";
						imgNodes[3].style.top = -h+"px";
					}
					
				}
			}
			
			
			//第五屏
			
			biubiu();
			function biubiu(){
				var cs=null;
				var t1=0;
				var t2=0;
				for(var i=0;i<teamLis.length;i++){
					teamLis[i].onmouseenter=function(){
						for(var i=0;i<teamLis.length;i++){
							teamLis[i].style.opacity=0.5;
						}
						this.style.opacity=1;
						addCanvas();
						cs.style.left = this.offsetLeft+"px";
					}
					
				}
				function addCanvas(){
					if(!cs){
						cs=document.createElement("canvas");
						cs.width=teamLis[0].offsetWidth;
						cs.height= teamLis[0].offsetHeight*2/3;
						team3.appendChild(cs);
						qiPao();
					}
					cs.onmouseleave=function(){
						for(var i=0;i<teamLis.length;i++){
							teamLis[i].style.opacity=1;
						}
						removeCanvas();
					}
				}
				function removeCanvas(){
					cs.remove();
					cs=null;
					clearInterval(t1);
					clearInterval(t2);
				}
				
				//气泡
				function qiPao(){
					if(cs.getContext) {
						var ctx = cs.getContext('2d');
						var arr = [];
						t1=setInterval(function() {
							ctx.clearRect(0, 0, cs.width, cs.height);
							for(var i = 0; i < arr.length; i++) {
								arr[i].deg += 5;
								//						arr[i].y = arr[i].startX - (arr[i].deg*Math.PI/180)*arr[i].step/2 ;
								//						arr[i].x = arr[i].startY + Math.sin( arr[i].deg*Math.PI/180 )*arr[i].step*2;
								arr[i].x = arr[i].startX + Math.sin(arr[i].deg * Math.PI / 180) * arr[i].step * 2;
								arr[i].y = arr[i].startY - (arr[i].deg * Math.PI / 180) * arr[i].step;
		
								if(arr[i].y <= 50) {
									arr.splice(i, 1)
								}
							}
							for(var i = 0; i < arr.length; i++) {
								ctx.save();
								ctx.fillStyle = "rgba(" + arr[i].red + "," + arr[i].green + "," + arr[i].blue + "," + arr[i].alp + ")";
								ctx.beginPath();
								ctx.arc(arr[i].x, arr[i].y, arr[i].r, 0, 2 * Math.PI);
								ctx.fill();
								ctx.restore();
							}
						}, 1000 / 60);
						t2=setInterval(function() {
							var r = Math.random() * 6 + 2;
							var x = Math.random() * cs.width;
							var y = Math.random() * cs.height - r;
							var red = Math.round(Math.random() * 255);
							var green = Math.round(Math.random() * 255);
							var blue = Math.round(Math.random() * 255);
							var alp = 1;
							var deg = 0;
							var startX = x;
							var startY = y;
							var step = Math.random() * 20 + 10;
							arr.push({
								x: x,
								y: y,
								r: r,
								red: red,
								green: green,
								blue: blue,
								alp: alp,
								step: step,
								startX: startX,
								startY: startY,
								deg: deg
							});
						}, 50);
					}
				}
			}
	}