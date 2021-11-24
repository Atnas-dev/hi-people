declare global {
	type Obj<T> = {[key: string]: T};
	type ValueOf<T> = T[keyof T];
}
