import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Rd from './RecordDateStyles.jsx';
import Header from '../../components/header/SettingsHeader';
import Footer from '../../components/footer/Footer';

const RecordDate = () => {
    const navigate = useNavigate();

    return (
        <Rd.Container>
            <Header />
            <Rd.Content>
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
                        03/24
                    </Rd.CategoryDate>
                    <Rd.ContentTitle>주 4일제 근무에 대해 어떻게 생각하세요?</Rd.ContentTitle>
                </Rd.CategoryContent>
                <Rd.CategoryContent>
                    <Rd.CategoryDate>
                        2025 <br />
                        03/23
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
                <Rd.CategoryContent>
                    <Rd.CategoryDate>
                        2025 <br />
                        03/21
                    </Rd.CategoryDate>
                    <Rd.ContentTitle>인공지능의 발전이 교육 방식에 어떤 변화를 가져올까?</Rd.ContentTitle>
                </Rd.CategoryContent>
                <Rd.CategoryContent>
                    <Rd.CategoryDate>
                        2025 <br />
                        03/20
                    </Rd.CategoryDate>
                    <Rd.ContentTitle>디지털 기술이 인간관계에 미치는 영향은 긍정적일까?</Rd.ContentTitle>
                </Rd.CategoryContent>
                <Rd.CategoryContent>
                    <Rd.CategoryDate>
                        2025 <br />
                        03/19
                    </Rd.CategoryDate>
                    <Rd.ContentTitle>청년층의 정치 참여를 높이기 위한 방안은 무엇일까?</Rd.ContentTitle>
                </Rd.CategoryContent>
            </Rd.Content>
            <Footer />
        </Rd.Container>
    );
};
export default RecordDate;
