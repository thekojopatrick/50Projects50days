const boxes = document.querySelectorAll('.content')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4
  //console.log(triggerBottom);

 boxes.forEach(function (box) {
   const boxTop = box.getBoundingClientRect().top
   //console.log(boxTop);
    if (boxTop<triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
 })
}