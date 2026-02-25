import { useState } from "react";
import LoginForm from "./LoginForm";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import UserPage from "./UserPage";

function LoginContainer() {
    const [status, setStatus] = useState("idle");

    const fakeLoginApi = () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                Math.random() > 0.5 ? resolve() : reject();
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

    const handleRetry = () =>{
        setStatus("idle");
    };

    if (status === "loading") return <Loading />;
    if (status === "error") return <ErrorMessage />;
    if (status === "success") return <UserPage />;

    return <LoginForm onLogin={handleLogin} />;
}

export default LoginContainer;