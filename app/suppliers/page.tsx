import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { MessageCircle, Heart } from "lucide-react";

const suppliers = [
  { name: "Supplier name", category: "Service category", sponsored: true },
  { name: "Supplier name", category: "Service category", sponsored: false },
  { name: "Supplier name", category: "Service category", sponsored: false },
];

export default function SuppliersPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <div className="flex flex-col gap-3 mt-4">
        {suppliers.map((s, idx) => (
          <Card key={idx} className="flex items-center gap-3 p-3">
            <Avatar>
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-semibold">{s.name}</div>
              <div className="text-xs text-muted-foreground">{s.category}</div>
              {s.sponsored && (
                <span className="text-xs text-primary font-bold">SPONSORED</span>
              )}
            </div>
            <Button size="sm" variant="outline">
              View Profile
            </Button>
          </Card>
        ))}
        <Button className="mt-2 w-full" variant="secondary">
          Apply to Be a Supplier
        </Button>
      </div>
      <Card className="mt-4">
        <CardContent className="p-4">
          {/* Post Image */}
          <div className="w-full h-48 bg-muted rounded-lg mb-4" />
          {/* Like & Comment */}
          <div className="flex items-center gap-6 mb-2">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Heart size={18} /> <span>12</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MessageCircle size={18} /> <span>5</span>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Comments */}
      <div className="mt-4 px-2">
        <div className="font-semibold mb-2">Comment</div>
        <div className="flex items-center gap-2 mb-4">
          <Avatar className="w-8 h-8">
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div className="font-medium">Name</div>
        </div>
        {/* Add more comments here */}
        <Input placeholder="Add a comment..." />
      </div>
    </div>
  );
} 