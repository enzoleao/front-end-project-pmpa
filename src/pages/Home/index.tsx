import { Header } from '@/components/Header'
import styles from './styles.module.scss'
import { CointsCard } from '@/components/Card'
import { useEffect, useState } from 'react'
import api from '@/services/api'

export default function Home() {
    const [coints, setCoints] = useState<any>([])
    useEffect(() => {
        const getAll = async() =>{
           const response =  await api.get('/coint')
           setCoints(response.data)
           console.log(response.data)
        }
        getAll()
    }, [])
    return (
        <div className={styles.homeWrapper}>
            <Header />
            <div className={styles.homeContainer}>
                {typeof coints !== 'undefined'
                 && coints.map((i: any) => {
                    return <CointsCard key={i.id} setCoints={setCoints} vagas={i.vagas} name={i.name} opms={i.battalions}/>
                 })}
            </div>
        </div>
    )
}