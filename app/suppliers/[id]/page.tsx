import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function SupplierDetailPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <Card className="bg-neutral-900 text-white mt-4">
        <CardContent className="flex flex-col items-center gap-4 p-6">
          <Avatar className="w-24 h-24">
            <AvatarFallback className="bg-neutral-700 text-4xl">O</AvatarFallback>
          </Avatar>
          <div className="text-2xl font-bold">Supplier Name</div>
          <div className="text-base text-neutral-300">Link Building Services</div>
          <div className="flex gap-1 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <div className="text-center text-neutral-300 mb-4">
            Description text goes here, providing a overview of the supplier's services.
          </div>
          <div className="flex gap-3 w-full">
            <Button className="flex-1" variant="secondary">Visit Website</Button>
            <Button className="flex-1" variant="secondary">Request Info</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 