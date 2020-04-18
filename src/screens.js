
const mainScreen = document.querySelector(`.central`);
  const greeting = document.getElementById(`greeting`);
  const rules = document.getElementById(`rules`);
  const gameOne = document.getElementById(`game-1`);
  const gameTwo = document.getElementById(`game-2`);
  const gameThree = document.getElementById(`game-3`);
  const stats = document.getElementById(`stats`);
  if (greeting) {
    console.log(greeting);
  }
  displayArray = [mainScreen,greeting,rules,gameOne,gameTwo,gameThree,stats];
console.log(displayArray);

  var sliderControls = document.querySelectorAll(".arrows__btn");
console.log(sliderControls);
// slides informations
  var slides = displayArray;
    slidesLength = slides.length;
var arrowLeftKeyCode = 37;
var arrowRightKeyCode = 39;
// slides array
  var slidesArr = [].slice.call(slides);
// reverse array sorting
  slidesArr = slidesArr.reverse();
var moveNext = function (e) {
  if(e.keyCode === arrowRightKeyCode) {
    next = e.target,
      prev = next.previousElementSibling,
      nextSlide = slidesArr[slideCurrent + 1],
      slide = slidesArr[slideCurrent];
    slideCurrent += 1;

    if (slideCurrent === slidesLength - 1) {
      document.removeEventListener("keydown",moveNext)
    }
  }
    if (e.keyCode === arrowLeftKeyCode) {
      slideCurrent -= 1;

      prev = e.target,
        next = prev.nextElementSibling,
        prevSlide = slidesArr[slideCurrent + 1],
        slide = slidesArr[slideCurrent];

      if (slideCurrent === slidesLength - 2) {
        //need to disable slider somehow
      }

      if (slideCurrent === 0) {
        prev.disabled = true;
      }
    }
  mainScreen.innerHTML = slides[slideCurrent].innerHTML;
  };

 // slide current
  var slideCurrent = 0;
  for (var i = 0; i < sliderControls.length; i++)
    sliderControls[i].addEventListener("click", function(e) {
      target = e.target;

      // get next button
      if(target.classList.contains("next")) {
        next = e.target,
          prev = next.previousElementSibling,
          nextSlide = slidesArr[slideCurrent + 1],
          slide = slidesArr[slideCurrent];
        slideCurrent += 1;

        if(slideCurrent > 0) {
          prev.disabled = false;
        }
        if(slideCurrent === slidesLength - 1){
          next.disabled = true;
        }
      }
      // get prev button
      if(target.classList.contains("prev")){
        slideCurrent -= 1;

        prev = e.target,
          next = prev.nextElementSibling,
          prevSlide = slidesArr[slideCurrent + 1],
          slide = slidesArr[slideCurrent];

        if(slideCurrent === slidesLength - 2){
          next.disabled = false;
        }

        if(slideCurrent === 0){
          prev.disabled = true;
        }
      }
      console.log(slides[slideCurrent])
      mainScreen.innerHTML = slides[slideCurrent].innerHTML;
});
document.addEventListener("keydown",moveNext);
