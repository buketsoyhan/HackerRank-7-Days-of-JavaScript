function processData(input) {
    console.log(" ".repeat(8) + "*");
     for(var  i = 0 ; i < 9 ; i++){
     console.log(" ".repeat(8-i) + "0".repeat(2*i+1));
     }
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
 