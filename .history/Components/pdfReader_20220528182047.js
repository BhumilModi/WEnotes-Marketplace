import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import sample from '../public/1.pdf'

const style = {
    wrapper: `flex-1 pt-[15px] pr-[20px] pb-[20px]`,
}

export default function _pdfReader() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className={style.wrapper}>
            <Document file={sample} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}
