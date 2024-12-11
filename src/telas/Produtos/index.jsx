import { useState } from 'react';
import Titulo from '../../components/Titulo';
import InputBusca from '../../components/InputBusca';
import ButtonAdd from '../../components/ButtonAdd';
import './style.css';

function Produtos() {
    const [inputBuscar, setInputBuscar] = useState('');

    function onChangeInputBusca(value) {
        setInputBuscar(value);
    }

    function onClickBtnCadastar() {
        console.log('clicou')
    }

    return (
        <section>
            <Titulo 
                tituloH1="Lista de Produtos"
            ></Titulo>

            <div className="conteudoProdutos">
                <InputBusca 
                    placehold="Buscar produto..."
                    value={inputBuscar}
                    onChangeInputBusca={onChangeInputBusca}
                />
                <ButtonAdd
                    onClickBtnCadastar={onClickBtnCadastar}
                >Cadastrar Produtos</ButtonAdd>
            </div>
        </section>
    );
}

export default Produtos;