const hero=document.querySelector(".hero");
window.addEventListener("scroll", () => { const offset = window.pageYOffset;
    if(hero){
        hero.style.backgroundPositionY = offset *0.4 + "px";}
    });
    document.querySelector('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            const target = document.querySelector(this.getAttribute("href"));
            if(target){
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
