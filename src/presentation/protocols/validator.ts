export interface Validator {
  validate: (fieldName: string, value: string) => string
}
