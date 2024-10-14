import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password, email, firstName, lastName } = body;
        const hasedPassword =  await bcrypt.hash(password,10)

        console.log("Attempting to connect to MongoDB...");
        await connectToMongoDB();
        console.log("Connected to MongoDB!");
        
        const newUser = await User.create({ username, password:hasedPassword, email, firstName, lastName });
        console.log("User created:", newUser);

        return NextResponse.json({ message: 'User is registered now' }, { status: 201 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: 'Error while registering user' }, { status: 500 });
    }
}

