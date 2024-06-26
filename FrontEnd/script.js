document.addEventListener('DOMContentLoaded', function() {
    const starsContainers = document.querySelectorAll('.stars');

    starsContainers.forEach(starsContainer => {
        const stars = starsContainer.querySelectorAll('.star');

        stars.forEach(star => {
            star.addEventListener('click', setRating);
        });
    });

    function setRating(e) {
        const clickedStar = e.target;
        const rating = clickedStar.dataset.value;

        const starsContainer = clickedStar.parentNode;
        const stars = starsContainer.querySelectorAll('.star');

        stars.forEach(star => {
            if (star.dataset.value <= rating) {
                star.classList.add('active');
                star.innerHTML = '&#9733;';
            } else {
                star.classList.remove('active');
                star.innerHTML = '&#9734;'; 
            }
        });

        starsContainer.dataset.rating = rating;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('surveyForm');

    if (surveyForm) {
        surveyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const starsContainers = document.querySelectorAll('.stars');
            let allQuestionsAnswered = true;

            starsContainers.forEach(starsContainer => 
                {
                if (starsContainer.dataset.rating === '0') 
                {
                    allQuestionsAnswered = false;
                    return;
                }
            });

            if (allQuestionsAnswered) 
            {
                console.log('Submitting survey...');
                console.log('Survey Submitted...');
            } else 
            {
                alert('Please answer all questions before submitting.');
            }
        });
    }
});

function onSignIn(googleUser) 
{
    const profile = googleUser.getBasicProfile();
    const userName = profile.getName();
    const userEmail = profile.getEmail();
    document.getElementById('status').innerHTML = `Welcome, ${userName} (${userEmail})`;
}
