export default function (index) {
  var liNodes=document.querySelectorAll('html body #app .head .headMain .nav .item');
  var arrow=document.querySelector("html body #app .head .headMain .arrow ");
  var points=document.querySelectorAll("html body #app .content .points li");
  var list=document.querySelector("html body #app .content .list");
  var content=document.querySelector("html body #app .content ");


  for(var j=0;j<liNodes.length;j++){
    liNodes[j].classList.remove("active");
    points[j].classList.remove("active");
  }
  liNodes[index].classList.add('active');
  points[index].classList.add('active');
  arrow.style.left=(liNodes[index].offsetLeft+liNodes[index].offsetWidth/2-arrow.offsetWidth/2)+"px";
  list.style.top=-(index*content.offsetHeight)+'px';
  // content.index=index;
}
