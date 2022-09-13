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
    <g transform="matrix(0,1,-1,0,12,-12)">
      <path
        d="M12,0.798716L12,11.2302C12.0100111,11.4804,12.150167,11.7017,12.370412,11.8268L12.490545000000001,11.8845C12.740823,12.0385,13.051169999999999,12.0385,13.29144,11.8845L20.67964,6.90938C20.87987,6.77465,21,6.55332,21,6.32237L21,5.72574C21,5.48516,20.87987,5.27345,20.67964,5.13873L13.29144,0.115477C13.051169999999999,-0.0384924,12.730812,-0.0384924,12.490545000000001,0.115477L12.370412,0.173216C12.140156,0.307939,12,0.538893,12,0.798716Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const DownFilled = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={svg} {...props} />
);

export default DownFilled;
