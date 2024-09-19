import React, { useState } from 'react';
import AppraisalsContext from '../Context';

const AppraisalsProvider = ({ children }) => {

    const [ appraisals, setAppraisals ] = useState([]);

    const getAll = async () => {
        const response = await fetch("https://eduappraise-backend.onrender.com/api/appraisal/get");
        const json = await response.json();
        setAppraisals(json);
    };

    const getUserAppraisals = (name) => {
        return appraisals.filter((val) => val.name === name);
    }

    return (
        <AppraisalsContext.Provider value={{ appraisals, getAll, getUserAppraisals }}>
            { children }
        </AppraisalsContext.Provider>
    )
}

export default AppraisalsProvider;
