//On click of "View Details" button in Banner section toggle/change the Background Image using JS/JQuery (START)
var viewBtn = document.getElementById('viewBtn');
var clickCount = 0;
debugger
function changeBanner() {
    debugger
    clickCount = clickCount + 1;
    function firstImage() {
        document.getElementById('bannerPart').classList.add('firstImg');
        document.getElementById('bannerPart').classList.remove('secondImg');
        document.getElementById('bannerPart').classList.remove('thirdImg');
    }
    function secondImage() {
        document.getElementById('bannerPart').classList.remove('firstImg');
        document.getElementById('bannerPart').classList.add('secondImg');
        document.getElementById('bannerPart').classList.remove('thirdImg');
    }
    function thirdImage() {
        document.getElementById('bannerPart').classList.remove('firstImg');
        document.getElementById('bannerPart').classList.remove('secondImg');
        document.getElementById('bannerPart').classList.add('thirdImg');
    }
    if(clickCount == 1) {
        firstImage();        
    }
    else if(clickCount == 2) {
        secondImage();
    }
    else if(clickCount == 3) {
        thirdImage();
    }
    else {
        if(clickCount%3 == 1) {
            firstImage();
        }
        else if(clickCount%3 == 2) {
            secondImage();
        }
        else if(clickCount%3 == 0) {
            thirdImage();
        }
    }    
}
viewBtn.addEventListener('click', changeBanner);
changeBanner();
//On click of "View Details" button in Banner section toggle/change the Background Image using JS/JQuery (END)

//In last section "Finished Projects" and "Total Awards" cards should be appended using JS/JQuery (START)
var infoArray = [
    {
        ID : 'finishedProjects',
        TITLE: 'FINISHED PROJECTS',
        COUNTNUMBER: 214
    },
    {
        ID : 'totalAwards',
        TITLE: 'TOTAL AWARDS',
        COUNTNUMBER: 16
    }
];
for(var infoObj of infoArray) {
    var child = `<div class="card text-center border-0 rounded-0 card-box">
                    <div class="card-body d-flex flex-column align-items-center gap-2 py-4">
                    <h5 class="poppins-semibold m-0 text-nowrap card-box-number">${infoObj.COUNTNUMBER}</h5>
                    <p class="card-text poppins-medium text-center text-secondary">${infoObj.TITLE}</p>
                    </div>
                </div>`;
  document.getElementById(infoObj.ID).innerHTML = child;
}
//In last section "Finished Projects" and "Total Awards" cards should be appended using JS/JQuery (END)

//Add "Scroll to top" button(Floating button). On click of the button it should scroll to top of the page. (START)
var topBtn = document.getElementById('scrollToTop');
function scrollPage() {
    if(window.pageYOffset > 300) {
        topBtn.classList.add('show');
    }
    else {
        topBtn.classList.remove('show');
    }
}
window.addEventListener('scroll', scrollPage);
topBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
//Add "Scroll to top" button(Floating button). On click of the button it should scroll to top of the page. (END)