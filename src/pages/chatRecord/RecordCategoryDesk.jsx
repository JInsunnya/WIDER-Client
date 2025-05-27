import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Rd from './RecordCategoryDeskStyles.jsx';
import HomeDeskHeader from '../../components/header/HomeDeskHeader';
import Sidebar from '../../components/sidebar/Sidebar';

const RecordCategoryDesk = () => {
    const navigate = useNavigate();

    const goToRecordDate = () => {
        navigate('/recorddate');
    };

    return (
        <Rd.Container>
            <HomeDeskHeader />
            <Rd.Category>
                <Rd.Content onClick={goToRecordDate}>
                    <Rd.CategoryName>사회</Rd.CategoryName>
                    <Rd.CategoryContent>
                        <Rd.CategoryDate>
                            2025
                            <br />
                            03/25
                        </Rd.CategoryDate>
                        <Rd.ContentTitle>공휴일 확대가 국가 경제에 도움이 될까?</Rd.ContentTitle>
                    </Rd.CategoryContent>
                    <Rd.CategoryContent>
                        <Rd.CategoryDate>
                            2025 <br />
                            03/23
                        </Rd.CategoryDate>
                        <Rd.ContentTitle>주 4일제 근무에 대해 어떻게 생각하세요?</Rd.ContentTitle>
                    </Rd.CategoryContent>
                </Rd.Content>
                <Rd.Content onClick={goToRecordDate}>
                    <Rd.CategoryName>과학</Rd.CategoryName>
                    <Rd.CategoryContent>
                        <Rd.CategoryDate>
                            2025
                            <br />
                            03/24
                        </Rd.CategoryDate>
                        <Rd.ContentTitle>AI는 정말로 사람의 일자리를 뺏을까?</Rd.ContentTitle>
                    </Rd.CategoryContent>
                    <Rd.CategoryContent>
                        <Rd.CategoryDate>
                            2025 <br />
                            03/22
                        </Rd.CategoryDate>
                        <Rd.ContentTitle>딥시크 사태는 글로벌 AI 산업에 어떤 영향을 미쳤을까?</Rd.ContentTitle>
                    </Rd.CategoryContent>
                </Rd.Content>
                <Rd.Content onClick={goToRecordDate}>
                    <Rd.CategoryName>정치</Rd.CategoryName>
                    <Rd.CategoryContent>
                        <Rd.CategoryDate>
                            2025
                            <br />
                            03/21
                        </Rd.CategoryDate>
                        <Rd.ContentTitle>청년 정치인의 참여 확대는 어떤 변화를 가져올 수 있을까?</Rd.ContentTitle>
                    </Rd.CategoryContent>
                    <Rd.CategoryContent>
                        <Rd.CategoryDate>
                            2025 <br />
                            03/18
                        </Rd.CategoryDate>
                        <Rd.ContentTitle>대통령 임기 단축 또는 연장, 어느 쪽이 더 바람직할까?</Rd.ContentTitle>
                    </Rd.CategoryContent>
                </Rd.Content>
                <Rd.Content onClick={goToRecordDate}>
                    <Rd.CategoryName>경제</Rd.CategoryName>
                    <Rd.CategoryContent>
                        <Rd.CategoryDate>
                            2025
                            <br />
                            03/20
                        </Rd.CategoryDate>
                        <Rd.ContentTitle>기본소득 제도는 경제 성장에 도움이 될까, 저해가 될까?</Rd.ContentTitle>
                    </Rd.CategoryContent>
                    <Rd.CategoryContent>
                        <Rd.CategoryDate>
                            2025 <br />
                            03/17
                        </Rd.CategoryDate>
                        <Rd.ContentTitle>플랫폼 노동(배달, 택시 등)은 지속 가능한 일자리일까?</Rd.ContentTitle>
                    </Rd.CategoryContent>
                </Rd.Content>
                <Rd.Content onClick={goToRecordDate}>
                    <Rd.CategoryName>세계</Rd.CategoryName>
                    <Rd.CategoryContent>
                        <Rd.CategoryDate>
                            2025
                            <br />
                            03/19
                        </Rd.CategoryDate>
                        <Rd.ContentTitle>세계화는 각국의 문화를 풍요롭게 할까, 파괴할까?</Rd.ContentTitle>
                    </Rd.CategoryContent>
                    <Rd.CategoryContent>
                        <Rd.CategoryDate>
                            2025 <br />
                            03/16
                        </Rd.CategoryDate>
                        <Rd.ContentTitle>난민 수용에 대한 국제 사회의 역할은 어디까지여야 할까?</Rd.ContentTitle>
                    </Rd.CategoryContent>
                </Rd.Content>
            </Rd.Category>
            <Sidebar />
        </Rd.Container>
    );
};
export default RecordCategoryDesk;
