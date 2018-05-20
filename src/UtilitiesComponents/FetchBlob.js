import request from 'request';

export default function FetchBlob(url) {
	return new Promise((resolve, reject) => {
		request(url, {encoding: null}, (err, res, body) => {
			const response = new Response(body);
			response.blob().then(blob => {
				resolve(URL.createObjectURL(blob));
			}).catch(err => reject(err));
		});
	});
}
