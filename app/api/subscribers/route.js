import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const subscribersFilePath = path.join(process.cwd(), 'data', 'subscribers.json');

export async function GET() {
    try {
        const fileContent = fs.readFileSync(subscribersFilePath, 'utf8');
        const subscribers = JSON.parse(fileContent);
        return NextResponse.json(subscribers);
    } catch (error) {
        return NextResponse.json([], { status: 200 });
    }
}

export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
        }

        // Read existing subscribers
        let subscribers = [];
        if (fs.existsSync(subscribersFilePath)) {
            const fileContent = fs.readFileSync(subscribersFilePath, 'utf8');
            subscribers = JSON.parse(fileContent);
        }

        // Check if already subscribed
        if (subscribers.find(s => s.email === email)) {
            return NextResponse.json({ success: true, message: 'Already subscribed' });
        }

        // Add new subscriber
        subscribers.unshift({
            email,
            subscribedAt: new Date().toISOString()
        });

        // Save back to file
        fs.writeFileSync(subscribersFilePath, JSON.stringify(subscribers, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Subscribers API Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
