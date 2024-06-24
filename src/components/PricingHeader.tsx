import React from 'react';
import { Typography, Box } from '@mui/material';
import Ellipse from '../assets/Ellipse-651.png';
import Groupe from '../assets/Group-470.png';

const PricingHeader: React.FC = () => {
  return (
    <Box textAlign="center" display={'flex'} flexDirection={'column'} my={4} position={'relative'}>
      <Typography variant="h4" fontFamily={"Montserrat, sans-serif"} component="h1" fontWeight={"700"} fontSize={"38px"}>
        DÉCOUVREZ <span className="blue-text">NOS OFFRES</span>
      </Typography>
      <img className='ellipse' src={Ellipse} alt="Ellipse" />
      <img className='groupe' src={Groupe} alt="Groupe" />
      <Typography variant="subtitle1" marginTop={"40px"}>
        Trouvez le plan parfait pour votre entreprise parmi nos différentes options <br/> d'abonnement mensuel, trimestriel, semestriel, annuel et biennal.
      </Typography>
    </Box>
  );
};

export default PricingHeader;

