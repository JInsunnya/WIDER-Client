import React from 'react';
import * as Pt from './PrivacyTermsStyles.jsx';
import TermsHeader from '../../components/header/TermsHeader';
import PrivacyTable from '../../assets/PrivacyTable.png';

const PrivacyTerms = () => {
    return (
        <Pt.Container>
            <TermsHeader />
            <Pt.Content>
                <Pt.Title>WIDER 개인정보 수집 및 이용 동의서</Pt.Title>
                <Pt.Text>
                    WIDER는 「개인정보 보호법」등 관련 법령에 따라 회원의 개인정보를 안전하게 보호하고, 적법하게
                    수집·이용하기 위해 아래와 같은 내용을 안내드립니다.
                </Pt.Text>
                <Pt.SubTitle>수집하는 개인정보 항목</Pt.SubTitle>
                <Pt.PrivacyTable>
                    <img src={PrivacyTable} />
                </Pt.PrivacyTable>
                <Pt.SubTitle>수집 방법</Pt.SubTitle>
                <Pt.ListItem>
                    <Pt.NumberMain>•</Pt.NumberMain>
                    <Pt.ListText>회원가입, 서비스 이용 중 생성</Pt.ListText>
                </Pt.ListItem>
                <Pt.ListItem>
                    <Pt.NumberMain>•</Pt.NumberMain>
                    <Pt.ListText>웹/앱 이용 시 자동 수집 (쿠키, 로그 등)</Pt.ListText>
                </Pt.ListItem>
                <Pt.SubTitle>이용 목적</Pt.SubTitle>
                <Pt.ListItem>
                    <Pt.NumberMain>•</Pt.NumberMain>
                    <Pt.ListText>회원 관리: 가입 확인, 로그인 및 로그아웃 처리, 탈퇴 요청 대응</Pt.ListText>
                </Pt.ListItem>
                <Pt.ListItem>
                    <Pt.NumberMain>•</Pt.NumberMain>
                    <Pt.ListText>AI 서비스 제공: 사고 유도 질문, 반론, 피드백 기능 제공</Pt.ListText>
                </Pt.ListItem>
                <Pt.ListItem>
                    <Pt.NumberMain>•</Pt.NumberMain>
                    <Pt.ListText>사고 흐름 저장 및 분석: 사용자의 생각 변화 시각화 및 아카이빙</Pt.ListText>
                </Pt.ListItem>
                <Pt.ListItem>
                    <Pt.NumberMain>•</Pt.NumberMain>
                    <Pt.ListText>서비스 개선: 기능 고도화 및 사용자 경험 향상</Pt.ListText>
                </Pt.ListItem>
                <Pt.SubTitle>보유 및 이용 기간</Pt.SubTitle>
                <Pt.ListItem>
                    <Pt.NumberMain>•</Pt.NumberMain>
                    <Pt.ListText>회원 탈퇴 시까지 보관 후 지체 없이 파기</Pt.ListText>
                </Pt.ListItem>
                <Pt.ListItem>
                    <Pt.NumberSub>※</Pt.NumberSub>
                    <Pt.ListText>단, 관련 법령에 따라 일정 기간 보관이 . 필요한 정보는 예외적으로 보관함 </Pt.ListText>
                </Pt.ListItem>
                <Pt.SubTitle>동의 거부 권리 및 불이익</Pt.SubTitle>
                <Pt.ListItem>
                    <Pt.NumberMain>•</Pt.NumberMain>
                    <Pt.ListText>회원은 개인정보 수집 및 이용에 동의하지 않을 수 있습니다.</Pt.ListText>
                </Pt.ListItem>
                <Pt.ListItem>
                    <Pt.NumberMain>•</Pt.NumberMain>
                    <Pt.ListText>단, 필수 항목에 대한 동의를 거부할 경우 서비스 이용이 제한될 수 있습니다.</Pt.ListText>
                </Pt.ListItem>
                <Pt.SubTitle>
                    위 내용을 충분히 이해하였으며, WIDER의 개인정보 수집 및 이용에 동의합니다. 동의 버튼 클릭 시 위
                    내용에 동의한 것으로 간주됩니다.
                </Pt.SubTitle>
            </Pt.Content>
        </Pt.Container>
    );
};
export default PrivacyTerms;
