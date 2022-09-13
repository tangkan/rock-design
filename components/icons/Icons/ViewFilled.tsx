import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 19.711027145385742 12"
  >
    <g>
      <path
        d="M9.85551,0Q15.1341,0,19.3639,5.04376Q19.711,5.45768,19.711,6Q19.711,6.54232,19.3639,6.95624Q15.1341,12,9.85551,12Q4.57691,12,0.347121,6.95624Q0,6.54232,0,6Q0,5.45768,0.347121,5.04376Q4.57691,0,9.85551,0ZM13.8555,6C13.8555,8.20914,12.0646,10,9.85547,10C7.64633,10,5.85547,8.20914,5.85547,6C5.85547,3.79086,7.64633,2,9.85547,2C12.0646,2,13.8555,3.79086,13.8555,6ZM9.85547,8C10.96,8,11.8555,7.10457,11.8555,6C11.8555,4.89543,10.96,4,9.85547,4C8.7509,4,7.85547,4.89543,7.85547,6C7.85547,7.10457,8.7509,8,9.85547,8Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const ViewFilled = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={svg} {...props} />
);

export default ViewFilled;
