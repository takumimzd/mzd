import { ChangeEvent, useState } from "react";
import { useSignIn } from "src/hooks/useSignIn";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const { handleSignIn } = useSignIn({ email });
  const handleOnChangeEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <input
        type="email"
        onChange={(event) => handleOnChangeEmailInput(event)}
      />
      <button onClick={handleSignIn}>ログイン</button>
    </div>
  );
};

export default SignIn;
