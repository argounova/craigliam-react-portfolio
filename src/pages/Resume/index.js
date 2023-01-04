import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../../assets/styles/Resume.css';


export default function Resume(props) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const { pdf } = props;

  return (
    <section>
      <div className="overlay">
        <h1>Resume</h1>
          <div>
            <Document 
              file={pdf} 
              onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber}/>
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
      </div>
    </section>
  );
}
