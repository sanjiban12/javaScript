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
        return name12 ;
        function name12(name1) {
            var number = [];
            for (var i = 0; i < name1.length; i++) {
                var element = name1[i].length;
                number.push(element);
            }
            return number;
        }
    }
    
    var aa = megaFriend(friends);
    console.log(aa);