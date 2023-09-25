import * as z from 'zod'
import { Validation } from '../presentation/protocols/validation'

export class ZodValidation implements Validation {
  private readonly validateSchema: any

  constructor () {
    this.validateSchema = z.object({
      name: z.string()
        .min(1, { message: 'Campo vazio. Preencha com seu nome' })
        .optional(),
      email: z.string()
        .email({ message: 'Email inválido. Passe email correcto.' })
        .optional(),
      password: z.string()
        .min(6, { message: 'A senha deve ter conter pelomenos 6 caracteres.' })
        .optional(),
      deviceType: z.string()
        .min(1, { message: 'Campo Vazio. Preencha com tipo disposito com problema' })
        .optional(),
      numberDevice: z.string()
        .min(8, { message: 'O campo numero de despositivo deve ter 8 digitos.' })
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
