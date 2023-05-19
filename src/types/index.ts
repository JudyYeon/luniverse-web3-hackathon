import { AxiosError } from "axios";

export {};

declare global {
	interface ApiResult<T> {
		code: string;
		data: Data<T>;
	}

	interface Data<T> {
		count: number;
		items: T;
		page: number;
		rpp: number;
	}
}
