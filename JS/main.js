const dateVisitModal = document.querySelector('.js-date-visit-modal')
const dateVisitDateItem =document.querySelector('.js-date-visit__date-item')
const numberVisitor =document.querySelector('.js-number-visitor');
const clickMain =document.getElementById("main");
const dateVisitSelected =document.querySelector('.js-date-visit-selected')
const numberVisitorModal =document.querySelector('.js-number-visitor-modal')
const iconDownPeople =document.querySelector('.js-people-section-wrap-icondown')
const iconUpPeople = document.querySelector('.js-people-section-wrap-iconup')
const iconDownDate =document.querySelector('.js-date-visit__date-item-icondown') 
const iconUpDate =document.querySelector('.js-date-visit__date-item-iconup') 

let day = 2;
// click select number visitor
numberVisitor.onclick = () =>{
    iconDownPeople.classList.toggle('close');
    iconUpPeople.classList.toggle('close');
    numberVisitorModal.classList.toggle('open');

}


//end click select number visitor

// click select date visit
dateVisitDateItem.onclick = ()=>{
    iconDownDate.classList.toggle('close');
    iconUpDate.classList.toggle('close');
    dateVisitModal.classList.toggle('open');
}
//end click select date visit

// begin click in side modal
clickMain.onclick = () =>{
    dateVisitModal.classList.remove('open');
    numberVisitorModal.classList.remove('open');
}
numberVisitor.addEventListener('click', function(event){
    event.stopPropagation();
    dateVisitModal.classList.remove('open');
})
numberVisitorModal.addEventListener('click', function(event){
    event.stopPropagation();

})
dateVisitDateItem.addEventListener('click', function(event){
    event.stopPropagation();
    numberVisitorModal.classList.remove('open');
})
dateVisitModal.addEventListener('click', function(event){
    event.stopPropagation();

})
// end click in side modal

