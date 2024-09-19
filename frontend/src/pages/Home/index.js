import React, { useContext, useEffect } from 'react';
import styles from './Home.module.scss';
import { contains } from '../../utils/Local Storage';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/User/Context';
import SearchBar from '../../components/Search Bar';
import Card from '../../components/Card';
import data from '../../data/appraisals.json';
import Welcome from '../../components/shared/Welcome';
import Chart from '../../components/Rank Chart';
import SearchContext from '../../context/Search/Context';
import AppraisalsContext from '../../context/Appraisals/Context';

const Home = () => {

    const navigate = useNavigate();
    const { searchText, setSearchText } = useContext(SearchContext);
    const { userDetails, user } = useContext(UserContext);
    const { getAll } = useContext(AppraisalsContext);

    useEffect(() => {
        if(!contains("authToken"))
        {
            navigate("/login");
            return;
        }

        userDetails();
        getAll();

        // eslint-disable-next-line
    }, []);

    const count = () => {
        const ans = {
            pending: 0,
            approved: 0,
            rejected: 0
        };

        for(let i of data)
        {
            ans.pending += i.status === "Pending" ? 1 : 0;
            ans.approved += i.status === "Approved" ? 1 : 0;
            ans.rejected += i.status === "Rejected" ? 1 : 0;
        }

        return ans;
    };

    return (
        <>
            <SearchBar state={searchText} setState={setSearchText} />
            <Welcome />
            {
                user ? 
                    <section>
                        {
                            user.isAdmin ? 
                            <section className={styles.topBarCards}>
                                    <Card title='Pending' text={count().pending} />
                                    <Card title='Approved' text={count().approved} />
                                    <Card title='Rejected' text={count().rejected} />
                            </section>
                                :
                            <section className={styles.topBarCards}>
                                    <Card title='Rank' text={user.rank} />
                                    <Card title='Score' text={user.score} />
                                    <Card title='Pending Appraisals' text={user.pendingAppraisals} />
                            </section>
                        }
                        <section>
                            <Chart />
                        </section>
                    </section>
                :
                    <div>
                        Loading...
                    </div>
            }
        </>
    )
}

export default Home;
