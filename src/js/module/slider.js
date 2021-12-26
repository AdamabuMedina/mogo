function slider() {
  $("[data-slider]").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  })
}

module.exports = slider
