import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-56 bg-muted/50 p-4 min-h-screen border-r">
        <div className="font-bold mb-4">Admin Dashboard</div>
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start">Dashboard</Button>
          <Button variant="ghost" className="justify-start">Pending Suppliers</Button>
          <Button variant="ghost" className="justify-start">Pending Events</Button>
          <Button variant="ghost" className="justify-start">Moderate Posts</Button>
          <Button variant="ghost" className="justify-start">User Management</Button>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card><CardContent className="p-4 text-center"><div className="text-2xl font-bold">8</div><div className="text-xs text-muted-foreground">Submissions</div></CardContent></Card>
          <Card><CardContent className="p-4 text-center"><div className="text-2xl font-bold">150</div><div className="text-xs text-muted-foreground">Total Users</div></CardContent></Card>
          <Card><CardContent className="p-4 text-center"><div className="text-2xl font-bold">24</div><div className="text-xs text-muted-foreground">Active Posts</div></CardContent></Card>
          <Card><CardContent className="p-4 text-center"><div className="text-2xl font-bold">2</div><div className="text-xs text-muted-foreground">Reported Content</div></CardContent></Card>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Pending Suppliers */}
          <div>
            <div className="font-semibold mb-2">Pending Suppliers</div>
            {[1,2].map(i => (
              <Card key={i} className="mb-2">
                <CardContent className="flex items-center justify-between p-3">
                  <div>
                    <div className="font-semibold">Supplier Name</div>
                    <div className="w-32 h-2 bg-muted rounded my-1" />
                  </div>
                  <Button size="sm">Approve</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Pending Events */}
          <div>
            <div className="font-semibold mb-2">Pending Events</div>
            {[1,2].map(i => (
              <Card key={i} className="mb-2">
                <CardContent className="flex items-center justify-between p-3">
                  <div>
                    <div className="font-semibold">Event Name</div>
                    <div className="w-32 h-2 bg-muted rounded my-1" />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Approve</Button>
                    <Button size="sm" variant="outline">Reject</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Reported Posts */}
        <div>
          <div className="font-semibold mb-2">Reported Posts</div>
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map(i => (
              <Card key={i} className="mb-2">
                <CardContent className="flex flex-col gap-2 p-3">
                  <div className="font-semibold">Post Title</div>
                  <div className="w-full h-2 bg-muted rounded" />
                  <div className="w-2/3 h-2 bg-muted rounded" />
                  <Button size="sm" variant="outline">View</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 