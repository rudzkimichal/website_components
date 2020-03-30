
document.addEventListener('DOMContentLoaded', init);

function init() {

  const showButton = document.getElementById('showButton');
  const hideButton = document.getElementById('hideButton');
  const inputArea = document.getElementById('tagInput');
  const imgList = document.querySelectorAll('img');

  console.log([...imgList][2].dataset.toString());

  imgList.forEach(function(item) {
    console.log(item.dataset);
  });

  showButton.addEventListener('click', function() {
    imgList.forEach(function(item) {
      if(item.getAttribute('data-tag').includes(inputArea.value)) {
        item.classList.remove('hidden');
      }
    });
    inputArea.value = '';
  });

  hideButton.addEventListener('click', function() {
    imgList.forEach(function(item) {
      if(item.getAttribute('data-tag').includes(inputArea.value)) {
        item.classList.add('hidden');
      }
    });
    inputArea.value = '';
  });
}
