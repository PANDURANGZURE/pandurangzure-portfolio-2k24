// cursor
const cursorDot = document.querySelector("[data-cursor-dot]"); 
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove",function(e) {


    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left= `${posX}px`;
    cursorDot.style.top= `${posY}px`;

    cursorOutline.style.left= `${posX}px`;
    cursorOutline.style.top= `${posY}px`;

});


// type efffect
var typed = new Typed (".auto-type", {
        strings :["Student." , "Fronted Devloper." ,"Wordpress.", "Web Designer."],
        typeSpeed : 150,
        backSpeed:150,
        loop: true
    })

    //darkmode
    //function addDarkmodeWidget() {
    //new Darkmode().showWidget();
//   }
//   window.addEventListener('load', addDarkmodeWidget);
//   const options = {
//   bottom: '64px', // default: '32px'
//   right: 'unset', // default: '32px'
//   left: '32px', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#fff', // default: '#fff'
//   backgroundColor: '#fff',  // default: '#fff'
//   buttonColorDark: '#100f2c',  // default: '#100f2c'
//   buttonColorLight: '#fff', // default: '#fff'
//   saveInCookies: false, // default: true,
//   label: '🌓', // default: ''
//   autoMatchOsTheme: true // default: true
// }




