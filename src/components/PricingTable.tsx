import React, { useState } from 'react';
import { Grid } from '@mui/material';
import PricingCard from './PricingCard';
import PricingOptions from './PricingOptions';
import Building from '../assets/Buildings.png';
import PlusCircle from '../assets/PlusCircle.png';
import Check from '../assets/Check.png'
import Arrow from '../assets/ArrowRight.png';

const PricingTable: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState('1 Mois');

  const calculatePrice = (basePrice: number, duration: string): string => {
    let discountFactor = 1;

    switch (duration) {
      case '1 Mois':
        discountFactor = 1;
        break;
      case '3 Mois':
        discountFactor = 0.8;
        break;
      case '6 Mois':
        discountFactor = 0.7;
        break;
      case '12 Mois':
        discountFactor = 0.6;
        break;
      case '24 Mois':
        discountFactor = 0.5;
        break;
    }

    const discountedPrice = basePrice * discountFactor;
    return discountedPrice.toFixed(0);
  };

  const plans = [
    {
      title: 'Standard',
      basePrice: 169,
      features: [
        <>
          <img src={Check} alt="Arrow" />
          Accès aux jeux en version non personnalisés
        </>,
        <>
          <img src={Check} alt="Arrow" />
          3 actions disponibles
        </>,
        <>
          <img src={Check} alt="Arrow" />
          Sélection de l'ordre de priorité des actions
        </>,
        <>
          <img src={Check} alt="Arrow" />
          Sélection des cadeaux
        </>,
        <>
          <img src={Check} alt="Arrow" />
          Choix limité de pictogrammes pour vos jeux
        </>,
        <>
          <img src={Check} alt="Arrow" />
          Accès au tableau de bord pour suivre vos activités
        </>,
      ],
      subtitle: [],
      buttonText: 'Je sélectionne cette offre',
    },
    {
      title: 'Premium',
      basePrice: 199,
      features: [
        <>
          <img src={Check} alt="Check" />
          Accès aux jeux en version non personnalisés
        </>,
        <>
        <img src={Check} alt="Check" />
        Sélection de l'ordre de priorité des actions
      </>,
        <>
        <img src={Check} alt="Check" />
        Sélection des cadeaux
      </>,
        <>
        <img src={Check} alt="Check" />
        Accès au tableau de bord pour suivre vos activités
      </>,
        <>
        <img src={PlusCircle} alt="PlusCircle" />
        Accès aux jeux en version personnalisés
      </>,
        <>
        <img src={PlusCircle} alt="PlusCircle" />
        Intégration de vos couleurs dans les jeux
      </>,
        <>
        <img src={PlusCircle} alt="PlusCircle" />
        Intégration de votre logo dans les jeux
      </>,
        <>
        <img src={PlusCircle} alt="PlusCircle" />
        Intégration  vos pictogrammes dans les jeux
      </>,
      ],
      subtitle: [],
      buttonText: 'Je sélectionne cette offre',
      highlighted: true,
    },
    {
      title: 'Sur Devis',
      basePrice: 0,
      features: [
        <>
          <img src={Arrow} alt="Arrow" />
          Vous avez plusieurs établissements ?
        </>,
        <>
          <img src={Arrow} alt="Arrow" />
          Vous souhaitez un jeu sur mesure à l'effigie de votre marque ?
        </>,
        <>
          <img src={Arrow} alt="Arrow" />
          Vous souhaitez une intégration caisse ?
        </>,
      ],
      subtitle: [
        "Un devis sur mesure est nécessaire pour répondre avec précision aux besoins spécifiques de votre réseau d'établissements et assurer une intégration harmonieuse.",
      ],
      buttonText: 'Demander un Devis',
    },
  ];

  const handleSelectDuration = (duration: string) => {
    setSelectedDuration(duration);
  };

  return (
    <>
      <PricingOptions selectedDuration={selectedDuration} onSelectDuration={handleSelectDuration} />
      <Grid className='book' container spacing={3} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PricingCard
              title={plan.title}
              price={plan.basePrice === 0 ? <img src={Building} alt="Building" /> : `${calculatePrice(plan.basePrice, selectedDuration)}€`}
              features={plan.features}
              subtitle={plan.subtitle}
              buttonText={plan.buttonText}
              highlighted={plan.highlighted}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PricingTable;


