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
                    <div className="square" onClick={() => openModal("Toy 1")}>1</div>
                    <div className="square" onClick={() => openModal("Toy 2")}>2</div>
                    <div className="square" onClick={() => openModal("Toy 3")}>3</div>
                    <div className="square" onClick={() => openModal("Toy 4")}>4</div>
                    <div className="square" onClick={() => openModal("Toy 5")}>5</div>
                    <div className="square" onClick={() => openModal("Toy 6")}>6</div>
                </div>
                <h1>Clothing</h1>
                <div className="scroll-panel">
                    <div className="square" onClick={() => openModal("Clothing 1")}>1</div>
                    <div className="square" onClick={() => openModal("Clothing 2")}>2</div>
                    <div className="square" onClick={() => openModal("Clothing 3")}>3</div>
                    <div className="square" onClick={() => openModal("Clothing 4")}>4</div>
                    <div className="square" onClick={() => openModal("Clothing 5")}>5</div>
                    <div className="square" onClick={() => openModal("Clothing 6")}>6</div>
                </div>
                <h1>Merchandice</h1>
                <div className="scroll-panel">
                    <div className="square" onClick={() => openModal("Merch 1")}>1</div>
                    <div className="square" onClick={() => openModal("Merch 2")}>2</div>
                    <div className="square" onClick={() => openModal("Merch 3")}>3</div>
                    <div className="square" onClick={() => openModal("Merch 4")}>4</div>
                    <div className="square" onClick={() => openModal("Merch 5")}>5</div>
                    <div className="square" onClick={() => openModal("Merch 6")}>6</div>
                </div>
                <h1>Airplane Memorabilia</h1>
                <div className="scroll-panel">
                    <div className="square" onClick={() => openModal("Airplane Item 1")}>1</div>
                    <div className="square" onClick={() => openModal("Airplane Item 2")}>2</div>
                    <div className="square" onClick={() => openModal("Airplane Item 3")}>3</div>
                    <div className="square" onClick={() => openModal("Airplane Item 4")}>4</div>
                    <div className="square" onClick={() => openModal("Airplane Item 5")}>5</div>
                    <div className="square" onClick={() => openModal("Airplane Item 6")}>6</div>
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
                    <button className="BuyNowButton" >Buy Now</button>
                </div>
            </div>

            {cartOpen && (
                <div className="cart-backdrop" onClick={() => setCartOpen(false)}></div>
            )}

            {menuOpen && (
                <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>
            )}


        </div>
    )
}