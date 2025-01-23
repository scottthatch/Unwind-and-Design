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
    
    // Handle form submission
    document.getElementById("schedule-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form values
        const deliveryDate = document.getElementById("delivery-date").value;
        const numberOfGuests = document.getElementById("number-of-guests").value;

        // Check if the inputs are valid
        if (!deliveryDate || !numberOfGuests) {
            alert("Please fill in both fields.");
            return;
        }

        // Display the confirmation message
        alert(`Your order has been scheduled for ${deliveryDate} with ${numberOfGuests} guests.`);
    });
});
