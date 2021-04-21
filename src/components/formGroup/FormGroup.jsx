import React from 'react'
import styles from './formGroup.module.scss'

const FormGroup = ({ptype, pname, pholder, change, val}) => {
  return (
    <div className={styles.formGroup}>
      <input 
        id={pname}
        type={ptype} 
        className={styles.formField} 
        name={pname}
        placeholder={pholder}
        onChange={change}
        value={val}
      />
      <label className={styles.formLabel} htmlFor={pname}>{pholder}</label>
      <span className={styles.bgFocus}></span>
    </div>
  )
}

export default FormGroup
