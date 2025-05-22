"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import MainLayout from "@/components/shared/MainLayout";

export default function MainLayoutPage() {
    return <MainLayout />;
}
//
// export default function HomePage() {
//   const router = useRouter();
//   const [authorized, setAuthorized] = useState(false);
//
//   useEffect(() => {
//     const loginToken = window.localStorage.getItem("loginToken");
//     if (!loginToken) {
//       router.push("/login");
//     } else {
//       setAuthorized(true);
//     }
//   });
//
//   if (!authorized) {
//     return null;
//   }
//   return (
//     <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
//       <h2 className="text-lg font-semibold my-4">Trending Posts</h2>
//       <div className="flex flex-col gap-2">
//         <Card>
//           <CardContent className="p-3">
//             Post Title{" "}
//             <span className="text-xs text-muted-foreground">21 ❤️ 5 💬</span>
//           </CardContent>
//         </Card>
//       </div>
//       <h2 className="text-lg font-semibold my-4">Bookmarked Posts</h2>
//       <div className="flex flex-col gap-2">
//         <Card>
//           <CardContent className="p-3">
//             Post Title{" "}
//             <span className="text-xs text-muted-foreground">16 ❤️ 2 💬</span>
//           </CardContent>
//         </Card>
//       </div>
//       <h2 className="text-lg font-semibold my-4">Upcoming Events</h2>
//       <div className="flex flex-col gap-2">
//         <Card>
//           <CardContent className="p-3">
//             Mark-tan August 3{" "}
//             <span className="text-xs text-muted-foreground">RSVP</span>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
