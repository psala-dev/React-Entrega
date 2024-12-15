import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {
const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

const handleVaciar = () => {
vaciarCarrito();
}
  return (
    <div className='container'>
        <h1 className='main-title'>Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                <h2>{prod.titulo}</h2>
                <p>${prod.precio}</p>
                <p>cantidad: {prod.cantidad}</p>
                <p>precio total: {prod.precio * prod.cantidad}</p>
                </div>
            ))
        }

        {
            carrito.length > 0 ?
            <> <h2>precio total$ {precioTotal()}</h2>
        <button onClick={handleVaciar}>vaciar</button>
        </> :
        <h2>el carrito esta vacio</h2>
        }



        </div>
  )
}

export default Carrito