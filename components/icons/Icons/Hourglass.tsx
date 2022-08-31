import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 20 21.000244140625"
  >
    <g>
      <path
        d="M0.5,0C0.223858,0,0,0.223858,0,0.5L0,1.5C0,1.77614,0.223858,2,0.5,2L1.909,2L7,11.2814L7,20C7,20.1552,7.03604,20.3083,7.10547,20.4471C7.35246,20.9411,7.95329,21.1414,8.44727,20.8944L12.4473,18.8944C12.786,18.725,13,18.3788,13,18L13,11.2814L18.0906,2L19.5,2C19.7761,2,20,1.77614,20,1.5L20,0.5C20,0.223858,19.7761,0,19.5,0L0.5,0ZM15.8097,2L4.18994,2L8.85352,10.4785C8.94946,10.6355,9,10.816,9,11L9,18.382L11,17.382L11,11C11,10.816,11.0505,10.6355,11.1465,10.4785L15.8097,2Z"
        fillRule="evenodd"
        fill="#212533"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const Hourglass = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default Hourglass;
