// Handle Loan Application Submission
document.getElementById("submitLoan").addEventListener("click", function () {
    const form = document.getElementById("loanForm");
  
    if (form.checkValidity()) {
      alert("Loan application submitted successfully!");
      form.reset(); // Clear the form
    } else {
      alert("Please fill out all required fields.");
    }
  });
  
  // Handle Loan Calculator
  document.getElementById("calculateBtn").addEventListener("click", function () {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);
  
    if (!principal || !rate || !time) {
      alert("Please fill out all fields.");
      return;
    }
  
    const monthlyRate = rate / (12 * 100); // Convert annual rate to monthly rate
    const months = time * 12; // Convert years to months
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);
  
    document.getElementById("emiResult").innerText = `Estimated EMI: ₹${emi.toFixed(2)}`;
  });
  
  // Loan Giver Placeholder
  document.getElementById("viewApplications").addEventListener("click", function () {
    alert("Feature under development: Loan Givers will see submitted applications here.");
  });
  
