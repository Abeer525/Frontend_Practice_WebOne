// Abeer Abo Soltanieh
// slideshow
var i=0; //start point
var images=[]; //array of images 
var time=3000; //time
images[0] = 'pic/moon.jpeg';
images[1] = 'pic/mars-moon.jpeg';
images[2] = 'pic/jupiter-moons.jpeg';
images[3] = 'pic/saturn-moons.jpeg';
images[3] = 'pic/uranus-moons.webp';
images[3] = 'pic/neptune_480x360_moonsbydest.jpg';
images[3] = 'pic/pluto_480x360_moonsbydest.jpg';
//change Imag 
function changeImg(){
    document.slide.src=images[i];
    if(i<images.length-1){
        i++; 
    } else{
        i=0; 
    }
   setTimeout("changeImg()",time);
} 
window.onload=changeImg