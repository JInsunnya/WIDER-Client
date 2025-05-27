import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalStyle from './common/GlobalStyles';
import Landing from './pages/intro/Landing';
import Onboarding from './pages/intro/Onboarding';
import TermsAgreement from './pages/signup/TermsAgreement';
import ServiceTerms from './pages/signup/ServiceTerms';
import PrivacyTerms from './pages/signup/PrivacyTerms';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import Home from './pages/home/HomePage';
import Chat from './pages/chat/ChatPage';
import Report from './pages/report/ReportPage';
import RecordCategory from './pages/chatRecord/RecordCategoryPage';
import RecordDate from './pages/chatRecord/RecordDatePage';
import Insight from './pages/insight/InsightPage';
import InsightChart from './pages/insight/InsightChartPage';
import Notification from './pages/notification/Notification';
import TermsPage from './components/setting/TermsPage';
import Setting from './pages/setting/SettingPage';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/termsagreement" element={<TermsAgreement />} />
                <Route path="/serviceterms" element={<ServiceTerms />} />
                <Route path="/privacyterms" element={<PrivacyTerms />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/report" element={<Report />} />
                <Route path="/recordcategory" element={<RecordCategory />} />
                <Route path="/recorddate" element={<RecordDate />} />
                <Route path="/insight" element={<Insight />} />
                <Route path="/insightchart" element={<InsightChart />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/termspage" element={<TermsPage />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/settingpage" element={<Setting />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
