const fixedHeader = require("./module/fixedHeader.js")
const smoothScroll = require("./module/smoothScroll.js")

$(function () {
  const header = $("#header")
  const introH = $("#intro").innerHeight()
  let scrollOffset = $(window).scrollTop()

  fixedHeader(scrollOffset, introH, header, "fixed")
  smoothScroll()

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop()

    fixedHeader(scrollOffset, introH, header, "fixed")

  })
})