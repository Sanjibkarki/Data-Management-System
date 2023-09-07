import axios from "axios";
import { useState, useEffect } from "react";
function Home({ d }) {
    const [val, setval] = useState(d)
    const [ascendfname, setascendfname] = useState(true);
    const [ascendlname, setascendlname] = useState(true);
    const [ascendaddress, setascendaddress] = useState(true);
    const [ascendjob, setascendjob] = useState(true);

    useEffect(() => {
        setval(d)
        setascendfname(true);
        setascendlname(true);
        setascendaddress(true);
        setascendjob(true);
    }, [d])
    const toggleSortOrderfname = () => setascendfname(!ascendfname);
    const toggleSortOrderlname = () => setascendlname(!ascendlname);
    const toggleSortOrderaddress = () => setascendaddress(!ascendaddress);
    const toggleSortOrderjob = () => setascendjob(!ascendjob);
    
    function remove(e){
        const id= e.target.parentElement.parentElement.tabIndex
        const removedata = async()=>{
            await axios.delete(`http://localhost:3080/A/${id}`);
            
        }
        removedata();
    }
    const sortfname = (e) => {
        const sortedfname = val.slice().sort((a, b) => {
            const propA = a.fname.toLowerCase();
            const propB = b.fname.toLowerCase();
            if (propA<propB) {

                return ascendfname ? -1 : 1;

            }
            if (propA > propB) {
                return ascendfname ? 1 : -1;
            }
            return 0;
        });
        setval(sortedfname);
    };
    const sortlname = () => {
        const sortedlname = val.slice().sort((a, b) => {
            const propA = a.lname.toLowerCase();
            const propB = b.lname.toLowerCase();
            if (propA < propB) return ascendlname ? -1 : 1;
            if (propA > propB) return ascendlname ? 1 : -1;
            return 0;
        });
        setval(sortedlname);
    };
    const sortaddress = () => {
        const sortedaddress = val.slice().sort((a, b) => {
            const propA = a.address.toLowerCase();
            const propB = b.address.toLowerCase();
            if (propA < propB) return ascendaddress ? -1 : 1;
            if (propA > propB) return ascendaddress ? 1 : -1;
            return 0;
        });
        setval(sortedaddress);
    };
    const sortjob = () => {
        const sortedjob = val.slice().sort((a, b) => {
            const propA = a.job.toLowerCase();
            const propB = b.job.toLowerCase();
            if (propA < propB) return ascendjob ? -1 : 1;
            if (propA > propB) return ascendjob ? 1 : -1;
            return 0;
        });
        setval(sortedjob);
    };

    return (
        <>
            {d.length > 0 ? <table  className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">
                            <div className="order" >
                                <div><h1>Firstname</h1></div>
                                <div>
                                    <button className="btn1" onClick={(e) => { sortfname(e); toggleSortOrderfname() }}><i className={`fa ${ascendfname ? "fa-angle-up" : "fa-angle-down"}`} aria-hidden="true"></i></button>
                                    
                                </div>
                            </div>
                        </th>
                        <th scope="col">
                            <div className="order" >
                                <div><h1>Lastname</h1></div>
                                <div>
                                    <button className="btn1" onClick={(e) => { sortlname(e); toggleSortOrderlname() }}><i className={`fa ${ascendlname ? "fa-angle-up" : "fa-angle-down"}`} aria-hidden="true"></i></button>
                                    
                                </div>
                            </div>
                        </th>
                        <th scope="col">
                            <div className="order" >
                                <div><h1>Address</h1></div>
                                <div>
                                    <button className="btn1" onClick={(e) => { sortaddress(e); toggleSortOrderaddress() }}><i className={`fa ${ascendaddress ? "fa-angle-up" : "fa-angle-down"}`} aria-hidden="true"></i></button>
                                    
                                </div>
                            </div>
                        </th>

                        <th scope="col">
                            <div className="order" >
                                <div><h1>Job</h1></div>
                                <div>
                                <button className="btn1" onClick={(e) => { sortjob(e); toggleSortOrderjob() }}><i className={`fa ${ascendjob ? "fa-angle-up" : "fa-angle-down"}`} aria-hidden="true"></i></button>
                                </div>
                            </div>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {val.map((item,index=0) =>
                        <tr style={{width:"100%"}} key={item.id} tabIndex={item.id}>
                            <td style={{width:"15%"}}>{index+1}</td>

                            <td style={{width:"25%"}}>{item.fname}</td>
                            <td style={{width:"25%"}}>{item.lname}</td>
                            <td style={{width:"25%"}}>{item.address}</td>

                            <td style={{width:"25%"}}>{item.job}</td>
                            <td style={{width:"15%"}}><button onClick={(e)=>remove(e)} className="btn btn-primary">Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table> : <p>No results found</p>}





        </>
    )

}
export default Home;