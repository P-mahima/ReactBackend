

// import Router from './Router';
import './App.css';
import DataBollywood from './Data/DataBollywood';
// import LazyLoadingL from './LoadingLazy';
// import Data from './Data';

// import Data from './Data';

function App() {
  return (
    <div className="App">
      <div className='Head'>
        <div className='head'>
          <div className='The'>The</div>
          <div className='Siren'>Siren</div>
        </div>
        <div >
          <button className='button'>Get Started</button>
        </div>
      </div>

      {/* <Router/> */}
      {/* <Data/> */}
      {/* <Data/> */}
      <DataBollywood />
      {/* <LazyLoadingL/> */}




    </div>
  );
}

export default App;
