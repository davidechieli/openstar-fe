export const environment: IEnvironment = {
	production: false,
	apiUrl: "http://localhost:3000/api",
	authorityUrl:
		"http://localhost:8080/realms/open-star/.well-known/openid-configuration",
	client_id: "open-star",
	redirect_uri: "http://localhost:4200/login",
	scope: "openid profile email",
	client_secret: "kFCnKE7APciDxib7MBvDodSCfHoCz9tM",
};

export interface IEnvironment {
	production: boolean;
	apiUrl: string;
	authorityUrl: string;
	client_id: string;
	redirect_uri: string;
	scope: string;
	client_secret: string;
}
