
var fullName = "";

function setName(newName){
    fullName = newName;
}
function getName(){
    return fullName;
}

exports.setName = setName;
exports.getName = getName;