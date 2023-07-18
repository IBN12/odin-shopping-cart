///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: App.js
// Description: This is the root component file. It will be treated as the home page for the entire application.
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import frontPageImage from './images/title/pngwing.com.png';
import reactLogo from './images/icons/react-logo.png';
import reactRouterLogo from './images/icons/react-router-logo.png';
import framerMotionLogo from './images/icons/framer-motion-logo.png';

// App(): The root component container (Homepage).
export function App() {
  return (
    <div className="app-component-container">
      <div>
        <img
          src={frontPageImage}
          alt='Controller'
        />
      </div>

      <div>
        <div>Powered By</div>

        <div>
          <div>
            <img 
              src={reactLogo}
              alt='React Logo'
            />
          </div>
          <div>
            <img 
              src={reactRouterLogo}
              alt='React Router Logo'
            />
          </div>
          <div>
            <img 
              src={framerMotionLogo}
              alt='Framer Motion Logo'
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}