const changeCourse = document.querySelector('.js-changecourse');
const changePageTwo = document.querySelector('.js-submit-btn-section-one');
const innerCoursePageOne =document.querySelector('.js-content-list')
const changeSeatBtn =document.querySelector('.js-changeseat');
const contentDateVisitHeading = document.querySelectorAll('.js-content-date-visit-heading')
// fetch API
fetch('https://api.npoint.io/0023ebd8d278aa31bd52')
.then(response => response.json())
.then(data => {renderCourse(data)});

function renderCourse(data){
//     canDrink: "can"
// heading: "&lt&lt9 / 7 ~ >> [Casual course] 2 hours all-you-can-drink 7           dishes 3850 yen ==> 3500 yen (tax included)"
// hour: "2"
// id: "1"
// img: "./assets/img/food-img.jpg"
// price: "3,500"
    data.map((item)=>{
        innerCoursePageOne.innerHTML += `
                <li class="content-item js-content-item">
                    <div class="food__content-base element-wrap-img">
                        <img src=${item.img} alt="" class="food__img item-img js-food__img ">
                        <div class="food__text text-des">
                            <div class="food__text-detail">
                                <div class="food__text-detail-hour">${item.hour} hours</div>
                                <div class="food__text-detail-can-drink">all you ${item.canDrink} drink</div>
                            </div>
                            <h3 class="food__text-heading js-food__text-heading">${item.heading}</h3>
                            <p class="food__text-price js-food__text-price">${item.price}  yen (tax included)</p> 
                        </div>
                        <button class="choise__btn js-choise__btn">Choice</button>
                    </div>
                    <div href="" class="food__content-more">
                            View course details
                            <i class="fa-solid fa-sort-down"></i>
                    </div>
                </li>
        `

    })
    const choiseBtns = document.querySelectorAll('.js-choise__btn');
    const courses =document.querySelectorAll('.js-content-item');
    const foodImg = document.querySelectorAll('.js-food__img');
    const foodTextHeading =document.querySelectorAll('.js-food__text-heading')
    const foodTextPrice =document.querySelectorAll('.js-food__text-price')

    for(let i=0; i<choiseBtns.length; i++)
        {
            choiseBtns[i].addEventListener('click', 
                    function(){
                        // choise course
                        for(let j =0; j<courses.length; j++)
                        {
                            if(j!==i)
                            {
                                courses[j].classList.add('close');
                                choiseBtns[i].classList.add('close');
                            }
                            else
                            {
                                courses[j].classList.add('paddind-step-two');
                                // chage course page two

                                let innerCourseImg = foodImg[j].getAttribute("src");
                                let innerCourseHeading = foodTextHeading[j].textContent;
                                let innerCoursePrice =foodTextPrice[j].textContent;
                                let innerCourse = document.querySelector('.js-check__inf--course--value');
                                innerCourse.innerHTML =
                                    `
                                        <div style="border: none" class="content-item js-content-item">
                                            <div class="food__content-base element-wrap-img ">
                                                <img src=${innerCourseImg} alt="" class="food__img item-img">
                                                <div class="food__text text-des">
                                                    <div class="food__text-detail">
                                                        <div class="food__text-detail-hour">2 hours</div>
                                                        <div class="food__text-detail-can-drink">all you can drink</div>
                                                    </div>
                                                    <h3 class="food__text-heading">${innerCourseHeading}</h3>
                                                    <p class="food__text-price">${innerCoursePrice}(tax included)</p> 
                                                </div>
                                                <button class="choise__btn js-choise__btn close">Choice</button>
                                            </div>
                                        </div>
                                    `
                                        
                                courseSelected = {
                                    img: innerCourseImg,
                                    heading: innerCourseHeading,
                                    price: innerCoursePrice
                                }
                                

                            }
                    }

                    // Open page one step two
                    for(let i=0; i<contentDateVisitHeading.length;i++)
                    {

                        contentDateVisitHeading[i].classList.remove('opacity-06')
                    }
                    changeSeatBtn.classList.remove("close");

                    const stepTwos = document.querySelectorAll(".page-one__step-two");
                    for(const stepTwo  of stepTwos)
                    {
                        stepTwo.classList.add("open");
                    }
                    const stepOnes = document.querySelectorAll(".page-one__step-one");
                    for(const stepOne  of stepOnes)
                    {
                        stepOne.classList.add("close");
                    }
                    const foodTextDetais = document.querySelectorAll(".food__text-detail");
                    for(const foodTextDetail  of foodTextDetais)
                    {
                        foodTextDetail.classList.add("close");
                    }
                    const foodContentMores =document.querySelectorAll(".food__content-more");
                    for(const foodContentMore  of foodContentMores)
                    {
                        foodContentMore.classList.add("close");
                    }
                    window.scrollTo(0, 0);
                    checkConditionChangePage();

                } 
            )
        }
        const pageOneStepOne =()=>{
            for(let i=0; i<contentDateVisitHeading.length;i++)
            {

                contentDateVisitHeading[i].classList.add('opacity-06')
            }

            for(const course of courses)
            {
                course.classList.remove('close');
            }
            const stepTwos = document.querySelectorAll(".page-one__step-two");
            for(const stepTwo  of stepTwos)
            {
                stepTwo.classList.remove("open");
            }
            const stepOnes = document.querySelectorAll(".page-one__step-one");
            for(const stepOne  of stepOnes)
            {
                stepOne.classList.remove("close");
            }
            courseSelected = null;
            changePageOneBtn.classList.remove('submit-btn-section-active')
        }
        
        changeCourse.onclick = pageOneStepOne;
}
