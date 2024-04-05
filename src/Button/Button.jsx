import './Button.css'

const Button = (props) => {
    const weblink = window.location.href = props.link;
    ;

    return (
        <button onClick={weblink} className='button'>{props.title}</button>
    )
}

export default Button