require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: `${process.env.OPENAI_API_KEY}`,
});

const keywords =
  "SQL, Java, Azure, Python, MongoDB, Redis, 3 years experience, live and eligible to work in the United states";
const application = `Israel Abazie
  Email: chuksy3@gmail.com | Phone: 07065737817 | Location: Nigeria
  
  Summary
  A Backend Developer with 2 years experience and a strong foundation in  Node.js, Express, Next.js, SQL, NoSQL (Redis, MongoDB), AWS, and Git. Proven track record of success in designing and implementing scalable and secure applications. Author of "Data Structures and Algorithms for All Programmers," adopted in 10 schools' libraries in Nigeria.
  
  Professional Experience
  ITSkillscenter
  Backend Developer
  Developed and maintained backend systems for various projects.
  Collaborated with cross-functional teams to design and implement robust APIs.
  Implemented database solutions for both relational and non-relational databases.
  Ensured application security and implemented best practices.
  Utilized technologies such as Node.js, Express, AWS, MongoDB, and Redis.
  Publications
  "Data Structures and Algorithms for All Programmers"
  Published author of a comprehensive guide adopted in 10 schools' libraries in Nigeria.
  Education
  Federal University of Technology Owerri (2016)
  Bachelor of Engineering in Civil Engineering
  Graduated as the top student in the class.
  Skills
  Programming Languages:  JavaScript
  Frameworks: Express, Next.js
  Databases: SQL, MongoDB, Redis
  Cloud Services: AWS
  Version Control: Git, GitHub
  Tools: Figma
  Database Design: Relational and Non-relational
  API Design and Security
  LinkedIn
  LinkedIn Profile
  
  `;

// Function to check if a string is empty
function isEmpty(str) {
  return !str || str.trim().length === 0;
}

// Function to generate a ChatGPT prompt from keywords
function generatePromptFromKeywords(application, keywords) {
  // Validate keywords
  if (isEmpty(keywords)) {
    throw new Error("Keywords cannot be empty");
  }

  const applicationData = application;

  // Combine application data with keywords to create a prompt
  const applicationPrompt = `Evaluate the job application from ${applicationData.name} against the specified criteria: ${keywords} and write your evaluation. Provide a strict score from 0 to 10, indicating how well the applicant aligns with the role described in the keywords. If the application falls short of the criteria and is unsuitable for the role or the location is not met, score the applicant "0".\n If the applicant's score is 8 or above, include their email address and comment why the applicant got the score, but if the applicant's score is less than 8, do not include their email address:\n`;

  return `${applicationPrompt}${applicationData}`;
}

async function evaluateJobApplication(application, keywords, maxTokens) {
  try {
    const prompt = generatePromptFromKeywords(application, keywords);
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output JSON.",
        },
        { role: "user", content: prompt },
      ],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
      max_tokens: maxTokens,
      temperature: 0.4
    });
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Error evaluating job application:", error.message);
    throw new Error("Failed to evaluate the job application");
  }
}

evaluateJobApplication(application, keywords, 200);
