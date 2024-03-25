import { Component } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { map } from "rxjs";
import { DebouncedFunc, debounce } from "lodash";

@Component({
	selector: "app-search-bar",
	templateUrl: "./search-bar.component.html",
	styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent {
	searchQuery: string = "";
	searchResults: any[] = [];
	debouncedSearch: DebouncedFunc<() => void>;

	constructor(private apiService: ApiService) {
		this.debouncedSearch = debounce(() => this.searchCompanies(), 500);
	}
	searchCompanies() {
		this.searchResults = [];

		this.apiService
			.searchCompanies()
			.pipe(
				map((companies) => {
					// Filter companies based on searchQuery
					return companies.filter((company) => {
						// Assuming company has a property 'name' which is used for filtering
						return company.businessName
							.toLowerCase()
							.includes(this.searchQuery.toLowerCase());
					});
				})
			)
			.subscribe((data: any) => {
				console.log(data);
				this.searchResults = data; // Assuming API returns results array
			});
	}
}
