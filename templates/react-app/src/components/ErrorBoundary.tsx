/* eslint-disable */
/**
 * App Error Boundary - Prevent page crashes
 *
 * @see {@link https://reactjs.org/docs/error-boundaries.html}
 */
import React from 'react'

class ErrorBoundary extends React.Component {
	constructor(props: unknown) {
		super(props)

		this.state = { error: null, info: '' }
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { error: error }
	}

	componentDidCatch(error, info): void {
		// Example "componentStack":
		//   in ComponentThatThrows (created by App)
		//   in ErrorBoundary (created by App)
		//   in div (created by App)
		//   in App
		// logComponentStackToMyService(info.componentStack)
		this.setState({ info: info })
	}

	render(): void {
		if (!this.state.error) {
			return this.props.children
		}

		// prettier-ignore
		return (
			<>
				<h1 style={{ fontSize: '48px' }}>Something went wrong.（出错了！）</h1>
				<p style={ { fontSize: '24px', color: 'red', paddingLeft: '20px' } }>{ this.state.error.toString() }</p>
				{
					this.state.info && (
						<div
							style={{ fontSize: '16px', color: 'red', paddingLeft: '40px' }}
							dangerouslySetInnerHTML={{ __html: this.state.info.componentStack.replace(/\n/g, '<br />') }}></div>
					)
				}
			</>
		)
	}
}

export default ErrorBoundary
