import React from 'react';
import './DesignerCart.css'

const DesignerCart = (props) => {

    const { designerCart } = props;


    let totalQuantity = 0;
    let total = 0;


    for (const designer of designerCart) {



        let designerSalary = parseInt(designer.salary)
        total = parseInt(total + designerSalary);

        if (!designer.quantity) {
            designer.quantity = 1;

        }
        totalQuantity = totalQuantity + designer.quantity;

    }

    return (
        <div className="total">
            <h1>Total Designer: {totalQuantity} </h1>
            <h4>Budget: {total}</h4>
            {
                designerCart.map(designer =>
                    <ul key={designer.id}> <div className="cart-items"><div><img src={designer.img} alt="" /></div> <div>{designer.name}</div></div></ul>
                )
            }

        </div>
    );
};

export default DesignerCart;