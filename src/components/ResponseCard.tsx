
import React from 'react';

interface ResponseCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delayIndex?: number;
}

const ResponseCard: React.FC<ResponseCardProps> = ({ title, icon, children, delayIndex = 0 }) => {
  // Create custom animation delay based on index
  const animationDelay = `${delayIndex * 150}ms`;
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 mb-4 opacity-0 animate-slide-up border border-gray-100"
      style={{ 
        animationDelay,
        animationFillMode: 'forwards'
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="text-primary">
          {icon}
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default ResponseCard;
