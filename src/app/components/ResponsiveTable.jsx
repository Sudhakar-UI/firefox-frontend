// components/ResponsiveTable.js
import React, { useEffect } from 'react';

const ResponsiveTable = ({ tableId }) => {
    useEffect(() => {
        const handleResize = () => {
            const table = document.getElementById(tableId);
            if (!table) return; // Check if the table exists

            const isMobile = window.innerWidth < 768;

            const headers = table.querySelectorAll('th');
            const rows = table.querySelectorAll('tbody tr');

            const responsiveHeader = table.querySelector('.table-responsive-stack-thead');
            const thead = table.querySelector('thead');

            if (isMobile) {
                // Show responsive headers and hide thead
                if (responsiveHeader) responsiveHeader.style.display = 'block';
                if (thead) thead.style.display = 'none';

                rows.forEach(row => {
                    headers.forEach((header, index) => {
                        const cell = row.cells[index];
                        if (cell && !cell.querySelector('.table-responsive-stack-thead')) {
                            const span = document.createElement('span');
                            span.className = 'table-responsive-stack-thead';
                            span.textContent = header.textContent + ' ';
                            cell.prepend(span);
                        }
                    });
                });
            } else {
                // Hide responsive headers and show thead
                if (responsiveHeader) responsiveHeader.style.display = 'none';
                if (thead) thead.style.display = 'table-header-group';
            }
        };

        // Initial call
        handleResize();

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [tableId]);

    return null; // This component does not render anything itself
};

export default ResponsiveTable;