import Navbar from "./components/Navbar"
import Search from "./components/Search"
import PerfumeList from "./components/PerfumeList"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Search></Search>
            <PerfumeList></PerfumeList>
            <About></About>
            <Footer></Footer>
        </>
    )
}

export default App