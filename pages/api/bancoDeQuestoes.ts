import QuestaoModel from '../../model/questao';
import RespostaModel from '../../model/resposta';

const questoes: QuestaoModel[] = [
  new QuestaoModel(306, 'Qual bicho transmite a Doença de Chagas?', [
    RespostaModel.errada('Abelha'),
    RespostaModel.errada('Barata'),
    RespostaModel.errada('Pulga'),
    RespostaModel.certa('Barbeiro'),
  ]),
  new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum"?', [
    RespostaModel.errada('Caju'),
    RespostaModel.errada('Côco'),
    RespostaModel.errada('Chuchu'),
    RespostaModel.certa('Abóbora'),
  ]),
  new QuestaoModel(203, 'Qual e o coletivo de cães?', [
    RespostaModel.errada('Manada'),
    RespostaModel.errada('Alcateia'),
    RespostaModel.errada('Rebanho'),
    RespostaModel.certa('Matilha'),
  ]),
  new QuestaoModel(204, 'Qual e o triangulo que tem todos os lados diferentes?', [
    RespostaModel.errada('Equilatero'),
    RespostaModel.errada('Isóceles'),
    RespostaModel.errada('Trapézio'),
    RespostaModel.certa('Escaleno'),
  ]),
]

export default questoes