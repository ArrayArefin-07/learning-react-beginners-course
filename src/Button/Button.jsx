// Learn How to Style React Component with CSS 

// 1. External
// 2. Modules
// 3. inline

//using css module
import styles from './Button.module.css'

function Button(){
  return(
    <button className={styles.button}>Click me</button>
  )
}

export default Button