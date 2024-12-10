import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import api from '../../services/api';
import Titulo from "../../components/Titulo";
import ImgProdutosHome from '../../assets/img/vegetarian-food-stroke-rounded-home.svg';
import ImgClientesHome from '../../assets/img/user-multiple-stroke-rounded-home.svg';
import ImgVendasHome from '../../assets/img/sale-tag-02-stroke-rounded-home.svg';
import ImgRelatoriosHome from '../../assets/img/files-02-stroke-rounded-home.svg';
import './style.css';

function Home() {
    const [produtos, setProdutos] = useState(0);
    const [clientes, setClientes] = useState(0);
    const [vendas, setVendas] = useState(0);

    useEffect(() => {
        api.get('/produtos').then((response) => setProdutos(response.data.dados.length));
        api.get('/clientes').then((response) => setClientes(response.data.dados.length));
        api.get('/vendas').then((response) => setVendas(response.data.dados.length));
    }, []);

    return (
        <section>
            <Titulo 
                tituloH1="Box Fit Food Web"
                tituloSpan="Nosso sistema foi desenvolvido para proporcionar uma experiência simples, eficiente e intuitiva, atendendo às suas necessidades de gestão de estoque e controle de vendas."
            ></Titulo>

            <div className="homeConteudoCards">
                <h2>Informações do Sistema</h2>

                <div className="conteudoCards">
                    <div className="cardsHome">
                        <img src={ImgProdutosHome} alt="produtos home" />

                        <NavLink to="/produtos" end>Produtos</NavLink>
                        <div className="cardsDescricao">
                            <span className="descricao">Qtd Produtos:</span>
                            <span className="quantidade">{produtos}</span>
                        </div>
                    </div>

                    <div className="cardsHome">
                        <img src={ImgClientesHome} alt="clientes home" />

                        <NavLink to="/clientes" end>Clientes</NavLink>
                        <div className="cardsDescricao">
                            <span className="descricao">Qtd Clientes:</span>
                            <span className="quantidade">{clientes}</span>
                        </div>
                    </div>

                    <div className="cardsHome">
                        <img src={ImgVendasHome} alt="vendas home" />

                        <NavLink to="/vendas" end>Vendas</NavLink>
                        <div className="cardsDescricao">
                            <span className="descricao">Qtd Vendas:</span>
                            <span className="quantidade">{vendas}</span>
                        </div>
                    </div>

                    <div className="cardsHome">
                        <img src={ImgRelatoriosHome} alt="relatorios home" />

                        <NavLink to="/relatorios" end>Relatórios</NavLink>
                        <div className="cardsDescricao">
                            <span className="descricao">Gerar relatórios do sistema</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;