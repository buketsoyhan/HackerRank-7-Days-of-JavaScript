function processData(input) {
    let rows = input.split('\n');
    let max = rows[0].split(' ').map(Number)[1];
    let arr = rows[1].split(' ').map(Number);
    arr = arr.sort(function(a, b){return a-b}); 
    let i = 0;
    while(max>=0) {
        max -= arr[i];
        i++;
    }
    console.log(i-1);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});