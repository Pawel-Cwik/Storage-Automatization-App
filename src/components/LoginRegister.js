import Login from "./Login";
import Register from "./Register";
const LoginRegister = (props) => {
  return (
    <div>
      {props.currentForm === "login" ? (
        <Login onFormSwitch={props.toggleForm} />
      ) : (
        <Register onFormSwitch={props.toggleForm} />
      )}
    </div>
  );
};

export default LoginRegister;
