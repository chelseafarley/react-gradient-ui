import './App.css';
import { GradientButton, GradientBorderButton, GradientText } from 'react-gradient-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="row">
        <GradientButton buttonStyle={{ color: "white", height: "50px", width: "100px"}}>Kiaora</GradientButton>
        <div className="horizontal-spacing"></div>
        <GradientBorderButton buttonStyle={{ height: "50px", width: "100px"}}>Hola</GradientBorderButton>
        <div className="horizontal-spacing"></div>
        <GradientText>Hello</GradientText>
      </div>
      <div className="row">
        <GradientButton 
          options={{ borderRadius: 25, fromColor: "purple", toColor: "red", gradientAngle: 180 }} 
          buttonStyle={{ color: "white", height: "50px", width: "50px"}}>
          +
        </GradientButton>
        <div className="horizontal-spacing"></div>
        <GradientBorderButton 
          options={{ borderRadius: 25, fromColor: "purple", toColor: "red", gradientAngle: 180 }}
          buttonStyle={{ height: "50px", width: "50px"}}>
          <FontAwesomeIcon icon={faCoffee} />
        </GradientBorderButton>
        <div className="horizontal-spacing"></div>

      </div>
    </div>
  );
}

export default App;
