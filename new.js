    var friends = ["Banana","Mango","Apple","Mango","Banana","Banana"];
    function megaFriend() {
        var name1 = [];  
        for (var i = 0; i <friends.length; i++) {
            var element = friends[i];
            var index = name1.indexOf(element);
            if (index == -1) {
                name1.push(element); 
            }
    
        }
        return second ();
    }
    function second() {
        number = [];
        for (ver i =0; i < name1.length, i++) {
            var element1 = friends[i];
            var num = name1.length(element1);
            number.push(num);
        }
       return number; 
    }

    var aa = megaFriend(friends);
    console.log(aa);