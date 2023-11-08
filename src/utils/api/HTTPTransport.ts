import { defaultTimeoutTime, queryStringify } from "./helpers";
import { RequestMethods, RequestOptions } from "./types";

export class HTTPTransport {
  get = (url: string, options: RequestOptions): Promise<XMLHttpRequest> => {
    const updatedOptions: RequestOptions = { ...options, method: RequestMethods.GET };
    return this.request(url, updatedOptions, options.timeout);
  };

  request = (url: string, options: RequestOptions, timeout?: number): Promise<XMLHttpRequest> => {
    return new Promise((resolve, reject) => {
      const { method, headers, data } = options;
      const xhr = new XMLHttpRequest();
      const isGetMethod = method === RequestMethods.GET || !data;

      const requestUrl = isGetMethod && !!data ? `${url}${queryStringify(data)}` : url;

      xhr.open(method, requestUrl);

      if (headers && typeof headers === 'object' && headers !== null) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value.toString());
        });
      }

      xhr.timeout = timeout || defaultTimeoutTime;

      xhr.onload = () => { resolve(xhr); };
      xhr.onabort = () => { reject(new Error('Запрос отклонен клиентом')); };
      xhr.onerror = () => { reject(new Error('Ошибка запроса')); };
      xhr.ontimeout = () => { reject(new Error(`Запрос отклонен. Время ожидания - ${timeout || defaultTimeoutTime}мс вышло`)); };

      if (isGetMethod) xhr.send();
      if (!isGetMethod) xhr.send(JSON.stringify(data));
    });
  };
}
