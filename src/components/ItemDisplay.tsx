import { ItemData } from "./Body";
import PropTypes from 'prop-types';

const ItemDisplay = (props: ItemDisplay) => {
    const products = props.itemList.map((item) => {
        return(
            <div key={item.id} onClick={() => props.callbackFunction(item.id)}>
                <img src={item.image} alt={item.description} />
                <h4>{item.title}</h4>
                <h6>{item.price}</h6>
            </div>
        )
    });
    return(
        <>
            {products}
        </>
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