import * as React from 'react';
import { Table } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import EventLogEntry from '../../models/EventLogEntry';
import { apiRequestOptions } from '../../shared';

interface State {
  eventLog: EventLogEntry[] | null;
}

export class EventHistory extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      eventLog: null
    }
  }

  componentDidMount() {
    this.fetchEventHistory();
  }

  fetchEventHistory = () => {
    fetch(`${process.env.REACT_APP_API_HOST}/events/50`, apiRequestOptions)
      .then(response => response.json())
      .then(response => {
        this.setState({
          eventLog: response.map((record: any) => {
            return new EventLogEntry(record['time'], record['device'], record['description']);
          }),
        });
      });
  };

  render = () => (
    <div className="mt-5 card event-card">
      <h1 className="display-4">Event History</h1>
      {this.state.eventLog !== null ? (
        <>
          <Table striped bordered hover variant="dark" className="my-4 event-table">
            <thead>
            <tr>
              <th>Time</th>
              <th>Device</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {this.state.eventLog.map((event: EventLogEntry, index: number) => (
              <tr key={index}>
                <td>{event.timestamp}</td>
                <td align="right">{event.device}</td>
                <td align="right">{event.description}</td>
              </tr>
            ))}
            </tbody>
          </Table>
        </>
      ) : <Loading />}
    </div>
  );
}
