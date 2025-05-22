import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ProfileForm() {
  return (
    <Card className="w-full max-w-md mx-auto p-6 rounded-2xl shadow-xl">
      <CardContent className="flex flex-col gap-5 p-0">
        <div className="flex justify-center mb-2">
          <Avatar className="w-16 h-16 cursor-pointer border-2 border-muted-foreground/20">
            <AvatarFallback>
              <span className="text-2xl">✏️</span>
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="fullname">Full Name</Label>
          <Input id="fullname" type="text" placeholder="Full Name" required />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" required />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="bio">Bio</Label>
          <Input id="bio" placeholder="Bio" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>SEO Interests</Label>
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="outline" className="rounded-full px-4 py-1 text-sm">Content</Button>
            <Button type="button" variant="outline" className="rounded-full px-4 py-1 text-sm">Link Building</Button>
            <Button type="button" variant="outline" className="rounded-full px-4 py-1 text-sm">Local SEO</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 