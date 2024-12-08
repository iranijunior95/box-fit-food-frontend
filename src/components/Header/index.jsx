import ImgMenu from '../../assets/img/menu-01-stroke-rounded.svg';
import ImgRemove from '../../assets/img/cancel-01-stroke-rounded.svg';
import './style.css';

function Header(props) {
    return (
        <header>
            <button 
                type="button"
                onClick={() => props.clickOpenMenu()}
            >
                <img src={props.isOpenMenu ? ImgRemove : ImgMenu} alt="menu bars" />
            </button>
        </header>
    );
}

export default Header;