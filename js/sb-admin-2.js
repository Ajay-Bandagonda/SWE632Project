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
  
  var paragraph = document.getElementsByClassName("userReview")[0];
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
  var textarea = document.querySelector(".modal-body textarea");
  var newText = textarea.value;

  var paragraph = document.createElement("p");
  paragraph.classList.add("userReview");
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

function showSearchedMovieLog() {
  var searchBar = document.querySelector("#modalSearchBarLog")
  if (searchBar.value) {
      var element = document.querySelector("#logModal .modal-body")

      var htmlToAdd =
      `
      <div class="mt-3" style="margin: 0 auto; text-align: center;">
          <h5>Is this the movie you were looking for?</h5>
          <div class="btn-group" role="group">
              <button type="button" class="btn btn-success" id="correctMovie" onclick="initalReviewLog()">Yes</button>
              <button type="button" class="btn btn-danger">No</button>
          </div>
          <div class="card mt-3" style="width: 18rem; margin: 0 auto;">
              <a data-bs-toggle="modal" data-bs-target="#reviewModal1">
                  <img src="img/fake-movie-poster.png" class="card-img-top" alt="...">
                  <div class="card-body">                                                   
                      <div>
                          <h5 class="card-title" style="color: black; font-weight: bold;">Example Movie Name</h5>
                      </div> 
                      <h6 class="mt-2 mb-2">Director: Some Director</h6>                                          
                  </div>
              </a>
          </div>
      </div>
      `
                        
      element.innerHTML += htmlToAdd;
      document.getElementById("addToLogBtn").setAttribute("style", "display: block;")
  }
}

function showSearchedMovieLogForLists() {
  var searchBar = document.querySelector("#modalSearchBarLog")
  if (searchBar.value) {
      var element = document.querySelector("#listModal .modal-body")

      var htmlToAdd =
      `
      <div class="mt-3" style="margin: 0 auto; text-align: center;">
          <h5>Is this the movie you were looking for?</h5>
          <div class="card mt-3" style="width: 18rem; margin: 0 auto;">
              <a data-bs-toggle="modal" data-bs-target="#reviewModal1">
                  <img src="img/fake-movie-poster.png" class="card-img-top" alt="...">
                  <div class="card-body">                                                   
                      <div>
                          <h5 class="card-title" style="color: black; font-weight: bold;">Example Movie Name</h5>
                      </div> 
                      <h6 class="mt-2 mb-2">Director: Some Director</h6>                                          
                  </div>
              </a>
          </div>
      </div>
      `
                        
      element.innerHTML += htmlToAdd;
      document.getElementById("addToListBtn").setAttribute("style", "display: block;")
  }
}

function initalReviewLog() {
  var element = document.querySelector("#logModal .modal-body")
  var htmlToAdd =
  `
  <div class="row">
      <div class="col-5">
          <div class="card" style="width: 18rem;">
              <img src="img/fake-movie-poster.png" class="card-img-top" alt="...">
          </div>
          <div class="mt-3">
              Your Rating: 
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa-solid fa-star-half-stroke checked"></span>
          </div>
      </div>
      <div class="col"> 
          <h2>Your Review</h2>
          <textarea name="userInitialReviewEdit" id="userInitialReviewEdit" class="form-control userReview" style="height: 75%;"></textarea>                                    
      </div>
  </div>
  `
  document.querySelector("#logModal .modal-dialog").classList.add("modal-lg")
  element.innerHTML = htmlToAdd;
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
      document.querySelector("#watchlistModal .modal-body").innerHTML = 
      `
      <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 w-100 pr-3">
          <div class="input-group">
              <input id="modalSearchBar" type="text" class="form-control bg-light border-0 small" placeholder="Search..."
                  aria-label="Search" aria-describedby="basic-addon2">
              <div class="input-group-append">
                  <button class="btn btn-primary" id="modalSearchButton" onclick="showSearchedMovie()" type="button">
                      <i class="fas fa-search fa-sm"></i>
                  </button>
              </div>
          </div>
      </form>
      `
      document.getElementById("addToWatchlistBtn").setAttribute("style", "display: none;")
  }
}

let numMoviesinLog = 1;

