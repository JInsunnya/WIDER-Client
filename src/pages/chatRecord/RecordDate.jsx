import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRecordListApi } from '../../api/chatRecord/RecordApi';
import * as Rd from './RecordDateStyles.jsx';
import Header from '../../components/header/SettingsHeader';
import Footer from '../../components/footer/Footer';

const RecordDate = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.token);
    const [recordList, setRecordList] = useState([]);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const res = await getRecordListApi(token);
                console.log('기록 목록 API 응답:', res);
                setRecordList(res.records || res);
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
        <Rd.Container>
            <Header />
            <Rd.Content>
                {recordList.length === 0 ? (
                    <Rd.EmptyMessage>기록된 내용이 없습니다.</Rd.EmptyMessage>
                ) : (
                    recordList.map((record) => (
                        <Rd.CategoryContent
                            key={record.session_id}
                            onClick={() => navigate(`/chat`, { state: { sessionId: record.session_id } })}
                        >
                            <Rd.CategoryDate>{formatDate(record.started_at)}</Rd.CategoryDate>
                            <Rd.ContentTitle>{record.topic}</Rd.ContentTitle>
                            <Rd.BloomLevel>Level {record.bloom_level}</Rd.BloomLevel>
                        </Rd.CategoryContent>
                    ))
                )}
            </Rd.Content>
            <Footer />
        </Rd.Container>
    );
};
export default RecordDate;
