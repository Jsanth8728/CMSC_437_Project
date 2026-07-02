 //sets dark mode 
React.useEffect(() => {
    const dark = localStorage.getItem("darkMode") === "true";
    if (dark) {
         document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}, []);

function isLoggedIn() {
    return localStorage.getItem("loggedIn") === "true";
}

function logout() {
    localStorage.setItem("loggedIn", "false");
    window.location.href = "Home_Screen.html";
}

//  Displays top bar of all pages, used for navigating between pages
function showTopBar() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const isHomePage = (document.title === "Food and Drinks" || document.title === "Shopping" || document.title === "Phone");
    
    const [announceOpenTop, setAnnounceOpenTop] = React.useState(false);
    function openAnnounceTop() {
        setAnnounceOpenTop(true);
    }
    function closeAnnounceTop() {
        setAnnounceOpenTop(false);
    }
      
    return (
        <div className="topbar" style={{ width: isHomePage ? "90%" : "100%" }}>
            {/* Menu Panel  */}
            <button className="menuButton" onClick={() => setMenuOpen(true)}>&#8594;</button>
            <div className={"menu-panel" + (menuOpen ? " open" : "")}>
                <span className="menu" id="menu">
                    <span>
                        <a href="Home_Screen.html">
                            <img src="images/HomeIcon.png" alt="Home Page" className="profile-pic" />
                        </a>
                    </span>
                    <span>
                        <a href="Media.html">
                            <img src="images/Clapboard.png" alt="Entertainment" className="clapboard-pic" />
                        </a>
                    </span>
                    <span>
                        <a href="Travel.html">
                            <img src="images/AirplaneIcon.png" alt="Airplane" className="airplane-pic" />
                        </a>
                    </span>
                    <span>
                        <a href="Shopping_Page.html">
                            <img src="images/ShoppingBag.png" alt="Shopping" className="shopping-pic" />
                        </a>
                    </span>
                    <span>
                        <a href="Food_Page.html">
                            <img src="images/ForkKnife.png" alt="Food and Beverage" className="food-pic" />
                        </a>
                    </span>
                    <span>
                        <a href="Phone_Page.html">
                            <img src="images/PhoneIcon.png" alt="Phone" className="phone-pic" />
                        </a>
                    </span>
                    <span>
                        <a href="Help_Page.html">
                            <img src="images/Help.png" alt="Help" className="help-pic" />
                        </a>
                    </span>
                </span>
            </div>
            {/* popout menu for navigating between pages */}
            {menuOpen && (
                <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>
            )}

            <button className="announcement" onClick = {openAnnounceTop}>Announcements</button>
            {/* <button className="eta" id="eta"></button> */}
            {isLoggedIn() ? (<button className="login" onClick={logout}>Logout</button>) : 
                (<button className="login" onClick={() => window.location.href = "Login_Screen.html"}>
                Login</button>
            )}

            {announceOpenTop && (
                <div className="announce-top-overlay active">
                    <div className="announce-top-box">
                        <h2>Announcements</h2>
                        <p>Announcement 1</p>
                        <p>Announcement 2</p>
                        <p>Announcement 3</p>
                        <p>Announcement 4</p>
                        <div className="announce-top-buttons">
                            <button onClick={closeAnnounceTop}>Back</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function showCart() {
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [cartOpen, setCartOpen] = React.useState(false);
    const [cartItems, setCartItems] = React.useState(() => {
        const saved = localStorage.getItem("cartItems");
        return saved ? JSON.parse(saved) : [];
    });

    React.useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    function addToCart() {
        setCartItems(prevItems => {
            const existing = prevItems.find(item => item.name === selectedProduct);
            if (existing) {
                return prevItems.map(item =>
                    item.name === selectedProduct
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { name: selectedProduct, quantity: 1 }];
            }
        });
        setModalOpen(false);
    }

    function removeFromCart(productName) {
        setCartItems(prevItems => prevItems.filter(item => item.name !== productName));
    }

    function changeQuantity(productName, delta) {
        setCartItems(prevItems =>
            prevItems
                .map(item =>
                    item.name === productName
                        ? { ...item, quantity: item.quantity + delta }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    }

    const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    
        return(
            <div>
                <button className="cartButton" onClick={() => setCartOpen(true)}>
                    <img src="images/ShoppingCart.png" alt="Shopping Cart" className="shoppingcart-pic" />
                    {totalItemCount > 0 && (
                        <span className="cart-badge">{totalItemCount}</span>
                    )}
                </button>

                <div className={"cart-panel" + (cartOpen ? " open" : "")}>
                    <div className="cart-header">
                        <h2>Your Cart</h2>
                        <button className="cart-close-btn" onClick={() => setCartOpen(false)}>&times;</button>
                    </div>
                    <div className="cart-items">
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cartItems.map(item => (
                                <div className="cart-item" key={item.name}>
                                    <span className="cart-item-name">{item.name}</span>
                                    <div className="cart-item-controls">
                                        <button onClick={() => changeQuantity(item.name, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => changeQuantity(item.name, 1)}>+</button>
                                        <button className="cart-remove-btn" onClick={() => removeFromCart(item.name)}>Remove</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div>
                        <button className="BuyNowButton" >Buy Now</button>
                    </div>
                </div>
            </div>
    
        );
}
// function getAnnouncements(){
//     const announncements
// }