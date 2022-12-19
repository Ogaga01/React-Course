import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';


function App() {
  const isAuth = useSelector((state)=>{return state.auth.isAuthenticated})

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile/>}
      <Counter />
    </>
  );
}

export default App;
