const Button = ({label}) => {
    return <button onClick={() => alert(`A label desse botão é ${label}`)}>Clique aqui para exibir a label deste botão</button>
}

export default Button