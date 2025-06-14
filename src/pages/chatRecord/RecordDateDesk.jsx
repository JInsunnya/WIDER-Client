import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRecordListApi } from '../../api/chatRecord/RecordApi';
import * as R from './RecordDateDeskStyles.jsx';
import HomeDeskHeader from '../../components/header/HomeDeskHeader';
import Sidebar from '../../components/sidebar/Sidebar';

const RecordDateDesk = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.token);
    const [recordList, setRecordList] = useState([]);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const res = await getRecordListApi(token);
                setRecordList(res);
            } catch (err) {
                console.error('기록 목록 불러오기 실패:', err);
            }
        };
        fetchRecords();
    }, [token]);

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        return `${yyyy}\n${mm}/${dd}`;
    };

    return (
        <R.Container>
            <HomeDeskHeader />
            <R.Content>
                {recordList.length === 0 ? (
                    <R.EmptyMessage>기록된 내용이 없습니다.</R.EmptyMessage>
                ) : (
                    recordList.map((record) => (
                        <R.CategoryContent
                            key={record.session_id}
                            onClick={() => navigate(`/report`, { state: { sessionId: record.session_id } })}
                        >
                            <R.CategoryDate>{formatDate(record.started_at)}</R.CategoryDate>
                            <R.ContentTitle>{record.topic}</R.ContentTitle>
                            <R.BloomLevel>Level {record.bloom_level}</R.BloomLevel>
                        </R.CategoryContent>
                    ))
                )}
            </R.Content>
            <Sidebar />
        </R.Container>
    );
};
export default RecordDateDesk;
