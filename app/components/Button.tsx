import styles from "../page.module.css"
import React, { useState } from "react"

export default function Button(props: any) {
   
    return (
        <div>

        <button onClick={props.toggleReveal} className={styles.button}>{props.isVisible ? "Hide" : "Reveal"}</button>
        </div>
    
    )
}