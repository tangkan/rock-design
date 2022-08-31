import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 15.011419296264648 10.6486177444458"
  >
    <g>
      <path
        d="M6.38184,10.3429L14.8711,1.5414C15.0625,1.34255,15.0576,1.02663,14.8594,0.83498L14.1406,0.140645C13.9424,-0.0511279,13.626,-0.0463672,13.4346,0.152363L5.64746,8.22194L1.55957,4.13332C1.36426,3.93801,1.04785,3.93801,0.852539,4.13332L0.146484,4.84035C-0.0488281,5.03566,-0.0488281,5.35219,0.146484,5.5475L4.95508,10.3557L4.96777,10.3678C5.1582,10.5519,5.41406,10.6532,5.67969,10.6485C5.94531,10.6437,6.19727,10.5338,6.38184,10.3429Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const Check = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default Check;
