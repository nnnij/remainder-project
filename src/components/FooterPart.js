import React from 'react'

const FooterPart = ({oDelete, onShow}) => {
  return (
    <div style={{backgroundColor:"#EAEFEF"}} className='w-100 d-flex justify-content-between align-items-center p-3 rounded-bottom'>
      <button onClick={onShow} style={{backgroundColor:"#B8CFCE"}} className='btn fw-bold'>عرض المواعيد</button>
      <button onClick={oDelete} style={{backgroundColor:"#B8CFCE"}} className='btn fw-bold'>مسح الكل</button>
    </div>
  )
}

export default FooterPart
