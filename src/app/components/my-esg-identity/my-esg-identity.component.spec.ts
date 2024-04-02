import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MyEsgIdentityComponent } from "./my-esg-identity.component";

describe("MyEsgCommitmentComponent", () => {
	let component: MyEsgIdentityComponent;
	let fixture: ComponentFixture<MyEsgIdentityComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MyEsgIdentityComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(MyEsgIdentityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
