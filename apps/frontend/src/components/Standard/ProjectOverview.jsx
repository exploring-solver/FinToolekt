import React from 'react';
import { Typography, Card } from '@material-tailwind/react';

const ProjectOverview = () => {
  return (
    <div className="mx-auto max-w-screen-md py-12">
      <Card className="mb-12 overflow-hidden">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Project Overview
        </Typography>
        <Typography color="gray" className="font-normal">
          Our project leverages a robust ML model to enhance fraud detection and prediction analysis. By identifying suspicious patterns and anomalies, the model aids in early fraud detection, reducing financial risks. The integrated audit assistant tool simplifies big data audits, efficiently sorting transactions and tracking potential frauds. This comprehensive approach ensures a more secure and transparent financial environment, providing businesses with the tools they need to prevent fraud and maintain integrity in their operations.
        </Typography>
      </Card>
    </div>
  );
}

export default ProjectOverview;
