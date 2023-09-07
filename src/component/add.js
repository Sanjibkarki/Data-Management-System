import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add({ d }) {
    const [name, setname] = useState('');
    const [lname, setlname] = useState('');
    const [address, setaddress] = useState('');
    const [job, setjob] = useState('')
    const history = useNavigate();


    const updatedata = async () => {
        const doc = { "fname": name, "lname": lname, "address": address, "job": job }
        try {
            await axios.post('http://localhost:3080/A', doc)
        }
        catch {
            console.error("Error loading JSON data:");
        };
    }
    function clicked() {
        updatedata()
        history('/')
    }
    function databasename(e) {
        setname(e.target.value)

    }
    function databaselname(e) {
        setlname(e.target.value)

    }
    function databaseaddress(e) {
        setaddress(e.target.value)

    }
    function databasejob(e) {
        setjob(e.target.value)

    }

    return (
        <>
            <div className="form-row container" >
                <h1>Fill Your Form</h1>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">First name<span>:</span></label>
                    <input type="text" className="form-control" id="inputEmail4" onChange={(e) => databasename(e)} placeholder="First Name" required />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Last Name</label>
                    <input type="text"  className="form-control" id="inputPassword4" onChange={(e) => databaselname(e)} placeholder="Last Name" required />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputAddress">Address <span>:</span></label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Address" onChange={(e) => databaseaddress(e)} required />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputAddress2">Job<span>:</span></label>
                    <input type="text" className="form-control" id="inputAddress2" onChange={(e) => databasejob(e)} placeholder="Job" required />
                </div>
            <button style={{  marginTop: "10px" }} onClick={clicked} className="btn btn-primary" type="submit">submit</button>

            </div>
            

        </>
    )
}
export default Add;