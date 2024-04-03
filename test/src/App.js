import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';

function App() {
  return (
    <div className="App">
      <NotificationList />
      <CommentList />
      <Welcome name="홍길동" />
      <Welcome name="이순신" />
      <Welcome name="강감찬" />
      <Clock />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React gogo
        </a>
      </header>
      
    </div>
  );

}


export default App;
