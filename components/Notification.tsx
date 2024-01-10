'use client'

import React from 'react'
import { typeNotification } from '@/constants/definitions'

function Notification({ message, type } : typeNotification ) {
  return (
   <div style={ type === 'success' ? styles.success : styles.error } >
      <p>{ message }</p>
   </div>
  )
}

const styles = {
  error: {
    color: 'white',
    backgroundColor: 'red',
    fontSize: '16px',
    padding: '5px 10px',
    borderRadius: '5px'
  },
  success: {
    color: 'white',
    backgroundColor: 'green',
    fontSize: '16px',
    padding: '5px 10px',
    borderRadius: '5px'
  }
}

export default Notification