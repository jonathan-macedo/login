import "./App.css";
import AcessarConta from "./components/acesso/AcessarConta";
import CadastrarConta from "./components/cadastro/CadastrarConta";

function App() {
  return (
    <div className="container">
      <main>
        <AcessarConta/>
        <section id="divisor">
          <div />
          <span>Ou</span>
          <div />
        </section>
        <CadastrarConta/>
      </main>
    </div>
  );
}

export default App;
