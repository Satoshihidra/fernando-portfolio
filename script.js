document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Find the corresponding content by data-tab attribute
            const tabId = button.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});
