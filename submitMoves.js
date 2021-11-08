var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    var receivedData = document.getElementById('data').value;
    console.log(receivedData);

    //making array of selected data from string with casteling and checkmate sign
    const moveArr = receivedData.match(/(([a-h]\d[#]?)|O-O(-O)?)/gm);
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
});