import Steps, { StepProps, StepsProps } from 'antd/lib/steps';
import * as React from 'react';
import icons from '../icons';
import './index.less';

const {
  FinishWithBorderTowDone,
  ErrorWithBorderTowDone,
  WaitWithBorderTowDone,
  ProcessWithBorderTowDone,
} = icons;

interface StepsType extends React.FC<StepsProps> {
  Step: any;
}

const RKSteps: StepsType = ({ children, ...props }) => {
  return <Steps {...props}>{children}</Steps>;
};

RKSteps.Step = (props) => {
  console.log('step: ', props);
  const { status, progressDot } = props;
  // const { icon = <FinishWithBorderTowDone /> } = props;
  let icon;
  switch (status) {
    case 'finish':
      icon = <FinishWithBorderTowDone />;
      break;
    case 'process':
      icon = <ProcessWithBorderTowDone />;
      break;
    case 'error':
      icon = <ErrorWithBorderTowDone />;
      break;
    case 'wait':
      icon = <WaitWithBorderTowDone />;
      break;
  }

  return <Steps.Step {...props} icon={progressDot === false && (props.icon || icon)} />;
};

export { StepsProps, StepProps };

export default RKSteps;
