import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as R from './RecordDateDeskStyles.jsx';
import HomeDeskHeader from '../../components/header/HomeDeskHeader';
import Sidebar from '../../components/sidebar/Sidebar';

const RecordDate = () => {
    const navigate = useNavigate();

    return (
        <R.Container>
            <HomeDeskHeader />
            <R.Content>
                <R.CategoryContent>
                    <R.CategoryDate>
                        2025
                        <br />
                        03/25
                    </R.CategoryDate>
                    <R.ContentTitle>공휴일 확대가 국가 경제에 도움이 될까?</R.ContentTitle>
                </R.CategoryContent>
                <R.CategoryContent>
                    <R.CategoryDate>
                        2025 <br />
                        03/24
                    </R.CategoryDate>
                    <R.ContentTitle>주 4일제 근무에 대해 어떻게 생각하세요?</R.ContentTitle>
                </R.CategoryContent>
                <R.CategoryContent>
                    <R.CategoryDate>
                        2025 <br />
                        03/23
                    </R.CategoryDate>
                    <R.ContentTitle>AI는 정말로 사람의 일자리를 뺏을까?</R.ContentTitle>
                </R.CategoryContent>
                <R.CategoryContent>
                    <R.CategoryDate>
                        2025 <br />
                        03/22
                    </R.CategoryDate>
                    <R.ContentTitle>딥시크 사태는 글로벌 AI 산업에 어떤 영향을 미쳤을까?</R.ContentTitle>
                </R.CategoryContent>
                <R.CategoryContent>
                    <R.CategoryDate>
                        2025 <br />
                        03/21
                    </R.CategoryDate>
                    <R.ContentTitle>인공지능의 발전이 교육 방식에 어떤 변화를 가져올까?</R.ContentTitle>
                </R.CategoryContent>
                <R.CategoryContent>
                    <R.CategoryDate>
                        2025 <br />
                        03/20
                    </R.CategoryDate>
                    <R.ContentTitle>디지털 기술이 인간관계에 미치는 영향은 긍정적일까?</R.ContentTitle>
                </R.CategoryContent>
                <R.CategoryContent>
                    <R.CategoryDate>
                        2025 <br />
                        03/19
                    </R.CategoryDate>
                    <R.ContentTitle>청년층의 정치 참여를 높이기 위한 방안은 무엇일까?</R.ContentTitle>
                </R.CategoryContent>
            </R.Content>
            <Sidebar />
        </R.Container>
    );
};
export default RecordDate;
