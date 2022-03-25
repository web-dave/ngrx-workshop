import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookRoutingModule } from './book-routing.module';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookNewComponent } from './book-new/book-new.component';
import { StoreModule } from '@ngrx/store';
import { bookStoreName } from './store/books.store';
import { booksReducer } from './store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/books.effects';

@NgModule({
  imports: [
    BookRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(bookStoreName, booksReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent,
  ],
})
export class BookModule {}
