import PropTypes from 'prop-types';
import Button from './Button'

const Header = (props) => {

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='hello1'/>
            <Button color='blue' text='hello2'/>
            <Button color='red' text='hello3'/>
        </header>
    )
};

export default Header;