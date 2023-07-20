import { useLocation } from 'umi';
import { Button } from 'antd';
import actions from '@/plugins/quankun';

export default function PageA() {
  const location: any = useLocation();
  const handleJump = () => {
    actions.setGlobalState({
      routeUrl: '/main/about',
      queryParams: { name: 'pageA' },
    });
  };

  return (
    <div>
      <h1>微应用页面2，路由参数：{location.query.params}</h1>
      <div  style={{ marginTop: '20px' }}>
        <Button type="primary" onClick={handleJump}>
          子应用跳转到主应用页面
        </Button>
      </div>
    </div>
  );
}
