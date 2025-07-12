---
title: "Track Your Order"
layout: "single" # Assuming a default single page layout
---

<div class="prose prose-lg max-w-2xl mx-auto text-gray-700 font-sans text-center">

  <div class="mb-12">
    <h1 class="text-5xl font-serif font-bold text-brand-dark !mb-4">Track Your Shipment</h1>
    <p class="text-xl text-gray-600 font-serif">Enter your tracking number below to see the status of your order.</p>
  </div>

  <div class="bg-brand-gray p-8 rounded-lg shadow-md">
    <form id="trackingForm" class="space-y-6">
      <div>
        <label for="trackingNumber" class="block text-lg font-semibold text-brand-dark mb-2">Tracking Number:</label>
        <input type="text" id="trackingNumber" name="trackingNumber"
               class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
               placeholder="Enter your tracking number"
               required>
      </div>
      <div>
        <button type="submit"
                class="w-full bg-brand-dark text-white font-bold tracking-wider py-3 px-6 rounded-md hover:bg-gray-700 transition-colors duration-300 text-lg">
          Track Order
        </button>
      </div>
    </form>
  </div>

  <p class="mt-8 text-sm text-gray-500">
    Please note: Tracking information may take 24-48 hours to update after your order has shipped. If you have any questions, please <a href="/contact-us/" class="text-brand-gold hover:underline">contact us</a>.
  </p>

</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const trackingForm = document.getElementById('trackingForm');
    const trackingNumberInput = document.getElementById('trackingNumber');

    trackingForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      const trackingNumber = trackingNumberInput.value.trim();
      if (trackingNumber) {
        // Ensure the tracking number is URL-encoded in case it contains special characters
        const encodedTrackingNumber = encodeURIComponent(trackingNumber);
        const trackingUrl = `http://zipro.us/track/${encodedTrackingNumber}`;
        window.open(trackingUrl, '_blank'); // Open in a new tab
      } else {
        // Optional: Add some user feedback if the input is empty, though "required" attribute handles most cases
        alert('Please enter a tracking number.');
      }
    });
  });
</script>

<style>
  /* Minimal styles, assuming prose and Tailwind handle most */
  .prose h1 { /* Ensure heading font if not covered by prose */
    font-family: 'Cormorant Garamond', serif;
  }
</style>
