onload = ScrollToElement('header')
function ScrollToElement(ElementSelector, instance =0){
    const elements = document.querySelectorAll(ElementSelector)
    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior:'smooth'});
    }
}
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
link1.addEventListener('click', () =>{
    ScrollToElement('.header');
});
link2.addEventListener('click', () =>{
    ScrollToElement('.header', 1);
});
link3.addEventListener('click', () =>{
    ScrollToElement('.column');
});
