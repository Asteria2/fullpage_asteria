export default function (index) {
  var navLiNodes=document.querySelectorAll("#app .head .headMain .nav .item");
  var pointNodes=document.querySelectorAll('html #app .content .points li, body #app .content .points li');
  var listNode=document.querySelector("html #app .content .list li, body #app .content .list");
  var contentNode=document.querySelector("html #app .content, body #app .content");
  var arrow=document.querySelector("#app .head .headMain .arrow ");

  for(var j=0;j<navLiNodes.length;j++){
    navLiNodes[j].classList.remove("active");
    pointNodes[j].classList.remove("active");
  }
  navLiNodes[index].classList.add('active');
  pointNodes[index].classList.add('active');
  arrow.style.left=(navLiNodes[index].offsetLeft+(navLiNodes[index].offsetWidth/2)-(arrow.offsetWidth/2))+'px';
  listNode.style.top=-index*contentNode.offsetHeight+'px';
}
