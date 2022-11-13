import { ChangeEvent, useState } from "react";
import { useSession } from "src/hooks/useSession";
import { useSignIn } from "src/hooks/useSignIn";

const Admin = () => {
  const [email, setEmail] = useState("");
  const { handleSignIn } = useSignIn({ email });
  const handleOnChangeEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const { isSignedIn } = useSession();

  return (
    <div>
      <input
        type="email"
        onChange={(event) => handleOnChangeEmailInput(event)}
      />
      <button onClick={handleSignIn}>ログイン</button>
      {isSignedIn ? <p>ログイン中</p> : <p>ログインしてない</p>}
    </div>
  );
};

export default Admin;
