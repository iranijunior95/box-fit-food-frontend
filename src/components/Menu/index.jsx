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
                        <a href="#">
                            <img src={ImgHome} alt="img home" />
                            Início
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={ImgProdutos} alt="img produtos" />
                            Produtos
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={ImgClientes} alt="img clientes" />
                            Clientes
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={ImgVendas} alt="img vendas" />
                            Vendas
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={ImgRelatorio} alt="img relatorios" />
                            Relatórios
                        </a>
                    </li>
                </ul>

                <button type="button" className='btnDefault'>Sair</button>
            </div>
        </nav>
    );
}

export default Menu;