function burgerMenu() {
  $("#nav_toggle").on("click", function (event) {
    event.preventDefault()

    $(this).toggleClass("active")
    $("#nav").toggleClass("active")
  })
}

module.exports = burgerMenu;