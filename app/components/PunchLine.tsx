import styles from "../page.module.css"
export default function PunchLine(props: any) {


    return (
        <div className={styles.punch_line_container}>
        {props.isVisible && <h3 className={styles.punch_line}>{props.punchLine}</h3>}
     </div>
    )
}