(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict

function toggleEditable() {
  var contentElement = document.getElementById("userReview");

  // Remove existing event listeners
  contentElement.removeEventListener("blur", onInputBlur);

  if (contentElement.tagName.toLowerCase() === "p") {
    // Create a new input element
    var inputElement = document.createElement("textarea");
    inputElement.type = "text";
    inputElement.value = contentElement.innerText;
    inputElement.name = "userReviewEdit"
    inputElement.id = "userReviewEdit"
    inputElement.style = "height: 75%;"
    inputElement.classList.add("form-control")

    // Replace the paragraph with the input
    contentElement.parentNode.replaceChild(inputElement, contentElement);

    // Focus on the input for immediate editing
    inputElement.focus();

    // Add an event listener to revert to paragraph on blur
    inputElement.addEventListener("blur", onInputBlur);
  } else if (contentElement.tagName.toLowerCase() === "input") {
    // Create a new paragraph element
    var newParagraph = document.createElement("p");
    newParagraph.innerText = contentElement.value;

    // Replace the input with the paragraph
    contentElement.parentNode.replaceChild(newParagraph, contentElement);
  }
}

function onInputBlur() {
  var inputElement = document.querySelector("#editableContent input");
  var newParagraph = document.createElement("p");
  newParagraph.innerText = inputElement.value;

  // Replace the input with the new paragraph
  inputElement.parentNode.replaceChild(newParagraph, inputElement);
}
