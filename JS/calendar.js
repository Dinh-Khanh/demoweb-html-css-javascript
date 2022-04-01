const calendarDay = document.getElementById('calendar-day');
let monthEle = document.querySelector('.month-current');
let yearEle = document.querySelector('.year-current');
let currentDate = new Date().getDate();
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let innerCurrentCalendar = document.querySelector('.js-date-visit-selected');
let checkCurrentMonth = currentMonth;
let checkCurrentYear = currentYear;

// get month year
function displayInfo() {
    let currentMonthName = new Date(
        currentYear,
        currentMonth
    ).toLocaleString('en-us', { month: 'long' })
        
    monthEle.innerText = currentMonthName;
    yearEle.innerText = currentYear;
}
window.onload = displayInfo;
// get date
function getDaysInMonth() {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
}
function getDaysInMonthPrevious() {
    return new Date(currentYear, currentMonth, 0).getDate();
}
// get start day of month
function getStartDayInMonth(dateItem) {
    return new Date(currentYear, currentMonth, dateItem).getDay();
}

// active current day
function activeCurrentDay(day) {
    let day1 = new Date().toDateString();
    let day2 = new Date(currentYear, currentMonth, day).toDateString();
    return day1 == day2 ? 'active-date' : '';
}
// function get day
let getCurrentDay=(value)=>{
        let dayInWeek = new Date(currentYear, currentMonth, value).getDay();

                switch (dayInWeek)
                {
                        case 0:
                            {
                               return "Sunday";
                            }
                        case 1:
                        {
                            return "Monday";
                        }
                        case 2:
                        {
                           return  "Tuesday";
                        }
                        case 3:
                        {
                            return  "Wednesday";
                        }
                        case 4:
                        {
                            return "Thursday";
                        }
                        case 5:
                        {
                            return "Friday";
                        }
                        case 6:
                        {
                            return "Saturday";
                            
                        }
                }
}
// 

let dateEle = document.querySelector('.calendar-day');

let renderCurrentCalendar =(itemDay, itemMonth)=>
{
    innerCurrentCalendar.innerHTML =
    `
    <div class="">${itemDay}/${itemMonth+1} (${getCurrentDay(itemDay)})</div>
    `
}
renderCurrentCalendar(currentDate,currentMonth);


function renderDateOne() {
    let daysInMonth = getDaysInMonth();
    let lastDateMonthPrevious = getDaysInMonthPrevious();
    let startDay = getStartDayInMonth(1);
    let checkDay =null;
    for (let i = 0; i < startDay; i++) {
        dateEle.innerHTML += `
        <li class="date-checkbox calendar-day-checkbox month-notday">
            <div class="date-checkbox-label calendar-day-label">
                 <label for="">${lastDateMonthPrevious-startDay+i+1}</label>
            </div>
            <div class="date-checkbox-input calendar-day-input ">
                <div class ="month-notdate-sign"></div>
            </div>
       </li>
        `;
    }
    let dayLate = 0;
    for (let i = 0; i < daysInMonth; i++) {
        dateEle.innerHTML += `
        <li class="date-checkbox calendar-day-checkbox ${activeCurrentDay(i+1)}">
         <div class="date-checkbox-label calendar-day-label">
            <label for="" class="js-label-wrap-day" >${i+1}</label>
            </div>
         <div class="date-checkbox-input calendar-day-input">
            <label class="input-wrap js-input-wrap-day">
                    <input type="radio" name="date-input"> 
                    <span class="checkmark"></span>                                       
            </label>                                          
         </div>
        </li>
        `;
        dayLate = new Date(currentYear, currentMonth, i+1).getDay();
    }
   
    let j = 1;
    for(let i = dayLate; i<6; i++)
    {
        dateEle.innerHTML += `
                <li class="date-checkbox calendar-day-checkbox month-notday">
                    <div class="date-checkbox-label calendar-day-label">
                        <label for="">${j}</label>
                    </div>
                    <div class="date-checkbox-input calendar-day-input ">
                        <div class ="month-notdate-sign"></div>
                    </div>
            </li>
        `;
        j++;
    }
    let calendarDayLabel = document.querySelectorAll('.calendar-day-label');  
    let k = new Date(currentYear, currentMonth, 1).getDay();
    for(let x=0; x<= daysInMonth;x++)
    {
        checkDay = new Date(currentYear, currentMonth, x + 1).getDay();
        if(checkDay===6)
        {
            calendarDayLabel[x+k].classList.add('color-blue');
        }
        else if(checkDay===0)
        {
            calendarDayLabel[x+k]?.classList.add('color-red');
        }
    }
    let inputWrapDay = document.querySelectorAll('.js-input-wrap-day');
    let labelWrapDay = document.querySelectorAll('.js-label-wrap-day');
    for(let i=0 ; i<inputWrapDay.length; i++)
    {
        inputWrapDay[i].addEventListener('click', ()=>{
            daySelected = Number(labelWrapDay[i].textContent);
            let currentMonthName = new Date(
                currentYear,
                currentMonth
            ).toLocaleString('en-us', { month: 'long' })
                monthSelected = currentMonthName;
                yearSelected = currentYear;
                renderCurrentCalendar(daySelected,currentMonth);
                        // chage day month year
                let innerDayPageTwo = document.querySelector('.js-check__inf--day');
                let innerMonthPageTwo =document.querySelector('.js-check__inf--month');
                let innerYearPageTwo = document.querySelector('.js-check__inf--year');
                let innerDatePageTwo = document.querySelector('.js-check__inf--date');

                innerDayPageTwo.innerText = `${getCurrentDay(daySelected)}`;
                innerMonthPageTwo.innerText = `${monthSelected}`;
                innerDatePageTwo.innerText = `${daySelected}`;
                innerYearPageTwo.innerText = `${yearSelected}`;

                iconDownDate.classList.remove('close');
                iconUpDate.classList.add('close');
                dateVisitModal.classList.remove('open');
                // end change day month year
                checkConditionChangePage();
        })
    }
}

