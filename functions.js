	// Project tile animation
	var timeProjects = 0;
	$(document).ready(function(){
		$('.project').each(function(){
			var that = $(this);
			setTimeout(function(){that.animate({opacity:0.9},1000)}, timeProjects);
			timeProjects += 300
		});
	});

// Add squares
var contributions = document.getElementsByClassName('contributions')[0];
    var str = '';
    for (var i = 0; i < 366; i++) {
      str += `<div class="square ${getContribColor()}"></div>`;
    }
    contributions.innerHTML = str;

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    function getContribColor() {
      var num = getRandomInt(4);
      if (num === 0) {
        return 'gray';
      } else if (num === 1) {
        return 'darkgreen';
      } else if (num === 2) {
        return 'green';
      }
      return 'lightgreen';
    }