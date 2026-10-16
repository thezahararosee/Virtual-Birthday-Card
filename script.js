function personalizeCard() {

    const queryString = window.location.search;
    
    const urlParams = new URLSearchParams(queryString);
    
    const rawName = urlParams.get('name');

    if (rawName) {
       
        const nameSpan = document.getElementById('recipientName');
       
        nameSpan.textContent = decodeURIComponent(rawName);
       
        document.title = `Happy Birthday, ${decodeURIComponent(rawName)}!`;
    }
}

const card = document.querySelector('.card');

card.addEventListener('click', function() {
 
    card.classList.toggle('open');
});

personalizeCard();