import styles from "../styles/Questao.module.css"
import QuestaoModel from '../model/questao'
import Enunciado from './Enunciado'
import Resposta from './Resposta'
import Temporizador from './Temporizador'

const letras = [
  { valor: 'A', cor: '#6A5ACD' },
  { valor: 'B', cor: '#ff0000' },
  { valor: 'C', cor: '#808080' },
  { valor: 'D', cor: '#00CED1' },
]

interface QuestaoProps {
  valor: QuestaoModel
  tempoPraResposta?: number
  respostaFornecida: (indice: number) => void
  tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor

  function renderizarRespostas() {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          key={`${questao.id}-${i}`}
          valor={resposta}
          indice={i}
          letra={letras[i].valor}
          corFundoLetra={letras[i].cor}
          respostaFornecida={props.respostaFornecida}
        />
      )
    })
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      <Temporizador key={questao.id}
        duracao={props.tempoPraResposta ?? 10}
        tempoEsgotado={props.tempoEsgotado} />
      {renderizarRespostas()}
    </div>
  )
}