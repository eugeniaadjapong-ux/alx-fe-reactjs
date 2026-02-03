// Task 2 Component
import WelcomeMessage from './components/WelcomeMessage';

// Task 3 Components
import Header from './specific/Header';
import MainContent from './specific/MainContent';
import Footer from './specific/Footer';

function App() {
  return (
    <div>
      {/* Task 2: JSX Practice */}
      <WelcomeMessage />

      {/* Task 3: Specific Components */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
