var person = function(){
    var fullName = "";

    function setName(newName){
        fullName = newName;
    }
    function getName(){
        return fullName;
    }

    return {
        setName: setName,
        getName: getName
    }
}(); // It is an IIFE, therefore this here is a singleton