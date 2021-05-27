function newFunc(){
    var nav_bar = document.getElementById('nav');
    var affix_nav = document.getElementById('affix');
    var nav_width = nav_bar.offsetWidth;
}
document.getElementById('affix').style.marginLeft=-(nav_width/2);




// window.onscroll = myFunc;

// function myFunc(){
//     if(window.pageYOffset > 200){
//         affix_nav.style.marginLeft=-(nav_width/2)
//         // alert('You have scrolled to second div'+ window.pageYOffset)
//     }
// }

// window.onscroll = myscroll;

// function myscroll(){
//     if(window.pageYOffset > 150){
//         alert(' This is alert message')
//     }
// }