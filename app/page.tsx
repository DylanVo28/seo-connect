"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import MainLayout from "@/components/shared/MainLayout";

export default function MainLayoutPage() {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const loginToken = window.localStorage.getItem("loginToken");
        if (!loginToken) {
            router.push("/login");
        } else {
            setAuthorized(true);
        }
    });

    if (!authorized) {
        return null;
    }

    return <MainLayout />;
}
