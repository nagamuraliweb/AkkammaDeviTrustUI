import { jsPDF } from "jspdf";

export const generatePDF = (pdfContent) => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    const currentDate = new Date().toLocaleDateString();
    const title = "Galiyar Kula Welfare Trust";
    const pageWidth = doc.internal.pageSize.width; // Get the page width
    const textWidth = doc.getTextWidth(title); // Get the width of the title text
    const xPosition = (pageWidth - textWidth) / 2; // Calculate center position
    doc.text(title, xPosition, 10);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Date: ${currentDate}`, pageWidth - 50, 20); // Right-Aligned Date

    let yPosition = 30;
    // const header = [
    //     'NAME',
    //     'DATE',
    //     'MOBILE NO',
    //     'ADDRESS',
    //     'PIN CODE',
    //     'PAYMENT TOWARDS',
    //     'MONTH',
    //     'PAYMENT TOWARDS DATE',
    //     'PAYMENT TOWARDS OTHERS',
    //     'AMOUNT',
    //     'PAYMENT TYPE',
    //     'UTR NO'
    // ];
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Set the color for the text

    doc.text(`Name: ${pdfContent.name}`, 20, yPosition);
    yPosition += 8;

    doc.text(`Mobile No: +(91) ${pdfContent.mobileno.toString()}`, 20, yPosition);
    yPosition += 8;

    doc.text(`Date: ${pdfContent.date}`, 20, yPosition);
    yPosition += 8;

    doc.text(`Address: ${pdfContent.address}`, 20, yPosition);
    yPosition += 8;

    doc.text(`Pin Code: ${pdfContent.pincode.toString()}`, 20, yPosition);
    yPosition += 8;

    doc.text(`Payment Towards: ${pdfContent.paymenttowards}`, 20, yPosition);
    yPosition += 8;

    doc.text(`Month: ${pdfContent.month}`, 20, yPosition);
    yPosition += 8;

    doc.text(`Payment Towards Date: ${pdfContent.paymenttowardsdate}`, 20, yPosition);
    yPosition += 8;

    doc.text(`Payment Towards Others: ${pdfContent.paymenttowardsothers}`, 20, yPosition);
    yPosition += 8;

    doc.text(`Amount: Rs ${pdfContent.amount}/-`, 20, yPosition);
    yPosition += 8;

    doc.save(`${pdfContent._id}_donation.pdf`); // Saves the PDF as donations.pdf
};
