// Custom cursor
window.addEventListener("mousemove", function(event) {
  cursor.style.top = event.y + "px";
  cursor.style.left = event.x + "px";
});

let words = document.querySelector("marquee");

let getXPercentage = x => {
  return x / window.innerWidth;
};

let updateFontWeight = x => {
  // Calculate the new font weight, based on the current cursor position
  let xPercentage = getXPercentage(x);
  let fontWeight = 800 * xPercentage + 100;

  // Change the styling, creating a stagger using setTimeout & the index value
  words.style.fontVariationSettings = "'wght' " + fontWeight;
};

// Finally, set up the event-listener
document.body.addEventListener("mousemove", e => {
  let X = e.clientX;
  updateFontWeight(X);
});
