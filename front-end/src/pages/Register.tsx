import Input from "../components/Input";
import { useState } from "react";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!name || !email || !password || !cep) {
        setError("Todos os campos são obrigatórios");
        return;
      }

      if (password !== passwordConfirm) {
        setError("As senhas não conferem");
        return;
      }
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, cep }),
      });

      switch (response.status) {
        case 409:
          setError("E-mail já cadastrado");
          break;
        case 400:
          setError("Todos os campos são obrigatórios");
          break;
        case 201:
          setName("");
          setEmail("");
          setPassword("");
          setPasswordConfirm("");
          setCep("");
          setError("");
          break;
        case 500:
          setError("Tente novamente mais tarde");
          break;
        default:
          setError("");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      return;
    }
  }
  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center gap-2">
        <Link to="/">
          {" "}
          <img src="./logo.png" alt="" className="mx-auto mb-4" />
        </Link>
        <Input
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Input
          placeholder="Confirme a senha"
          type="password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
          value={cep}
        />

        <p className="font-bold text-red-500">{error}</p>
        <div className="mt-3 flex w-full flex-col gap-2">
          <Button title="Criar conta" type="submit"></Button>

          <Link to="/login" className="w-full">
            <Button title="Já tenho uma conta" variant="outline"></Button>
          </Link>
        </div>
      </div>{" "}
    </form>
  );
};
export default Register;
