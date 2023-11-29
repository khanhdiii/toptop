import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <div className="wrapper flex flex-col items-center">
      <Header />
      <div className="container w-[1150px] flex">
        <Sidebar />
        <div className="content flex-1 min-h-[1000px]">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
