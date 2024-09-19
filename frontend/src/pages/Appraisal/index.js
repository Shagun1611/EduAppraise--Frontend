import React, { useContext, useEffect } from 'react';
import SearchContext from '../../context/Search/Context';
import { dummy, toDateString } from '../../utils/Converters';
import SearchBar from '../../components/Search Bar';
import Welcome from '../../components/shared/Welcome';
import Table from '../../components/Table';
import styles from './Appraisal.module.scss';
import UserContext from '../../context/User/Context';
import AppraisalModal from '../../components/Appraisal Modal';
import AppraisalsContext from '../../context/Appraisals/Context';

const Appraisal = () => {

    const { searchText, setSearchText } = useContext(SearchContext);
    const { user } = useContext(UserContext);
    const { getAll, appraisals, getUserAppraisals } = useContext(AppraisalsContext);

    const adminKeys = ["name", "createdAt", "status"];
    const nonAdminKeys = ["createdAt", "status", "updatedAt"];

    useEffect(() => {
        getAll();

        // eslint-disable-next-line
    }, []);

    const tableData = {
        headers: [
            {
                text: "Faculty Name",
                sort: true,
                comparator: (a, b) => a.name.localeCompare(b.name)
            },
            {
                text: "Submission Date",
                sort: true,
                comparator: (a, b) => a.createdAt.localeCompare(b.createdAt)
            },
            {
                text: "Status",
                sort: true,
                comparator: (a, b) => a.status.localeCompare(b.status)
            },
            {
                text: "Last Updated",
                sort: true,
                comparator: (a, b) => a.updatedAt.localeCompare(b.updatedAt)
            }
        ],
        data: user.isAdmin ? appraisals : getUserAppraisals(user.name),
        keys: user.isAdmin ? adminKeys : nonAdminKeys,
        specialFunctions: user.isAdmin ? [ dummy, toDateString, dummy ] : [ toDateString, dummy, toDateString ],
        isSelectable: false
    };

    if(user.isAdmin)
        delete tableData.headers[3];
    else
        delete tableData.headers[0];

    return (
        <section>
            <SearchBar state={searchText} setState={setSearchText} />
            <Welcome />
            {/* <AppraisalModal /> */}
            <div className={styles.tableContainer}>
                <Table tableData={tableData} />
            </div>
        </section>
    );
}

export default Appraisal;
