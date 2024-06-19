const mobileOptions = document.querySelector(".items-container--options")
const scrollContainer = document.querySelector(".scroll-container")
const scroll = document.querySelector(".scroll")
const mobileHeaders = document.querySelector(".mobile-header")
const mobileHeaderParent = document.querySelector(".lazada-search")
const search = document.querySelector(".lazada-search")
const flashSale = document.querySelector(".item-container--flash-sale")

window.addEventListener("resize", function (e) {
  if (document.body.clientWidth > 800) {
    mobileHeaders.style.display = "none"
  }
})

let observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      mobileHeaders.style.display = "none"
      mobileHeaderParent.style.backgroundImage =
        "url('image/mobile-search-background.webp')"
    } else {
      mobileHeaderParent.style.backgroundColor = "white"
      mobileHeaderParent.style.backgroundImage = "none"
      mobileHeaders.style.display = "block"
    }
  },
  {
    threshold: 0,
    rootMargin: "-73px 0px 0px 0px",
    root: null
  }
)
observer.observe(flashSale)

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
