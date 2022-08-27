import { UserOutlined } from '@ant-design/icons/lib';
import Dropdown, {
  DropdownButtonProps,
  DropdownButtonType,
  DropdownProps,
} from 'antd/lib/dropdown';
import './index.less';
export { DropdownProps, DropdownButtonType, DropdownButtonProps };

function RKDropdown({ children, ...props }: DropdownProps) {
  return (
    <Dropdown {...props} placement={props.placement || 'bottomLeft'}>
      {children}
    </Dropdown>
  );
}
RKDropdown.Button = ({ children, ...props }: DropdownButtonProps) => (
  <Dropdown.Button
    {...props}
    overlay={props.overlay}
    placement={props.placement || 'bottomLeft'}
    icon={props.icon || <UserOutlined />}
  >
    {children}
  </Dropdown.Button>
);

export default RKDropdown;
