import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

function _pdfReader() {
    return (
        <PDFViewer
            document={{
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
            }}
        />
    )
}

export default _pdfReader