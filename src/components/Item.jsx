import React from 'react'

export const Item = ( {producto}) => {

  return (
    <div className="producto">
        <img src={producto.imagen} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: $ {producto.precio}</p>
            <p>categoria: {producto.categoria}</p>
            
            <a className="ver-mas" href={`/Item/${producto.id}`}>Ver mas</a>
        </div>
    </div>
  )
}
