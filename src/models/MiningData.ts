import { JsonMiningDump, MiningRig } from '../shared';

export default class MiningData {
  private static readonly AVAILABLE_CARDS = ['GPU0', 'GPU1', 'GPU2', 'GPU3'];
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
      graphicsCards: MiningData.AVAILABLE_CARDS.map((g: string, i: number) => {
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
