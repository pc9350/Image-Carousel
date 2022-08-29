const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

slides.forEach(function(slide,index) {
    console.log(index*100);
    slide.style.left = `${index * 100}%`; 
    console.log(slide.style.left);
});

let counter = 0;
nextBtn.addEventListener('click',function(){
    counter++;
    carousel();
});
prevBtn.addEventListener('click',function(){
    counter--;
    carousel();
});

function carousel() {

if(counter === slides.length){
    counter = 0;
}
if(counter < 0){
    counter = slides.length - 1;
}
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}