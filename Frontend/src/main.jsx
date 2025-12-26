import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51SiXWAEA2L7tPbBFRYuDoPhCKRi3f3HWJ1onwunDrrrOKYTqNxDHxNVy87woRYUc8khPHjfUM1nlt1z8APAFejH600RJqkXDwG");


createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
