//smooth scroll effect;
var navAnchorTag = document.querySelectorAll("#nav ul a");
for (var i = 1; i < navAnchorTag.length; i++) {
    navAnchorTag[i].addEventListener("click", function (e) {
        e.preventDefault();
        var tar = this.innerText.trim().toLowerCase();
        var last = 0;
        var interval = setInterval(function () {
            var top = document.getElementById(tar).getBoundingClientRect().y;
            if (top <= 0) {
                clearInterval(interval);
            }
            window.scrollBy(0, 10);
            last = last + 10;
            if (last >= 1935) {
                clearInterval(interval);
            }

        }, 2);

    });
}
//filling skill bar one by one if they appear to look;
var b = document;
b.addEventListener("scroll", check);
var skillBars = document.querySelectorAll(".skill > div");

function fillbar(bar) {
    let curWidth = 0;
    let targetWidth = bar.getAttribute("value");
    let interval = setInterval(function () {
        if (curWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        curWidth++;
        bar.style.width = curWidth + "%";
    }, 2);
}
var visit = new Array(skillBars.length);
for (let i = 0; i < visit.length; i++) {
    visit[i] = false;
}

function check() {
    for (let i = 0; i < skillBars.length; i++) {
        let barHeight = skillBars[i].getBoundingClientRect().top;
        if (visit[i] == false) {
            console.log(visit[i] + " 1");
            if (barHeight <= window.innerHeight) {
                console.log(visit[i]);
                console.log("bh " + barHeight + "wi " + window.innerHeight);
                visit[i] = true;
                fillbar(skillBars[i]);
            }

        } else {
            if (barHeight > window.innerHeight) {
                skillBars[i].style.width = 0 + "%";
                visit[i] = false;
            }
        }

    }

}