import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from '@firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);


    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido)

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();

        })
    }
if (pedidoId) {
    return (
        <div className="container">
            <h1 className="main-title">
                muchas gracias por tu compra
            </h1>
            <p>tu numero de pedido es: {pedidoId}</p>
        </div>
    )
}
  return (
    <div className="container">
    <h1 className="main-title">Finalizar Compra</h1>
    <form className='formulario' onSubmit={handleSubmit(comprar)} >
        <input type="text" placeholder='ingresa el nombre' {...register("nombre")} />
        <input type="email" placeholder='ingresa el email' {...register("email")} />
        <input type="phone" placeholder='ingresa tu telefono' {...register("telefono")} />
        <button className="enviar" type='submit'>Comprar</button>
    </form>
</div>
  )
}

export default Checkout