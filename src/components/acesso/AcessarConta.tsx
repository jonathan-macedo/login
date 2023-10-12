import "./index.css";
import Botao from "../botao/Botao";

export default function AcessarConta() {
  return (
    <section>
      <h1>Acessar conta</h1>
      <input type="email" name="email" id="email" placeholder="E-mail" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
      />
      <div id="adicionais_login">
        <div>
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Lembrar-me</label>
        </div>
        <div>
          <a href="#">Esqueceu a senha?</a>
        </div>
      </div>
      <Botao nome="Acessar" />
    </section>
  )
}