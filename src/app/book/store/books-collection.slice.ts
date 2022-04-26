import { EntityAdapter, EntityState } from '@ngrx/entity';
import { Book } from '../shared/book';

export const bookFeatureName = 'BookFeature';
export type BookCollectionSlice = EntityState<Book>;
