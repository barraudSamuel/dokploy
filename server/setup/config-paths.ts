import { existsSync, mkdirSync } from "node:fs";
import {
	APPLICATIONS_PATH,
	BASE_PATH,
	CERTIFICATES_PATH,
	DYNAMIC_TRAEFIK_PATH,
	LOGS_PATH,
	MAIN_TRAEFIK_PATH,
	MONITORING_PATH,
	SSH_PATH,
} from "../constants";

const createDirectoryIfNotExist = (dirPath: string) => {
	if (!existsSync(dirPath)) {
		mkdirSync(dirPath, { recursive: true });
		console.log(`Directory created: ${dirPath}`);
	}
};

export const setupDirectories = () => {
	const directories = [
		BASE_PATH,
		MAIN_TRAEFIK_PATH,
		DYNAMIC_TRAEFIK_PATH,
		LOGS_PATH,
		APPLICATIONS_PATH,
		SSH_PATH,
		CERTIFICATES_PATH,
		MONITORING_PATH,
	];

	for (const dir of directories) {
		try {
			createDirectoryIfNotExist(dir);
		} catch (error) {
			console.log(error, " On path: ", dir);
		}
	}
};
