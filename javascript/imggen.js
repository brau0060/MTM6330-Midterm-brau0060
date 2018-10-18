// images array for each category
const images = {
  logos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
  streamoverlays: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.png', '8.gif', '9.gif'],
  banners: ['0.jpg'],
  themes: ['0.jpg', '1.jpg', '2.jpg']
}
// find elements in the main nav with the class text
const $home = document.getElementById('nav').getElementsByClassName('text')

$home[2].classList.remove('active')
$home[4].classList.add('active')
const $select = document.getElementById('nav').getElementsByClassName('text')
const $photos = document.getElementById('photos')
test()
function test () {
  // display logo images on defult (page load)
  for (var e = 0; e < 6; e++) {
    $photos.insertAdjacentHTML('beforeend', (`<img  class="img hover" id="img" src='./img/logos/${[e]}.jpg' onerror="src='./img/placeholder.png'">`))
  }
  // create loop for the length of the nav by using the length function
  for (var i = 0; i < $select.length; i++) {
    // add event listaner to every nav item
    $select[i].addEventListener('click', active)
  }
}

function active (check) {
  // gets the word in the clicked element
  // clears any spaces and sets the word two all lowercase
  const $word = check.srcElement.textContent.toLowerCase().replace(/\s/g, '')
  var $images = document.getElementsByClassName('img')
  // loop through the $elements with the class img
  while ($images.length > 0) {
    // removes all images on the page
    $images[0].parentNode.removeChild($images[0])
  }

  for (var g = 0; g < images[$word].length; g++) {
    // loop and insert the images assigned to the category clicked
    $photos.insertAdjacentHTML('beforeend', (`<img  class="img hover" id="img" src='./img/${$word}/${images[$word][g]}' onerror="src='./img/placeholder.png'">`))
  }
}
