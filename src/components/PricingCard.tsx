import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AnimatedButton from './AnimatedButton';
import BookMarkSimple from '../assets/BookmarkSimple.png';

interface PricingCardProps {
  title: string;
  price: string | JSX.Element;
  features: (string | JSX.Element)[];
  buttonText: string;
  subtitle: string[];
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, subtitle, buttonText, highlighted = false }) => {
  return (
    <Card className='cardposition' style={{ borderColor: highlighted ? '#3f5efb' : 'rgba(221, 224, 228, .5)', borderWidth: highlighted ? '1px' : '2px', backgroundColor: highlighted ? '#f0f3ff' : '' }} >
      <CardContent>
        <Typography variant="h6" component="h2" style={{ color: highlighted ? '#3f5efb' : 'black', fontSize: highlighted ? '25.6px' : '22.4px' }} textAlign={"center"} marginTop={"20px"} fontFamily={"Montserrat, sans-serif"} fontWeight={700}>
          {title}
        </Typography>
        <Typography variant="h4" color="textPrimary" style={{ color: highlighted ? '#3f5efb' : 'black', fontSize: highlighted ? '40px' : '28.8px'  }} textAlign={"center"} marginTop={"20px"} fontFamily={"Montserrat, sans-serif"} marginBottom={"40px"} fontWeight={700}>
          {price}
        </Typography>
        <Box my={2} display={"flex"} flexDirection={"column"} gap={"16px"}>
          {features.map((feature, index) => (
            <Box display="flex" alignItems="center" key={index}>
              <Typography display={"flex"} gap={"16px"} alignItems={"center"} variant="body2" component="p" style={{ marginLeft: 8 }}>
                {feature}
              </Typography>
            </Box>
          ))}
          {subtitle.map((line, index) => (
            <Typography variant="body2" marginTop={"40px"} component="p" style={{ marginLeft: 8 }} key={index}>
              {line}
            </Typography>
          ))}
        </Box>
        <AnimatedButton highlighted={highlighted} buttonText={buttonText}/>
        {highlighted && <img src={BookMarkSimple} className='bookmark' alt="BookmarkSimple" />}
      </CardContent>
    </Card>
  );
};

export default PricingCard;
