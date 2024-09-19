import React, { useContext, useEffect, useState } from 'react';
import styles from './Table.module.scss';
import SearchContext from '../../context/Search/Context';
import DownloadContext from '../../context/Download/Context';
import AppraisalModalContext from '../../context/Appraisal Modal/Context';

const Table = ({ tableData }) => {

    const [ curData, setCurData ] = useState(tableData);
    const [ isAscending, setIsAscending ] = useState([]);
    const { searchText } = useContext(SearchContext);
    const { selectedData, setSelectedData } = useContext(DownloadContext);
    const { setModalData } = useContext(AppraisalModalContext);

    useEffect(() => {
        if(searchText === "")
        {
            setCurData(prev => tableData);
            return;
        }
        // Filter the dataset based on the search text
        setCurData(prev => {
            const newData = { ...tableData };
            console.log(prev);
            newData.data = newData.data.filter((val) => val[prev.keys[0]].toLowerCase().includes(searchText.toLowerCase()));
            setCurData(newData);
        });
        // eslint-disable-next-line
    }, [ searchText ]);

    const sort = (i, comparator) => {
        const newData = {...curData};
        if(isAscending[i] === 1)
            newData.data = newData.data.toSorted(comparator);
        else
            newData.data = newData.data.toSorted((a, b) => comparator(b, a));
        const temp = [...isAscending];
        temp[i] ^= true;
        setIsAscending(temp);
        setCurData(newData);
    }

    const select = (element) => {
        let newData = [ ...selectedData ];
        if(newData.includes(element))
            newData = newData.filter((val) => val !== element);
        else
            newData.push(element);
        setSelectedData(newData);
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {
                        // curData can be null if search based filtering happens since useEffect and useState will in rendered in different order, to avoid having undefined    issues, use the null check
                        curData && curData.headers.map((x, ind) => <th key={ind} onClick={() => x.sort ? sort(ind, x.comparator) : () => {}}>{x.text}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    curData && curData.data.map((x, ind) => {
                        return (
                            <tr key={ind}>
                                { curData.isSelectable && <td className={`${styles.selector} ${selectedData.includes(x) && styles.selected}`} onClick={() => select(x)}><span></span></td> }
                                {
                                    curData.keys.map((val, ind) => {
                                        return (
                                            <td key={ind} className={`${selectedData.includes(x) && styles.selected}`}>{curData.specialFunctions[ind](x[curData.keys[ind]])}</td>
                                        );
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;
