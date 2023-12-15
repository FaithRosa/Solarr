/*jslint browser:true */
"use strict";
function addMonths(elem) {
    var annualUseKw = 0, dailtyUsekw = 0, i = 0, x = 0;
    var months = document.getElementById(elem).getElementsByTagName('input');
    
    for (i = 0; i < months.length; i++) {
        x = Number(months[1].value);
        annualUseKw +=x;
    }
    dailtyUsekw = annualUseKw /365;
    return dailtyUsekw;
    } // end of function
    
    function sunHours() {
    var hrs;
    var theZone = document.forms.solarForm.zone.selectedIndex;
    theZone +=1;
    switch(theZone) {
        case 1:
            hrs=6;
            break;
        case 2:
            hrs=5.5;
            break;
        case 3:
            hrs=5;
            break;
        case 4:
            hrs=4.5;
            break;
        case 5:
            hrs=4.2;
            break;
        case 6:
            hrs=3.5;
            break;
        default:
            hrs=0;
    }  //end switch
    return hrs;
    } //end funciton
    
    function calculatePanel() {
        var userChoice = document.forms.solarForm.panel.selectedIndex;
        var panelOptions = document.forms.solarForm.panel.options;
        var power = panelOptions[userChoice].value;
        var name = panelOptions[userChoice].text;
        var x = [power, name];
        return x;
    } // end calculatePanel function
    
    function calculateSolar() {
        var dailtyUsekw = addMonths('mpc');
        console.log(dailtyUsekw);
    
        var sunHoursPerDay = sunHours();
        console.log(sunHoursPerDay);
    
        var minKwNeeds = dailtyUsekw/sunHoursPerDay;
        console.log(minKwNeeds);
    
        var realKWNeeds = minKwNeeds * 1.25;
        console.log(realKWNeeds);
    
        var realWattNeeds = realKWNeeds * 1000;
        console.log(realWattNeeds);
    
        var panelInfo = calculatePanel();
        var panelOutput = panelInfo[0];
        var panelName = panelInfo[1];
        console.log(panelOutput);
        console.log(panelName);
    
        var panelsNeeded = Math.ceil(realWattNeeds / panelOutput);
        console.log(panelsNeeded);
    
    } // end of solar function