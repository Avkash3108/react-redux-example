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
			branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
      }
    },
    setupFilesAfterEnv: ['./test/utils/test-setup.js'],
     testMatch: [
        '<rootDir>/test/unit/**/*.spec.js'
    ],
    resetModules: true,
    restoreMocks: true,
    moduleNameMapper: {
    	 '\\.(css|scss)$': '<rootDir>/test/utils/style.js',
    	 '\\.(jpg|png|svg|jpeg)$': '<rootDir>/test/utils/style.js'
    }
}