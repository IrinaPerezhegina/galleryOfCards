const slides = document.querySelectorAll(".slide")
slides.forEach((item) => {
    item.addEventListener("mouseover", event =>{
        clearActiveClasses()
        const {target} = event
        console.log(target);
        target.classList.add('active')
    
    })
})

function clearActiveClasses(){
    slides.forEach((item)=>item.classList.remove('active'))
}