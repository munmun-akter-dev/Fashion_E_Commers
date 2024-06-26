// $(document).ready(function(){
//   $('.accordion-header').click(function(){
//     $(this).next('.accordion-content').slideToggle();
//   });
// });





// ========read more js code start/=====/
function showMore() {
  var moreText = document.getElementById("more");
  var moreLink = document.getElementById("read-more-link");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    moreLink.innerHTML = "Read Less...";
  } else {
    moreText.style.display = "none";
    moreLink.innerHTML = "Read More...";
  }
}
// ========read more js code end/=====/





// ========increment decrement js code start/=====/

document.addEventListener("DOMContentLoaded", function () {
  var element = document.getElementById("count");
  var increment = document.getElementById("plus");
  var decrement = document.getElementById("minus");

  // Initial counter value
  var count = 0;

  // Event listener for increment button
  increment.addEventListener("click", function () {
    count++;
    element.textContent = count;
  });

  // Event listener for decrement button
  decrement.addEventListener("click", function () {
    count--;
    element.textContent = count;
  });
});

// ========increment decrement js code end/=====/


