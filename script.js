document.onreadystatechange = function () {
    document.getElementById('content').style.visibility = "hidden";
    var state = document.readyState
    // console.log(state)
    if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('loader').style.visibility = "hidden";
            document.getElementById('content').setAttribute('class', "content");
            document.getElementById('content').style.visibility = "visible";
        }, 1500);
    }
}