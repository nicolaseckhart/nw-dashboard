import React from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

interface State {
  command: string
}

interface Props {
  commandFn: (command: string) => void;
}

export class PumpComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { command: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event: any) => this.setState({ command: event.target.value });

  render = () => (
    <div className="mt-5">
      <blockquote className="blockquote">
        <p className="mb-0" style={{ color: 'white' }}>Send any string to the command channel (still crashes some services lol)</p>
        <footer className="blockquote-footer"><cite title="Source Title">N</cite></footer>
      </blockquote>

      <InputGroup size="lg">
        <FormControl
          placeholder="Command"
          aria-label="Command"
          aria-describedby="basic-addon2"
          value={this.state.command}
          onChange={this.handleInputChange}
          style={{ borderRadius: 0 }}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={() => this.props.commandFn(this.state.command)}
            style={{ borderRadius: 0 }}
          >
            Execute
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}
