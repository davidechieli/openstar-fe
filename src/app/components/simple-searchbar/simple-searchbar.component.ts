import { Component } from "@angular/core";
import { debounce, DebouncedFunc } from "lodash";
import { ApiService } from "../../services/api.service";
import { map } from "rxjs";

@Component({
	selector: "app-simple-searchbar",
	templateUrl: "./simple-searchbar.component.html",
	styleUrl: "./simple-searchbar.component.scss",
})
export class SimpleSearchbarComponent {
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
