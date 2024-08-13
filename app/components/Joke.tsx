import styles from "../page.module.css"

export default function Joke(props:any){

    return(


        <div>
        <h3 className={styles.jokes}>{props.joke}</h3>
        </div>
    )
}