import React from 'react';
import * as Dh from './HomeDeskHeaderStyles.jsx';
import Logo from '../../assets/LogoIcon.png';

const HomeDeskHeader = () => {
    return (
        <Dh.Container>
            <Dh.Logo>
                <img src={Logo} />
            </Dh.Logo>
            <Dh.Body>
                <Dh.Title>WIDER</Dh.Title>
                <Dh.Text>내 생각을 키워주는 AI 파트너</Dh.Text>
            </Dh.Body>
        </Dh.Container>
    );
};
export default HomeDeskHeader;
