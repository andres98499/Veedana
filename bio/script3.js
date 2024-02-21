gsap.from('.logo div',{
    opacity:0,
    delay:1,
    x:20
})

const menu_items = document.querySelector('.menu-items')
gsap.from(menu_items.children ,{
    opacity:0,
    c:0,
    duration:1,
    delay:1.5,
    stagger:{
        amount:1
    }
})

gsap.utils.toArray('.title').forEach(title=>{
    gsap.fromTo(title,{
        letterSpacing:'10px',
        opacity:0,
        x:300,
        skewX:65
    },{
        letterSpacing:'0',
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:.5,
        scrollTrigger:title
    })
})

gsap.utils.toArray('p').forEach(p=>{
    gsap.fromTo(p,{
        opacity:0,
        x:150,
        skewX:30
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:.5,
        scrollTrigger:p
    })
})

let minuts = document.getElementById('minuts')
let seconds = document.getElementById('seconds')
const video = document.querySelector('.video')
const controlButton = document.querySelector('.icons')

let totalSeconds = 0


video.addEventListener('ended' ,()=> {
    controlButton.classList.add('stop')
})
video.addEventListener('play' ,()=> {
    controlButton.classList.remove('stop')
    setTime()
})


function playVid() {
    video.play()
}

function pauseVid() {
    video.pause()
    controlButton.classList.add('stop')
}

function setTime() {

    let interval = setInterval(()=> {
        
        totalSeconds++
    
        if(totalSeconds > Math.floor(video.duration)) {
            totalSeconds = 1
        }

        if(totalSeconds >= Math.floor(video.duration)) {
            clearInterval(interval)
        }



        document.querySelector('.fa-pause').addEventListener('click' ,()=>{
            clearInterval(interval)
        })


        minuts.innerHTML = pad(parseInt(totalSeconds /60) )
        seconds.innerHTML = pad(totalSeconds %60)
    },1000)
}

function pad(val) {
    let valString = val +""

    if(valString.length <2){
        return "0" + valString
    }else{
        return valString
    }
}

gsap.utils.toArray('button').forEach(button=>{
    gsap.fromTo(button,{
        opacity:0,
    },{
        opacity:1,
        duration:1,
        delay:1,
        scrollTrigger:button
    })
})

gsap.fromTo('.wide',{
    scale:.2,
    opacity:0,
    skewY:30
},{
    scale:1,
    opacity:1,
    skewY:0,
    duration:1,
    delay:.5,
    scrollTrigger:'.wide'
})

gsap.utils.toArray('.line').forEach(line=>{
    gsap.fromTo(line,{
        opacity:0,
        width:'0%'
    },{
        opacity:1,
        width:'100%',
        duration:1,
        delay:1,
        scrollTrigger:line
    })
})

const menu = document.querySelector('.menu')
gsap.from(menu.children,{
    opacity:0,
    x:50,
    duration:1,
    delay:.5,
    stagger:{
        amount:1
    },
    scrollTrigger:{
        trigger:menu.children
    }
})

gsap.to('body', {
    scrollTrigger: {
        trigger: ".slider",
        start: "100 center",
        end: "bottom bottom",
        onEnter: () => {

            let [bgColor, color] = document.querySelector(".is-selected")
            .dataset.slide.split(" ");
                document.body.style.backgroundColor = bgColor;
                document.body.style.color = color;
              }
            }
        });

           var slider = $(".carousel").flickity({
                wrapAround: true,
              });

              slider.data('flickity').on("select" , function () {
                let s = this.cells.find((c)=>
                c.element.classList.contains('is-selected')
                ).element.dataset.slide;
                let [bgColor, color] = s.split(" ");
                document.body.style.backgroundColor = bgColor;
                document.body.style.color = color;
              })
