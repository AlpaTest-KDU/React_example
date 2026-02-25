import { useState } from "react";

function LoginExample() {
    // 상태 설계
    const [stauts, setStatus] = useState("idle");
    // idle | loading | success | error

    // 가짜 로그인 API
    const fakeLoginApi = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.5;
                if (isSuccess) resolve();
                else reject();
            }, 1500);
        });
    };

    const handleLogin = async () => {
        setStatus("loading");

        try {
            await fakeLoginApi();
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    // 화면 결정 로직
    if (stauts === "loading") {
        return <p>로딩 중...</p>;
    }

    if (stauts === "error") {
        return (
            <div>
                <p style={{color: "red"}}>로그인 실패</p>
                <button onClick={() => setStatus("idle")}>다시 시도</button>
            </div>
        );
    }

    if (stauts === "success") {
        return <h2>환영합니다!!!</h2>;
    }

    return (
        <div>
            <h2>로그인 화면</h2>
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
}

export default LoginExample;