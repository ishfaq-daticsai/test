import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { ArrowLeftIcon, ArrowRightIcon, Brain, Zap, Trophy, AlertCircle, Target } from "lucide-react";

const ProblemSolvingAdvancedPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-12 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Problem Solving: Advanced → God Tier
        </h1>
        <div className="flex flex-wrap justify-center gap-5 mb-8">
          <Badge variant="outline" className="px-6 py-3 text-lg font-bold border-2">
            0 Hours Mastery
          </Badge>
          <Badge variant="destructive" className="px-6 py-3 text-lg font-bold">
            Advanced · Staff / Principal Level
          </Badge>
          <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <Trophy className="w-7 h-7 mr-2" /> Top 1% HackerRank
          </Badge>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Master the hardest algorithmic patterns that appear in Google L5+, Meta E6+, Amazon SDE III, and Bloomberg interviews. 
          These are the exact problems that separate senior engineers from the rest.
        </p>
      </header>

      {/* What Big Tech Actually Tests */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Target className="w-12 h-12 text-red-600" />
          What Google, Meta, Bloomberg Actually Test (2025)
        </h2>
        <Card className="border-2 shadow-2xl">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-6 text-lg font-medium">
              {[
                "DP with state reconstruction (not just value)",
                "Graph: Dijkstra + backtracking path",
                "Sliding window + monotonic queue/deque",
                "Binary search on answer + greedy validation",
                "Trie + DFS with backtracking",
                "Union-Find with path compression + rank",
                "Segment Tree / Fenwick Tree (BIT)",
                "Bit manipulation + DP (state compression)"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-orange-500" />
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Complexity God Tier */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Complexity God Tier</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { name: "O(N)", color: "bg-green-600", desc: "Single pass" },
            { name: "O(N log N)", color: "bg-blue-600", desc: "Sorting / Heap" },
            { name: "O(N²)", color: "bg-orange-600", desc: "DP / Nested" },
            { name: "O(2^N)", color: "bg-red-600", desc: "Subsets / Backtrack" },
            { name: "O(N!)", color: "bg-purple-700", desc: "Permutations" }
          ].map((c) => (
            <Card key={c.name} className={`text-white ${c.color} border-0 shadow-xl`}>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">{c.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center font-medium">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gold Tier Problems */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-primary">Top 8 God-Tier Problems (With Optimal Solutions)</h2>
        <div className="space-y-14">

          {/* 1. Trapping Rain Water */}
          <Card className="overflow-hidden border-2 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white">
              <CardTitle className="text-2xl">1. Trapping Rain Water (Two Pointers + Greedy)</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <CodeBlock language="ts" code={`function trap(height: number[]): number {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }
  return water;
}

// [0,1,0,2,1,0,1,3,2,1,2,1] → 6`} />
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge className="bg-blue-600">Time: O(N)</Badge>
                <Badge>Space O(1)</Badge>
                <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white">Google Favorite</Badge>
              </div>
            </CardContent>
          </Card>

          {/* 2. Word Break II (DP + Backtracking */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-purple-700 to-pink-700 text-white">
              <CardTitle className="text-2xl">2. Word Break II – Return All Possible Sentences</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`function wordBreak(s: string, wordDict: string[]): string[] {
  const wordSet = new Set(wordDict);
  const memo = new Map<string, string[]>();

  function dfs(str: string): string[] {
    if (memo.has(str)) return memo.get(str)!;
    if (str === "") return [""];

    const res: string[] = [];
    for (const word of wordSet) {
      if (str.startsWith(word)) {
        const rest = dfs(str.slice(word.length));
        for (const sentence of rest) {
          res.push(sentence ? \`\${word} \${sentence.trim()}\` : word);
        }
      }
    }
    memo.set(str, res);
    return res;
  }

  return dfs(s);
}

// "catsanddog", ["cat","cats","and","sand","dog"] → ["cat sand dog", "cats and dog"]`} />
            </CardContent>
          </Card>

          {/* 3. LRU Cache – True O(1) */}
          <Card className="overflow-hidden border-2 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
              <CardTitle className="text-2xl">3. LRU Cache – Real O(1) with Doubly Linked List + Map</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`class ListNode {
  key: number;
  val: number;
  prev: ListNode | null = null;
  next: ListNode | null = null;
  constructor(key: number, val: number) { this.key = key; this.val = val; }
}

class LRUCache {
  capacity: number;
  map: Map<number, ListNode> = new Map();
  head: ListNode = new ListNode(0, 0);
  tail: ListNode = new ListNode(0, 0);

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private remove(node: ListNode) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private addToHead(node: ListNode) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key)!;
    this.remove(node);
    this.addToHead(node);
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key)!;
      node.val = value;
      this.remove(node);
      this.addToHead(node);
    } else {
      const node = new ListNode(key, value);
      this.map.set(key, node);
      this.addToHead(node);
      if (this.map.size > this.capacity) {
        const lru = this.tail.prev!;
        this.remove(lru);
        this.map.delete(lru.key);
      }
    }
  }
}`} />
              <Badge className="mt-4 bg-emerald-600 text-white">True O(1) · Meta/Google Standard</Badge>
            </CardContent>
          </Card>

          {/* 4. Median of Two Sorted Arrays */}
          <Card>
            <CardHeader><CardTitle>4. Median of Two Sorted Arrays (Binary Search)</CardTitle></CardHeader>
            <CardContent>
              <CodeBlock language="ts" code={`function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  const m = nums1.length, n = nums2.length;
  let left = 0, right = m;

  while (left <= right) {
    const partitionX = (left + right) >> 1;
    const partitionY = ((m + n + 1) >> 1) - partitionX;

    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightX = partitionX === m ? Infinity : nums1[partitionX];

    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightY = partitionY === n ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      right = partitionX - 1;
    } else {
      left = partitionX + 1;
    }
  }
  throw new Error("Input arrays are not sorted");
}`} />
              <Badge className="bg-red-600 text-white">O(log(min(m,n))) · Legendary</Badge>
            </CardContent>
          </Card>

          {/* 5. Sliding Window Maximum (Deque) */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
              <CardTitle className="text-2xl">5. Sliding Window Maximum (Monotonic Queue)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const deque: number[] = []; // stores indices

  for (let i = 0; i < nums.length; i++) {
    // Remove elements outside window
    if (deque.length && deque[0] === i - k) deque.shift();

    // Remove smaller elements from back
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// [1,3,-1,-3,5,3,6,7], k=3 → [3,3,5,5,6,7]`} />
              <Badge className="mt-4 bg-orange-600 text-white">Bloomberg / Amazon Favorite</Badge>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Red Flags */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <AlertCircle className="w-12 h-12 text-red-600" />
          Interview-Killing Mistakes (Advanced Edition)
        </h2>
        <Card className="bg-red-50 dark:bg-red-950/40 border-red-400">
          <CardContent className="p-10">
            <ul className="space-y-5 text-lg">
              {[
                "Using O(N²) DP when O(N) is possible",
                "Not using monotonic queue for sliding window max/min",
                "Using array for LRU instead of DLL + Map",
                "Not handling overflow in Dijkstra (use Number.MAX_SAFE_INTEGER)",
                "Forgetting path compression in Union-Find",
                "Using recursion for DP without memoization",
                "Not considering binary search on answer",
                "Writing O(N log N) when O(N) exists"
              ].map((mistake) => (
                <li key={mistake} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center text-2xl">X</div>
                  <span className="font-medium">{mistake}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Pro Tips */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Pro Tips That Win Senior+ Interviews</h2>
        <Card>
          <CardContent className="p-10">
            <ol className="space-y-6 text-lg">
              <li><strong>Always ask: “Can I assume input is sorted?”</strong></li>
              <li><strong>State the DP state definition clearly</strong>: “dp[i][j] = longest palindrome centered at i,j”</li>
              <li><strong>Draw the monotonic queue</strong> — interviewers love it</li>
              <li><strong>Mention Union-Find with path compression + rank</strong> — instant senior signal</li>
              <li><strong>Know when to use binary search on answer</strong> (e.g., aggressive cows, book allocation)</li>
              <li><strong>Explain why your greedy works</strong> — don’t just code it</li>
              <li><strong>Know the 5 ways to solve knapsack</strong></li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Quick Summary */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">One-Page God Tier Cheat Sheet</h2>
        <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/50">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-10 text-lg">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-600">God Tier Patterns</h3>
                <ul className="space-y-3 font-medium">
                  <li>Binary Search on Answer</li>
                  <li>Monotonic Queue / Deque</li>
                  <li>DP with Bitmask (State Compression)</li>
                  <li>Trie + Backtracking</li>
                  <li>Union-Find + Rank + Path Compression</li>
                  <li>Segment Tree / Fenwick Tree</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Must-Know Problems</h3>
                <ul className="space-y-3 font-medium">
                  <li>Trapping Rain Water</li>
                  <li>Sliding Window Maximum</li>
                  <li>Word Break II</li>
                  <li>Median of Two Sorted Arrays</li>
                  <li>LRU Cache (DLL + Map)</li>
                  <li>Alien Dictionary</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between gap-6 mt-20 pb-10">
        <Link href="/problem-solving-intermediate" passHref legacyBehavior>
          <Button variant="outline" size="lg" className="flex items-center gap-3 text-lg px-8 py-6">
            <ArrowLeftIcon className="h-6 w-6" /> Previous: Problem Solving (Intermediate)
          </Button>
        </Link>
        <Link href="/system-design" passHref legacyBehavior>
          <Button size="lg" variant={"outline"} className="flex items-center gap-3 text-lg px-8 py-6">
            Next: System Design Fundamentals <ArrowRightIcon className="h-6 w-6" />
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default ProblemSolvingAdvancedPage;