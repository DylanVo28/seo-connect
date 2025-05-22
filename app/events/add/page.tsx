import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function AddEventPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-neutral-900 pb-20">
      <Card className="bg-neutral-900 text-white mt-4">
        <CardContent className="p-4 flex flex-col gap-4">
          <div className="font-semibold text-lg mb-2">Basic Info</div>
          <div className="flex gap-2">
            <Input placeholder="Event Name" className="bg-neutral-800 text-white" />
            <Input placeholder="Date" className="bg-neutral-800 text-white" />
            <Input placeholder="Time" className="bg-neutral-800 text-white" />
          </div>
          <Input placeholder="Location (e.g. 'London' or select 'Online')" className="bg-neutral-800 text-white" />
          <div className="flex items-center gap-2">
            <Label htmlFor="online" className="text-white">Online</Label>
            <Switch id="online" />
          </div>
          <div className="font-semibold mt-2">Tags & Category</div>
          <div className="flex gap-2">
            <Input placeholder="Event Type" className="bg-neutral-800 text-white" />
            <Button variant="secondary">+ Add Tag</Button>
          </div>
          <div className="font-semibold mt-2">Links</div>
          <Input placeholder="Website" className="bg-neutral-800 text-white" />
          <div className="font-semibold mt-2">Description & Image</div>
          <Textarea placeholder="Description" className="bg-neutral-800 text-white" />
          <div className="w-full h-32 bg-neutral-700 rounded-lg flex items-center justify-center mt-2">
            <span className="text-neutral-400">Upload Image</span>
          </div>
          <Button className="w-full mt-4" variant="secondary">Submit Event</Button>
        </CardContent>
      </Card>
    </div>
  );
} 