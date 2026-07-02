function ShoppingPage(){
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

    function clearCart() {
        setCartItems([]);
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

    const [creditOpen, setCreditOpen] = React.useState(false);
    function openCredit() {
        setCreditOpen(true);
    }
    function closeCredit() {
        setCreditOpen(false);
    }

    const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
                <h1 className = "title">Shopping</h1>
                <h1>Toys</h1>
                <div className="scroll-panel">
                    <div className="square" onClick={() => openModal("Model Boeing 737")}>
                        <img src = "images/airplanetoy.jpg" alt = "Model Boeing 737" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("AA Plush Plane")}>
                        <img src = "images/toy2.webp" alt = "AA Plush Plane" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Delta Plush Plane")}>
                        <img src = "images/toy3.webp" alt = "Delta Plush Plane" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Blue Angel Plush Plane")}>
                        <img src = "images/toy4.avif" alt = "Blue Angel Plush Plane" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Southwest Plush Plane")}>
                        <img src = "images/toy5.avif" alt = "Southwest Plush Plane" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Space Shuttle Plush")}>
                        <img src = "images/toy6.avif" alt = "Space Shuttle Plush" className = "toy"></img>
                    </div>
                </div>
                <h1>Clothing</h1>
                <div className="scroll-panel">
                    <div className="square" onClick={() => openModal("AA Sweatshirt")}>
                        <img src = "images/AASweatShirt2.webp" alt = "AA Sweatshirt" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("AA Hoodie")}>
                        <img src = "images/airlinesweatshirt.webp" alt = "AA Hoodie" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Clothing 3")}>
                        <img src = "images/hoodie2.webp" alt = "Piedmont Livery Hoodie" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("US Airways Livery Hoodie")}>
                        <img src = "images/hoodie3.webp" alt = "US Airways Livery Hoodie" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("AA Zipped Hoodie")}>
                        <img src = "images/hoodie4.webp" alt = "AA Zipped Hoodie" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("TWA Black Bomber")}>
                        <img src = "images/hoodie5.webp" alt = "TWA Black Bomber" className = "toy"></img>
                    </div>
                </div>
                
                {/* <h1>Merchandice</h1>
                <div className="scroll-panel">
                    <div className="square" onClick={() => openModal("Merch 1")}>1</div>
                    <div className="square" onClick={() => openModal("Merch 2")}>2</div>
                    <div className="square" onClick={() => openModal("Merch 3")}>3</div>
                    <div className="square" onClick={() => openModal("Merch 4")}>4</div>
                    <div className="square" onClick={() => openModal("Merch 5")}>5</div>
                    <div className="square" onClick={() => openModal("Merch 6")}>6</div>
                </div> */}
                
                <h1>Airplane Mugs</h1>
                <div className="scroll-panel">
                    <div className="square" onClick={() => openModal("Air India Mug")}>
                        <img src = "images/airlinemug3.avif" alt = "Air Cal Mug" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("New Zealand Air Mug")}>
                        <img src = "images/airlinemug4.webp" alt = "New Zealand Air Mug" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Alaskan Costal Airlines Mug")}>
                        <img src = "images/airlinemug5.webp" alt = "Alaskan Costal Airlines Mug" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Air Cal Mug")}>
                        <img src = "images/airlinemug.avif" alt = "Air Cal Mug" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("Air France Mug")}>
                        <img src = "images/airlinemug2.avif" alt = "Air France Mug" className = "toy"></img>
                    </div>
                    <div className="square" onClick={() => openModal("ANA Mug")}>
                        <img src = "images/airlinemug6.avif" alt = "ANA Mug" className = "toy"></img>
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
                    <button className="BuyNowButton" onClick = {setCreditOpen}>Buy Now</button>
                </div>
            </div>

            {cartOpen && (
                <div className="cart-backdrop" onClick={() => setCartOpen(false)}></div>
            )}

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
                            <button onClick={() => {clearCart(); closeCredit(); setCartOpen(false)}}>Pay</button>
                            <button onClick={closeCredit}>Back</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}