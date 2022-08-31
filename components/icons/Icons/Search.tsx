import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="1em"
    height="1em"
    viewBox="0 0 19.809818267822266 19.78350257873535"
  >
    <g>
      <path
        d="M8.5,17C13.1944,17,17,13.1944,17,8.5C17,3.80558,13.1944,0,8.5,0C3.80558,0,0,3.80558,0,8.5C0,13.1944,3.80558,17,8.5,17ZM13.0962,3.90381Q15,5.80761,15,8.5Q15,11.1924,13.0962,13.0962Q11.1924,15,8.5,15Q5.80761,15,3.90381,13.0962Q2,11.1924,2,8.5Q2,5.80761,3.90381,3.90381Q5.80761,2,8.5,2Q11.1924,2,13.0962,3.90381ZM15.2563,14.5469L14.625,15.1777L14.625,16.5449L17.7175,19.6371C17.9127,19.8323,18.2293,19.8323,18.4245,19.6371L19.6634,18.3984C19.8586,18.2031,19.8586,17.8865,19.6634,17.6913L16.519,14.5469L15.2563,14.5469Z"
        fillRule="evenodd"
        fill="currentColor"
        fillOpacity="1"
      />
    </g>
  </svg>
);

const Search = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default Search;
