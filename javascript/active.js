// find elements in the main nav with the class text
const $item = document.getElementById('nav').getElementsByClassName('text')
clear()
// assign an event listener to the menu items with text class
$item[2].classList.add('active')
// the clear function will check if the item in the nav ist has an active class if so it will clear it
function clear () {
// create loop for the length of the nav by using the length function
  for (var i = 0; i < $item.length; i++) {
  // add event listener to every nav item
    $item[i].addEventListener('click', active)
    if ($item[i].classList[1] === 'active') {
      $item[i].classList.remove('active')
    } else {
      $item[i].classList.add('text')
    }
  }
}

function active (check) {
// if the element has the active class keep it active
  if (check.classList === 'active') {
    // clear the rest with the clear function
    clear()
  } else {
    // else if the element is not clear the rest with the clear function and add active class to the clicked element
    clear()
    check.srcElement.classList.add('active')
  }
}
