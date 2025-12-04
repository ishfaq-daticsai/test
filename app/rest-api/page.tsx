import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { ArrowLeftIcon, ArrowRightIcon, Zap, Shield, Brain, Trophy, AlertCircle, Table2, Settings, Lock, GitBranch } from "lucide-react";

const RestApiPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-12 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          REST API Design & Security
        </h1>
        <div className="flex flex-wrap justify-center gap-5 mb-8">
          <Badge variant="outline" className="px-6 py-3 text-lg font-bold border-2">
            0 Hours Deep Practice
          </Badge>
          <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            Production-Grade APIs
          </Badge>
          <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-pink-600 to-red-600 text-white">
            <Trophy className="w-7 h-7 mr-2" /> Used at Google, Meta, Amazon
          </Badge>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Master the art of designing, securing, and scaling RESTful APIs, covering both intermediate and advanced concepts for real-world applications.
        </p>
      </header>

      {/* What HackerRank Usually Asks */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Brain className="w-12 h-12 text-purple-600" />
          What Google, Meta, Amazon Actually Test (2025)
        </h2>
        <Card className="border-2 shadow-2xl">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-6 text-lg font-medium">
              {[
                "Design a scalable REST API for a social media platform.",
                "Implement an OAuth2 client credentials flow for secure API access.",
                "Explain and implement different API versioning strategies.",
                "Design a robust rate-limiting mechanism for a public API.",
                "Discuss and apply HATEOAS principles in an API response."
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

      {/* Core Concepts Cheat Sheet */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Table2 className="w-12 h-12 text-indigo-600" />
          Core Concepts Cheat Sheet
        </h2>
        <div className="space-y-8">
          <Card>
            <CardHeader><CardTitle>HTTP Status Codes (Essentials)</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meaning</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                    <tr><td className="px-6 py-4 whitespace-nowrap">200 OK</td><td>Success</td><td>Standard response for successful HTTP requests.</td></tr>
                    <tr><td className="px-6 py-4 whitespace-nowrap">201 Created</td><td>Success</td><td>The request has been fulfilled and resulted in a new resource being created.</td></tr>
                    <tr><td className="px-6 py-4 whitespace-nowrap">204 No Content</td><td>Success</td><td>The server successfully processed the request, but is not returning any content.</td></tr>
                    <tr><td className="px-6 py-4 whitespace-nowrap">400 Bad Request</td><td>Client Error</td><td>The server cannot or will not process the request due to an apparent client error.</td></tr>
                    <tr><td className="px-6 py-4 whitespace-nowrap">401 Unauthorized</td><td>Client Error</td><td>Authentication is required and has failed or has not yet been provided.</td></tr>
                    <tr><td className="px-6 py-4 whitespace-nowrap">403 Forbidden</td><td>Client Error</td><td>The request was valid, but the server is refusing action. The user might not have the necessary permissions.</td></tr>
                    <tr><td className="px-6 py-4 whitespace-nowrap">404 Not Found</td><td>Client Error</td><td>The requested resource could not be found.</td></tr>
                    <tr><td className="px-6 py-4 whitespace-nowrap">429 Too Many Requests</td><td>Client Error</td><td>The user has sent too many requests in a given amount of time ("rate limiting").</td></tr>
                    <tr><td className="px-6 py-4 whitespace-nowrap">500 Internal Server Error</td><td>Server Error</td><td>A generic error message, given when an unexpected condition was encountered.</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Pagination & Filtering</CardTitle></CardHeader>
            <CardContent>
              <p className="mb-4"><strong>Pagination:</strong> Typically handled via <code>?page=1&limit=10</code> (offset/limit) or <code>?since_id=abcxyz</code> (cursor-based for infinite scroll).</p>
              <p><strong>Filtering:</strong> Use query parameters like <code>?status=active&category=electronics</code>. For complex filters, consider query languages or POST requests.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Authentication: JWT vs OAuth2</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>JWT (JSON Web Tokens):</strong> Good for stateless authentication, microservices. Token contains claims, signed but not encrypted.</li>
                <li><strong>OAuth2:</strong> Authorization framework, not an authentication protocol itself. Used for delegated authorization (e.g., "Login with Google"). Requires an Authorization Server.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>API Versioning Strategies</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>URI Versioning:</strong> <code>/v1/users</code> (Simple, clear, but violates HATEOAS principle if links hardcoded).</li>
                <li><strong>Header Versioning:</strong> <code>Accept: application/vnd.example.v1+json</code> (RESTful, but harder to test in browser).</li>
                <li><strong>Query Parameter Versioning:</strong> <code>/users?version=1</code> (Simple, but can be misused, less RESTful).</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Most Important Code Patterns */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-primary flex items-center gap-4">
          <Settings className="w-12 h-12 text-blue-600" />
          Top 6 Production-Grade Patterns
        </h2>
        <div className="space-y-14">

          {/* 1. JWT Authentication Middleware */}
          <Card className="overflow-hidden border-2 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <CardTitle className="text-2xl">1. JWT Authentication Middleware</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <CodeBlock language="ts" code={`// middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      req.user = user as UserPayload;
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

// Usage in routes:
// app.get('/api/protected', authenticateJWT, (req, res) => { ... });`} />
              <Badge className="mt-4 bg-purple-600 text-white">Industry Standard for Stateless Auth</Badge>
            </CardContent>
          </Card>

          {/* 2. Rate Limiting Middleware */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              <CardTitle className="text-2xl">2. Express Rate Limiting</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max 100 requests per 15 minutes per IP
  message: 'Too many requests from this IP, please try again after 15 minutes',
  standardHeaders: true, // Return rate limit info in the headers
  legacyHeaders: false, // Disable the X-RateLimit-*-Headers
});

const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Max 5 login attempts per hour per IP
  message: 'Too many login attempts from this IP, please try again after an hour',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply to all requests
// app.use(apiLimiter);
// Apply to specific routes
// app.post('/api/login', authLimiter, (req, res) => { ... });`} />
            </CardContent>
          </Card>

          {/* 3. Centralized API Error Handling */}
          <Card className="overflow-hidden border-2 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
              <CardTitle className="text-2xl">3. Centralized API Error Handling</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`// utils/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

export class ApiError extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.error("Unhandled Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
};

// Usage in controllers:
// throw new ApiError(404, "User not found");
// app.use(globalErrorHandler); // At the end of your middleware stack`} />
              <Badge className="mt-4 bg-red-600 text-white">Avoid `try/catch` repetition</Badge>
            </CardContent>
          </Card>

          {/* 4. HATEOAS Example */}
          <Card>
            <CardHeader><CardTitle>4. HATEOAS (Hypermedia as the Engine of Application State)</CardTitle></CardHeader>
            <CardContent>
              <CodeBlock language="json" code={`{
  "orderId": "12345",
  "status": "processing",
  "totalAmount": 99.99,
  "_links": [
    {
      "rel": "self",
      "href": "https://api.example.com/orders/12345",
      "method": "GET"
    },
    {
      "rel": "cancel",
      "href": "https://api.example.com/orders/12345/cancel",
      "method": "POST"
    },
    {
      "rel": "customer",
      "href": "https://api.example.com/customers/CUST001",
      "method": "GET"
    }
  ]
}`}/>
              <p className="text-sm text-muted-foreground mt-2">Client discovers next possible actions from links in the response.</p>
            </CardContent>
          </Card>

          {/* 5. Pagination with Cursor (Next.js Example) */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <CardTitle className="text-2xl">5. Cursor-Based Pagination</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`// api/posts.ts (Next.js API route)
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cursor, limit = '10' } = req.query;
  const take = parseInt(limit as string);

  let posts;
  if (cursor) {
    posts = await prisma.post.findMany({
      take,
      skip: 1, // Skip the cursor itself
      cursor: { id: cursor as string },
      orderBy: { id: 'asc' },
    });
  } else {
    posts = await prisma.post.findMany({
      take,
      orderBy: { id: 'asc' },
    });
  }

  const nextCursor = posts.length === take ? posts[posts.length - 1].id : undefined;

  res.status(200).json({ posts, nextCursor });
}

// Example usage: /api/posts?limit=5&cursor=clt7x1q7s0000jl8n74k0b7q9`}/>
              <Badge className="mt-4 bg-emerald-600 text-white">Infinite Scrolling Friendly</Badge>
            </CardContent>
          </Card>

          {/* 6. API Versioning (Header) */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-pink-600 to-red-600 text-white">
              <CardTitle className="text-2xl">6. Header-Based API Versioning</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`// middleware/apiVersion.ts (Express/Node.js)
import { Request, Response, NextFunction } from 'express';

export const apiVersionMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const acceptHeader = req.headers['accept'];
  const apiVersion = acceptHeader?.match(/application\/vnd\.myapi\.v(\d+)\+json/)?.[1];

  if (apiVersion === '1') {
    // Route to V1 handlers
    // req.apiVersion = 'v1';
  } else if (apiVersion === '2') {
    // Route to V2 handlers
    // req.apiVersion = 'v2';
  } else {
    // Default to latest or throw error
    // req.apiVersion = 'v2';
  }
  next();
};

// Example: Accept: application/vnd.myapi.v2+json`}/>
              <Badge className="mt-4 bg-pink-600 text-white">Cleanest RESTful Approach</Badge>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Top Practice Questions */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Trophy className="w-12 h-12 text-yellow-600" />
          Top 3 HackerRank/LeetCode REST API Questions
        </h2>
        <div className="space-y-12">

          {/* Question 1: Design a Twitter-like API */}
          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-yellow-50 dark:bg-yellow-950/40 border-b">
              <CardTitle className="text-2xl font-bold text-yellow-700">1. Design a Twitter-like API</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Problem Statement:</h3>
              <p className="mb-4">Design the RESTful API endpoints for a simplified Twitter-like application. Consider user registration, posting tweets, following/unfollowing, fetching user timelines, and fetching a global feed. Detail the HTTP methods, URIs, request/response bodies, and appropriate status codes.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Key Considerations:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Authentication (JWT)</li>
                <li>Pagination for feeds</li>
                <li>Error handling</li>
                <li>Rate limiting (optional, but good to mention)</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Sample Solution Structure:</h3>
              <CodeBlock language="bash" code={`# User Registration
POST /api/v1/register
Body: { "username": "string", "email": "string", "password": "string" }
Response: 201 Created, { "userId": "uuid", "token": "jwt_token" }

# User Login
POST /api/v1/login
Body: { "email": "string", "password": "string" }
Response: 200 OK, { "userId": "uuid", "token": "jwt_token" }

# Post a Tweet
POST /api/v1/tweets
Auth: Bearer <jwt_token>
Body: { "content": "string" }
Response: 201 Created, { "tweetId": "uuid", "content": "string", "authorId": "uuid", "createdAt": "datetime" }

# Get User's Tweets
GET /api/v1/users/{userId}/tweets?page=1&limit=10
Auth: Optional Bearer <jwt_token>
Response: 200 OK, { "tweets": [...], "nextPageCursor": "string" }

# Follow a User
POST /api/v1/users/{userId}/follow
Auth: Bearer <jwt_token>
Response: 204 No Content

# Get Global Feed
GET /api/v1/feed?page=1&limit=10
Auth: Bearer <jwt_token>
Response: 200 OK, { "tweets": [...], "nextPageCursor": "string" }`} />
              <h3 className="text-xl font-semibold mt-6 mb-3">Explanation:</h3>
              <p>The solution uses clear, resource-oriented URIs and standard HTTP methods. JWT is used for authentication. Pagination is implemented for feeds to handle large datasets efficiently. Error handling should be globalized. Consider adding rate limiting for tweet posting and follow actions.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Time/Space Complexity:</h3>
              <p>Complexity heavily depends on the database and backend implementation. For a well-indexed database, individual operations like creating a tweet or fetching a single user would be O(1) or O(log N). Feed generation can be more complex, potentially O(K log M) or O(K) where K is the number of tweets and M is the number of followers/following, depending on fan-out strategy.</p>
            </CardContent>
          </Card>

          {/* Question 2: Implement OAuth2 Client Credentials Flow */}
          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-blue-50 dark:bg-blue-950/40 border-b">
              <CardTitle className="text-2xl font-bold text-blue-700">2. Implement OAuth2 Client Credentials Flow</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Problem Statement:</h3>
              <p className="mb-4">You need to secure an API where a machine-to-machine client (e.g., a background service) needs to access resources without user interaction. Implement the OAuth2 Client Credentials Grant flow using a simplified authorization server and resource server setup. Detail the steps and API calls involved.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Flow Description:</h3>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Client authenticates with Authorization Server using its <code>client_id</code> and <code>client_secret</code>.</li>
                <li>Authorization Server validates credentials and issues an <code>access_token</code>.</li>
                <li>Client uses the <code>access_token</code> to access protected resources on the Resource Server.</li>
              </ol>
              <h3 className="text-xl font-semibold mt-6 mb-3">Sample API Calls:</h3>
              <CodeBlock language="bash" code={`# 1. Request Access Token from Authorization Server
POST /oauth/token
Headers: Content-Type: application/x-www-form-urlencoded
Body: grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET
Response: 200 OK, { "access_token": "jwt_token", "token_type": "Bearer", "expires_in": 3600 }

# 2. Access Protected Resource from Resource Server
GET /api/protected/data
Headers: Authorization: Bearer <access_token>
Response: 200 OK, { "data": "sensitive_info" }`} />
              <h3 className="text-xl font-semibold mt-6 mb-3">Explanation:</h3>
              <p>This flow is ideal for server-to-server communication where there is no end-user present to grant consent. The client directly authenticates with the authorization server to obtain an access token. The resource server then validates this token before granting access to protected resources. This ensures that only authorized services can interact with the API.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Time/Space Complexity:</h3>
              <p>The complexity is primarily in the token validation process. If tokens are self-contained (like JWTs) and signed, validation is O(1). If the resource server needs to introspect the token with the authorization server, it adds network latency and potentially O(1) lookup on the auth server. Token storage on the client side is minimal.</p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Common Mistakes & How to Avoid Them */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <AlertCircle className="w-12 h-12 text-red-600" />
          Interview-Killing Mistakes (REST API Edition)
        </h2>
        <Card className="bg-red-50 dark:bg-red-950/40 border-red-400">
          <CardContent className="p-10">
            <ul className="space-y-5 text-lg">
              {[
                "Inconsistent URL naming (e.g., /users and /getUser)",
                "Using GET for state-changing operations (e.g., /deleteUser)",
                "Ignoring HTTP status codes (always returning 200 OK)",
                "Not handling pagination for large datasets",
                "Hardcoding API versions in client code instead of using headers",
                "Returning raw database errors to clients",
                "Not implementing rate limiting on public endpoints",
                "Misunderstanding JWT vs Session Cookies for auth"
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
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Shield className="w-12 h-12 text-green-600" />
          Pro Tips for Interview Success
        </h2>
        <Card>
          <CardContent className="p-10">
            <ol className="space-y-6 text-lg">
              <li><strong>Always think about scalability:</strong> How would your API handle 1M requests/sec? (Caching, CDNs, Load Balancing).</li>
              <li><strong>Security first:</strong> Always consider authentication, authorization, input validation, and rate limiting.</li>
              <li><strong>Use proper HTTP methods and status codes:</strong> They tell a story about the interaction.</li>
              <li><strong>Be explicit about versioning:</strong> Choose a strategy and stick to it.</li>
              <li><strong>Discuss API Gateway concepts:</strong> For advanced scenarios (logging, monitoring, transformation).</li>
              <li><strong>Mention idempotent operations:</strong> GET, PUT, DELETE should ideally be idempotent.</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Quick Summary */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Quick Revision Summary</h2>
        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/50">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-10 text-lg">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">REST Principles</h3>
                <ul className="space-y-3 font-medium">
                  <li>Statelessness</li>
                  <li>Client-Server Separation</li>
                  <li>Cacheability</li>
                  <li>Layered System</li>
                  <li>Uniform Interface (HATEOAS)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-600">Key API Concepts</h3>
                <ul className="space-y-3 font-medium">
                  <li>Resource-based URIs</li>
                  <li>HTTP Methods (CRUD)</li>
                  <li>Status Codes</li>
                  <li>Authentication (JWT, OAuth2)</li>
                  <li>Authorization (RBAC)</li>
                  <li>Pagination & Filtering</li>
                  <li>Rate Limiting</li>
                  <li>Versioning</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between gap-6 mt-20 pb-10">
        <Link href="/aws" passHref legacyBehavior>
          <Button variant="outline" size="lg" className="flex items-center gap-3 text-lg px-8 py-6">
            <ArrowLeftIcon className="h-6 w-6" /> Previous: AWS (Intermediate)
          </Button>
        </Link>
        <Link href="/problem-solving-intermediate" passHref legacyBehavior>
          <Button size="lg" variant={"outline"} className="flex items-center gap-3 text-lg px-8 py-6">
            Next: Problem Solving (Intermediate) <ArrowRightIcon className="h-6 w-6" />
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default RestApiPage;
