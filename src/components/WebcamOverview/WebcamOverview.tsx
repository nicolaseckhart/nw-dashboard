import { Col, Row } from 'react-bootstrap';
import * as React from 'react';
import WebcamData from '../../models/WebcamData';
import { Webcam } from '../../shared';
import { Title } from '../UiComponents/Title';

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
            <div className="card webcam-card">
              {renderWebcamFeed(webcam.image)}
              <Title>Webcam {index + 1}</Title>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
