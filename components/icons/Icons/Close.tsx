import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 12.00014877319336 11.999999046325684"
  >
    <g>
      <path
        d="M6,7.41421L1.56059,11.8536C1.36532,12.0489,1.04874,12.0489,0.853477,11.8536L0.146372,11.1465C-0.0488901,10.9513,-0.0488901,10.6347,0.146371,10.4394L4.58579,6L0.146522,1.56074C-0.04874,1.36547,-0.04874,1.04889,0.146522,0.853629L0.853629,0.146522C1.04889,-0.04874,1.36547,-0.04874,1.56074,0.146522L6,4.58579L10.4393,0.146522C10.6345,-0.04874,10.9511,-0.04874,11.1464,0.146522L11.8535,0.853629C12.0487,1.04889,12.0487,1.36547,11.8535,1.56074L7.41421,6L11.8536,10.4394C12.0489,10.6347,12.0489,10.9513,11.8536,11.1465L11.1465,11.8536C10.9513,12.0489,10.6347,12.0489,10.4394,11.8536L6,7.41421Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const Close = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default Close;
