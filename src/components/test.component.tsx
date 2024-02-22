interface TestProps {
	children: React.ReactNode;
}

export function Test({ children }: TestProps) {
	return (
		<>
			<h1>Test</h1>
			{children}
		</>
	);
}
