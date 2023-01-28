import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos exportados de Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatProgressSpinnerModule,
    ],
})
export class MaterialModule {}
