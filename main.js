var imageUrls = [
  'https://i.imgur.com/hsRFYS5.jpg',
  'https://i.redd.it/3gizuc2fiel81.png',
  'https://i.redd.it/je99d90jlyj81.jpg',
  'https://images3.memedroid.com/images/UPLOADED378/62174eb1af2ec.jpeg',
  'https://images7.memedroid.com/images/UPLOADED743/624eaba9e5a71.jpeg',
  'https://i.chzbgr.com/original/9195049984/hE4B08002/funny-comic-about-how-you-look-in-real-life-vs-in-the-photo-for-your-drivers-license'
];

var $gallery = document.querySelector('main');

var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', urlinput);

function urlinput() {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
}

function updateGallery() {
  $gallery.innerHTML = '';
  for (var x = 0; x < imageUrls.length; x++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[x];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
