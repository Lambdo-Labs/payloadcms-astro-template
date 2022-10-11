export interface PayloadCollection<CollectionType> {
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  docs: CollectionType[]
  prevPage: number | null
  nextPage: number | null
}

// overload slate types
import "slate"
import type {
  FormattedText,
  FormattedElement,
} from "@/payload/rich-text-export";
declare module "slate" {
  interface CustomTypes {
    Element: FormattedElement;
    Text: FormattedText;
  }
}