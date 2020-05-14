import { Vent, JsonVentDump } from '../shared';

export default class VentData {
  vents: Vent[];

  constructor() {
    this.vents = [
      { name: 'bypass', open: false },
      { name: 'coolant', open: false },
      { name: 'heatant', open: false },
    ];
  }

  update(json: JsonVentDump): VentData {
    const ventOpen = (stringState: string) => stringState.toLowerCase() === 'open';
    this.vents = [
      { name: 'bypass', open: ventOpen(json.bypass) },
      { name: 'coolant', open: ventOpen(json.coolant) },
      { name: 'heatant', open: ventOpen(json.heatant) },
    ];

    return this;
  }

  findVentState(name: string) {
    const vent = this.vents.find((vent) => vent.name === name);
    if (!vent) return 'Unknown';

    return vent.open ? 'Open' : 'Closed';
  }

  getLabelStyle(name: string) {
    const state = this.findVentState(name);
    return { fill: state === 'Open' ? 'green' : 'red' };
  }
}
