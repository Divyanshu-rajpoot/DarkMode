const time = gsap.timeline();
const val = document.getElementById('cc')
let chala = true;
val.addEventListener('click',()=>{
    if (chala==false) {
        changingback()
        chala=true
    }
    else{
        changing();
        chala=false
    }
})
function changing(){
    
    time.to('#cc',{
        x:'37px',
        delay:-.5,
        backgroundColor:'#fff'
    })
    time.to('#circ',{
        backgroundColor:"#000",
        delay:-.5,
        boxShadow:'0px -2px 50px 8px rgba(255,255,255,0.5)'
    })
    time.to('#main',{
        backgroundColor:'#000',
        duration:1,
        ease: "circ.out",
    })
    time.to('#info h1',{
        color:'#FF5733',
        delay:-.7
    })
}
function changingback(){
    time.to('#cc',{
        x:'0px',
        backgroundColor:'#000'
    })
    time.to('#circ',{
        backgroundColor:"#fff",
        delay:-.5,
        boxShadow: '5px 5px 20px'
    })
    time.to('#main',{
        backgroundColor:'#fff',
        duration:1,
        ease: "circ.out",
    })
    time.to('#info h1',{
        color:'#000',
        delay:-.7
    })
}
