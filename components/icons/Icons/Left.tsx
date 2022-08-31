import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 8.459914207458496 14.919946670532227"
  >
    <g>
      <path
        d="M0.296875,8.16309L6.90332,14.7695C7.09852,14.9647,7.41506,14.9649,7.61035,14.7697L7.96387,14.4166L8.31738,14.0637C8.51277,13.8684,8.51267,13.5518,8.31738,13.3564L2.41797,7.45593L8.31738,1.55664C8.51264,1.36139,8.51261,1.04488,8.31738,0.849609L7.96387,0.495972L7.61035,0.142578C7.41509,-0.0526829,7.09858,-0.052681,6.90332,0.142578L0.296875,6.74878C-0.0937505,7.13928,-0.0937505,7.77222,0.296875,8.16309Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const Left = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default Left;
