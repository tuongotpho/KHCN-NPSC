import React from 'react';
import { pdf, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { Initiative } from '../types';

// Register fonts
Font.register({
    family: 'Roboto',
    fonts: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf', fontWeight: 'medium' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Bold.ttf', fontWeight: 'bold' }
    ]
});

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Roboto',
        backgroundColor: '#ffffff'
    },
    headerContainer: {
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#ea580c',
        paddingBottom: 10,
    },
    title: {
        fontSize: 22,
        color: '#ea580c',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 8,
        textTransform: 'uppercase',
    },
    meta: {
        fontSize: 10,
        color: '#64748b',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
    },
    table: {
        display: 'flex',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#cbd5e1',
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableRowAlt: {
        flexDirection: 'row',
        backgroundColor: '#f8fafc',
    },
    tableColHeader: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#cbd5e1',
        borderLeftWidth: 0,
        borderTopWidth: 0,
        backgroundColor: '#ea580c',
    },
    tableCol: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#cbd5e1',
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCellHeader: {
        margin: 6,
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff'
    },
    tableCell: {
        margin: 6,
        fontSize: 9,
        color: '#334155',
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 30,
        right: 30,
        fontSize: 8,
        color: '#94a3b8',
        textAlign: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e2e8f0',
        paddingTop: 10,
    }
});

const ReportDocument = ({ data, user }: { data: Initiative[], user?: any }) => (
    <Document>
        <Page size="A4" orientation="landscape" style={styles.page}>

            <View style={styles.headerContainer}>
                <Text style={styles.title}>BÁO CÁO SÁNG KIẾN CẢI TIẾN - NPSC</Text>
                <Text style={styles.meta}>
                    Ngày lập: {new Date().toLocaleDateString('vi-VN')} | Người lập: {user?.email || 'N/A'} | Tổng số: {data.length} sáng kiến
                </Text>
            </View>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={{ ...styles.tableColHeader, width: '4%' }}><Text style={styles.tableCellHeader}>STT</Text></View>
                    <View style={{ ...styles.tableColHeader, width: '5%' }}><Text style={styles.tableCellHeader}>Năm</Text></View>
                    <View style={{ ...styles.tableColHeader, width: '10%' }}><Text style={styles.tableCellHeader}>Công nhận</Text></View>
                    <View style={{ ...styles.tableColHeader, width: '41%' }}><Text style={{ ...styles.tableCellHeader, textAlign: 'left' }}>Tên sáng kiến</Text></View>
                    <View style={{ ...styles.tableColHeader, width: '15%' }}><Text style={styles.tableCellHeader}>Đơn vị áp dụng</Text></View>
                    <View style={{ ...styles.tableColHeader, width: '15%' }}><Text style={styles.tableCellHeader}>Tác giả</Text></View>
                    <View style={{ ...styles.tableColHeader, width: '10%' }}><Text style={styles.tableCellHeader}>Lĩnh vực</Text></View>
                </View>

                {data.map((item, index) => (
                    <View style={index % 2 === 0 ? styles.tableRow : styles.tableRowAlt} key={index} wrap={false}>
                        <View style={{ ...styles.tableCol, width: '4%' }}><Text style={{ ...styles.tableCell, textAlign: 'center' }}>{index + 1}</Text></View>
                        <View style={{ ...styles.tableCol, width: '5%' }}><Text style={{ ...styles.tableCell, textAlign: 'center' }}>{item.year}</Text></View>
                        <View style={{ ...styles.tableCol, width: '10%' }}><Text style={{ ...styles.tableCell, textAlign: 'center', fontWeight: 'bold', color: '#ea580c' }}>{item.level?.join(', ')}</Text></View>
                        <View style={{ ...styles.tableCol, width: '41%' }}><Text style={{ ...styles.tableCell, fontWeight: 'medium' }}>{item.title}</Text></View>
                        <View style={{ ...styles.tableCol, width: '15%' }}><Text style={styles.tableCell}>{Array.isArray(item.unit) ? item.unit.join(', ') : item.unit}</Text></View>
                        <View style={{ ...styles.tableCol, width: '15%' }}><Text style={styles.tableCell}>{Array.isArray(item.authors) ? item.authors.join(', ') : item.authors}</Text></View>
                        <View style={{ ...styles.tableCol, width: '10%' }}><Text style={styles.tableCell}>{Array.isArray(item.field) ? item.field.join(', ') : item.field}</Text></View>
                    </View>
                ))}
            </View>

            <Text style={styles.footer} fixed>
                Tài liệu được xuất tự động từ hệ thống NPC-Innovation - Công ty Dịch vụ Điện lực miền Bắc (NPSC)
            </Text>
        </Page>
    </Document>
);

export const exportInitiativesToPDF = async (filtered: Initiative[], user?: any): Promise<void> => {
    const blob = await pdf(<ReportDocument data={filtered} user={user} />).toBlob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `Bao_Cao_Sang_Kien_NPC-Innovation_${new Date().getFullYear()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(url), 100);
};
