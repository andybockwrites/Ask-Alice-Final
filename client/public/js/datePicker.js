/* eslint-disable no-undef */
$(function () {
    var dateFormat = "mm/dd/yy",
        from = $("#from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1,
                changeYear: true,
                yearRange: "2004:2023",
                maxDate: 0
                
            })
            .on("change", function () {
                console.log(this)
                to.datepicker("option", "minDate", getDate(this));
            }),
        to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            changeYear: true,
            numberOfMonths: 1,
            yearRange: "2004:2023",
            maxDate: 0
        })
            .on("change", function () {
                from.datepicker("option", "maxDate", getDate(this));
            });

    function getDate(element) {
        console.log(element.value)
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
            console.log(date)
        } catch (error) {
            date = null;
        }
    }
});