import * as React from 'react';
import PlantState from '../../models/PlantState';
import GrowthProgram from '../../models/GrowthProgram';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';

interface Props {
  plantState: PlantState;
}

export const PlantComponent: React.FC<Props> = ({ plantState }: Props) => {
  return <>
    <Row>
      <Col className="text-center">
        <p className="text-light">
          <b>Plant Date:</b><br/>
          {plantState.getPlantDate()}
        </p>
      </Col>
      <Col className="text-center">
        <p className="text-light">
          <b>Current Week:</b><br/>
          {GrowthProgram.getWeek(moment().subtract(12, 'weeks'))}
        </p>
      </Col>
      <Col className="text-center">
        <p className="text-light">
          <b>Upcoming Week:</b><br/>
          {GrowthProgram.getUpcomingWeek(moment().subtract(12, 'weeks'))}
        </p>
      </Col>
    </Row>
    <div className="plant-svg">
      <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1000 800">
        <rect x="415" y="105" width="450" height="330" className="tent" />
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="110.3333"
          y1="505.2222"
          x2="243.6667"
          y2="505.2222"
        >
          <stop offset="0" style={{ stopColor: '#0a0aff' }} />
          <stop offset="1" style={{ stopColor: 'red' }} />
        </linearGradient>
        <rect x="110.33" y="458.56" width="133.33" height="93.33" className="miner" />
        <polygon className="st2" points="415,315 304.72,315 25,315 25,285 304.72,285 415,285 " />
        <polyline className="st2" points="110.33,519.61 25,519.61 25,490.83 110.33,490.83 " />
        <path className="st2" d="M336,577.44" />
        <polyline className="st2" points="865,285 965,285 965,315 865,315 " />
        <line className="st2" x1="131" y1="551.89" x2="131" y2="458.56" />
        <line className="st2" x1="154" y1="551.89" x2="154" y2="458.56" />
        <line className="st2" x1="221.44" y1="551.89" x2="221.44" y2="458.56" />
        <line className="st2" x1="199.33" y1="551.89" x2="199.33" y2="458.56" />
        <line className="st2" x1="177" y1="551.89" x2="177" y2="458.56" />
        <polyline className="st2" points="264.78,315.41 264.78,490.83 294.78,490.83 294.78,315 " />
        <line className="st3" x1="266" y1="315.33" x2="294" y2="315" />
        <line className="st3" x1="415" y1="314" x2="415" y2="286" />
        <line className="st3" x1="25" y1="314" x2="25" y2="286" />
        <line className="st3" x1="25" y1="519.22" x2="25" y2="491.22" />
        <rect x="243.67" y="491.22" className="st2" width="721.33" height="28.39" />
        <line className="st3" x1="266" y1="490.83" x2="294" y2="490.5" />
        <line className="st3" x1="865" y1="314" x2="865" y2="286" />
        <polygon
          className="st4"
          points="538.02,180.31 541.17,184.11 534.86,189.35 534.86,191.76 529.92,191.76 529.92,189.28 523.69,184.11
	526.84,180.31 529.92,182.86 529.92,167.13 523.69,161.96 526.84,158.16 529.92,160.71 529.92,141.38 534.86,141.38 534.86,160.79
	538.02,158.16 541.17,161.96 534.86,167.2 534.86,182.93 "
        />
        <polygon
          className="st5"
          points="538.02,180.31 541.17,184.11 534.86,189.35 534.86,191.76 532.43,191.76 532.43,141.38 534.86,141.38
	534.86,160.79 538.02,158.16 541.17,161.96 534.86,167.2 534.86,182.93 "
        />
        <polygon className="st6" points="548.31,197.92 545.43,225.67 519.34,225.67 516.46,197.92 " />
        <rect x="513.61" y="189.29" className="st7" width="37.55" height="13.57" />
        <path
          className="st8"
          d="M526.78,159.88l-0.28,1.2l-1.12,0.5c-0.17,0.07-2.69,1.17-5.83,1.17c-1.84,0-3.9-0.38-5.82-1.57
	c-3.71-2.3-5.75-6.86-6.04-13.54l-0.1-2.24l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43C528.34,153,526.85,159.6,526.78,159.88z"
        />
        <path
          className="st9"
          d="M526.78,159.88l-0.28,1.2l-18.9-15.68l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43
	C528.34,153,526.85,159.6,526.78,159.88z"
        />
        <path
          className="st8"
          d="M526.78,182.03l-0.28,1.2l-1.12,0.5c-0.17,0.07-2.69,1.17-5.83,1.17c-1.84,0-3.9-0.38-5.82-1.57
	c-3.71-2.3-5.75-6.86-6.04-13.54l-0.1-2.24l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43C528.34,175.15,526.85,181.75,526.78,182.03z"
        />
        <g>
          <path
            className="st9"
            d="M526.78,182.03l-0.28,1.2l-18.9-15.68l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43
		C528.34,175.15,526.85,181.75,526.78,182.03z"
          />
          <path
            className="st9"
            d="M538.08,159.88l0.28,1.2l1.12,0.5c0.17,0.07,2.69,1.17,5.83,1.17c1.84,0,3.9-0.38,5.82-1.57
		c3.71-2.3,5.75-6.86,6.04-13.54l0.1-2.24l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43C536.52,153,538.02,159.6,538.08,159.88z"
          />
        </g>
        <path
          className="st8"
          d="M538.08,159.88l0.28,1.2l18.9-15.68l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43
	C536.52,153,538.02,159.6,538.08,159.88z"
        />
        <path
          className="st9"
          d="M538.08,182.03l0.28,1.2l1.12,0.5c0.17,0.07,2.69,1.17,5.83,1.17c1.84,0,3.9-0.38,5.82-1.57
	c3.71-2.3,5.75-6.86,6.04-13.54l0.1-2.24l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43C536.52,175.15,538.02,181.75,538.08,182.03z"
        />
        <path
          className="st8"
          d="M538.08,182.03l0.28,1.2l18.9-15.68l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43
	C536.52,175.15,538.02,181.75,538.08,182.03z"
        />
        <polygon className="st7" points="548.31,197.92 545.43,225.67 532.43,225.67 532.43,197.92 " />
        <rect x="532.43" y="189.29" className="st10" width="18.73" height="13.57" />
        <polygon
          className="st4"
          points="538.02,347.35 541.17,351.15 534.86,356.39 534.86,358.8 529.92,358.8 529.92,356.31 523.69,351.15
	526.84,347.35 529.92,349.9 529.92,334.16 523.69,329 526.84,325.2 529.92,327.75 529.92,308.42 534.86,308.42 534.86,327.82
	538.02,325.2 541.17,329 534.86,334.24 534.86,349.97 "
        />
        <polygon
          className="st5"
          points="538.02,347.35 541.17,351.15 534.86,356.39 534.86,358.8 532.43,358.8 532.43,308.42 534.86,308.42
	534.86,327.82 538.02,325.2 541.17,329 534.86,334.24 534.86,349.97 "
        />
        <polygon className="st6" points="548.31,364.96 545.44,392.71 519.34,392.71 516.46,364.96 " />
        <rect x="513.61" y="356.33" className="st7" width="37.55" height="13.57" />
        <path
          className="st8"
          d="M526.78,326.92l-0.28,1.2l-1.12,0.5c-0.17,0.07-2.69,1.17-5.83,1.17c-1.84,0-3.9-0.38-5.82-1.57
	c-3.71-2.3-5.75-6.86-6.04-13.54l-0.1-2.24l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43C528.34,320.04,526.85,326.64,526.78,326.92z"
        />
        <path
          className="st9"
          d="M526.78,326.92l-0.28,1.2l-18.9-15.68l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43
	C528.34,320.04,526.85,326.64,526.78,326.92z"
        />
        <path
          className="st8"
          d="M526.78,349.07l-0.28,1.2l-1.12,0.5c-0.17,0.07-2.69,1.17-5.83,1.17c-1.84,0-3.9-0.38-5.82-1.57
	c-3.71-2.3-5.75-6.86-6.04-13.54l-0.1-2.24l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43C528.34,342.19,526.85,348.79,526.78,349.07z"
        />
        <g>
          <path
            className="st9"
            d="M526.78,349.07l-0.28,1.2l-18.9-15.68l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43
		C528.34,342.19,526.85,348.79,526.78,349.07z"
          />
          <path
            className="st9"
            d="M538.09,326.92l0.28,1.2l1.12,0.5c0.17,0.07,2.69,1.17,5.83,1.17c1.84,0,3.9-0.38,5.82-1.57
		c3.71-2.3,5.75-6.86,6.04-13.54l0.1-2.24l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43C536.52,320.04,538.02,326.64,538.09,326.92z
		"
          />
        </g>
        <path
          className="st8"
          d="M538.09,326.92l0.28,1.2l18.9-15.68l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43
	C536.52,320.04,538.02,326.64,538.09,326.92z"
        />
        <path
          className="st9"
          d="M538.09,349.07l0.28,1.2l1.12,0.5c0.17,0.07,2.69,1.17,5.83,1.17c1.84,0,3.9-0.38,5.82-1.57
	c3.71-2.3,5.75-6.86,6.04-13.54l0.1-2.24l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43C536.52,342.19,538.02,348.79,538.09,349.07z"
        />
        <path
          className="st8"
          d="M538.09,349.07l0.28,1.2l18.9-15.68l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43
	C536.52,342.19,538.02,348.79,538.09,349.07z"
        />
        <polygon className="st7" points="548.31,364.96 545.44,392.71 532.43,392.71 532.43,364.96 " />
        <rect x="532.43" y="356.33" className="st10" width="18.73" height="13.57" />
        <polygon
          className="st4"
          points="713.98,181.67 717.14,185.47 710.82,190.71 710.82,193.12 705.88,193.12 705.88,190.64 699.65,185.47
	702.81,181.67 705.88,184.22 705.88,168.49 699.65,163.33 702.81,159.52 705.88,162.07 705.88,142.74 710.82,142.74 710.82,162.15
	713.98,159.52 717.14,163.33 710.82,168.56 710.82,184.29 "
        />
        <polygon
          className="st5"
          points="713.98,181.67 717.14,185.47 710.82,190.71 710.82,193.12 708.4,193.12 708.4,142.74 710.82,142.74
	710.82,162.15 713.98,159.52 717.14,163.33 710.82,168.56 710.82,184.29 "
        />
        <polygon className="st6" points="724.28,199.28 721.4,227.03 695.3,227.03 692.43,199.28 " />
        <rect x="689.58" y="190.65" className="st7" width="37.55" height="13.57" />
        <path
          className="st8"
          d="M702.75,161.24l-0.28,1.2l-1.12,0.5c-0.17,0.07-2.69,1.17-5.83,1.17c-1.84,0-3.9-0.38-5.82-1.57
	c-3.71-2.3-5.75-6.86-6.04-13.54l-0.1-2.24l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43C704.31,154.36,702.81,160.97,702.75,161.24z"
        />
        <path
          className="st9"
          d="M702.75,161.24l-0.28,1.2l-18.9-15.68l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43
	C704.31,154.36,702.81,160.97,702.75,161.24z"
        />
        <path
          className="st8"
          d="M702.75,183.39l-0.28,1.2l-1.12,0.5c-0.17,0.07-2.69,1.17-5.83,1.17c-1.84,0-3.9-0.38-5.82-1.57
	c-3.71-2.3-5.75-6.86-6.04-13.54l-0.1-2.24l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43C704.31,176.51,702.81,183.11,702.75,183.39z"
        />
        <g>
          <path
            className="st9"
            d="M702.75,183.39l-0.28,1.2l-18.9-15.68l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43
		C704.31,176.51,702.81,183.11,702.75,183.39z"
          />
          <path
            className="st9"
            d="M714.05,161.24l0.28,1.2l1.12,0.5c0.17,0.07,2.69,1.17,5.83,1.17c1.84,0,3.9-0.38,5.82-1.57
		c3.71-2.3,5.75-6.86,6.04-13.54l0.1-2.24l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43C712.49,154.36,713.98,160.97,714.05,161.24z
		"
          />
        </g>
        <path
          className="st8"
          d="M714.05,161.24l0.28,1.2l18.9-15.68l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43
	C712.49,154.36,713.98,160.97,714.05,161.24z"
        />
        <path
          className="st9"
          d="M714.05,183.39l0.28,1.2l1.12,0.5c0.17,0.07,2.69,1.17,5.83,1.17c1.84,0,3.9-0.38,5.82-1.57
	c3.71-2.3,5.75-6.86,6.04-13.54l0.1-2.24l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43C712.49,176.51,713.98,183.11,714.05,183.39z"
        />
        <path
          className="st8"
          d="M714.05,183.39l0.28,1.2l18.9-15.68l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43
	C712.49,176.51,713.98,183.11,714.05,183.39z"
        />
        <polygon className="st7" points="724.28,199.28 721.4,227.03 708.4,227.03 708.4,199.28 " />
        <rect x="708.4" y="190.65" className="st10" width="18.73" height="13.57" />
        <polygon
          className="st4"
          points="713.98,348.71 717.14,352.51 710.82,357.75 710.82,360.16 705.88,360.16 705.88,357.67 699.65,352.51
	702.8,348.71 705.88,351.26 705.88,335.53 699.65,330.36 702.8,326.56 705.88,329.11 705.88,309.78 710.82,309.78 710.82,329.18
	713.98,326.56 717.14,330.36 710.82,335.6 710.82,351.33 "
        />
        <polygon
          className="st5"
          points="713.98,348.71 717.14,352.51 710.82,357.75 710.82,360.16 708.39,360.16 708.39,309.78 710.82,309.78
	710.82,329.18 713.98,326.56 717.14,330.36 710.82,335.6 710.82,351.33 "
        />
        <polygon className="st6" points="724.28,366.32 721.4,394.07 695.3,394.07 692.42,366.32 " />
        <rect x="689.57" y="357.69" className="st7" width="37.55" height="13.57" />
        <path
          className="st8"
          d="M702.75,328.28l-0.28,1.2l-1.12,0.5c-0.17,0.07-2.69,1.17-5.83,1.17c-1.84,0-3.9-0.38-5.82-1.57
	c-3.71-2.3-5.75-6.86-6.04-13.54l-0.1-2.24l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43C704.31,321.4,702.81,328,702.75,328.28z"
        />
        <path
          className="st9"
          d="M702.75,328.28l-0.28,1.2l-18.9-15.68l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43
	C704.31,321.4,702.81,328,702.75,328.28z"
        />
        <path
          className="st8"
          d="M702.75,350.43l-0.28,1.2l-1.12,0.5c-0.17,0.07-2.69,1.17-5.83,1.17c-1.84,0-3.9-0.38-5.82-1.57
	c-3.71-2.3-5.75-6.86-6.04-13.54l-0.1-2.24l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43C704.31,343.55,702.81,350.15,702.75,350.43z"
        />
        <g>
          <path
            className="st9"
            d="M702.75,350.43l-0.28,1.2l-18.9-15.68l2.22-0.32c6.62-0.95,11.47,0.21,14.42,3.43
		C704.31,343.55,702.81,350.15,702.75,350.43z"
          />
          <path
            className="st9"
            d="M714.05,328.28l0.28,1.2l1.12,0.5c0.17,0.07,2.69,1.17,5.83,1.17c1.84,0,3.9-0.38,5.82-1.57
		c3.71-2.3,5.75-6.86,6.04-13.54l0.1-2.24l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43C712.49,321.4,713.98,328,714.05,328.28z"
          />
        </g>
        <path
          className="st8"
          d="M714.05,328.28l0.28,1.2l18.9-15.68l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43
	C712.49,321.4,713.98,328,714.05,328.28z"
        />
        <path
          className="st9"
          d="M714.05,350.43l0.28,1.2l1.12,0.5c0.17,0.07,2.69,1.17,5.83,1.17c1.84,0,3.9-0.38,5.82-1.57
	c3.71-2.3,5.75-6.86,6.04-13.54l0.1-2.24l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43C712.49,343.55,713.98,350.15,714.05,350.43z"
        />
        <path
          className="st8"
          d="M714.05,350.43l0.28,1.2l18.9-15.68l-2.22-0.32c-6.62-0.95-11.47,0.21-14.42,3.43
	C712.49,343.55,713.98,350.15,714.05,350.43z"
        />
        <polygon className="st7" points="724.28,366.32 721.4,394.07 708.39,394.07 708.39,366.32 " />
        <rect x="708.39" y="357.69" className="st10" width="18.73" height="13.57" />
        <line className="st3" x1="965" y1="314" x2="965" y2="286" />
        <line className="st3" x1="965" y1="519.42" x2="965" y2="491.42" />
        <rect x="25" y="286" className="cooling-intake" width="167.88" height="28" />
        <path className="st12" d="M164.31,285.72v28.57l57.13-28.57v28.57L164.31,285.72z" />
        <rect x="25" y="491.42" className="cooling-intake" width="84.78" height="28" />
        <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="193" y1="300" x2="416" y2="300">
          <stop offset="0" style={{ stopColor: '#0a0aff' }} />
          <stop offset="0.3222" style={{ stopColor: 'red' }} />
        </linearGradient>
        <rect x="193" y="286" width="223" height="28" className="tent-intake" />
        <path className="st12" d="M265.64,421.28h28.57l-28.57-57.13h28.57L265.64,421.28z" />
        <path className="st12" d="M471.43,491.13v28.57l57.13-28.57v28.57L471.43,491.13z" />
        <rect x="243.67" y="491.42" className="miner-exit" width="256.33" height="28" />
        <rect x="264.84" y="391.06" className="miner-exit" width="29" height="100.36" />
        <rect x="265.81" y="314" className="heat-mixer" width="29" height="77" />
        <rect x="499.96" y="491.42" className="bypass" width="465.04" height="28" />
        <rect x="864" y="286" className="tent-exit" width="101" height="28" />
        <rect x="148.36" y="435.98" className="st15" width="94.62" height="26.88" />
        <text transform="matrix(1 0 0 1 148.3636 444.4968)" className="duct-labels plant-labels">
          Mining Rig
        </text>
        <rect x="302.27" y="376.11" className="st15" width="78.49" height="29.78" />
        <text transform="matrix(1 0 0 1 302.269 384.6306)" className="duct-labels plant-labels">
          Heating Vent
        </text>
        <rect x="314.63" y="395.14" className="st15" width="53.76" height="21.5" />
        <text transform="matrix(1 0 0 1 314.6338 403.7292)" className="st18 st19 plant-labels">
          Open
        </text>
        <rect x="469.84" y="533.06" className="st15" width="75.51" height="27.96" />
        <text transform="matrix(1 0 0 1 469.8442 541.5826)" className="duct-labels plant-labels">
          Bypass Vent
        </text>
        <rect x="159.12" y="241.9" className="st15" width="84.55" height="15.05" />
        <text transform="matrix(1 0 0 1 159.1157 250.4214)" className="duct-labels plant-labels">
          Cooling Vent
        </text>
        <rect x="168.79" y="256.95" className="st15" width="53.76" height="21.5" />
        <text transform="matrix(1 0 0 1 168.7923 265.5464)" className="st19 plant-labels" style={{ fill: 'red' }}>
          Closed
        </text>
        <rect x="480.72" y="549.21" className="st15" width="53.76" height="21.5" />
        <text transform="matrix(1 0 0 1 480.7206 557.803)" className="st18 st19 plant-labels">
          Open
        </text>
        <rect x="488.42" y="233.6" className="st15" width="96.77" height="30.11" />
        <text transform="matrix(1 0 0 1 488.4166 242.1939)" className="st19 plant-labels">
          {plantState.plant1}
        </text>
        <rect x="667.95" y="232.96" className="st15" width="96.77" height="30.11" />
        <text transform="matrix(1 0 0 1 667.9504 241.5551)" className="st19 plant-labels">
          {plantState.plant2}
        </text>
        <rect x="487.99" y="400.59" className="st15" width="96.77" height="30.11" />
        <text transform="matrix(1 0 0 1 487.9866 409.1802)" className="st19 plant-labels">
          {plantState.plant3}
        </text>
        <rect x="659.97" y="401.85" className="st15" width="96.77" height="30.11" />
        <text transform="matrix(1 0 0 1 659.965 410.4385)" className="st19 plant-labels">
          {plantState.plant4}
        </text>
      </svg>
    </div>
  </>;
};
