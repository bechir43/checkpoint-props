import React from 'react'
import PropTypes from 'prop-types'; // ES6


const Profilecomponent = ({fullname, profession, bio, children, alertMe}) => {
    return(
        <div className='Body'>
        <h1 className='h1'>{fullname}</h1>
        <h3 className='h3'>{profession}</h3>
        <p className='par'>{bio}</p>   
        <button className='btn' onClick={() => alertMe(fullname)}>Click on me</button>
        {children}


        </div>
    );
}


Profilecomponent.defaultProps = {
    fullname : "Bechir Arfaoui",
    alertMe : (fakeName) => alert(`Hello ${fakeName}`)

}

Profilecomponent.propTypes  = {
    fullname : PropTypes.string ,
    alertMe : PropTypes.func,
}

export default Profilecomponent
