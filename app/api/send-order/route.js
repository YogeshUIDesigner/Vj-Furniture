import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const orderData = await req.json();
        const { id, date, total, items, shippingDetails } = orderData;

        console.log('Attempting to send order email for ID:', id);

        // Using Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: "59ee0ef6-110f-4439-92c8-936ce8636abf",
                subject: `New Order Received: ${id}`,
                from_name: "VJ Furniture Orders",
                name: shippingDetails.fullName,
                email: shippingDetails.email,
                replyto: shippingDetails.email,
                message: `
New Order Details:
-----------------
Order ID: ${id}
Date: ${date}
Items: ${items}
Total Amount: ${total}

Customer Details:
-----------------
Name: ${shippingDetails.fullName}
Email: ${shippingDetails.email}
Phone: ${shippingDetails.phone}
Address: ${shippingDetails.address}, ${shippingDetails.city}, ${shippingDetails.pincode}
Payment Method: ${shippingDetails.paymentMethod.toUpperCase()}
                `
            }),
        });

        const result = await response.json();
        console.log('Web3Forms Response:', result);

        if (result.success) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, error: result.message }, { status: 500 });
        }
    } catch (error) {
        console.error('Email API Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
