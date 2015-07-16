


function setPickUpDateValues(firstName,lastName,emailAddress, Address, suiteApt, city, state, zipCode, pickupDate, pickupTime,json)
{       
        $.get("http://localhost:8000/scheduleApickUp.html/send",{json},function(data){
        if(data=="sent")
        {
            $("#message").empty().html("Email is been sent at . Please check inbox !");
        }
 });
}



function formatDate(date)
{
    var today = date;
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    var today = mm+'/'+dd+'/'+yyyy;
   return today;
    

}