const Header = (props) => {

    return (
        <header style={headerStyle}>
            <h1>{props.title}</h1>
        </header>
    )
};

const headerStyle = {
    color: 'red', 
    backgroundColor: 'black' 
};

export default Header;