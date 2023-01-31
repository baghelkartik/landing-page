var tl=gsap.timeline(

)

tl.from("#center",{
    height:0,
duartion:5,
stagger:4,
delay:0.5,
opacity:0,
ease:"expo.inOut",

})
tl.from("#i",{

duartion:2,
stagger:1,
opacity:0,
ease:"expo.inOut",

})
tl.from("#anchor",{
    
duartion:2,
stagger:1,
opacity:0,
ease:"expo.inOut",

 })
tl.from("#text h1",{
    x:100,
duartion:1,
stagger:1,
opacity:0,
ease:"expo.inOut",

})
tl.from("#text p",{
    x:-100,
duartion:1,
stagger:1,
opacity:0,
ease:"expo.inOut",

})
tl.from("#photo img",{
    y:-500,
duartion:1,
stagger:1,
delay:0.5,
opacity:0,
ease:"expo.out",

})



tl.from("#text button",{
    y:100,
duartion:1,
stagger:1,
opacity:0,
ease:"expo.inOut",

})
tl.from("#photo2",{
    x:700,
duartion:3,
stagger:1,
opacity:0,
ease:"expo.out",
rotate:"90deg",

})

