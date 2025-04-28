import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

  const [ review, setReview ] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <main className="flex-1 p-6 md:p-8 lg:p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code Editor Section */}
          <div className="flex flex-col">
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[calc(100vh-12rem)]">
              <div className="px-6 py-4 bg-gray-900 border-b border-gray-700">
                <h2 className="text-xl font-bold text-gray-100">Code Editor</h2>
              </div>
              <div className="flex-grow p-4">
                <Editor
                  value={code}
                  onValueChange={code => setCode(code)}
                  highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                  padding={12}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                    minHeight: "100%",
                    backgroundColor: "transparent",
                    color: "#e5e7eb"
                  }}
                  className="w-full h-full focus:outline-none bg-gray-800 rounded-lg"
                />
              </div>
            </div>
            <button
              onClick={reviewCode}
              className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Review Code
            </button>
          </div>
          {/* Code Review Section */}
          <div className="flex flex-col">
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[calc(100vh-12rem)]">
              <div className="px-6 py-4 bg-gray-900 border-b border-gray-700">
                <h2 className="text-xl font-bold text-gray-100">Analyzed Result</h2>
              </div>
              <div className="flex-grow p-6 prose prose-invert max-w-none overflow-y-auto bg-gray-800">
                <Markdown
                  rehypePlugins={[rehypeHighlight]}
                >
                  {review}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App