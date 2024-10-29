import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

function NavBar({valor}) {
  return (
    <div>
        <h1>Letras & Especias</h1>
        <CartWidget valor={valor}/>
    </div>
  )
}

export default NavBar