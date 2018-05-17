export default function FetchBlob(url) {
	return new Promise((resolve, reject) => {
		fetch(url).then(data => {
			const response = new Response(data.body);
			response.blob().then(blob => {
				resolve(URL.createObjectURL(blob));
			}).catch(err => reject(err));
		}).catch(err => reject(err));
	});
}
