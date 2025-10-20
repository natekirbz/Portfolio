import './styles/globals.css';
import './styles/responsive.css';
import SideBar from './components/SideBar/SideBar';
import Content from './components/Content/Content';

function App() {
  return (
    <main id="main">
      <SideBar />
      <Content />
    </main>
  );
}

export default App;
