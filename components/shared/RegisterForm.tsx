"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  fullname: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("https://662dd683a7dda1fa378b6471.mockapi.io/get/AllProducts/accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullname,
          email: data.email,
          password: data.password,
        }),
      });
      if (!res.ok) throw new Error("Failed to register");
      const result = await res.json();
      alert("Đăng ký thành công!\n" + JSON.stringify(result, null, 2));
      reset();
    } catch (err: any) {
      alert("Đăng ký thất bại: " + err.message);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto p-6 rounded-2xl shadow-xl">
      <CardContent className="flex flex-col gap-5 p-0">
        <h1 className="text-2xl font-bold text-center mb-1">SEO.Connect</h1>
        <h2 className="text-center text-base font-medium text-muted-foreground mb-2">Create Your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" type="text" placeholder="Full Name" {...register("fullname")} />
            {errors.fullname && <span className="text-xs text-red-500">{errors.fullname.message}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Email Address" {...register("email")} />
            {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Password" {...register("password")} />
            {errors.password && <span className="text-xs text-red-500">{errors.password.message}</span>}
          </div>
          <Button type="submit" className="mt-2 w-full" disabled={isSubmitting}>Sign Up</Button>
        </form>
        <p className="text-center text-sm mt-2">
          Already have an account? <a href="/login" className="underline text-muted-foreground">Log in</a>
        </p>
        <small className="block text-center text-xs text-muted-foreground mt-2">
          By signing up, you agree to our <a href="#" className="underline">Terms</a> & <a href="#" className="underline">Privacy Policy</a>
        </small>
      </CardContent>
    </Card>
  );
} 