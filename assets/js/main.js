function analizeDateInputs(){
    const dayInput = document.getElementById('dayInput').value;
    const monthInput = document.getElementById('monthInput').value;
    const yearInput = document.getElementById('yearInput').value;

    console.log(dayInput, monthInput, yearInput);

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    console.log(currentDay, currentMonth, currentYear);

    let monthsGap = 0
    let daysGap = currentDay - dayInput;

    if (daysGap >= 0){
        monthsGap += 1;
    } else {
        daysGap += new Date(currentYear, currentMonth, 0).getDate();
    }

    monthsGap += 12 + currentMonth - monthInput
    let yearsGap = 0
    
    if (monthsGap >= 12){
        monthsGap -= 12;
        yearsGap += 1;
    }

    yearsGap += (currentYear - 1) - yearInput
    
    console.log(yearsGap, monthsGap, daysGap)
}

document.getElementById('results').addEventListener('click', function(){
    analizeDateInputs();
});