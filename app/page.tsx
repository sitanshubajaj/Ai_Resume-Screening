import { ResumeScreeningDashboard } from "@/components/resume-screening-dashboard"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-bl-[100px] opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-900 via-purple-900 to-indigo-900 rounded-tr-[100px] opacity-30 blur-3xl -z-10"></div>

      <main className="container mx-auto py-8 px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-gray-800 bg-opacity-90 rounded-xl shadow-lg mb-4">
            <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              <h1 className="text-5xl font-bold">AI Resume Screening</h1>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find your perfect candidates with our AI-powered resume screening and ranking system
          </p>
        </div>

        <ResumeScreeningDashboard />
      </main>
    </div>
  )
}
