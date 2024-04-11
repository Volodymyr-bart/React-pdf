import { useState } from "react";
import { Document, Page } from "@react-pdf/renderer";
import grocayem from "/Volodymyr Bortokhov.pdf";

const PdfComp = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-div">
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <Document file={grocayem} onLoadSuccess={onDocumentLoadSuccess}>
        <Page />
      </Document>
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <PdfComp />
    </>
  );
};

export default Layout;
