// app/system-design/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Timer, Target } from "lucide-react";

export default function SystemDesignPage() {
  return (
    <>
      {/* Reuse same header or import a Layout if you make one */}
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link type="button" href="/" className="border flex items-center space-x-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
            <span >Back to Dashboard</span>
          </Link>
          <h1 className="text-2xl font-bold">System Design</h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">System Design Mastery</CardTitle>
            <CardDescription>
              Learn how to design scalable, reliable, and efficient systems — a critical skill for senior and staff-level roles.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <div className="flex items-center space-x-3">
              <Timer className="w-6 h-6 text-muted-foreground" />
              <span>Estimated time: hours</span>
            </div>
            <div className="flex items-center space-x-3">
              <Target className="w-6 h-6 text-muted-foreground" />
              <span>Target roles: Senior FE/BE, Staff Engineer, Architect</span>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Topics to Master</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Design TinyURL / URL Shortener",
                "Design Instagram / Social Feed",
                "Design Twitter / Real-time Messaging",
                "Design Uber / Ride Sharing",
                "Design Netflix / Video Streaming",
                "Rate Limiting & API Gateway",
                "Caching Strategies (Redis, CDN)",
                "Database Sharding & Replication",
                "Message Queues (Kafka, RabbitMQ)",
                "Consistency vs Availability (CAP)",
              ].map((topic) => (
                <Card key={topic} className="p-4 hover:bg-accent transition">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{topic}</p>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Recommended Resources</h2>
            <div className="space-y-4">
              <Button asChild variant="outline" className="w-full justify-start text-left">
                <Link href="https://github.com/donnemartin/system-design-primer" target="_blank">
                  <ExternalLink className="w-4 h-4 mr-3" />
                  System Design Primer (Best resource
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start text-left">
                <Link href="https://www.youtube.com/c/SystemDesignInterview" target="_blank">
                  <ExternalLink className="w-4 h-4 mr-3" />
                  System Design Interview YouTube Channel
                </Link>
              </Button>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild variant={"outline"}>
            <Link href="/">
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}