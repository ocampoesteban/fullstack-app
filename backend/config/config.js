var config = {
	port: process.env.PORT || 9000,
	DBUrl:process.env.DATABASE_URL,
	endpoint: '/api',
	messages : {
	   	missing: 'not Found',
		deleted: 'deleted successfully',
		updated: 'updated successfully',
		success: 'created successfully',
		found: 'found',
		ISE: 'Internal server error'
	  }
};

export default config;