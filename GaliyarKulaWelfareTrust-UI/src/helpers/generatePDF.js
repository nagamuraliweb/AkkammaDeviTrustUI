import { jsPDF } from "jspdf";
import 'jspdf-autotable';

export const generatePDF = (pdfContent) => {
    const doc = new jsPDF();
    // Define the table columns and data
    const header = [
        'NAME',
        'DATE',
        'MOBILE NO',
        'ADDRESS',
        'PAYMENT TOWARDS',
        'MONTH',
        'PAYMENT TOWARDS DATE',
        'PAYMENT TOWARDS OTHERS',
        'AMOUNT',
        'PAYMENT TYPE',
        'UTR NO'
    ];
    const data = [Object.values(pdfContent).slice(1)];
    doc.setFontSize(12);
    const currentDate = new Date().toLocaleDateString();
    const title = "Galiyar Kula Welfare Trust";
    const pageWidth = doc.internal.pageSize.width; // Get the page width
    const textWidth = doc.getTextWidth(title); // Get the width of the title text
    const xPosition = (pageWidth - textWidth) / 2; // Calculate center position
    doc.setFont('custom', 'bold');
    doc.setTextColor(219, 13, 75);
    doc.text(title, xPosition, 10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('Newsreader', 'bold');
    doc.text('Donation Reciept', 15, 20);
    doc.setFont('Newsreader', 'normal');
    doc.setFontSize(7);
    doc.text(`Date: ${currentDate}`, pageWidth - 30, 10); // Right-Aligned Date

    // Add the table to the PDF
    doc.autoTable({
        head: [header],
        body: data,
        styles: { fontSize: 7 },
        headStyles: {
            fillColor: [240, 240, 240],
            textColor: [0],
            fontStyle: 'bold',
            fontSize: 7,
            font: 'Newsreader',
            halign: 'left'
        },
        alternateRowStyles: { fillColor: [255, 255, 255] },
        bodyStyles: {
            fontSize: 7, // Adjust the font size for the body
            font: 'Newsreader', // Set the font family for the body
            textColor: [0, 0, 0], // Set text color for the body
            rowPageBreak: 'avoid', // Avoid row page breaks
        },
        columnStyles: {
            0: { cellWidth: 'auto' }, // Auto adjust column width
            1: { cellWidth: 'auto' },
            2: { cellWidth: 'auto' },
            3: { cellWidth: 'auto' }, // Auto adjust column width
            4: { cellWidth: 'auto' },
            5: { cellWidth: 'auto' },
            6: { cellWidth: 'auto' }, // Auto adjust column width
            7: { cellWidth: 'auto' },
            8: { cellWidth: 'auto' },
            9: { cellWidth: 'auto' },
            10: { cellWidth: 'auto' }
        },
        margin: { top: 30 }
    });

    // const summaryYStart = doc.internal.pageSize.getHeight() - 50;

    doc.setFontSize(10);
    doc.setFont('Newsreader', 'normal');
    doc.text('*** Thanking You ***', xPosition + 10, 80)
    // doc.text('Yours Faithfully,', 13, summaryYStart + 24)
    doc.setFont('Newsreader', 'bold');
    doc.text('Galiyar Kula Welfare Trust ', 13, 80);
    doc.setFont('Newsreader', 'normal');
    doc.setFontSize(9);
    doc.text('Sengalipalayam, Coimbatore 641022', 13, 85)

    doc.save(`${pdfContent.ID}_donation.pdf`); // Saves the PDF as donations.pdf
};
