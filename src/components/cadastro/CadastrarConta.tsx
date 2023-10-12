import "./index.css"
import Botao from "../botao/Botao";

export default function CadastrarConta() {
  return (
    <section>
      <h1>Cadastrar conta</h1>
      <input type="text" name="name" id="name" placeholder="Nome" />
      <input type="email" name="email" id="email" placeholder="E-mail" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
      />
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirmar Senha"
      />
      <Botao nome="Cadastrar" />
    </section>
  )
}