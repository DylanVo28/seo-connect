import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ApplySupplierPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background flex flex-col">
      <Card className="mt-4">
        <CardContent className="p-4 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-center">Apply to Be a Supplier</h2>
          <div className="flex flex-col gap-2">
            <Label>Business Name</Label>
            <Input />
            <Label>Category</Label>
            <Input />
            <Label>Website</Label>
            <Input />
            <Label>Description</Label>
            <Input />
            <Label>Logo</Label>
            <Button variant="outline">Upload Logo</Button>
          </div>
          <Button className="w-full mt-2">Submit for Review</Button>
        </CardContent>
      </Card>
    </div>
  );
} 