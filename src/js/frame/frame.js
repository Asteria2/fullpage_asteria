import move from "./move/move"
import callback from "./wheel/wheel"
window.onload=function () {
  var navLiNodes=document.querySelectorAll("#app .head .headMain .nav .item");
  var arrow=document.querySelector("#app .head .headMain .arrow ");
  var music=document.querySelector("#app .head .headMain .music");
  var audio=document.querySelector('#app .head .headMain .music audio');
  var contentNode=document.querySelector("html #app .content, body #app .content");
  var contentLiNodes=document.querySelectorAll("html #app .content .list li, body #app .content .list li");
  var listNode=document.querySelector("html #app .content .list li, body #app .content .list");
  var points=document.querySelector('html #app .content .points li, body #app .content .points');
  var pointNodes=document.querySelectorAll('html #app .content .points li, body #app .content .points li');
  var homeNode=navLiNodes[0];

  arrow.style.left=(homeNode.offsetLeft+(homeNode.offsetWidth/2)-(arrow.offsetWidth/2))+'px';
//音乐播放
  music.addEventListener('click',function () {
    if(audio.paused){
      audio.play();
      music.classList.remove('active');
    }else{
      audio.pause();
      music.classList.add('active');
    }
  });
//头部交互
//   navLiNodes.forEach(function (liNode) {
//     liNode.onclick=function () {
//       navLiNodes.forEach(function (liNode) {
//         liNode.classList.remove("active");
//       });
//       liNode.classList.add("active");
//       arrow.style.left=(liNode.offsetLeft+(liNode.offsetWidth/2)-(arrow.offsetWidth/2))+'px';
//
//     }
//   });
 if(navLiNodes.length===pointNodes.length){
   for(var i=0;i<navLiNodes.length;i++){
     navLiNodes[i].index=i;
     pointNodes[i].index=i;
     navLiNodes[i].onclick=pointNodes[i].onclick=function () {
       move(this.index);
     }
   }
 }
  //内容交互
  contentLiNodes.forEach(function (liNode) {
    console.log(contentNode.offsetHeight);
    liNode.style.height=contentNode.offsetHeight+'px';
  });

 var timer=0;
 contentNode.index=0;
if(contentNode.addEventListener){
  contentNode.addEventListener('DOMMouseScroll',function (event) {
    clearInterval(timer);
    timer=setTimeout(function () {
      callback(event,contentNode.index)
    },100);
  });
}
contentNode.onmousewheel=function (event) {
  clearInterval(timer);
  timer=setTimeout(function () {
    callback(event,contentNode.index)
  },100);
}



}
