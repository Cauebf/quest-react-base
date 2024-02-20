const Paragraph = ({text, color}) => {
    const styles = {
        color: color,
        textTransform: 'uppercase'
    }

    return <p style={styles}>{text}</p> 
}

Paragraph.defaultProps = {
    text: 'Texto Padrão',
    color: '#FFFFFF'
}

export default Paragraph