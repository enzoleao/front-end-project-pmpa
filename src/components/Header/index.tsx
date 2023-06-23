import styles from './styles.module.scss'
import Image from 'next/image'
import logoPm from "/public/Brasão\ PMPA\ 2.png"
import logodgp from "/public/DGP.png"
export function Header () {
    return (
    <div className={styles.headerWrapper}>
        

        <div className={styles.headerContainer}>
        <Image
         src={logoPm}
         className={styles.imgHeader}
         alt="DGP" 
         />
         <h1 className={styles.nomeHeader}>Polícia Militar do Pará</h1>
         <Image
         src={logodgp}
         className={styles.imgHeader}
         alt="PM" 
         />
        </div>
    </div>
    )
}