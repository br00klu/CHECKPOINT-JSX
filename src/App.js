
import './App.css';
import imageInSrc from './Assets/imageInSrc.png'
import myVideo from './Assets/myVideo.mp4'
import '../src/styles.css'

function App() {
  return (
    <div className="App">
      <div style={{border:'solid black 1px',maxWidth:'100vw'}}>

        <h1 className="title red">brokko</h1>

        <br/>
        <img src={imageInSrc} alt="sad brokko" width="320px" height="240px"/>

        <br/>

        <img src="/imageInPublic.png" alt="happy brokko" />

      </div>

      <video style={{width:"320px",height:"240px"}}>

        <source src={myVideo} type="video/mp4" />

      </video>

    </div>
  );
}

export default App;
