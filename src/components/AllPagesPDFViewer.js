import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <Document
      file={pdf}
      options={{ workerSrc: "pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
      className="d-flex justify-content-center"
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page 
          key={`page_${index + 1}`} pageNumber={index + 1}
          scale={width > 1080 ? 1.0 : 0.6}
        />
      ))}
    </Document>
  );
}