import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const TypescriptIntermediatePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          TypeScript (Intermediate)
        </h1>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Badge variant="outline" className="px-3 py-1 text-lg">
            Time Estimate: 3h
          </Badge>
          <Badge variant="secondary" className="px-3 py-1 text-lg">
            Difficulty: Intermediate
          </Badge>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Strengthen your TypeScript knowledge with advanced type manipulation,
          generics, utility types, and typing React applications.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          What HackerRank Usually Asks
        </h2>
        <Card>
          <CardContent className="p-6">
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>
                Implement complex generics for reusable components/functions.
              </li>
              <li>
                Use utility types (e.g., <code className="bg-muted px-1 rounded">Partial</code>,{" "}
                <code className="bg-muted px-1 rounded">Readonly</code>,{" "}
                <code className="bg-muted px-1 rounded">Pick</code>,{" "}
                <code className="bg-muted px-1 rounded">Omit</code>) to transform types.
              </li>
              <li>
                Correctly type React props, state, event handlers, and custom hooks.
              </li>
              <li>Understand type guards and assertion functions.</li>
              <li>
                Differentiate between <code className="bg-muted px-1 rounded">interface</code> and{" "}
                <code className="bg-muted px-1 rounded">type</code> and when to use each.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          Core Concepts Cheat Sheet
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Generics */}
          <Card>
            <CardHeader>
              <CardTitle>Generics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Purpose:</strong> Create reusable components that work with a variety of types.
                </li>
                <li>
                  <strong>Syntax:</strong> Use <code className="bg-muted px-1 rounded">&lt;T&gt;</code> in functions, interfaces, classes.
                </li>
                <li>
                  <strong>Constraints:</strong> <code className="bg-muted px-1 rounded">extends</code> keyword to limit types (e.g., <code className="bg-muted px-1 rounded">&lt;T extends object&gt;</code>).
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Utility Types */}
          <Card>
            <CardHeader>
              <CardTitle>Utility Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong><code>Partial&lt;T&gt;</code>:</strong> Makes all properties optional.
                </li>
                <li>
                  <strong><code>Readonly&lt;T&gt;</code>:</strong> Makes all properties readonly.
                </li>
                <li>
                  <strong><code>Pick&lt;T, K&gt;</code>:</strong> Picks specified properties.
                </li>
                <li>
                  <strong><code>Omit&lt;T, K&gt;</code>:</strong> Removes specified properties.
                </li>
                <li>
                  <strong><code>Exclude&lt;T, U&gt;</code>:</strong> Excludes types assignable to U.
                </li>
                <li>
                  <strong><code>Extract&lt;T, U&gt;</code>:</strong> Extracts types assignable to U.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Type Guards & Assertions */}
          <Card>
            <CardHeader>
              <CardTitle>Type Guards & Assertions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Type Guards:</strong> Runtime checks that narrow types (<code>typeof</code>, <code>instanceof</code>, custom predicates).
                </li>
                <li>
                  <strong>Type Assertions (<code>as</code>):</strong> Tell TS you know better. Use sparingly.
                </li>
                <li>
                  <strong>Non-null Assertion (<code>!</code>):</strong> Asserts value is not null/undefined.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Interface vs Type */}
          <Card>
            <CardHeader>
              <CardTitle>Interfaces vs. Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong><code>interface</code>:</strong> Can be merged/extended, preferred for object shapes.
                </li>
                <li>
                  <strong><code>type</code>:</strong> More flexible — unions, tuples, primitives, mapped types.
                </li>
                <li>
                  <strong>Best Practice:</strong> Use <code>interface</code> for public APIs/objects, <code>type</code> for complex type logic.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          Most Important Code Patterns
        </h2>
        <div className="space-y-10">
          {/* 1. Generic Identity */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              1. Generic Identity Function
            </h3>
            <CodeBlock
              language="typescript"
              code={`function identity<T>(arg: T): T {
  return arg;
}

// Usage
const str = identity<string>("hello");  // type: string
const num = identity(42);               // type: number (inferred)
const arr = identity<number[]>([1, 2, 3]);`}
            />
          </div>

          {/* 2. Partial & Pick */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              2. Using Partial and Pick
            </h3>
            <CodeBlock
              language="typescript"
              code={`interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

type UpdateUser = Partial<User>;
type UserPreview = Pick<User, "name" | "email">;

// Valid
const update: UpdateUser = { name: "Alice" };
const preview: UserPreview = { name: "Bob", email: "bob@x.com" };`}
            />
          </div>

          {/* 3. React Props Typing */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              3. Typing React Props & Events
            </h3>
            <CodeBlock
              language="tsx"
              code={`import React from "react";

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {label}
    </button>
  );
};`}
            />
          </div>
        </div>
      </section>

      {/* Practice Questions - Only showing 3 fixed ones */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          Top Practice Questions HackerRank Loves
        </h2>
        <div className="space-y-8">
          {/* Question 1 */}
          <Card>
            <CardHeader>
              <CardTitle>1. Generic useState (Custom Hook)</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="typescript"
                code={`function useState<T>(
  initialValue: T | (() => T)
): [T, (newValue: T | ((prev: T) => T)) => void] {
  // Simplified — real React uses internal fiber
  let _value: T = typeof initialValue === "function" 
    ? (initialValue as () => T)() 
    : initialValue;

  const setValue = (newValue: T | ((prev: T) => T)) => {
    _value = typeof newValue === "function" 
      ? (newValue as (prev: T) => T)(_value)
      : newValue;
    console.log("New state:", _value);
  };

  return [_value, setValue];
}

// Usage
const [count, setCount] = useState(0);
const [name, setName] = useState(() => "John");`}
              />
            </CardContent>
          </Card>

          {/* Question 3 - DeepPartial */}
          <Card>
            <CardHeader>
              <CardTitle>3. DeepPartial&lt;T&gt; Utility Type</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="typescript"
                code={`type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

// Example
interface Config {
  api: {
    url: string;
    timeout: number;
  };
  features: {
    darkMode: boolean;
    notifications: {
      email: boolean;
      push: boolean;
    };
  };
}

const partialConfig: DeepPartial<Config> = {
  features: { notifications: { push: true } }
};`}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <nav className="flex justify-between mt-12">
        <Link href="/react" passHref legacyBehavior>
          <Button  variant="outline" className="flex items-center gap-2">
            <ArrowLeftIcon className="h-4 w-4" /> Previous: React (Intermediate)
          </Button>
        </Link>
        <Link href="/nodejs" passHref legacyBehavior>
          <Button className="flex items-center gap-2">
            Next Topic: Node.js (Intermediate) <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default TypescriptIntermediatePage;