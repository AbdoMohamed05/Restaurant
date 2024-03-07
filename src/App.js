import { BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import BasicExample from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';
import Number from './components/Number';
import Sidebar3 from './components/Sidebar3';
import Section from './components/Section';
import Section2 from './components/section2';
import Footer from './components/Footer';


function App() {
    return (
        <BrowserRouter>

            <BasicExample />
            <Home />
            <Number />

            <Sidebar />
            <Sidebar2 />
            <Sidebar3 />
            <Section />
            <Section2 />
            <Footer />



            {/* <Routes>, Routes , Route 
                <Route path="/" element={<Home link={link} />} />
                <Route path="Sidebar" element={<Sidebar />} />
            </Routes> */}


        </BrowserRouter>
    )
};


export default App;