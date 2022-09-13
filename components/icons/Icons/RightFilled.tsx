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
    <g>
      <path
        d="M0,0.798716L0,11.2302C0.0100111,11.4804,0.150167,11.7017,0.370412,11.8268L0.490545,11.8845C0.740823,12.0385,1.05117,12.0385,1.29144,11.8845L8.67964,6.90938C8.87987,6.77465,9,6.55332,9,6.32237L9,5.72574C9,5.48516,8.87987,5.27345,8.67964,5.13873L1.29144,0.115477C1.05117,-0.0384924,0.730812,-0.0384924,0.490545,0.115477L0.370412,0.173216C0.140156,0.307939,0,0.538893,0,0.798716Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const RightFilled = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={svg} {...props} />
);

export default RightFilled;
