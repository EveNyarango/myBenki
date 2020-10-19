let add = function(salary, wages, business, bonus, others){
    return salary + wages + business + bonus + others
}


$(document).ready(function () {
    $('#income').submit(function (event) {
        event.preventDefault();
        let nameInput = $('#name').val();
        let salary = parseInt($("#salary").val());
        let wages = parseInt($("#wages").val());
        let business = parseInt($("bizna").val());
        let bonus = parseInt($("#bonus").val());
        let others = parseInt($("#others").val());
        let result = add(salary, wages, business, bonus, others);
        alert(result);
    })

})