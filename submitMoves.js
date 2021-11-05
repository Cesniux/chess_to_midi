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
});