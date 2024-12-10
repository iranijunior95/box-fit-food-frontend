import { NavLink } from "react-router";
import ImgHome from '../../assets/img/home-03-stroke-rounded.svg';
import ImgProdutos from '../../assets/img/vegetarian-food-stroke-rounded.svg';
import ImgClientes from '../../assets/img/user-multiple-stroke-rounded.svg';
import ImgVendas from '../../assets/img/sale-tag-02-stroke-rounded.svg';
import ImgRelatorio from '../../assets/img/files-02-stroke-rounded.svg';
import './style.css';

function Menu(props) {
    return (
        <nav className={props.isOpenMenu ? 'nav navActive' : 'nav'}>
            <div className={props.isOpenMenu ? 'navMenu activeNavMenu' : 'navMenu'}>
                <div className='navTitulo'>
                    <p>Box Fit Food Web</p>
                    <span>Versão 1.0.0</span>
                </div>

                <ul>
                    <li>
                        <NavLink to="/home" end>
                            <img src={ImgHome} alt="img home" />
                            Início
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/produtos" end>
                            <img src={ImgProdutos} alt="img produtos" />
                            Produtos
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/clientes" end>
                            <img src={ImgClientes} alt="img clientes" />
                            Clientes
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/vendas" end>
                            <img src={ImgVendas} alt="img vendas" />
                            Vendas
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/relatorios" end>  
                            <img src={ImgRelatorio} alt="img relatorios" />
                            Relatórios
                        </NavLink>
                    </li>
                </ul>

                <button type="button" className='btnDefault'>Sair</button>
            </div>
        </nav>
    );
}

export default Menu;