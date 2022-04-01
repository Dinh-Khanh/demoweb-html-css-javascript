const changePageOneBtn =document.querySelector('.js-submit-btn-section-one');

let checkConditionChangePage =()=>{
   
        if((courseSelected != null )&& (checkSeatSelected == 1) && (daySelected != null) && (timeSelected !=null) && (peopleSelected != null) )
        { 
            changePageOneBtn.classList.add('submit-btn-section-active')
            changePageOneBtn.addEventListener('click',()=>{
                pageOne.classList.add('close');
                pageTwo.classList.add('open');
                sliderOne.classList.remove('active-slider-color');
                sliderTwo.classList.add('active-slider-color');
            
                sliderTwo.style.setProperty('--sliderTwoBackColor','#FFF9E7');
                sliderTwo.style.setProperty('--sliderTwoBackColor','#FFF9E7');   
                sliderOne.style.removeProperty('--sliderOneBackColor','#FFF9E7');
                sliderOne.style.removeProperty('--sliderOneBackColor','#FFF9E7'); 
            
                window.scrollTo(0, 0);
            })
    
            sliderTwo.addEventListener('click', ()=>{
                pageOne.classList.add('close');
                pageTwo.classList.add('open');
                sliderOne.classList.remove('active-slider-color');
                sliderTwo.classList.add('active-slider-color');
            
                sliderTwo.style.setProperty('--sliderTwoBackColor','#FFF9E7');
                sliderTwo.style.setProperty('--sliderTwoBackColor','#FFF9E7');   
                sliderOne.style.removeProperty('--sliderOneBackColor','#FFF9E7');
                sliderOne.style.removeProperty('--sliderOneBackColor','#FFF9E7'); 
    
                window.scrollTo(0, 0);
            })
        }
}
