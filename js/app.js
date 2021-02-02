let boxText = document.querySelectorAll(".boxText");
let boxMore = document.querySelectorAll(".boxMore");
const lang = document.querySelector("#lang");
const align = document.querySelector("#align");
const title = document.querySelector("#title");
const comment = document.querySelector("#comment");
const url =
    "https://simple-commenting-app-781d9-default-rtdb.firebaseio.com/comments.json";

const read = document.querySelector(".read");

let btnSend = document.querySelector("#btnSend");

btnSend.addEventListener("click", () => {
    const comList_ = {
        title: false,
        comment: false,
        lang: "FA",
    };

    let comList = comList_;

    if (title.value == "") {
        alert("بدون موضوع نمیشه که :(");
    } else {
        comList["title"] = title.value;
    }
    if (comment.value == "") {
        alert("نظرتو بنویس :(");
    } else {
        comList["comment"] = comment.value;
    }

    comList["lang"] = lang.innerText;

    if ((comList.title == false) & (comList.comment == false)) {
        console.log("مقادیر رو پر نکردی ک :(");
    } else {
        axios
            .post(url, {
                data: comList,
            })
            .then((res) => {
                console.log(res);
                read.innerHTML = "";
                loadComment();
                eraser.click();
            })
            .catch((err) => {
                console.error(err);
            });
    }
});

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
};

function toggleBoxMore(id = null) {
    // console.log(id);
    let boxMore_ = id.querySelector(".boxMore");
    // boxMore_.classList.toggle("hidden");
    setTimeout(() => {
        boxMore_.classList.toggle("boxMoretoggle");
    }, 200);
}

let eraser = document.querySelector(".mdi-eraser");
eraser.addEventListener("click", () => {
    eraser.classList.add("animate__animated", "animate__bounceIn");
    setTimeout(() => {
        eraser.classList.remove("animate__animated", "animate__bounceIn");
    }, 1000);
    eraser.style.color = "ff2d2d";
    title.value = "";
    comment.value = "";
});

let heart = document.querySelector(".mdi-heart");
heart.addEventListener("click", () => {
    heart.classList.add("animate__animated", "animate__bounceIn");
    heart.classList.toggle("mdi-heart-ative");
    setTimeout(() => {
        heart.classList.remove("animate__animated", "animate__bounceIn");
        console.log("lol");
    }, 1000);
});

let eye = document.querySelector(".mdi-eye");
eye.addEventListener("click", () => {
    eye.classList.add("animate__animated", "animate__bounceIn");
    eye.classList.toggle("mdi-eye-active");
    setTimeout(() => {
        eye.classList.remove("animate__animated", "animate__bounceIn");
        console.log("lol");
    }, 1000);
});

let folder = document.querySelector(".mdi-folder");
folder.addEventListener("click", () => {
    folder.classList.add("animate__animated", "animate__bounceIn");
    folder.classList.toggle("mdi-folder-active");
    setTimeout(() => {
        folder.classList.remove("animate__animated", "animate__bounceIn");
        console.log("lol");
    }, 1000);
});

function loadComment() {
    axios
        .get(url)
        .then((res) => {
            for (const item in res.data) {
                let post = res.data[item].data;
                let item_ = item.split("-");
                let item__ = item_[1];
                read.innerHTML += `<div class="boxText" id='${item__}'>
                    <h4>${post.title}</h4>
                    <span class="more mdi mdi-dots-vertical" onclick="toggleBoxMore(${item__})"></span>
                    <p>${post.comment}</p>

                    <div class="boxMore">
                        <button class="btn mdi mdi-heart" title="لایک"></button>
                        <button class="btn mdi mdi-eye" title="یازدید"></button>
                        <button class="btn mdi mdi-folder" title="آرشیو"></button>
                        <button class="btn mdi mdi-delete" title="حذف"></button>
                    </div>
                </div>`;
            }
        })
        .catch((err) => {
            // console.log(err);
        });
}
