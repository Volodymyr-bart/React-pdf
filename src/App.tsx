import { PDFViewer } from "@react-pdf/renderer";
import "./App.css";
import Layout from "./Layout";

// Create styles

function App() {
  return (
    <>
      <PDFViewer>
        <Layout />
      </PDFViewer>
    </>
  );
}

export default App;
