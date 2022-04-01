const sliderOne = document.getElementById('sliderOne')
const sliderOneAfter = window.getComputedStyle(sliderOne, '::after');
const sliderOneBefore = window.getComputedStyle(sliderOne, '::before');
const sliderTwo = document.getElementById('sliderTwo')
const sliderTwoAfter = window.getComputedStyle(sliderTwo, '::after');
const sliderTwoBefore = window.getComputedStyle(sliderTwo, '::before');
const sliderThree = document.getElementById('sliderThree')
const sliderThreeAfter = window.getComputedStyle(sliderThree, '::after');
const sliderThreeBefore = window.getComputedStyle(sliderThree, '::before');


sliderOne.classList.add('add-hover')
sliderTwo.classList.add('add-hover')
sliderThree.classList.add('add-hover')

sliderOne.style.setProperty('--sliderOneBackColor','#FFF9E7');
sliderOne.style.setProperty('--sliderOneBackColor','#FFF9E7'); 

// 

const pageOne =document.querySelector('.page-one');
const pageTwo =document.querySelector('.page-two');
const pageThree =document.querySelector('.page-three');
const returnPageOneBtn = document.querySelector('.js-return-page-one')
const returnPageTwoBtn = document.querySelector('.js-return-page-two')
const changePageTwoBtn = document.getElementById('js-page-tow__submit-btn-next')
const checkFirstVisits = document.getElementsByName('checkFirstVisit');
// 



sliderOne.addEventListener('click', ()=>{
    pageOne.classList.remove('close');
    pageTwo.classList.remove('open');
    sliderTwo.classList.remove('active-slider-color');
    sliderOne.classList.add('active-slider-color');

    sliderTwo.style.removeProperty('--sliderTwoBackColor','#FFF9E7');
    sliderTwo.style.removeProperty('--sliderTwoBackColor','#FFF9E7');   
    sliderOne.style.setProperty('--sliderOneBackColor','#FFF9E7');
    sliderOne.style.setProperty('--sliderOneBackColor','#FFF9E7'); 


    window.scrollTo(0, 0);
})
returnPageOneBtn.addEventListener('click',()=>{
    pageOne.classList.remove('close');
    pageTwo.classList.remove('open');
    sliderTwo.classList.remove('active-slider-color');
    sliderOne.classList.add('active-slider-color');

    sliderTwo.style.removeProperty('--sliderTwoBackColor','#FFF9E7');
    sliderTwo.style.removeProperty('--sliderTwoBackColor','#FFF9E7');   
    sliderOne.style.setProperty('--sliderOneBackColor','#FFF9E7');
    sliderOne.style.setProperty('--sliderOneBackColor','#FFF9E7'); 



    window.scrollTo(0, 0);
})


// 
changePageTwoBtn.addEventListener("click", (event)=>{
    if(checkName != null && checkCellPhone != null && checkEmail != null)
    {
        pageTwo.classList.add('close');
        pageThree.classList.add('open');
        sliderTwo.classList.remove('active-slider-color');
        sliderThree.classList.add('active-slider-color');
        
        sliderThree.style.setProperty('--sliderThreeBackColor','#FFF9E7');
        sliderThree.style.setProperty('--sliderThreeBackColor','#FFF9E7');   
        sliderTwo.style.removeProperty('--sliderTwoBackColor','#FFF9E7');
        sliderTwo.style.removeProperty('--sliderTwoBackColor','#FFF9E7'); 
    
        window.scrollTo(0, 0);
        event.preventDefault();
    }
})
sliderThree.addEventListener("click", (event)=>{
    if(checkName != null && checkCellPhone != null && checkEmail != null)
    {
        pageTwo.classList.add('close');
        pageThree.classList.add('open');
        sliderTwo.classList.remove('active-slider-color');
        sliderThree.classList.add('active-slider-color');
        
        sliderThree.style.setProperty('--sliderThreeBackColor','#FFF9E7');
        sliderThree.style.setProperty('--sliderThreeBackColor','#FFF9E7');   
        sliderTwo.style.removeProperty('--sliderTwoBackColor','#FFF9E7');
        sliderTwo.style.removeProperty('--sliderTwoBackColor','#FFF9E7'); 
    
        window.scrollTo(0, 0);
        event.preventDefault();
        sliderTwo.addEventListener('click', ()=>{
            pageTwo.classList.remove('close');
            pageThree.classList.remove('open');
            sliderTwo.classList.add('active-slider-color');
            sliderThree.classList.remove('active-slider-color');
        
            sliderThree.style.removeProperty('--sliderThreeBackColor','#FFF9E7');
            sliderThree.style.removeProperty('--sliderThreeBackColor','#FFF9E7');   
            sliderTwo.style.setProperty('--sliderTwoBackColor','#FFF9E7');
            sliderTwo.style.setProperty('--sliderTwoBackColor','#FFF9E7'); 
        
            window.scrollTo(0, 0);
        })
    }
})
returnPageTwoBtn.addEventListener('click', ()=>{

    pageTwo.classList.remove('close');
    pageThree.classList.remove('open');
    sliderTwo.classList.add('active-slider-color');
    sliderThree.classList.remove('active-slider-color');

    sliderThree.style.removeProperty('--sliderThreeBackColor','#FFF9E7');
    sliderThree.style.removeProperty('--sliderThreeBackColor','#FFF9E7');   
    sliderTwo.style.setProperty('--sliderTwoBackColor','#FFF9E7');
    sliderTwo.style.setProperty('--sliderTwoBackColor','#FFF9E7'); 

    window.scrollTo(0, 0);
})
