import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { ArrowLeftIcon, ArrowRightIcon, Zap, Brain, Trophy, Shield, AlertCircle, Cloud, Server, Database, Network, Globe, Layers, Repeat, Hammer, Lock, Coins, Gauge } from "lucide-react";

const AwsIntermediatePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero */}
      <header className="mb-16 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 via-amber-500 to-red-600 bg-clip-text text-transparent">
          AWS Mastery: Intermediate → Senior Cloud Engineer
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {/* <Badge variant="outline" className="px-8 py-4 text-xl font-bold border-2">
             Practice
          </Badge> */}
          <Badge className="px-8 py-4 text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 text-white">
            Production-Grade Cloud Architecture
          </Badge>
          <Badge className="px-8 py-4 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <Trophy className="w-8 h-8 mr-3" /> Used at Netflix, Airbnb, Robinhood
          </Badge>
        </div>
        <p className="text-2xl md:text-3xl text-muted-foreground max-w-6xl mx-auto leading-relaxed">
          Master the AWS patterns that power billion-dollar, globally distributed systems. These are the exact designs that senior cloud engineers use in production — and what FAANG+ companies test in system design rounds.
        </p>
      </header>

      {/* What Big Tech Actually Tests */}
      <section className="mb-20">
        <h2 className="text-5xl font-bold mb-10 text-primary flex items-center gap-5">
          <Brain className="w-14 h-14 text-orange-600" />
          What Netflix, Airbnb, Robinhood Actually Test (2025)
        </h2>
        <Card className="border-2 shadow-2xl">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-8 text-xl font-medium">
              {[
                "Multi-region active-active with Route 53 + DynamoDB Global Tables",
                "Zero-downtime deployments with ALB + Blue/Green (CodeDeploy/ECS)",
                "Cost optimization: Savings Plans vs Reserved Instances vs Spot",
                "Secure cross-account access with IAM Roles + OIDC (GitHub Actions)",
                "Event-driven architecture: EventBridge → Lambda/SQS → Step Functions",
                "Observability: X-Ray + CloudWatch + OpenTelemetry",
                "Chaos engineering ready: Multi-AZ, fault injection, backup strategy",
                "Infrastructure as Code: CDK v2 + TypeScript (not CloudFormation YAML)"
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-4">
                  <Zap className="w-8 h-8 text-yellow-500" />
                  {skill}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* AWS Engineer Levels */}
      <section className="mb-20">
        <h2 className="text-5xl font-bold mb-10 text-primary">AWS Engineer Levels (2025)</h2>
        <div className="grid md:grid-cols-5 gap-8">
          {[
            { level: "Junior", desc: "EC2 + S3 + RDS", color: "bg-gray-600" },
            { level: "Mid", desc: "Lambda + API Gateway", color: "bg-blue-600" },
            { level: "Senior", desc: "EventBridge + Step Functions + CDK", color: "bg-orange-600" },
            { level: "Staff", desc: "Multi-region + Chaos + Cost Governance", color: "bg-purple-600" },
            { level: "Principal", desc: "Custom CRDs + Crossplane + Karpenter", color: "bg-gradient-to-r from-pink-600 to-red-600" }
          ].map((tier) => (
            <Card key={tier.level} className={`text-white ${tier.color} border-0 shadow-2xl transform hover:scale-105 transition`}>
              <CardHeader>
                <CardTitle className="text-3xl">{tier.level}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-medium opacity-90">{tier.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gold Tier Production Patterns */}
      <section className="mb-20">
        <h2 className="text-5xl font-bold mb-14 text-primary">Top 8 Production-Grade AWS Patterns (2025)</h2>
        <div className="space-y-16">

          {/* 1. Secure File Upload with Presigned URL + S3 Object Lambda */}
          <Card className="overflow-hidden border-2 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <CardTitle className="text-3xl">1. Secure Uploads with Presigned URL + Virus Scan</CardTitle>
            </CardHeader>
            <CardContent className="pt-10">
              <CodeBlock language="ts" code={`// API Route: Generate presigned URL + enforce virus scan
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function generateSecureUploadUrl(fileName: string, fileType: string) {
  const command = new PutObjectCommand({
    Bucket: "user-uploads-prod",
    Key: \`${Date.now()}-\${fileName}\`,
    ContentType: fileType,
    Metadata: { "scan-required": "true" }
  });

  return await getSignedUrl(s3Client, command, { expiresIn: 300 });
}

// S3 Event → Lambda → ClamAV (via S3 Object Lambda or EFS) → Tag object as clean/quarantined
// Then trigger SNS notification or move to quarantine bucket`} />
              <Badge className="mt-6 bg-emerald-600 text-white text-lg">Used at Airbnb, Dropbox</Badge>
            </CardContent>
          </Card>

          {/* 2. Event-Driven Architecture with EventBridge Schema Registry */}
          <Card className="overflow-hidden border-2 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardTitle className="text-3xl">2. EventBridge + Step Functions + Schema Registry</CardTitle>
            </CardHeader>
            <CardContent className="pt-10">
              <CodeBlock language="json" code={`// EventBridge Bus: order-events-prod
{
  "source": "com.orders.service",
  "detail-type": "OrderCreated",
  "detail": {
    "orderId": "ord-123",
    "customerId": "cus-456",
    "amount": 99.99,
    "items": [ ... ]
  }
}

// Step Functions orchestrates: Inventory → Payment → Shipping → Notification
// Schema Registry enforces contract → auto-generates TypeScript types`} />
              <Badge className="mt-6 bg-purple-600 text-white text-lg">Netflix, Duolingo, Ramp</Badge>
            </CardContent>
          </Card>

          {/* 3. Multi-Region Active-Active with DynamoDB Global Tables */}
          <Card className="overflow-hidden border-2 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              <CardTitle className="text-3xl">3. Multi-Region Active-Active (RPO=0, RTO{`<`}1min)</CardTitle>
            </CardHeader>
            <CardContent className="pt-10">
              <CodeBlock language="text" code={`Architecture:
┌─────────────────┐     ┌─────────────────┐
│   us-east-1     │     │   eu-west-1     │
│  ALB + ECS      │     │  ALB + ECS      │
│  DynamoDB GT    │↔↔↔↔│  DynamoDB GT    │
│  Aurora Global  │↔↔↔↔│  Aurora Global  │
│  Route 53 LBR   │─────│  Route 53 LBR   │
└─────────────────┘     └─────────────────┘

Latency-based routing + Health checks
Failover in <60s`} />
              <Badge className="mt-6 bg-blue-600 text-white text-lg">Robinhood, Coinbase</Badge>
            </CardContent>
          </Card>

          {/* 4. IaC with AWS CDK v2 (TypeScript) */}
          <Card>
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="text-3xl">4. CDK v2 – The Only Way in 2025</CardTitle>
            </CardHeader>
            <CardContent className="pt-10">
              <CodeBlock language="ts" code={`import { App, Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Table, BillingMode } from 'aws-cdk-lib/aws-dynamodb';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';

class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const table = new Table(this, 'Hits', {
      partitionKey: { name: 'path', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY
    });

    const handler = new Function(this, 'HitCounter', {
      runtime: Runtime.NODEJS_20_X,
      code: Code.fromAsset('lambda'),
      handler: 'hitcounter.handler',
      environment: { HITS_TABLE: table.tableName }
    });

    table.grantReadWriteData(handler);
  }
}`} />
              <Badge className="mt-6 bg-indigo-600 text-white text-lg">HashiCorp, Datadog, Vercel</Badge>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Interview Red Flags */}
      <section className="mb-20">
        <h2 className="text-5xl font-bold mb-10 text-primary flex items-center gap-5">
          <AlertCircle className="w-14 h-14 text-red-600" />
          Instant Reject Mistakes (AWS Edition)
        </h2>
        <Card className="bg-red-50 dark:bg-red-950/50 border-red-500">
          <CardContent className="p-12">
            <ul className="space-y-6 text-xl">
              {[
                "Using root account keys in code",
                "Public S3 buckets with CloudFront (not using OAC)",
                "Single AZ deployment for production",
                "No backup strategy or RPO/RTO defined",
                "Using YAML CloudFormation in 2025",
                "No least-privilege IAM (using AdministratorAccess)",
                "Storing secrets in Lambda env vars (not SSM/Secrets Manager)",
                "No monitoring/alarming strategy"
              ].map((flag) => (
                <li key={flag} className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-red-700 text-white flex items-center justify-center text-3xl">X</div>
                  <span className="font-semibold">{flag}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Pro Tips That Win Senior+ Offers */}
      <section className="mb-20">
        <h2 className="text-5xl font-bold mb-10 text-primary">Pro Tips That Win Senior Cloud Roles</h2>
        <Card>
          <CardContent className="p-12">
            <ol className="space-y-8 text-xl">
              <li><strong>Never say “EC2” without Auto Scaling + ALB</strong> — it’s assumed</li>
              <li><strong>Always mention RPO/RTO</strong> in disaster recovery discussions</li>
              <li><strong>Use CDK + TypeScript</strong> — no one uses raw CloudFormation anymore</li>
              <li><strong>EventBridge {">"} SNS/SQS direct</strong> for decoupling</li>
              <li><strong>DynamoDB Global Tables + S3 CRR</strong> = true multi-region</li>
              <li><strong>Savings Plans {">"} Reserved Instances in 2025</strong></li>
              <li><strong>OIDC with GitHub Actions</strong> {">"} long-lived credentials</li>
              <li><strong>Mention Well-Architected Framework</strong> — instant credibility</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* One-Page Cheat Sheet */}
      <section className="mb-20">
        <h2 className="text-5xl font-bold mb-10 text-primary">One-Page Senior Cheat Sheet</h2>
        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/50">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-12 text-xl">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-orange-600">Must-Know Services (2025)</h3>
                <ul className="space-y-4 font-medium">
                  <li>EventBridge Schema Registry</li>
                  <li>Step Functions Express vs Standard</li>
                  <li>DynamoDB Streams + Lambda</li>
                  <li>CDK v2 + Constructs</li>
                  <li>S3 Object Lambda</li>
                  <li>AppSync + DynamoDB Resolver</li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-amber-600">Senior Signals</h3>
                <ul className="space-y-4 font-medium">
                  <li>Multi-region active-active</li>
                  <li>Zero-trust with IAM Roles Anywhere</li>
                  <li>Cost governance + FinOps</li>
                  <li>Chaos engineering ready</li>
                  <li>Golden signals monitoring</li>
                  <li>GitOps + ArgoCD/Crossplane</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between gap-8 mt-24 pb-16">
        <Link href="/rest-api" passHref>
          <Button variant="outline" size="lg" className="flex items-center gap-4 text-xl px-10 py-8">
            <ArrowLeftIcon className="h-8 w-8" /> Previous: REST API Mastery
          </Button>
        </Link>
        <Link href="/system-design" passHref>
          <Button size="lg" className="flex items-center gap-4 text-xl px-10 py-8 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
            Next: System Design (LLD + HLD) <ArrowRightIcon className="h-8 w-8" />
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default AwsIntermediatePage;