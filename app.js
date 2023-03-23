const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const content = document.querySelectorAll('.content');

about.addEventListener('click', (e)=>{
    const id = e.target.dataset.id;
    if(id){
        // Remove active class
        btns.forEach((btn)=>{
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        content.forEach((article)=>{
            article.classList.remove('active')
        });

        const info = document.getElementById(id);
        info.classList.add('active');
    }
});
