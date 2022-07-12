document.onreadystatechange = function () {
    document.getElementById('content').style.visibility = "hidden";
    var state = document.readyState
    // console.log(state)
    if (state == 'complete') {
        function onClickNavHandler() {
            for (const link of document.querySelectorAll(".site")) {
                console.log(link)
                link.addEventListener('click', function (event) {
                    // hide all containers
                    document.querySelectorAll(".site")
                        .forEach(el => document.querySelector(`.${el.getAttribute('href').substring(1)}`).style.display = 'none');

                    // remove active class
                    document.querySelectorAll(".site")
                        .forEach(el => el.classList.remove('active'));

                    // get the link that was clicked and target that container
                    document.querySelector(`.${event.currentTarget.getAttribute('href').substring(1)}`).style.display = "grid";

                    // add active class to node element
                    link.classList.add('active');

                    scroll(0,0)
                })
            }
        }
        onClickNavHandler();

        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('loader').style.visibility = "hidden";
            document.getElementById('content').setAttribute('class', "content");
            document.getElementById('content').style.visibility = "visible";
        }, 1500);
    }
}