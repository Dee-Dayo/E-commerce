import {NextRequest, NextResponse} from "next/server";
import {adminDB} from "@/firebaseAdmin";

export const POST = async (request: NextRequest) => {
    try {
        const reqBody = await request.json();
        const {cart, email, id, totalAmt} = await reqBody.json();

        const orderitem = {
            amount: totalAmt,
            items: cart || [],
        };

        if (cart.length){
            const userOrderRef = adminDB.collection
            ("users").doc(email).collection("orders").doc(id);

            const userDoc = await userOrderRef.get();
            if (!userDoc?.exists){
                await userOrderRef.set({email})
            }
            await userOrderRef.set({value: orderitem},
                {merge: true})
        }

        return NextResponse.json({
            success: true,
            message: "Order saved successfully"
        },
            {status:200});

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        })
    }
}