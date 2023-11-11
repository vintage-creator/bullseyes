<!-- Project Title -->
<h1>Bullseyes: AI-Powered Application Screening System</h1>

<!-- Project Description -->
<p>
  Bullseyes is an advanced application screening system designed to comprehensively evaluate a diverse range of applications, including essays, letters of motivation, and formal application letters. Powered by AI, Bullseyes offers a robust solution for assessing and ranking applications based on predefined criteria and keywords.
</p>

<!-- License Badge -->
<p>
  <a href="https://github.com/vintage-creator/bullseyes/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/github/license/vintage-creator/bullseyes" /></a>
</p>

<!-- Table of Contents -->
<h2>Table of Contents</h2>

1. [Introduction](#introduction)
2. [Key Features](#key-features)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Configuration](#configuration)
4. [Usage](#usage)
   - [Creating Keywords](#creating-keywords)
   - [Interacting with the AI](#interacting-with-the-ai)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

<!-- Introduction Section -->
<h2 id="introduction">Introduction</h2>
<p>
Bullseyes goes beyond traditional application screening, providing a versatile platform for evaluating various types of applications. Whether it's a job application, an essay submission, or a letter of motivation, Bullseyes leverages AI to analyze content based on predefined criteria, ensuring a thorough and unbiased assessment.
</p>

<!-- Features Section -->
<h2 id="key-features">Key Features</h2>
<h3>AI-Powered Application Evaluation</h3>
Bullseyes harnesses the power of advanced AI models to analyze and score various types of applications, including job applications, essays, and letters of motivation. The system provides a comprehensive evaluation based on specific criteria set by the administrator or recruiter, ensuring a thorough and unbiased assessment.

<h3>Keyword Configuration</h3>
Recruiters have the flexibility to configure specific keywords aligned with job requirements. This feature allows for a tailored screening process, ensuring that applications are evaluated based on the essential criteria defined for each position.

<h3>Scalable and Efficient</h3>
Bullseyes is built to efficiently handle a large volume of applications, making the screening process scalable and streamlined. Whether you're managing a handful of applications or a vast pool of candidates, Bullseyes ensures a quick and effective evaluation process, optimizing the recruitment workflow.

<!-- Getting Started Section -->
<h2 id="getting-started">Getting Started</h2>

<h3 id="prerequisites">Prerequisites</h3>

- Node.js (v14.x or higher)
- MongoDB

<h3>Installation</h3>

```bash
git clone https://github.com/vintage-creator/bullseyes.git
cd bullseyes
npm install
```

<h3 id="configuration">Configuration</h3>
<ol>
<li>Environment Variables:</li>
<ul>
<li>Create a <b>.env file</b> based on <b>.env.example</b> and set the required variables.</li>
</ul>
<li>MongoDB Setup:</li>
<ul>
<li>Ensure MongoDB is installed and running.</li>
<li>Update the MongoDB connection details in the <b>.env</b> file.</li>
</ul>
</ol>
<h3>Running the Application</h3>
After installing the dependencies and configuring the environment variables, run the following command:

```bash
npm start
```

<p>The application will be accessible at <pre><code>http://localhost:8000</code></pre></p>

<!-- Usage Section -->
<h2 id="usage">Usage</h2>
<h3 id="creating-keywords">Creating Keywords</h3>
<ul>
<li>Add your predefined criteria and keywords in the Bullseyes dashboard.</li>
</ul>
<h3 id="interacting-with-the-ai">Interacting with the AI</h3>
<ol>
<li>Evaluate an Application:</li>
<ul>
<li>Use the provided API endpoint to send applications for AI evaluation.</li>
</ul>

```bash
POST /evaluate
```

<li>Retrieve Evaluation Results:</li>
<ul>
<li>Fetch the results from the Bullseyes dashboard or API.</li>
</ul>
</ol>

<!-- Contributing Section -->
<h2 id="contributing">Contributing</h2>
<p>We welcome contributions! Please follow the <a href="">contribution guidelines</a> to get started.</p>

<!-- License Section -->
<h2 id="license">License</h2>
<p>This project is licensed under the MIT License - see the <a href="https://github.com/vintage-creator/bullseyes/blob/main/LICENSE">LICENSE</a> file for details.</p>

<!-- Contact Section -->
<h2 id="contact">Contact</h2>
<p>For inquiries, please contact the project maintainer:</p>
<ul>
<li><b>Maintainer:</b> Israel Abazie</li>
<li><b>Email:</b> <a href="mailto:chuksy3@gmail.com">chuksy3@gmail.com</a></li>
