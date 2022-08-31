import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
  >
    <g>
      <ellipse
        cx="9"
        cy="9"
        rx="8"
        ry="8"
        fillOpacity="0"
        strokeOpacity="1"
        stroke="currentColor"
        fill="none"
        stroke-width="2"
      />
    </g>
  </svg>
);

const Round = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default Round;
