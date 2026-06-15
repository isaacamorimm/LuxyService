import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services/Services';
import { SobreNos } from './pages/SobreNos';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { BagaAssistant } from './components/BagaAssistant/BagaAssistant';
import { useEffect } from 'react';

function App() {
  const apiBaseURL = import.meta.env.VITE_API_URL || '/'; 

  useEffect(() => {
    const pingServer = async () => {
      try {
        const url = apiBaseURL.endsWith('/') ? apiBaseURL : `${apiBaseURL}/`;
        await fetch(`${url}ping`, { method: 'GET' });
      } catch (error) {
        console.error('Erro ao acordar o servidor:', error);
      }
    };

    pingServer();
  }, [apiBaseURL]);
  

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicos" element={<Services />} />
          <Route path="sobre" element={<SobreNos />} />
        </Route>
      </Routes>
      <BagaAssistant />
    </BrowserRouter>
  );
}

export default App;
