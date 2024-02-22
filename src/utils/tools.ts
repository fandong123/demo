
interface Options<T> {
  errorObj: T;
}

export function safeJSONParse<T>(str: string = '', options?: Options<T> ) {
  try {
    const result = JSON.parse(str);
    return result as T;
  } catch (error) {
    return options?.errorObj || {} as T;
  }
}