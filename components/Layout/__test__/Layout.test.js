import { render } from '@testing-library/react'
import Layout from '../Layout'
import '@testing-library/jest-dom'

describe('Layout', () => {
    it('renders a page common layout', () => {
      const { container } = render(<Layout />)  
      const nav = container.querySelector('nav')
      const main = container.querySelector('main')
      expect(nav).toBeInTheDocument()
      expect(main).toBeInTheDocument()
    })    
})