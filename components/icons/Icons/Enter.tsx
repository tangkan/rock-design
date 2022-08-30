import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 19.993167877197266 12.460588455200195"
  >
    <g>
      <path
        d="M14.9935,8Q16.2361,8,17.1146,7.12134Q17.9933,6.24266,17.9935,5Q17.9935,3.75736,17.1146,2.87866Q16.2359,1.99998,14.9935,2L3.9935,2C3.71735,2,3.4935,1.77614,3.4935,1.5L3.4935,0.5C3.4935,0.223858,3.71735,0,3.9935,0L14.9935,0Q17.0646,0,18.5292,1.46448Q19.9936,2.92894,19.9935,5Q19.9935,7.07107,18.5292,8.53552Q17.0647,9.99999,14.9935,10L4.7002,10L4.7002,11.9597C4.70019,12.379,4.21507,12.612,3.8877,12.3501L0.187988,9.3905C-0.0622096,9.19034,-0.0622091,8.80978,0.187988,8.60962L3.8877,5.6499C4.21508,5.38799,4.7002,5.62102,4.7002,6.04028L4.7002,8L14.9935,8Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const Enter = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default Enter;
