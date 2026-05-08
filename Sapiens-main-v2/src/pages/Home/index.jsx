import { findByLabelText } from '@testing-library/dom'
import Background from '../../components/Background'
import Button from '../../components/Button'

const p1 = {display: "flex", alignItems: "flex-end"}

function Home() {
  return (
    <Background>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 'auto',
        marginBottom: '5%'
      }}>
      <Button cor="purple" escrever="Jogar"/>
      <Button cor="purple" escrever="Configurações"/>
      <Button cor="purple" escrever="Tutorial"/>
      </div>
    </Background>
  )
}

export default Home