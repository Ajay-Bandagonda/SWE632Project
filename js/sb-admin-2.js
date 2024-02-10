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

document.getElementById('userReview').addEventListener('click', convertToTextarea)

function convertToTextarea() {
  
  var paragraph = document.getElementById("userReview");
  var textarea = document.createElement("textarea");

  textarea.type = "text";
  textarea.value = paragraph.innerText;
  textarea.name = "userReviewEdit"
  textarea.id = "userReviewEdit"
  textarea.style = "height: 75%;"
  textarea.classList.add("form-control")

  paragraph.parentNode.replaceChild(textarea, paragraph);

  textarea.focus();
}

function saveAndConvertToParagraph() {
  var textarea = document.querySelector("textarea");
  var newText = textarea.value;

  var paragraph = document.createElement("p");
  paragraph.id = "userReview";
  paragraph.textContent = newText;

  textarea.parentNode.replaceChild(paragraph, textarea);
}
function showSearchedMovie() {
  var searchBar = document.querySelector("#modalSearchBar")
  if (searchBar.value) {
      var element = document.querySelector("#watchlistModal .modal-body")

      var htmlToAdd =
      `
      <div class="mt-3">
          <h5 style="text-align: center;">Is this the movie you were looking for?</h5>
          <div class="card mt-3" style="width: 18rem; margin: 0 auto;">
              <a data-bs-toggle="modal" data-bs-target="#reviewModal1">
                  <img src="https://m.media-amazon.com/images/I/510EFCtJuZL.jpg" class="card-img-top" alt="...">
                  <div class="card-body">                                                   
                      <div>
                          <h5 class="card-title" style="color: black; font-weight: bold;">Inglorious Basterds</h5>
                      </div> 
                      <h6 class="mt-2 mb-2">Director: Quentin Tarantino</h6>                                          
                  </div>
              </a>
          </div>
      </div>
      `
                        
      element.innerHTML += htmlToAdd;
      document.getElementById("addToWatchlistBtn").setAttribute("style", "display: block;")
  }
}


function addToWatchlist() {
  var watchlist = document.querySelector("#watchlist")
  var movieAppearedinModal = document.querySelector("#watchlistModal .modal-body").childElementCount
  if (movieAppearedinModal === 2) {
      var htmlToAdd =
      `
      <div class="card movieCard" style="width: 18rem;">
          <a data-bs-toggle="modal" data-bs-target="#reviewModal1">
              <img src="https://m.media-amazon.com/images/I/510EFCtJuZL.jpg" class="card-img-top" alt="...">
              <div class="card-body">                                                   
                  <div>
                      <h5 class="card-title" style="color: black; font-weight: bold;">Inglorious Basterds</h5>
                  </div> 
                  <h6 class="mt-2 mb-2">Director: Quentin Tarantino</h6>                                          
              </div>
          </a>
      </div>
      `
                        
      watchlist.innerHTML += htmlToAdd;
  }
}