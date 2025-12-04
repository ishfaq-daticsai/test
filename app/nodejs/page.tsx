import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { ArrowLeftIcon, ArrowRightIcon, Zap, Shield, Brain, Trophy, AlertCircle } from "lucide-react";

const NodejsIntermediatePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-12 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Node.js Mastery: Intermediate → Senior
        </h1>
        <div className="flex flex-wrap justify-center gap-5 mb-8">
          <Badge variant="outline" className="px-6 py-3 text-lg font-bold border-2">
            0 Hours Deep Practice
          </Badge>
          <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            Production-Grade Backend
          </Badge>
          <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <Trophy className="w-7 h-7 mr-2" /> Used at Stripe, Vercel, Netflix
          </Badge>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Master the exact Node.js patterns that power billion-dollar backends. These are the skills that separate junior devs from senior engineers who ship reliable, scalable APIs.
        </p>
      </header>

      {/* What Big Tech Actually Tests */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Brain className="w-12 h-12 text-emerald-600" />
          What Stripe, Vercel, Uber Actually Test (2025)
        </h2>
        <Card className="border-2 shadow-2xl">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-6 text-lg font-medium">
              {[
                "Clean Architecture: routes → controllers → services → repositories",
                "Global Error Handling Middleware (not try/catch everywhere)",
                "Zod + TypeScript for runtime validation",
                "Rate limiting + Helmet + CORS properly configured",
                "AsyncLocalStorage for request context (logging, tracing)",
                "Structured logging with pino or winston",
                "Graceful shutdown & process signals",
                "Environment-based config with dotenv + validation"
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  {skill}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Node.js Power Levels */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Node.js Engineer Levels</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { level: "Junior", desc: "Express + callbacks", color: "bg-gray-600" },
            { level: "Mid", desc: "async/await + middleware", color: "bg-blue-600" },
            { level: "Senior", desc: "Clean arch + Zod + pino", color: "bg-emerald-600" },
            { level: "Staff+", desc: "AsyncLocalStorage + OpenTelemetry", color: "bg-gradient-to-r from-purple-600 to-pink-600" }
          ].map((tier) => (
            <Card key={tier.level} className={`text-white ${tier.color} border-0 shadow-xl`}>
              <CardHeader>
                <CardTitle className="text-2xl">{tier.level}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium opacity-90">{tier.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gold Tier Patterns */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-primary">Top 8 Production-Grade Patterns (2025)</h2>
        <div className="space-y-14">

          {/* 1. Clean Architecture + Zod Validation */}
          <Card className="overflow-hidden border-2 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <CardTitle className="text-2xl">1. Clean Architecture + Zod Runtime Validation</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <CodeBlock language="ts" code={`// src/schemas/user.schema.ts
import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
  }),
});

export type CreateUserInput = z.infer<typeof createUserSchema.shape.body>;

// src/controllers/user.controller.ts
import { Request, Response } from "express";
import { CreateUserInput } from "@/schemas/user.schema";
import { createUser } from "@/services/user.service";

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) => {
  const user = await createUser(req.body);
  return res.status(201).json(user);
};`} />
              <Badge className="mt-4 bg-emerald-600 text-white">Stripe / Vercel Standard</Badge>
            </CardContent>
          </Card>

          {/* 2. Global Error Handler */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
              <CardTitle className="text-2xl">2. Global Error Handling Middleware (No try/catch everywhere)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Validation Error",
      errors: err.errors.map(e => ({ path: e.path, message: e.message }))
    });
  }

  if (err.name === "PrismaClientKnownRequestError") {
    return res.status(409).json({ message: "Conflict" });
  }

  console.error("Unhandled Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
};`} />
            </CardContent>
          </Card>

          {/* 3. AsyncLocalStorage for Request Context */}
          <Card className="overflow-hidden border-2 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardTitle className="text-2xl">3. AsyncLocalStorage – Request Tracing (Netflix Style)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`import { AsyncLocalStorage } from "async_hooks";

const asyncLocalStorage = new AsyncLocalStorage<Map<string, any>>();

