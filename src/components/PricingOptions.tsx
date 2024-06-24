import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';

interface PricingOptionsProps {
  selectedDuration: string;
  onSelectDuration: (duration: string) => void;
}

const PricingOptions: React.FC<PricingOptionsProps> = ({ selectedDuration, onSelectDuration }) => {
  const [localSelectedDuration, setLocalSelectedDuration] = useState(selectedDuration);

  const handleSelection = (_event: React.MouseEvent<HTMLElement>, newSelection: string) => {
    if (newSelection !== localSelectedDuration) {
      setLocalSelectedDuration(newSelection);
      onSelectDuration(newSelection);
    }
  };

  return (
    <Box display="flex" justifyContent="center" my={4}>
      <ToggleButtonGroup
        value={localSelectedDuration}
        exclusive
        onChange={handleSelection}
        aria-label="pricing options"
      >
        <ToggleButton className='button' value="1 Mois">1 Mois</ToggleButton>
        <div className='sub'>
          <ToggleButton className='button' value="3 Mois">3 Mois</ToggleButton>
          <div className='subtitlepromo'>
            <div className={localSelectedDuration === '3 Mois' ? 'subtitlepromo3 highlighted' : 'subtitlepromo3'}>-20%&ensp;</div>
            <div className="subtitlepromodetails">/ mois</div>
          </div>
        </div>
        <div className='sub'>
          <ToggleButton className='button' value="6 Mois">6 Mois</ToggleButton>
          <div className='subtitlepromo'>
            <div className={localSelectedDuration === '6 Mois' ? 'subtitlepromo3 highlighted' : 'subtitlepromo3'}>-30%&ensp;</div>
            <div className="subtitlepromodetails">/ mois</div>
          </div>
        </div>
        <div className='sub'>
          <ToggleButton className='button' value="12 Mois">12 Mois</ToggleButton>
          <div className='subtitlepromo'>
            <div className={localSelectedDuration === '12 Mois' ? 'subtitlepromo3 highlighted' : 'subtitlepromo3'}>-40%&ensp;</div>
            <div className="subtitlepromodetails">/ mois</div>
          </div>
        </div>
        <div className='sub'>
          <ToggleButton className='button' value="24 Mois">24 Mois</ToggleButton>
          <div className='subtitlepromo'>
            <div className={localSelectedDuration === '24 Mois' ? 'subtitlepromo3 highlighted' : 'subtitlepromo3'}>-50%&ensp;</div>
            <div className="subtitlepromodetails">/ mois</div>
          </div>
        </div>
      </ToggleButtonGroup>
    </Box>
  );
};

export default PricingOptions;
