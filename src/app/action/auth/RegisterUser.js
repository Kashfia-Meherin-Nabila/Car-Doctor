"use server";

import db, { collectionNamesObj } from "@/lib/db";

export const RegisterUser =async (payload) => {
    const userCollection = db (collectionNamesObj.userCollection)
    // validation
    
    const {email, password} =payload;
    if (!email || !password) return {success: false};

    const user =await userCollection.findOne({email: payload.email})

    if(!user) {
        const result = await userCollection.insertOne(payload);

    return result;
    }

    return {success: false};
}