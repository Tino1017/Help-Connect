import React from "react";
import PDF_LOGO from "../../assets/images/pdf-logo.png"

interface IDocumentViewer {
  fileData: string;
  fileName: string;
}

export const DocumentViewer: React.FC<IDocumentViewer> = ({
  fileData,
  fileName,
}) => {
  // Create a blob from the base64 PDF data
  const byteCharacters = atob(fileData.split(",")[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const pdfBlob = new Blob([new Uint8Array(byteNumbers)], {
    type: "application/pdf",
  });

  // Create an object URL for the blob
  const pdfBlobUrl = URL.createObjectURL(pdfBlob);

  return (
    <div>
      {/* <p className="mb-2 text-sm">Click the link below to download the PDF</p> */}
      <a href={pdfBlobUrl} download={fileName} className="flex items-center gap-2">
        <span><img src={PDF_LOGO} alt={fileName} className="h-5 w-5 object-contain" /></span>
        <span>Download PDF</span>
      </a>
    </div>
  );
};
