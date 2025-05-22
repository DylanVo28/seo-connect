import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EventDetailPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <Card className="mt-4">
        <CardContent className="p-4">
          <div className="w-full h-40 bg-muted rounded-lg mb-4" />
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-xl font-bold">SEO Conference</div>
              <div className="text-xs text-muted-foreground">June 27, 2024 • 10:00 AM • London</div>
            </div>
            <span className="bg-primary text-white px-2 py-1 rounded text-xs">Sponsored</span>
          </div>
          <div className="flex gap-2 mb-2">
            <Button className="flex-1">RSVP</Button>
            <Button className="flex-1" variant="secondary">Add to Calendar</Button>
          </div>
          <div className="flex gap-2 mb-2">
            <span className="bg-muted px-2 py-0.5 rounded text-xs">SEO</span>
            <span className="bg-muted px-2 py-0.5 rounded text-xs">TECHNICAL</span>
            <span className="bg-muted px-2 py-0.5 rounded text-xs">LOCAL</span>
          </div>
          <div className="font-semibold mt-2 mb-1">Description</div>
          <div className="text-sm text-muted-foreground mb-3">
            Additional information about the event goes here.
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-muted rounded-full" />
            <div>
              <div className="font-semibold">Organizer Name</div>
              <div className="text-xs text-muted-foreground">Organizer description or profile link</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground mb-2">
            You and 23 others are attending
          </div>
          <div className="font-semibold mt-2 mb-1">Related Events</div>
        </CardContent>
      </Card>
    </div>
  );
} 