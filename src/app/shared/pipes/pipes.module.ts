import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './cpf.pipe';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
    CpfPipe,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    PhonePipe
  ]
})
export class PipesModule {
  static forRoot() {
    return {
        ngModule: PipesModule,
        providers: [],
    };
 }
}
