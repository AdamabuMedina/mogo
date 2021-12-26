function smoothScroll() {
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault()

    const $this = $(this)
    const blockID = $this.data("scroll")
    const blockOffset = $(blockID).offset().top

    $("#nav a").removeClass("active")
    $this.addClass("active")

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500)

  })
}

module.exports = smoothScroll;