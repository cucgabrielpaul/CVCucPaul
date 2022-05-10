import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import ReactDownLoad from "reactjs-file-downloader";
import PDF from "../../Assets/Docs/CucGabrielPaul.pdf";
import "./style.scss";

const CvViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPg = () => {
    pageNumber === numPages
      ? setPageNumber(1)
      : setPageNumber((prevPageNo) => prevPageNo + 1);
  };

  const prevPg = () => {
    pageNumber === 1
      ? setPageNumber(numPages)
      : setPageNumber((prevPageNo) => prevPageNo - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={prevPg}>Prev</Button>
        <Button
          onClick={() => {
            ReactDownLoad(PDF, "GET", "CV-CucGabrielPaul.pdf");
          }}
        >
          Download
        </Button>
        <Button onClick={nextPg}>Next</Button>
      </Box>

      <Typography variant="h6" alignSelf="center">
        {pageNumber} / {numPages}
      </Typography>

      <Document
        options={{}}
        className="docStyle"
        file={PDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page size="A3" pageNumber={pageNumber} />
      </Document>
    </Box>
  );
};

export default CvViewer;
