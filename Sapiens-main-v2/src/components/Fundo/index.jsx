import styled from 'styled-components'
import carta from '../../assets/sapienscomcor.png'
import carta2 from '../../assets/sapienssemcor.png'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${carta});
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function Fundo({ children }) {
  return <Container>{children}</Container>
}

export default Fundo