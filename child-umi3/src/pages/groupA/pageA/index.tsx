import { useEffect } from 'react';
import { useLocation } from 'umi';
import { Button } from 'antd';
import actions from '@/plugins/quankun';

export default function PageA(props: any) {
  // useEffect(() => {
  //   actions.onGlobalStateChange((state: any) => {
  //     console.log('pageA state：', state);
  //   }, true);
  //   return () => {
  //     // actions.offGlobalStateChange()
  //   }
  // }, []);

  const handleClick = () => {
    actions.setGlobalState({ test: 'child12' });
  };

  const handleJump = () => {
    actions.setGlobalState({
      routeUrl: '/main/home',
      queryParams: { name: 'pageA' },
    });
    // window.location.href= "/main/home"
  };

  console.log('PageA props：', props);
  const location: any = useLocation();
  return (
    <div>
      <h1>微应用页面1，路由参数：{location.query.params}</h1>
      <Button type="primary" onClick={handleClick}>
        给主应用传值
      </Button>
      <div  style={{ marginTop: '20px' }}>
        <Button type="primary" onClick={handleJump}>
          子应用跳转到主应用页面
        </Button>
      </div>
    </div>
  );
}
