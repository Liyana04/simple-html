// for newspaper theme rotation animation
var tl = gsap.timeline()


tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
// slide upwards
tl.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
})
// rotate the entire page
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7
})