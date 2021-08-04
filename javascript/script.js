
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function(){
    headerEl.classList.toggle("nav-open");
});

////////////////////////////
//SMOOTHLY ANIMATION 
///////////////////////////

const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks);

allLinks.forEach(function(link){
    link.addEventListener('click',function(e) {
        e.preventDefault();
        const href = link.getAttribute('href');
        // console.log(href);

        //Scroll back to the top
        if(href === "#") window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        if(href != "#" && href.startsWith('#'))
        {
           const sectionEl =  document.querySelector(href);
           console.log(sectionEl);
           sectionEl.scrollIntoView({behavior: "smooth"});
        }
        // CLOSE MOBILE NAVIGATION
        if(link.classList.contains("header-nav-link"))
           headerEl.classList.remove("nav-open");
    })
})

////STICKY NAVIGATION 
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(function(entries){
    const ent = entries[0];
    console.log(ent);
    if(!ent.isIntersecting)  {
        document.querySelector("body").classList.add("sticky");
    } else {
        document.querySelector("body").classList.remove("sticky");
    }
}, 
{
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px"

});
observer.observe(sectionHeroEl);



