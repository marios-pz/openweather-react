import '../Weather/Weather.css';
import Theme from '../Theme/Theme';
import './Menu.css';

const Menu = () => {
    
    return (
            <>
                <nav>
                    <ul>
                        <li><h1 style={{marginLeft: 1 + 'em'}}>Weather App</h1></li>
                        <li>    
                            <a href="https://github.com/marios-pz" target="_blank" rel="noopener noreferrer">
                                <img class="github" src="https://avatars.githubusercontent.com/marios-pz" alt="Your GitHub Profile" />
                            </a>
                        </li>
                        <li style={{marginRight: 1 + 'em'}}><Theme /></li>
                    </ul>
                </nav> 
            </>
    );
};

export default Menu;
