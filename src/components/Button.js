import PropTypes from 'prop-types';

const Button = (props) => {


    return (
        <button 
            onClick={props.onClick}
            className='btn' 
            style={{backgroundColor: props.color}}
        >
            {props.text}
        </button>
    )
};

Button.defaultProps = {
    color: 'steelblue',
    text: 'Button'
};

Button.protoTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default Button;