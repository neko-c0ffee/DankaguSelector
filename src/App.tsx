import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.title = 'ダンカグせれくたー';
  }, []);

  return (
    <>
      <p>
        にゃーん
      </p>
    </>
  )
}

export default App
