import * as React from 'react';

interface Props {
  margin?: boolean;
  children: React.DOMAttributes<any>;
}

export const Title: React.FC<Props> = ({ margin, children }: Props) => {
  const classes = `display-4 ${margin ? ' mt-5' : ''}`;
  return <h1 className={classes}>{children}</h1>;
};
