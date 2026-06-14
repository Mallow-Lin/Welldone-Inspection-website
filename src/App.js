import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Service from './pages/services/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyQuoteButton from './components/StickyQuoteButton'
import { useState } from 'react'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'

function App() {
    if (sessionStorage.redirect) {
        const redirectPath = sessionStorage.redirect
        sessionStorage.removeItem('redirect')
        window.history.replaceState(null, '', redirectPath)
    }

    const [activeTabIndex, setActiveTabIndex] = useState(null)
    const [navbarHeight, setNavbarHeight] = useState(0)

    const handleSetNavbarHeight = (value) => {
        setNavbarHeight(value)
    }

    return (
        <Router>
            <Navbar
                setNavbarHeight={handleSetNavbarHeight}
                activeTabIndex={activeTabIndex}
                setActiveTabIndex={setActiveTabIndex}
            />

            <div className='flex justify-center overflow-x-hidden'>
                <div className='w-[90%] shadow-2xl'>
                    <Routes>
                        <Route path='/' element={<Home setActiveTabIndex={setActiveTabIndex} />} />
                        <Route path='/about' element={<About topPadding={navbarHeight} setActiveTabIndex={setActiveTabIndex} />} />
                        <Route path='/services' element={<Service topPadding={navbarHeight} />} />
                        <Route path='/projects' element={<Projects topPadding={navbarHeight} />} />
                        <Route path='/contact' element={<Contact topPadding={navbarHeight} />} />
                    </Routes>
                </div>
            </div>
            <Footer />
            <StickyQuoteButton />
        </Router>
    )
}

export default App
