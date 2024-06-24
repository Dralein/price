import React from 'react';

interface AnimatedButtonProps {
  highlighted: boolean;
  buttonText: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ highlighted, buttonText }) => {
  return (
    <div className='alignbutton'>
    <a href="#" className={`animatedfakebutton advantagecard ${highlighted ? 'highlighted' : ''}`}>
      <div id="calculateButton" className={`fakebuttontext ${highlighted ? 'highlighted' : ''}`}>{buttonText}</div>
      <div className="fakebuttonbg" />
    </a>
    </div>
  );
};

export default AnimatedButton;
