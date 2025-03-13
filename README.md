<div align="center">
  <img src="https://i.imgur.com/8wOzMgz.png" alt="AI Resume Screening Logo" width="200"/>
  <h1>AI Resume Screening</h1>
  <p>Find your perfect candidates with AI-powered resume screening and ranking</p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-13.4+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![AI Powered](https://img.shields.io/badge/AI_Powered-GPT--4-8A2BE2?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
</div>

<p align="center">
  <img src="https://i.imgur.com/JQyUbKF.png" alt="AI Resume Screening Dashboard" width="100%"/>
</p>

## ✨ Features

- 🤖 **AI-Powered Analysis** - Automatically analyze resumes against job requirements
- 📊 **Smart Ranking** - Rank candidates based on skills, experience, and education match
- 🔍 **Detailed Insights** - Get detailed candidate insights and AI-generated analysis
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎯 **Skills Matching** - Identify matched and missing skills for each candidate
- 📄 **Resume Management** - Upload and manage multiple resumes at once

<div align="center">
  <img src="https://i.imgur.com/vYL3Ygp.png" alt="Features Overview" width="80%"/>
</div>

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ai-resume-screening.git
cd ai-resume-screening
Thought for 2 seconds```markdown project="AI Resume Screening" file="README.md"
...
```

2. Install dependencies:


```shellscript
npm install
# or
yarn install
```

3. Set up environment variables:


Create a `.env.local` file in the root directory with the following variables:

```plaintext
NEXT_PUBLIC_APP_URL=http://localhost:3000
OPENAI_API_KEY=your_openai_api_key
```

4. Start the development server:


```shellscript
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## 📖 How to Use

### 1. Define Job Requirements





Start by defining the job requirements:

- Enter the job title and description
- Add required skills
- Set minimum years of experience
- Select minimum education level


### 2. Upload Resumes





Upload candidate resumes:

- Drag and drop files or use the file browser
- Supports PDF and DOCX formats
- Upload multiple resumes at once


### 3. Review Results





Review the AI-analyzed results:

- Candidates ranked by match score
- Filter and sort candidates
- View detailed candidate profiles
- See matched and missing skills
- Read AI-generated analysis


## 🛠️ Technologies Used

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **AI Integration**: OpenAI GPT-4
- **File Processing**: PDF.js, mammoth.js


## 📁 Project Structure

```plaintext
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
```

## 🔧 Configuration

### Tailwind Configuration

The project uses Tailwind CSS with a custom configuration. You can modify the theme in `tailwind.config.js`.

### AI Model Configuration

You can configure the AI model parameters in `lib/resume-analyzer.ts`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
