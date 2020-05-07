import * as React from 'react';
import { Table } from 'react-bootstrap';
import EventLogData from '../../models/EventLogData';
import { Loading } from '../Loading/Loading';
import PlantEventData from '../../models/PlantEventData';

interface Props {
  eventLogData: EventLogData | null;
}

export const EventOverview: React.FC<Props> = ({ eventLogData }: Props) => {
  return (
    <div className="mt-5">
      {eventLogData !== null ? (
        <>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Time</th>
                <th>Device</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {eventLogData.events.map((event: PlantEventData) => (
                <tr key={event.event.time}>
                  <td>{event.event.time}</td>
                  <td align="right">{event.event.device}</td>
                  <td align="right">{event.event.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};
