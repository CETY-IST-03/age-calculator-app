
function resetErrors(){
    document.getElementById('dayError').innerText = "";
    document.getElementById('monthError').innerText = "";
    document.getElementById('yearError').innerText = "";
    document.getElementById("dayContainer").classList.remove("error");
    document.getElementById("monthContainer").classList.remove("error");
    document.getElementById("yearContainer").classList.remove("error");
    document.getElementById('yearResult').innerText = "--";
    document.getElementById('monthResult').innerText = "--";
    document.getElementById('dayResult').innerText = "--";
}
function setYearError(message){
    document.getElementById("yearContainer").classList.add("error");
    document.getElementById('yearError').innerText = message;
}
function setMonthError(message){
    document.getElementById("monthContainer").classList.add("error");
    document.getElementById('monthError').innerText = message;
}
function setDayError(message){
    document.getElementById("dayContainer").classList.add("error");
    document.getElementById('dayError').innerText = message;
}

function analyzeDateInputs(){
    resetErrors();
    const userDay = parseInt(document.getElementById('dayInput').value);
    const userMonth = parseInt(document.getElementById('monthInput').value);
    const userYear = parseInt(document.getElementById('yearInput').value);
    
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const maximunAge = 122;
    
    let hasValidationError = false;

    if (isNaN(userYear)) {
        setYearError("This field is required");
        hasValidationError = true;
    }else if (userYear <= currentYear - maximunAge ){
        setYearError("Must be a valid year");
        hasValidationError = true;
    }else if (userYear > currentYear){
        setYearError("Must be in the past")
        hasValidationError = true;
    }
    
    if (isNaN(userMonth)) {
        setMonthError("This field is required")
        hasValidationError = true;
    } else if (userMonth <= 0 || userMonth > 12){
        setMonthError("Must be a valid month")
        hasValidationError = true;
    } else if (userYear == currentYear && userMonth > (currentMonth + 1)) {
        setMonthError("Must be in the past")
        hasValidationError = true;
    }
    
    const daysInuserMonth = new Date(userYear, userMonth, 0).getDate();
    if (isNaN(userDay)){
        setDayError("This field is required");
        hasValidationError = true;
    } else if (userDay <= 0 || userDay > daysInuserMonth ){
        setDayError("Must be a valid date");
        hasValidationError = true;
    } else if (userYear == currentYear && userMonth == (currentMonth + 1) && userDay > currentDay){
        setDayError("Must be in the past");
        hasValidationError = true;
    }
    
    
    if (hasValidationError) return

    let ageInDays = currentDay - userDay;
    let ageInMonths = 0
    let ageInYears = 0
    
    if (ageInDays >= 0){
        ageInMonths += 1;
    } else {
        ageInDays += new Date(currentYear, currentMonth, 0).getDate();
    }
    
    ageInMonths += 12 + currentMonth - userMonth
    
    if (ageInMonths >= 12){
        ageInMonths -= 12;
        ageInYears += 1;
    }
    
    ageInYears += (currentYear - 1) - userYear
    

    document.getElementById('yearResult').innerText = ageInYears;
    document.getElementById('monthResult').innerText = ageInMonths;
    document.getElementById('dayResult').innerText = ageInDays;
}

document.getElementById('results').addEventListener('click', function(){
    analyzeDateInputs();
});