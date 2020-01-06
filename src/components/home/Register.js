import React from 'react'
import {Link} from 'react-router-dom'

class Register extends React.Component {
    render () {
        return (
            <div className="col-md-4 register">
                <h1>
                    <span className="h1blackDescriptive text-only">An App for Teaching</span>
                    <span className="h1kids">kids</span>
                    <span className="h1about">about</span>
                    <span className="h1handw">health <br className="mbl-only" />+<br className="mbl-only" /> wellness</span>
                </h1>       
                <br />    
                <Link to='/registration'><button>REGISTER!<br/><span className="askParent">kids, ask a parent!</span></button></Link>
            </div>
        )
    }
}

export default Register;