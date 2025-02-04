import {useState} from 'react';

/**
 * @description Opções para a função useMutation.
 * @template TData Tipo dos dados.
 * @property onSuccess Função chamada quando a mutação é bem sucedida.
 * @property onError Função chamada quando a mutação falha.
 * @property errorMessage Mensagem de erro.
 * @example
 *   const {mutate, loading, error} = useMutation<{message: string}, PostComment>(
 *    ({message}) => postCommentService.create(postId, message),
 *    options,
 *  );
 */
export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

/**
 * @description Hook que realiza uma mutação.
 * @param mutationFn Função que recebe as variáveis e retorna uma Promise com os dados.
 * @template TVariables Tipo das variáveis.
 * @template TData Tipo dos dados.
 */

/**
 *
 * @deprecated use useMutation from `@tanstack/react-query`
 */

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  async function mutate(variables: TVariables) {
    try {
      setLoading(true);
      setError(null);
      const data = await mutationFn(variables);
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (mutateError) {
      if (options?.onError) {
        options.onError(options.errorMessage || '');
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    mutate,
  };
}
