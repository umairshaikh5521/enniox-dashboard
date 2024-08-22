"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";



export const getAllUsers = async () => {
      const user = await currentUser();
    if (!user) {
        return { error: "Unauthorized" }
      }
    
      const dbUser = await getUserById(user.id);
    
      if (!dbUser) {
        return { error: "Unauthorized" }
      }
    const users = await db.user.findMany();
    return users;
}