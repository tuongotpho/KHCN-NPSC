import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Initiative } from '../types';

export const exportInitiativesToPDF = async (filtered: Initiative[], user?: any): Promise<void> => {
    // 1. Initialize Document - Landscape A4
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

    // 2. Load Vietnamese Font (Roboto Regular) from CDN to support Unicode
    const fontUrl = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf';
    const response = await fetch(fontUrl);
    const buffer = await response.arrayBuffer();

    const base64data = btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));

    doc.addFileToVFS('Roboto-Regular.ttf', base64data);
    doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal');
    doc.addFont('Roboto-Regular.ttf', 'Roboto', 'bold');

    doc.setFont('Roboto', 'normal');

    // 3. Header Info
    doc.setFontSize(18);
    doc.setTextColor(234, 88, 12); // Orange-600
    doc.text("BÁO CÁO SÁNG KIẾN - NPC-Innovation", 148.5, 18, { align: "center" });

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Ngày xuất báo cáo: ${new Date().toLocaleDateString('vi-VN')}`, 148.5, 24, { align: "center" });

    if (user && user.email) {
        doc.text(`Người xuất: ${user.email}`, 148.5, 29, { align: "center" });
    }

    // 4. Table Columns
    const tableColumn = ["STT", "Năm", "Cấp", "Tên sáng kiến", "Đơn vị", "Tác giả", "Lĩnh vực"];

    // 5. Table Rows 
    const tableRows = filtered.map((item, index) => {
        const units = Array.isArray(item.unit) ? item.unit.join(', ') : (item.unit || '');
        const authors = Array.isArray(item.authors) ? item.authors.join(', ') : (item.authors || '');
        const levels = item.level?.join(', ') || '';
        const fields = Array.isArray(item.field) ? item.field.join(', ') : (item.field || '');

        return [index + 1, item.year, levels, item.title, units, authors, fields];
    });

    // 6. Generate Table
    autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 35,
        theme: 'grid',
        margin: { top: 10, right: 10, bottom: 10, left: 15 },
        styles: { font: 'Roboto', fontStyle: 'normal', fontSize: 10, cellPadding: 3, overflow: 'linebreak' },
        headStyles: { fillColor: [234, 88, 12], textColor: 255, font: 'Roboto', fontStyle: 'bold', halign: 'center', valign: 'middle' },
        columnStyles: {
            0: { cellWidth: 12, halign: 'center' },
            1: { cellWidth: 15, halign: 'center' },
            2: { cellWidth: 20, halign: 'center' },
            3: { cellWidth: 'auto' },
            4: { cellWidth: 40 },
            5: { cellWidth: 40 },
            6: { cellWidth: 30 },
        },
        alternateRowStyles: { fillColor: [248, 250, 252] }
    });

    // 7. Save
    doc.save(`Bao_Cao_Sang_Kien_NPC-Innovation_${new Date().getFullYear()}.pdf`);
};
