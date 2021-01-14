import React from 'react';
import FavoriteShop from './FavoriteShop'

 function MyList({name, handleOnClick}){
        return (
            <>
               <li>{name}<FavoriteShop shop={"Move"}/> <button onClick={handleOnClick}> Click</button></li>
            </>
        )
}

export default MyList;