function renderDateTwo() {
    let daysInMonth = getDaysInMonth();
    let lastDateMonthPrevious = getDaysInMonthPrevious();
    let startDay =getStartDayInMonth(1);
    let checkDay =null;
    for (let i = 0; i < startDay; i++) {
        dateEle.innerHTML += `
        <li class="date-checkbox calendar-day-checkbox month-notday">
            <div class="date-checkbox-label calendar-day-label">
                 <label for="">${lastDateMonthPrevious-startDay+i+1}</label>
            </div>
            <div class="date-checkbox-input calendar-day-input ">
                <div class ="month-notdate-sign"></div>
            </div>
       </li>
        `;
    }
    
    for (let i = 1; i < currentDate; i++) {
        dateEle.innerHTML += `
        <li class="date-checkbox calendar-day-checkbox ">
        <div class="date-checkbox-label calendar-day-label">
           <label for="" class="js-label-wrap-day" >${i}</label>
           </div>
        <div class="date-checkbox-input calendar-day-input js-input-wrap-day-two">
           <div class ="month-notdate-sign"></div>
       </div>
       </li>
        `;
    }
    for (let i = currentDate; i <= daysInMonth; i++) {
        dateEle.innerHTML += `
        <li class="date-checkbox calendar-day-checkbox ${activeCurrentDay(i)}">
         <div class="date-checkbox-label calendar-day-label">
            <label for="" class="js-label-wrap-day" >${i}</label>
            </div>
         <div class="date-checkbox-input calendar-day-input">
            <div>
            <label class="input-wrap js-input-wrap-day js-input-wrap-day-two">
                   <input type="radio" name="date-input"> 
                   <span class="checkmark"></span>                                       
           </label>                                          
            
            </div>
         </div>
        </li>
        `;
    }
    dayLateCurrentMonth =new Date(currentYear, currentMonth, daysInMonth).getDay();
    let j=1;
    for(let i=dayLateCurrentMonth; i<6; i++)
    {
        dateEle.innerHTML += 
        `
            <li class="date-checkbox calendar-day-checkbox month-notday">
                <div class="date-checkbox-label calendar-day-label">
                    <label for="">${j}</label>
                </div>
                <div class="date-checkbox-input calendar-day-input ">
                    <div class ="month-notdate-sign"></div>
                </div>
            </li>
        `
        j++;
    }
    let calendarDayLabel = document.querySelectorAll('.calendar-day-label');  
    let k = new Date(currentYear, currentMonth, 1).getDay();
    for(let x=0; x<= daysInMonth;x++)
    {
        checkDay = new Date(currentYear, currentMonth, x + 1).getDay();
        if(checkDay===6)
        {
            calendarDayLabel[x+k].classList.add('color-blue');
        }
        else if(checkDay===0)
        {
            calendarDayLabel[x+k]?.classList.add('color-red');
        }
    }
    let inputWrapDay = document.querySelectorAll('.js-input-wrap-day-two');
    let labelWrapDay = document.querySelectorAll('.js-label-wrap-day');
    for(let i = 0 ; i<=daysInMonth; i++)
    {
        inputWrapDay[i]?.addEventListener('click', ()=>{
            daySelected = Number(labelWrapDay[i].textContent);
            let currentMonthName = new Date(
                currentYear,
                currentMonth
            ).toLocaleString('en-us', { month: 'long' })
            monthSelected = currentMonthName;
            yearSelected = currentYear;
            renderCurrentCalendar(daySelected,currentMonth);
                    // chage day month year
            let innerDayPageTwo = document.querySelector('.js-check__inf--day');
            let innerMonthPageTwo =document.querySelector('.js-check__inf--month');
            let innerYearPageTwo = document.querySelector('.js-check__inf--year');
            let innerDatePageTwo = document.querySelector('.js-check__inf--date');

            innerDayPageTwo.innerText = `${getCurrentDay(daySelected)}`;
            innerMonthPageTwo.innerText = `${monthSelected}`;
            innerDatePageTwo.innerText = `${daySelected}`;
            innerYearPageTwo.innerText = `${yearSelected}`;

            iconDownDate.classList.remove('close');
            iconUpDate.classList.add('close');
            dateVisitModal.classList.remove('open');
            // end change day month year
            checkConditionChangePage();

        })
    }
}
let checkBtn =0;
let btnPrev = document.querySelector('.month-previous-btn');
btnPrev.addEventListener('click', function () {
    if (currentMonth == 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }    
    if((currentMonth>checkCurrentMonth)||(currentYear>checkCurrentYear))
    {
        displayInfo();
        dateEle.innerHTML="";
        renderDateOne();
    }
    else if (currentMonth == checkCurrentMonth){
                displayInfo();
                dateEle.innerHTML="";
                btnPrev.classList.remove('month-previous-btn-active')

                renderDateTwo();
    }
    else{
        if (currentMonth == 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
    }
});
let btnNext = document.querySelector('.month-next-btn');
btnNext.addEventListener('click', function () {
    if (currentMonth == 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    if((currentMonth>checkCurrentMonth)||(currentYear>checkCurrentYear))
    {
        displayInfo();
        dateEle.innerHTML="";
        btnPrev.classList.add('month-previous-btn-active')
        renderDateOne();
    }
    else{
        if (currentMonth == 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }    
    }
});
renderDateTwo();
// CHANGE MONTH YEAR
// change month
let changeMonthYear =document.querySelector('.js-month-year');

let renderMonth=()=>{
    let dateInWeek = document.querySelector(".js-calendar-date");               
    let monthTitle =document.querySelector('.js-month-year');
    let calendarMonth =document.querySelector('.calendar-month');
    let monthTitleChange =document.querySelector('.js-month-year-change');

    monthTitle.classList.add('close');
    dateInWeek.classList.add('close');
    btnPrev.classList.add('close');
    btnNext.classList.add('close');
    calendarMonth.classList.add('calendar-month-center');
    monthTitleChange.classList.add('open')

    dateEle.innerHTML="";
    let k=1
    for (let i = 0; i < 4; i++) {
        for(let j=0; j<3; j++)
        {
            dateEle.innerHTML += `
            <li class="date-checkbox-label__monthchange-wrap js-date-checkbox-label__monthchange-wrap">
                <div class="date-checkbox-label__monthchange ">${k}</div>
            </li>
            `;
            k++;
        }
        dateEle.innerHTML += `<br>`;
    }
   let monthChange =document.querySelectorAll('.js-date-checkbox-label__monthchange-wrap');
    let monthChanged = document.querySelectorAll('.date-checkbox-label__monthchange-wrap')
    let monthChangedValue =document.querySelectorAll('.date-checkbox-label__monthchange')
    for (let i=0; i<checkCurrentMonth; i++)
    {
        monthChange[i].classList.add('disable-element')
    }
    for(let i=checkCurrentMonth; i< monthChanged.length;i++)
    {
        monthChanged[i].addEventListener('click',()=>{
            currentMonth =Number(monthChangedValue[i].textContent -1 ) ;
            monthTitleChange.classList.remove('open');
            monthTitle.classList.remove('close');
            dateInWeek.classList.remove('close');
            btnPrev.classList.remove('close');
            btnNext.classList.remove('close');
            dateEle.innerHTML="";
            if(currentMonth>checkCurrentMonth)
                {
                    displayInfo();
                    dateEle.innerHTML="";
                    btnPrev.classList.add('month-previous-btn-active')
                    renderDateOne();
                }
            else if (currentMonth == checkCurrentMonth){
                            displayInfo();
                            dateEle.innerHTML="";
                            btnPrev.classList.remove('month-previous-btn-active')
                            renderDateTwo();
                }
            else{
                    if (currentMonth == 11) {
                        currentMonth = 0;
                        currentYear++;
                    } else {
                        currentMonth = checkCurrentMonth;
                    }
                    renderDateTwo();
                }
        })
    }

}

changeMonthYear.addEventListener('click',renderMonth)

// END CHANGE MONTH YEAR