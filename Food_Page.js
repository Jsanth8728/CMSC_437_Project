function FoodPage(){
    const [modalOpen, setModalOpen] = React.useState(false);
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

    function openModal(productName) {
        setSelectedProduct(productName);
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

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

    function clearCart() {
        setCartItems([]);
    }

    const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);


    const [creditOpen, setCreditOpen] = React.useState(false);
    function openCredit() {
        setCreditOpen(true);
    }
    function closeCredit() {
        setCreditOpen(false);
    }

    return(
        <div className = "foodPage">
            <div className = "newTopBar">
                 {showTopBar()}
                 <button className = "cartButton" onClick={() => setCartOpen(true)}>
                        <img src="images/ShoppingCart.png" alt="Shopping Cart" className="shoppingcart-pic" />
                        {totalItemCount > 0 && (
                            <span className="cart-badge">{totalItemCount}</span>
                        )}
                    </button>
          </div>
            <div className = "catalogSection">
                <h1 className = "title">Food and Drink</h1>
                {/* <h1>Appetizers</h1>
                <div className="scroll-panel">
                    <div className="square" onClick={() => openModal("Appetizer 1")}>1</div>
                    <div className="square" onClick={() => openModal("Appetizer 2")}>2</div>
                    <div className="square" onClick={() => openModal("Appetizer 3")}>3</div>
                    <div className="square" onClick={() => openModal("Appetizer 4")}>4</div>
                    <div className="square" onClick={() => openModal("Appetizer 5")}>5</div>
                    <div className="square" onClick={() => openModal("Appetizer 6")}>6</div>
                </div> */}
                <h1>Entrees</h1>
                <div className="scroll-panel">
                    <div className="square" onClick={() => openModal("Roasted Tomato Pesto Omelet")}>
                        <img src = "images/food1.avif" alt = "Roasted Tomato Pesto Omelet" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Bacon Sausage Breakfast Burrito")}>
                        <img src = "images/food2.avif" alt = "Bacon Sausage Breakfast Burrito" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Chicago Patty Melt")}>
                        <img src = "images/food3.avif" alt = "Chicago Patty Melt" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Cacio e Pepe Rigatoni")}>
                        <img src = "images/food4.avif" alt = "Cacio e Pepe Rigatoni" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("SPAM Musubi")}>
                        <img src = "images/food5.avif" alt = "SPAM Musubi" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Kalua Pork Sandwich")}>
                        <img src = "images/food6.avif" alt = "Kalua Pork Sandwich" className = "toy"></img>
                    </div>
                </div>
                <h1>Snacks</h1>
                <div className="scroll-panel">
                    <div className="square" onClick={() => openModal("Pringles")}>
                        <img src = "images/snack1.webp" alt = "Pringles" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Muddy Bites Milk Chocolate")}>
                        <img src = "images/snack2.avif" alt = "Muddy Bites Milk Chocolate" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Pop & Sol Sea Salt and Vinegar Nut Mix")}>
                        <img src = "images/snack3.avif" alt = "Pop & Sol Sea Salt and Vinegar Nut Mix" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Vegobears Santa Monica")}>
                        <img src = "images/snack4.avif" alt = "Vegobears Santa Monica" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Better Sour Mango Gummy Shells")}>
                        <img src = "images/snack5.avif" alt = "Better Sour Mango Gummy Shells" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Diamond Bakery Guava Shortbread Cookies")}>
                        <img src = "images/snack6.avif" alt = "Diamond Bakery Guava Shortbread Cookies" className = "toy"></img>
                    </div>
                </div>
                <h1>Drinks</h1>
                <div className="scroll-panel">
                    <div className="square" onClick={() => openModal("Coca-Cola")}>
                        <img src = "images/drink1.avif" alt = "Coca-Cola" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Sprite")}>
                        <img src = "images/drink2.webp" alt = "Sprite" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Seagram's Ginger Ale")}>
                        <img src = "images/drink3.avif" alt = "Seagram's Ginger Ale" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Seagram's Seltzer Water")}>
                        <img src = "images/drink4.avif" alt = "Seagram's Seltzer Water" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Seagram's Tonic Water")}>
                        <img src = "images/drink5.avif" alt = "Seagram's Tonic Water" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("AHA Sparkling Water")}>
                        <img src = "images/drink6.avif" alt = "AHA Sparkling Water" className = "toy"></img>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div className="modal-overlay active">
                    <div className="modal-box">
                        <h2>{selectedProduct}</h2>
                        <p>Details about {selectedProduct} go here.</p>
                        <div className="modal-buttons">
                            <button onClick={addToCart}>Add to Cart</button>
                            <button onClick={closeModal}>Back</button>
                        </div>
                    </div>
                </div>
            )}

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

            {cartOpen && (
                <div className="cart-backdrop" onClick={() => setCartOpen(false)}></div>
            )}

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
    )
}