import { ItemData } from "./Body";
import PropTypes from 'prop-types';
import './ItemDisplay.css'

const ItemDisplay = (props: ItemDisplay) => {
    const products = props.itemList.map((item) => {
        return(
            <div className="itemDisplayFrame" key={item.id} onClick={() => props.callbackFunction(item.id)}>
                <img className="itemDisplayImage itemDisplayAnimation" src={item.image} alt={item.description} />
                <h4 className="itemDisplayAnimation">{item.title}</h4>
                <h4>${item.price}</h4>
            </div>
        )
    });
    return(
        <div className="itemDisplayContainer">
            {products}
        </div>
    )
}

ItemDisplay.propTypes = {
    itemList: PropTypes.array,
    callbackFunction: PropTypes.func
}

interface ItemDisplay {
    itemList: ItemData[]
    callbackFunction: (arg1: string) => void;
}

export default ItemDisplay;