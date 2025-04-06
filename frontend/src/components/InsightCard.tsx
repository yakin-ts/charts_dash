import { Card, CardContent, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface InsightCardProps {
  title: string;
  children: ReactNode;
}

const InsightCard = ({ title, children }: InsightCardProps) => (
  <Card sx={{ minWidth: 300, margin: 2 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

export default InsightCard;
