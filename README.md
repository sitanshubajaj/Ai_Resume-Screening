AI Resume Screening
<div align="center"> <img src="https://via.placeholder.com/200" alt="AI Resume Screening Logo" width="200"/> <h1>AI Resume Screening</h1> <p>Find your perfect candidates with AI-powered resume screening and ranking</p> <img src="https://via.placeholder.com/800x400" alt="AI Resume Screening Dashboard" width="100%"/> </div>
🚀 Features
🤖 AI-Powered Analysis - Automatically analyze resumes against job requirements
📊 Smart Ranking - Rank candidates based on skills, experience, and education match
🔍 Detailed Insights - Get AI-generated candidate insights
📱 Responsive Design - Works seamlessly on desktop, tablet, and mobile devices
🎯 Skills Matching - Identify matched and missing skills
📄 Resume Management - Upload and manage multiple resumes
<div align="center"> <img src="https://via.placeholder.com/600x300" alt="Features Overview" width="80%"/> </div>
🛠️ Technologies Used
Frontend: Next.js, React, TypeScript, Tailwind CSS
UI Components: shadcn/ui
Animations: Framer Motion
AI Integration: OpenAI GPT-4
File Processing: PDF.js, mammoth.js
🚀 Getting Started
Prerequisites
Node.js 18.0 or later
npm or yarn
Installation
Clone the repository:
bash
Copy
Edit
git clone https://github.com/yourusername/ai-resume-screening.git  
cd ai-resume-screening  
Install dependencies:
bash
Copy
Edit
npm install  
# or  
yarn install  
Set up environment variables:
Create a .env.local file in the root directory:
env
Copy
Edit
NEXT_PUBLIC_APP_URL=http://localhost:3000  
OPENAI_API_KEY=your_openai_api_key  
Start the development server:
bash
Copy
Edit
npm run dev  
# or  
yarn dev  
Open http://localhost:3000 in your browser.
📖 How to Use
1. Define Job Requirements
Enter the job title and description
Add required skills
Set minimum experience and education level
2. Upload Resumes
Drag and drop resumes or use the file browser
Supports PDF and DOCX formats
3. Review Results
Candidates ranked by match score
View detailed candidate profiles
See matched and missing skills
Read AI-generated analysis
📁 Project Structure
plaintext
Copy
Edit
ai-resume-screening/  
├── app/                  # Next.js app directory  
│   ├── layout.tsx        # Root layout  
│   └── page.tsx          # Home page  
├── components/           # React components  
│   ├── candidate-detail.tsx  
│   ├── candidate-results.tsx  
│   ├── job-requirements-form.tsx  
│   ├── resume-screening-dashboard.tsx  
│   ├── resume-uploader.tsx  
│   └── ui/               # UI components  
├── lib/                  # Utility functions and types  
│   ├── resume-analyzer.ts  
│   └── types.ts  
├── public/               # Static assets  
└── ...                   # Config files  
🔧 Configuration
Tailwind Configuration
Modify the theme in tailwind.config.js.

AI Model Configuration
Configure model parameters in lib/resume-analyzer.ts.

🤝 Contributing
Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
📝 License
This project is licensed under the MIT License - see the LICENSE file.

🙏 Acknowledgements
OpenAI for AI models
shadcn/ui for UI components
Vercel for hosting
