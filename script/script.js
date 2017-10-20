$(document).ready(function() {
	$('#fullpage').fullpage({
		// sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		// menu: '#menu',
		scrollingSpeed: 1000,
		verticalCentered: false,
		css3: true,
		navigation: true,
		navigationPosition: 'right',
		// navigationTooltips: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],

		'afterLoad': function(anchorLink, index){
			// if(index == 2){
				
			// }
		},

		'onLeave': function(index, nextIndex, direction){
			// if (index == 3 && direction == 'down'){
				
			// }
			// else if(index == 3 && direction == 'up'){
				
			// }
		}
	});
});