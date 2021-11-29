import { Footer } from 'components/_layouts/Footer';
import Header from 'components/_layouts/Header';
import { ILayout } from 'types/app.types';
import { SideBar } from 'components/_layouts/SideBar';

export const DashboardLayout: ILayout = ({ children }) => {
  return (
    <>
      <div id="DashboardLayout">
        <div className="bg-white rounded-md flex flex-row">
          <SideBar />
          <div id="MainContent" className="flex-1 relative">
            <header className="fixed w-full top-0 bg-purple-900">
              <Header>Header</Header>
            </header>
            <main id="content" className="flex-1">
              {children}
            </main>
          </div>
        </div>
        <Footer>
          <button className="">Have a Safe Stay</button>
        </Footer>
      </div>
    </>
  );
};
