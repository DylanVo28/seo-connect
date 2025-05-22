import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function SearchPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Input placeholder="link building" className="flex-1" />
          <Button variant="outline">Search</Button>
        </div>
        <Tabs defaultValue="posts">
          <TabsList className="w-full flex justify-between mb-2">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <Card className="mb-2">
              <CardContent className="flex gap-3 p-3 items-center">
                <Avatar className="w-12 h-12"><AvatarFallback>P</AvatarFallback></Avatar>
                <div className="flex-1">
                  <div className="font-semibold">Post title</div>
                  <div className="text-xs text-muted-foreground">Post · On-Page SEO</div>
                  <div className="text-xs text-muted-foreground">Brief excerpt of the post</div>
                </div>
                <Button size="sm" variant="outline">Contact</Button>
              </CardContent>
            </Card>
            <div className="flex gap-4 border-b pb-2 mb-2">
              <Button variant="link" className="p-0 h-auto min-w-0">Posts</Button>
              <Button variant="link" className="p-0 h-auto min-w-0">Followers</Button>
              <Button variant="link" className="p-0 h-auto min-w-0">Events</Button>
            </div>
            <div className="font-semibold mb-2">Users</div>
            <Card className="mb-2">
              <CardContent className="flex gap-3 p-3 items-center">
                <Avatar className="w-10 h-10"><AvatarFallback>J</AvatarFallback></Avatar>
                <div className="flex-1">
                  <div className="font-semibold">Post title</div>
                  <div className="text-xs text-muted-foreground">Jon Smith</div>
                  <div className="text-xs text-muted-foreground">SEO Manager</div>
                </div>
                <Button size="sm">Follow</Button>
              </CardContent>
            </Card>
            {[1,2,3].map(i => (
              <Card key={i} className="mb-2">
                <CardContent className="flex gap-3 p-3 items-center">
                  <Avatar className="w-10 h-10"><AvatarFallback>U</AvatarFallback></Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">Post title</div>
                    <div className="text-xs text-muted-foreground">Brief excerpt of espuntion</div>
                  </div>
                  <Button size="icon" variant="ghost">&gt;</Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 