import './App.css';
import Banner from './components/Banner';
import TermPage from './components/TermPage';
import Form from './components/Form';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDbData } from './utilities/firebase';
import { useAuthState } from './utilities/firebase';

const Main = () => {
  const [data, error] = useDbData('/')
  const [user] = useAuthState();

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (!data) return <h1>Loading user data...</h1>;

  return (
    <div>
      <Banner title={user ? data.title : ""} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={user ? <TermPage courses={data.courses} /> : <Login />} />
          <Route path='courseform/:courseId' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-light">
        <Main />
      </div>
    </QueryClientProvider>
  );
};

export default App;
