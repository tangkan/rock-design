import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 14.91970443725586 8.460162162780762"
  >
    <g>
      <path
        d="M8.16682,8.16702L14.7733,1.5607C14.9685,1.36545,14.9685,1.04889,14.7733,0.853617L14.0663,0.146478C13.871,-0.0488119,13.5544,-0.0488272,13.3591,0.146443L7.45979,6.04568L1.56133,0.147099C1.36609,-0.0481434,1.04956,-0.048172,0.854284,0.147034L0.146507,0.854567C-0.0488229,1.04984,-0.0488377,1.36649,0.146474,1.56177L6.75276,8.16702C7.14339,8.55788,7.77718,8.55788,8.16682,8.16702Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const Down = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default Down;
