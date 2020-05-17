import * as React from 'react';

interface Props {
  icon: string;
  action: () => void;
}

export const NwButton: React.FC<Props> = ({ icon, action }: Props) => (
  <div className="nw-button" onClick={action}>
    <span className={`jam jam-${icon}`} />
  </div>
);
