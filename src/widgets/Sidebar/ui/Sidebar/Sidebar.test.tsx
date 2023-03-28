import { RenderComponent } from '@/shared/lib/tests/RenderComponent';
import { Sidebar } from '@/widgets/Sidebar';
import { screen, fireEvent } from '@testing-library/react';

describe('Sidebar', () => {
    beforeEach(() =>RenderComponent(<Sidebar/>));
    
    it('should exists and be collapsed', () => {
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });

    it('should not have class collapsed', () => {
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);        
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});