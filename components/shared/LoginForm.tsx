"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { generateRandomToken } from "@/common";
import { useUser } from "@/contexts/UserContext"

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const router = useRouter();
  const { setUser } = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(
        "https://662dd683a7dda1fa378b6471.mockapi.io/get/AllProducts/accounts",
      );
      if (!res.ok) throw new Error("Failed to fetch accounts");
      const accounts = await res.json();
      const found = accounts.find(
        (acc: any) =>
          acc.email === data.email && acc.password === data.password,
      );
      if (found) {
        const token = generateRandomToken();
        window.localStorage.setItem("loginToken", JSON.stringify(token));
        setUser(found);
        router.push("/community");
      } else {
        alert("Email or password is incorrect!");
      }
    } catch (err: any) {
      alert("Sign in failure: " + err.message);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto p-6 rounded-2xl shadow-xl">
      <CardContent className="flex flex-col gap-5 p-0">
        <h1 className="text-2xl font-bold text-center mb-1">SEO.Connect</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="text-right mb-1">
            <a href="#" className="text-sm underline text-muted-foreground">
              Forgot password?
            </a>
          </div>
          <Button type="submit" className="mt-2 w-full" disabled={isSubmitting}>
            Log in
          </Button>
        </form>
        <p className="text-center text-sm mt-2">
          Don't have an account?{" "}
          <a href="/register" className="underline text-muted-foreground">
            Sign up
          </a>
        </p>
      </CardContent>
    </Card>
  );
}