function addToLog() {
  var movieLog = document.querySelector("#movieLog")
  var htmlToAdd =
  `
  <div class="card movieCard" style="width: 18rem;">
      <a data-bs-toggle="modal" data-bs-target="#reviewModal1">
          <img src="img/fake-movie-poster.png" class="card-img-top" alt="...">
          <div class="card-body">                                                   
              <div>
                  <h5 class="card-title" style="color: black; font-weight: bold;">Example Movie Name</h5>
              </div> 
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa-solid fa-star-half-stroke checked"></span>
              <h6 class="mt-2 mb-2">Director: Some name here</h6>                        
              <button type="button" class="btn btn-block btn-primary" data-bs-toggle="modal" data-bs-target="#reviewModal1">
                  Read Review
              </button>                                        
          </div>
      </a>
  </div>  
  `
                    
  movieLog.innerHTML += htmlToAdd;
  document.querySelector("#logModal .modal-body").innerHTML = 
  `
  <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 w-100 pr-3">
      <div class="input-group">
          <input id="modalSearchBarLog" type="text" class="form-control bg-light border-0 small" placeholder="Search..."
              aria-label="Search" aria-describedby="basic-addon2">
          <div class="input-group-append">
              <button class="btn btn-primary" id="logModalSearchButton" onclick="showSearchedMovieLog()" type="button">
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>
  `
  document.getElementById("addToLogBtn").setAttribute("style", "display: none;")
}

function addToList1() {
  var list = document.querySelector("#list1carousel .row")
  var htmlToAdd =
  `
  <div class="card movieCard" style="width: 18rem;">
      <a data-bs-toggle="modal" data-bs-target="#reviewModal1">
          <img src="img/fake-movie-poster.png" class="card-img-top" alt="...">
          <div class="card-body">                                                   
              <div>
                  <h5 class="card-title" style="color: black; font-weight: bold;">Example Movie Name</h5>
              </div> 
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa-solid fa-star-half-stroke checked"></span>
              <h6 class="mt-2 mb-2">Director: Some name here</h6>                        
              <button type="button" class="btn btn-block btn-primary" data-bs-toggle="modal" data-bs-target="#reviewModal1">
                  Read Review
              </button>                                        
          </div>
      </a>
  </div>  
  `
                    
  list.innerHTML += htmlToAdd;
  document.querySelector("#listModal .modal-body").innerHTML = 
  `
  <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 w-100 pr-3">
      <div class="input-group">
          <input id="modalSearchBarLog" type="text" class="form-control bg-light border-0 small" placeholder="Search..."
              aria-label="Search" aria-describedby="basic-addon2">
          <div class="input-group-append">
              <button class="btn btn-primary" id="logModalSearchButton" onclick="showSearchedMovieLog()" type="button">
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>
  `
  document.getElementById("addToListBtn").setAttribute("style", "display: none;")
}

function addToList2() {
  var list = document.querySelector("#list2carousel .row")
  var htmlToAdd =
  `
  <div class="card movieCard" style="width: 18rem;">
      <a data-bs-toggle="modal" data-bs-target="#reviewModal1">
          <img src="img/fake-movie-poster.png" class="card-img-top" alt="...">
          <div class="card-body">                                                   
              <div>
                  <h5 class="card-title" style="color: black; font-weight: bold;">Example Movie Name</h5>
              </div> 
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa-solid fa-star-half-stroke checked"></span>
              <h6 class="mt-2 mb-2">Director: Some name here</h6>                        
              <button type="button" class="btn btn-block btn-primary" data-bs-toggle="modal" data-bs-target="#reviewModal1">
                  Read Review
              </button>                                        
          </div>
      </a>
  </div>  
  `
                    
  list.innerHTML += htmlToAdd;
  document.querySelector("#listModal .modal-body").innerHTML = 
  `
  <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 w-100 pr-3">
      <div class="input-group">
          <input id="modalSearchBarLog" type="text" class="form-control bg-light border-0 small" placeholder="Search..."
              aria-label="Search" aria-describedby="basic-addon2">
          <div class="input-group-append">
              <button class="btn btn-primary" id="logModalSearchButton" onclick="showSearchedMovieLog()" type="button">
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>
  `
  document.getElementById("addToListBtn").setAttribute("style", "display: none;")
}