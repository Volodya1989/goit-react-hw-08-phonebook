import { Input, Label, Button } from "./RegisterForm.styled";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <Input type="text" name="name" required />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" required />
        </Label>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
