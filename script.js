let img = document.getElementsByClassName("img")[0];
var links = ["asset/1.jpg","asset/2.png","asset/3.jpg","asset/4.png","asset/5.jpg","asset/6.jpg"];
var currentIndex = 0;
currentIndex=Math.floor(Math.random()*links.length)
// alert(random)
img.src=links[currentIndex]

//Next Function
function next() {
  currentIndex = (currentIndex + 1) % links.length;
  img.src = links[currentIndex];
  console.log(currentIndex)
}

function play(){
  setInterval(() => {
    next()
  }, 3000);
}


//Previous Function
var previousIndex = currentIndex;
function previous() {
  previousIndex = (previousIndex - 1 + links.length) % links.length;
  img.src = links[previousIndex];
}


//Share Image Function

function shareImage() {
  if (navigator.share) {
    // Use the Web Share API if available
    navigator.share({
      title: 'Check out this image!',
      text: 'Take a look at this beautiful image!',
      url: img.src
    })
      .then(() => console.log('Image shared successfully!'))
      .catch((error) => console.error('Error sharing image:', error));
  } else {
    // Fallback for devices/browsers that don't support Web Share API
    alert('Sharing is not supported on this device.');
  }
}

//Share Website Function
function shareWebsite() {
  if (navigator.share) {
    // Use the Web Share API if available
    navigator.share({
      title: 'Check out this image!',
      text: 'Take a look at this beautiful image!',
      url: window.location.href
    })
      .then(() => console.log('Image shared successfully!'))
      .catch((error) => console.error('Error sharing image:', error));
  } else {
    // Fallback for devices/browsers that don't support Web Share API
    alert('Sharing is not supported on this device.');
  }
}


//Download Function
const downloadButtons = document.querySelectorAll('.download');
downloadButtons.forEach(button => {
  button.addEventListener('click', downloadImage);
});

function downloadImage() {
  const imageUrl = img.src;
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'image.jpg';
  link.click();
}