import './index.css'
type Nome = {
  nome: string
}
export default function Botao({nome}: Nome) {
  return <button>{nome}</button>
}