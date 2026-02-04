function showPage(page){
    document.querySelectorAll(".page-content").forEach(p => p.classList.remove("show"));
    document.querySelectorAll(".left-menu li").forEach(m => m.classList.remove("active"));

    const target = document.querySelector(`[data-content="${page}"]`);
    if(target) target.classList.add("show");

    const menu = document.querySelector(`[data-page="${page}"]`);
    if(menu) menu.classList.add("active");
}

document.querySelectorAll(".left-menu li").forEach(item => {
    item.addEventListener("click", function(){
        showPage(this.dataset.page);
    });
});

function toggleDark(){
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark");
}

/* 클릭 말풍선 효과 */
function kakakEffect() {
    const bubble = document.getElementById('speech-bubble');
    const msgs = ["깍각!", "반가워!", "어서와!", "멋져!", "눌렀어?"];
    bubble.innerText = msgs[Math.floor(Math.random() * msgs.length)];
    bubble.classList.add('active');
    setTimeout(() => { bubble.classList.remove('active'); }, 1500);
}