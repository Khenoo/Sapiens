import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextBubble from '../../components/TextBubble'

function PrimeiraPag() {
  return (
    <Fundo>
      <TextBubble cor='black' escrever='Descrever o que deve ser escrito no cabecalho'></TextBubble>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        height: '400px',
        alignContent: 'space-between',
        justifyContent: 'center',
      }}>
      <Button cor="black" escrever="Opção1"/>
      <Button cor="black" escrever="Opção2"/>
      <Button cor="black" escrever="Opção3"/>
      <Button cor="black" escrever="Opção4"/>
      <Button cor="black" escrever="Opção5"/>
      <Button cor="black" escrever="Opção6"/>
      <Button cor="black" escrever="Opção7"/>
      <Button cor="black" escrever="Opção8"/>
      <Button cor="black" escrever="Opção9"/>
      </div>
   </Fundo>
  )
}

export default PrimeiraPag