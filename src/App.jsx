// Task 2 Component
import WelcomeMessage from './components/WelcomeMessage';

// Task 3 Components
import Header from './specific/Header';
import MainContent from './specific/MainContent';
import Footer from './specific/Footer';

// Task 4 Component
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      {/* Task 2: JSX Practice */}
      <WelcomeMessage />

      {/* Task 3: Specific Components */}
      <Header />
      <MainContent />
      <Footer />

      {/* Task 4: User Profiles */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <UserProfile name="Bob" age={30} bio="Enjoys painting and cooking" />
    </div>
  );
}

export default App;
