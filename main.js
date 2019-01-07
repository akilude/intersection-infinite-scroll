// create an intersection observer, it calls the loadMore function when the intersection of the element changes
const observer = new IntersectionObserver(loadMore);

// element to detect end of page
var indicator = document.querySelector('#infinite-indicator');

// element which contains the images
var container = document.getElementById('infinite-container');

// start observing
observer.observe(indicator);

// array of images
var img_arr = [
	'images/ishan-seefromthesky-1113275-unsplash.jpg',
	'images/eberhard-grossgasteiger-1254739-unsplash.jpg',
	'images/paula-russell-1253027-unsplash.jpg',
	'images/artem-sapegin-1252570-unsplash.jpg',
	'images/sylas-boesten-1253896-unsplash.jpg',
	'images/will-turner-1254397-unsplash.jpg'
]


function loadMore(arr) {

	// if the element is intersecting
	if(arr[0].isIntersecting){
		// get a random index from the array
		var random = Math.floor(Math.random()*6);

		// create an image and append it to the container and set the source of the image
		var img = document.createElement('img');
		container.append(img);
		img.src = img_arr[random];
	}

}