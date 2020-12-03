// side menu 
const menu      = document.querySelector('.menu-list');
const cancelBtn = document.getElementById('cancel');
cancelBtn.addEventListener('click' ,() => {
    menu.classList.remove('active');
});

const menuBtn    = document.getElementById('menu');
menuBtn.addEventListener ('click' , () => {
    menu.classList.add('active');
});


// link menu list when click so it close
const link  = document.querySelectorAll('.menu-list li a');
link.forEach(function(e){
    e.addEventListener('click',()=> {
        menu.classList.remove('active')
    });
});

const sign = document.querySelectorAll('.menu-list .account a');
sign.forEach(function(e) {
    e.addEventListener('click',()=> {
        menu.classList.remove('active')
    });
})

// seacrh btn on desktop version
const seacrh = document.querySelector('.content #seacrh');
const overlay = document.querySelector('.seacrh-hiden');
seacrh.addEventListener('click' ,()=> {
    overlay.style.display = 'flex';
});
const cancelHide = document.querySelector('.seacrh-hiden #cancel-hide');
cancelHide.addEventListener('click' , ()=> {
   overlay.style.display = 'none';
    //console.log('index')
});




// menu list border
//let awal = 1;
//const menuList = document.querySelector('.menu-list');
//const link    = document.querySelectorAll('.menu-list li a');
/*for(let i = 0; i< link.length; i++) {
    link[i].addEventListener('click' , function(){
        link[i].classList.add('borderActive')
    });
 
}*/
/*
link.forEach(function(link){
    link.addEventListener('click',() => {
       link.classList.add('borderActive')
    });

});
*/

/* slider imager banner */
const slides = document.querySelectorAll('.content');
const prev  = document.querySelectorAll('#prevBtn');
const next  = document.querySelectorAll('#nextBtn');
let index = 1 ;

prev.forEach(function(a){
    a.addEventListener('click', function() {
    prevSlide();
    })
})

next.forEach(function(a){
    a.addEventListener('click', function() {
   nextSlide();
    })
})


function prevSlide() {
    if (index == 1) {
        index = slides.length-1;
    }
    else {
        index--;
    }
    changeSlide();
    console.log(slides[index])
 
}

function nextSlide() {
    if (index == slides.length-1) {
        index = 1;
    }
    else {
        index++;
    }
    changeSlide();
    console.log(slides[index])
 
}


function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        console.log(index)
    }
    slides[index].classList.add('active');
    //setInterval(alert('ok'),1000);

} 

//image slider auto play
function autoPlay () {
    nextSlide();

}
let time = setInterval(autoPlay,8000);

