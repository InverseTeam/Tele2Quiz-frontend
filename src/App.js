import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';

import Layout from './Layout/Layout';
import AllTestPage from './pages/AllTestPage/AllTestPage';
import NewTestPage from './pages/NewTestPage/NewTestPage';

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='/' element={<Layout />}>
            <Route path='tests' element={<AllTestPage />} />
            <Route path='new-test' element={<NewTestPage />} />

            {/* <Route index element={<HomePage />} />
            <Route path='my-courses' element={<MyCoursesPage />} />
            <Route path='new-course' element={<NewCoursePage />} />
            <Route path='courses' element={<AllCoursesPage />} />
            <Route path='profile' element={<ProfilePage />} /> */}
            {/* <Route path='/' element={<Layout />}>
            </Route> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
