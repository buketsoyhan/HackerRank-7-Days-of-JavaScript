process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////


function main() {
    var t = parseInt(readLine());
    var initialSize = null;
    for(var i = 0; i < t; i++)
    {
        var n = parseInt(readLine());
        initialSize = 1;
        while(n!=0)
        {
            initialSize=(2*initialSize);        
            --n;
            if(n!=0)
            {
                initialSize+=1; 
                --n;
            }
        }
        console.log(initialSize);
    }
}