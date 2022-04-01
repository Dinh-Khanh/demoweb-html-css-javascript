const selectPeople =document.querySelectorAll('.js-number-visitor-select');

for(let i=0 ; i<selectPeople.length; i++)
{
    selectPeople[i].addEventListener('click', ()=>{
       
        document.getElementById('select-people').innerHTML =  selectPeople[i].textContent;
        peopleSelected = selectPeople[i].textContent;
        numberVisitorModal.classList.remove('open');
        let innerPeople =document.querySelector('.js-check__inf--people');
        innerPeople.innerText = `${peopleSelected}`;
        checkConditionChangePage();

    })
}