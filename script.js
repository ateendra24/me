function CloseNav(){
    document.getElementById("active").checked = false;
}


const phrases = ['Welcome to my website', 'I am Developer','I am a Student', 'I am a tech enthusiast'];
const el = document.querySelector('.text');
const fx = new TextScramble(el);
let counter = 0;

const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1200);
    });
    counter = (counter + 1) % phrases.length;
};

next();




const observer= new IntersectionObserver((enteries)=> {
    enteries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
    });
});

const hiddenElements= document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));