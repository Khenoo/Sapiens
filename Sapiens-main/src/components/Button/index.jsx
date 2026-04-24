function Button(props) {
  const cor = props.cor
  const escrever = props.escrever

  let botao = <button style={{
  background: cor,
  color: 'white',
  padding: '15px 30px',
  margin: '10px',
  border: 'dotted',
  borderRadius: '30px',
  fontSize: '18px',
  }}> {escrever} </button>
  return (
    botao
)
}

export default Button