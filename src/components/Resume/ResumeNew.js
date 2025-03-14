import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/monCV.pdf";
import pdf from "../../Assets/../Assets/Youness sraidi (CV).pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

/**
 * A component to display a resume in a pdf format.
 *
 * @return {jsx} A JSX element containing a button to download the resume and a pdf viewer to display the resume.
 */
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télecharger CV
          </Button>
        </Row>

        <Row className="resume">
          {/* Use the Document component from react-pdf to display the resume. */}
          <Document file={pdf} className="d-flex justify-content-center">
            {/* Use the Page component from react-pdf to display the first page of the resume. */}
            {/* The scale prop is used to set the zoom level of the pdf. */}
            {/* If the width of the screen is greater than 786px, set the scale to 1.7, otherwise set it to 0.6. */}
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télecharger CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
