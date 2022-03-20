document.getElementById('education').onclick = function() {

    var x = document.getElementById('education-info').style.display;

    if (x == 'block') {
        document.getElementById('education-info').style = 'none';
    } else if (x == 'none') {
        document.getElementById('education-info').style = 'block';
    }
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}