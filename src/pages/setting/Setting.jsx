import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SettingStyles.jsx';
import HomeDeskHeader from '../../components/header/HomeDeskHeader.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import TermsPage from '../../components/setting/TermsPage.jsx';

const Setting = () => {
    const navigate = useNavigate();

    const goToTermsPage = () => {
        navigate('/termspage');
    };

    return (
        <S.Container>
            <HomeDeskHeader />
            <S.Content>
                <S.Section>
                    <S.SectionTitle>계정</S.SectionTitle>
                    <S.Box>
                        <S.ItemRow $nonHover>
                            <span>아이디</span>
                            <span style={{ color: '#aaa' }}>b6shift5</span>
                        </S.ItemRow>
                        <S.ItemRow>비밀번호 변경</S.ItemRow>
                    </S.Box>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>서비스</S.SectionTitle>
                    <S.Box>
                        <S.ItemRow onClick={goToTermsPage}>서비스 이용 약관</S.ItemRow>
                        <S.ItemRow>로그아웃</S.ItemRow>
                        <S.ItemRow>회원 탈퇴</S.ItemRow>
                    </S.Box>
                </S.Section>
            </S.Content>
            <Sidebar />
        </S.Container>
    );
};
export default Setting;
