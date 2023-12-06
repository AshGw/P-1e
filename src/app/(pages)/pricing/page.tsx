import './style.scss';
import Navbar from '@/app/components/homepage/navbar';
import CopyRight from '@/app/components/homepage/copyright';
import Filler from '@/app/components/reusables/filler';

interface PricingCardProps {
  heading: string;
  price: string;
  bullets: string[];
  cta: {
    link: string;
    text: string;
  };
}

const PricingCard: React.FC<PricingCardProps> = ({
  heading,
  price,
  bullets,
  cta,
}) => {
  return (
    <div className="card">
      <h2 className="card__heading">{heading}</h2>
      <p className="card__price">${price}</p>
      <ul role="list" className="card__bullets flow">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <a href={cta.link} className="card__cta cta">
        {cta.text}
      </a>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const cards: PricingCardProps[] = [
    {
      heading: 'Basic',
      price: '9.99',
      bullets: [
        'Access to standard workouts and nutrition plans',
        'Email support',
      ],
      cta: { link: '#basic', text: 'Get Started' },
    },
    {
      heading: 'Pro',
      price: '19.99',
      bullets: [
        'Access to advanced workouts and nutrition plans',
        'Priority Email support',
        'Exclusive access to live Q&A sessions',
      ],
      cta: { link: '#pro', text: 'Upgrade to Pro' },
    },
    {
      heading: 'Ultimate',
      price: '29.99',
      bullets: [
        'Access to all premium workouts and nutrition plans',
        '24/7 Priority support',
        '1-on-1 virtual coaching session every month',
        'Exclusive content and early access to new features',
      ],
      cta: { link: '#ultimate', text: 'Go Ultimate' },
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <Filler></Filler>
      <div className="container">
        <div className="row  d-flex justify-content-center align-content-center">
          <main className="main flow">
            <div className="main__cards cards">
              <div className="cards__inner">
                {cards.map((card, index) => (
                  <PricingCard key={index} {...card} />
                ))}
              </div>
              <div className="overlay cards__inner"></div>
            </div>
          </main>
        </div>
      </div>
      <CopyRight></CopyRight>
    </>
  );
};

export default PricingSection;
