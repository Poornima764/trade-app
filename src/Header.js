import './style.css';
export default Header=()=>
{
    return(
    <div className="index">
        <div className="index-header">
            <div className="logo">
                <a className ="logo-link" href="/">Buckle Up <img src="/images/shoes.png" alt="shoes" width="50" height="50"/></a>
            </div>
            <div className="header-menu">
                <h6 className="header-links"><a href="/products/new">Start Selling with us</a>
                <link href="/users/new">Sign Up</link>
                 <a href="/users/login">Login</a></h6>
            </div>
            <a id="shop-here-link" href="/products/">Shop here</a>
            </div>
    </div>
)};