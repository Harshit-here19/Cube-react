import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Loader from "./components/Loader";

const Navbar = React.lazy(() => import("./components/Navbar"));
const LineCharts = React.lazy(() => import("./components/LineCharts"));
const BarCharts = React.lazy(() => import("./components/BarCharts"));
const PieCharts = React.lazy(() => import("./components/PieCharts"));

const App = () => {
  return (
    <Router>
      <React.Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 style={{ marginLeft: "5rem" }}>Dashboard</h1>
                <div
                  style={{
                    display: "grid",
                    width: "100%",
                    gridTemplateColumns: "repeat(2,1fr)",
                    height: "120vh",
                  }}
                >
                  <div style={{ width: "80%", textAlign: "center" }}>
                    <LineCharts /> <p>Line Charts</p>
                  </div>
                  <div style={{ width: "80%", textAlign: "center" }}>
                    <BarCharts /> <p>Bar Charts</p>
                  </div>
                  <div
                    style={{
                      width: "80%",
                      textAlign: "center",
                      margin: "0px 25vw",
                    }}
                  >
                    <PieCharts />
                    <p>Pie Charts</p>
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/line"
            element={
              <>
                <div style={{ height: "100vh" }}>
                  <h1 style={{ marginLeft: "5rem" }}>Line Chart</h1>
                  <div style={{ height: "20rem", width: "90%" }}>
                    <LineCharts />
                  </div>
                  <h3 style={{ textAlign: "center" }}>
                    This Chart show the relation between Items Purchased every
                    day.
                  </h3>
                </div>
              </>
            }
          />
          <Route
            path="/bar"
            element={
              <>
                <div style={{ height: "100vh" }}>
                  <h1 style={{ marginLeft: "5rem" }}>Line Chart</h1>
                  <div style={{ height: "20rem", width: "90%" }}>
                    <BarCharts />
                  </div>
                  <h3 style={{ textAlign: "center" }}>
                    This Chart show the relation between Items and their
                    respective value.
                  </h3>
                </div>
              </>
            }
          />
          <Route
            path="/pie"
            element={
              <>
                <div style={{ height: "100vh" }}>
                  <h1 style={{ marginLeft: "5rem" }}>Line Chart</h1>
                  <div style={{ height: "20rem", width: "90%" }}>
                    <PieCharts />
                  </div>
                  <h3 style={{ textAlign: "center" }}>
                    This Chart show the relation between Items and their
                    respective value and a sperical comparison between each
                    product.
                  </h3>
                </div>
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default App;
