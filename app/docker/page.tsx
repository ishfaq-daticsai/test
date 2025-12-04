import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { ArrowLeftIcon, ArrowRightIcon, Brain, Trophy, Shield, Box, Code, Sliders, HardDrive, Lock, Minimize, Container, Factory, Wrench, Package, ScrollText, CheckSquare, Square } from "lucide-react";

const LOCAL_STORAGE_KEY = "topic-progress-docker";

const DockerPage = () => {
  const [progress, setProgress] = useState<boolean[]>([]);

  useEffect(() => {
    const savedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    } else {
      // Initialize with false for 6 questions, for example
      setProgress(new Array(6).fill(false)); 
    }
  }, []);

  useEffect(() => {
    if (progress.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress]);

  const handleProgressChange = (index: number) => {
    setProgress((prevProgress) => {
      const newProgress = [...prevProgress];
      newProgress[index] = !newProgress[index];
      return newProgress;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-12 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
          Docker (Intermediate)
        </h1>
        <div className="flex flex-wrap justify-center gap-5 mb-8">
          <Badge variant="outline" className="px-6 py-3 text-lg font-bold border-2">
             Deep Practice
          </Badge>
          <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            Containerization for HackerRank
          </Badge>
          <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
            <Trophy className="w-7 h-7 mr-2" /> Essential for Modern Dev & Ops
          </Badge>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Master intermediate Docker concepts, including multi-stage builds, orchestration with Docker Compose, and critical optimization techniques, tailored for HackerRank-style interviews.
        </p>
      </header>

      {/* What HackerRank Usually Asks */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Brain className="w-12 h-12 text-blue-600" />
          What Top Tech Companies Test (2025)
        </h2>
        <Card className="border-2 shadow-2xl">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-6 text-lg font-medium">
              {[
                "Optimize a Dockerfile for production with multi-stage builds.",
                "Design a local development environment using Docker Compose.",
                "Explain the differences between Docker volumes and bind mounts.",
                "Implement secure practices in Docker images and containers.",
                "Reduce Docker image size effectively.",
                "Troubleshoot common Docker network issues.",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <Box className="w-6 h-6 text-cyan-500" />
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
          <ScrollText className="w-12 h-12 text-teal-600" />
          Core Concepts Cheat Sheet
        </h2>
        <div className="space-y-8">
          {/* Multi-stage Builds */}
          <Card>
            <CardHeader><CardTitle>Multi-stage Builds</CardTitle></CardHeader>
            <CardContent>
              <p className="mb-4">Allows you to use multiple <code>FROM</code> statements in your Dockerfile. Each <code>FROM</code> instruction can use a different base image, and you can selectively copy artifacts from one stage to another, discarding everything else. This significantly reduces the final image size.</p>
              <CodeBlock language="dockerfile" code={`
# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Create the production-ready image
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json ./
CMD ["node", "dist/main.js"]
`}
              />
              <Badge className="mt-4 bg-teal-600 text-white">Optimized Image Size</Badge>
            </CardContent>
          </Card>

          {/* .dockerignore */}
          <Card>
            <CardHeader><CardTitle>.dockerignore</CardTitle></CardHeader>
            <CardContent>
              <p className="mb-4">A file that specifies files and directories to exclude when building a Docker image. Similar to <code>.gitignore</code>, it prevents unnecessary files from being added to the build context, speeding up builds and reducing image size.</p>
              <CodeBlock language="dockerignore" code={`
node_modules
npm-debug.log
.git
.vscode
docker-compose.yml
*.env
`}
              />
              <Badge className="mt-4 bg-cyan-600 text-white">Faster Builds, Smaller Images</Badge>
            </CardContent>
          </Card>

          {/* Docker Compose */}
          <Card>
            <CardHeader><CardTitle>Docker Compose</CardTitle></CardHeader>
            <CardContent>
              <p className="mb-4">A tool for defining and running multi-container Docker applications. With a single YAML file, you can configure your application's services, networks, and volumes, and then spin up or tear down the entire application stack with a single command.</p>
              <CodeBlock language="yaml" code={`
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
    volumes:
      - .:/app
    depends_on:
      - db
  db:
    image: postgres:13
    environment:
      POSTGRES_DB: mydatabase
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - db-data:/var/lib/postgresql/data
volumes:
  db-data:
`}
              />
              <Badge className="mt-4 bg-blue-600 text-white">Orchestrate Multi-Container Apps</Badge>
            </CardContent>
          </Card>

          {/* Volumes vs Bind Mounts */}
          <Card>
            <CardHeader><CardTitle>Volumes vs Bind Mounts</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volumes</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bind Mounts</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                    <tr><td className="px-6 py-4 whitespace-nowrap">Host Location</td><td>Managed by Docker (<code>/var/lib/docker/volumes/...</code>)</td><td>User-specified path on the host machine</td></tr>
                    <tr><td className="px-6 py-4 whitespace-nowrap">Creation</td><td>Created and managed by Docker</td><td>Can be created anywhere on the host by the user</td></tr>
                    <tr><td className="px-6 py-4 whitespace-nowrap">Usage</td><td>Preferred for persistent data, database storage</td><td>Often used for development (code changes reflected instantly)</td></tr>
                    <tr><td className="px-6 py-4 whitespace-nowrap">Portability</td><td>More portable, works across different OS hosts</td><td>Less portable, relies on host file system structure</td></tr>
                    <tr><td className="px-6 py-4 whitespace-nowrap">Permissions</td><td>Managed by Docker</td><td>Permissions mirror the host filesystem</td></tr>
                  </tbody>
                </table>
              </div>
              <Badge className="mt-4 bg-emerald-600 text-white">Persistent Data Storage</Badge>
            </CardContent>
          </Card>

          {/* Security Best Practices */}
          <Card>
            <CardHeader><CardTitle>Security Best Practices</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Use Official & Trusted Base Images:</strong> Avoid unknown or untrusted images.</li>
                <li><strong>Least Privilege:</strong> Run containers as a non-root user (e.g., with <code>USER</code> instruction in Dockerfile).</li>
                <li><strong>Minimize Image Surface Area:</strong> Install only necessary packages. Use multi-stage builds.</li>
                <li><strong>Scan Images:</strong> Use tools like Clair, Trivy, or Docker Scout for vulnerability scanning.</li>
                <li><strong>Don't Store Secrets in Images:</strong> Use Docker Secrets or environment variables with caution.</li>
                <li><strong>Limit Capabilities & Resources:</strong> Restrict container capabilities (<code>--cap-drop</code>) and resource usage (CPU, memory).</li>
              </ul>
              <Badge className="mt-4 bg-red-600 text-white">Secure Your Containers</Badge>
            </CardContent>
          </Card>

          {/* Image Size Optimization */}
          <Card>
            <CardHeader><CardTitle>Image Size Optimization</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Multi-stage Builds:</strong> As discussed, build artifacts in one stage, copy to a lean final stage.</li>
                <li><strong>Use Small Base Images:</strong> Prefer Alpine variants (e.g., <code>alpine</code>, <code>node:18-alpine</code>) over larger distributions.</li>
                <li><strong>Consolidate RUN Instructions:</strong> Combine multiple <code>RUN</code> commands with <code>&&</code> and remove temporary files (e.g., <code>apt-get clean</code>).</li>
                <li><strong>Leverage <code>.dockerignore</code>:</strong> Exclude unnecessary files from the build context.</li>
                <li><strong>Avoid Installing Build Tools:</strong> Only install what's needed for runtime in the final image.</li>
              </ul>
              <Badge className="mt-4 bg-purple-600 text-white">Efficient Container Delivery</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Most Important Code Patterns */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-primary flex items-center gap-4">
          <Code className="w-12 h-12 text-pink-600" />
          Top 3 Production-Grade Docker Patterns
        </h2>
        <div className="space-y-14">

          {/* 1. Optimized Dockerfile for a Node.js App */}
          <Card className="overflow-hidden border-2 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-pink-600 to-rose-600 text-white">
              <CardTitle className="text-2xl">1. Optimized Dockerfile for Node.js</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <CodeBlock language="dockerfile" code={`
# ---- Base Image ----
FROM node:18-alpine AS base
WORKDIR /app

# ---- Dependencies Stage ----
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm install --omit=dev --production

# ---- Build Stage (for compiled assets like Next.js or React build) ----
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Production Stage ----
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist  # Adjust based on your build output folder (e.g., .next for Next.js)
COPY package.json ./
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/index.js"] # Adjust to your application's entry point

# Best practice: Run as a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
`}
              />
              <Badge className="mt-4 bg-pink-600 text-white">Multi-stage for Production</Badge>
            </CardContent>
          </Card>

          {/* 2. Docker Compose for Local Development */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <CardTitle className="text-2xl">2. Docker Compose for Local Dev</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="yaml" code={`
version: '3.8'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev # Use a specific Dockerfile for development
    ports:
      - "3000:3000"
    volumes:
      - .:/app # Bind mount for live code changes
      - /app/node_modules # Anonymous volume to prevent host node_modules from overriding container
    environment:
      NODE_ENV: development
    depends_on:
      - db
    command: npm run dev # Or your dev server command

  db:
    image: postgres:13
    restart: always
    environment:
      POSTGRES_DB: myapp_dev_db
      POSTGRES_USER: devuser
      POSTGRES_PASSWORD: devpassword
    volumes:
      - pgdata:/var/lib/postgresql/data # Named volume for persistent database data

  adminer:
    image: adminer
    ports:
      - "8080:8080"
    restart: always

volumes:
  pgdata:
`}
              />
              <p className="text-sm text-muted-foreground mt-2">This sets up a Node.js web app, a PostgreSQL database, and Adminer for database management.</p>
              <Badge className="mt-4 bg-purple-600 text-white">Streamlined Development Environment</Badge>
            </CardContent>
          </Card>

          {/* 3. Dockerfile with .dockerignore for a Python App */}
          <Card className="overflow-hidden border-2 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <CardTitle className="text-2xl">3. Python Dockerfile with .dockerignore</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="dockerfile" code={`
# Dockerfile
FROM python:3.9-slim-buster
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["python", "app.py"]
`}
              />
              <p className="text-sm text-muted-foreground mt-2">And the corresponding <code>.dockerignore</code> file:</p>
              <CodeBlock language="dockerignore" code={`
__pycache__
*.pyc
*.log
.git/
.gitignore
.vscode/
venv/
.env
Dockerfile
Dockerfile.*
`}
              />
              <Badge className="mt-4 bg-green-600 text-white">Efficient Python Image Builds</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top Practice Questions */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Trophy className="w-12 h-12 text-yellow-600" />
          Top 6 HackerRank/LeetCode Docker Questions
        </h2>
        <div className="space-y-12">

          {/* Question 1: Multi-stage Build Optimization */} 
          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-yellow-50 dark:bg-yellow-950/40 border-b flex justify-between items-center">
              <CardTitle className="text-2xl font-bold text-yellow-700">1. Optimize Node.js Docker Image Size</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleProgressChange(0)}
                aria-label="Toggle completion"
              >
                {progress[0] ? <CheckSquare className="w-6 h-6 text-green-500" /> : <Square className="w-6 h-6 text-gray-400" />}
              </Button>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Problem Statement:</h3>
              <p className="mb-4">You have a Node.js application. Write a <code>Dockerfile</code> that minimizes the final image size and build time using multi-stage builds. The application has build dependencies (like Babel or TypeScript compiler) that are not needed at runtime.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Key Considerations:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Separate build environment from runtime environment.</li>
                <li>Copy only essential artifacts to the final stage.</li>
                <li>Use a lightweight base image for the final stage.</li>
                <li>Exclude unnecessary files with <code>.dockerignore</code> (assume it's configured).</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Solution Outline (Dockerfile):</h3>
              <CodeBlock language="dockerfile" code={`
# Stage 1: Build dependencies and application
FROM node:18-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build # e.g., creates a 'dist' folder

# Stage 2: Production runtime
FROM node:18-slim
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json ./
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/app.js"]
`}
              />
              <h3 className="text-xl font-semibold mt-6 mb-3">Mistakes & Tips:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Mistake:</strong> Not using a slim or alpine base image. <strong>Tip:</strong> Always prefer smaller base images for production.</li>
                <li><strong>Mistake:</strong> Copying entire build context (<code>COPY . .</code>) in the final stage. <strong>Tip:</strong> Be selective; only copy runtime essentials from the build stage.</li>
                <li><strong>Tip:</strong> Ensure your <code>.dockerignore</code> file is correctly configured to exclude <code>node_modules</code> (from host), <code>.git</code>, etc., from the build context.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Question 2: Docker Compose for a Web App with Database */}
          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-blue-50 dark:bg-blue-950/40 border-b flex justify-between items-center">
              <CardTitle className="text-2xl font-bold text-blue-700">2. Local Dev with Docker Compose</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleProgressChange(1)}
                aria-label="Toggle completion"
              >
                {progress[1] ? <CheckSquare className="w-6 h-6 text-green-500" /> : <Square className="w-6 h-6 text-gray-400" />}
              </Button>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Problem Statement:</h3>
              <p className="mb-4">Create a <code>docker-compose.yml</code> file to set up a local development environment for a Python Flask web application that connects to a PostgreSQL database. The web application code should reflect changes instantly without rebuilding the image, and database data should persist across container restarts.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Key Considerations:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Two services: web (Flask) and db (PostgreSQL).</li>
                <li>Bind mount for web app code.</li>
                <li>Named volume for database persistence.</li>
                <li>Network communication between services.</li>
                <li>Environment variables for database connection.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Solution Outline (docker-compose.yml):</h3>
              <CodeBlock language="yaml" code={`
version: '3.8'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev # Assuming a Dockerfile.dev for Flask app
    ports:
      - "5000:5000"
    volumes:
      - .:/app # Bind mount current directory to /app in container
    environment:
      FLASK_APP: app.py
      FLASK_ENV: development
      DATABASE_URL: postgresql://user:password@db:5432/mydatabase
    depends_on:
      - db
    command: flask run --host=0.0.0.0

  db:
    image: postgres:13
    restart: always
    environment:
      POSTGRES_DB: mydatabase
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - pgdata:/var/lib/postgresql/data # Named volume for persistence

volumes:
  pgdata:
`}
              />
              <h3 className="text-xl font-semibold mt-6 mb-3">Mistakes & Tips:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Mistake:</strong> Not using a named volume for database data. <strong>Tip:</strong> Named volumes are crucial for persisting data independent of container lifecycle.</li>
                <li><strong>Mistake:</strong> Exposing sensitive database ports directly to the host for production. <strong>Tip:</strong> For development, it's common, but for production, typically database containers are on an internal network.</li>
                <li><strong>Tip:</strong> Use <code>depends_on</code> to ensure services start in the correct order, though it doesn't wait for health checks. For robust readiness, use health checks.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Question 3: Choosing Between Volumes and Bind Mounts */}
          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-green-50 dark:bg-green-950/40 border-b flex justify-between items-center">
              <CardTitle className="text-2xl font-bold text-green-700">3. Volumes vs Bind Mounts Scenario</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleProgressChange(2)}
                aria-label="Toggle completion"
              >
                {progress[2] ? <CheckSquare className="w-6 h-6 text-green-500" /> : <Square className="w-6 h-6 text-gray-400" />}
              </Button>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Problem Statement:</h3>
              <p className="mb-4">You are developing a web application. For local development, you need live code reloading. For production deployment, you need persistent storage for user-uploaded files and database data. Explain which Docker storage mechanism (volumes or bind mounts) you would use for each scenario and why.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Key Considerations:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Live code changes for development.</li>
                <li>Persistent data for production (user files, database).</li>
                <li>Portability and manageability.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Solution Outline:</h3>
              <ul className="list-disc list-inside space-y-3 mb-4">
                <li><strong>Local Development - Code: Bind Mounts</strong>
                    <p className="ml-6">Use bind mounts (e.g., <code>-v ./src:/app/src</code>) for your application's source code. This allows changes made on the host machine to be immediately reflected inside the container, facilitating rapid development and live reloading.</p>
                </li>
                <li><strong>Production - User Uploads & Database Data: Volumes</strong>
                    <p className="ml-6">Use Docker volumes (e.g., named volumes <code>my-data:/app/data</code>) for persistent data like user uploads, logs, and database files. Volumes are managed by Docker, are more portable, and are designed for high-performance I/O. They separate the data from the container's lifecycle, so data persists even if the container is removed or recreated.</p>
                </li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Mistakes & Tips:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Mistake:</strong> Using bind mounts for production database data. <strong>Tip:</strong> Volumes are generally preferred for production data due to better management, portability, and usually performance.</li>
                <li><strong>Mistake:</strong> Forgetting to use anonymous volumes (<code>-v /app/node_modules</code>) with bind mounts during local development of Node.js apps. <strong>Tip:</strong> This prevents host's <code>node_modules</code> from shadowing container's dependencies, which can lead to issues due to OS differences.</li>
                <li><strong>Tip:</strong> Understand the underlying storage drivers if you need advanced performance tuning or specific filesystem features.</li>
              </ul>
            </CardContent>
          </Card>

        {/* Question 4: Securing a Dockerized Application */}
        <Card className="border-2 shadow-lg">
            <CardHeader className="bg-orange-50 dark:bg-orange-950/40 border-b flex justify-between items-center">
              <CardTitle className="text-2xl font-bold text-orange-700">4. Secure Docker Image & Runtime</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleProgressChange(3)}
                aria-label="Toggle completion"
              >
                {progress[3] ? <CheckSquare className="w-6 h-6 text-green-500" /> : <Square className="w-6 h-6 text-gray-400" />}
              </Button>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Problem Statement:</h3>
              <p className="mb-4">You need to deploy a Dockerized microservice to production. Outline the key security best practices you would implement in both the Dockerfile (image build) and at runtime (container execution) to minimize attack surface and secure the application.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Key Considerations:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Dockerfile optimizations for security.</li>
                <li>Runtime security configurations.</li>
                <li>Managing secrets.</li>
                <li>Vulnerability scanning.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Solution Outline (Practices):</h3>
              <ul className="list-disc list-inside space-y-3 mb-4">
                <li><strong>Dockerfile Best Practices:</strong>
                    <ul className="list-circle list-inside ml-6">
                        <li>Use small, trusted base images (e.g., Alpine).</li>
                        <li>Implement multi-stage builds to remove build dependencies.</li>
                        <li>Run processes as a non-root user (<code>USER &lt;non-root-user&gt;</code>).</li>
                        <li>Install only necessary packages and clean up package caches.</li>
                        <li>Set explicit <code>WORKDIR</code> and <code>EXPOSE</code>.</li>
                    </ul>
                </li>
                <li><strong>Runtime Best Practices:</strong>
                    <ul className="list-circle list-inside ml-6">
                        <li>Limit resource usage (CPU, memory) with <code>--cpus</code>, <code>--memory</code>.</li>
                        <li>Drop unnecessary capabilities (<code>--cap-drop ALL --cap-add CHOWN</code>).</li>
                        <li>Read-only filesystems (<code>--read-only</code>).</li>
                        <li>Use Docker Secrets or orchestrator-specific secrets management (e.g., Kubernetes Secrets) for sensitive data. Avoid exposing secrets via environment variables in production.</li>
                        <li>Regularly scan images for vulnerabilities using tools like Trivy or Clair.</li>
                        <li>Implement network segmentation to isolate containers.</li>
                    </ul>
                </li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Mistakes & Tips:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Mistake:</strong> Running containers as root. <strong>Tip:</strong> Always switch to a non-root user (`USER` instruction) to limit potential damage from container escapes.</li>
                <li><strong>Mistake:</strong> Baking secrets into the image. <strong>Tip:</strong> Use Docker secrets or external secrets management for sensitive information.</li>
                <li><strong>Tip:</strong> Regularly update base images to patch known vulnerabilities.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Question 5: Reducing Image Size for a Java Spring Boot App */}
          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-pink-50 dark:bg-pink-950/40 border-b flex justify-between items-center">
              <CardTitle className="text-2xl font-bold text-pink-700">5. Optimize Java Docker Image Size</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleProgressChange(4)}
                aria-label="Toggle completion"
              >
                {progress[4] ? <CheckSquare className="w-6 h-6 text-green-500" /> : <Square className="w-6 h-6 text-gray-400" />}
              </Button>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Problem Statement:</h3>
              <p className="mb-4">You have a Java Spring Boot application packaged as a JAR file. Describe how to create an optimized Dockerfile for this application, focusing on minimizing the image size and ensuring efficient startup.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Key Considerations:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Multi-stage build for compilation.</li>
                <li>Lightweight JRE-only base image for runtime.</li>
                <li>Copying only the final JAR and necessary runtime components.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Solution Outline (Dockerfile):</h3>
              <CodeBlock language="dockerfile" code={`
# Stage 1: Build the application
FROM maven:3.8-openjdk-17 AS build
WORKDIR /app
COPY pom.xml ./
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Create the final lean runtime image
FROM openjdk:17-jre-slim
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
`}
              />
              <h3 className="text-xl font-semibold mt-6 mb-3">Mistakes & Tips:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Mistake:</strong> Using a full JDK image for the runtime. <strong>Tip:</strong> Only the JRE is needed for running Java applications; use <code>-jre-slim</code> images.</li>
                <li><strong>Mistake:</strong> Copying the entire Maven build cache. <strong>Tip:</strong> Only copy the final executable JAR file.</li>
                <li><strong>Tip:</strong> For Spring Boot, consider using Spring Boot's layered JAR feature with Jib or a custom Dockerfile to further optimize layers and cache efficiency.</li>
              </ul>
            </CardContent>
          </Card>

        {/* Question 6: Docker Compose with External Network & Volumes */}
        <Card className="border-2 shadow-lg">
            <CardHeader className="bg-purple-50 dark:bg-purple-950/40 border-b flex justify-between items-center">
              <CardTitle className="text-2xl font-bold text-purple-700">6. Docker Compose with External Network</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleProgressChange(5)}
                aria-label="Toggle completion"
              >
                {progress[5] ? <CheckSquare className="w-6 h-6 text-green-500" /> : <Square className="w-6 h-6 text-gray-400" />}
              </Button>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Problem Statement:</h3>
              <p className="mb-4">You have an existing Docker network (e.g., <code>my-existing-network</code>) created outside of Docker Compose, and you want to deploy a new service using <code>docker-compose</code> that connects to this network, alongside its own internal database. Write a <code>docker-compose.yml</code> file to achieve this.</p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Key Considerations:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Connecting to an external network.</li>
                <li>Defining an internal network for linked services.</li>
                <li>Database service with persistent data.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-3">Solution Outline (docker-compose.yml):</h3>
              <CodeBlock language="yaml" code={`
version: '3.8'
services:
  app:
    image: my-app-image:latest
    ports:
      - "80:80"
    networks:
      - my-app-network # Internal network for app and db
      - my-existing-network # Connect to external network
    environment:
      DB_HOST: db
      DB_PORT: 5432

  db:
    image: postgres:13
    restart: always
    networks:
      - my-app-network # Only connect to internal network
    environment:
      POSTGRES_DB: appdb
      POSTGRES_USER: appuser
      POSTGRES_PASSWORD: apppassword
    volumes:
      - app-db-data:/var/lib/postgresql/data

networks:
  my-app-network: # Define internal network
    driver: bridge
  my-existing-network: # Reference external network
    external:
      name: my-existing-network

volumes:
  app-db-data:
`}
              />
              <h3 className="text-xl font-semibold mt-6 mb-3">Mistakes & Tips:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Mistake:</strong> Not defining the external network in the <code>networks</code> section of <code>docker-compose.yml</code>. <strong>Tip:</strong> You must declare external networks to use them.</li>
                <li><strong>Mistake:</strong> Exposing internal database ports to the external network unnecessarily. <strong>Tip:</strong> Keep your database on an isolated internal network for security.</li>
                <li><strong>Tip:</strong> Ensure the external network actually exists before running <code>docker-compose up</code>. You can create it with <code>docker network create my-existing-network</code>.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Deployment Questions */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Sliders className="w-12 h-12 text-orange-600" />
          Common Deployment & Scaling Questions
        </h2>
        <Card className="bg-orange-50 dark:bg-orange-950/40 border-orange-400">
          <CardContent className="p-10">
            <ul className="space-y-5 text-lg">
              <li><strong>How do you manage persistent data for containers in production?</strong>
                  <p className="ml-6 text-muted-foreground">Use Docker Volumes, managed by Docker, or cloud-native persistent storage solutions (e.g., EBS, Azure Disks, GCP Persistent Disks) integrated with orchestrators.</p>
              </li>
              <li><strong>What are the differences between <code>CMD</code> and <code>ENTRYPOINT</code> in a Dockerfile?</strong>
                  <p className="ml-6 text-muted-foreground"><code>ENTRYPOINT</code> sets the primary command that will always be executed when the container starts. <code>CMD</code> provides default arguments for the <code>ENTRYPOINT</code>, or if no <code>ENTRYPOINT</code> is specified, it serves as the executable command itself and can be overridden by <code>docker run</code> arguments.</p>
              </li>
              <li><strong>How do you scale Dockerized applications?</strong>
                  <p className="ml-6 text-muted-foreground">Use an orchestration tool like Docker Swarm, Kubernetes, or cloud-managed services (ECS, AKS, GKE) to manage multiple replicas of your containers across a cluster.</p>
              </li>
              <li><strong>Explain Docker network drivers.</strong>
                  <p className="ml-6 text-muted-foreground">Common drivers include <code>bridge</code> (default, isolated private network), <code>host</code> (container shares host's network stack), <code>null</code> (no networking), and <code>overlay</code> (for multi-host Swarm/Kubernetes).</p>
              </li>
              <li><strong>How to handle secrets in Docker?</strong>
                  <p className="ml-6 text-muted-foreground">Avoid hardcoding in Dockerfiles. Use Docker Secrets (for Swarm) or environment variables (less secure, but common for local dev). For production, integrate with orchestrator secrets (e.g., Kubernetes Secrets, AWS Secrets Manager, HashiCorp Vault).</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Pro Tips */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Wrench className="w-12 h-12 text-green-600" />
          Pro Tips for Interview Success
        </h2>
        <Card>
          <CardContent className="p-10">
            <ol className="space-y-6 text-lg">
              <li><strong>Focus on practical use cases:</strong> When explaining concepts, relate them to real-world scenarios (e.g., how multi-stage builds help with CI/CD).</li>
              <li><strong>Emphasize security:</strong> Docker security is a hot topic. Discuss non-root users, vulnerability scanning, and secrets management.</li>
              <li><strong>Understand the ecosystem:</strong> Be familiar with Docker Compose, Docker Swarm, and know when Kubernetes might be overkill or necessary.</li>
              <li><strong>Troubleshooting skills:</strong> Discuss how you would debug common issues (e.g., container not starting, network problems, volume permissions).</li>
              <li><strong>Optimization is key:</strong> Talk about image size reduction, build caching, and efficient resource utilization.</li>
              <li><strong>Explain trade-offs:</strong> When comparing volumes vs. bind mounts or different base images, discuss the pros and cons for various use cases.</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Quick Summary */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Quick Revision Summary</h2>
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-10 text-lg">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Core Docker Concepts</h3>
                <ul className="space-y-3 font-medium">
                  <li>Containerization</li>
                  <li>Dockerfile & Image Builds</li>
                  <li>Multi-stage Builds</li>
                  <li>.dockerignore</li>
                  <li>Docker Compose</li>
                  <li>Volumes & Bind Mounts</li>
                  <li>Networking</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-600">Key Practices & Optimizations</h3>
                <ul className="space-y-3 font-medium">
                  <li>Image Size Optimization</li>
                  <li>Security Best Practices</li>
                  <li>Efficient Local Development</li>
                  <li>Persistent Data Management</li>
                  <li>Orchestration Basics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between gap-6 mt-20 pb-10">
        <Link href="/rest-api" passHref legacyBehavior>
          <Button variant="outline" size="lg" className="flex items-center gap-3 text-lg px-8 py-6">
            <ArrowLeftIcon className="h-6 w-6" /> Previous: REST API
          </Button>
        </Link>
        {/* Updated Next Link to a plausible next topic */}
        <Link href="/aws" passHref legacyBehavior>
          <Button size="lg" variant={"outline"} className="flex items-center gap-3 text-lg px-8 py-6">
            Next: AWS (Intermediate) <ArrowRightIcon className="h-6 w-6" />
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default DockerPage;
