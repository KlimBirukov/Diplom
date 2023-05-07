import React from 'react';

import {useGetDocumentsQuery} from '../store/documents/document.api';

export function HomePage() {

    const {isLoading, isError, data} = useGetDocumentsQuery('klimbirukov')

    return (
        <div>
            Home
        </div>
    );
};
