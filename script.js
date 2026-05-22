// Smooth scroll to quote form
function scrollToQuote() {
    document.getElementById('quote').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        age: document.getElementById('age').value,
        zipCode: document.getElementById('zipCode').value,
        carYear: document.getElementById('carYear').value,
        carMake: document.getElementById('carMake').value,
        carModel: document.getElementById('carModel').value,
        drivingRecord: document.getElementById('drivingRecord').value,
        timestamp: new Date().toISOString()
    };

    // Save to localStorage (for demo purposes)
    let leads = JSON.parse(localStorage.getItem('carInsuranceLeads')) || [];
    leads.push(formData);
    localStorage.setItem('carInsuranceLeads', JSON.stringify(leads));

    // Log to console (you can send this to a server later)
    console.log('Lead captured:', formData);

    // Show success message
    const form = document.getElementById('quoteForm');
    const successMessage = document.getElementById('successMessage');
    
    form.style.display = 'none';
    successMessage.style.display = 'block';

    // Reset form after 3 seconds and hide success message
    setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        successMessage.style.display = 'none';
    }, 5000);
});

// Add smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Track page views (for analytics)
window.addEventListener('load', function() {
    console.log('Page loaded at:', new Date().toISOString());
    console.log('Total leads captured so far:', JSON.parse(localStorage.getItem('carInsuranceLeads'))?.length || 0);
});
