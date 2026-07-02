function PhonePage(){
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [cartOpen, setCartOpen] = React.useState(false);
    const [cartItems, setCartItems] = React.useState(() => {
        const saved = localStorage.getItem("cartItems");
        return saved ? JSON.parse(saved) : [];
    });
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    function addToCart(selectedProduct) {
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

    function clearCart() {
        setCartItems([]);
    }

    const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const [dialInput, setDialInput] = React.useState("");

    function handleNumberClick(value) {
        if (value === "&#8592;") {
            setDialInput(prev => prev.slice(0, -1));
        } else if (value !== "Call") {
            setDialInput(prev => prev + value);
        }
    }

    const [creditOpen, setCreditOpen] = React.useState(false);
    function openCredit() {
        setCreditOpen(true);
    }
    function closeCredit() {
        setCreditOpen(false);
    }

    return(
        <div className = "phonePage">
            <div className = "newTopBar">
                 {showTopBar()}
                 <button className = "cartButton" onClick={() => setCartOpen(true)}>
                    <img src="images/ShoppingCart.png" alt="Shopping Cart" className="shoppingcart-pic" />
                    {totalItemCount > 0 && (
                        <span className="cart-badge">{totalItemCount}</span>
                    )}
                </button>
            </div>
            <div className={"menu-panel" + (menuOpen ? " open" : "")}>
                <span className="menu" id="menu">
                    <span>
                        <a href="../Home_Screen.html">
                            <img src="../images/profilepic.png" alt="Profile" className="profile-pic" />
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <img src="../images/Clapboard.png" alt="Entertainment" className="clapboard-pic" />
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <img src="../images/AirplaneIcon.png" alt="Airplane" className="airplane-pic" />
                        </a>
                    </span>
                    <span>
                        <a href="../ShoppingPage/Shopping_Page.html">
                            <img src="../images/ShoppingBag.png" alt="Shopping" className="shopping-pic" />
                        </a>
                    </span>
                    <span>
                        <a href="/FoodPage/Food_Page.html">
                            <img src="../images/ForkKnife.png" alt="Food and Beverage" className="food-pic" />
                        </a>
                    </span>
                    <span>
                        <a href="../PhonePage/Phone_Page.html">
                            <img src="../images/PhoneIcon.png" alt="Phone" className="phone-pic" />
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <img src="../images/Help.png" alt="Help" className="help-pic" />
                        </a>
                    </span>
                </span>
            </div>
            {menuOpen && (
                <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>
            )}

            <div className = "phoneSection">
                <div className = "OuterPhoneBox">
                    <div className="InputSection">{dialInput}</div>
                    <div className = "NumbersSection">
                        <div className = "rows">
                            <div className="number" onClick={() => handleNumberClick("1")}>1</div>
                            <div className="number" onClick={() => handleNumberClick("2")}>2</div>
                            <div className="number" onClick={() => handleNumberClick("3")}>3</div>
                        </div>
                        <div className = "rows">
                            <div className="number" onClick={() => handleNumberClick("4")}>4</div>
                            <div className="number" onClick={() => handleNumberClick("5")}>5</div>
                            <div className="number" onClick={() => handleNumberClick("6")}>6</div>
                        </div>
                        <div className = "rows">
                            <div className="number" onClick={() => handleNumberClick("7")}>7</div>
                            <div className="number" onClick={() => handleNumberClick("8")}>8</div>
                            <div className="number" onClick={() => handleNumberClick("9")}>9</div>
                        </div>
                        <div className = "rows">
                            <div className="number" onClick={() => handleNumberClick("&#8592;")}>&#8592;</div>
                            <div className="number" onClick={() => handleNumberClick("0")}>0</div>
                            <div className="number" onClick={() => addToCart("Phone Call")}>Call</div>
                        </div>
                    </div>
                </div>
            </div>

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
                    <button className="BuyNowButton" onClick = {setCreditOpen} >Buy Now</button>
                </div>
            </div>

            {creditOpen && (
                <div className="credit-overlay active">
                    <div className="credit-box">
                        <h2>Please enter your credit card information below</h2>
                        <p></p>
                        <input type="text" placeholder="Credit Card Number" />
                        <input type="text" placeholder="CVV" />
                        <input type="text" placeholder="Exp. Date" />
                        <div className="credit-buttons">
                            <button onClick={() => {clearCart(); closeCredit();}}>Pay</button>
                            <button onClick={closeCredit}>Back</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}