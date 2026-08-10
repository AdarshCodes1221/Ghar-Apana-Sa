import React, { useState } from 'react'
import './GetStarted.css'
import Signup from '../Auth/Signup'

const GetStarted = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="g-wrapper">
        <div className="padding innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started With Ghar Aapna Sa</span>
                <span className='secondaryText'>Subscribe and discover exclusive, irresistible offers! <br/> Find Your Residence Soon </span>
                
                <button className="button" onClick={() => setOpen(true)}>
                    Get Started
                </button>
            </div>
        </div>
        {open && <Signup onClose={() => setOpen(false)} />}
    </section>
  )
}

export default GetStarted
