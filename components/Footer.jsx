import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <div className="logo">
                            <div className="logo-icon">🏠</div>
                            <div className="logo-text">
                                VJ<br />Furniture
                                <span>Premium Living</span>
                            </div>
                        </div>
                        <a href="tel:+919876543210" className="footer-contact-btn">📞 +91 9870765966</a>
                        <a href="mailto:info@vjfurniture.in" className="footer-contact-btn">✉ info@vjfurniture.in</a>
                        <div className="footer-address">
                            Magtai Moad,<br />
                            Bichpuri Road<br />
                            Agra 282007
                            <br />
                            <Link href="/contact">Show on map</Link>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Products</h4>
                        <ul>
                            <li><Link href="/shop?category=Table">Desks</Link></li>
                            <li><Link href="/shop?category=Chair">Chairs</Link></li>
                            <li><Link href="/shop?category=Sofa">Sofas & Couches</Link></li>
                            <li><Link href="/shop?category=Storage">Storage</Link></li>
                            <li><Link href="/shop?category=Table">Tables</Link></li>
                            <li><Link href="/shop?category=Lighting">Lighting</Link></li>
                            <li><Link href="/shop?category=Accessories">Accessories</Link></li>
                        </ul>
                    </div>

                    {/* Rooms */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Rooms</h4>
                        <ul>
                            <li><Link href="/shop?category=Sofa">Living Room</Link></li>
                            <li><Link href="/shop?category=Storage">Bedroom</Link></li>
                            <li><Link href="/shop?category=Table">Kitchen</Link></li>
                            <li><Link href="/shop?category=Table">Dining Room</Link></li>
                            <li><Link href="/shop?category=Chair">Home Office</Link></li>
                            <li><Link href="/shop">Balcony & Garden</Link></li>
                        </ul>
                    </div>

                    {/* Menu */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Menu</h4>
                        <ul>
                            <li><Link href="#">Inspirations</Link></li>
                            <li><Link href="#">Offers & Promotions</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Account</h4>
                        <ul>
                            <li><Link href="/cart">Cart</Link></li>
                            <li><Link href="#">My Account</Link></li>
                            <li><Link href="#">My Orders</Link></li>
                            <li><Link href="#">Wishlist</Link></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Information</h4>
                        <ul>
                            <li><Link href="#">Track Order</Link></li>
                            <li><Link href="#">Returns</Link></li>
                            <li><Link href="#">Shipping Info</Link></li>
                            <li><Link href="#">Help</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-socials">
                        <span>Follow us</span>
                        <a href="#" className="social-link">📘 Facebook</a>
                        <a href="#" className="social-link">📸 Instagram</a>
                        <a href="#" className="social-link">🐦 Twitter</a>
                        <a href="#" className="social-link">🔗 LinkedIn</a>
                    </div>
                    <div className="footer-delivery">
                        <span className="footer-delivery-icon">🚛</span>
                        <span>Free delivery across India · Fast & reliable shipping</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
