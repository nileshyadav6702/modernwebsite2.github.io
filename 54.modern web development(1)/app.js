const menuIcon=document.querySelector('header h4')
const listItems=document.querySelectorAll('header ul li')


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const minicircle=document.querySelector('#minicircle')
function mousemove(xscale,yscale){
    window.addEventListener('mousemove',(e)=>{
        // console.log(e.screenX);
        minicircle.style.transform=`translate(${e.screenX}px,${e.screenY}px) scale(${xscale},${yscale})`
        
    })
}

function circlechaptakaro(){
    var xscale=1
    var yscale=1

    var xprev=0
    var yprev=0
    window.addEventListener('mousemove',(e)=>{
        clearTimeout(timer)
        xscale=gsap.utils.clamp(0.8,1.2,e.clientX-xprev)
        yscale=gsap.utils.clamp(0.8,1.2,e.clientY-yprev)

        xprev=e.clientX
        yprev=e.clientY
        mousemove(xscale,yscale)
        var timer=setTimeout(()=>{
            minicircle.style.transform=`translate(${e.screenX}px,${e.screenY}px) scale(1,1)`
        },100)
    })

}

function firstpageanimation(){
    var tl=gsap.timeline();
    tl.from('#header',{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
        .to('.boundingelm',{
            y:0,
            duration:2,
            delay:-1.5,
            ease:Expo.easeInOut,
            stagger:0.2
        })
        .from('#heroFooter',{
            y:'-10',
            opacity:0,
            delay:-1,
            duration:1.5,
            ease:Expo.easeInOut,
        })
}

document.querySelectorAll('.elem').forEach((elm)=>{
    var prevx=0
    var rotate=0
    elm.addEventListener('mousemove',(e)=>{
        rotate=e.clientX-prevx
        prevx=e.clientX
        var rotval=gsap.utils.clamp(-20,20,rotate)
        const img=elm.querySelector('img')
        var corx=e.clientX-elm.getBoundingClientRect().left
        var cory=e.clientY-elm.getBoundingClientRect().top
        gsap.to(img,{
            opacity:1,
            ease:Power3,
            left:(corx-(img.width/2)),
            top:(cory-(img.height/2)),
            rotate:rotval*0.5,
        })
    })
    elm.addEventListener('mouseleave',(e)=>{
        gsap.to(elm.querySelector('img'),{
            opacity:0,
            ease:Power3,
        })
    })
})
circlechaptakaro()
firstpageanimation()
mousemove()