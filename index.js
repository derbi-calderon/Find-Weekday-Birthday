window.onload = function () {
var DD = 32, MM = 13, YYYY = -1, NYYYY, NMM, IDAY, day, flag = 0;

var month = ["January","February","March","April","May","June","July",
                      "August","September","October","November","December"]

document.getElementById("Enter_btn").addEventListener("click", thedayis);

document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        thedayis();
    }
});

function thedayis(){
    DD = document.getElementById("BD").value; 
    MM = document.getElementById("BM").value;
    YYYY = document.getElementById("BY").value;


    // if no input was recieved
    if(DD == 32 && MM == 13 && YYYY == -1){
        alert("Enter Birthday in the following format. \n (DD MM YYYY) \n example: 02 03 1997");
        return -1;
    }

    // taking care of negative values
    if(DD <= 0)
        {
            //Error Message: User has given invalid input for "Days" & "Months" fields
            if(MM <= 0){             
                alert(" We don't have negative or null days and months. \n \t \t Try again! ");
                return -1;
            }
            
            //Error Message: User has given invalid input for "Days" field
            alert(" We don't have negative or null days.\n \t \t Try again! " );
            return -1;
        }

    if(MM <= 0)
        {
            //Error Message: User has given invalid input for "Months" field
            alert( " We don't have negative or null months.\n \t \t Try again! ");
            return -1;
        }

    if(DD > 31 || MM > 12 || YYYY <= 0)
    {
        if(DD > 31 && MM > 12)
        {
            // Error Message
            YYYY <= 0 ? alert(" We have 12 months, the days of a month are up to 31. \n and a year should be a positive number. \n \t \t Try again! ") : alert("       We have 12 months and       \n       We have 12 months and       \n the days of a month are up to 31. \n            Try again!             ");
        
        }
        else if(DD > 31 && MM <= 12)
        {
            //Error Message: User has given invalid input for "Days" & "Years" fields or User has given invalid input for "Days" field
            YYYY <= 0 ? alert(" The days of a month are up to 31 and \n The days of a month are up to 31 and \n a year should be a positive number.  \n              Try again!               "): alert(" The days of a month are up to 31. \n            Try again!             ");
                
        }
        else if(DD <= 31 && MM > 12)
        {
            //Error Message: User has given invalid input for "Months" & "Years" fields
            //Error Message: User has given invalid input for "Months" field
            YYYY <= 0 ? alert("        We have 12 months and        \n a year should be a positive number. \n             Try again!              ") : alert(" We have 12 months. \n      Try again!      ");
        }
        //Error Message: User has given invalid input for "Years" field
        else if(DD <= 31 && MM <= 12 && YYYY <= 0)
        {
            alert(" A year should be a positive number. \n              Try again!              ")
        }
        return -1;
    }

    function negativeOne(){
        return -1;
    }

    switch(MM)
    {
        case 2:
            
            if((YYYY % 400) == 0 || ((YYYY % 4) == 0 && (YYYY % 100) != 0))
            {
                //Error Message: User has requested an invalid day for the month "February"
                //                and the requested "Year" is a leap year.
                DD > 29 ? (alert("  The year " + YYYY + " is a leap year. \n  So, February has up to 29 days.          \n           Try again!                     "), negativeOne): {};
                //Error Message: User has requested an invalid day for the month "February"
                //                and the requested "Year" is a leap year.
            }
            else
            {
                //Error Message: User has requested an invalid day for the month "February"
                //              and the requested "Year" is not a leap year.
                DD > 28 ? (alert(" The year " + YYYY + " isn't a leap year. \n So, February has up to 28 days.            \n           Try again!                       "), negativeOne) : {};
            }
            break;
            
        case 4:
            //Error Message: User has requested an invalid day for the month "April"
            DD > 30 ? (alert(" April has up to 30 days.  \n        Try again!        "), negativeOne) : {};
            break;
                
        case 6:
            //Error Message: User has requested an invalid day for the month "June"
            DD > 30 ? (alert(" June has up to 30 days. \n       Try again!        " ), negativeOne) : {};
            break;
        
        case 9:
            //Error Message: User has requested an invalid day for the month "September"
            DD > 30 ? (alert(" September has up to 30 days. \n          Try again!          "), negativeOne) : {};
            break;
            
        case 11:
            //Error Message: User has requested an invalid day for the month "November"
            DD > 30? (alert(" November has up to 30 days. \n         Try again!          "), negativeOne) : {};
            break;
    }

    MM <= 2 ? (NYYYY = YYYY - 1, NMM = 0): (NYYYY = YYYY, NMM = parseInt((4 * MM + 23) / 10), 10);

    var IDAY2 = (NYYYY / 4) - ((3 * ((NYYYY / 100) + 1) / 4));
    IDAY2 += 1;
    IDAY2 = parseInt(IDAY2, 10);
    console.log(IDAY2);


    //Calculating the day
    IDAY = 365 * YYYY; 
    // convert to numbers or it will add as string.
    IDAY = +IDAY + +DD;

    IDAY += 31 * (MM - 1);

    IDAY -= NMM; 

    IDAY += IDAY2;


    day = IDAY % 7;
    day = parseInt(day, 10);

    //This 'flag' is used for displaying the right ending after the numbers 
    DD != 11 && DD != 12 && DD != 13 ? flag = DD % 10 : {};


	
    switch(day)
    {
        case 0:
            document.getElementById("Message_box").innerHTML = " You were born on Saturday, ";
            break;
            
        case 1:
            document.getElementById("Message_box").innerHTML = " You were born on Sunday, ";
            break;
            
        case 2:
            document.getElementById("Message_box").innerHTML = " You were born on Monday, ";
            break;
            
        case 3:
            document.getElementById("Message_box").innerHTML = " You were born on Tuesday, ";
            break;
            
        case 4:
            document.getElementById("Message_box").innerHTML = " You were born on Wednesday, ";
            break;
            
        case 5:
            document.getElementById("Message_box").innerHTML = " You were born on Thursday, ";
            break;
            
        case 6:
            document.getElementById("Message_box").innerHTML = " You were born on Friday, ";
            break;
    }


	var b_day = month[MM-1] + " of " + YYYY + "!"; 
    if(flag == 1){
		document.getElementById("Messsage_box_2").innerHTML = (DD + "st of " + b_day);
    }
    else if(flag == 2){
		document.getElementById("Messsage_box_2").innerHTML = (DD + "nd of " + b_day);
    }
    else if(flag == 3){
		document.getElementById("Messsage_box_2").innerHTML = (DD + "rd of " + b_day);
    }
    else{
		document.getElementById("Messsage_box_2").innerHTML = (DD + "th of " + b_day);  
    }
	


    return 0;
}
}