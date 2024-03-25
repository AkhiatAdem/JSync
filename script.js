const menu = document.getElementById('menu');
const header = document.querySelector(".ul");
const li = document.querySelectorAll('li');
li.forEach(l =>{
    l.addEventListener("click",()=>{
        menu.src = 'imgs/menu.png';
        menu.style.transform = "translateX(0)";
        header.style.display = "none";
    
        header.style.width = "0";
        clicked = false;
    })
})

let clicked = false;
menu.addEventListener("click",()=>{
   if(clicked == false){
    menu.src = 'imgs/close.png';
    menu.style.transform = "translateX(-50%)";
    header.style.display = "inherit";
   setTimeout(500)
    header.style.width = "50%";

   }else{
    menu.src = 'imgs/menu.png';
    menu.style.transform = "translateX(0)";
    header.style.display = "none";

    header.style.width = "0";
   }
   clicked = !clicked;
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       if(entry.isIntersecting){
        entry.target.classList.add('showhidden');
       }else{
        entry.target.classList.remove('showhidden');
       }
    });
})
const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
    

    document.querySelector(".send").addEventListener("click", () => {
        

        var templateParams = {
         
            email: document.querySelector(".bruh").value

        };
         
        emailjs.send('service_g4ckl97', 'template_tfkvlga', templateParams)
            .then(function(response) {
                document.querySelector(".bruh").value = '';
                document.querySelector(".send").innerText = 'Sent';
                document.querySelector(".send").style.backgroundColor = 'green';
        
                
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    });
});
