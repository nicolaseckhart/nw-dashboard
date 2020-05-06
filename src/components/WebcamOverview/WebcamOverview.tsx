import { Col, Row } from 'react-bootstrap';
import * as React from 'react';
import WebcamData from '../../models/WebcamData';
import { Webcam } from '../../shared';

interface Props {
  webcamData: WebcamData;
}

export const WebcamOverview: React.FC<Props> = ({ webcamData }: Props) => {
  const renderWebcamFeed = (image: string) => (
    <div className="webcam-feed">
      <div />
      <img alt="Webcam feed" src={image} className="rounded" />
    </div>
  );

  return (
    <div className="mt-5">
      <Row>
        {webcamData.webcams.map((webcam: Webcam, index: number) => (
          <Col md={{ span: 6 }} key={webcam.identifier}>
            {renderWebcamFeed(webcam.image)}
            <h1 className="display-4 mt-5">Webcam {index + 1}</h1>
          </Col>
        ))}
      </Row>
    </div>
  );
};
