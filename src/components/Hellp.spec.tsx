import { render, screen } from '@testing-library/react'
import Hello from './Hello'

describe('Hello', () => {
    it('should return hello world', () => {
        //     document.body.innerHTML = `
        //     <span data-testid="not-empty"><span data-testid="empty"></span></span>
        //     <div data-testid="visible">Visible Example</div>
        //   `

        //     expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
        //     expect(screen.getByText('Visible Example')).toBeVisible()

        render(<Hello/>)
        const myElement = screen.getAllByText(/Hello world/)[0];
        expect(myElement).toBeInTheDocument();
    })
})
