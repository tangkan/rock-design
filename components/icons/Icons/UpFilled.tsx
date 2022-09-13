import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 12 9"
  >
    <g transform="matrix(0,-1,1,0,-9,9)">
      <path
        d="M0,9.798716L0,20.2302C0.0100111,20.4804,0.150167,20.701700000000002,0.370412,20.8268L0.490545,20.8845C0.740823,21.0385,1.05117,21.0385,1.29144,20.8845L8.67964,15.909379999999999C8.87987,15.774650000000001,9,15.55332,9,15.32237L9,14.72574C9,14.48516,8.87987,14.27345,8.67964,14.138729999999999L1.29144,9.115477C1.05117,8.9615076,0.730812,8.9615076,0.490545,9.115477L0.370412,9.173216C0.140156,9.307939,0,9.538893,0,9.798716Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const UpFilled = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default UpFilled;
