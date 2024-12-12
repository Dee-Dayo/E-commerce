import {NextRequest, NextResponse} from "next/server";
import Stripe from "stripe";

export const POST = async(request:NextRequest)=>{
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

    try {
        const reqBody = await request.json()
        const {items, email} = await reqBody;


        return NextResponse.json({message: "Hello from checkout"}, {status:200})
    } catch (error){
        return NextResponse.json({error: error}, {status:500});
    }
}