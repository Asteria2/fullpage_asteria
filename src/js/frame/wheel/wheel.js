import move from "../move/move"
export default function (e,index) {
  var points=document.querySelectorAll("html body #app .content .points li");
  var content=document.querySelector("html body #app .content ");
  var length=points.length;
  e=e||event;
  var dir='';
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
      // index--;
      // if(index<0){
      //   index=0;
      // }
      if(index>0){
        index--;
      }else{
        index=0;
      }
      move(index);
      break;
    case "down":
      // index++;
      // if(index>length-1){
      //   index=length-1;
      // }
      if(index<length-1){
        index++;
      }else{
        index=length-1;
      }
      move(index);
      break;
  }
  content.index=index;
}
