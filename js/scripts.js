// income 
let add1 = function (salary, wages, business, bonus, others) {
    return salary + wages + business + bonus + others
}

$(document).ready(function () {

    $('#income').submit(function (event) {
        event.preventDefault();
        let nameInput = $('#name').val();
       
        let salary = parseInt($("#salary").val());
        let wages = parseInt($("#wages").val());
        let business = parseInt($("#bizna").val());
        let bonus = parseInt($("#bonus").val());
        let others = parseInt($("#others1").val());
        let result = add1(salary, wages, business, bonus, others);
        alert(result);
        
    })

})

// Expenditure
let add = function (rent, food, medical, fees, entertainment, others2) {
    return rent + food + medical + fees + entertainment + others2
}

$(document).ready(function () {
    $('#expenditure').submit(function (event) {
        event.preventDefault();
        let rent = parseInt($("#rent").val());
        let food = parseInt($("#food").val());
        let medical = parseInt($("#medical").val());
        let fees = parseInt($("#fees").val());
        let entertainment = parseInt($("#entertain").val());
        let others2 = parseInt($("#others2").val());
        // alert(others2)
        let result2 = add(rent, food, medical, fees, entertainment, others2);
        alert(result2)
    })
})

// alerts expense 
if(add1 >= add){
    // event.preventDefault();
alert("Thank you")
}else{
    alert("sorry")
}
