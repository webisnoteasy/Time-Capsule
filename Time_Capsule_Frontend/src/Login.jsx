import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ Logined, account }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPasssword] = useState("");

  const EmailRef = useRef();
  const PassRef = useRef();


  const Login = () => {
    if (Email === "") {
      EmailRef.current.focus();
      alert("이메일 칸이 비었습니다!");
    } else if (Password === "") {
      PassRef.current.focus();
      alert("비밀번호 칸이 비었습니다!");
    } else if (
      account.some((a) => {
        if (Email === a.email && Password === a.password) {
          return true;
        }
      })
    ) {
      Logined(true);
      navi("/");
    } else {
      alert("이메일 또는 비밀번호가 틀렸습니다.");
    }
  };


  const navi = useNavigate();


  return (
    <div>
      <div>
        <input
          ref={EmailRef}
          type="email"
          placeholder="   example@example.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          ref={PassRef}
          type="password"
          placeholder="   password"
          onChange={(e) => {
            setPasssword(e.target.value);
          }}
        />
        <button
          onClick={() => Login()}
        >
          로그인
        </button>
        <button>
          계정이 없으신가요?{" "}
          <span
            onClick={() => {
              navi("/sign-up");
            }}
          >
            계정 만들기
          </span>
        </button>
        <button>
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
};

export default Login;
