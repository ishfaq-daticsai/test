"use client"

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { ArrowLeftIcon, ArrowRightIcon, Zap, Shield, Brain, Trophy, AlertCircle, TrendingUp, Target, Swords, Puzzle } from "lucide-react";

const ProblemSolvingAdvancedPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-12 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Problem Solving: Advanced Algorithms
        </h1>
        <div className="flex flex-wrap justify-center gap-5 mb-8">
          <Badge variant="outline" className="px-6 py-3 text-lg font-bold border-2">
            0 Hours Elite Practice
          </Badge>
          <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-red-600 to-orange-600 text-white">
            Crack Any FAANG Interview
          </Badge>
          <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
            <Trophy className="w-7 h-7 mr-2" /> Top 1% LeetCode Grandmaster
          </Badge>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Conquer the most challenging algorithmic problems seen in FAANG interviews. This section covers advanced data structures, complex dynamic programming, and intricate graph algorithms.
        </p>
      </header>

      {/* What Big Tech Actually Tests */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <Brain className="w-12 h-12 text-red-600" />
          What Google, Meta, Amazon Actually Test (2025)
        </h2>
        <Card className="border-2 shadow-2xl">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-6 text-lg font-medium">
              {[
                "Implement 'Trapping Rain Water' with optimal time/space complexity.",
                "Solve 'Merge k Sorted Lists' efficiently using priority queues.",
                "Design an LFU Cache and justify eviction policies.",
                "Apply advanced Dynamic Programming to solve 'Regular Expression Matching'.",
                "Optimize 'Sliding Window Maximum' using a deque."
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
          <Puzzle className="w-12 h-12 text-orange-600" />
          Core Concepts Cheat Sheet
        </h2>
        <div className="space-y-8">
          <Card>
            <CardHeader><CardTitle>Advanced Data Structures</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Segment Tree:</strong> Efficiently query range sums/min/max and update elements in O(log N).</li>
                <li><strong>Fenwick Tree (BIT):</strong> Similar to Segment Tree, often simpler for prefix sums/updates.</li>
                <li><strong>Trie (Prefix Tree):</strong> Optimized for string search and prefix matching.</li>
                <li><strong>Skip List:</strong> Probabilistic data structure for sorted lists, average O(log N) for search/insert/delete.</li>
                <li><strong>Disjoint Set Union (DSU):</strong> For managing partitions of a set (e.g., connected components).</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Dynamic Programming Patterns</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>State Definition:</strong> Clearly define <code>dp[i]</code> or <code>dp[i][j]</code>.</li>
                <li><strong>Recurrence Relation:</strong> How <code>dp[i]</code> relates to previous states.</li>
                <li><strong>Base Cases:</strong> Starting conditions for the DP.</li>
                <li><strong>Memoization (Top-Down) vs. Tabulation (Bottom-Up):</strong> Understand trade-offs.</li>
                <li><strong>Space Optimization:</strong> Reducing space complexity from O(N) to O(1) or O(K).</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Advanced Graph Algorithms</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Floyd-Warshall:</strong> All-pairs shortest path in O(V^3).</li>
                <li><strong>Bellman-Ford:</strong> Single-source shortest path with negative edge weights in O(V*E).</li>
                <li><strong>Kruskal's & Prim's:</strong> Minimum Spanning Tree algorithms.</li>
                <li><strong>Topological Sort:</strong> For Directed Acyclic Graphs (DAGs).</li>
                <li><strong>Strongly Connected Components (SCCs):</strong> Tarjan's or Kosaraju's algorithm.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Most Important Code Patterns */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-primary flex items-center gap-4">
          <Swords className="w-12 h-12 text-yellow-600" />
          Top 6 Advanced Code Patterns
        </h2>
        <div className="space-y-14">

          {/* 1. Trapping Rain Water (Two Pointers) */}
          <Card className="overflow-hidden border-2 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
              <CardTitle className="text-2xl">1. Trapping Rain Water (Two Pointers)</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <CodeBlock language="ts" code={`function trap(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let trappedWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                trappedWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                trappedWater += rightMax - height[right];
            }
            right--;
        }
    }
    return trappedWater;
}`}/>
              <Badge className="mt-4 bg-red-600 text-white">Optimal O(N) Time, O(1) Space</Badge>
            </CardContent>
          </Card>

          {/* 2. Merge k Sorted Lists (Priority Queue) */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
              <CardTitle className="text-2xl">2. Merge k Sorted Lists (Priority Queue)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const minHeap = new MinPriorityQueue<ListNode>((a) => a.val);

  for (const list of lists) {
    if (list) {
      minHeap.enqueue(list);
    }
  }

  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  while (!minHeap.isEmpty()) {
    const { element: node } = minHeap.dequeue();

    if (!head) {
      head = node;
      tail = node;
    } else {
      tail!.next = node;
      tail = node;
    }

    if (node.next) {
      minHeap.enqueue(node.next);
    }
  }

  return head;
}
`}/>
              <Badge className="mt-4 bg-orange-600 text-white">O(N log k) Time, O(k) Space</Badge>
            </CardContent>
          </Card>

          {/* 3. LFU Cache (Doubly Linked List + Hash Maps) */}
          <Card className="overflow-hidden border-2 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
              <CardTitle className="text-2xl">3. LFU Cache (Doubly Linked List + Hash Maps)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`class Node {
  key: number;
  value: number;
  freq: number;
  prev: Node | null;
  next: Node | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.freq = 1;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  head: Node;
  tail: Node;
  size: number;

  constructor() {
    this.head = new Node(0, 0); // Dummy head
    this.tail = new Node(0, 0); // Dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  addFront(node: Node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
    this.size++;
  }

  removeNode(node: Node) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
    this.size--;
  }

  isEmpty() {
    return this.size === 0;
  }

  getTail() {
    return this.tail.prev!;
  }
}

class LFUCache {
  capacity: number;
  minFreq: number;
  keyToNode: Map<number, Node>;
  freqToList: Map<number, DoublyLinkedList>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.minFreq = 0;
    this.keyToNode = new Map(); // key -> Node
    this.freqToList = new Map(); // freq -> DoublyLinkedList
  }

  _updateFreq(node: Node) {
    // Remove node from its current frequency list
    this.freqToList.get(node.freq)!.removeNode(node);
    if (this.freqToList.get(node.freq)!.isEmpty()) {
      if (this.minFreq === node.freq) {
        this.minFreq++;
      }
      this.freqToList.delete(node.freq);
    }

    // Increment frequency and add to new frequency list
    node.freq++;
    if (!this.freqToList.has(node.freq)) {
      this.freqToList.set(node.freq, new DoublyLinkedList());
    }
    this.freqToList.get(node.freq)!.addFront(node);
  }

  get(key: number): number {
    if (this.capacity === 0 || !this.keyToNode.has(key)) {
      return -1;
    }

    const node = this.keyToNode.get(key)!;
    this._updateFreq(node);
    return node.value;
  }

  put(key: number, value: number): void {
    if (this.capacity === 0) return;

    if (this.keyToNode.has(key)) {
      const node = this.keyToNode.get(key)!;
      node.value = value;
      this._updateFreq(node);
    } else {
      if (this.keyToNode.size === this.capacity) {
        // Evict LFU item
        const lfuList = this.freqToList.get(this.minFreq)!;
        const lfuNode = lfuList.getTail();
        lfuList.removeNode(lfuNode);
        this.keyToNode.delete(lfuNode.key);
        if (lfuList.isEmpty()) {
          this.freqToList.delete(this.minFreq);
        }
      }

      // Add new node
      const newNode = new Node(key, value);
      this.keyToNode.set(key, newNode);
      if (!this.freqToList.has(1)) {
        this.freqToList.set(1, new DoublyLinkedList());
      }
      this.freqToList.get(1)!.addFront(newNode);
      this.minFreq = 1;
    }
  }
}
`}/>
              <Badge className="mt-4 bg-amber-600 text-white">Complex, but O(1) Average Time</Badge>
            </CardContent>
          </Card>

          {/* 4. Sliding Window Maximum (Deque) */}
          <Card>
            <CardHeader><CardTitle>4. Sliding Window Maximum (Deque)</CardTitle></CardHeader>
            <CardContent>
              <CodeBlock language="ts" code={`function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const deque: number[] = []; // Stores indices

    for (let i = 0; i < nums.length; i++) {
        // Remove elements out of the current window
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // Remove smaller elements from the back of the deque
        // as they are no longer potential maximums
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }

        // Add current element's index to the deque
        deque.push(i);

        // If window has formed, add max to result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}`}/>
              <Badge className="mt-4 bg-blue-600 text-white">O(N) Time, O(k) Space</Badge>
            </CardContent>
          </Card>

          {/* 5. Regular Expression Matching (DP) */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
              <CardTitle className="text-2xl">5. Regular Expression Matching (Dynamic Programming)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <CodeBlock language="ts" code={`function isMatch(s: string, p: string): boolean {
    const m = s.length;
    const n = p.length;
    const dp: boolean[][] = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

    dp[0][0] = true; // Empty string matches empty pattern

    // Handle patterns like a*, a*b*, etc.
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2]; // Zero occurrences
                if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j]; // One or more occurrences
                }
            }
        }
    }

    return dp[m][n];
}`}/>
              <Badge className="mt-4 bg-green-600 text-white">Hard DP Problem</Badge>
            </CardContent>
          </Card>

          {/* 6. A* Search Algorithm (Conceptual) */}
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardTitle className="text-2xl">6. A* Search Algorithm (Pathfinding)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-lg">A* is a graph traversal and pathfinding algorithm, which is often used in situations where there is a clear goal and a heuristic function can estimate the cost from the current node to the goal.</p>
              <h3 className="text-xl font-semibold mb-3">Key Components:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>f(n) = g(n) + h(n)</strong></li>
                <li><code>g(n)</code>: Cost from start node to node n.</li>
                <li><code>h(n)</code>: Heuristic estimate of cost from node n to goal.</li>
                <li>Uses a priority queue to explore nodes with the lowest f(n).</li>
              </ul>
              <CodeBlock language="ts" code={`// Conceptual structure (implementation requires a Priority Queue and Grid/Graph representation)
interface Node {
  x: number;
  y: number;
  g: number; // Cost from start
  h: number; // Heuristic cost to goal
  f: number; // g + h
  parent: Node | null;
}

function aStarSearch(grid: number[][], start: [number, number], end: [number, number]): Node[] | null {
  // Initialize open and closed lists/sets
  // Use a MinPriorityQueue for the open list, prioritized by f value
  // Loop while open list is not empty:
  //   Pop node with smallest f
  //   If current node is end, reconstruct path
  //   Generate neighbors
  //   For each neighbor: calculate g, h, f; if better path found or new node, add/update in open list
  return null; // Path not found
}`}/>
              <Badge className="mt-4 bg-purple-600 text-white">Heuristic Search</Badge>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Common Mistakes & How to Avoid Them */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary flex items-center gap-4">
          <AlertCircle className="w-12 h-12 text-red-600" />
          Interview-Killing Mistakes (Advanced PS Edition)
        </h2>
        <Card className="bg-red-50 dark:bg-red-950/40 border-red-400">
          <CardContent className="p-10">
            <ul className="space-y-5 text-lg">
              {[
                "Confusing memoization with tabulation in DP problems",
                "Not identifying the correct state for Dynamic Programming",
                "Using brute force where optimal O(N) or O(N log N) solution exists",
                "Incorrectly applying graph traversal algorithms (DFS/BFS edge cases)",
                "Failing to analyze time and space complexity of custom data structures (e.g., LFU Cache)",
                "Overlooking edge cases (empty arrays, single elements, negative numbers) in solutions",
                "Not considering integer overflow or large input constraints."
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
          <Target className="w-12 h-12 text-green-600" />
          Pro Tips for Crushing Hard Problems
        </h2>
        <Card>
          <CardContent className="p-10">
            <ol className="space-y-6 text-lg">
              <li><strong>Master core patterns:</strong> Two pointers, sliding window, DP state transitions, graph traversals.</li>
              <li><strong>Visualize with examples:</strong> Draw out DP tables, graph states, deque operations.</li>
              <li><strong>Deconstruct the problem:</strong> Break it down into smaller, known subproblems.</li>
              <li><strong>Think about constraints:</strong> What are N, M? What are the value ranges? This guides complexity.</li>
              <li><strong>Practice consistently:</strong> Hard problems require pattern recognition built over time.</li>
              <li><strong>Use a custom test runner:</strong> Automate testing with multiple edge cases.</li>
              <li><strong>Communicate your thought process:</strong> Explain your brute force, then optimize.</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Quick Summary */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">Quick Revision Summary</h2>
        <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/50">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-10 text-lg">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-600">Key Algorithm Types</h3>
                <ul className="space-y-3 font-medium">
                  <li>Advanced DP (Bitmask, Digit DP)</li>
                  <li>Max Flow/Min Cut</li>
                  <li>Convex Hull Trick</li>
                  <li>Sufﬁx Arrays/Trees</li>
                  <li>Computational Geometry</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Must-Know DS</h3>
                <ul className="space-y-3 font-medium">
                  <li>Segment Tree, Fenwick Tree</li>
                  <li>Trie</li>
                  <li>Disjoint Set Union</li>
                  <li>Heavy-Light Decomposition</li>
                  <li>Sqrt Decomposition</li>
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
            <ArrowLeftIcon className="h-6 w-6" /> Previous: REST API Design & Security
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
