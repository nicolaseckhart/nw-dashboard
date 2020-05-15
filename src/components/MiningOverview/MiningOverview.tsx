import { Col, Row } from 'react-bootstrap';
import { GraphicsCard } from '../../shared';
import * as React from 'react';
import { Loading } from '../Loading/Loading';
import { Table } from 'react-bootstrap';
import MiningData from '../../models/MiningData';
import { Title } from '../UiComponents/Title';

interface Props {
  miningData: MiningData | null;
}

export const MiningOverview: React.FC<Props> = ({ miningData }: Props) => {
  const readableRate = (hashRate: number) => `${(hashRate / 1000).toFixed(2)} MH/s`;

  return (
    <div className="mt-5">
      {miningData !== null ? (
        <>
          <Title>
            Mining Rig #{miningData.rig.id} [{readableRate(miningData.rig.totalHashRate)}]
          </Title>
          <Row>
            {miningData.rig.graphicsCards.map((graphicsCard: GraphicsCard) => (
              <Col md={{ span: 4 }} className="my-3" key={graphicsCard.identifier}>
                <div className="info-card">
                  <h4 className="text-muted font-weight-lighter">{graphicsCard.identifier}</h4>
                  <Table size="sm">
                    <thead>
                      <tr>
                        <th>Temperature</th>
                        <th>Fan Speed</th>
                        <th>Hash Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{graphicsCard.temperature} °C</td>
                        <td>{graphicsCard.fan} %</td>
                        <td>{readableRate(graphicsCard.hashRateEth)}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};
