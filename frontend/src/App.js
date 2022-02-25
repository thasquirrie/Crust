import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import BusinessDetails from './screens/BusinessDetailsScreen';
import FormationDocuments from './screens/FormationDocumentsScreen';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className='bg-white'>
        <div className='relative overflow-hidden'>
          <Header />
          <main className=''>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route
                path='/formation-documents'
                element={<FormationDocuments />}
              />
              <Route path='/business-details' element={<BusinessDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
