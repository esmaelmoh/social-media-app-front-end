
import './App.css';
import AddPost from './components/AddPost/AddPost';
import Post from './components/Post/Post';
import Profile from './components/Profile/Profile';
import Rightsidebar from './components/Rightsidebar/Rightsidebar';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
function App() {
  return (
    <div  className=''>
      <Sidebar/>
      <AddPost/>
      <Profile/>
      <Register/>
      <Login/>
      <Post/>
      <Rightsidebar/>
    </div>
  );
}

export default App;
