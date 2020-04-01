/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener('DOMContentLoaded', init);

function init() {

  const tooltipList = document.querySelectorAll('.tooltip');

  tooltipList.forEach(function(item) {
    const tooltip = document.createElement('span');
    
    item.addEventListener('mouseover', function() {
      tooltip.classList.add('tooltipText');
      tooltip.innerText = this.getAttribute('data-text');
      this.appendChild(tooltip);
    });

    item.addEventListener('mouseout', function() {
      this.removeChild(tooltip);
    });
  });

}
