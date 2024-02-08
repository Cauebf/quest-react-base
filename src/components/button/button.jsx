const showLabel = (label) => {
    label ? alert(`A label desse botão é ${label}`) : alert('Este botão não possui label')
}

const Button = ({label}) => {
    return <button onClick={() => showLabel(label)}>Clique aqui para exibir a label deste botão</button>
}

export default Button