import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 3.1855838298797607 13.96875"
  >
    <g>
      <path
        d="M0.00117367,0.529635C-0.0158841,0.242346,0.2125,0,0.500295,0L2.68584,0C2.97487,0,3.20369,0.244336,3.18477,0.532742L2.59414,9.53274C2.57689,9.79561,2.35865,10,2.09521,10L1.03467,10C0.770038,10,0.551234,9.7938,0.535549,9.52964L0.00117367,0.529635ZM1.56348,10.9688C0.735049,10.9688,0.0634766,11.6403,0.0634766,12.4688C0.0634766,13.2972,0.735049,13.9688,1.56348,13.9688C2.3919,13.9688,3.06348,13.2972,3.06348,12.4688C3.06348,11.6403,2.3919,10.9688,1.56348,10.9688Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const Exclamation = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={svg} {...props} />
);

export default Exclamation;
