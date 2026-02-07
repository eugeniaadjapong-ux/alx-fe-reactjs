import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0' }}>
      {/* Task 2: JSX Practice */}
      <WelcomeMessage />

      {/* Task 3: Specific Components */}
      <Header />
      <MainContent />
      <Footer />

      {/* Task 4: UserProfile */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}

export default App;

