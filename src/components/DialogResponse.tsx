
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import ResponseCard from '@/components/ResponseCard';
import { Cloud, Leaf, Sprout } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

interface DialogResponseProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
}

const DialogResponse: React.FC<DialogResponseProps> = ({ isOpen, onClose, query }) => {
  const { t } = useTranslation();
  const { theme } = useApp();
  
  // Generate dummy response data based on the query
  const getDummyResponse = () => {
    if (query.includes(t('common.checkPests'))) {
      return {
        title: t('common.checkPests'),
        cards: [
          {
            title: t('common.pestDetection'),
            icon: <Leaf />,
            content: t('common.pestDescription')
          },
          {
            title: t('common.recommendedAction'),
            icon: <Sprout />,
            content: t('common.actionDescription')
          }
        ]
      };
    } else if (query.includes(t('common.bestTimeWater'))) {
      return {
        title: t('common.bestTimeWater'),
        cards: [
          {
            title: t('common.weatherForecast'),
            icon: <Cloud />,
            content: t('common.weatherDescription')
          },
          {
            title: t('common.wateringRecommendation'),
            icon: <Sprout />,
            content: t('common.wateringDescription')
          }
        ]
      };
    } else {
      return {
        title: t('common.improveSoil'),
        cards: [
          {
            title: t('common.soilAnalysis'),
            icon: <Sprout />,
            content: t('common.soilAnalysisDesc')
          },
          {
            title: t('common.improvementStrategy'),
            icon: <Leaf />,
            content: t('common.improvementDesc')
          }
        ]
      };
    }
  };
  
  const response = getDummyResponse();
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={`sm:max-w-md ${theme === 'dark' ? 'bg-slate-800 border-gray-700 text-white' : ''}`}>
        <DialogHeader>
          <DialogTitle className="text-center">{response.title}</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          {response.cards.map((card, index) => (
            <ResponseCard 
              key={index} 
              title={card.title} 
              icon={card.icon} 
              delayIndex={index}
            >
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{card.content}</p>
            </ResponseCard>
          ))}
        </div>
        
        <DialogFooter>
          <Button onClick={onClose} className="w-full">
            {t('common.cancel')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogResponse;
