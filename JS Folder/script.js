

// window.addEventListener("scroll", function(){
//     var nav = document.querySelector("nav");
//     nav.classList.toggle("active", window.scrollY > 0);
// })


// var NavLinks = document.getElementById("NavLink")

// function showMenu(){
//     NavLinks.style.right = "0";
// }
// function hideMenu(){
//     NavLinks.style.right = "-250px";
// }



// var w = window.screen.width;

// if(screen.width > 991){

//     const sr = ScrollReveal({
//         distance: '80px',
//         origin: 'top',
//         duration: '2000',
//         reset: false
//     })

//     sr.reveal('.load-more', {reset: false})
//     sr.reveal('.rotator', {})
//     sr.reveal('.h-contents', {delay: 200})

//     sr.reveal('.abt-left-img', {origin: 'left'})
//     sr.reveal('.abt-right-contents', {origin: 'top'})
//     sr.reveal('.abt-right-contents p', {origin: 'top', delay: 200})
//     sr.reveal('.abt-right-contents .cta-btn', {origin: 'top', delay: 300})

//     sr.reveal('.abt-team-right-contents', {origin: 'left'})
//     sr.reveal('.abt-team-left-contents h1', {origin: 'top'})
//     sr.reveal('.abt-team-left-contents p', {origin: 'top', delay: 200})
//     sr.reveal('.abt-team-left-contents .abt-team-btns a', {origin: 'down', delay: 200, interval: 200})

//     sr.reveal('.abt-team-right-contents', {origin: 'left', delay: 100})
//     sr.reveal('.abt-team-left-contents h1', {origin: 'top'})
//     sr.reveal('.abt-team-left-contents p', {origin: 'top', delay: 200})
//     sr.reveal('.abt-team-left-contents .abt-team-btns a', {origin: 'bottom', delay: 200, interval: 200})

//     sr.reveal('.playlists-header h1', {origin: 'top'})
//     sr.reveal('.playlists-header p', {origin: 'top', delay: 200})
//     sr.reveal('.playlists', {origin: 'top', delay: 400, reset: false})

//     sr.reveal('.webinar-header h1', {origin: 'top'})
//     sr.reveal('.webinar-header p', {origin: 'top', delay: 200})
//     sr.reveal('.webinars', {origin: 'top', delay: 400})

//     sr.reveal('.contact-header h1', {origin: 'top'})
//     sr.reveal('.contact-header p', {origin: 'top', delay: 200})
//     sr.reveal('.contact-contents h2', {origin: 'top', delay: 200})
//     sr.reveal('.contact-contents p', {origin: 'top', delay: 400})
//     sr.reveal('.contact-contents .connects-elements a', {origin: 'bottom', delay: 400, interval: 200})
//     sr.reveal('.contact-form h2', {origin: 'top', delay: 300})
//     sr.reveal('form .input-box', {origin: 'top', delay: 400, interval: 200})
// }





// $(document).ready(function () { 
//     $(".play-card").slice(0, 6).show(); 
//     if ($(".play-card:hidden").length != 0) { 
//         $("#load").show(); 
//     } 
//     $("#load").on("click", function (e) { 
//         e.preventDefault(); 
//         $(".play-card:hidden").slice(0, 3).slideDown(); 
//         if ($(".play-card:hidden").length == 0) { 
//             // alert("No more divs");
//             // $("#load").text("No More to view") 
//             //     .fadOut("slow"); 
//             $("#load").css({ "display": 'none'});
//             $(".load-more").css({ "margin-bottom": '-50px'});
//         } 
//     }); 
// }) 
