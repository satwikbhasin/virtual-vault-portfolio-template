import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import { brandName } from "../../yourCustomizations/brand";

export const copyPageLinkToClipboard = () => {
  const currentLink = window.location.href;
  navigator.clipboard.writeText(currentLink);
};

export const downloadProductImage = (image, productName) => {
  saveAs(image, `${brandName}-${productName}.png`);
};

export const downloadProductInfoPDF = async (product) => {
  const pdfDoc = new jsPDF();

  pdfDoc.setFontSize(30);
  pdfDoc.setTextColor("#137252");
  pdfDoc.setFont("Roboto", "bold");
  pdfDoc.text(brandName, pdfDoc.internal.pageSize.getWidth() / 2, 20, {
    align: "center",
  });

  const img = new Image();
  img.src = product.image;
  img.onload = () => {
    const imgWidth = 100;
    const imgHeight = (img.height * imgWidth) / img.width;
    const imgYPosition = 40;
    const pageWidth = pdfDoc.internal.pageSize.getWidth();
    const imgXPosition = (pageWidth - imgWidth) / 2;
    const textYPosition = imgYPosition + imgHeight + 20;

    pdfDoc.addImage(img, 'JPEG', imgXPosition, imgYPosition, imgWidth, imgHeight);

    pdfDoc.setTextColor("black");

    pdfDoc.setFont("Roboto", "bold");
    pdfDoc.setFontSize(16);
    pdfDoc.text(product.name, 15, textYPosition);

    pdfDoc.setFont("Roboto", "normal");
    pdfDoc.setFontSize(12);
    const descriptionLines = pdfDoc.splitTextToSize(product.description, 180);
    pdfDoc.text(descriptionLines, 15, textYPosition + 10);

    if (product.link) {
      const linkYPosition = textYPosition + descriptionLines.length * 10;
      pdfDoc.text("Website: ", 15, linkYPosition + 10);
      pdfDoc.setTextColor("blue");
      pdfDoc.textWithLink(product.link, 32, linkYPosition + 10, { url: product.link });
    }

    pdfDoc.save(`${brandName}-${product.name}.pdf`);
  };
};