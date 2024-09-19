import React, { useContext } from 'react';
import SearchBar from '../../components/Search Bar';
import Welcome from '../../components/shared/Welcome';
import Table from '../../components/Table';
import facultyData from '../../data/faculty.json';
import { dummy } from '../../utils/Converters';
import SearchContext from '../../context/Search/Context';
import styles from './Faculty.module.scss';

const Faculty = () => {

    const { searchText, setSearchText } = useContext(SearchContext);

    const keys = ["name", "rank", "appraisalScore", "status"];

    const tableData = {
        headers: [
            {
                text: "Name",
                sort: true,
                comparator: (a, b) => a.name.localeCompare(b.name)
            },
            {
                text: "Rank",
                sort: true,
                comparator: (a, b) => a.rank.toString().localeCompare(b.rank)
            },
            {
                text: "Score",
                sort: true,
                comparator: (a, b) => a.appraisalScore.toString().localeCompare(b.appraisalScore)
            },
            {
                text: "Status",
                sort: true,
                comparator: (a, b) => a.status.localeCompare(b.status)
            }
        ],
        data: facultyData,
        keys: keys,
        specialFunctions: [ dummy, dummy, dummy, dummy ],
        isSelectable: false
    };

    return (
        <section>
            <SearchBar state={searchText} setState={setSearchText} />
            <Welcome />
            <div className={styles.tableContainer}>
                <Table tableData={tableData} />
            </div>
        </section>
    )
}

export default Faculty;
