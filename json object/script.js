var obj1 = {"name":"Sai","Age":"20"};
var obj2 = {"Age":"20","name":"Sai"};

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
for(key in obj1) { 
if(obj1[key] == obj2[key]) {
    continue;
}
else {
    flag=false;
    break;
}
}
}
else {
flag=false;
}