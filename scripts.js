document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your order has been submitted!");
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const today = new Date();
    // Calculate the minimum available date (2 weeks ahead)
    today.setDate(today.getDate() + 14);  // Add 14 days
    
    // Format the date in YYYY-MM-DD format
    const minDate = today.toISOString().split("T")[0];
    
    // Set the "min" attribute for the delivery date input field
    const dateInput = document.getElementById("delivery-date");
    dateInput.min = minDate;
});

document.getElementById("schedule-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    
    const deliveryDate = document.getElementById("delivery-date").value;
    const numberOfGuests = document.getElementById("number-of-guests").value;

    if (!deliveryDate || !numberOfGuests) {
        alert("Please fill in both fields.");
        return;
    }

    // You can add further logic to check if the selected date is available.
    alert(`Your order has been scheduled for ${deliveryDate} with ${numberOfGuests} guests.`);
});
