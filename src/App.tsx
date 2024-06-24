import React from 'react';
import { Container } from '@mui/material';
import PricingHeader from './components/PricingHeader';
import PricingTable from './components/PricingTable';

const App: React.FC = () => {
  return (
    <Container>
      <PricingHeader />
      <PricingTable />
    </Container>
  );
};

export default App;
