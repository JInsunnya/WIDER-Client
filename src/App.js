import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import GlobalStyle from './common/GlobalStyles';
import Landing from './pages/intro/Landing';
import Onboarding from './pages/intro/Onboarding';
import TermsAgreement from './pages/signup/TermsAgreement';
import ServiceTerms from './pages/signup/ServiceTerms';
import PrivacyTerms from './pages/signup/PrivacyTerms';
import SignUp from './pages/signup/SignUp';

function App() {
    return (
        <BrowserRouter>
            {/* <GlobalStyle /> */}
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/termsagreement" element={<TermsAgreement />} />
                <Route path="/serviceterms" element={<ServiceTerms />} />
                <Route path="/privacyterms" element={<PrivacyTerms />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
