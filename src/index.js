import React from 'react';
import './PricingCard.css';

const PricingCard = ({ plan, price, features }) => {
  return (
    <div className="pricing-card">
      <h3>{plan}</h3>
      <h1>{price}</h1>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={feature.included ? 'included' : 'excluded'}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button>BUTTON</button>
    </div>
  );
};

export default PricingCard;