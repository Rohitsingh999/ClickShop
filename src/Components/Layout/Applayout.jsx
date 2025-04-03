
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet ,useNavigation} from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
const Applayout = () => {

  const navigation = useNavigation();
  
   if(navigation.state=== 'loading') return <div className='w-screen h-screen flex justify-center items-center'><PulseLoader /></div>
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Applayout