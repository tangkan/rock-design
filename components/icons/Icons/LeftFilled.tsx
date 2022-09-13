import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 9 12"
  >
    <g transform="matrix(-1,0,0,-1,18,24)">
      <path
        d="M9,12.798716L9,23.2302C9.0100111,23.4804,9.150167,23.701700000000002,9.370412,23.8268L9.490545000000001,23.8845C9.740823,24.0385,10.051169999999999,24.0385,10.29144,23.8845L17.67964,18.90938C17.87987,18.77465,18,18.55332,18,18.32237L18,17.725740000000002C18,17.48516,17.87987,17.27345,17.67964,17.13873L10.29144,12.115477C10.051169999999999,11.9615076,9.730812,11.9615076,9.490545000000001,12.115477L9.370412,12.173216C9.140156,12.307939,9,12.538893,9,12.798716Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const LeftFilled = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={svg} {...props} />
);

export default LeftFilled;
