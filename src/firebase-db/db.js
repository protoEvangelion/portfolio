import { db } from './';

export function saveBoothData(route, values) {
	console.log('PATH =========>', path, values)
	return db.ref(path).update(values)
}
