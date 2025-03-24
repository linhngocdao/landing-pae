import Sidebar from './Sidebar';

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <div className="main-content">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
