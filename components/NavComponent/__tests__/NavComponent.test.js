import { render } from '@testing-library/react'
import NavComponent from '../NavComponent'
import '@testing-library/jest-dom'

describe('NavComponent', () => {
    it('renders a heading', () => {
      const { getByRole } = render(<NavComponent />)  
      const heading = getByRole('heading')
      expect(heading).toBeInTheDocument()
    })

    it('renders a menu', () => {
        const { getAllByRole } = render(<NavComponent />)  
        const menu = getAllByRole('menu')
        expect(menu).toHaveLength(2)
    })
})