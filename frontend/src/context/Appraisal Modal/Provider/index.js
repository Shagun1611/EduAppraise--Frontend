import React, { useState } from 'react';
import AppraisalModalContext from '../Context';

const AppraisalModalProvider = ({ children }) => {

    const [ modalData, setModalData ] = useState(null);

    return (
        <AppraisalModalContext.Provider value={{ modalData, setModalData }}>
            { children }
        </AppraisalModalContext.Provider>
    )
}

export default AppraisalModalProvider;
