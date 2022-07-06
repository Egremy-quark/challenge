export const breakpoints = {
	sm: 20,
	md: 30,
	lg: 45,
	xl: 60
	// xxl: 75
};

export const mediaQueries = key => {
	return style => `@media (max-width: ${key}em) { ${style} }`;
};
