export interface BlogSectionItem {
  heading: string;
  subheading?: string;
  body?: string[];
  listItems?: string[];
  code?: {
    language: string;
    filename?: string;
    snippet: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  comparison?: {
    errorTitle: string;
    errorCode: string;
    errorMessage: string;
    solutionTitle: string;
    solutionCode: string;
    explanation: string;
  };
  callout?: {
    type: 'info' | 'warning' | 'tip';
    text: string;
  };
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  author: string;
  category: 'React Native' | 'Backend Development' | 'TypeScript';
  readTime: string;
  publishDate: string;
  summary: string;
  tags: string[];
  featuredImage?: string;
  content: {
    intro: string[];
    sections: BlogSectionItem[];
    conclusion: string[];
  };
}

export const technicalBlogs: BlogArticle[] = [
  {
    id: 'ota-updates-react-native',
    title: 'Understanding OTA Updates in React Native: A Practical Guide',
    slug: 'understanding-ota-updates-in-react-native',
    author: 'Siba Prasad Behera',
    category: 'React Native',
    readTime: '6 min read',
    publishDate: 'November 2026',
    summary:
      'A practical deep dive into Over-the-Air (OTA) update architecture for React Native apps—how JavaScript bundle distribution works, update-checking lifecycles, and rollback safety.',
    tags: ['React Native', 'OTA Updates', 'Mobile DevOps', 'CodePush', 'TypeScript'],
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: [
        'In mobile application development, delivering updates quickly is critical. Traditionally, when developers fix a bug or introduce an incremental improvement, users must wait for app store review and download a whole new binary release.',
        'Over-the-Air (OTA) updates provide a modern approach to deliver certain application updates without requiring users to install a complete new version from Google Play Store or Apple App Store.',
        'In React Native, OTA updates are uniquely powerful because the application’s business logic, state machines, and UI components are compiled into a JavaScript bundle rather than native assembly.',
      ],
      sections: [
        {
          heading: 'What is an OTA update?',
          body: [
            'An OTA update allows engineering teams to deliver compatible JavaScript bundle and asset updates directly to an already-installed mobile application on users’ devices.',
            'Imagine your production application experiences one of the following scenarios:',
          ],
          listItems: [
            'A critical validation edge case in a patient registration screen',
            'A minor UI rendering glitch across specific device screen densities',
            'A rapid correction in client-side business calculations or API payload parsing',
          ],
          callout: {
            type: 'info',
            text: 'Instead of waiting 24–48 hours for app store approvals, a secure OTA server pushes the revised JS bundle in real time.',
          },
        },
        {
          heading: 'How does an OTA update work?',
          body: [
            'A robust Over-the-Air pipeline separates native binary layers from the dynamic JavaScript engine through a structured six-stage lifecycle:',
          ],
          listItems: [
            '1. The developer authors and verifies changes in the React Native codebase.',
            '2. A release JavaScript bundle and hashed static assets are compiled (e.g. via Metro Bundler).',
            '3. The compiled bundle and asset manifest are cryptographically signed and uploaded to an update server or CDN bucket.',
            '4. On app launch or background resume, the client application checks whether a compatible update manifest is available.',
            '5. If a new version exists and matches target binary semver rules, the update is downloaded and integrity-verified.',
            '6. The application applies the update either immediately (reloading the JS bridge) or on next cold launch based on its release strategy.',
          ],
        },
        {
          heading: 'Example: Checking for an update',
          body: [
            'A simplified update checking function in TypeScript demonstrates how the client verifies update metadata with an API endpoint:',
          ],
          code: {
            language: 'typescript',
            filename: 'services/otaUpdater.ts',
            snippet: `type UpdateInfo = {
  version: string;
  downloadUrl: string;
  mandatory: boolean;
};

async function checkForUpdate(): Promise<UpdateInfo | null> {
  const response = await fetch(
    "https://api.example.com/ota/latest"
  );

  if (!response.ok) {
    throw new Error("Failed to check update");
  }

  const update: UpdateInfo = await response.json();

  return update;
}`,
          },
          callout: {
            type: 'warning',
            text: 'This code illustrates metadata retrieval. A production OTA system requires cryptographic signature verification, atomic storage swaps, crash guards, and automatic rollback triggers.',
          },
        },
        {
          heading: 'Important considerations & limitations',
          body: [
            'OTA updates cannot and must not be used for every type of change. Native code changes, Android Manifest or iOS Info.plist modifications, and updates to native libraries (such as Camera, Bluetooth, or Native SDKs) strictly require a traditional app store release.',
            'A resilient enterprise OTA architecture must account for:',
          ],
          listItems: [
            'Strict binary version compatibility matrices (Target Binary Range)',
            'Platform separation (separate manifests for Android and iOS artifacts)',
            'Secure HTTPS delivery with checksum hash matching (SHA-256)',
            'Fault detection: if the new bundle crashes during initial boot, roll back automatically to the bundled fallback',
            'Granular phased rollouts (canary deployments) and telemetry monitoring',
          ],
        },
      ],
      conclusion: [
        'OTA updates can drastically improve the deployment velocity of React Native applications by making JavaScript and UI patches painless to ship.',
        'However, they must be implemented with strict architectural discipline—ensuring version compatibility, integrity validation, and instant rollback safety.',
        'Mastering this balance helps mobile engineers deliver high-availability, maintainable applications that stay reliable at enterprise scale.',
      ],
    },
  },
  {
    id: 'building-rest-apis-nodejs-express',
    title: 'Building REST APIs with Node.js and Express: From Architecture to Production',
    slug: 'building-rest-apis-with-nodejs-and-express',
    author: 'Siba Prasad Behera',
    category: 'Backend Development',
    readTime: '7 min read',
    publishDate: 'November 2026',
    summary:
      'A comprehensive guide to designing clean, maintainable REST APIs with Node.js, Express, and TypeScript—covering HTTP method conventions, modular layering, and enterprise best practices.',
    tags: ['Node.js', 'Express', 'TypeScript', 'REST APIs', 'Backend', 'Clean Architecture'],
    featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: [
        'Modern software applications rely on rock-solid communication channels between client interfaces and server infrastructure.',
        'Whether building a responsive web portal with React or a native mobile client with React Native, REST APIs remain the gold standard for predictable, stateless data exchange.',
        'Node.js and Express provide an agile, highly performant foundation to craft scalable backend services using JavaScript and TypeScript.',
      ],
      sections: [
        {
          heading: 'What is a REST API?',
          body: [
            'REST stands for Representational State Transfer. It defines an architectural standard where clients interact with resources via standardized HTTP request methods.',
          ],
          table: {
            headers: ['HTTP Method', 'CRUD Operation', 'Typical Purpose / Idempotency'],
            rows: [
              ['GET', 'Read', 'Retrieve a resource or collection (Idempotent, Safe)'],
              ['POST', 'Create', 'Submit data to create a new resource (Non-Idempotent)'],
              ['PUT', 'Replace', 'Replace an entire existing resource with new state (Idempotent)'],
              ['PATCH', 'Update', 'Apply partial modifications to an existing resource'],
              ['DELETE', 'Delete', 'Remove a specified resource permanently (Idempotent)'],
            ],
          },
        },
        {
          heading: 'Setting up an Express & TypeScript project',
          body: [
            'Initializing a clean TypeScript project ensures compile-time type safety across your request bodies, query parameters, and database models:',
          ],
          code: {
            language: 'bash',
            filename: 'Terminal Commands',
            snippet: `mkdir student-api
cd student-api
npm init -y
npm install express
npm install -D typescript @types/express @types/node`,
          },
        },
        {
          heading: 'Creating a simple, type-safe API',
          body: [
            'Here is a structured entry file `src/index.ts` illustrating route handlers, parameterized routes, and consistent JSON responses:',
          ],
          code: {
            language: 'typescript',
            filename: 'src/index.ts',
            snippet: `import express from "express";

const app = express();

app.use(express.json());

type Student = {
  id: number;
  name: string;
};

const students: Student[] = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Priya" },
];

app.get("/api/students", (req, res) => {
  res.status(200).json({
    success: true,
    data: students,
  });
});

app.get("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find(
    (item) => item.id === id
  );

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: student,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
          },
        },
        {
          heading: 'Why API structure matters: The 3-Tier Layered Architecture',
          body: [
            'In production systems, embedding database queries and business calculations inside route callbacks creates monolithic files that are brittle and hard to test.',
            'Adopting clean separation of concerns organizes responsibilities cleanly:',
          ],
          code: {
            language: 'text',
            filename: 'Directory Structure',
            snippet: `src/
├── routes/          # Express route bindings & URL mapping
│   └── student.routes.ts
├── controllers/     # HTTP request parsing, status codes & validation
│   └── student.controller.ts
├── services/        # Pure business logic & transactional rules
│   └── student.service.ts
├── models/          # Database queries & schemas (MySQL / Prisma / Mongo)
│   └── student.model.ts
└── index.ts         # Server bootstrapper & middleware pipeline`,
          },
        },
        {
          heading: 'Production engineering best practices',
          body: [
            'To elevate a basic API to an enterprise-grade service, observe these core principles:',
          ],
          listItems: [
            'Validate inputs strictly at the boundary using schema validators like Zod or Joi before logic runs.',
            'Always send standard HTTP status codes: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Internal Error).',
            'Implement centralized error-handling middleware so errors always yield a unified JSON structure.',
            'Sanitize outputs to prevent leaking internal database stack traces or credentials.',
            'Protect endpoints with rate limiting, helmet security headers, and JWT/OAuth authorization.',
          ],
        },
      ],
      conclusion: [
        'Node.js and Express are remarkably efficient tools for building high-throughput backend services.',
        'By combining idiomatic HTTP verbs, rigorous input validation, and a layered service architecture, developers build APIs that integrate smoothly with frontend teams and scale reliably.',
      ],
    },
  },
  {
    id: 'common-typescript-errors-react-native',
    title: 'Common TypeScript Errors in React Native and How to Fix Them',
    slug: 'common-typescript-errors-in-react-native-and-fixes',
    author: 'Siba Prasad Behera',
    category: 'TypeScript',
    readTime: '6 min read',
    publishDate: 'November 2026',
    summary:
      'A practical debugging handbook for React Native developers—diagnosing and resolving the 5 most frequent TypeScript compiler errors with real-world code comparisons.',
    tags: ['TypeScript', 'React Native', 'Debugging', 'Type Safety', 'State Management'],
    featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: [
        'TypeScript is an indispensable tool in modern React Native development because it catches runtime bugs before the JavaScript bundle ever lands on a simulator or device.',
        'However, when orchestrating complex state machines, navigation stacks, asynchronous APIs, and native bridges, TypeScript errors can occasionally feel cryptic.',
        'This guide examines the 5 most common errors encountered in React Native workflows and shows concrete, idiomatic solutions.',
      ],
      sections: [
        {
          heading: '1. Cannot find name',
          body: [
            'This error occurs when the TypeScript compiler attempts to evaluate an identifier that has not been declared, imported, or is out of current execution scope.',
          ],
          comparison: {
            errorTitle: 'Problem: Referencing an undeclared variable',
            errorCode: `const patientStatus = "Waiting";

console.log(opdTargetStatus); // TS2304: Cannot find name 'opdTargetStatus'`,
            errorMessage: "Cannot find name 'opdTargetStatus'",
            solutionTitle: 'Fix: Declare, spell correctly, or import the identifier',
            solutionCode: `const opdTargetStatus = "Waiting";

console.log(opdTargetStatus); // Correct and type-checked`,
            explanation:
              'Always verify the spelling of variables and check if your variable is confined inside an inner function block or needs to be exported/imported.',
          },
        },
        {
          heading: '2. Cannot redeclare block-scoped variable',
          body: [
            'This error occurs when attempting to declare the same `let` or `const` identifier multiple times within the same lexical scope, or when a file lacks imports/exports and is treated as a global script.',
          ],
          comparison: {
            errorTitle: 'Problem: Duplicate declaration in scope',
            errorCode: `const patientName = "Rahul";
const patientName = "Amit"; // TS2451: Cannot redeclare block-scoped variable`,
            errorMessage: "Cannot redeclare block-scoped variable 'patientName'",
            solutionTitle: 'Fix: Use unique identifiers or reassign mutable variables',
            solutionCode: `let patientName = "Rahul";

patientName = "Amit"; // Clean reassignment

// Or add "export {}" to ensure file module isolation`,
            explanation:
              'If the error occurs across separate files with identical names, adding an export statement ensures TypeScript scopes the file as an ES module rather than a global script.',
          },
        },
        {
          heading: '3. Property does not exist on type',
          body: [
            'This happens when attempting to read a field that is absent from the declared interface or type alias of the object.',
          ],
          comparison: {
            errorTitle: 'Problem: Accessing an unmodeled field',
            errorCode: `type Patient = {
  id: number;
  name: string;
};

const patient: Patient = {
  id: 1,
  name: "Rahul",
};

console.log(patient.age); // TS2339: Property 'age' does not exist on type 'Patient'`,
            errorMessage: "Property 'age' does not exist on type 'Patient'",
            solutionTitle: 'Fix: Model the field in the type definition',
            solutionCode: `type Patient = {
  id: number;
  name: string;
  age?: number; // Optional or required field
};

const patient: Patient = {
  id: 1,
  name: "Rahul",
  age: 28,
};

console.log(patient.age); // Safe`,
            explanation:
              'Never cast to "as any" to bypass this. Update the contract type, or mark optional properties with "?" if they may not always be present.',
          },
        },
        {
          heading: '4. Incorrect state type inference in useState',
          body: [
            'When initializing `useState` with `null` or empty arrays without explicit generics, TypeScript infers an overly restrictive type (e.g. `null`), preventing subsequent updates.',
          ],
          comparison: {
            errorTitle: 'Problem: Restrictive state inference',
            errorCode: `const [count, setCount] = useState(null);

setCount(10); // TS2345: Argument of type 'number' not assignable to 'null'`,
            errorMessage: "Argument of type 'number' is not assignable to parameter of type 'null'",
            solutionTitle: 'Fix: Provide explicit generic state types',
            solutionCode: `const [count, setCount] = useState<number | null>(null);

setCount(10); // Valid: accepts number or null`,
            explanation:
              'Always specify generics for nullable state or collections: useState<User | null>(null) or useState<Task[]>([]).',
          },
        },
        {
          heading: '5. API response type mismatch',
          body: [
            'Backend payloads often deliver numeric identifiers or dates formatted as strings, resulting in compilation failures when fed into strictly typed frontend state.',
          ],
          comparison: {
            errorTitle: 'Problem: String provided where number expected',
            errorCode: `type User = {
  id: number;
  name: string;
};

const user: User = {
  id: "1", // TS2322: Type 'string' is not assignable to type 'number'
  name: "Rahul",
};`,
            errorMessage: "Type 'string' is not assignable to type 'number'",
            solutionTitle: 'Fix: Parse/cast values or align the DTO contract',
            solutionCode: `type User = {
  id: number;
  name: string;
};

// Transform the payload safely at the API boundary:
const user: User = {
  id: Number("1"),
  name: "Rahul",
};`,
            explanation:
              'Validate and parse API payloads as early as possible in your data-fetching service layer to maintain strong guarantees throughout your UI components.',
          },
        },
      ],
      conclusion: [
        'TypeScript errors are valuable safety signals rather than obstacles—they flag defects at compile time that would otherwise lead to production mobile app crashes.',
        'Resist the temptation to suppress warnings with `any` or `@ts-ignore`. By understanding scope rules, type contracts, state generics, and payload parsing, React Native applications become rock-solid and straightforward to maintain.',
      ],
    },
  },
];
