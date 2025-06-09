import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as L from './LoginStyles.jsx';
import AuthHeader from '../../components/header/AuthHeader';
import { login } from '../../store/userSlice';

const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);

    const [form, setForm] = useState({ userId: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async () => {
        const resultAction = await dispatch(login(form));
        if (login.fulfilled.match(resultAction)) {
            navigate('/home');
        } else {
            alert(resultAction.payload?.message || '로그인 실패');
        }
    };

    return (
        <L.Container>
            <AuthHeader />
            <L.Content>
                <L.Text>아이디</L.Text>
                <L.Input
                    type="text"
                    name="userId"
                    placeholder="hellowider25"
                    value={form.userId}
                    onChange={handleChange}
                />
                <L.Text>비밀번호</L.Text>
                <L.Input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요"
                    value={form.password}
                    onChange={handleChange}
                />
                <L.StartButton onClick={handleLogin} disabled={loading}>
                    {loading ? '로그인 중...' : 'WIDER 시작하기'}
                </L.StartButton>
            </L.Content>
        </L.Container>
    );
};
export default Login;
