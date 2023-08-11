import * as z from 'zod'
import { Validation } from '../presentation/protocols/validation'

export class ZodValidation implements Validation {
  private readonly validateSchema: any

  constructor () {
    this.validateSchema = z.object({
      email: z.string()
        .email({ message: 'Email inválido. Por favor passe email correcto.' })
        .optional(),
      password: z.string()
        .min(6, { message: 'A senha deve ter conter pelomenos 6 caracteres.' })
        .optional()
    })
  }

  validate (fieldName: string, value: string): string {
    try {
      this.validateSchema.parse({ [fieldName]: value })
      return ''
    } catch (error) {
      return JSON.parse(error)[0].message
    }
  }
}
