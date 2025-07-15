import styles from './TaskInput.module.css'

export const TaskInput = () => {
    return (
        <div className={`${styles.box} ${styles.element}`}>

            <h2 className={styles.titles}>Ajouter ta prochaine tache</h2>
            <form className={styles.container}>
                <input type='text' className={styles.input} placeholder='ajouter un titre de tache'/>

            </form>
            <button className={styles.buttonPrimary} type='submit'>
                Ajouter
            </button>
        </div>
    )
}