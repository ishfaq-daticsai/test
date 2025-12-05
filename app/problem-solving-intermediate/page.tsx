import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { ArrowLeftIcon, ArrowRightIcon, Brain, Zap, Trophy, AlertCircle } from "lucide-react";

const ProblemSolvingIntermediatePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 bg-clip-text text-transparent">
          Problem Solving: Intermediate
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="px-6 py-3 text-lg font-bold border-2">
            0 Hours Deep Practice
          </Badge>
          <Badge variant="secondary" className="px-6 py-3 text-lg font-bold">
            Intermediate → Senior Ready
          </Badge>
          <Badge className="px-6 py-3 text-lg font-bold bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100">
            <Trophy className="w-6 h-6 mr-2" /> Top 10% HackerRank
          </Badge>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Master the exact patterns that appear in 90% of intermediate coding interviews at FAANG, startups, and HackerRank assessments.
        </p>
      </header>

      {/* What Companies Actually Test */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Brain className="w-12 h-12 text-purple-600" />
          What HackerRank & Big Tech Actually Test (2025)
        </h2>
        <Card className="border-2 shadow-xl">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-6 text-lg font-medium">
              {[
                "Two Pointers + Sliding Window mastery",
                "Hash Map tricks (frequency, prefix, two-sum variants)",
                "Fast & Slow pointers in linked lists",
                "Binary Search on answer (not just sorted arrays)",
                "DFS/BFS with state (not just traversal)",
                "Greedy with proof (why it works)",
                "DP with space optimization",
                "Bit manipulation for O(1) space"
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

      {/* Complexity Cheat Sheet */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Time Complexity Cheat Sheet</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "O(1)", color: "bg-green-500", desc: "Hash Map lookup" },
            { name: "O(log N)", color: "bg-blue-500", desc: "Binary Search" },
            { name: "O(N)", color: "bg-yellow-500", desc: "Single pass" },
            { name: "O(N log N)", color: "bg-orange-500", desc: "Sorting" },
            { name: "O(N²)", color: "bg-red-500", desc: "Nested loops" },
            { name: "O(2^N)", color: "bg-purple-600", desc: "Subsets" }
          ].map((c) => (
            <Card key={c.name} className="text-center hover:scale-105 transition-transform">
              <CardHeader>
                <div className={`w-full h-16 ${c.color} rounded-t-lg flex items-center justify-center`}>
                  <span className="text-3xl font-bold text-white">{c.name}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gold Tier Questions */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-10 text-primary">Top 8 Must-Know Intermediate Problems (With Optimal Solutions)</h2>
        <div className="space-y-12">

          {/* 1. Longest Substring Without Repeating Characters */}
          <Card className="overflow-hidden border-2 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              <CardTitle className="text-2xl">1. Longest Substring Without Repeating Characters (Sliding Window + Hash Map)</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <CodeBlock language="ts" code={`function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let left = 0, max = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right])! + 1, left);
    }
    map.set(s[right], right);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

// "abcabcbb" → 3 ("abc")
// "bbbbb" → 1
// "pwwkew" → 3 ("wke")
`} />
              <div className="mt-4 flex gap-4">
                <Badge variant="secondary">Time: O(N)</Badge>
                <Badge>Space: O(min(N, 256))</Badge>
                <Badge className="bg-green-600 text-white">Top 50 LeetCode</Badge>
              </div>
            </CardContent>
          </Card>

          {/* 2. Container With Most Water */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardTitle className="text-2xl">2. Container With Most Water (Two Pointers Greedy)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`function maxArea(height: number[]): number {
  let left = 0, right = height.length - 1;
  let max = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
}`} />
              <p className="mt-4 text-sm font-medium text-green-600">
                Proof: Moving the shorter pointer gives chance for taller bar
              </p>
            </CardContent>
          </Card>

          {/* 3. 3Sum */}
          <Card>
            <CardHeader><CardTitle>3. 3Sum (Two Pointers + Sorting)</CardTitle></CardHeader>
            <CardContent>
              <CodeBlock language="ts" code={`function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++; right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}`} />
            </CardContent>
          </Card>

          {/* 4. LRU Cache */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <CardTitle className="text-2xl">4. LRU Cache (Hash Map + Doubly Linked List)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`class LRUCache {
  capacity: number;
  map: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const val = this.map.get(key)!;
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
      const firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
    }
  }
}`} />
              <Badge className="mt-4">JavaScript Map preserves insertion order</Badge>
            </CardContent>
          </Card>

          {/* Add more: Kth Largest, Merge Intervals, etc. */}
        </div>
      </section>

      {/* Red Flags */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <AlertCircle className="w-12 h-12 text-red-600" />
          Interview-Killing Mistakes
        </h2>
        <Card className="bg-red-50 dark:bg-red-950/30 border-red-300">
          <CardContent className="p-10">
            <ul className="space-y-5 text-lg">
              {[
                "Using nested loops when two pointers exist",
                "Not handling duplicates in sorted array problems",
                "Modifying input array when not allowed",
                "Off-by-one errors in sliding window",
                "Forgetting to sort before two pointers",
                "Using O(N²) when O(N log N) is acceptable but slow",
                "Not explaining why greedy works"
              ].map((mistake) => (
                <li key={mistake} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl">X</div>
                  <span className="font-medium">{mistake}</span>
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
          <CardContent className="p-10">
            <ol className="space-y-6 text-lg">
              <li><strong>Always ask: "Can I modify the input?"</strong></li>
              <li><strong>State the pattern out loud</strong>: "This looks like a sliding window problem"</li>
              <li><strong>Draw the pointers</strong> — interviewers love visual thinking</li>
              <li><strong>Handle edge cases first</strong>: empty, one element, duplicates</li>
              <li><strong>Write the brute force first</strong>, then optimize</li>
              <li><strong>Explain time/space at the end</strong> — always!</li>
              <li><strong>Test with a real example</strong> — walk through it</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Quick Summary */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">One-Page Cheat Sheet</h2>
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Two Pointers</h3>
                <ul className="space-y-2">Container With Most Water · 3Sum · Remove Duplicates</ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Sliding Window</h3>
                <ul className="space-y-2">Longest Substring · Max Subarray · Min Window</ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Fast & Slow</h3>
                <ul className="space-y-2">Cycle Detection · Middle of Linked List · Palindrome LL</ul>
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
        <Link href="/problem-solving-advanced" passHref legacyBehavior>
          <Button size="lg" variant={"outline"} className="flex items-center gap-3 text-lg px-8 py-6">
            Next: Problem Solving (Advanced) <ArrowRightIcon className="h-6 w-6" />
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default ProblemSolvingIntermediatePage;
