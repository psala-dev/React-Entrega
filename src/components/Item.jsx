import React from 'react'
import { Link } from 'react-router'

export const Item = ( {producto}) => {
console.log(producto)
  return (
    <div className="producto">
        <img src={producto.imagen} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: $ {producto.precio}</p>
            <p>categoria: {producto.categoria}</p>
            
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}
