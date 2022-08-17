import Button, { ButtonProps } from 'antd/lib/button';
import * as React from 'react';
import './index.less';

const RKButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export { ButtonProps };

export default RKButton;
