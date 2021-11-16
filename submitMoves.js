var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    var receivedData = document.getElementById('data').value;
    console.log(receivedData);

    //making array of selected data from string with casteling and checkmate sign
    const moveArr = receivedData.match(/(([a-h]\d[#]?)|O-O(-O)?)/gm);
    console.log(moveArr);
    
    //changing every 'h' into 'b' note
    for (var i = 0 ; i < moveArr.length; i++) {
        moveArr[i] = moveArr[i].replace(/h/gm, 'b');
    };

    console.log(moveArr);

    //Making array uppercase
    toUpper = function(x){ 
        return x.toUpperCase();
    };

    upperArray = moveArr.map(toUpper);
    console.log(upperArray);

    //increasing the number of the octave by 1 to sync the exact octave 
    for (var i = 0 ; i < upperArray.length; i++) {
        var regexDigits = /\d/gm;
        var attNum = upperArray[i].match(regexDigits);
        //console.log(attNum);

        upperArray[i] = upperArray[i].replace(regexDigits, function() {
            return ++attNum;
        });
        //console.log(upperArray[i]);
    }
    console.log(upperArray);

    const whiteMoves = [];
    const blackMoves = [];
    for (i = 0; i < upperArray.length; i++) {
        if (i%2 == 0) {
            whiteMoves.push(upperArray[i]);
        } else {
            blackMoves.push(upperArray[i]);
        }
    };

    console.log(blackMoves);
    console.log(whiteMoves);

});


//var testArr = ['E2', 'B3', 'F5', 'D6', 'A4', 'O-O', 'C6'];
