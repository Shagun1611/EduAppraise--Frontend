import React, { useState } from 'react';
import SearchContext from '../Context';

const SearchProvider = ({ children }) => {

    const [ searchText, setSearchText ] = useState("");

    return (
        <SearchContext.Provider value={{ searchText, setSearchText }}>
            { children }
        </SearchContext.Provider>
    )
}

export default SearchProvider;
