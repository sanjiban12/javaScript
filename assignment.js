// https://github.com/sanjiban12/javaScript/blob/main/assignment.js
// 1st problem
function kilometerToMeter(n) {
    var kilometer = Math.abs(n);
    var meter = kilometer *1000;
    return meter;
}


// 2nd problem
function budgetCalculator(watch,phone,laptop){
    if(watch<=0){
        watch = 0;
    }
    if(phone<=0){
        phone = 0;
    }
    if(laptop<=0){
        laptop = 0;
    }
    var watchPrice = 50;
    var phonePrice =100;
    var laptopPrice = 500;
    price = ( watch * watchPrice + phone * phonePrice + laptop * laptopPrice );
    return price;
}


// 3RD PROBLEM
function hotelCost(days){
    var cost = 0;
    if (days <= 10) {
        cost = days * 100 ;  
    }
        else if ( days <= 20 ) {
            cost = 10*100 + (days-10) * 80;
    }
        else if (days >= 21) {
            cost = 10*100 + 10 * 80 +(days - 20) * 50;
    }
    else {
        cost = 0;
}
    return cost;
}
// 4 th problem

function megaFriend() {
    var name1 = [];  
    for (var i = 0; i <friends.length; i++) {
        var element = friends[i];
        var index = name1.indexOf(element);
        if (index == -1) {
            name1.push(element); 
        }
    }
    second;
}

function second() {
    var number = [];
            for (var i = 0; i < friends.length; i++) {
                var element1 = friends[i].length;
                number.push(element1);
            }
            third;
}

function third() {
    var max = number[0];
    for (var i = 0; i < number.length; i++) {
        var bigName = number[i];
        if (bigName > max) {
            max = bigName;
        }
    }
    return max;
}

