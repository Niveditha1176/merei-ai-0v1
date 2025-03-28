
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

interface DialogResponseProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
}

const DialogResponse: React.FC<DialogResponseProps> = ({ isOpen, onClose, query }) => {
  const { t } = useTranslation();
  
  // Generate dummy response data based on the query
  const getDummyResponse = () => {
    if (query.includes(t('common.checkPests'))) {
      return {
        title: t('common.checkPests'),
        cards: [
          {
            title: "Pest Detection",
            icon: <Leaf />,
            content: "Your cotton field appears to have signs of aphid infestation. These small insects are visible on the underside of leaves."
          },
          {
            title: "Recommended Action",
            icon: <Sprout />,
            content: "Apply neem oil spray in the early morning. Use 5ml per liter of water and spray every 7 days for 3 weeks."
          }
        ]
      };
    } else if (query.includes(t('common.bestTimeWater'))) {
      return {
        title: t('common.bestTimeWater'),
        cards: [
          {
            title: "Weather Forecast",
            icon: <Cloud />,
            content: "Light rainfall expected in the next 48 hours in your region. Total precipitation: 15-20mm."
          },
          {
            title: "Watering Recommendation",
            icon: <Sprout />,
            content: "Wait until after the rain to assess soil moisture. Early morning watering is recommended if soil still appears dry."
          }
        ]
      };
    } else {
      return {
        title: t('common.improveSoil'),
        cards: [
          {
            title: "Soil Analysis",
            icon: <Sprout />,
            content: "Your soil sample shows low nitrogen (N) content and moderate phosphorus (P). pH level is 6.2 which is slightly acidic."
          },
          {
            title: "Improvement Strategy",
            icon: <Leaf />,
            content: "Add compost and well-rotted manure to improve nitrogen levels. Consider growing legumes as a cover crop to fix nitrogen naturally."
          }
        ]
      };
    }
  };
  
  const response = getDummyResponse();
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
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
              <p className="text-gray-600 text-sm">{card.content}</p>
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
