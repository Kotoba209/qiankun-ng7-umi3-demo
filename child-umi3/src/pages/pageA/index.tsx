import { useLocation } from 'umi';

export default function PageA() {
  const location: any = useLocation();
  return (
    <div>
      <h1>微应用页面2，路由参数：{location.query.params}</h1>
    </div>
  );
}
