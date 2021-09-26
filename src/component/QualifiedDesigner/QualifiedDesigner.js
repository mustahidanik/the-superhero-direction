import React, { useEffect } from 'react';
import { useState } from 'react';
import DesignerCart from '../DesignerCart/DesignerCart';
import ShowData from '../ShowData/ShowData';
import './QualifiedDesigner.css';

const QualifiedDesigner = () => {
    const [designers, setDesigners] = useState([]);
    const [designerCart, setDesignerCart] = useState([]);
    useEffect(() => {
        fetch('https://mocki.io/v1/5d30d164-c635-4ab6-9fb6-bec5998fad72')
            .then(res => res.json())
            .then(data => setDesigners(data));


    }, [])
    const handleDesignerCart = (designer) => {
        const newDesignerCart = [...designerCart, designer];
        setDesignerCart(newDesignerCart);
    }
    return (
        <div className="container-div">
            <div className="main-div" >
                {
                    designers.map(designer => <ShowData
                        key={designer.id}
                        designer={designer}
                        handleDesignerCart={handleDesignerCart}

                    ></ShowData>)
                }
            </div>
            <div className="designer-cart">
                <DesignerCart designerCart={designerCart}></DesignerCart>
            </div>

        </div>
    );
};

export default QualifiedDesigner;