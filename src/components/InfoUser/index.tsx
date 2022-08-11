import { IUsers } from '../../types/users'
import style from './style.module.css'

export default function InfoUser({user} : {user: IUsers})
{
    return (
        <div className={style["info-user"]}>
            <div className={style["image-info-user"]}>
                <span>Foto</span>
            </div>
            <div className={style["data-info-user"]}>
                <h2>{user.firstname} {user.lastname}</h2>
                <div className={style["user"]}>
                    <label>Usuário:</label>
                    <span>{user.username}</span>
                </div>
                <div className={style["email"]}>
                    <label>E-mail:</label>
                    <span title={user.email}>{user.email}</span>
                </div>
                <div className={style["website"]}>
                    <a href="http://www.siteusuario.com" target="_blank" rel="noopener noreferrer">{user.website}</a>
                </div>
            </div>
        </div>
    )
}