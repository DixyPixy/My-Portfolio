$(document).ready(function() {
    var tree = new ClassyLeaves({
    leaves: 50, // number of leaves to spawn initially
    maxY: 100, // spread size
    multiplyOnClick: true, // whether to multiply the leaf when the user clicks on it
    multiply: 1, // number of images to spawn when clicking on a leaf
    infinite: true, // if you want the leaves to never stop falling
    speed: 3000, // speed of the falling leaf animation
    numImages: 8, // total number of images in the leaves folder
    folder: 'Create-Leaves-Falling-Rotating-Effects-with-jQuery-CSS3/images/leaves/' 
    });
    });