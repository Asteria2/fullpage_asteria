
function createLi(ul) {
  var w=ul.offsetWidth/2;
  var h=ul.offsetHeight/2;
  for(var i=0;i<4;i++){
    var liNode=document.createElement('li');
    var imgNode=document.createElement("img");
    imgNode.src=ul.dataset.src;
    imgNode.style.top=`${-Math.floor(i/2)*h}px`;
    imgNode.style.left=`${-i%2*w}px`;
    liNode.style.width=w+'px';
    liNode.style.height=h+'px';
    liNode.appendChild(imgNode);
    ul.appendChild(liNode);
  }
}



export default function () {
  var boxs=document.querySelectorAll("#app .content .list .about > div .box");
  var uls=document.querySelectorAll("#app .content .list .about > div .box > ul");
  var ul=uls[0];
  var w=ul.offsetWidth/2;
  var h=ul.offsetHeight/2;
  uls.forEach(function (ul) {
    createLi(ul);
  })

  boxs.forEach(function (box) {

    box.onmouseenter=function () {
      var imgNodes=box.querySelectorAll("ul > li > img");
      imgNodes.forEach(function (imgNode,index) {
        switch (index) {
          case 0:
            imgNode.style.top=`${h}px`;
            break;
          case 1:
            imgNode.style.left=`${-2*w}px`;
            break;
          case 2:
            imgNode.style.left=`${w}px`;
            break;
          case 3:
            imgNode.style.top=`${-2*h}px`;
            break;
        }
      })
    }

    box.onmouseleave=function () {
      var imgNodes=box.querySelectorAll("ul > li > img");
      imgNodes.forEach(function (imgNode,index) {
        switch (index) {
          case 0:
            imgNode.style.top=`${0}px`;
            break;
          case 1:
            imgNode.style.left=`${-w}px`;
            break;
          case 2:
            imgNode.style.left=`${0}px`;
            break;
          case 3:
            imgNode.style.top=`${-h}px`;
            break;
        }
      })
    }

  })



}
