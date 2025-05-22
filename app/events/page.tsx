import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Bookmark } from "lucide-react";

const events = [
  {
    title: "Search Optimization Summit",
    date: "June 27 10:00 AM GMT",
    location: "London",
    tags: ["SEO", "Link Building"],
    sponsored: true,
  },
  {
    title: "Digital Marketing Conference",
    date: "July 14 9:00 AM",
    location: "New York",
    tags: ["SEO", "Link Building"],
    sponsored: false,
  },
  {
    title: "SEO Webinar Series",
    date: "August 5 2:00 CDT",
    location: "Online",
    tags: ["SEO"],
    sponsored: false,
  },
];

export default function EventsPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <h2 className="text-xl font-bold my-4 text-center">Events</h2>
      <div className="flex flex-wrap gap-2 mb-4 px-2">
        <Button size="sm" variant="outline">All Events</Button>
        <Button size="sm" variant="outline">Upcoming This Month</Button>
        <Button size="sm" variant="outline">By Region</Button>
        <Button size="sm" variant="outline">By Type</Button>
        <Button size="sm" variant="outline">Sponsored</Button>
        <Button size="sm" variant="ghost">Clear</Button>
      </div>
      <div className="flex flex-col gap-3">
        {events.map((event, idx) => (
          <Card key={idx} className="flex items-center gap-3 p-3">
            <div className="w-16 h-16 bg-muted rounded-lg" />
            <div className="flex-1">
              <div className="font-semibold">{event.title}</div>
              <div className="text-xs text-muted-foreground">{event.date} • {event.location}</div>
              <div className="flex gap-1 mt-1">
                {event.tags.map(tag => (
                  <span key={tag} className="bg-muted px-2 py-0.5 rounded text-xs">{tag}</span>
                ))}
              </div>
            </div>
            <Bookmark className="text-muted-foreground" />
          </Card>
        ))}
        <Button className="rounded-full w-12 h-12 flex items-center justify-center fixed bottom-8 right-8 shadow-lg" size="icon">
          <Plus size={24} />
        </Button>
      </div>
    </div>
  );
} 