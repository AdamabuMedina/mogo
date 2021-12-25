function fixedHeader(scrollCount, heightCount, idName, className) {

  if (scrollCount >= heightCount) {
    idName.addClass(className)
  } else {
    idName.removeClass(className)
  }
}

module.exports = fixedHeader;