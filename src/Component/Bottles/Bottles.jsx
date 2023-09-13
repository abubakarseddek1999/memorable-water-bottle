import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS } from "../../utilities/localstorage";

const Bottles = () => {
    const [bottles, setBottles]=useState([])
    const [cart, setCart]=useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data =>setBottles(data));
    },[])

    const handlAddToCart= bottle =>{
        // console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
    }
    return (
        <div>
            <h2>Bottles Heare: {bottles.length}</h2>
            <h4>Cart:{cart.length}</h4>
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle
                     bottle={bottle}
                     handlAddToCart={handlAddToCart}
                     key={bottle.id}></Bottle>)
            }
            </div>
            
        </div>
    );
};

export default Bottles;