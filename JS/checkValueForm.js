const inputNameValue = document.getElementById('input-name');
const inputCellPhoneValue = document.getElementById('input-cell-phone');
const inputEmailValue = document.getElementById('input-email');
const tickIconOne = document.querySelector('.js-fa-circle-check-oneicon')
const closeIconOne = document.querySelector('.js-fa-times-circle-oneicon')
const tickIconTwo = document.querySelector('.js-fa-circle-check-twoicon')
const closeIconTwo = document.querySelector('.js-fa-times-circle-twoicon')
const tickIconThree = document.querySelector('.js-fa-circle-check-threeicon')
const closeIconThree = document.querySelector('.js-fa-times-circle-threeicon')

inputNameValue.addEventListener('input', ()=>{
    if(isNaN(inputNameValue.value) != false)
    {
        closeIconOne.classList.add('close');
        tickIconOne.classList.remove('close');
        checkName = true;
    }
    else{
        tickIconOne.classList.add('close');
        closeIconOne.classList.remove('close');
        checkName =null;
    }
    if(inputNameValue.value == ""){
        tickIconOne.classList.add('close');
        closeIconOne.classList.add('close');
        checkName= null;
    }
    console.log(checkName)
})
inputCellPhoneValue.addEventListener('input', ()=>{
    if(isNaN(inputCellPhoneValue.value) != true && ( /^[0-9]{10}$/.test(Number(inputCellPhoneValue.value))))
    {
        closeIconTwo.classList.add('close');
        tickIconTwo.classList.remove('close');
        checkCellPhone = true;
    }
    else{
        tickIconTwo.classList.add('close');
        closeIconTwo.classList.remove('close');
        checkCellPhone = null
    }
    if(inputCellPhoneValue.value == ""){
        tickIconTwo.classList.add('close');
        closeIconTwo.classList.add('close');
        checkCellPhone = null
    }
    console.log(checkCellPhone)
})
function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
inputEmailValue.addEventListener('input', ()=>{
    if(validateEmail(inputEmailValue.value)==true)
    {
        tickIconThree.classList.remove('close');
        closeIconThree.classList.add('close');
        checkEmail = true
        
    }
    else{
        tickIconThree.classList.add('close');
        closeIconThree.classList.remove('close');
        checkEmail = null
    }
    if(inputEmailValue.value == ""){
        tickIconThree.classList.add('close');
        closeIconThree.classList.add('close');
        checkEmail=null
    }
    console.log(checkEmail)
})
