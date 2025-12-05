import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { ArrowLeftIcon, ArrowRightIcon, Zap, Brain, Trophy, Shield, AlertCircle } from "lucide-react";

const ReactIntermediatePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-12 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          React Mastery: Intermediate → Staff Engineer
        </h1>
        <div className="flex flex-wrap justify-center gap-5 mb-8">
          <Badge variant="outline" className="px-6 py-3 text-lg font-bold border-2">
            0  Hours Deep Practice
          </Badge>
          <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            Production-Grade React
          </Badge>
          <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <Trophy className="w-7 h-7 mr-2" /> Used at Meta, Vercel, Shopify
          </Badge>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Master the React patterns that power the world's most performant, scalable UIs. These are the exact skills that separate senior engineers from the rest.
        </p>
      </header>

      {/* What Big Tech Actually Tests */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Brain className="w-12 h-12 text-indigo-600" />
          What Meta, Vercel, Shopify Actually Test (2025)
        </h2>
        <Card className="border-2 shadow-2xl">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-6 text-lg font-medium">
              {[
                "Custom hooks with proper cleanup & TypeScript",
                "React Server Components + Streaming",
                "Concurrent Mode patterns (useTransition, useDeferredValue)",
                "Advanced memoization: useMemo + useCallback + React.memo",
                "Compound Components + State Reducer pattern",
                "Headless UI + Accessibility (a11y) mastery",
                "Zustand / Jotai / Valtio over Redux",
                "Error Boundaries + Suspense for data fetching"
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

      {/* React Power Levels */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">React Engineer Levels (2025)</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { level: "Junior", desc: "useState + useEffect", color: "bg-gray-600" },
            { level: "Mid", desc: "Custom hooks + Context", color: "bg-blue-600" },
            { level: "Senior", desc: "RSC + Concurrent", color: "bg-indigo-600" },
            { level: "Staff", desc: "Compound + State Machines", color: "bg-purple-600" },
            { level: "God", desc: "Signals + Fine-grained", color: "bg-gradient-to-r from-pink-600 to-purple-600" }
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
        <h2 className="text-4xl font-bold mb-12 text-primary">Top 8 Production Patterns (2025)</h2>
        <div className="space-y-14">

          {/* 1. useDebounce with useEffect Cleanup */}
          <Card className="overflow-hidden border-2 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle className="text-2xl">1. useDebounce – Production Ready</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <CodeBlock language="ts" code={`import { useState, useEffect, useRef } from "react";

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState<T>(value);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setDebounced(value), delay);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [value, delay]);

  return debounced;
}`} />
              <Badge className="mt-4 bg-blue-600 text-white">Meta / Vercel Standard</Badge>
            </CardContent>
          </Card>

          {/* 2. Compound Component Pattern */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardTitle className="text-2xl">2. Compound Components – Like Radix UI</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="tsx" code={`import { createContext, useContext, useState, ReactNode } from "react";

interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function Tabs({ children, defaultValue }: { children: ReactNode; defaultValue: string }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function Tab({ id, children }: { id: string; children: ReactNode }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tab must be used within Tabs");

  return (
    <button
      className={\`tab $\{context.activeTab === id ? "active" : ""}\`}
      onClick={() => context.setActiveTab(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }: { id: string; children: ReactNode }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabPanel must be used within Tabs");
  if (context.activeTab !== id) return null;
  return <div className="tab-panel">{children}</div>;
}

// Usage
<Tabs defaultValue="profile">
  <Tab id="profile">Profile</Tab>
  <Tab id="settings">Settings</Tab>
  <TabPanel id="profile">Profile Content</TabPanel>
  <TabPanel id="settings">Settings Content</TabPanel>
</Tabs>`} />
              <Badge className="mt-4 bg-purple-600 text-white">Radix UI / Headless UI Pattern</Badge>
            </CardContent>
          </Card>

          {/* 3. useTransition + Suspense */}
          <Card className="overflow-hidden border-2 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <CardTitle className="text-2xl">3. useTransition – Non-blocking UI Updates</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="tsx" code={`import { useState, useTransition, Suspense } from "react";

function SearchResults({ query }: { query: string }) {
  // Simulate slow data fetch
  const data = use(fetchData(query));
  return <div>{data.map(item => <div key={item.id}>{item.name}</div>)}</div>;
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search (non-blocking)..."
        className={isPending ? "opacity-50" : ""}
      />
      {isPending && <p className="text-sm text-muted">Updating...</p>}
      <Suspense fallback={<div>Loading results...</div>}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  );
}`} />
              <Badge className="mt-4 bg-emerald-600 text-white">React 18 Concurrent Mode</Badge>
            </CardContent>
          </Card>

          {/* 4. Error Boundary */}
          <Card>
            <CardHeader><CardTitle>4. Error Boundary – Production Safety</CardTitle></CardHeader>
            <CardContent>
              <CodeBlock language="tsx" code={`class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Boundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}`} />
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Red Flags */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <AlertCircle className="w-12 h-12 text-red-600" />
          Interview-Killing Mistakes (React Edition)
        </h2>
        <Card className="bg-red-50 dark:bg-red-950/40 border-red-400">
          <CardContent className="p-10">
            <ul className="space-y-5 text-lg">
              {[
                "Using useEffect without dependency array",
                "Storing functions/objects in useState",
                "Not using useCallback for event handlers passed to memoized children",
                "Using index as React key",
                "Direct DOM manipulation instead of refs",
                "Not using Suspense with async components",
                "Redux when Context + useReducer is enough",
                "No error boundaries in production"
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
        <h2 className="text-4xl font-bold mb-8 text-primary">Pro Tips That Win Senior+ Frontend Offers</h2>
        <Card>
          <CardContent className="p-10">
            <ol className="space-y-6 text-lg">
              <li><strong>Never mutate state directly</strong> — always return new object/array</li>
              <li><strong>Use useTransition for non-urgent updates</strong></li>
              <li><strong>Prefer useDeferredValue over debounce in React 18+</strong></li>
              <li><strong>Always wrap async components in Suspense</strong></li>
              <li><strong>Use compound components for flexible APIs</strong></li>
              <li><strong>Know when NOT to use Context</strong> — it causes re-renders!</li>
              <li><strong>Zustand `{'>'}` & Redux in 2025</strong> — say this confidently</li>
              <li><strong>Master Server Components + Streaming</strong> — Next.js 14+</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Quick Summary */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">One-Page God Tier Cheat Sheet</h2>
        <Card className="bg-gradient-to-br from-blue5 to-purple-50 dark:from-blue-950/50">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-10 text-lg">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Must-Know Patterns</h3>
                <ul className="space-y-3 font-medium">
                  <li>Compound Components</li>
                  <li>State Reducer Pattern</li>
                  <li>Control Props Pattern</li>
                  <li>useTransition + Suspense</li>
                  <li>Error Boundaries</li>
                  <li>React Server Components</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Senior Signals</h3>
                <ul className="space-y-3 font-medium">
                  <li>Never use index as key</li>
                  <li>Always clean up useEffect</li>
                  <li>Know Concurrent React</li>
                  <li>Use Zustand/Jotai</li>
                  <li>Master accessibility</li>
                  <li>Write custom hooks</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between gap-6 mt-20 pb-10">
        <Link href="/problem-solving-advanced" passHref legacyBehavior>
          <Button variant="outline" size="lg" className="flex items-center gap-3 text-lg px-8 py-6">
            <ArrowLeftIcon className="h-6 w-6" /> Previous: Problem Solving (Advanced)
          </Button>
        </Link>
        <Link href="/typescript" passHref legacyBehavior>
          <Button size="lg" variant={"outline"} className="flex items-center gap-3 text-lg px-8 py-6">
            Next: TypeScript (Intermediate) <ArrowRightIcon className="h-6 w-6" />
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default ReactIntermediatePage;
