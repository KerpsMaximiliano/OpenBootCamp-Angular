import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailtPageComponent } from './contact-detailt-page.component';

describe('ContactDetailtPageComponent', () => {
    let component: ContactDetailtPageComponent;
    let fixture: ComponentFixture<ContactDetailtPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContactDetailtPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ContactDetailtPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