export const requestContextMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const store = new Map<string, any>([
    ["requestId", crypto.randomUUID()],
    ["startTime", Date.now()],
    ["user", req.user || null]
  ]);

  asyncLocalStorage.run(store, () => {
    next();
  });
};

// Usage in any service
export const getRequestId = () => {
  return asyncLocalStorage.getStore()?.get("requestId") || "unknown";
};`} />
              <Badge className="mt-4 bg-purple-600 text-white">Netflix / Uber Use This</Badge>
            </CardContent>
          </Card>

          {/* 4. Pino Structured Logging */}
          <Card>
            <CardHeader><CardTitle>4. Pino – Fast Structured Logging</CardTitle></CardHeader>
            <CardContent>
              <CodeBlock language="ts" code={`import pino from "pino";

const logger = pino({
  transport: process.env.NODE_ENV !== "production" ? { target: "pino-pretty" } : undefined,
  level: process.env.LOG_LEVEL || "info",
});

export default logger;

// Usage
logger.info({ requestId: getRequestId() }, "User created successfully");
logger.error({ err }, "Database connection failed");`} />
            </CardContent>
          </Card>

          {/* 5. Rate Limiter + Helmet + CORS */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
              <CardTitle className="text-2xl">5. Security Hardening – Production Ready</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";

app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGINS?.split(",") }));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: "Too many requests" }
}));`} />
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Red Flags */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <AlertCircle className="w-12 h-12 text-red-600" />
          Interview-Killing Mistakes (Node.js Edition)
        </h2>
        <Card className="bg-red-50 dark:bg-red-950/40 border-red-400">
          <CardContent className="p-10">
            <ul className="space-y-5 text-lg">
              {[
                "Using try/catch in every controller",
                "No input validation (raw req.body usage)",
                "Console.log in production code",
                "No rate limiting on public APIs",
                "Blocking the event loop with sync crypto/fs",
                "No graceful shutdown (process just dies)",
                "Hardcoding secrets in code",
                "Using callbacks instead of async/await"
              ].map((flag) => (
                <li key={flag} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center text-2xl">X</div>
                  <span className="font-medium">{flag}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Pro Tips */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Pro Tips That Win Senior Backend Offers</h2>
        <Card>
          <CardContent className="p-10">
            <ol className="space-y-6 text-lg">
              <li><strong>Never use try/catch in controllers</strong> — use global error handler</li>
              <li><strong>Always validate with Zod before hitting DB</strong></li>
              <li><strong>Use AsyncLocalStorage for request context</strong> — instant senior signal</li>
              <li><strong>Log with pino + requestId</strong> — production must-have</li>
              <li><strong>Graceful shutdown is non-negotiable</strong></li>
              <li><strong>Never commit .env — use runtime config</strong></li>
              <li><strong>Mention clustering + PM2 in scaling discussion</strong></li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Quick Summary */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">One-Page Senior Cheat Sheet</h2>
        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-10 text-lg">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-600">Must-Have Packages</h3>
                <ul className="space-y-3 font-medium">
                  <li>zod – runtime validation</li>
                  <li>pino – structured logging</li>
                  <li>express-rate-limit</li>
                  <li>helmet + cors</li>
                  <li>dotenv-safe</li>
                  <li>@prisma/client or mongoose</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Senior Signals</h3>
                <ul className="space-y-3 font-medium">
                  <li>Clean folder structure</li>
                  <li>Global error handler</li>
                  <li>AsyncLocalStorage</li>
                  <li>Graceful shutdown</li>
                  <li>Structured logging</li>
                  <li>Zod + TypeScript inference</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between gap-6 mt-20 pb-10">
        <Link href="/typescript" passHref legacyBehavior>
          <Button variant="outline" size="lg" className="flex items-center gap-3 text-lg px-8 py-6">
            <ArrowLeftIcon className="h-6 w-6" /> Previous: TypeScript (Intermediate)
          </Button>
        </Link>
        <Link href="/docker" passHref legacyBehavior>
          <Button size="lg" variant={"outline"} className="flex items-center gap-3 text-lg px-8 py-6">
            Next: Docker & Kubernetes <ArrowRightIcon className="h-6 w-6" />
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default NodejsIntermediatePage;