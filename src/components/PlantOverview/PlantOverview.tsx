import * as React from 'react';
import { PlantComponent } from '../PlantController/PlantComponent';
import PlantState from '../../models/PlantState';

export const PlantOverview: React.FC = () => {
  return (
    <div className="mt-5">
      <PlantComponent plantState={new PlantState()} />
    </div>
  );
};
