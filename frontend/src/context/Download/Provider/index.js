import React, { useState } from 'react';
import DownloadContext from '../Context';

const DownloadProvider = ({ children }) => {

    const [selectedData, setSelectedData] = useState([]);

    return (
        <DownloadContext.Provider value={{ selectedData, setSelectedData }}>
            { children }
        </DownloadContext.Provider>
    )
}

export default DownloadProvider;
