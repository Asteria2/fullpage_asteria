
const leftHide="leftHide";
const rightShow="rightShow";
const leftShow="leftShow";
const rightHide="rightHide";

var content=document.querySelector("#app .content ");
var homeNodes=document.querySelectorAll("#app .content .list .home > div .home-list .home-item");
var pointNodes=document.querySelectorAll("#app .content .list .home > div .home-points .home-point");

// var oldAutoIndex=0;
var oldIndex=0;
var timer=0;
var autoIndex=0;

function clearClass(node) {
  node.classList.remove(leftHide);
  node.classList.remove(rightShow);
  node.classList.remove(leftShow);
  node.classList.remove(rightHide);
}
function pointMove(pointNodes,index) {
  pointNodes.forEach(function (pointNode) {
    pointNode.classList.remove("active");
  })
  pointNodes[index].classList.add("active");
}

function autoMove() {
  clearInterval(timer);
  timer=setInterval(function () {
    autoIndex++;
    if(autoIndex === homeNodes.length){
      autoIndex=0;
    }
    clearClass(homeNodes[autoIndex]);
    clearClass(homeNodes[oldIndex]);
    homeNodes[autoIndex].classList.add(rightShow);
    homeNodes[oldIndex].classList.add(leftHide);

    pointMove(pointNodes,autoIndex);
    oldIndex=autoIndex;

  },2000);
}

content.onmouseenter=function () {
  clearInterval(timer);
}
content.onmouseleave=function () {
  autoMove();
}


export default function () {
  autoMove();
  pointNodes.forEach(function (pointNode,index) {
    pointNode.index=index;
    pointNode.onclick=function () {
      clearInterval(timer);
      if(this.index===oldIndex){
        return;
      }

      clearClass(homeNodes[this.index]);
      clearClass(homeNodes[oldIndex]);
      //点击右侧小圆点
      if(this.index> oldIndex){
        homeNodes[this.index].classList.add(rightShow);
        homeNodes[oldIndex].classList.add(leftHide);

      }else if(this.index< oldIndex){//点击左侧小圆点
        homeNodes[this.index].classList.add(leftShow);
        homeNodes[oldIndex].classList.add(rightHide);
      }


      //小圆点逻辑
     pointMove(pointNodes,this.index);

      oldIndex=this.index;
      autoIndex=this.index;
    }
  })


}
