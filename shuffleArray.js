function shuffle(arr){
    let len = arr.length;
    while(len > 0){
    len--;
    let exchanged_Number = Math.floor((Math.random())*len);
    let temp = arr[len];
    arr[len] = arr[exchanged_Number];
    arr[exchanged_Number] = temp;
}
    return arr;
}

console.log(shuffle([3,5,6,7,8,5,3,4]));