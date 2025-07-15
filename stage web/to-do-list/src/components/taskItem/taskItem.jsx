import styles from './TaskItem.module.css'

export const TaskItem = () => {
    return (
        <li className={`${styles.container} ${styles.defautl}`}>
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefautl}`}>
                    1
                </div>
                <div className={styles.contentDefault}>
                    Faire le projet mobile ! 
                </div>
            </div>
            <button className='button-primary'>x</button>

        </li>
    )
}