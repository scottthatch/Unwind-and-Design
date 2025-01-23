document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const today = new Date();
    
    // Calculate the minimum available date (2 weeks ahead)
    today.setDate(today.getDate() + 14);  // Add 14 days
    
    // Format the date in YYYY-MM-DD format
    const minDate = today.toISOString().split("T")[0];
    
    // Set the "min" attribute for the delivery date input field
    const dateInput = document.getElementById("delivery-date");
    if (dateInput) {
        dateInput.min = minDate;
    }

    // Handle scheduling form submission
    if (document.getElementById("schedule-form")) {
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

            // Store the date and guests information in sessionStorage
            sessionStorage.setItem("deliveryDate", deliveryDate);
            sessionStorage.setItem("numberOfGuests", numberOfGuests);

            // Redirect to the payment page
            window.location.href = "payment.html";
        });
    }

    // Handle payment form submission
    if (document.getElementById("payment-form")) {
        document.getElementById("payment-form").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Get payment form values (for now, this is just simulation)
            const cardName = document.getElementById("card-name").value;
            const cardNumber = document.getElementById("card-number").value;
            const expiryDate = document.getElementById("expiry-date").value;
            const cvv = document.getElementById("cvv").value;

            // Simulate a successful payment process
            if (cardName && cardNumber && expiryDate && cvv) {
                // Show the confirmation message
                document.getElementById("payment-form").style.display = "none";
                document.getElementById("payment-confirmation").style.display = "block";

                // Clear sessionStorage after payment
                sessionStorage.clear();
            } else {
                alert("Please fill in all payment details.");
            }
        });
    }
});
