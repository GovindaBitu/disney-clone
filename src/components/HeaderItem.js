import React from 'react'

const HeaderItem = ({Name, Icon}) => {
  return (
    <div className='text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline
    underline-offset-8 mb-3'>
     <Icon/>
     <h2 className=''>{Name}</h2>
    </div>
  )
}

export default HeaderItem
