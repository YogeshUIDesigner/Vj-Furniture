import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ordersFilePath = path.join(process.cwd(), 'data', 'orders.json');

export async function GET() {
    try {
        const fileContent = fs.readFileSync(ordersFilePath, 'utf8');
        const orders = JSON.parse(fileContent);
        return NextResponse.json(orders);
    } catch (error) {
        return NextResponse.json([], { status: 200 });
    }
}

export async function POST(request) {
    try {
        const newOrder = await request.json();

        // Read existing orders
        let orders = [];
        if (fs.existsSync(ordersFilePath)) {
            const fileContent = fs.readFileSync(ordersFilePath, 'utf8');
            orders = JSON.parse(fileContent);
        }

        // Add new order to the beginning
        orders.unshift({
            ...newOrder,
            createdAt: new Date().toISOString()
        });

        // Save back to file
        fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));

        return NextResponse.json({ success: true, order: newOrder });
    } catch (error) {
        console.error('Order API Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
