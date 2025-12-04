"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Topic {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  difficulty: "Easy" | "Intermediate" | "Advanced" | "System Design";
  priority: "High" | "Medium" | "Low";
  path: string;
}

// This should ideally be fetched from a shared source or API
const topics: Topic[] = [
  {
    id: "testing-techniques",
    title: "Testing Techniques",
    description: "Master various testing methodologies and tools.",
    timeEstimate: "2h",
    difficulty: "Intermediate",
    priority: "High",
    path: "/testing",
  },
  {
    id: "rest-api",
    title: "REST API",
    description: "Intermediate + Advanced REST API concepts and design.",
    timeEstimate: "4h",
    difficulty: "Advanced",
    priority: "High",
    path: "/rest-api",
  },
  {
    id: "problem-solving-intermediate",
    title: "Problem Solving (Intermediate)",
    description: "Enhance your algorithmic thinking.",
    timeEstimate: "6h",
    difficulty: "Intermediate",
    priority: "High",
    path: "/problem-solving-intermediate",
  },
  {
    id: "problem-solving-advanced",
    title: "Problem Solving (Advanced)",
    description: "Tackle complex algorithms and data structures.",
    timeEstimate: "8h",
    difficulty: "Advanced",
    priority: "High",
    path: "/problem-solving-advanced",
  },
  {
    id: "react",
    title: "React (Intermediate)",
    description: "Deep dive into React patterns, hooks, and performance.",
    timeEstimate: "5h",
    difficulty: "Intermediate",
    priority: "High",
    path: "/react",
  },
  {
    id: "typescript",
    title: "TypeScript (Intermediate)",
    description: "Advanced typing, generics, utility types.",
    timeEstimate: "3h",
    difficulty: "Intermediate",
    priority: "High",
    path: "/typescript",
  },
  {
    id: "nodejs",
    title: "Node.js (Intermediate)",
    description: "Backend patterns, Express, performance, security.",
    timeEstimate: "4h",
    difficulty: "Intermediate",
    priority: "Medium",
    path: "/nodejs",
  },
  {
    id: "docker",
    title: "Docker (Intermediate)",
    description: "Containerization, Docker Compose, best practices.",
    timeEstimate: "3h",
    difficulty: "Intermediate",
    priority: "Medium",
    path: "/docker",
  },
  {
    id: "aws",
    title: "AWS (Intermediate)",
    description: "EC2, S3, Lambda, RDS, VPC, IAM essentials.",
    timeEstimate: "5h",
    difficulty: "Intermediate",
    priority: "Medium",
    path: "/aws",
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Design scalable systems like Twitter, Netflix, Uber.",
    timeEstimate: "6h",
    difficulty: "System Design",
    priority: "High",
    path: "/system-design",
  },
  {
    id: "cheat-sheet",
    title: "Quick Revision Cheat Sheet",
    description: "One-page summary of all key concepts.",
    timeEstimate: "1h",
    difficulty: "Easy",
    priority: "Low",
    path: "/cheat-sheet",
  },
];

export default function CompletedPage() {
  const [progress, setProgress] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem("topicProgress");
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress from localStorage");
      }
    }
  }, []);

  const completedTopics = topics.filter(topic => progress[topic.id]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Completed Topics</h1>

      {completedTopics.length === 0 ? (
        <p className="text-center text-muted-foreground">No topics completed yet. Keep learning!</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {completedTopics.map((topic) => (
            <Card key={topic.id} className="ring-2 ring-green-500">
              <CardHeader>
                <CardTitle className="text-lg">{topic.title}</CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">{topic.timeEstimate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span
                      className={`font-medium ${
                        topic.difficulty === "Easy"
                          ? "text-green-600"
                          : topic.difficulty === "Intermediate"
                          ? "text-yellow-600"
                          : topic.difficulty === "Advanced"
                          ? "text-red-600"
                          : "text-purple-600"
                      }`}
                    >
                      {topic.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Priority:</span>
                    <Badge
                      variant={
                        topic.priority === "High"
                          ? "destructive"
                          : topic.priority === "Medium"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {topic.priority}
                    </Badge>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-end">
                <Link href={topic.path}>
                  <Button size="sm" variant={"outline"}>View Topic</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
