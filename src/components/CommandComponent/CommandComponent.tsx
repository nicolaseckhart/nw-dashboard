import React from 'react';
import { Row, Col, InputGroup, Button, FormControl } from 'react-bootstrap';

interface State {
  command: string
}

interface Props {
  commandFn: (command: string) => void;
}

const commandPresets: string[] = [
  'VENT_HEAT_OPEN', 'VENT_HEAT_CLOSE', 'VENT_COOL_OPEN', 'VENT_COOL_CLOSE', 'VENT_BYPASS_OPEN', 'VENT_BYPASS_CLOSE',
  'PUMP_BLOOM_X', 'PUMP_MICRO_X', 'PUMP_GROW_X', 'PUMP_PH_UP_X', 'PUMP_PH_DOWN_X',
];

export class CommandComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { command: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event: any) => this.setState({ command: event.target.value });
  setCommand = (command: string) => this.setState({ command });

  executeCommand = () => {
    if (this.state.command.length === 0) return;
    this.props.commandFn(this.state.command);
    this.setState({ command: '' });
  };

  render = () => (
    <div className="mt-5">
      <h1 className="display-4">Command Dashboard</h1>

      <Row className="my-3">
        {commandPresets.map((command: string, index: number) => (
          <Col md={{ span: 3 }} key={index}>
            <div className="command-preset" onClick={() => this.setCommand(command)}>{command}</div>
          </Col>
        ))}

        <Col md={{ span: 3 }}>
          <div className="command-preset reset-command" onClick={() => this.setCommand('')}>CLEAR COMMAND</div>
        </Col>
      </Row>

      <InputGroup size="lg" className="command-input my-2">
        <FormControl
          placeholder="Command"
          aria-label="Command"
          aria-describedby="basic-addon2"
          value={this.state.command}
          onChange={this.handleInputChange}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={this.executeCommand}
            disabled={this.state.command.length === 0}
          >
            Execute
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}
