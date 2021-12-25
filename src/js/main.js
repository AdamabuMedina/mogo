const fixedHeader = require("./module/fixedHeader.js")

$(function () {
  const header = $("#header")
  const introH = $("#intro").innerHeight()
  let scrollOffset = $(window).scrollTop()

  fixedHeader(scrollOffset, introH, header, "fixed")

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop()

    fixedHeader(scrollOffset, introH, header, "fixed")

  })
})