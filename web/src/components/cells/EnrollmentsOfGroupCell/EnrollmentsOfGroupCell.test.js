import { render, screen } from '@redwoodjs/testing'
import { Loading, Empty, Failure, Success } from './EnrollmentsOfGroupCell'
import { standard } from './EnrollmentsOfGroupCell.mock'

describe('EnrollmentsOfGroupCell', () => {
  test('Loading renders successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  test('Empty renders successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  test('Failure renders successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  //   expect(screen.getByText('Hello, world')).toBeInTheDocument()

  test('Success renders successfully', async () => {
    expect(() => {
      render(<Success enrolledList={standard().enrolledList} />)
    }).not.toThrow()
  })
})
