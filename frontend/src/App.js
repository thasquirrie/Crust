import logo from './logo.svg';
import './App.css';
import { Navigate } from 'react-router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusinessDetails from './screens/FormScreen';
import FormationDocuments from './screens/FormationDocumentsScreen';
import ReviewScreen from './screens/ReviewScreen';
import Footer from './components/Footer';
import Header from './components/Header';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';

import LinkBankScreen from './screens/LinkBankScreen';

function App() {
  return (
    <Router>
      <div className='bg-white'>
        <div className='relative overflow-hidden'>
          <Header />
          <main className=''>
            <Routes>
              <Route path='/signup' element={<SignupScreen />} />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/link-bank-details' element={<LinkBankScreen />} />
              <Route path='/review-and-submit' element={<ReviewScreen />} />
              <Route
                path='/formation-documents'
                element={<FormationDocuments />}
              />
              <Route path='/business-details' element={<BusinessDetails />} />
              <Route path='/' element={<Navigate to='/business-details' />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
