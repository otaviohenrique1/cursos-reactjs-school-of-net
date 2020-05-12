import React, { useEffect } from 'react';

// Estrutura basica de hook custom
const useTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

export default useTitle;