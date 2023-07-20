import React from 'react';
import { Button, Layout } from 'antd';

const { Content } = Layout;

const BasicLayout = (props: any) => {
  console.log('props', props);
  const { children, ...rest } = props;
  return (
    <>
      <Layout>
        <Content>{React.cloneElement(children, rest)}</Content>
      </Layout>
    </>
  );
};

export default BasicLayout;
