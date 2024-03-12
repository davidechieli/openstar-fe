export const environment: IEnvironment = {
	production: false,
	apiUrl: "http://localhost:3000/api",
	authorityUrl:
		"http://localhost:8080/realms/open-star/.well-known/openid-configuration",
};

export interface IEnvironment {
	production: boolean;
	apiUrl: string;
	authorityUrl: string;
}
