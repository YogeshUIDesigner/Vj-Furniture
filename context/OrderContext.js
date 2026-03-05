'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
    const [orders, setOrders] = useState([]);

    // Load orders from local storage on mount
    useEffect(() => {
        const savedOrders = localStorage.getItem('vj-furniture-orders');
        if (savedOrders) {
            setOrders(JSON.parse(savedOrders));
        }
    }, []);

    // Save orders to local storage when they change
    useEffect(() => {
        localStorage.setItem('vj-furniture-orders', JSON.stringify(orders));
    }, [orders]);

    const addOrder = (order) => {
        setOrders((prevOrders) => [order, ...prevOrders]);
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrders() {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrders must be used within an OrderProvider');
    }
    return context;
}
