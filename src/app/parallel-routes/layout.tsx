import { ReactNode } from "react";
interface Params {
  children: ReactNode;
  admin: ReactNode;
  user: ReactNode;
}
// children 없이 parallel-route 로만 관리하는것도 가능함
export default function Layout({ children, admin, user }: Params) {
  return (
    <div>
      {children}
      {admin}
      {user}
      {/* {role === 'admin' ? admin : user} */}
    </div>
  );
}
