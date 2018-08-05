$(function () {
  var $list = $('.carousel .banner>.slide>.list>.item')
  var $point =$('.carousel .banner>.point>.pointList>.pointItem')
  banner()
  function banner() {
    clearInterval(timeId)
    var num = 0
    var timeId = setInterval(function () {
      $($list[num]).removeClass('active')
      $($point[num]).removeClass('active')
      num++
      if(num === $list.length){
        num = 0
      }
      $($list[num]).addClass('active')
      $($point[num]).addClass('active')
    },3000)
  }
})