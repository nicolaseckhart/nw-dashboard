import * as React from 'react';

export const SocketDownMessage: React.FC = () => {
  return (
    <>
      <div className="socket-down-indicator">
        <span className="jam jam-alert socket-down-text" />
      </div>
      <div className="socket-down-message">
        <span className="socket-down-text">Socket not communicating...</span>
      </div>
    </>
  );
};

export default SocketDownMessage;
