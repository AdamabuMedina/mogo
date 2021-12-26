function accordion() {
  $("[data-collapse]").on("click", function (event) {
    event.preventDefault()

    let $this = $(this)
    blockId = $this.data("collapse")

    $(blockId).slideToggle("")

  })
}

module.exports = accordion