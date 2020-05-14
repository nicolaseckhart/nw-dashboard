import * as React from 'react';
import PlantState from '../../models/PlantState';
import VentData from '../../models/VentData';
import { SensorMeasurement } from '../../shared';

interface Props {
  plantState: PlantState;
  ventData: VentData;
  coolantTemp?: SensorMeasurement;
  heatantTemp?: SensorMeasurement;
  tentTemp?: SensorMeasurement;
}

export const PlantGraphic: React.FC<Props> = ({ plantState, ventData, heatantTemp, coolantTemp, tentTemp }: Props) => (
  <div className="plant-svg">
    <svg version="1.1" x="0px" y="0px" viewBox="0 0 707 366">
      <g id="Fill">
        <polygon
          className="st0"
          points="110,138 110,119 8,119 8,138 34,138 34,303 52,303 77,303 77,284 52,284 52,138 	"
        />
        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="77" y1="293.5" x2="195" y2="293.5">
          <stop offset="0" stopColor="#0019FF" />
          <stop offset="1" stopColor="#FF0000" />
        </linearGradient>
        <rect x="77" y="260" className="st1" width="118" height="67" />
        <rect x="110" y="119" className="st0" width="50" height="19" />
        <rect x="223" y="166" className="st2" width="19" height="50" />
        <polygon
          className="st2"
          points="242.5,283.5 242.5,216 223,216 223,283.5 194,283.5 194,303.5 424.5,303.5 424.5,283.5 	"
        />
        <rect x="424" y="284" className="st2" width="51" height="19" />
        <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="575.5" y1="303" x2="575.5" y2="137">
          <stop offset="2.237672e-07" stopColor="#FF0000" />
          <stop offset="0.3039" stopColor="#FF0301" />
          <stop offset="0.4962" stopColor="#FD0B04" />
          <stop offset="0.6575" stopColor="#FB1A0A" />
          <stop offset="0.8017" stopColor="#F82F13" />
          <stop offset="0.9332" stopColor="#F4491D" />
          <stop offset="1" stopColor="#F15A24" />
        </linearGradient>
        <polygon className="st3" points="657,137 657,283.88 475,283.88 475,303 676,303 676,283.88 676,137 	" />
        <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="160" y1="128.5" x2="281" y2="128.5">
          <stop offset="0" stopColor="#0019FF" />
          <stop offset="0.4317" stopColor="#D98439" />
          <stop offset="0.4907" stopColor="#F7931E" />
          <stop offset="0.5251" stopColor="#F7931E" />
          <stop offset="1" stopColor="#F7931E" />
        </linearGradient>
        <rect x="160" y="119" className="st4" width="121" height="19" />
        <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="232.5" y1="166" x2="232.5" y2="136">
          <stop offset="0" stopColor="#FF0000" />
          <stop offset="0.0243" stopColor="#FF0701" />
          <stop offset="0.1812" stopColor="#FC320A" />
          <stop offset="0.3411" stopColor="#FA5511" />
          <stop offset="0.5019" stopColor="#F97017" />
          <stop offset="0.6642" stopColor="#F8841B" />
          <stop offset="0.829" stopColor="#F78F1D" />
          <stop offset="1" stopColor="#F7931E" />
        </linearGradient>
        <rect x="223" y="136" className="st5" width="19" height="30" />
        <rect x="281" y="12" className="st6" width="329" height="233" />
        <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="610" y1="128.5" x2="698" y2="128.5">
          <stop offset="0" stopColor="#F7931E" />
          <stop offset="0.2006" stopColor="#F7931E" />
          <stop offset="0.2151" stopColor="#F7931E" />
          <stop offset="0.4562" stopColor="#F15A24" />
          <stop offset="0.8333" stopColor="#F15A24" />
        </linearGradient>
        <rect x="610" y="119" className="st7" width="88" height="19" />
      </g>
      <g id="Border_x26_Text">
        <path
          className="st8"
          d="M698.5,118.5h-89v-107h-329v107H7.5 M698.5,118.5 M7.5,138.5h26v145v20h43v24h118v-24h482v-20v-145h22
		 M7.5,138.5 M7.5,118.5 M222.5,283.5h-28v-24h-118v24h-24v-145h170V283.5z M656.5,283.5h-414v-145h38v106h329v-106h47V283.5z"
        />
        <line className="st8" x1="91" y1="259.5" x2="91" y2="327.5" />
        <line className="st8" x1="106" y1="259.5" x2="106" y2="327.5" />
        <line className="st8" x1="121" y1="260" x2="121" y2="328" />
        <line className="st8" x1="151" y1="259.5" x2="151" y2="327.5" />
        <line className="st8" x1="166" y1="259.5" x2="166" y2="327.5" />
        <line className="st8" x1="136" y1="259" x2="136" y2="327" />
        <line className="st8" x1="181" y1="259" x2="181" y2="327" />
        <rect x="110.5" y="118.5" className="st8" width="50" height="20" />
        <rect x="222.5" y="166.5" className="st8" width="20" height="50" />
        <rect x="424.5" y="283.5" className="st8" width="50" height="20" />
        <line className="st8" x1="110.5" y1="118.5" x2="160.5" y2="138.5" />
        <line className="st8" x1="110.5" y1="138.5" x2="160.5" y2="118.5" />
        <line className="st8" x1="222.5" y1="166.5" x2="242.5" y2="216.5" />
        <line className="st8" x1="242.5" y1="166.5" x2="222.5" y2="216.5" />
        <line className="st8" x1="424.5" y1="283.5" x2="474.5" y2="303.5" />
        <line className="st8" x1="474.5" y1="283.5" x2="424.5" y2="303.5" />
        <rect x="151" y="178.72" className="st9" width="65.12" height="14.28" />
        <text transform="matrix(1 0 0 1 153.4697 186.5347)" className="all-text labels">
          Heating Vent
        </text>
        <rect x="151" y="193" className="st9" width="63" height="12" />
        <text
          transform="matrix(1 0 0 1 169.7832 199.3901)"
          className="all-text sub-labels"
          style={ventData.getLabelStyle('heatant')}
        >
          {ventData.findVentState('heatant')}
        </text>
        <rect x="103.73" y="81.37" className="st9" width="65.12" height="14.28" />
        <text transform="matrix(1 0 0 1 106.4839 89.1792)" className="all-text labels">
          Cooling Vent
        </text>
        <rect x="103.73" y="95.64" className="st9" width="63" height="12" />
        <text
          transform="matrix(1 0 0 1 122.5117 102.0347)"
          className="all-text sub-labels"
          style={ventData.getLabelStyle('coolant')}
        >
          {ventData.findVentState('coolant')}
        </text>
        <rect x="416.56" y="313.91" className="st9" width="65.12" height="14.28" />
        <text transform="matrix(1 0 0 1 421.5516 321.7205)" className="all-text labels">
          Bypass Vent
        </text>
        <rect x="416.56" y="328.19" className="st9" width="63" height="12" />
        <text
          transform="matrix(1 0 0 1 435.3466 334.576)"
          className="all-text sub-labels"
          style={ventData.getLabelStyle('bypass')}
        >
          {ventData.findVentState('bypass')}
        </text>
        <rect x="102.73" y="340.08" className="st9" width="65.12" height="14.28" />
        <text transform="matrix(1 0 0 1 110.6264 347.8857)" className="all-text labels">
          Mining Rig
        </text>
        <rect x="102.73" y="354.35" className="st9" width="63" height="12" />
        <text transform="matrix(1 0 0 1 125.5708 360.7411)" className="all-text sub-labels">
          89°C
        </text>
        <rect x="25" y="124.21" className="st9" width="33" height="8.79" />
        <text transform="matrix(1 0 0 1 30.9185 132.021)" className=" all-text labels">
          {coolantTemp?.value} {coolantTemp?.unit}
        </text>
        <rect x="216.11" y="288.75" className="st9" width="33" height="8.79" />
        <text transform="matrix(1 0 0 1 222.0279 296.5588)" className=" all-text labels">
          {heatantTemp?.value} {heatantTemp?.unit}
        </text>
        <rect x="567.12" y="21.63" className="st9" width="33" height="8.79" />
        <text transform="matrix(1 0 0 1 563.037 29.4395)" className=" all-text labels">
          {tentTemp?.value} {tentTemp?.unit}
        </text>
      </g>
      <g id="Plants">
        <polygon
          className="st14"
          points="359.73,58.21 362.07,61.03 357.38,64.91 357.38,66.7 353.72,66.7 353.72,64.86 349.1,61.03
		351.44,58.21 353.72,60.1 353.72,48.44 349.1,44.61 351.44,41.79 353.72,43.68 353.72,29.35 357.38,29.35 357.38,43.73
		359.73,41.79 362.07,44.61 357.38,48.49 357.38,60.16 	"
        />
        <polygon
          className="st15"
          points="359.73,58.21 362.07,61.03 357.38,64.91 357.38,66.7 355.59,66.7 355.59,29.35 357.38,29.35
		357.38,43.73 359.73,41.79 362.07,44.61 357.38,48.49 357.38,60.16 	"
        />
        <polygon className="st16" points="367.36,71.27 365.23,91.85 345.88,91.85 343.74,71.27 	" />
        <rect x="341.63" y="64.87" className="st17" width="27.84" height="10.06" />
        <path
          className="st18"
          d="M351.4,43.07l-0.21,0.89l-0.83,0.37c-0.12,0.05-1.99,0.87-4.32,0.87c-1.37,0-2.89-0.28-4.31-1.16
		c-2.75-1.71-4.26-5.08-4.48-10.04l-0.07-1.66l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54C352.55,37.96,351.45,42.86,351.4,43.07z"
        />
        <path
          className="st19"
          d="M351.4,43.07l-0.21,0.89l-14.01-11.62l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54
		C352.55,37.96,351.45,42.86,351.4,43.07z"
        />
        <path
          className="st18"
          d="M351.4,59.49l-0.21,0.89l-0.83,0.37c-0.12,0.05-1.99,0.87-4.32,0.87c-1.37,0-2.89-0.28-4.31-1.16
		c-2.75-1.71-4.26-5.08-4.48-10.04l-0.07-1.66l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54C352.55,54.39,351.45,59.28,351.4,59.49z"
        />
        <g>
          <path
            className="st19"
            d="M351.4,59.49l-0.21,0.89l-14.01-11.62l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54
			C352.55,54.39,351.45,59.28,351.4,59.49z"
          />
          <path
            className="st19"
            d="M359.78,43.07l0.21,0.89l0.83,0.37c0.12,0.05,1.99,0.87,4.32,0.87c1.37,0,2.89-0.28,4.31-1.16
			c2.75-1.71,4.26-5.08,4.48-10.04l0.07-1.66l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54C358.62,37.96,359.73,42.86,359.78,43.07z"
          />
        </g>
        <path
          className="st18"
          d="M359.78,43.07l0.21,0.89L374,32.33l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54
		C358.62,37.96,359.73,42.86,359.78,43.07z"
        />
        <path
          className="st19"
          d="M359.78,59.49l0.21,0.89l0.83,0.37c0.12,0.05,1.99,0.87,4.32,0.87c1.37,0,2.89-0.28,4.31-1.16
		c2.75-1.71,4.26-5.08,4.48-10.04l0.07-1.66l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54C358.62,54.39,359.73,59.28,359.78,59.49z"
        />
        <path
          className="st18"
          d="M359.78,59.49l0.21,0.89L374,48.75l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54
		C358.62,54.39,359.73,59.28,359.78,59.49z"
        />
        <polygon className="st17" points="367.36,71.27 365.23,91.85 355.59,91.85 355.59,71.27 	" />
        <rect x="355.59" y="64.87" className="st20" width="13.89" height="10.06" />
        <polygon
          className="st14"
          points="520.86,175.38 523.2,178.2 518.51,182.09 518.51,183.87 514.85,183.87 514.85,182.03 510.23,178.2
		512.57,175.38 514.85,177.27 514.85,165.61 510.23,161.78 512.57,158.96 514.85,160.85 514.85,146.52 518.51,146.52 518.51,160.91
		520.86,158.96 523.2,161.78 518.51,165.67 518.51,177.33 	"
        />
        <polygon
          className="st15"
          points="520.86,175.38 523.2,178.2 518.51,182.09 518.51,183.87 516.71,183.87 516.71,146.52 518.51,146.52
		518.51,160.91 520.86,158.96 523.2,161.78 518.51,165.67 518.51,177.33 	"
        />
        <polygon className="st16" points="528.49,188.44 526.36,209.02 507.01,209.02 504.87,188.44 	" />
        <rect x="502.76" y="182.04" className="st17" width="27.84" height="10.06" />
        <path
          className="st18"
          d="M512.53,160.24l-0.21,0.89l-0.83,0.37c-0.12,0.05-1.99,0.87-4.32,0.87c-1.37,0-2.89-0.28-4.31-1.16
		c-2.75-1.71-4.26-5.08-4.48-10.04l-0.07-1.66l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54C513.68,155.14,512.57,160.03,512.53,160.24z
		"
        />
        <path
          className="st19"
          d="M512.53,160.24l-0.21,0.89L498.3,149.5l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54
		C513.68,155.14,512.57,160.03,512.53,160.24z"
        />
        <path
          className="st18"
          d="M512.53,176.66l-0.21,0.89l-0.83,0.37c-0.12,0.05-1.99,0.87-4.32,0.87c-1.37,0-2.89-0.28-4.31-1.16
		c-2.75-1.71-4.26-5.08-4.48-10.04l-0.07-1.66l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54C513.68,171.56,512.57,176.45,512.53,176.66z
		"
        />
        <g>
          <path
            className="st19"
            d="M512.53,176.66l-0.21,0.89l-14.01-11.62l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54
			C513.68,171.56,512.57,176.45,512.53,176.66z"
          />
          <path
            className="st19"
            d="M520.91,160.24l0.21,0.89l0.83,0.37c0.12,0.05,1.99,0.87,4.32,0.87c1.37,0,2.89-0.28,4.31-1.16
			c2.75-1.71,4.26-5.08,4.48-10.04l0.07-1.66l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54C519.75,155.14,520.86,160.03,520.91,160.24
			z"
          />
        </g>
        <path
          className="st18"
          d="M520.91,160.24l0.21,0.89l14.01-11.62l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54
		C519.75,155.14,520.86,160.03,520.91,160.24z"
        />
        <path
          className="st19"
          d="M520.91,176.66l0.21,0.89l0.83,0.37c0.12,0.05,1.99,0.87,4.32,0.87c1.37,0,2.89-0.28,4.31-1.16
		c2.75-1.71,4.26-5.08,4.48-10.04l0.07-1.66l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54C519.75,171.56,520.86,176.45,520.91,176.66z
		"
        />
        <path
          className="st18"
          d="M520.91,176.66l0.21,0.89l14.01-11.62l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54
		C519.75,171.56,520.86,176.45,520.91,176.66z"
        />
        <polygon className="st17" points="528.49,188.44 526.36,209.02 516.71,209.02 516.71,188.44 	" />
        <rect x="516.71" y="182.04" className="st20" width="13.89" height="10.06" />
        <polygon
          className="st14"
          points="520.86,58.38 523.2,61.2 518.51,65.09 518.51,66.87 514.85,66.87 514.85,65.03 510.23,61.2
		512.57,58.38 514.85,60.27 514.85,48.61 510.23,44.78 512.57,41.96 514.85,43.85 514.85,29.52 518.51,29.52 518.51,43.91
		520.86,41.96 523.2,44.78 518.51,48.67 518.51,60.33 	"
        />
        <polygon
          className="st15"
          points="520.86,58.38 523.2,61.2 518.51,65.09 518.51,66.87 516.71,66.87 516.71,29.52 518.51,29.52
		518.51,43.91 520.86,41.96 523.2,44.78 518.51,48.67 518.51,60.33 	"
        />
        <polygon className="st16" points="528.49,71.44 526.36,92.02 507.01,92.02 504.87,71.44 	" />
        <rect x="502.76" y="65.04" className="st17" width="27.84" height="10.06" />
        <path
          className="st18"
          d="M512.53,43.24l-0.21,0.89l-0.83,0.37c-0.12,0.05-1.99,0.87-4.32,0.87c-1.37,0-2.89-0.28-4.31-1.16
		c-2.75-1.71-4.26-5.08-4.48-10.04l-0.07-1.66l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54C513.68,38.14,512.57,43.03,512.53,43.24z"
        />
        <path
          className="st19"
          d="M512.53,43.24l-0.21,0.89L498.3,32.5l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54
		C513.68,38.14,512.57,43.03,512.53,43.24z"
        />
        <path
          className="st18"
          d="M512.53,59.66l-0.21,0.89l-0.83,0.37c-0.12,0.05-1.99,0.87-4.32,0.87c-1.37,0-2.89-0.28-4.31-1.16
		c-2.75-1.71-4.26-5.08-4.48-10.04l-0.07-1.66l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54C513.68,54.56,512.57,59.45,512.53,59.66z"
        />
        <g>
          <path
            className="st19"
            d="M512.53,59.66l-0.21,0.89L498.3,48.92l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54
			C513.68,54.56,512.57,59.45,512.53,59.66z"
          />
          <path
            className="st19"
            d="M520.91,43.24l0.21,0.89l0.83,0.37c0.12,0.05,1.99,0.87,4.32,0.87c1.37,0,2.89-0.28,4.31-1.16
			c2.75-1.71,4.26-5.08,4.48-10.04l0.07-1.66l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54C519.75,38.14,520.86,43.03,520.91,43.24z"
          />
        </g>
        <path
          className="st18"
          d="M520.91,43.24l0.21,0.89l14.01-11.62l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54
		C519.75,38.14,520.86,43.03,520.91,43.24z"
        />
        <path
          className="st19"
          d="M520.91,59.66l0.21,0.89l0.83,0.37c0.12,0.05,1.99,0.87,4.32,0.87c1.37,0,2.89-0.28,4.31-1.16
		c2.75-1.71,4.26-5.08,4.48-10.04l0.07-1.66l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54C519.75,54.56,520.86,59.45,520.91,59.66z"
        />
        <path
          className="st18"
          d="M520.91,59.66l0.21,0.89l14.01-11.62l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54
		C519.75,54.56,520.86,59.45,520.91,59.66z"
        />
        <polygon className="st17" points="528.49,71.44 526.36,92.02 516.71,92.02 516.71,71.44 	" />
        <rect x="516.71" y="65.04" className="st20" width="13.89" height="10.06" />
        <rect x="290.32" y="214.23" className="st9" width="130" height="13.54" />
        <text textAnchor="middle" x="50.5%" y="62%" className="all-text labels">
          {plantState.plant1}
        </text>
        <rect x="452.02" y="214.23" className="st9" width="130" height="13.54" />
        <text textAnchor="middle" x="74%" y="62%" className="all-text labels">
          {plantState.plant2}
        </text>
        <rect x="291.02" y="97.23" className="st9" width="130" height="13.54" />
        <text textAnchor="middle" x="50.5%" y="30%" className="all-text labels">
          {plantState.plant3}
        </text>
        <rect x="452.02" y="97.23" className="st9" width="130" height="13.54" />
        <text textAnchor="middle" x="74%" y="30%" className="all-text labels">
          {plantState.plant4}
        </text>
        <polygon
          className="st14"
          points="359.86,175.38 362.2,178.2 357.51,182.09 357.51,183.87 353.85,183.87 353.85,182.03 349.23,178.2
		351.57,175.38 353.85,177.27 353.85,165.61 349.23,161.78 351.57,158.96 353.85,160.85 353.85,146.52 357.51,146.52 357.51,160.91
		359.86,158.96 362.2,161.78 357.51,165.67 357.51,177.33 	"
        />
        <polygon
          className="st15"
          points="359.86,175.38 362.2,178.2 357.51,182.09 357.51,183.87 355.71,183.87 355.71,146.52 357.51,146.52
		357.51,160.91 359.86,158.96 362.2,161.78 357.51,165.67 357.51,177.33 	"
        />
        <polygon className="st16" points="367.49,188.44 365.36,209.02 346.01,209.02 343.87,188.44 	" />
        <rect x="341.76" y="182.04" className="st17" width="27.84" height="10.06" />
        <path
          className="st18"
          d="M351.53,160.24l-0.21,0.89l-0.83,0.37c-0.12,0.05-1.99,0.87-4.32,0.87c-1.37,0-2.89-0.28-4.31-1.16
		c-2.75-1.71-4.26-5.08-4.48-10.04l-0.07-1.66l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54C352.68,155.14,351.57,160.03,351.53,160.24z
		"
        />
        <path
          className="st19"
          d="M351.53,160.24l-0.21,0.89L337.3,149.5l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54
		C352.68,155.14,351.57,160.03,351.53,160.24z"
        />
        <path
          className="st18"
          d="M351.53,176.66l-0.21,0.89l-0.83,0.37c-0.12,0.05-1.99,0.87-4.32,0.87c-1.37,0-2.89-0.28-4.31-1.16
		c-2.75-1.71-4.26-5.08-4.48-10.04l-0.07-1.66l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54C352.68,171.56,351.57,176.45,351.53,176.66z
		"
        />
        <g>
          <path
            className="st19"
            d="M351.53,176.66l-0.21,0.89l-14.01-11.62l1.64-0.23c4.91-0.7,8.51,0.15,10.69,2.54
			C352.68,171.56,351.57,176.45,351.53,176.66z"
          />
          <path
            className="st19"
            d="M359.91,160.24l0.21,0.89l0.83,0.37c0.12,0.05,1.99,0.87,4.32,0.87c1.37,0,2.89-0.28,4.31-1.16
			c2.75-1.71,4.26-5.08,4.48-10.04l0.07-1.66l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54C358.75,155.14,359.86,160.03,359.91,160.24
			z"
          />
        </g>
        <path
          className="st18"
          d="M359.91,160.24l0.21,0.89l14.01-11.62l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54
		C358.75,155.14,359.86,160.03,359.91,160.24z"
        />
        <path
          className="st19"
          d="M359.91,176.66l0.21,0.89l0.83,0.37c0.12,0.05,1.99,0.87,4.32,0.87c1.37,0,2.89-0.28,4.31-1.16
		c2.75-1.71,4.26-5.08,4.48-10.04l0.07-1.66l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54C358.75,171.56,359.86,176.45,359.91,176.66z
		"
        />
        <path
          className="st18"
          d="M359.91,176.66l0.21,0.89l14.01-11.62l-1.64-0.23c-4.91-0.7-8.51,0.15-10.69,2.54
		C358.75,171.56,359.86,176.45,359.91,176.66z"
        />
        <polygon className="st17" points="367.49,188.44 365.36,209.02 355.71,209.02 355.71,188.44 	" />
        <rect x="355.71" y="182.04" className="st20" width="13.89" height="10.06" />
      </g>
    </svg>
  </div>
);
