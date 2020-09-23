import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticeComponent } from './practice.component';
import { AmountConvertComponent } from './amount-convert/amount-convert.component';
import {MoodsComponent} from './moods/moods.component';

const routes: Routes = [
  {
    path: '',
    component: PracticeComponent,
    children: [  {
      path: 'amount-convert',
      component: AmountConvertComponent
    },
      {
      path: 'moods',
      component: MoodsComponent
    },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
