import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Python Market Place</a>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Categories</a>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App