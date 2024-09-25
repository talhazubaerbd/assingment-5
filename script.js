// Function to handle the donation process
function handleDonation(donationId) {
  const inputElement = document.getElementById(`donation-amount-${donationId}`);
  const amount = inputElement.value;
  const send_btn = document.getElementById("fund_id_1");

  send_btn.addEventListener("click", function(){

  })

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
  modal.style.display = "flex";
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

// Hide the modal on page load
window.onload = function () {
  const modal = document.getElementById("success-modal");
  modal.style.display = "none"; // Ensure the modal is hidden when the page loads
};

var donation_btn = document.getElementById("donation_btn");
var history_btn = document.getElementById("history_btn");
var donation_container = document.getElementById("donation_container");
var history_container = document.getElementById("history_container");

history_btn.addEventListener("click", function(){
  donation_btn.classList.remove("bg-green-500");
  donation_btn.classList.add("border-gray-300");
  donation_btn.classList.add("border");
  history_btn.classList.remove("border-gray-300");
  history_btn.classList.remove("border");
  history_btn.classList.add("bg-green-500");
  history_btn.classList.remove("bg-white");
  donation_container.classList.add("hidden");
  history_container.classList.remove("hidden");
});
donation_btn.addEventListener("click", function(){
  history_btn.classList.remove("bg-green-500");
  history_btn.classList.add("border-gray-300");
  history_btn.classList.add("border");
  donation_btn.classList.remove("border-gray-300");
  donation_btn.classList.remove("border");
  donation_btn.classList.add("bg-green-500");
  donation_btn.classList.remove("bg-white");
  donation_container.classList.remove("hidden");
  history_container.classList.add("hidden");
});
document.addEventListener('DOMContentLoaded', () => {
  const totalAmountElement = document.getElementById('total-amount');
  let totalAmount = parseInt(totalAmountElement.textContent.replace(' BDT', '')); // Initial total amount

  // Add event listeners to all donate buttons
  document.querySelectorAll('.donate-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const donationId = event.target.getAttribute('data-id');
      const donationInput = document.getElementById(`donation-amount-${donationId}`);
      const donationValue = parseInt(donationInput.value);

      // Validate the donation amount
      if (isNaN(donationValue) || donationValue <= 0) {
        // alert('Please enter a valid positive donation amount.');
        donationInput.classList.add('input-error'); // Add error class to highlight invalid input
        return; // Prevent further execution
      } else {
        donationInput.classList.remove('input-error'); // Remove error class if the input is valid
      }

      // Update the fund amount for the specific cause
      const fundElement = document.getElementById(`fund_id_${donationId}`);
      const currentFund = parseInt(fundElement.textContent.replace(' BDT', ''));
      const updatedFund = currentFund + donationValue;
      fundElement.textContent = `${updatedFund} BDT`;

      // Subtract the donation from the total amount
      totalAmount -= donationValue;
      totalAmountElement.textContent = `${totalAmount} BDT`;

      // Show the success modal
      document.getElementById('success-modal').style.display = 'flex';

      // Clear the input field
      donationInput.value = '';
    });
  });

  // Close the success modal
  document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('success-modal').style.display = 'none';
  });
});




window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const scrollY = window.scrollY;
  const blurThreshold = 100; // Adjust this value as needed

  if (scrollY > blurThreshold) {
      nav.classList.add('blur-effect');
      nav.querySelectorAll('div').forEach(div => div.classList.remove('blur-effect'));
  } else {
      nav.classList.remove('blur-effect');
      nav.querySelectorAll('div').forEach(div => div.classList.remove('blur-effect'));
  }
});

