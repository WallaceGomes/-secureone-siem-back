exports.get = async (req, res, next) => {
	const params = req.params;

	console.log('------------');
	console.log('---PARAMS---');
	console.log(params);
	console.log('------------');

	return res.status(200).send();
};

exports.post = async (req, res, next) => {
	const body = req.body;
	const params = req.params;

	console.log('------------');
	console.log('----BODY----');
	console.log(body);
	console.log('------------');
	console.log('------------');
	console.log('---PARAMS---');
	console.log(params);
	console.log('------------');

	return res.status(200).send();
};
