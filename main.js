const faqQuestion = document.querySelectorAll('.faq-question');

faqQuestion.forEach((question) => {
    question.addEventListener('click', () => {
        faqAnswer = question.nextElementSibling;
        question.classList.toggle('active');
        const faqArrow = question.querySelector('img');
        faqArrow.classList.toggle('rotate');
        if(faqAnswer.style.maxHeight){
            faqAnswer.style.maxHeight = null;
        } else {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        }
    });
});