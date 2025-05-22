import { Card, CardContent } from "@/components/ui/card";
export default function NotificationsPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <h2 className="text-lg font-semibold my-4">Today</h2>
      <div className="flex flex-col gap-2">
        <Card>
          <CardContent className="p-3">New comment on your post <span className="text-xs text-muted-foreground">2h ago</span></CardContent>
        </Card>
        <Card>
          <CardContent className="p-3">Your supplier listing was approved <span className="text-xs text-muted-foreground">6h ago</span></CardContent>
        </Card>
      </div>
      <h2 className="text-lg font-semibold my-4">Yesterday</h2>
      <div className="flex flex-col gap-2">
        <Card>
          <CardContent className="p-3">You were mentioned in a post <span className="text-xs text-muted-foreground">10h ago</span></CardContent>
        </Card>
      </div>
    </div>
  );
} 