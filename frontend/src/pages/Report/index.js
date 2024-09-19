import React, { useContext, useEffect } from 'react';
import SearchBar from '../../components/Search Bar';
import Welcome from '../../components/shared/Welcome';
import UserContext from '../../context/User/Context';
import Table from '../../components/Table';
import SearchContext from '../../context/Search/Context';
import styles from './Report.module.scss';
import Button from '../../components/atoms/Button';
import { PDFDownloadLink } from '@react-pdf/renderer';
import TablePDF from '../../components/Table PDF';
import DownloadContext from '../../context/Download/Context';
import { dummy, toDateString } from '../../utils/Converters';
import AppraisalsContext from '../../context/Appraisals/Context';

const Report = () => {

    const { user, userDetails } = useContext(UserContext);
    const { searchText, setSearchText } = useContext(SearchContext);
    const { selectedData } = useContext(DownloadContext);
    const { appraisals, getAll } = useContext(AppraisalsContext);
    const adminHeadings = ["Faculty Name", "Rank", "Score"];
    const adminKeys = ["name", "rank", "appraisalScore"];
    const nonAdminHeadings = ["Faculty Name", "Submission Date", "Status"];
    const nonAdminKeys = ["name", "createdAt", "status"];
    const adminSpecialFunctions = [ dummy, dummy, dummy ];
    const nonAdminSpecialFunctions = [ dummy, toDateString, dummy ];

    useEffect(() => {
        userDetails();
        getAll();
        // eslint-disable-next-line
    }, []);

    const tableData = {
        headers: [
            {
                text: "⁂",
                sort: false
            },
            {
                text: "Name",
                sort: true,
                comparator: (a, b) => a.name.localeCompare(b.name)
            },
            {
                text: "Faculty Name",
                sort: true,
                comparator: (a, b) => a.facultyName.localeCompare(b.facultyName)
            },
            {
                text: "Rank",
                sort: true,
                comparator: (a, b) => a.rank.toString().localeCompare(b.rank)
            },
            {
                text: "Submission Date",
                sort: true,
                comparator: (a, b) => a.createdAt.localeCompare(b.createdAt)
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
        data: appraisals,
        keys: nonAdminKeys,
        specialFunctions: [ dummy, toDateString, dummy ],
        isSelectable: true
    };

    if(user.isAdmin)
    {
        delete tableData.headers[2];
        delete tableData.headers[4];
        delete tableData.headers[6];
    }
    else
    {
        delete tableData.headers[1];
        delete tableData.headers[3];
        delete tableData.headers[5];
    }

    return (
        <>
            <SearchBar state={searchText} setState={setSearchText} />
            <Welcome />
            <div className={styles.tableContainer}>
                <Table tableData={tableData} />
            </div>
            <div className={styles.btns}>
                <PDFDownloadLink document={<TablePDF data={selectedData} keys={user.isAdmin ? adminKeys : nonAdminKeys} headings={user.isAdmin ? adminHeadings : nonAdminHeadings} specialFunctions={user.isAdmin ? adminSpecialFunctions : nonAdminSpecialFunctions} />} fileName="a.pdf">
                    {({ blob, url, loading, error }) =>
                        <Button propStyles={{ backgroundColor: "#90E8E9", color: "#0C4443", width: "200px"}} text={loading ? "Loading Document..." : "Download Selected"}/>
                    }
                </PDFDownloadLink>
                <PDFDownloadLink document={<TablePDF data={tableData.data} keys={user.isAdmin ? adminKeys : nonAdminKeys} headings={user.isAdmin ? adminHeadings : nonAdminHeadings} specialFunctions={user.isAdmin ? adminSpecialFunctions : nonAdminSpecialFunctions} />} fileName="a.pdf">
                    {({ blob, url, loading, error }) =>
                        <Button propStyles={{ backgroundColor: "#90E8E9", color: "#0C4443", width: "200px"}} text={loading ? "Loading Document..." : "Download All"}/>
                    }
                </PDFDownloadLink>
            </div>
        </>
    )
}

export default Report;
