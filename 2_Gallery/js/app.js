/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener('DOMContentLoaded', init);

function init() {

  const imgList = document.querySelectorAll('li');

  imgList.forEach(function(item) {
    item.addEventListener('click', function() {

      const fullScreenWindow = document.createElement('div');
      fullScreenWindow.classList.add('fullScreen');
      const closeButton = document.createElement('button');
      closeButton.innerText = 'Close';
      closeButton.classList.add('close');
      fullScreenWindow.innerHTML =
      `<img src='${this.querySelector('img').getAttribute('src')}'>`;
      fullScreenWindow.appendChild(closeButton);
      document.querySelector('body').appendChild(fullScreenWindow);


      closeButton.addEventListener('click', function() {
        document.querySelector('body').removeChild(fullScreenWindow);
      });
    });
  });

  console.log(document.querySelector('.fullScreen img'));
}
