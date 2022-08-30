import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 20 20.5"
  >
    <g>
      <path
        d="M0,6.5C0,6.15163,0.181295,5.82837,0.47855,5.64672L9.47855,0.146718C9.79866,-0.0489061,10.2013,-0.0489061,10.5215,0.146718L19.5215,5.64672C19.8187,5.82837,20,6.15163,20,6.5L20,19.5C20,20.0523,19.5523,20.5,19,20.5L1,20.5C0.447715,20.5,0,20.0523,0,19.5L0,6.5ZM2,18.5L2,7.06083L10,2.17195L18,7.06083L18,18.5L13,18.5L13,12.5C13,11.9477,12.5523,11.5,12,11.5L8,11.5C7.44772,11.5,7,11.9477,7,12.5L7,18.5L2,18.5ZM9,18.5L11,18.5L11,13.5L9,13.5L9,18.5Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const Home = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default Home;
