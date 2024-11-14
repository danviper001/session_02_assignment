import React from 'react';
import PricingCard from './components/PricingCard';
import './App.css';

const App = () => {
  const pricingPlans = [
    {
      plan: 'FREE',
      price: '$0/month',
      features: [
        { name: 'Single User', included: true },
        { name: '5GB Storage', included: true },
        { name: 'Unlimited Public Projects', included: true },
        { name: 'Community Access', included: true },
        { name: 'Unlimited Private Projects', included: false },
        { name: 'Dedicated Phone Support', included: false },
        { name: 'Free Subdomain', included: false },
        { name: 'Monthly Status Reports', included: false },
      ],
    },
    {
      plan: 'PLUS',
      price: '$9/month',
      features: [
        { name: '5 Users', included: true },
        { name: '50GB Storage', included: true },
        { name: 'Unlimited Public Projects', included: true },
        { name: 'Community Access', included: true },
        { name: 'Unlimited Private Projects', included: true },
        { name: 'Dedicated Phone Support', included: false },
        { name: 'Free Subdomain', included: true },
        { name: 'Monthly Status Reports', included: false },
      ],
    },
    {
      plan: 'PRO',
      price: '$49/month',
      features: [
        { name: 'Unlimited Users', included: true },
        { name: '150GB Storage', included: true },
        { name: 'Unlimited Public Projects', included: true },
        { name: 'Community Access', included: true },
        { name: 'Unlimited Private Projects', included: true },
        { name: 'Dedicated Phone Support', included: true },
        { name: 'Unlimited Free Subdomains', included: true },
        { name: 'Monthly Status Reports', included: true },
      ],
    },
  ];

  return (
    <div className="App">
      <div className="pricing-container">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default App;