import React from 'react';
import * as St from './ServiceTermsStyles.jsx';
import TermsHeader from '../../components/header/TermsHeader';

const ServiceTerms = () => {
    return (
        <St.Container>
            <TermsHeader />
            <St.Content>
                <St.Title>WIDER 서비스 이용 약관</St.Title>
                <St.Text>
                    본 약관은 WIDER(이하 “회사”)의 이용과 관련하여 회원과 운영자 간의 관리, 의무 및 책임사항 등을
                    규정함을 목적으로 합니다.
                </St.Text>
                <St.SubTitle>제1조 (목적)</St.SubTitle>
                <St.Text>
                    이 약관은 WIDER가 제공하는 인공지능 기반 사고 확장 플랫폼의 서비스 이용 조건, 절차, 이용자와 서비스
                    제공자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                </St.Text>
                <St.SubTitle>제2조 (정의)</St.SubTitle>
                <St.ListItem>
                    <St.NumberMain>1.</St.NumberMain>
                    <St.ListText>
                        “서비스”란 WIDER가 제공하는 사고 유도형 AI 대화, 기록 아카이빙, 에세이 작성 및 공유 기능 등
                        일체의 서비스를 의미합니다.
                    </St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>2.</St.NumberMain>
                    <St.ListText>
                        “회원”이란 본 약관에 동의하고, 서비스에 가입하여 ID와 비밀번호를 통해 지속적으로 서비스를 이용할
                        수 있는 자를 말합니다.
                    </St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>3.</St.NumberMain>
                    <St.ListText>
                        “콘텐츠”란 회원이 서비스 내에서 생성하거나 저장한 텍스트, 음성, 에세이 등의 모든 데이터를
                        의미합니다.
                    </St.ListText>
                </St.ListItem>
                <St.SubTitle>제3조 (약관의 효력 및 변경)</St.SubTitle>
                <St.ListItem>
                    <St.NumberMain>1.</St.NumberMain>
                    <St.ListText>
                        본 약관은 회원이 동의함으로써 효력을 발생하며, 서비스 초기화면 또는 설정을 통해 상시 열람할 수
                        있습니다.
                    </St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>2.</St.NumberMain>
                    <St.ListText>
                        운영자는 관련 법령 또는 서비스 개선 필요 시 약관을 변경할 수 있으며, 변경 시 사전 공지합니다.
                    </St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>3.</St.NumberMain>
                    <St.ListText>
                        변경된 약관에 동의하지 않을 경우 회원은 서비스 이용을 중단하고 탈퇴할 수 있으며, 별도의 이의
                        제기 없이 이용을 계속하는 경우 변경 약관에 동의한 것으로 간주됩니다.
                    </St.ListText>
                </St.ListItem>
                <St.SubTitle>제4조 (회원가입 및 계정 관리)</St.SubTitle>
                <St.ListItem>
                    <St.NumberMain>1.</St.NumberMain>
                    <St.ListText>
                        회원가입은 아이디, 비밀번호 등의 정보를 입력하고 약관에 동의함으로써 성립됩니다.
                    </St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>2.</St.NumberMain>
                    <St.ListText>
                        회원은 본인의 계정 정보를 안전하게 관리해야 하며, 타인에게 공유하거나 양도할 수 없습니다.
                    </St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>3.</St.NumberMain>
                    <St.ListText>회원은 언제든지 서비스 내 설정을 통해 회원 탈퇴를 요청할 수 있습니다.</St.ListText>
                </St.ListItem>
                <St.SubTitle>제5조 (서비스 내용)</St.SubTitle>
                <St.ListItem>
                    <St.NumberMain>1.</St.NumberMain>
                    <St.ListText>WIDER는 다음과 같은 기능을 제공합니다.</St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberSub>a.</St.NumberSub>
                    <St.ListText>AI 기반 사고 유도형 질문 제공 및 대화</St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberSub>b.</St.NumberSub>
                    <St.ListText>대화 기록 저장 및 아카이빙</St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>2.</St.NumberMain>
                    <St.ListText>
                        서비스의 일부 기능은 개발 단계에서 변경되거나 제한적으로 제공될 수 있습니다.
                    </St.ListText>
                </St.ListItem>
                <St.SubTitle>제6조 (AI 서비스 한계 고지)</St.SubTitle>
                <St.ListItem>
                    <St.NumberMain>1.</St.NumberMain>
                    <St.ListText>
                        WIDER의 AI는 정보를 참고하여 사고를 유도하고 반론을 제시하는 도우미 역할을 하며, 제시된 내용은
                        법적·정확한 사실로 간주되지 않습니다.
                    </St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>2.</St.NumberMain>
                    <St.ListText>
                        회원은 AI가 제공하는 정보에 대한 비판적 사고를 유지해야 하며, 정보의 최종 판단은 사용자 본인의
                        책임입니다.
                    </St.ListText>
                </St.ListItem>
                <St.SubTitle>제7조 (콘텐츠의 소유 및 이용권)</St.SubTitle>
                <St.ListItem>
                    <St.NumberMain>1.</St.NumberMain>
                    <St.ListText>
                        회원이 서비스 내에 작성한 모든 콘텐츠의 저작권은 회원에게 있으며, WIDER는 이를 저장, 분석,
                        서비스 개선 목적으로 활용할 수 있습니다.
                    </St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>2.</St.NumberMain>
                    <St.ListText>회원은 본인의 콘텐츠를 삭제할 수 있습니다.</St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>3.</St.NumberMain>
                    <St.ListText>
                        운영자는 공공질서, 타인에 대한 명예훼손, 차별적 언행, 불법 정보 등 부적절한 콘텐츠에 대해 사전
                        통지 없이 삭제 또는 제한 조치를 취할 수 있습니다.
                    </St.ListText>
                </St.ListItem>
                <St.SubTitle>제8조 (개인정보 보호)</St.SubTitle>
                <St.ListItem>
                    <St.NumberMain>1.</St.NumberMain>
                    <St.ListText>
                        WIDER는 서비스 제공을 위한 최소한의 정보만 수집하며, 관련 법령에 따라 안전하게 관리합니다.
                    </St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>2.</St.NumberMain>
                    <St.ListText>
                        수집된 개인정보는 서비스 제공 목적 외에는 사용되지 않으며, 이용자의 동의 없이 제3자에게 제공되지
                        않습니다.
                    </St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>3.</St.NumberMain>
                    <St.ListText>
                        개인정보의 수집, 이용, 보관에 관한 자세한 사항은 [개인정보처리방침]에 따릅니다.
                    </St.ListText>
                </St.ListItem>
                <St.SubTitle>제9조 (서비스 이용 제한 및 해지)</St.SubTitle>
                <St.ListItem>
                    <St.NumberMain>1.</St.NumberMain>
                    <St.ListText>
                        회원은 다음 각 호에 해당하는 경우, 서비스 이용이 제한되거나 회원 자격이 박탈될 수 있습니다.
                    </St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberSub>a.</St.NumberSub>
                    <St.ListText>타인의 정보를 도용하거나 사칭한 경우</St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberSub>b.</St.NumberSub>
                    <St.ListText>서비스 기능을 악용하여 타인에게 피해를 준 경우</St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberSub>c.</St.NumberSub>
                    <St.ListText>서비스 운영을 방해하거나 시스템에 악영향을 준 경우</St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>2.</St.NumberMain>
                    <St.ListText>
                        위반 사항이 경미한 경우 운영자는 경고 또는 일시 중지를 통해 자율적 개선을 유도할 수 있습니다.
                    </St.ListText>
                </St.ListItem>
                <St.SubTitle>제10조 (면책조항)</St.SubTitle>
                <St.ListItem>
                    <St.NumberMain>1.</St.NumberMain>
                    <St.ListText>
                        WIDER는 천재지변, 불가항력, 시스템 장애 등으로 인해 서비스 제공이 중단된 경우 책임을 지지
                        않습니다.
                    </St.ListText>
                </St.ListItem>
                <St.ListItem>
                    <St.NumberMain>2.</St.NumberMain>
                    <St.ListText>
                        AI가 제공하는 콘텐츠로 인해 발생한 판단 또는 행동에 대해 WIDER는 법적 책임을 지지 않습니다.
                    </St.ListText>
                </St.ListItem>
                <St.SubTitle>제11조 (분쟁 해결)</St.SubTitle>
                <St.ListItem>
                    <St.NumberMain>1.</St.NumberMain>
                    <St.ListText>
                        본 약관은 대한민국 법률에 따라 해석되며, 서비스와 관련한 분쟁은 운영자 소재지 관할 법원에서
                        해결합니다.
                    </St.ListText>
                </St.ListItem>
                <St.SubTitle>시행일자: 2025년 0월 0일</St.SubTitle>
            </St.Content>
        </St.Container>
    );
};
export default ServiceTerms;
