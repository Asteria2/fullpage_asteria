import move from "../move/move"
export  default function (e,index) {
  var contentLiNodes=document.querySelectorAll("html #app .content .list li, body #app .content .list li");
  var contentNode=document.querySelector("html #app .content, body #app .content");
  e=e||event;
  var dir='';
  var length=contentLiNodes.length;
  if(e.wheelDelta){
    if(e.wheelDelta>0){
      dir="up";
    }else{
      dir="down";
    }
  }
  if(e.detail){
    if(e.detail>0){
      dir="down";
    }else{
      dir="up";
    }
  }

  switch (dir) {
    case "up":
      if(index>0){
        index--;
      }else{
        index=0;
      }
      move(index);
      break;
    case "down":
      if(index<length-1){
        index++;

      }else{
        index=length-1;
      }
      move(index);
      break;
  }
  contentNode.index=index;
}
