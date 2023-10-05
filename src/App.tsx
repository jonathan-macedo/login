import "./App.css";

function App() {
  return (
    <div className="container">
      <main>
        <section id="acessar_conta">
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
          <button type="submit">Acessar</button>
        </section>
        <section id="divisor">
          <div />
          <span>Ou</span>
          <div />
        </section>
        <section id="criar_conta">
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
          <button type="submit">Cadastrar</button>
        </section>
      </main>
    </div>
  );
}

export default App;
