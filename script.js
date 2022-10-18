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




const pro_observer= new IntersectionObserver((enteries)=> {
    enteries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('pro_show')
        }
    });
});

const pro_hiddenElements= document.querySelectorAll('.pro_hidden');
pro_hiddenElements.forEach((el) => pro_observer.observe(el));



const ab_observer= new IntersectionObserver((enteries)=> {
    enteries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('ab_show')
        }
    });
});

const ab_hiddenElements= document.querySelectorAll('.ab_hidden');
ab_hiddenElements.forEach((el) => ab_observer.observe(el));


const co_observer= new IntersectionObserver((enteries)=> {
    enteries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('co_show')
        }
    });
});

const co_hiddenElements= document.querySelectorAll('.co_hidden');
co_hiddenElements.forEach((el) => co_observer.observe(el));

