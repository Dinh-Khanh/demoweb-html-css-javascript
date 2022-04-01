const innerSeatPageOne =document.querySelector('.js-content-item-selectSeat-step2')

fetch('https://api.npoint.io/0b271614af868f74cbd2')
.then(response => response.json())
.then(data => {renderSeat(data)});

function renderSeat(data){
    data.map((item)=>
    {
        innerSeatPageOne.innerHTML += 
        `
            <li class="content-item js-content-item-seat content-item-seat ">
                    <img src=${item.img} alt="" class="food__img item-img js-seat__img">
                    <div class="selectSeat-des text-des">
                        <h3 class="selectSeat-heading js-selectSeat-heading">${item.heading}</h3>
                        <p class="selectSeat-text">${item.subHeading}</p> 
                    </div>
                    <button class="choise__btn js-choise__btn-seat">Choice</button>
            </li>
        `
        const seats =document.querySelectorAll('.js-content-item-seat');
        const choiceSeatBtns = document.querySelectorAll('.js-choise__btn-seat');
        const seatImg =document.querySelectorAll('.js-seat__img');
        const seatHeading =document.querySelectorAll('.js-selectSeat-heading');
        for(let i=0; i< choiceSeatBtns.length; i++)
        {
            choiceSeatBtns[i].addEventListener('click', 
                function()
                {
                    
                    for(let j =0; j<seats.length; j++)
                    {
                        if(j!==i){
                            seats[j].classList.add('close');
                            choiceSeatBtns[i].classList.add('close');
                            
                        }
                        else{
                        seats[j].classList.add('seat__content-page-two');
                        let innerSeat =document.querySelector('.js-check__inf--seat');
                        let innerSeatImg =seatImg[j].getAttribute("src");
                        let innerSeatHeading =seatHeading[j].textContent;
                        innerSeat.innerHTML = 
                            `
                            <h3 class="js-check__inf--seat--heading">Reserved seat</h3>
                                <div class="seat__content-page-two">
                                    <img src=${innerSeatImg} alt="" class="food__img item-img js-food__img">
                                    <div class="selectSeat-des text-des">
                                        <h3 class="selectSeat-heading">${innerSeatHeading}</h3>
                                        <p class="selectSeat-text">Change fee: None</p> 
                                    </div>
                                </div>
                                `;
                        seatSelected = {
                            img: innerSeatImg,
                            heading: innerSeatHeading
                        }
                        checkSeatSelected = 1;
                        }
                    }
                    checkConditionChangePage();
                })
        }
        changeSeatBtn.onclick = ()=>
        {
                for(let i =0; i<seats.length; i++)
                {
                        seats[i].classList.remove('close');
                        choiceSeatBtns[i].classList.remove('close');
                        seats[i].classList.remove('seat__content-page-two');
                }
                seatSelected = null;
                checkSeatSelected = 0;
                changePageOneBtn.classList.remove('submit-btn-section-active')
        }
        
    })
}


