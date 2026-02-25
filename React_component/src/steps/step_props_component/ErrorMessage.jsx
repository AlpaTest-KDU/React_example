function ErrorMessage({ onRetry }) {
    return (
        <div>
            <p  style={{color:"red"}}>로그인 실패</p>
            <button onClick={{onRetry}}>다시 시도</button>
        </div>
    );
}

export default ErrorMessage;