/*
Author: Matthew Merryfull
Date:   10/11/2012
Purpose: Branch of the future. A prototype for Westpac in order to move forward with
innovative financial services.
*/
// User Creds...
var customerId = 1;
var customerName = "customer";

$(function () {

    initCheckin();    

});

initCheckin = function() {

    // associate the "click" event to checking a person into a branch
    $('[data-role="branch-checkin"]').on('click', function (e) {
        e.preventDefault();

        $.ajax({
            type: 'PUT',
            url: "http://web.botfapi.local/api/CheckIn/" + customerId,
            data: { Id: customerId, Name: customerName, CheckedIn: !($(this).data("status")) },
            beforeSend: function () {
                $(this).find("h2.m-heading").text("Retrieving Status");
            },
            success: function(data) {
                $(this).data("status", parseJSON(data).CheckedIn);
            }
        });
        
    });

};