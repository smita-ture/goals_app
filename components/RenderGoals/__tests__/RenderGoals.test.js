import React from 'react'
import { render } from '@testing-library/react'
import RenderGoals from '../RenderGoals'
import '@testing-library/jest-dom'

describe('RenderGoals', () => {
    let originFetch
    beforeEach(() => {
        originFetch = global.fetch
    })
    afterEach(() => {
        global.fetch = originFetch
    })

    it('renders compoenent', async () => {
    const goalsList = [{code:'1' , title: 'Test title', description: 'Test description'}]
    const mockResponse = jest.fn()
    mockResponse.mockReturnValue(() =>  goalsList)
    const mockedFetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => (mockResponse)
    })
    global.fetch = mockedFetch

    const { wrapper } = render(<RenderGoals />)  
    expect(wrapper).toMatchSnapshot()
    })
})