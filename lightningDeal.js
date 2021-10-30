var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

// Set the date we're counting down to
var countDownDate = new Date("Sep 15, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s " + "left";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

var container2 = document.getElementById('container2');
var slider2 = document.getElementById('slider2');
var slides2 = document.getElementsByClassName('slide2').length;
var buttons2 = document.getElementsByClassName('btn2');


var currentPosition2 = 0;
var currentMargin2 = 0;
var slidesPerPage2 = 0;
var slidesCount2 = slides2 - slidesPerPage2;
var containerWidth2 = container2.offsetWidth;
var prevKeyActive2 = false;
var nextKeyActive2 = true;

window.addEventListener("resize", checkWidth2);

function checkWidth2() {
    containerWidth2 = container2.offsetWidth;
    setParams2(containerWidth2);
}

function setParams2(w) {
    if (w < 551) {
        slidesPerPage2 = 1;
    } else {
        if (w < 901) {
            slidesPerPage2 = 2;
        } else {
            if (w < 1101) {
                slidesPerPage2 = 3;
            } else {
                slidesPerPage2 = 4;
            }
        }
    }
    slidesCount2 = slides2 - slidesPerPage2;
    if (currentPosition2 > slidesCount2) {
        currentPosition2 -= slidesPerPage2;
    };
    currentMargin2 = - currentPosition2 * (100 / slidesPerPage2);
    slider2.style.marginLeft = currentMargin2 + '%';
    if (currentPosition2 > 0) {
        buttons2[0].classList.remove('inactive');
    }
    if (currentPosition2 < slidesCount2) {
        buttons2[1].classList.remove('inactive');
    }
    if (currentPosition2 >= slidesCount2) {
        buttons2[1].classList.add('inactive');
    }
}

setParams2();

function slideRight2() {
    if (currentPosition2 != 0) {
        slider2.style.marginLeft = currentMargin2 + (100 / slidesPerPage2) + '%';
        currentMargin2 += (100 / slidesPerPage2);
        currentPosition2--;
    };
    if (currentPosition2 == 0) {
        buttons2[0].classList.add('inactive');
    }
    if (currentPosition2 < slidesCount2) {
        buttons2[1].classList.remove('inactive');
    }
};

function slideLeft2() {
    if (currentPosition2 != slidesCount2) {
        slider2.style.marginLeft = currentMargin2 - (100 / slidesPerPage2) + '%';
        currentMargin2 -= (100 / slidesPerPage2);
        currentPosition2++;
    };
    if (currentPosition2 == slidesCount2) {
        buttons2[1].classList.add('inactive');
    }
    if (currentPosition2 > 0) {
        buttons2[0].classList.remove('inactive');
    }
};



var container1 = document.getElementById('container1');
var slider1 = document.getElementById('slider1');
var slides1 = document.getElementsByClassName('slide1').length;
var buttons1 = document.getElementsByClassName('btn1');


var currentPosition1 = 0;
var currentMargin1 = 0;
var slidesPerPage1 = 0;
var slidesCount1 = slides1 - slidesPerPage1;
var containerWidth1 = container1.offsetWidth;
var prevKeyActive1 = false;
var nextKeyActive1 = true;

window.addEventListener("resize", checkWidth1);

function checkWidth1() {
    containerWidth1 = container1.offsetWidth;
    setParams1(containerWidth1);
}

function setParams1(w) {
    if (w < 551) {
        slidesPerPage1 = 1;
    } else {
        if (w < 901) {
            slidesPerPage1 = 2;
        } else {
            if (w < 1101) {
                slidesPerPage1 = 3;
            } else {
                slidesPerPage1 = 4;
            }
        }
    }
    slidesCount1 = slides1 - slidesPerPage1;
    if (currentPosition1 > slidesCount1) {
        currentPosition1 -= slidesPerPage1;
    };
    currentMargin1 = - currentPosition1 * (100 / slidesPerPage1);
    slider1.style.marginLeft = currentMargin1 + '%';
    if (currentPosition1 > 0) {
        buttons1[0].classList.remove('inactive');
    }
    if (currentPosition1 < slidesCount1) {
        buttons1[1].classList.remove('inactive');
    }
    if (currentPosition1 >= slidesCount1) {
        buttons1[1].classList.add('inactive');
    }
}

setParams1();

function slideRight1() {
    if (currentPosition1 != 0) {
        slider1.style.marginLeft = currentMargin1 + (100 / slidesPerPage1) + '%';
        currentMargin1 += (100 / slidesPerPage1);
        currentPosition1--;
    };
    if (currentPosition1 === 0) {
        buttons1[0].classList.add('inactive');
    }
    if (currentPosition1 < slidesCount1) {
        buttons1[1].classList.remove('inactive');
    }
};

function slideLeft1() {
    if (currentPosition1 != slidesCount1) {
        slider1.style.marginLeft = currentMargin1 - (100 / slidesPerPage1) + '%';
        currentMargin1 -= (100 / slidesPerPage1);
        currentPosition1++;
    };
    if (currentPosition1 == slidesCount1) {
        buttons1[1].classList.add('inactive');
    }
    if (currentPosition1 > 0) {
        buttons1[0].classList.remove('inactive');
    }
};
var container = document.getElementById('container');
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition == 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
	
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};
