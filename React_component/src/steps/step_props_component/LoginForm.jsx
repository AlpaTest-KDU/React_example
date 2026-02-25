function LoginForm({onLogin}) {
    return (
        <div>
            <h2>로그인 화면</h2>
            <button onClick={onLogin}>로그인</button>
        </div>
    );
}

export default LoginForm;