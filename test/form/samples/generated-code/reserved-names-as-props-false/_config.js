module.exports = {
	description: 'escapes reserved names used as props',
	options: {
		output: {
			exports: 'named',
			generatedCode: { reservedNamesAsProps: false },
			name: 'bundle'
		},
		plugins: [
			{
				transform() {
					return { syntheticNamedExports: true };
				}
			}
		]
	}
};
