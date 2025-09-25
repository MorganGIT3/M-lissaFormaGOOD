import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Headphones, FileImage } from 'lucide-react';
import { Resource } from '@shared/types';

interface ResourceCardProps {
  resource: Resource;
  onDownload?: (resourceId: string) => void;
  delay?: number;
}

const getResourceIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return FileText;
    case 'audio':
      return Headphones;
    case 'document':
      return FileImage;
    default:
      return FileText;
  }
};

const getResourceColor = (type: string) => {
  switch (type) {
    case 'pdf':
      return 'bg-red-50 text-red-700 border-red-200';
    case 'audio':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'document':
      return 'bg-green-50 text-green-700 border-green-200';
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

export default function ResourceCard({ resource, onDownload, delay = 0 }: ResourceCardProps) {
  const IconComponent = getResourceIcon(resource.type);
  const colorClass = getResourceColor(resource.type);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="hover-elevate transition-all duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-lg font-medium leading-snug">
                  {resource.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {resource.size}
                </p>
              </div>
            </div>
            <Badge variant="outline" className="capitalize">
              {resource.type}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent>
          <Button 
            onClick={() => onDownload?.(resource.id)}
            className="w-full gap-2"
            variant="outline"
            data-testid={`button-download-${resource.id}`}
          >
            <Download className="w-4 h-4" />
            Télécharger
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}