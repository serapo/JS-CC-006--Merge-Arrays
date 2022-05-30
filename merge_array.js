
let dizi1=[1,2,3];
let dizi2=[4,5,6];

function merge_function(a,b){
    if(a.length==0 || b.length==0 ){
        console.log("Array is empty!");
    }
    else{
     var birlesim=a.concat(dizi2);
     return birlesim;
    }
};

console.log(merge_function(dizi1,dizi2));