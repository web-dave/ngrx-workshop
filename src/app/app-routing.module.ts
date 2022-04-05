import {
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';

const preFlyMatcher = (url: UrlSegment[]) => {
  console.log(url);

  return null;
};

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books',
  },
  {
    path: 'books',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
    }),
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
