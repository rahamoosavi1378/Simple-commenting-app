const boxText = document.querySelectorAll(".boxText");
const boxMore = document.querySelectorAll(".boxMore");
const lang = document.querySelector("#lang");
const align = document.querySelector("#align");
const title = document.querySelector("#title");
const comment = document.querySelector("#comment");

let toggleLanguage = () => {
    let lan = lang.querySelector(".dir-text");
    if (lan.innerText == "FA") {
        lan.innerText = "EN";
        title.style.direction = comment.style.direction = "ltr";
        title.style.borderRight = comment.style.borderRight = "none";
        title.style.borderLeft = comment.style.borderLeft = "5px solid #3a7";
        title.setAttribute("placeholder", "Title ...");
        comment.setAttribute("placeholder", "Comment ...");
        align.click();
    } else {
        lan.innerText = "FA";
        title.style.direction = comment.style.direction = "rtl";
        title.style.borderLeft = comment.style.borderLeft = "none";
        title.style.borderRight = comment.style.borderRight = "5px solid #3a7";
        title.setAttribute("placeholder", "موضوع ...");
        comment.setAttribute("placeholder", "دیدگاه ...");
        align.click();
    }
};

let toggleAlineText = () => {
    let text = align.querySelector(".dir-text");
    let view = align.querySelector(".dir-view");
    console.log(view);
    if (text.innerText == "rtl") {
        text.innerText = "ltr";
        title.style.direction = comment.style.direction = "ltr";
        view.classList.replace(
            "mdi-format-align-right",
            "mdi-format-align-left"
        );
    } else {
        text.innerText = "rtl";
        title.style.direction = comment.style.direction = "rtl";
        view.classList.replace(
            "mdi-format-align-left",
            "mdi-format-align-right"
        );
    }

    console.log(text, view);
};

let toggleBoxMore = (id = null) => {
    boxText[--id].querySelector(".boxMore").classList.toggle("hidden");
};
