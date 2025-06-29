document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const message = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData
        });

        if (response.ok) {
          message.style.display = "block";
          message.style.color = "green";
          message.textContent = "Thank you! Your request has been sent. We will contact you as soon as possible!.";
          form.reset(); // clear all fields
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        message.style.display = "block";
        message.style.color = "red";
        message.textContent = "Oops! Something went wrong. Please try again.";
        console.error("Form submission error:", error);
      }
    });
  }
});