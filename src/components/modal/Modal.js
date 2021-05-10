import React, { Fragment } from 'react'


const Modal = (props) => {

    const { children } = props

    return(
        <Fragment>
            <div className="mem-modal--backdrop"></div>
  
            <div className="mem-modal">
                <div className="mem-modal__content">
                    {children}
                </div>
            </div>
        </Fragment>
    )
}

export default Modal