import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Rc from './RecordCategoryStyles.jsx';
import Header from '../../components/header/SettingsHeader';
import Footer from '../../components/footer/Footer';

const RecordCategory = () => {
    const navigate = useNavigate();

    const goToRecordDate = () => {
        navigate('/recorddate');
    };

    return (
        <Rc.Container>
            <Header />
            <Rc.Category>
                <Rc.Content onClick={goToRecordDate}>
                    <Rc.CategoryName>사회</Rc.CategoryName>
                    <Rc.CategoryContent>
                        <Rc.CategoryDate>
                            2025
                            <br />
                            03/25
                        </Rc.CategoryDate>
                        <Rc.ContentTitle>공휴일 확대가 국가 경제에 도움이 될까?</Rc.ContentTitle>
                    </Rc.CategoryContent>
                    <Rc.CategoryContent>
                        <Rc.CategoryDate>
                            2025 <br />
                            03/23
                        </Rc.CategoryDate>
                        <Rc.ContentTitle>주 4일제 근무에 대해 어떻게 생각하세요?</Rc.ContentTitle>
                    </Rc.CategoryContent>
                </Rc.Content>
                <Rc.Content onClick={goToRecordDate}>
                    <Rc.CategoryName>과학</Rc.CategoryName>
                    <Rc.CategoryContent>
                        <Rc.CategoryDate>
                            2025
                            <br />
                            03/24
                        </Rc.CategoryDate>
                        <Rc.ContentTitle>AI는 정말로 사람의 일자리를 뺏을까?</Rc.ContentTitle>
                    </Rc.CategoryContent>
                    <Rc.CategoryContent>
                        <Rc.CategoryDate>
                            2025 <br />
                            03/22
                        </Rc.CategoryDate>
                        <Rc.ContentTitle>딥시크 사태는 글로벌 AI 산업에 어떤 영향을 미쳤을까?</Rc.ContentTitle>
                    </Rc.CategoryContent>
                </Rc.Content>
                <Rc.Content onClick={goToRecordDate}>
                    <Rc.CategoryName>정치</Rc.CategoryName>
                    <Rc.CategoryContent>
                        <Rc.CategoryDate>
                            2025
                            <br />
                            03/21
                        </Rc.CategoryDate>
                        <Rc.ContentTitle>청년 정치인의 참여 확대는 어떤 변화를 가져올 수 있을까?</Rc.ContentTitle>
                    </Rc.CategoryContent>
                    <Rc.CategoryContent>
                        <Rc.CategoryDate>
                            2025 <br />
                            03/18
                        </Rc.CategoryDate>
                        <Rc.ContentTitle>대통령 임기 단축 또는 연장, 어느 쪽이 더 바람직할까?</Rc.ContentTitle>
                    </Rc.CategoryContent>
                </Rc.Content>
                <Rc.Content onClick={goToRecordDate}>
                    <Rc.CategoryName>경제</Rc.CategoryName>
                    <Rc.CategoryContent>
                        <Rc.CategoryDate>
                            2025
                            <br />
                            03/20
                        </Rc.CategoryDate>
                        <Rc.ContentTitle>기본소득 제도는 경제 성장에 도움이 될까, 저해가 될까?</Rc.ContentTitle>
                    </Rc.CategoryContent>
                    <Rc.CategoryContent>
                        <Rc.CategoryDate>
                            2025 <br />
                            03/17
                        </Rc.CategoryDate>
                        <Rc.ContentTitle>플랫폼 노동(배달, 택시 등)은 지속 가능한 일자리일까?</Rc.ContentTitle>
                    </Rc.CategoryContent>
                </Rc.Content>
                <Rc.Content onClick={goToRecordDate}>
                    <Rc.CategoryName>세계</Rc.CategoryName>
                    <Rc.CategoryContent>
                        <Rc.CategoryDate>
                            2025
                            <br />
                            03/19
                        </Rc.CategoryDate>
                        <Rc.ContentTitle>세계화는 각국의 문화를 풍요롭게 할까, 파괴할까?</Rc.ContentTitle>
                    </Rc.CategoryContent>
                    <Rc.CategoryContent>
                        <Rc.CategoryDate>
                            2025 <br />
                            03/16
                        </Rc.CategoryDate>
                        <Rc.ContentTitle>난민 수용에 대한 국제 사회의 역할은 어디까지여야 할까?</Rc.ContentTitle>
                    </Rc.CategoryContent>
                </Rc.Content>
            </Rc.Category>
            <Footer />
        </Rc.Container>
    );
};
export default RecordCategory;
