const container=document.querySelectorAll('.container');
container.forEach(myfunction=>{
    const answer=myfunction.querySelector('.answer');
    const icon=myfunction.querySelector('.icon');

    myfunction.addEventListener('click',()=>{
        answer.classList.toggle('answeract');
        icon.classList.toggle('active');
    })
})