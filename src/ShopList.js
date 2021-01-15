import React from 'react'

  export const ShopList = ({id, title, handleOnDelete}) => {

    const onDelete = () => {
      handleOnDelete(id)
    }
    return (
        <div>
          <button onClick={onDelete}>Delete</button>
             {title}
        </div>      
    )
}
