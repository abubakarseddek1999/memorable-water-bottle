import PropTypes from 'prop-types';
import './bottle.css'
const Bottle = ({bottle,handlAddToCart}) => {
    console.log(bottle)
    const {name,img,price}=bottle;
    return (
        <div className='bottle'>
            <h2>bottle:{name}</h2>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=>handlAddToCart(bottle)}>purches</button>
            
        </div>
    );
};
Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handlAddToCart: PropTypes.func.isRequired
}

export default Bottle;