import React, { useContext } from 'react'
import { Link } from 'react-router'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito" >carrito
        <span className='numerito'> {cantidadEnCarrito()}</span></Link>
    </div>
  )
}

export default CartWidget