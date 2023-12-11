import './Header.css'

const Header = (props: props) => {
    return(
        <>
        <div className="header">
        <div className="headerDiv" content="">

        </div>
        <div className="headerDiv">
        <h1 className="headerTitle" onClick={() => props.homeButton(0)}>Hear The Noise Records</h1>
        </div>
        <div className="headerDiv">
        {props.cartToRender}
        </div>
        </div>
        </>
    )
}

interface props {
    cartToRender: React.ReactNode;
    homeButton: (arg1: number) => void; 
}

export default Header;