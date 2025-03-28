
import React from 'react';

interface ResponseCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delayIndex?: number;
}

const ResponseCard: React.FC<ResponseCardProps> = ({ title, icon, children, delayIndex = 0 }) => {
  const delayClass = delayIndex === 0 ? 'animate-slide-up' 
                   : delayIndex === 1 ? 'animate-slide-up-delay-1'
                   : delayIndex === 2 ? 'animate-slide-up-delay-2'
                   : 'animate-slide-up-delay-3';
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 mb-4 opacity-0 ${delayClass}`}>
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
