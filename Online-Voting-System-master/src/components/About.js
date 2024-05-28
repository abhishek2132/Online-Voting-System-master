import React from 'react'
// import Foot from '../Foot/index.js'
import akash from '../images/AAYUSH.jpg'
import dinesh from '../images/Abhinav.jpg'
import akhil from '../images/abhishek.jpg'
import guru from '../images/Karthik.jpg'
// import user from '../images/user.jpg'
import Navbar from './Navbar'
import Foot from './foot'
function index() {
  return (
    <>
        <Navbar/>
    <div className='abt navF'>
        <h1 className='text-center mt-5'>- <span style={{color:"#ff04f !important"}}>Our Team </span> -</h1>
        <div className="cards">
            <div className="card cds" style={{width: "20rem"}}>
                        <h4 className="card-title text-dark text-center pt-2" style={{fontWeight:"bold"}}>Ayush Singh</h4>

                    <img src={akash} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight:"bold"}}>Backend</h5>
                        <p className="card-text">Worked on the node js part of the project and Frontend Design using Frameworks</p>
                        <div className='ag'>
                        <a href="https://github.com/Akash-6073" className="btn btn-warning">Ayush Singh<i class="fa-brands fa-github"></i></a>
                        
                        </div>
                    </div>
            </div>
            <div className="card cds" style={{width: "18rem"}}>
                    <h4 className="card-title text-dark text-center pt-2" style={{fontWeight:"bold"}}>Abhinav Rana</h4>


                    <img src={dinesh} className="card-img-to img-fluid" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Mongo Db</h5>
                        <p className="card-text">Worked on different schema's of the project</p>
                        <div className='ag'>
                        <a href="https://github.com/dineshmnaidu" className="btn btn-warning">Abhinav Rana <i class="fa-brands fa-github"></i></a>
                        
                        </div>
                    </div>
            </div>
            <div className="card cds" style={{width: "18rem"}}>
                    <h4 className="card-title text-dark text-center pt-2" style={{fontWeight:"bold"}}>Abhishek</h4>


                    <img src={akhil} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Frontend</h5>
                        <p className="card-text">Worked on the design part of home page and user home</p>
                        <div className='ag'>
                        <a href="https://github.com/MahendrakarAkhil" className="btn btn-warning">Abhishek <i class="fa-brands fa-github"></i> </a>
                        </div>
                    </div>
            </div>
            <div className="card cds" style={{width: "18rem"}}>
                    <h4 className="card-title text-dark text-center pt-2" style={{fontWeight:"bold"}}>Kartik Sood</h4>


                    <img src={guru} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Backend</h5>
                        <p className="card-text">Worked on the node js part and a bit fronted of the project</p>
                        <div className='ag'>
                        <a href="https://github.com/DUDYALAGURUSAMEER" className="btn btn-warning">Kartik Sood <i class="fa-brands fa-github"></i></a>
                        
                        </div>
                    </div>
            </div>
            {/* <div className="card cds" style={{width: "18rem"}}>
                    <h4 className="card-title text-dark text-center pt-2" style={{fontWeight:"bold"}}>V A R I S H</h4>


                    <img src={user} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Frontend</h5>
                        <p className="card-text">worked on the fronted design of the admin page</p>
                        <div className='ag'>
                        <a href="https://github.com/Varish28" className="btn btn-warning">Varish <i class="fa-brands fa-github"></i></a>
                        
                        </div>
                    </div>
            </div> */}
        </div>
        <Foot/>
    </div>
    </>
  )
}

export default index