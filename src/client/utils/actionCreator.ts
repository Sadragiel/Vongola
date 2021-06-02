export function createActionCreator<Type extends string>(type: Type) {
    return function <Payload = never>(): [Payload] extends [never]
        ? () => {
              type: Type;
          }
        : (
              payload: Payload,
          ) => {
              type: Type;
              payload: Payload;
          } {
        return ((payload?: Payload) =>
            typeof payload !== 'undefined'
                ? {
                      type,
                      payload: payload,
                  }
                : {
                      type,
                  }) as any;
    };
}

export type Action<Act extends { [prop: string]: (...args: any) => any }> = ReturnType<
    Act[keyof Act]
>;
