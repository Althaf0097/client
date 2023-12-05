
import { GoogleOAuthProvider } from '@react-oauth/google';

// components
import Messanger from "./components/Messenger";
function App() {
  return (
    <GoogleOAuthProvider>
      <Messanger/>
    </GoogleOAuthProvider>
  );
}

export default App;
