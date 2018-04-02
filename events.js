

var img=new Image();
img.crossOrigin='anonymous';
img.onload=start;
img.src="https://image.flaticon.com/sprites/share/packs/219953-people.png";

function start(){
  var croppedURL=cropPlusExport(img,190,127,93,125);
  var cropImg=new Image();
  cropImg.src=croppedURL;
  document.body.appendChild(cropImg);
}

function cropPlusExport(img,cropX,cropY,cropWidth,cropHeight){
  // create a temporary canvas sized to the cropped size
  var canvas1=document.createElement('canvas');
  var ctx1=canvas1.getContext('2d');
  canvas1.width=cropWidth;
  canvas1.height=cropHeight;
  // use the extended from of drawImage to draw the
  // cropped area to the temp canvas
  ctx1.drawImage(img,cropX,cropY,cropWidth,cropHeight,0,0,cropWidth,cropHeight);
  // return the .toDataURL of the temp canvas
  return(canvas1.toDataURL());
}

// let button = document.getElementById('butt');
//
// button.addEventListener('click', function () {
// 	console.log(this.innerText);
// 	console.log('cliked');
// });
