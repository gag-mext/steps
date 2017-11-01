
/* eslint global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Steps from '../src';
import WingBlank  from '@gag/wing-blank';
import Icon  from '@gag/icon';
import WhiteSpace  from '@gag/white-space';
const Step = Steps.Step;

ReactDOM.render(
  <WingBlank size="lg">
    <div className="sub-title">Small size</div>
    <WhiteSpace />
    <Steps size="small" current={1}>
      <Step title="Finished" description="This is description" />
      <Step title="In Progress" description="This is description" />
      <Step title="Waiting" description="This is description" />
    </Steps>
    <div className="sub-title">Small size, single line text</div>
    <WhiteSpace />
    <Steps size="small" current={1}>
      <Step title="Finished" />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </Steps>
    <div className="sub-title">Default size</div>
    <WhiteSpace size="lg" />
    <Steps>
      <Step status="process" title="Finished" description="This is description" />
      <Step status="error" title="Error" description="This is description" />
      <Step title="Waiting" description="This is description" />
    </Steps>

    <div className="sub-title">Customized status </div>
    <WhiteSpace size="lg" />
    <Steps>
      <Step status="finish" title="Step 1" icon={<Icon type={require('./pay-circle.svg')} />} />
      <Step status="process" title="Step 2" icon={<Icon type={require('./pay-circle.svg')} />} />
      <Step status="error" title="Step 3" icon={<Icon type={require('./pay-circle.svg')} />} />
    </Steps>

    <div className="sub-title">Customized icon </div>
    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="Step 1" icon={<Icon type={require('./pay-circle.svg')} />} description="This is description" />
      <Step title="Step 2" icon={<Icon type={require('./pay-circle.svg')} />} description="This is description" />
      <Step title="Step 3" icon={<Icon type={require('./pay-circle.svg')} />} description="This is description" />
    </Steps>

    <div className="sub-title">Multiple steps </div>
    <WhiteSpace size="lg" />
    <Steps current={1}>
      <Step title="Step 1" icon={<Icon type={require('./pay-circle.svg')} />} />
      <Step title="Step 2" icon={<Icon type={require('./pay-circle.svg')} />} />
      <Step title="Step 3" status="error" icon={<Icon type={require('./pay-circle.svg')} />} />
      <Step title="Step 4" icon={<Icon type={require('./pay-circle.svg')} />} />
    </Steps>
  </WingBlank>
, document.getElementById('sk-root'));
