function processData(input) {
    var inputs = input.split("\n");
    var strings = inputs[0];
    var count = 1;
    while(strings-- > 0) {
    var string = inputs[count++];
    var end = string.length - 1;
    var start = 0;
    var operations = 0;
    while(start < end) {
        operations += Math.abs(string.charCodeAt(end--) - string.charCodeAt(start++));
    }
        console.log(operations);
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