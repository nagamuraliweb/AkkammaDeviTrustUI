import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//pages
import Login from "./pages/login/login";
import DonationList from "./pages/donation-list/donation-list";
import AddDonation from "./pages/add-donation/add-donation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/donation-list" element={<DonationList />} />
        <Route path="/add-donation" element={<AddDonation />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
