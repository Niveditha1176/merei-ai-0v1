
import React from 'react';
import { AlertTriangle, Info, X } from 'lucide-react';

type AlertType = 'warning' | 'info';

interface AlertBannerProps {
  type: AlertType;
  message: string;
  onDismiss?: () => void;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ type, message, onDismiss }) => {
  const bgColor = type === 'warning' ? 'bg-destructive' : 'bg-secondary';
  const icon = type === 'warning' ? <AlertTriangle size={18} /> : <Info size={18} />;

  return (
    <div className={`${bgColor} text-white p-3 rounded-lg mb-4 flex items-start justify-between animate-vibrate`}>
      <div className="flex gap-2">
        {icon}
        <p className="text-sm">{message}</p>
      </div>
      {onDismiss && (
        <button onClick={onDismiss} className="text-white">
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default AlertBanner;
