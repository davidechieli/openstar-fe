export const environment: IEnvironment = {
	production: false,
	apiUrl: "http://localhost:3000/api",
	authorityUrl:
		"http://localhost:5435/realms/open-star/.well-known/openid-configuration",
	client_id: "open-star",
	redirect_uri: "http://localhost:4200/login",
	redirect_logout_uri: "http://localhost:4200/logout",
	scope: "openid profile email",
	client_secret: "IbHYTsTug3aoy4sYF1MgboHe4KGj4Ckl",
};

export interface IEnvironment {
	production: boolean;
	apiUrl: string;
	authorityUrl: string;
	client_id: string;
	redirect_uri: string;
	redirect_logout_uri: string;
	scope: string;
	client_secret: string;
}
