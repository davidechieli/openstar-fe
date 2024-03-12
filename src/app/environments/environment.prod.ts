import { IEnvironment } from "./environment";

export const environment: IEnvironment = {
	production: true,
	apiUrl: "https://example.com/api",
	authorityUrl:
		"http://localhost:5435/realms/open-star/.well-known/openid-configuration",
};
