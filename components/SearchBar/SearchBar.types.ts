export interface SearchBarProps {
  term?: string;
  fieldWidth?: number;
  onTermChanged?: (term: string) => any;
}
