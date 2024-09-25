// NEW
// Function to handle the donation process
function handleDonation(donationId) {
  const inputElement = document.getElementById(`donation-amount-${donationId}`);
  const amount = inputElement.value;

  // Simple validation to ensure the donation amount is a number and is not negative
  if (isNaN(amount) || amount === "") {
    alert("Please enter a valid donation amount.");
    inputElement.classList.add("input-error");
  } else if (amount <= 0) {
    // If the amount is zero or negative
    alert("Donation not successful. Please enter a positive donation amount.");
    inputElement.classList.add("input-error");
  } else {
    // Valid donation
    inputElement.classList.remove("input-error");
    console.log(`Donation for Card ${donationId}: ${amount} BDT`);

    // Show the success modal
    showModal();
  }
}

// Show modal function
function showModal() {
  const modal = document.getElementById("success-modal");
  modal.style.display = "flex"; // Show the modal
}

// Close modal function
document.getElementById("close-modal").addEventListener("click", function () {
  const modal = document.getElementById("success-modal");
  modal.style.display = "none"; // Hide the modal
});

// Adding event listeners to each "Donate Now" button
document.querySelectorAll(".donate-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const donationId = this.getAttribute("data-id");
    handleDonation(donationId);
  });
});
