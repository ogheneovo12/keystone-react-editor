import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AtButton } from './components/atoms/at-button/index'

describe('AtButton', () => {
  it('should render', async () => {
    const label = 'test button'
    render(<AtButton label={label} />)
    expect(screen.getByText(label)).toBeDefined()
  })
})
