import { JsonMiningDump, MiningRig } from '../shared';

export default class MiningData {
  rig: MiningRig;

  constructor(json: JsonMiningDump) {
    this.rig = MiningData.deserialize(json);
  }

  static deserialize(json: JsonMiningDump): MiningRig {
    return {
      id: json.id,
      totalHashRate: Number(json.total_hashrate_eth) + Number(json.total_hashrate_dcr),
      totalHashRateEth: Number(json.total_hashrate_eth),
      totalHashRateDcr: Number(json.total_hashrate_dcr),
      graphicsCards: Object.keys(json.detailed_hashrates_eth).map((g: string, i: number) => {
        return {
          name: `Graphics Card ${i}`,
          identifier: g,
          temperature: Number((json.gpu_infos as any)[g].temp),
          fan: Number((json.gpu_infos as any)[g].fan),
          hashRateEth: Number((json.detailed_hashrates_eth as any)[g]),
          hashRateDcr: Number((json.detailed_hashrates_eth as any)[g]),
        };
      }),
    };
  }
}
