import React, { useState } from 'react';
import Pdf from '@mikecousins/react-pdf';
import sample from '../public/stack1.pdf'

const style = {
    wrapper: `flex-1 pt-[15px] pr-[20px] pb-[20px]`,
}

export default function _pdfReader() {
    const [page, setPage] = useState(1);

    return (
        <div className={style.wrapper}>
            <Pdf file={sample} page={page} />
        </div>
    );
}
