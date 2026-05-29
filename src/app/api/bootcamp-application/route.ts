import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/admin";
import {
  normalizeSriLankaPhone,
  validateEmail,
  validateName,
  validatePhone,
} from "@/lib/validation";

export type BootcampApplicationPayload = {
  fullName: string;
  email: string;
  phone: string;
  q1TimeSpent: string;
  q2AiUsage: string;
  q3SuccessGoal: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BootcampApplicationPayload;

    const nameError = validateName(body.fullName ?? "");
    const emailError = validateEmail(body.email ?? "");
    const phoneError = validatePhone(body.phone ?? "");

    if (nameError || emailError || phoneError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          fields: {
            fullName: nameError,
            email: emailError,
            phone: phoneError,
          },
        },
        { status: 400 },
      );
    }

    if (!body.q1TimeSpent || !body.q2AiUsage || !body.q3SuccessGoal) {
      return NextResponse.json(
        { error: "Please complete all survey questions." },
        { status: 400 },
      );
    }

    const email = body.email.trim().toLowerCase();
    const phone = normalizeSriLankaPhone(body.phone)!;

    const supabase = createSupabaseAdmin();

    const { error } = await supabase.from("bootcamp_applications").upsert(
      {
        email,
        full_name: body.fullName.trim(),
        phone,
        q1_time_spent: body.q1TimeSpent,
        q2_ai_usage: body.q2AiUsage,
        q3_success_goal: body.q3SuccessGoal,
      },
      { onConflict: "email" },
    );

    if (error) {
      console.error("Supabase upsert error:", error);
      return NextResponse.json(
        { error: "Could not save your application. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("bootcamp-application error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
