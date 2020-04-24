import * as React from 'react';
import { PlantController } from '../PlantController/PlantController';

export const PlantOverview: React.FC = () => {
  return (
    <div className="mt-5">
      <PlantController />
    </div>
  );
};
