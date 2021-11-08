window.addEventListener("scroll", ()=>{
    redisignHeader();
})

const redisignHeader = () => {
    const header = document.getElementById("header");
    if(window.scrollY - getComputedStyle(header).height.replace("px", "") <= 0){
        header.classList.add("home-page");
    } else {
        header.classList.remove("home-page");
    }
}

const addDelayOnNavItems = () => {
    const items = document.querySelectorAll(".nav-item");
    for(let i = 0; i < items.length; i++){
        //items[i].style.transitionDelay = i  * 0.075 + 0.05 + "s";
        //transition: property duration timing-function delay|initial|inherit;
        items[i].style.transition = `opacity .3s cubic-bezier(.52,1.12,.58,.64) ${i  * 0.05 + 0.12}s, margin .4s ease-in-out`
    }
}

const setCartEventListener = () => {
    cart.addEventListener("click", ()=>{
        document.getElementById("cart").classList.toggle("active")
    })
}

const insertObserver = new IntersectionObserver(function(e, o){
    e[0].target.classList.add("in");
    console.log(e);
},{
    root : null,
    rootMargin : `-${getComputedStyle(document.getElementById("header")).height}`
});
document.querySelectorAll(".insert").forEach((insert)=>{
    insertObserver.observe(insert)
});

redisignHeader();
addDelayOnNavItems();
setCartEventListener();