import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Menu()
{
    return (
        <header>
            <div className={style["a-menu"]}>
                <div className={style["menu"]}>                    
                    <div className={style["top-menu"]}>
                        <div className={style["logo"]}>
                            <h1>Lo<span>G</span>o</h1>
                            <span>da empresa</span>
                        </div>
                        <div className={style["list-menu"]}>
                            <ul>
                                <li>Home</li>
                                <li>Usuários</li>
                                <li>Produtos</li>
                            </ul>
                            <div className={style["search"]}>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>               
                    </div>
                    <div className={style["bottom-menu"]}>
                        <div className={style["selectMenu"]}>
                            <span>Lista de usuários</span>
                        </div>
                    </div>                    
                </div>
            </div>
        </header>
    )
}