import SearchIcone from '../../assets/img/search-01-stroke-rounded.svg';
import './style.css';

function InputBusca({ placehold, value, onChangeInputBusca }) {
    return (
        <div className='conteudoInputBusca'>
            <input 
                type="text" 
                name="inputBuscar"
                id="inputBuscar"
                placeholder={placehold}
                value={value}
                onChange={(event) => onChangeInputBusca(event.target.value)} 
            />

            <img src={SearchIcone} alt="search img" />
        </div>
    );
}

export default InputBusca;