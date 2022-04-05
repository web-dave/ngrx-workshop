import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  UrlSegment,
  UrlMatchResult,
} from '@angular/router';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';

// foo/bar/baz

// foo/bar

// foo

// ''
const isbnRegex =
  // tslint:disable-next-line:max-line-length
  '^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$';
const isbnMatcher = (url: UrlSegment[]): UrlMatchResult => {
  return url.length === 1 && url[0].path.match(isbnRegex)
    ? {
        consumed: url,
        posParams: {
          isbn: new UrlSegment(url[0].path, {}),
        },
      }
    : null;
};

export const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
      },
      {
        matcher: isbnMatcher,
        component: BookDetailComponent,
      },
      {
        path: 'new',
        component: BookNewComponent,
      },
      {
        path: ':isbn/edit',
        component: BookEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
