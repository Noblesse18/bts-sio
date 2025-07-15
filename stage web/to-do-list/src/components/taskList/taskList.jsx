import styles from './TaskList.module.css'
import { TaskItem } from '../taskItem/taskItem'

export const TaskList = () => {
    return (
        <div className={styles.box}>
            <h2 className={styles.title}>
                Il te reste encore x taches à accomplir ! 
            </h2>
            <ul className={styles.container}>
                <TaskItem/>
            </ul>
        </div>
    )
}