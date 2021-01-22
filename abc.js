var friends = ["Banana","Mango","Apple","Mango","Banana","Banana"];
function third() {
    var max = friends[0].length;
    for (var i = 0; i < friends.length; i++) {
        var bigName = friends[i];
        var element3 = bigName.length;
        if (element3 > max) {
            bigName = number[i];
        }
        return bigName;
    }
    third(friends);
