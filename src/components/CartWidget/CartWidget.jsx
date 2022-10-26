import carrito from './carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <>
         <button className='button-carrito'>
            <img className='carrito' src={carrito} alt="carrito" />
        </button>
        </>
       
    );
}

export default CartWidget;
