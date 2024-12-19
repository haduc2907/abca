const main = document.querySelector("#main");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const all = document.querySelector("#all");

no.addEventListener("mouseenter", ()=>{
    setTimeout(()=>{
        let randomTop = (Math.random() * (window.innerHeight - 200));
        let randomLeft = (Math.random() * (window.innerWidth - 300));
        main.style.top = `${randomTop}px`
        main.style.left = `${randomLeft}px`
    })
})
no.addEventListener("click", ()=>{
    setTimeout(()=>{
        let randomTop = (Math.random() * (window.innerHeight - 200));
        let randomLeft = (Math.random() * (window.innerWidth - 300));
        main.style.top = `${randomTop}px`
        main.style.left = `${randomLeft}px`
    })
})

yes.addEventListener("click", ()=>{
    setInterval(()=>{
        let randomTop = (Math.random() * (window.innerHeight - 200));
        let randomLeft = (Math.random() * (window.innerWidth - 300));
        let htmls = `<div class="main" id="main" style="top: ${randomTop}px; left: ${randomLeft}px">
        <div class="des">
            Bạn có muốn tải?
        </div>
        <div class="respone">
            <div class="yes">
                Có
            </div>
            <div class="no">
                Không
            </div>
        </div>
    </div>`
    all.innerHTML += htmls;
    },200)
})