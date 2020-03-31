
document.addEventListener('DOMContentLoaded', init);

function init() {

  const menuFirstLevel = document.querySelectorAll('.nav >ul >li');

  menuFirstLevel.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      if(this.querySelector('ul') !== null)
        this.querySelector('ul').style.display = 'flex';
    });
  });

  menuFirstLevel.forEach(function(item) {
    item.addEventListener('mouseout', function() {
      this.querySelector('ul').style.display = 'none';
    });
  });

}
