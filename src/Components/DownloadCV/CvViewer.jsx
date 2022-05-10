import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import ReactDownLoad from "reactjs-file-downloader";
import PDF from "../../Assets/Docs/CucGabrielPaul.pdf";
import "./style.scss";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight.esm";
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft.esm";
import { RiDownloadLine } from "@react-icons/all-files/ri/RiDownloadLine.esm";

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
      <Box sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <Button onClick={prevPg}>
          <AiOutlineArrowLeft />
          {"Back"}
        </Button>
        <Button
          onClick={() => {
            ReactDownLoad(PDF, "GET", "CV-CucGabrielPaul.pdf");
          }}
        >
          <RiDownloadLine />
          {"Download"}
        </Button>
        <Button onClick={nextPg}>
          {"Next"}
          <AiOutlineArrowRight />
        </Button>
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
        <Page
          width={
            window.innerWidth > 900
              ? 800
              : window.innerWidth > 800
              ? 700
              : window.innerWidth > 700
              ? 600
              : window.innerWidth > 600
              ? 500
              : window.innerWidth > 500
              ? 500
              : window.innerWidth > 400
              ? 400
              : 320
          }
          pageNumber={pageNumber}
        />
      </Document>
    </Box>
  );
};

export default CvViewer;
