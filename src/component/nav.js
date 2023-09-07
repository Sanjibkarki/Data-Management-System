import JsonData from '../data.json'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState} from 'react'
import Home from './home'
import Add from './add'
import logo from '../logo.svg'

function Nav() {
    const data = JsonData.A;
    const [selected, setselecting] = useState(null);
    const [filtered, setfiltered] = useState(data);
    const [search,setsearch] = useState('');
    useEffect(()=>{
        if (selected === "fname") {
            const value = data.filter(item => {
                return (item.fname.toLowerCase().startsWith(search.toLowerCase()));

            })
            setfiltered(value);
        }
        else if (selected === "lname") {
            const value = data.filter(item => {
                return (item.lname.toLowerCase().startsWith(search.toLowerCase()));

            })
            setfiltered(value);
        }
        else if (selected === "address") {
            const value = data.filter(item => {
                return (item.address.toLowerCase().startsWith(search.toLowerCase()));

            })
            setfiltered(value);
        }
        else {
            const value = data.filter(item => {
                return (item.job.toLowerCase().startsWith(search.toLowerCase()));

            })
            setfiltered(value);
        }

    },[selected,data,search])
    function input(e) {
        const Search = e.target.value;
        setsearch(Search)
        if (selected === "fname") {
            const value = data.filter(item => {
                return (item.fname.toLowerCase().startsWith(search.toLowerCase()));

            })
            setfiltered(value);
        }
        else if (selected === "lname") {
            const value = data.filter(item => {
                return (item.lname.toLowerCase().startsWith(search.toLowerCase()));

            })
            setfiltered(value);
        }
        else if (selected === "address") {
            const value = data.filter(item => {
                return (item.address.toLowerCase().startsWith(search.toLowerCase()));

            })
            setfiltered(value);
        }
        else {
            const value = data.filter(item => {
                return (item.job.toLowerCase().startsWith(search.toLowerCase()));

            })
            setfiltered(value);
        }

    }
    function change(e) {
        if (e.target.value === "fname") {
            setselecting("fname")
        }
        else if (e.target.value === "lname") {
            setselecting("lname")

        }
        else if (e.target.value === "address") {
            setselecting("address")

        } else {
            setselecting("job")

        }

    }


    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img className="navbar-brand logo" src={logo} alt='logo' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/add">Add</Link>
                            </li>

                        </ul>
                        <form className="d-flex" style={{ position: 'absolute', right: 0 }} role="search">

                            <div style={{ display: "flex" }}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={input} />
                                <select onChange={(e) => change(e)} className="form-select" style={{ width: "100px" }} aria-label="Default select example">
                                    <option value="fname" >Fname</option>
                                    <option value="lname">Lname</option>
                                    <option value="address">Address</option>

                                    <option value="job">Job</option>

                                </select>
                            </div>
                        </form>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home d={filtered} />} />
                    <Route path='/add' element={<Add d={filtered} />} />

                </Routes>




            </Router>
        </>
    )
}
export default Nav; 
