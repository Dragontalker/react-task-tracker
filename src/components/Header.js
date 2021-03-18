import PropTypes from 'prop-types';
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Click');
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='hello1' onClick={onClick}/>
            <Button color='blue' text='hello2'/>
            <Button color='red' text='hello3'/>
            <Button />
        </header>
    )
};

export default Header;