// Modal Implementation
function showNotice(title, content) {
    document.getElementById('noticeModalLabel').textContent = title;
    document.getElementById('noticeContent').textContent = content;
    var noticeModal = new bootstrap.Modal(document.getElementById('noticeModal'));
    noticeModal.show();
}

//Scroll Up Button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Useful Links Information
function displayContent(section) {
    const contentDisplay = document.getElementById('contentDisplay');
    
    let content = '';

    if (section === 'privacyPolicy') {
        content = "<strong>Privacy Policy:</strong> Here you'll find information on how we handle your data.";
    } else if (section === 'terms') {
        content = "<strong>Terms & Conditions:</strong> Please read the terms and conditions of our service.";
    } else if (section === 'contact') {
        content = "<strong>Contact:</strong> Feel free to reach out via our contact page for support.";
    } else if (section === 'sitemap') {
        content = "<strong>Sitemap:</strong> View the structure of our website for easy navigation.";
    }


    contentDisplay.innerHTML = content;
    contentDisplay.style.display = 'block';

}
