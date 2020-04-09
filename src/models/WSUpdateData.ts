import { JsonWSUpdateDump, WSUpdate } from '../shared';

export default class WSUpdateData {
  update: WSUpdate;

  constructor(json?: JsonWSUpdateDump) {
    if (json) {
      this.update = WSUpdateData.deserialize(json);
    } else {
      this.update = WSUpdateData.deserialize({ type: 'client_list', clients: [] });
    }
  }

  static deserialize(json: JsonWSUpdateDump): WSUpdate {
    return {
      type: json.type,
      clients: json.clients,
    };
  }
}
