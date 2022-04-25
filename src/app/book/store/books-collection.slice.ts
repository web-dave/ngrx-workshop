import { Book } from '../shared/book';

export const bookFeatureName = 'BookFeature';
export interface BookCollectionSlice {
  entities: ReadonlyArray<Book>;
}
