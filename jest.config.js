module.exports = {
	bail: false,
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/src/**/*.js'],
	coverageReporters: [
	    'html',
	    'lcov'
	],
	coverageThreshold: {
		global: {
			branches: 80,
            functions: 80,
            lines: 80,
            statements: -10
      }
    },
    setupFilesAfterEnv: ['./test/utils/test-setup.js'],
     testMatch: [
        '<rootDir>/test/unit/**/*.spec.js'
    ]
}