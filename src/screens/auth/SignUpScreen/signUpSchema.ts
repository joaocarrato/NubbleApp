import {stringUtils} from '@utils';
import {z} from 'zod';

export const signUpSchema = z.object({
  username: z
    .string()
    .min(5, 'username muito curto')
    .regex(/^[a-zA-Z0-9_]{3,30}$/, 'Username inválido')
    .toLowerCase(),
  firstName: z
    .string()
    .min(3, 'Nome muito curto')
    .max(50, 'Nome muito longo')
    .transform(stringUtils.capitalizeFirstLetter),
  lastName: z
    .string()
    .min(3, 'Nome muito curto')
    .max(50, 'Nome muito longo')
    .transform(stringUtils.capitalizeFirstLetter),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Mínimo 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
