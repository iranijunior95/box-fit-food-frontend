import AddIcone from '../../assets/img/add-02-stroke-rounded.svg';
import './style.css';

function ButtonAdd({ children, onClickBtnCadastar }) {
    return (
        <>
            <button 
                type="button" 
                className='btnDefault btnAdd btnDesktop'
                onClick={() => onClickBtnCadastar()}
            >{children}</button>

            <button 
                type="button" 
                className='btnDefault btnAdd btnMobile'
                onClick={() => onClickBtnCadastar()}
            >
                <img src={AddIcone} alt="add icone" />
            </button>
        </>
    );
}

export default ButtonAdd;