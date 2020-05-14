import * as React from 'react';
import { Table, Badge } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import EventLogEntry from '../../models/EventLogEntry';
import { apiRequestOptions } from '../../shared';

type EventFilter = { name: string; filterPrefix: string; active: boolean };
const eventLimit = 500;

interface State {
  eventLog: EventLogEntry[] | null;
  filteredEventLog: EventLogEntry[] | null;
  eventFilters: EventFilter[];
}

export class EventHistory extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      eventLog: null,
      filteredEventLog: null,
      eventFilters: [
        { name: 'Pumps', filterPrefix: 'PUMP', active: true },
        { name: 'Vents', filterPrefix: 'VENT', active: true },
      ],
    };
  }

  componentDidMount() {
    this.fetchEventHistory();
  }

  fetchEventHistory = () => {
    fetch(`${process.env.REACT_APP_API_HOST}/events/${eventLimit}`, apiRequestOptions)
      .then((response) => response.json())
      .then((response) => {
        const eventLog = response.map((record: any) => {
          return new EventLogEntry(record['time'], record['device'], record['description']);
        });
        this.setState({ eventLog, filteredEventLog: [...eventLog] });
      });
  };

  toggleFilter = (filterName: string) => {
    this.setState(
      {
        eventFilters: this.state.eventFilters.map((filter: EventFilter) => {
          if (filter.name === filterName) return { ...filter, active: !filter.active };
          return filter;
        }),
      },
      this.filterEvents,
    );
  };

  filterEvents = () => {
    const activeFilters = this.state.eventFilters
      .filter((eventFilter: EventFilter) => eventFilter.active)
      .map((eventFilter: EventFilter) => eventFilter.filterPrefix);
    const filteredEvents = this.state.eventLog!.filter((eventLog: EventLogEntry) =>
      activeFilters.includes(eventLog.device.split('_')[0]),
    );
    this.setState({ filteredEventLog: filteredEvents });
  };

  renderEventFilter = () => {
    const filterClass = (filter: EventFilter) => (filter.active ? 'selected' : '');

    return (
      <div className="event-filters">
        {this.state.eventFilters.map((filter: EventFilter, index: number) => (
          <Badge
            pill
            variant="light"
            className={filterClass(filter)}
            key={index}
            onClick={() => this.toggleFilter(filter.name)}
          >
            <span className="jam jam-filter mr-2" />
            {filter.name}
          </Badge>
        ))}
      </div>
    );
  };

  render = () => (
    <div className="mt-5 card event-card">
      <h1 className="display-4">Event History</h1>
      {this.state.eventLog !== null ? (
        <>
          {this.renderEventFilter()}

          <Table striped bordered hover variant="dark" className="my-4 event-table">
            <thead>
            <tr>
              <th>Time</th>
              <th>Device</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {this.state.filteredEventLog!.map((event: EventLogEntry, index: number) => (
              <tr key={index}>
                <td>{event.readableTimestamp()}</td>
                <td align="right">{event.device}</td>
                <td align="right">{event.description}</td>
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
}
