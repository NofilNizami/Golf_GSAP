gsap.to("nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: "0.5",
    scrollTrigger:{
        trigger: "nav",
        scroller: "body",
        start: "top -25%",
        end: "top -30%",
        scrub:1

    }
})


gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -40%",
        end: "top -80%",
        scrub: 1
    }
})



// Cursor

var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursorblur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + 15 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";

})



// Giving Zoom Function On Mouse When It Hovers

var h4all = document.querySelectorAll("nav h4");

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})



// About Us 

gsap.from("#about-us img, #about-us-in", {
    y:50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        start: "top 80%",
        end: "top 65%",
        scrub: 3
    }
})


// Card

gsap.from(".card", {
    scale:0.8,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger:{
        trigger: ".card",
        scroller:"body",
        start: "top 80%",
        end: "top 65%",
        scrub: 2
    }
})


// Colon

gsap.to("#colon1", {
    y:40,
    x:40,
    duration: 1,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 3
    }
})

gsap.to("#colon2", {
    y:-40,
    x:-40,
    duration: 1,
    scrollTrigger:{
        trigger: "#colon2",
        scroller: "body",
        start: "top 90%",
        end: "top 45%",
        scrub: 3
    }
})


// Giving Zoom Function On Mouse When It Hovers on elem

var elemall = document.querySelectorAll(".elem");

elemall.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})


// Page1 Arrow

var arrow = document.querySelectorAll("#page1 #arrow");

arrow.forEach(function(arr){
    arr.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    arr.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})



// Page4 h1

gsap.to("#page4 h1", {
    y:-80,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})