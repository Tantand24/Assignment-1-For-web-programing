//function to turn mark to grade
function MarktoGrade(mark) {
    if (mark >= 90) {
        //A
        return "A"
    } else if (mark >= 80 && mark < 90) {
        //B
        return "B"
    } else if (mark >= 70 && mark < 80) {
        //C
        return "C"
    } else if (mark >= 60 && mark < 70) {
        //D
        return "D"
    } else if (mark >= 50 && mark < 60) {
        //E
        return "E"
    } else if (mark < 50) {
        //F
        return "F"
    }
}

//jquery
$(document).ready(() => {
    //function to check if mark valid
    function IsMarkValid(mark){
        //if empty
        if(mark == ""){
            $("#GradeReturn").text("Input a mark")
            return false
        }

        //check if it a number or not
        if(!isNaN(mark)){
            //check number to make sure it between 100 and 0
            if(mark <= 100 && mark >= 0){
                return true
            } else {
                $("#GradeReturn").text("Your Mark is out a bound, please input a value between 100 and 0")
                return false
            }
        } else {
            $("#GradeReturn").text("Your Mark is not a number, please input a number")
            return false
        }
    }

    //add listener to form on the submit button
    $('#MarktoGradeForm').on('submit', function(event) {
        //to prevent page reset
        event.preventDefault()

        //get the value from the form
        let Mark = $("#Mark").val()

        //Check for empty value
        if (IsMarkValid(Mark)){
            //input the mark get the Grade and apply to the main 
            let text = MarktoGrade(Mark)
            $('#GradeReturn').text(text)
        }
    })
})