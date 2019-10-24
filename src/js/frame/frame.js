import move from './move/move'
import callback from './wheel/wheel'
export default function () {
  var liNodes=document.querySelectorAll('html body #app .head .headMain .nav .item');
  var arrow=document.querySelector("html body #app .head .headMain .arrow ");
  var music=document.querySelector("html body #app .head .headMain .music");
  var audio=document.querySelector("html body #app .head .headMain .music audio");
  var homeNode=liNodes[0];
  var content=document.querySelector("html body #app .content ");
  var list=document.querySelector("html body #app .content .list");
  var listNodes=document.querySelectorAll("html body #app .content > .list > li");
  var points=document.querySelectorAll("html body #app .content .points li");

  arrow.style.left=(homeNode.offsetLeft+homeNode.offsetWidth/2-arrow.offsetWidth/2)+"px";

  if(listNodes.length===points.length){
    for(var i=0;i<liNodes.length;i++){
      liNodes[i].index=i;
      points[i].index=i;
      liNodes[i].onclick=points[i].onclick=function () {
        move(this.index);
      }
    }
  }

  music.onclick=function () {
    if(audio.paused){
      audio.play();
      music.classList.remove("active");
    }else{
      audio.pause();
      music.classList.add("active");
    }
  }

  listNodes.forEach(function (liNode) {
    liNode.style.height=content.offsetHeight+'px';
  });


  var timer=0;
  content.index=0;
  if(content.addEventListener){
    content.addEventListener("DOMouseScroll",(event)=>{
      clearInterval(timer);
      timer=setTimeout(function () {
        callback(event,content.index)
      },100);
    })
  }

  content.onmousewheel=(event)=>{
    clearInterval(timer);
    timer=setTimeout(function () {
      callback(event,content.index)
    },100);
  };







}
