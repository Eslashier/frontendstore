import {useSelector} from "react-redux";
import {RootState} from "./state/store";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Bills from "./pages/bills/Bills";

function App() {
  const logged = useSelector((state: RootState) => state.logging.isLogged)
  return (
    <BrowserRouter>
    <Routes>
        {logged && <Route path='/blog/form' element={<BlogForm/>}/>}
        <Route path='/' element={<AboutMe/>}/>
        <Route path='/blog' element={<Blogs/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/knowledge' element={<Knowledge/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
