const mobileOptions = document.querySelector(".items-container--options")
const scrollContainer = document.querySelector(".scroll-container")
const scroll = document.querySelector(".scroll")

// The relative width between the custom scroll bar and the scroll
const relativeCustomScrollBarAndScrollWidth =
  1 -
  scroll.getBoundingClientRect().width /
    scrollContainer.getBoundingClientRect().width

// The total width of the scrollable element
const width = Math.floor(mobileOptions.scrollWidth) - mobileOptions.clientWidth

//Scrollable element event listener
mobileOptions.addEventListener("scroll", function (e) {
  //Relative position within the scrollable element - scroll and the total width of the scrollable element
  const relativeScrollbarPosition =
    (mobileOptions.scrollLeft / width) * relativeCustomScrollBarAndScrollWidth

  let customScrollPosition =
    scrollContainer.getBoundingClientRect().width * relativeScrollbarPosition
  let scrollbarPosition = window
    .getComputedStyle(scroll, null)
    .getPropertyValue("transform")
    .split(",")[4]
  scroll.style.transform = `translateX(${customScrollPosition}px)`
})
