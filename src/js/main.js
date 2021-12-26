const fixedHeader = require("./module/fixedHeader.js")
const smoothScroll = require("./module/smoothScroll.js")
const burgerMenu = require("./module/burgerMenu.js")
const accordion = require("./module/accordion")
const slider = require("./module/slider")

$(function () {
  const header = $("#header")
  const introH = $("#intro").innerHeight()
  let scrollOffset = $(window).scrollTop()

  fixedHeader(scrollOffset, introH, header, "fixed")
  smoothScroll()
  burgerMenu()
  accordion()
  slider()

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop()

    fixedHeader(scrollOffset, introH, header, "fixed")

  })
})