import React from 'react';
import '../../styles/PricingNotes.css';

const PricingNotes = () => {
  return (
    <div className="pricing-notes">
      <h3>Price Notes</h3>
      <ul className="notes-list">
        <li>Prices may vary depending on nail length and condition.</li>
        <li>Additional charges may apply for services requiring extra time or special techniques.</li>
        <li>Artistic nail design pricing depends on the complexity of the design.</li>
        <li>For acrylic/powder applications, prices range from $45 to $55 depending on nail length and style.</li>
        <li>New clients receive a 10% discount on their first visit.</li>
        <li>We update our pricing periodically, please contact us directly for the most current information.</li>
      </ul>
    </div>
  );
};

export default PricingNotes;