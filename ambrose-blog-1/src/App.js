import React from 'react';

function App() {
  return (
    <div className="container">
      Hello
      <div class="row">
        <div class="col s1">1</div>
        <div class="col s1">2</div>
        <div class="col s1">3</div>
        <div class="col s1">4</div>
        <div class="col s1">5</div>
        <div class="col s1">6</div>
        <div class="col s1">7</div>
        <div class="col s1">8</div>
        <div class="col s1">9</div>
        <div class="col s1">10</div>
        <div class="col s1">11</div>
        <div class="col s1">12</div>
      </div>
      <div class="row">
        <div class="col s12">This div is 12-columns wide on all screen sizes</div>
        <div class="col s6">6-columns (one-half)</div>
        <div class="col s6">6-columns (one-half)</div>
      </div>
      <div class="row">
        <div class="col s12"><span class="flow-text">This div is 12-columns wide on all screen sizes</span></div>
        <div class="col s6 offset-s6"><span class="flow-text">6-columns (offset-by-6)</span></div>
      </div>
      <div class="row">
        <div class="grid-example col s12"><span class="flow-text">I am always full-width (col s12)</span></div>
        <div class="grid-example col s12 m6"><span class="flow-text">I am full-width on mobile (col s12 m6)</span></div>
      </div>
    </div>
  )
}

export default App
