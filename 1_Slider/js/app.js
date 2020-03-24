
document.addEventListener('DOMContentLoaded', init);

function init() {

  const prev = document.getElementById('prevPicture');
  const next = document.getElementById('nextPicture');
  const imgList = [];
  let index = 0;

  document.querySelectorAll('li').forEach(function(item) {
    imgList.push(item);
  });

  function slidePictures(direction) {
    imgList[index].classList.toggle('visible');


    if(index < 0) index = imgList.length - 1;
    else if(index >= imgList.length) index = 0;

  }

  imgList[index].classList.toggle('visible');

  next.addEventListener('click', function() {
    imgList[index].classList.toggle('visible');
    index++;
    if(index < 0) index = imgList.length - 1;
    else if(index >= imgList.length) index = 0;
    imgList[index].classList.toggle('visible');
  });

  prev.addEventListener('click', function() {
    imgList[index].classList.toggle('visible');
    index--;
    if(index < 0) index = imgList.length - 1;
    else if(index >= imgList.length) index = 0;
    imgList[index].classList.toggle('visible');
  });

}
