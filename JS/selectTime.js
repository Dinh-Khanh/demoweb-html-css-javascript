const dateVisitTime = document.querySelector('.js-date-visit__time--list')
const arrowLeft = document.querySelector('.js-arrow-section-left')
const arrowRight = document.querySelector('.js-arrow-section-right')


function renderTime(){
    for (let i= 8; i<22;i++)
    {
        for(let j = 0; j<60; j++)
        {
            if(j%30===0)
            {
                dateVisitTime.innerHTML += 
                `
                    <div class="date-visit__time-item date-checkbox">
                        <div class="date-visit__time-item-label date-checkbox-label">
                            <div class="js-label-wrap-time" >
                                <div class="js-time-hour">${i}</div>
                                <div>:</div>
                                <div class="js-time-minutes">${j<1?"0" + j:j}</div>
                            </div> 
                        </div>
                        <div class="date-visit__time-item-input date-checkbox-input">
                            <label class="input-wrap js-input-wrap-time">
                                <input type="radio" name="date-input"> 
                                <span class="checkmark"></span>                                       
                            </label>   
                        </div>
                    </div>
                `
            }
        }
   
    }
    let dateVisitTimeItem = document.querySelectorAll('.date-visit__time-item');
    let k=0
    arrowLeft.classList.add('arrow-section-left-opacity');
    let pressLeftBtn = ()=>{
        for(let i=0; i<7;i++)
        {
            arrowRight.classList.remove('arrow-section-right-opacity')
            if(k===-1)
            {
                arrowLeft.classList.add('arrow-section-left-opacity');
                k=0;
                break;
            }
            else
            {
                dateVisitTimeItem[k].classList.remove('close');
                k--;

            }
        }
    }
    let pressRightBtn = ()=>{
        arrowLeft.classList.remove('arrow-section-left-opacity');
        for(let i=0; i<5;i++)
        {
            if(k>18)
            {
                arrowRight.classList.add('arrow-section-right-opacity')
                break;
            }
            else
            {
                dateVisitTimeItem[k].classList.add('close');
                k++;
            }
        }
    }
    arrowLeft.addEventListener('click', pressLeftBtn)
    arrowRight.addEventListener('click', pressRightBtn) 

    let inputWrapTime = document.querySelectorAll('.js-input-wrap-time');
    let timeHourValue = document.querySelectorAll('.js-time-hour');
    let timeMinutesValue =document.querySelectorAll('.js-time-minutes')
    for(let i=0;i<inputWrapTime.length; i++)
    {
        inputWrapTime[i].addEventListener('click', ()=>{
            for(let j=0; j<1; j++)
            {
                timeHourSelected = timeHourValue[i].textContent;
                timeMinutesSelected = timeMinutesValue[i].textContent;
                let innerTime = document.querySelector('.js-check__inf--time');
                innerTime.innerText = `${timeHourSelected + ":" + (timeMinutesSelected<1?""+timeMinutesSelected:timeMinutesSelected)}`
            }
            timeSelected = {
                hour: timeHourSelected,
                minutes: timeMinutesSelected

            }
            checkConditionChangePage();

        })
    }
}
renderTime();
