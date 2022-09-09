function processData(myArray) {
    var arr = [];

    for (let i=0; i<myArray.length;i++) {
        if (arr.indexOf(myArray[i]) === -1){
            arr.push(myArray[i]);
        }
    }
    
    var sortedArr = arr.sort(function(a, b){
       return b - a; 
    });
    
    console.log(sortedArr[1]);
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});