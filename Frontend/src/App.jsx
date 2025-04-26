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
    <div className="h-screen w-full bg-gray-900 flex flex-col">
      <main className="min-h-screen flex-1 flex flex-col p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          <div className="flex flex-col h-full">
            <div className="bg-gray-800 rounded-lg shadow-lg flex-grow flex flex-col">
              <div className="p-4 bg-gray-700 text-gray-100">
                <h2 className="text-lg font-semibold">Code Editor</h2>
              </div>
              <div className="flex-grow flex flex-col p-4">
                <Editor
                  value={code}
                  onValueChange={code => setCode(code)}
                  highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#1f2937",
                    color: "#e5e7eb"
                  }}
                  className="flex-grow focus:outline-none"
                />
              </div>
            </div>
            <button
              onClick={reviewCode}
              className="w-full cursor-pointer mt-4 bg-purple-600 hover:bg-purple-700 text-gray-100 font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-101 shadow-md"
            >
              Review Code
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
            <div className="p-4 bg-slate-400 text-gray-800">
              <h2 className="text-lg font-semibold">Code Review</h2>
            </div>
            <div className="flex-grow p-6 prose prose-sm max-w-none prose-invert overflow-y-auto">
              <Markdown
                rehypePlugins={[rehypeHighlight]}
              >
                {review}
              </Markdown>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App