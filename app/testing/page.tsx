import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { ArrowLeftIcon, ArrowRightIcon, CheckCircle2, AlertCircle } from "lucide-react";

const TestingTechniquesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Testing Techniques Mastery
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <Badge variant="outline" className="px-4 py-2 text-lg font-medium">
            Time:  hours
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-lg font-medium">
            Intermediate → Advanced
          </Badge>
          <Badge className="px-4 py-2 text-lg font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <CheckCircle2 className="w-4 h-4 mr-1" /> HackerRank Favorite
          </Badge>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Master the testing strategies that top companies (and HackerRank) expect from senior full-stack engineers. 
          From pixel-perfect component tests to bulletproof API contracts.
        </p>
      </header>

      {/* What HackerRank Asks */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-3">
          <AlertCircle className="w-10 h-10" />
          What HackerRank Actually Tests For
        </h2>
        <Card className="border-2">
          <CardContent className="p-8">
            <ul className="grid md:grid-cols-2 gap-4 text-lg">
              {[
                "Write comprehensive Jest + RTL tests for a complex React component",
                "Mock external APIs, timers, or modules correctly without leaks",
                "Implement custom hooks with full test coverage (events, cleanup)",
                "Write integration tests using Supertest + in-memory DB",
                "Debounce / throttle with proper cancellation and immediate flag",
                "Test async code: promises, async/await, error handling",
                "Use testing best practices: AAA pattern, descriptive names, no logic in tests"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Core Concepts */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Testing Pyramid & Tools (2025 Edition)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Unit Tests", desc: "Fast · Isolated · Many", tools: "Jest, Vitest, React Testing Library", color: "bg-blue-500" },
            { title: "Integration Tests", desc: "Real modules together · Medium speed", tools: "Supertest, MSW, Testing Library", color: "bg-purple-500" },
            { title: "E2E Tests", desc: "Real browser + backend · Slow · Few", tools: "Playwright (best), Cypress", color: "bg-orange-500" }
          ].map((tier) => (
            <Card key={tier.title} className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className={`${tier.color} w-16 h-3 rounded-full mb-3`} />
                <CardTitle className="text-2xl">{tier.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{tier.desc}</p>
                <p className="font-mono text-sm bg-muted px-3 py-2 rounded">{tier.tools}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gold Tier Practice Questions */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Top 8 HackerRank-Style Questions (With Solutions)</h2>
        <div className="space-y-12">

          {/* 1. Correct Debounce with Immediate + Cancel */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-2xl">1. Perfect Debounce (Immediate + Cancel)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4">Implement debounce with <code className="bg-muted px-2 py-1 rounded">immediate</code> option and <code className="bg-muted px-2 py-1 rounded">cancel()</code> method.</p>
              <CodeBlock language="ts" code={`function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): { debounced: (...args: Parameters<T>) => void; cancel: () => void } {
  let timeout: NodeJS.Timeout | null = null;

  const debounced = function (this: any, ...args: Parameters<T>) {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };

  debounced.cancel = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return { debounced, cancel: debounced.cancel };
}

// Tests
describe("debounce", () => {
  jest.useFakeTimers();

  it("executes immediately when immediate=true", () => {
    const fn = jest.fn();
    const { debounced } = debounce(fn, 1000, true);
    debounced();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("cancels pending execution", () => {
    const fn = jest.fn();
    const { debounced, cancel } = debounce(fn, 1000);
    debounced();
    cancel();
    jest.runAllTimers();
    expect(fn).not.toHaveBeenCalled();
  });
});
`} />
            </CardContent>
          </Card>

          {/* 2. useFetch Hook with Full Testing */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardTitle className="text-2xl">2. useFetch Custom Hook (Loading, Error, Abort)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="tsx" code={`// useFetch.ts
import { useState, useEffect, useRef } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });
  const abortController = useRef<AbortController | null>(null);

  useEffect(() => {
    abortController.current = new AbortController();
    const { signal } = abortController.current;

    setState(prev => ({ ...prev, loading: true, error: null }));

    fetch(url, { signal })
      .then(res => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(data => setState({ data, loading: false, error: null }))
      .catch(err => {
        if (err.name === "AbortError") return;
        setState({ data: null, loading: false, error: err.message });
      });

    return () => abortController.current?.abort();
  }, [url]);

  return state;
}

// Test
test("useFetch handles loading, success, error, and abort", async () => {
  global.fetch = jest.fn();
  const { result, rerender, unmount } = renderHook(({ url }) => useFetch(url), {
    initialProps: { url: "/success" }
  });

  expect(result.current.loading).toBe(true);

  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(result.current.data).toEqual({ name: "John" });

  // Test abort on unmount
  global.fetch.mockRejectedValueOnce(new DOMException("Aborted", "AbortError"));
  unmount();
});
`} />
            </CardContent>
          </Card>

          {/* 3. Mock Service Worker (MSW) Example */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="text-2xl">3. Mock API with MSW (Best Practice 2025)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`// src/mocks/handlers.ts
import { rest } from "msw";

export const handlers = [
  rest.get("/api/users", (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: "Sarah" }]));
  }),
  rest.post("/api/login", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "fake-jwt" }));
  })
];

// In tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetches users using real HTTP but mocked response", async () => {
  const users = await userService.getUsers();
  expect(users).toEqual([{ id: 1, name: "Sarah" }]);
});
`} />
              <p className="mt-4 text-sm text-muted-foreground">
                MSW is now the gold standard over jest.mock(fetch) — no global pollution!
              </p>
            </CardContent>
          </Card>

          {/* Add more questions as needed... */}

        </div>
      </section>

      {/* Common Anti-Patterns */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Red Flags Interviewers Hate</h2>
        <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
          <CardContent className="p-8">
            <ul className="space-y-4 text-lg">
              {[
                "Testing implementation details (e.g., exact class names, internal state)",
                "No cleanup → test pollution (timers, event listeners, mocks)",
                "Over-mocking → testing the mock instead of logic",
                "Flaky tests (real API calls, random values)",
                "Missing async handling (no await, no act())",
                "Using .toBeInTheDocument() on non-DOM elements"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xl">✕</div>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Pro Tips */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Live Coding Pro Tips (That Win Offers)</h2>
        <Card>
          <CardContent className="p-8">
            <ol className="space-y-4 text-lg">
              <li><strong>Start with the test</strong> → Shows TDD thinking even if not required</li>
              <li><strong>Name your tests like user stories</strong>: "should disable submit when form invalid"</li>
              <li><strong>Follow AAA pattern</strong>: Arrange → Act → Assert</li>
              <li><strong>Type everything</strong> — interviewers notice missing types</li>
              <li><strong>Clean up in afterEach</strong>: jest.clearAllMocks(), removeEventListener, etc.</li>
              <li><strong>Use MSW over jest.mock(global.fetch)</strong> — modern best practice</li>
              <li><strong>Never commit console.log in tests</strong> — huge red flag</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between gap-6 mt-20">
        <Link href="/" passHref legacyBehavior>
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <ArrowLeftIcon className="h-5 w-5" /> Back to Dashboard
          </Button>
        </Link>
        <Link href="/rest-api" passHref legacyBehavior>
          <Button size="lg" variant={"outline"} className="flex items-center gap-2">
            Next: REST API Design <ArrowRightIcon className="h-5 w-5" />
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default TestingTechniquesPage;