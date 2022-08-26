var currentSlide=0

var totalSlides =  $('.holder div').length

var moveSlide = function(slide){

  var leftPosition =(- slide * 104.5) + 'vw '



  $('.holder').css('left', leftPosition)
  
  var slideNumber = slide + 1
  
  $('.steps').text(slideNumber + '/' + totalSlides)
  
  
}

var nextSlide = function(){

console.log('nextSlide')

currentSlide = currentSlide + 1


if(currentSlide >= totalSlides ){

currentSlide = 0

}

moveSlide(currentSlide)


}

var previousSlide = function(){

  currentSlide = totalSlides - 1

  if(currentSlide < 0){

  currentSlide = totalSlides - 1
  

  }
  moveSlide(currentSlide)



  var leftPosition =(- currentSlide * 104.5) + 'vw '

  $('.holder').css('left', leftPosition)

  var slideNumber = currentSlide + 1

$('.steps').text(slideNumber + '/' + totalSlides)



}

var autoSlide =  setInterval(function(){

  nextSlide()




}, 3000)


$('.next').on('click', function(){

  clearInterval(autoSlide)

nextSlide()
})

$('.prev ').on('click', function(){

  clearInterval(autoSlide)


  previousSlide()
  
})

var slideNumber = currentSlide + 1

$('.steps').text(slideNumber + '/' + totalSlides)


$('body').on('keydown', function(event){

  var keycode = event.keycode

  if(keycode==37) {
    clearInterval(autoSlide)

  previousSlide()
}

if(keycode==39){

  clearInterval(autoSlide)


nextSlide()

}



})