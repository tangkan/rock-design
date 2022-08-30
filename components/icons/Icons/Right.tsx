import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 8.4595947265625 14.92010498046875"
  >
    <g>
      <path
        d="M8.16699,8.16702L1.56055,14.7737C1.36523,14.9689,1.04883,14.9689,0.853516,14.7737L0.146484,14.0677C-0.0488281,13.8725,-0.0488281,13.5552,0.146484,13.3598L6.04492,7.4595L0.146484,1.5607C-0.0488281,1.36539,-0.0488281,1.04886,0.146484,0.853546L0.853516,0.146393C1.04883,-0.0487976,1.36523,-0.0487976,1.56055,0.146393L8.16699,6.75284C8.55664,7.14322,8.55762,7.77689,8.16699,8.16702Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const Right = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default Right;
