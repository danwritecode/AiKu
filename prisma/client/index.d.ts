
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model aiku
 * 
 */
export type aiku = {
  createdAt: Date
  lineOne: string
  lineTwo: string
  lineThree: string
  presetId: number | null
  userId: string
  sdUrl: string
  id: string
}

/**
 * Model preset
 * 
 */
export type preset = {
  id: number
  name: string
  value: string | null
  isDefault: boolean
}

/**
 * Model aikuCollectionMap
 * 
 */
export type aikuCollectionMap = {
  id: string
  aikuId: string
  collectionId: string
}

/**
 * Model collection
 * 
 */
export type collection = {
  id: string
  createdAt: Date
  userId: string
  name: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Aikus
 * const aikus = await prisma.aiku.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Aikus
   * const aikus = await prisma.aiku.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.aiku`: Exposes CRUD operations for the **aiku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aikus
    * const aikus = await prisma.aiku.findMany()
    * ```
    */
  get aiku(): Prisma.aikuDelegate<GlobalReject>;

  /**
   * `prisma.preset`: Exposes CRUD operations for the **preset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presets
    * const presets = await prisma.preset.findMany()
    * ```
    */
  get preset(): Prisma.presetDelegate<GlobalReject>;

  /**
   * `prisma.aikuCollectionMap`: Exposes CRUD operations for the **aikuCollectionMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AikuCollectionMaps
    * const aikuCollectionMaps = await prisma.aikuCollectionMap.findMany()
    * ```
    */
  get aikuCollectionMap(): Prisma.aikuCollectionMapDelegate<GlobalReject>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.collectionDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.6.1
   * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    aiku: 'aiku',
    preset: 'preset',
    aikuCollectionMap: 'aikuCollectionMap',
    collection: 'collection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AikuCountOutputType
   */


  export type AikuCountOutputType = {
    aikuCollectionMap: number
  }

  export type AikuCountOutputTypeSelect = {
    aikuCollectionMap?: boolean
  }

  export type AikuCountOutputTypeGetPayload<S extends boolean | null | undefined | AikuCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AikuCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AikuCountOutputTypeArgs)
    ? AikuCountOutputType 
    : S extends { select: any } & (AikuCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AikuCountOutputType ? AikuCountOutputType[P] : never
  } 
      : AikuCountOutputType




  // Custom InputTypes

  /**
   * AikuCountOutputType without action
   */
  export type AikuCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AikuCountOutputType
     * 
    **/
    select?: AikuCountOutputTypeSelect | null
  }



  /**
   * Count Type PresetCountOutputType
   */


  export type PresetCountOutputType = {
    aiku: number
  }

  export type PresetCountOutputTypeSelect = {
    aiku?: boolean
  }

  export type PresetCountOutputTypeGetPayload<S extends boolean | null | undefined | PresetCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PresetCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PresetCountOutputTypeArgs)
    ? PresetCountOutputType 
    : S extends { select: any } & (PresetCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PresetCountOutputType ? PresetCountOutputType[P] : never
  } 
      : PresetCountOutputType




  // Custom InputTypes

  /**
   * PresetCountOutputType without action
   */
  export type PresetCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PresetCountOutputType
     * 
    **/
    select?: PresetCountOutputTypeSelect | null
  }



  /**
   * Count Type CollectionCountOutputType
   */


  export type CollectionCountOutputType = {
    aikuCollectionMap: number
  }

  export type CollectionCountOutputTypeSelect = {
    aikuCollectionMap?: boolean
  }

  export type CollectionCountOutputTypeGetPayload<S extends boolean | null | undefined | CollectionCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CollectionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CollectionCountOutputTypeArgs)
    ? CollectionCountOutputType 
    : S extends { select: any } & (CollectionCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CollectionCountOutputType ? CollectionCountOutputType[P] : never
  } 
      : CollectionCountOutputType




  // Custom InputTypes

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     * 
    **/
    select?: CollectionCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model aiku
   */


  export type AggregateAiku = {
    _count: AikuCountAggregateOutputType | null
    _avg: AikuAvgAggregateOutputType | null
    _sum: AikuSumAggregateOutputType | null
    _min: AikuMinAggregateOutputType | null
    _max: AikuMaxAggregateOutputType | null
  }

  export type AikuAvgAggregateOutputType = {
    presetId: number | null
  }

  export type AikuSumAggregateOutputType = {
    presetId: number | null
  }

  export type AikuMinAggregateOutputType = {
    createdAt: Date | null
    lineOne: string | null
    lineTwo: string | null
    lineThree: string | null
    presetId: number | null
    userId: string | null
    sdUrl: string | null
    id: string | null
  }

  export type AikuMaxAggregateOutputType = {
    createdAt: Date | null
    lineOne: string | null
    lineTwo: string | null
    lineThree: string | null
    presetId: number | null
    userId: string | null
    sdUrl: string | null
    id: string | null
  }

  export type AikuCountAggregateOutputType = {
    createdAt: number
    lineOne: number
    lineTwo: number
    lineThree: number
    presetId: number
    userId: number
    sdUrl: number
    id: number
    _all: number
  }


  export type AikuAvgAggregateInputType = {
    presetId?: true
  }

  export type AikuSumAggregateInputType = {
    presetId?: true
  }

  export type AikuMinAggregateInputType = {
    createdAt?: true
    lineOne?: true
    lineTwo?: true
    lineThree?: true
    presetId?: true
    userId?: true
    sdUrl?: true
    id?: true
  }

  export type AikuMaxAggregateInputType = {
    createdAt?: true
    lineOne?: true
    lineTwo?: true
    lineThree?: true
    presetId?: true
    userId?: true
    sdUrl?: true
    id?: true
  }

  export type AikuCountAggregateInputType = {
    createdAt?: true
    lineOne?: true
    lineTwo?: true
    lineThree?: true
    presetId?: true
    userId?: true
    sdUrl?: true
    id?: true
    _all?: true
  }

  export type AikuAggregateArgs = {
    /**
     * Filter which aiku to aggregate.
     * 
    **/
    where?: aikuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aikus to fetch.
     * 
    **/
    orderBy?: Enumerable<aikuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: aikuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aikus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aikus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aikus
    **/
    _count?: true | AikuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AikuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AikuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AikuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AikuMaxAggregateInputType
  }

  export type GetAikuAggregateType<T extends AikuAggregateArgs> = {
        [P in keyof T & keyof AggregateAiku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiku[P]>
      : GetScalarType<T[P], AggregateAiku[P]>
  }




  export type AikuGroupByArgs = {
    where?: aikuWhereInput
    orderBy?: Enumerable<aikuOrderByWithAggregationInput>
    by: Array<AikuScalarFieldEnum>
    having?: aikuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AikuCountAggregateInputType | true
    _avg?: AikuAvgAggregateInputType
    _sum?: AikuSumAggregateInputType
    _min?: AikuMinAggregateInputType
    _max?: AikuMaxAggregateInputType
  }


  export type AikuGroupByOutputType = {
    createdAt: Date
    lineOne: string
    lineTwo: string
    lineThree: string
    presetId: number | null
    userId: string
    sdUrl: string
    id: string
    _count: AikuCountAggregateOutputType | null
    _avg: AikuAvgAggregateOutputType | null
    _sum: AikuSumAggregateOutputType | null
    _min: AikuMinAggregateOutputType | null
    _max: AikuMaxAggregateOutputType | null
  }

  type GetAikuGroupByPayload<T extends AikuGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AikuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AikuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AikuGroupByOutputType[P]>
            : GetScalarType<T[P], AikuGroupByOutputType[P]>
        }
      >
    >


  export type aikuSelect = {
    createdAt?: boolean
    lineOne?: boolean
    lineTwo?: boolean
    lineThree?: boolean
    presetId?: boolean
    userId?: boolean
    sdUrl?: boolean
    id?: boolean
    preset?: boolean | presetArgs
    aikuCollectionMap?: boolean | aikuCollectionMapFindManyArgs
    _count?: boolean | AikuCountOutputTypeArgs
  }


  export type aikuInclude = {
    preset?: boolean | presetArgs
    aikuCollectionMap?: boolean | aikuCollectionMapFindManyArgs
    _count?: boolean | AikuCountOutputTypeArgs
  } 

  export type aikuGetPayload<S extends boolean | null | undefined | aikuArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? aiku :
    S extends undefined ? never :
    S extends { include: any } & (aikuArgs | aikuFindManyArgs)
    ? aiku  & {
    [P in TrueKeys<S['include']>]:
        P extends 'preset' ? presetGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends 'aikuCollectionMap' ? Array < aikuCollectionMapGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? AikuCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (aikuArgs | aikuFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'preset' ? presetGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'aikuCollectionMap' ? Array < aikuCollectionMapGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? AikuCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof aiku ? aiku[P] : never
  } 
      : aiku


  type aikuCountArgs = Merge<
    Omit<aikuFindManyArgs, 'select' | 'include'> & {
      select?: AikuCountAggregateInputType | true
    }
  >

  export interface aikuDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Aiku that matches the filter.
     * @param {aikuFindUniqueArgs} args - Arguments to find a Aiku
     * @example
     * // Get one Aiku
     * const aiku = await prisma.aiku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends aikuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, aikuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'aiku'> extends True ? Prisma__aikuClient<aikuGetPayload<T>> : Prisma__aikuClient<aikuGetPayload<T> | null, null>

    /**
     * Find the first Aiku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aikuFindFirstArgs} args - Arguments to find a Aiku
     * @example
     * // Get one Aiku
     * const aiku = await prisma.aiku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends aikuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, aikuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'aiku'> extends True ? Prisma__aikuClient<aikuGetPayload<T>> : Prisma__aikuClient<aikuGetPayload<T> | null, null>

    /**
     * Find zero or more Aikus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aikuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aikus
     * const aikus = await prisma.aiku.findMany()
     * 
     * // Get first 10 Aikus
     * const aikus = await prisma.aiku.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const aikuWithCreatedAtOnly = await prisma.aiku.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends aikuFindManyArgs>(
      args?: SelectSubset<T, aikuFindManyArgs>
    ): PrismaPromise<Array<aikuGetPayload<T>>>

    /**
     * Create a Aiku.
     * @param {aikuCreateArgs} args - Arguments to create a Aiku.
     * @example
     * // Create one Aiku
     * const Aiku = await prisma.aiku.create({
     *   data: {
     *     // ... data to create a Aiku
     *   }
     * })
     * 
    **/
    create<T extends aikuCreateArgs>(
      args: SelectSubset<T, aikuCreateArgs>
    ): Prisma__aikuClient<aikuGetPayload<T>>

    /**
     * Create many Aikus.
     *     @param {aikuCreateManyArgs} args - Arguments to create many Aikus.
     *     @example
     *     // Create many Aikus
     *     const aiku = await prisma.aiku.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends aikuCreateManyArgs>(
      args?: SelectSubset<T, aikuCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Aiku.
     * @param {aikuDeleteArgs} args - Arguments to delete one Aiku.
     * @example
     * // Delete one Aiku
     * const Aiku = await prisma.aiku.delete({
     *   where: {
     *     // ... filter to delete one Aiku
     *   }
     * })
     * 
    **/
    delete<T extends aikuDeleteArgs>(
      args: SelectSubset<T, aikuDeleteArgs>
    ): Prisma__aikuClient<aikuGetPayload<T>>

    /**
     * Update one Aiku.
     * @param {aikuUpdateArgs} args - Arguments to update one Aiku.
     * @example
     * // Update one Aiku
     * const aiku = await prisma.aiku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends aikuUpdateArgs>(
      args: SelectSubset<T, aikuUpdateArgs>
    ): Prisma__aikuClient<aikuGetPayload<T>>

    /**
     * Delete zero or more Aikus.
     * @param {aikuDeleteManyArgs} args - Arguments to filter Aikus to delete.
     * @example
     * // Delete a few Aikus
     * const { count } = await prisma.aiku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends aikuDeleteManyArgs>(
      args?: SelectSubset<T, aikuDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aikus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aikuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aikus
     * const aiku = await prisma.aiku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends aikuUpdateManyArgs>(
      args: SelectSubset<T, aikuUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Aiku.
     * @param {aikuUpsertArgs} args - Arguments to update or create a Aiku.
     * @example
     * // Update or create a Aiku
     * const aiku = await prisma.aiku.upsert({
     *   create: {
     *     // ... data to create a Aiku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aiku we want to update
     *   }
     * })
    **/
    upsert<T extends aikuUpsertArgs>(
      args: SelectSubset<T, aikuUpsertArgs>
    ): Prisma__aikuClient<aikuGetPayload<T>>

    /**
     * Find one Aiku that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {aikuFindUniqueOrThrowArgs} args - Arguments to find a Aiku
     * @example
     * // Get one Aiku
     * const aiku = await prisma.aiku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends aikuFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, aikuFindUniqueOrThrowArgs>
    ): Prisma__aikuClient<aikuGetPayload<T>>

    /**
     * Find the first Aiku that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aikuFindFirstOrThrowArgs} args - Arguments to find a Aiku
     * @example
     * // Get one Aiku
     * const aiku = await prisma.aiku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends aikuFindFirstOrThrowArgs>(
      args?: SelectSubset<T, aikuFindFirstOrThrowArgs>
    ): Prisma__aikuClient<aikuGetPayload<T>>

    /**
     * Count the number of Aikus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aikuCountArgs} args - Arguments to filter Aikus to count.
     * @example
     * // Count the number of Aikus
     * const count = await prisma.aiku.count({
     *   where: {
     *     // ... the filter for the Aikus we want to count
     *   }
     * })
    **/
    count<T extends aikuCountArgs>(
      args?: Subset<T, aikuCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AikuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aiku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AikuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AikuAggregateArgs>(args: Subset<T, AikuAggregateArgs>): PrismaPromise<GetAikuAggregateType<T>>

    /**
     * Group by Aiku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AikuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AikuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AikuGroupByArgs['orderBy'] }
        : { orderBy?: AikuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AikuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAikuGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for aiku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__aikuClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    preset<T extends presetArgs= {}>(args?: Subset<T, presetArgs>): Prisma__presetClient<presetGetPayload<T> | Null>;

    aikuCollectionMap<T extends aikuCollectionMapFindManyArgs= {}>(args?: Subset<T, aikuCollectionMapFindManyArgs>): PrismaPromise<Array<aikuCollectionMapGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * aiku base type for findUnique actions
   */
  export type aikuFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the aiku
     * 
    **/
    select?: aikuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuInclude | null
    /**
     * Filter, which aiku to fetch.
     * 
    **/
    where: aikuWhereUniqueInput
  }

  /**
   * aiku: findUnique
   */
  export interface aikuFindUniqueArgs extends aikuFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * aiku base type for findFirst actions
   */
  export type aikuFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the aiku
     * 
    **/
    select?: aikuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuInclude | null
    /**
     * Filter, which aiku to fetch.
     * 
    **/
    where?: aikuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aikus to fetch.
     * 
    **/
    orderBy?: Enumerable<aikuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aikus.
     * 
    **/
    cursor?: aikuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aikus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aikus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aikus.
     * 
    **/
    distinct?: Enumerable<AikuScalarFieldEnum>
  }

  /**
   * aiku: findFirst
   */
  export interface aikuFindFirstArgs extends aikuFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * aiku findMany
   */
  export type aikuFindManyArgs = {
    /**
     * Select specific fields to fetch from the aiku
     * 
    **/
    select?: aikuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuInclude | null
    /**
     * Filter, which aikus to fetch.
     * 
    **/
    where?: aikuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aikus to fetch.
     * 
    **/
    orderBy?: Enumerable<aikuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aikus.
     * 
    **/
    cursor?: aikuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aikus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aikus.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AikuScalarFieldEnum>
  }


  /**
   * aiku create
   */
  export type aikuCreateArgs = {
    /**
     * Select specific fields to fetch from the aiku
     * 
    **/
    select?: aikuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuInclude | null
    /**
     * The data needed to create a aiku.
     * 
    **/
    data: XOR<aikuCreateInput, aikuUncheckedCreateInput>
  }


  /**
   * aiku createMany
   */
  export type aikuCreateManyArgs = {
    /**
     * The data used to create many aikus.
     * 
    **/
    data: Enumerable<aikuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * aiku update
   */
  export type aikuUpdateArgs = {
    /**
     * Select specific fields to fetch from the aiku
     * 
    **/
    select?: aikuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuInclude | null
    /**
     * The data needed to update a aiku.
     * 
    **/
    data: XOR<aikuUpdateInput, aikuUncheckedUpdateInput>
    /**
     * Choose, which aiku to update.
     * 
    **/
    where: aikuWhereUniqueInput
  }


  /**
   * aiku updateMany
   */
  export type aikuUpdateManyArgs = {
    /**
     * The data used to update aikus.
     * 
    **/
    data: XOR<aikuUpdateManyMutationInput, aikuUncheckedUpdateManyInput>
    /**
     * Filter which aikus to update
     * 
    **/
    where?: aikuWhereInput
  }


  /**
   * aiku upsert
   */
  export type aikuUpsertArgs = {
    /**
     * Select specific fields to fetch from the aiku
     * 
    **/
    select?: aikuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuInclude | null
    /**
     * The filter to search for the aiku to update in case it exists.
     * 
    **/
    where: aikuWhereUniqueInput
    /**
     * In case the aiku found by the `where` argument doesn't exist, create a new aiku with this data.
     * 
    **/
    create: XOR<aikuCreateInput, aikuUncheckedCreateInput>
    /**
     * In case the aiku was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<aikuUpdateInput, aikuUncheckedUpdateInput>
  }


  /**
   * aiku delete
   */
  export type aikuDeleteArgs = {
    /**
     * Select specific fields to fetch from the aiku
     * 
    **/
    select?: aikuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuInclude | null
    /**
     * Filter which aiku to delete.
     * 
    **/
    where: aikuWhereUniqueInput
  }


  /**
   * aiku deleteMany
   */
  export type aikuDeleteManyArgs = {
    /**
     * Filter which aikus to delete
     * 
    **/
    where?: aikuWhereInput
  }


  /**
   * aiku: findUniqueOrThrow
   */
  export type aikuFindUniqueOrThrowArgs = aikuFindUniqueArgsBase
      

  /**
   * aiku: findFirstOrThrow
   */
  export type aikuFindFirstOrThrowArgs = aikuFindFirstArgsBase
      

  /**
   * aiku without action
   */
  export type aikuArgs = {
    /**
     * Select specific fields to fetch from the aiku
     * 
    **/
    select?: aikuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuInclude | null
  }



  /**
   * Model preset
   */


  export type AggregatePreset = {
    _count: PresetCountAggregateOutputType | null
    _avg: PresetAvgAggregateOutputType | null
    _sum: PresetSumAggregateOutputType | null
    _min: PresetMinAggregateOutputType | null
    _max: PresetMaxAggregateOutputType | null
  }

  export type PresetAvgAggregateOutputType = {
    id: number | null
  }

  export type PresetSumAggregateOutputType = {
    id: number | null
  }

  export type PresetMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: string | null
    isDefault: boolean | null
  }

  export type PresetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: string | null
    isDefault: boolean | null
  }

  export type PresetCountAggregateOutputType = {
    id: number
    name: number
    value: number
    isDefault: number
    _all: number
  }


  export type PresetAvgAggregateInputType = {
    id?: true
  }

  export type PresetSumAggregateInputType = {
    id?: true
  }

  export type PresetMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    isDefault?: true
  }

  export type PresetMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    isDefault?: true
  }

  export type PresetCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    isDefault?: true
    _all?: true
  }

  export type PresetAggregateArgs = {
    /**
     * Filter which preset to aggregate.
     * 
    **/
    where?: presetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presets to fetch.
     * 
    **/
    orderBy?: Enumerable<presetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: presetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned presets
    **/
    _count?: true | PresetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresetMaxAggregateInputType
  }

  export type GetPresetAggregateType<T extends PresetAggregateArgs> = {
        [P in keyof T & keyof AggregatePreset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreset[P]>
      : GetScalarType<T[P], AggregatePreset[P]>
  }




  export type PresetGroupByArgs = {
    where?: presetWhereInput
    orderBy?: Enumerable<presetOrderByWithAggregationInput>
    by: Array<PresetScalarFieldEnum>
    having?: presetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresetCountAggregateInputType | true
    _avg?: PresetAvgAggregateInputType
    _sum?: PresetSumAggregateInputType
    _min?: PresetMinAggregateInputType
    _max?: PresetMaxAggregateInputType
  }


  export type PresetGroupByOutputType = {
    id: number
    name: string
    value: string | null
    isDefault: boolean
    _count: PresetCountAggregateOutputType | null
    _avg: PresetAvgAggregateOutputType | null
    _sum: PresetSumAggregateOutputType | null
    _min: PresetMinAggregateOutputType | null
    _max: PresetMaxAggregateOutputType | null
  }

  type GetPresetGroupByPayload<T extends PresetGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PresetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresetGroupByOutputType[P]>
            : GetScalarType<T[P], PresetGroupByOutputType[P]>
        }
      >
    >


  export type presetSelect = {
    id?: boolean
    name?: boolean
    value?: boolean
    isDefault?: boolean
    aiku?: boolean | aikuFindManyArgs
    _count?: boolean | PresetCountOutputTypeArgs
  }


  export type presetInclude = {
    aiku?: boolean | aikuFindManyArgs
    _count?: boolean | PresetCountOutputTypeArgs
  } 

  export type presetGetPayload<S extends boolean | null | undefined | presetArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? preset :
    S extends undefined ? never :
    S extends { include: any } & (presetArgs | presetFindManyArgs)
    ? preset  & {
    [P in TrueKeys<S['include']>]:
        P extends 'aiku' ? Array < aikuGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? PresetCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (presetArgs | presetFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'aiku' ? Array < aikuGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? PresetCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof preset ? preset[P] : never
  } 
      : preset


  type presetCountArgs = Merge<
    Omit<presetFindManyArgs, 'select' | 'include'> & {
      select?: PresetCountAggregateInputType | true
    }
  >

  export interface presetDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Preset that matches the filter.
     * @param {presetFindUniqueArgs} args - Arguments to find a Preset
     * @example
     * // Get one Preset
     * const preset = await prisma.preset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends presetFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, presetFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'preset'> extends True ? Prisma__presetClient<presetGetPayload<T>> : Prisma__presetClient<presetGetPayload<T> | null, null>

    /**
     * Find the first Preset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presetFindFirstArgs} args - Arguments to find a Preset
     * @example
     * // Get one Preset
     * const preset = await prisma.preset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends presetFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, presetFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'preset'> extends True ? Prisma__presetClient<presetGetPayload<T>> : Prisma__presetClient<presetGetPayload<T> | null, null>

    /**
     * Find zero or more Presets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presets
     * const presets = await prisma.preset.findMany()
     * 
     * // Get first 10 Presets
     * const presets = await prisma.preset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presetWithIdOnly = await prisma.preset.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends presetFindManyArgs>(
      args?: SelectSubset<T, presetFindManyArgs>
    ): PrismaPromise<Array<presetGetPayload<T>>>

    /**
     * Create a Preset.
     * @param {presetCreateArgs} args - Arguments to create a Preset.
     * @example
     * // Create one Preset
     * const Preset = await prisma.preset.create({
     *   data: {
     *     // ... data to create a Preset
     *   }
     * })
     * 
    **/
    create<T extends presetCreateArgs>(
      args: SelectSubset<T, presetCreateArgs>
    ): Prisma__presetClient<presetGetPayload<T>>

    /**
     * Create many Presets.
     *     @param {presetCreateManyArgs} args - Arguments to create many Presets.
     *     @example
     *     // Create many Presets
     *     const preset = await prisma.preset.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends presetCreateManyArgs>(
      args?: SelectSubset<T, presetCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Preset.
     * @param {presetDeleteArgs} args - Arguments to delete one Preset.
     * @example
     * // Delete one Preset
     * const Preset = await prisma.preset.delete({
     *   where: {
     *     // ... filter to delete one Preset
     *   }
     * })
     * 
    **/
    delete<T extends presetDeleteArgs>(
      args: SelectSubset<T, presetDeleteArgs>
    ): Prisma__presetClient<presetGetPayload<T>>

    /**
     * Update one Preset.
     * @param {presetUpdateArgs} args - Arguments to update one Preset.
     * @example
     * // Update one Preset
     * const preset = await prisma.preset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends presetUpdateArgs>(
      args: SelectSubset<T, presetUpdateArgs>
    ): Prisma__presetClient<presetGetPayload<T>>

    /**
     * Delete zero or more Presets.
     * @param {presetDeleteManyArgs} args - Arguments to filter Presets to delete.
     * @example
     * // Delete a few Presets
     * const { count } = await prisma.preset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends presetDeleteManyArgs>(
      args?: SelectSubset<T, presetDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presets
     * const preset = await prisma.preset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends presetUpdateManyArgs>(
      args: SelectSubset<T, presetUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Preset.
     * @param {presetUpsertArgs} args - Arguments to update or create a Preset.
     * @example
     * // Update or create a Preset
     * const preset = await prisma.preset.upsert({
     *   create: {
     *     // ... data to create a Preset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preset we want to update
     *   }
     * })
    **/
    upsert<T extends presetUpsertArgs>(
      args: SelectSubset<T, presetUpsertArgs>
    ): Prisma__presetClient<presetGetPayload<T>>

    /**
     * Find one Preset that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {presetFindUniqueOrThrowArgs} args - Arguments to find a Preset
     * @example
     * // Get one Preset
     * const preset = await prisma.preset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends presetFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, presetFindUniqueOrThrowArgs>
    ): Prisma__presetClient<presetGetPayload<T>>

    /**
     * Find the first Preset that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presetFindFirstOrThrowArgs} args - Arguments to find a Preset
     * @example
     * // Get one Preset
     * const preset = await prisma.preset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends presetFindFirstOrThrowArgs>(
      args?: SelectSubset<T, presetFindFirstOrThrowArgs>
    ): Prisma__presetClient<presetGetPayload<T>>

    /**
     * Count the number of Presets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presetCountArgs} args - Arguments to filter Presets to count.
     * @example
     * // Count the number of Presets
     * const count = await prisma.preset.count({
     *   where: {
     *     // ... the filter for the Presets we want to count
     *   }
     * })
    **/
    count<T extends presetCountArgs>(
      args?: Subset<T, presetCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PresetAggregateArgs>(args: Subset<T, PresetAggregateArgs>): PrismaPromise<GetPresetAggregateType<T>>

    /**
     * Group by Preset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PresetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresetGroupByArgs['orderBy'] }
        : { orderBy?: PresetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PresetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresetGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for preset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__presetClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    aiku<T extends aikuFindManyArgs= {}>(args?: Subset<T, aikuFindManyArgs>): PrismaPromise<Array<aikuGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * preset base type for findUnique actions
   */
  export type presetFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the preset
     * 
    **/
    select?: presetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: presetInclude | null
    /**
     * Filter, which preset to fetch.
     * 
    **/
    where: presetWhereUniqueInput
  }

  /**
   * preset: findUnique
   */
  export interface presetFindUniqueArgs extends presetFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * preset base type for findFirst actions
   */
  export type presetFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the preset
     * 
    **/
    select?: presetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: presetInclude | null
    /**
     * Filter, which preset to fetch.
     * 
    **/
    where?: presetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presets to fetch.
     * 
    **/
    orderBy?: Enumerable<presetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for presets.
     * 
    **/
    cursor?: presetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of presets.
     * 
    **/
    distinct?: Enumerable<PresetScalarFieldEnum>
  }

  /**
   * preset: findFirst
   */
  export interface presetFindFirstArgs extends presetFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * preset findMany
   */
  export type presetFindManyArgs = {
    /**
     * Select specific fields to fetch from the preset
     * 
    **/
    select?: presetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: presetInclude | null
    /**
     * Filter, which presets to fetch.
     * 
    **/
    where?: presetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presets to fetch.
     * 
    **/
    orderBy?: Enumerable<presetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing presets.
     * 
    **/
    cursor?: presetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PresetScalarFieldEnum>
  }


  /**
   * preset create
   */
  export type presetCreateArgs = {
    /**
     * Select specific fields to fetch from the preset
     * 
    **/
    select?: presetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: presetInclude | null
    /**
     * The data needed to create a preset.
     * 
    **/
    data: XOR<presetCreateInput, presetUncheckedCreateInput>
  }


  /**
   * preset createMany
   */
  export type presetCreateManyArgs = {
    /**
     * The data used to create many presets.
     * 
    **/
    data: Enumerable<presetCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * preset update
   */
  export type presetUpdateArgs = {
    /**
     * Select specific fields to fetch from the preset
     * 
    **/
    select?: presetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: presetInclude | null
    /**
     * The data needed to update a preset.
     * 
    **/
    data: XOR<presetUpdateInput, presetUncheckedUpdateInput>
    /**
     * Choose, which preset to update.
     * 
    **/
    where: presetWhereUniqueInput
  }


  /**
   * preset updateMany
   */
  export type presetUpdateManyArgs = {
    /**
     * The data used to update presets.
     * 
    **/
    data: XOR<presetUpdateManyMutationInput, presetUncheckedUpdateManyInput>
    /**
     * Filter which presets to update
     * 
    **/
    where?: presetWhereInput
  }


  /**
   * preset upsert
   */
  export type presetUpsertArgs = {
    /**
     * Select specific fields to fetch from the preset
     * 
    **/
    select?: presetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: presetInclude | null
    /**
     * The filter to search for the preset to update in case it exists.
     * 
    **/
    where: presetWhereUniqueInput
    /**
     * In case the preset found by the `where` argument doesn't exist, create a new preset with this data.
     * 
    **/
    create: XOR<presetCreateInput, presetUncheckedCreateInput>
    /**
     * In case the preset was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<presetUpdateInput, presetUncheckedUpdateInput>
  }


  /**
   * preset delete
   */
  export type presetDeleteArgs = {
    /**
     * Select specific fields to fetch from the preset
     * 
    **/
    select?: presetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: presetInclude | null
    /**
     * Filter which preset to delete.
     * 
    **/
    where: presetWhereUniqueInput
  }


  /**
   * preset deleteMany
   */
  export type presetDeleteManyArgs = {
    /**
     * Filter which presets to delete
     * 
    **/
    where?: presetWhereInput
  }


  /**
   * preset: findUniqueOrThrow
   */
  export type presetFindUniqueOrThrowArgs = presetFindUniqueArgsBase
      

  /**
   * preset: findFirstOrThrow
   */
  export type presetFindFirstOrThrowArgs = presetFindFirstArgsBase
      

  /**
   * preset without action
   */
  export type presetArgs = {
    /**
     * Select specific fields to fetch from the preset
     * 
    **/
    select?: presetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: presetInclude | null
  }



  /**
   * Model aikuCollectionMap
   */


  export type AggregateAikuCollectionMap = {
    _count: AikuCollectionMapCountAggregateOutputType | null
    _min: AikuCollectionMapMinAggregateOutputType | null
    _max: AikuCollectionMapMaxAggregateOutputType | null
  }

  export type AikuCollectionMapMinAggregateOutputType = {
    id: string | null
    aikuId: string | null
    collectionId: string | null
  }

  export type AikuCollectionMapMaxAggregateOutputType = {
    id: string | null
    aikuId: string | null
    collectionId: string | null
  }

  export type AikuCollectionMapCountAggregateOutputType = {
    id: number
    aikuId: number
    collectionId: number
    _all: number
  }


  export type AikuCollectionMapMinAggregateInputType = {
    id?: true
    aikuId?: true
    collectionId?: true
  }

  export type AikuCollectionMapMaxAggregateInputType = {
    id?: true
    aikuId?: true
    collectionId?: true
  }

  export type AikuCollectionMapCountAggregateInputType = {
    id?: true
    aikuId?: true
    collectionId?: true
    _all?: true
  }

  export type AikuCollectionMapAggregateArgs = {
    /**
     * Filter which aikuCollectionMap to aggregate.
     * 
    **/
    where?: aikuCollectionMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aikuCollectionMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<aikuCollectionMapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: aikuCollectionMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aikuCollectionMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aikuCollectionMaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aikuCollectionMaps
    **/
    _count?: true | AikuCollectionMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AikuCollectionMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AikuCollectionMapMaxAggregateInputType
  }

  export type GetAikuCollectionMapAggregateType<T extends AikuCollectionMapAggregateArgs> = {
        [P in keyof T & keyof AggregateAikuCollectionMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAikuCollectionMap[P]>
      : GetScalarType<T[P], AggregateAikuCollectionMap[P]>
  }




  export type AikuCollectionMapGroupByArgs = {
    where?: aikuCollectionMapWhereInput
    orderBy?: Enumerable<aikuCollectionMapOrderByWithAggregationInput>
    by: Array<AikuCollectionMapScalarFieldEnum>
    having?: aikuCollectionMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AikuCollectionMapCountAggregateInputType | true
    _min?: AikuCollectionMapMinAggregateInputType
    _max?: AikuCollectionMapMaxAggregateInputType
  }


  export type AikuCollectionMapGroupByOutputType = {
    id: string
    aikuId: string
    collectionId: string
    _count: AikuCollectionMapCountAggregateOutputType | null
    _min: AikuCollectionMapMinAggregateOutputType | null
    _max: AikuCollectionMapMaxAggregateOutputType | null
  }

  type GetAikuCollectionMapGroupByPayload<T extends AikuCollectionMapGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AikuCollectionMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AikuCollectionMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AikuCollectionMapGroupByOutputType[P]>
            : GetScalarType<T[P], AikuCollectionMapGroupByOutputType[P]>
        }
      >
    >


  export type aikuCollectionMapSelect = {
    id?: boolean
    aikuId?: boolean
    collectionId?: boolean
    aiku?: boolean | aikuArgs
    collection?: boolean | collectionArgs
  }


  export type aikuCollectionMapInclude = {
    aiku?: boolean | aikuArgs
    collection?: boolean | collectionArgs
  } 

  export type aikuCollectionMapGetPayload<S extends boolean | null | undefined | aikuCollectionMapArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? aikuCollectionMap :
    S extends undefined ? never :
    S extends { include: any } & (aikuCollectionMapArgs | aikuCollectionMapFindManyArgs)
    ? aikuCollectionMap  & {
    [P in TrueKeys<S['include']>]:
        P extends 'aiku' ? aikuGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'collection' ? collectionGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (aikuCollectionMapArgs | aikuCollectionMapFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'aiku' ? aikuGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'collection' ? collectionGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof aikuCollectionMap ? aikuCollectionMap[P] : never
  } 
      : aikuCollectionMap


  type aikuCollectionMapCountArgs = Merge<
    Omit<aikuCollectionMapFindManyArgs, 'select' | 'include'> & {
      select?: AikuCollectionMapCountAggregateInputType | true
    }
  >

  export interface aikuCollectionMapDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one AikuCollectionMap that matches the filter.
     * @param {aikuCollectionMapFindUniqueArgs} args - Arguments to find a AikuCollectionMap
     * @example
     * // Get one AikuCollectionMap
     * const aikuCollectionMap = await prisma.aikuCollectionMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends aikuCollectionMapFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, aikuCollectionMapFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'aikuCollectionMap'> extends True ? Prisma__aikuCollectionMapClient<aikuCollectionMapGetPayload<T>> : Prisma__aikuCollectionMapClient<aikuCollectionMapGetPayload<T> | null, null>

    /**
     * Find the first AikuCollectionMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aikuCollectionMapFindFirstArgs} args - Arguments to find a AikuCollectionMap
     * @example
     * // Get one AikuCollectionMap
     * const aikuCollectionMap = await prisma.aikuCollectionMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends aikuCollectionMapFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, aikuCollectionMapFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'aikuCollectionMap'> extends True ? Prisma__aikuCollectionMapClient<aikuCollectionMapGetPayload<T>> : Prisma__aikuCollectionMapClient<aikuCollectionMapGetPayload<T> | null, null>

    /**
     * Find zero or more AikuCollectionMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aikuCollectionMapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AikuCollectionMaps
     * const aikuCollectionMaps = await prisma.aikuCollectionMap.findMany()
     * 
     * // Get first 10 AikuCollectionMaps
     * const aikuCollectionMaps = await prisma.aikuCollectionMap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aikuCollectionMapWithIdOnly = await prisma.aikuCollectionMap.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends aikuCollectionMapFindManyArgs>(
      args?: SelectSubset<T, aikuCollectionMapFindManyArgs>
    ): PrismaPromise<Array<aikuCollectionMapGetPayload<T>>>

    /**
     * Create a AikuCollectionMap.
     * @param {aikuCollectionMapCreateArgs} args - Arguments to create a AikuCollectionMap.
     * @example
     * // Create one AikuCollectionMap
     * const AikuCollectionMap = await prisma.aikuCollectionMap.create({
     *   data: {
     *     // ... data to create a AikuCollectionMap
     *   }
     * })
     * 
    **/
    create<T extends aikuCollectionMapCreateArgs>(
      args: SelectSubset<T, aikuCollectionMapCreateArgs>
    ): Prisma__aikuCollectionMapClient<aikuCollectionMapGetPayload<T>>

    /**
     * Create many AikuCollectionMaps.
     *     @param {aikuCollectionMapCreateManyArgs} args - Arguments to create many AikuCollectionMaps.
     *     @example
     *     // Create many AikuCollectionMaps
     *     const aikuCollectionMap = await prisma.aikuCollectionMap.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends aikuCollectionMapCreateManyArgs>(
      args?: SelectSubset<T, aikuCollectionMapCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AikuCollectionMap.
     * @param {aikuCollectionMapDeleteArgs} args - Arguments to delete one AikuCollectionMap.
     * @example
     * // Delete one AikuCollectionMap
     * const AikuCollectionMap = await prisma.aikuCollectionMap.delete({
     *   where: {
     *     // ... filter to delete one AikuCollectionMap
     *   }
     * })
     * 
    **/
    delete<T extends aikuCollectionMapDeleteArgs>(
      args: SelectSubset<T, aikuCollectionMapDeleteArgs>
    ): Prisma__aikuCollectionMapClient<aikuCollectionMapGetPayload<T>>

    /**
     * Update one AikuCollectionMap.
     * @param {aikuCollectionMapUpdateArgs} args - Arguments to update one AikuCollectionMap.
     * @example
     * // Update one AikuCollectionMap
     * const aikuCollectionMap = await prisma.aikuCollectionMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends aikuCollectionMapUpdateArgs>(
      args: SelectSubset<T, aikuCollectionMapUpdateArgs>
    ): Prisma__aikuCollectionMapClient<aikuCollectionMapGetPayload<T>>

    /**
     * Delete zero or more AikuCollectionMaps.
     * @param {aikuCollectionMapDeleteManyArgs} args - Arguments to filter AikuCollectionMaps to delete.
     * @example
     * // Delete a few AikuCollectionMaps
     * const { count } = await prisma.aikuCollectionMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends aikuCollectionMapDeleteManyArgs>(
      args?: SelectSubset<T, aikuCollectionMapDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AikuCollectionMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aikuCollectionMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AikuCollectionMaps
     * const aikuCollectionMap = await prisma.aikuCollectionMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends aikuCollectionMapUpdateManyArgs>(
      args: SelectSubset<T, aikuCollectionMapUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AikuCollectionMap.
     * @param {aikuCollectionMapUpsertArgs} args - Arguments to update or create a AikuCollectionMap.
     * @example
     * // Update or create a AikuCollectionMap
     * const aikuCollectionMap = await prisma.aikuCollectionMap.upsert({
     *   create: {
     *     // ... data to create a AikuCollectionMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AikuCollectionMap we want to update
     *   }
     * })
    **/
    upsert<T extends aikuCollectionMapUpsertArgs>(
      args: SelectSubset<T, aikuCollectionMapUpsertArgs>
    ): Prisma__aikuCollectionMapClient<aikuCollectionMapGetPayload<T>>

    /**
     * Find one AikuCollectionMap that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {aikuCollectionMapFindUniqueOrThrowArgs} args - Arguments to find a AikuCollectionMap
     * @example
     * // Get one AikuCollectionMap
     * const aikuCollectionMap = await prisma.aikuCollectionMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends aikuCollectionMapFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, aikuCollectionMapFindUniqueOrThrowArgs>
    ): Prisma__aikuCollectionMapClient<aikuCollectionMapGetPayload<T>>

    /**
     * Find the first AikuCollectionMap that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aikuCollectionMapFindFirstOrThrowArgs} args - Arguments to find a AikuCollectionMap
     * @example
     * // Get one AikuCollectionMap
     * const aikuCollectionMap = await prisma.aikuCollectionMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends aikuCollectionMapFindFirstOrThrowArgs>(
      args?: SelectSubset<T, aikuCollectionMapFindFirstOrThrowArgs>
    ): Prisma__aikuCollectionMapClient<aikuCollectionMapGetPayload<T>>

    /**
     * Count the number of AikuCollectionMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aikuCollectionMapCountArgs} args - Arguments to filter AikuCollectionMaps to count.
     * @example
     * // Count the number of AikuCollectionMaps
     * const count = await prisma.aikuCollectionMap.count({
     *   where: {
     *     // ... the filter for the AikuCollectionMaps we want to count
     *   }
     * })
    **/
    count<T extends aikuCollectionMapCountArgs>(
      args?: Subset<T, aikuCollectionMapCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AikuCollectionMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AikuCollectionMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AikuCollectionMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AikuCollectionMapAggregateArgs>(args: Subset<T, AikuCollectionMapAggregateArgs>): PrismaPromise<GetAikuCollectionMapAggregateType<T>>

    /**
     * Group by AikuCollectionMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AikuCollectionMapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AikuCollectionMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AikuCollectionMapGroupByArgs['orderBy'] }
        : { orderBy?: AikuCollectionMapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AikuCollectionMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAikuCollectionMapGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for aikuCollectionMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__aikuCollectionMapClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    aiku<T extends aikuArgs= {}>(args?: Subset<T, aikuArgs>): Prisma__aikuClient<aikuGetPayload<T> | Null>;

    collection<T extends collectionArgs= {}>(args?: Subset<T, collectionArgs>): Prisma__collectionClient<collectionGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * aikuCollectionMap base type for findUnique actions
   */
  export type aikuCollectionMapFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the aikuCollectionMap
     * 
    **/
    select?: aikuCollectionMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuCollectionMapInclude | null
    /**
     * Filter, which aikuCollectionMap to fetch.
     * 
    **/
    where: aikuCollectionMapWhereUniqueInput
  }

  /**
   * aikuCollectionMap: findUnique
   */
  export interface aikuCollectionMapFindUniqueArgs extends aikuCollectionMapFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * aikuCollectionMap base type for findFirst actions
   */
  export type aikuCollectionMapFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the aikuCollectionMap
     * 
    **/
    select?: aikuCollectionMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuCollectionMapInclude | null
    /**
     * Filter, which aikuCollectionMap to fetch.
     * 
    **/
    where?: aikuCollectionMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aikuCollectionMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<aikuCollectionMapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aikuCollectionMaps.
     * 
    **/
    cursor?: aikuCollectionMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aikuCollectionMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aikuCollectionMaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aikuCollectionMaps.
     * 
    **/
    distinct?: Enumerable<AikuCollectionMapScalarFieldEnum>
  }

  /**
   * aikuCollectionMap: findFirst
   */
  export interface aikuCollectionMapFindFirstArgs extends aikuCollectionMapFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * aikuCollectionMap findMany
   */
  export type aikuCollectionMapFindManyArgs = {
    /**
     * Select specific fields to fetch from the aikuCollectionMap
     * 
    **/
    select?: aikuCollectionMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuCollectionMapInclude | null
    /**
     * Filter, which aikuCollectionMaps to fetch.
     * 
    **/
    where?: aikuCollectionMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aikuCollectionMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<aikuCollectionMapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aikuCollectionMaps.
     * 
    **/
    cursor?: aikuCollectionMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aikuCollectionMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aikuCollectionMaps.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AikuCollectionMapScalarFieldEnum>
  }


  /**
   * aikuCollectionMap create
   */
  export type aikuCollectionMapCreateArgs = {
    /**
     * Select specific fields to fetch from the aikuCollectionMap
     * 
    **/
    select?: aikuCollectionMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuCollectionMapInclude | null
    /**
     * The data needed to create a aikuCollectionMap.
     * 
    **/
    data: XOR<aikuCollectionMapCreateInput, aikuCollectionMapUncheckedCreateInput>
  }


  /**
   * aikuCollectionMap createMany
   */
  export type aikuCollectionMapCreateManyArgs = {
    /**
     * The data used to create many aikuCollectionMaps.
     * 
    **/
    data: Enumerable<aikuCollectionMapCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * aikuCollectionMap update
   */
  export type aikuCollectionMapUpdateArgs = {
    /**
     * Select specific fields to fetch from the aikuCollectionMap
     * 
    **/
    select?: aikuCollectionMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuCollectionMapInclude | null
    /**
     * The data needed to update a aikuCollectionMap.
     * 
    **/
    data: XOR<aikuCollectionMapUpdateInput, aikuCollectionMapUncheckedUpdateInput>
    /**
     * Choose, which aikuCollectionMap to update.
     * 
    **/
    where: aikuCollectionMapWhereUniqueInput
  }


  /**
   * aikuCollectionMap updateMany
   */
  export type aikuCollectionMapUpdateManyArgs = {
    /**
     * The data used to update aikuCollectionMaps.
     * 
    **/
    data: XOR<aikuCollectionMapUpdateManyMutationInput, aikuCollectionMapUncheckedUpdateManyInput>
    /**
     * Filter which aikuCollectionMaps to update
     * 
    **/
    where?: aikuCollectionMapWhereInput
  }


  /**
   * aikuCollectionMap upsert
   */
  export type aikuCollectionMapUpsertArgs = {
    /**
     * Select specific fields to fetch from the aikuCollectionMap
     * 
    **/
    select?: aikuCollectionMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuCollectionMapInclude | null
    /**
     * The filter to search for the aikuCollectionMap to update in case it exists.
     * 
    **/
    where: aikuCollectionMapWhereUniqueInput
    /**
     * In case the aikuCollectionMap found by the `where` argument doesn't exist, create a new aikuCollectionMap with this data.
     * 
    **/
    create: XOR<aikuCollectionMapCreateInput, aikuCollectionMapUncheckedCreateInput>
    /**
     * In case the aikuCollectionMap was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<aikuCollectionMapUpdateInput, aikuCollectionMapUncheckedUpdateInput>
  }


  /**
   * aikuCollectionMap delete
   */
  export type aikuCollectionMapDeleteArgs = {
    /**
     * Select specific fields to fetch from the aikuCollectionMap
     * 
    **/
    select?: aikuCollectionMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuCollectionMapInclude | null
    /**
     * Filter which aikuCollectionMap to delete.
     * 
    **/
    where: aikuCollectionMapWhereUniqueInput
  }


  /**
   * aikuCollectionMap deleteMany
   */
  export type aikuCollectionMapDeleteManyArgs = {
    /**
     * Filter which aikuCollectionMaps to delete
     * 
    **/
    where?: aikuCollectionMapWhereInput
  }


  /**
   * aikuCollectionMap: findUniqueOrThrow
   */
  export type aikuCollectionMapFindUniqueOrThrowArgs = aikuCollectionMapFindUniqueArgsBase
      

  /**
   * aikuCollectionMap: findFirstOrThrow
   */
  export type aikuCollectionMapFindFirstOrThrowArgs = aikuCollectionMapFindFirstArgsBase
      

  /**
   * aikuCollectionMap without action
   */
  export type aikuCollectionMapArgs = {
    /**
     * Select specific fields to fetch from the aikuCollectionMap
     * 
    **/
    select?: aikuCollectionMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: aikuCollectionMapInclude | null
  }



  /**
   * Model collection
   */


  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    name: string | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    name: string | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    name: number
    _all: number
  }


  export type CollectionMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    name?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    name?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    name?: true
    _all?: true
  }

  export type CollectionAggregateArgs = {
    /**
     * Filter which collection to aggregate.
     * 
    **/
    where?: collectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collections to fetch.
     * 
    **/
    orderBy?: Enumerable<collectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: collectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs = {
    where?: collectionWhereInput
    orderBy?: Enumerable<collectionOrderByWithAggregationInput>
    by: Array<CollectionScalarFieldEnum>
    having?: collectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }


  export type CollectionGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    name: string
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type collectionSelect = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    name?: boolean
    aikuCollectionMap?: boolean | aikuCollectionMapFindManyArgs
    _count?: boolean | CollectionCountOutputTypeArgs
  }


  export type collectionInclude = {
    aikuCollectionMap?: boolean | aikuCollectionMapFindManyArgs
    _count?: boolean | CollectionCountOutputTypeArgs
  } 

  export type collectionGetPayload<S extends boolean | null | undefined | collectionArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? collection :
    S extends undefined ? never :
    S extends { include: any } & (collectionArgs | collectionFindManyArgs)
    ? collection  & {
    [P in TrueKeys<S['include']>]:
        P extends 'aikuCollectionMap' ? Array < aikuCollectionMapGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? CollectionCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (collectionArgs | collectionFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'aikuCollectionMap' ? Array < aikuCollectionMapGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? CollectionCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof collection ? collection[P] : never
  } 
      : collection


  type collectionCountArgs = Merge<
    Omit<collectionFindManyArgs, 'select' | 'include'> & {
      select?: CollectionCountAggregateInputType | true
    }
  >

  export interface collectionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Collection that matches the filter.
     * @param {collectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends collectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, collectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'collection'> extends True ? Prisma__collectionClient<collectionGetPayload<T>> : Prisma__collectionClient<collectionGetPayload<T> | null, null>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends collectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, collectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'collection'> extends True ? Prisma__collectionClient<collectionGetPayload<T>> : Prisma__collectionClient<collectionGetPayload<T> | null, null>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends collectionFindManyArgs>(
      args?: SelectSubset<T, collectionFindManyArgs>
    ): PrismaPromise<Array<collectionGetPayload<T>>>

    /**
     * Create a Collection.
     * @param {collectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
    **/
    create<T extends collectionCreateArgs>(
      args: SelectSubset<T, collectionCreateArgs>
    ): Prisma__collectionClient<collectionGetPayload<T>>

    /**
     * Create many Collections.
     *     @param {collectionCreateManyArgs} args - Arguments to create many Collections.
     *     @example
     *     // Create many Collections
     *     const collection = await prisma.collection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends collectionCreateManyArgs>(
      args?: SelectSubset<T, collectionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Collection.
     * @param {collectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
    **/
    delete<T extends collectionDeleteArgs>(
      args: SelectSubset<T, collectionDeleteArgs>
    ): Prisma__collectionClient<collectionGetPayload<T>>

    /**
     * Update one Collection.
     * @param {collectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends collectionUpdateArgs>(
      args: SelectSubset<T, collectionUpdateArgs>
    ): Prisma__collectionClient<collectionGetPayload<T>>

    /**
     * Delete zero or more Collections.
     * @param {collectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends collectionDeleteManyArgs>(
      args?: SelectSubset<T, collectionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends collectionUpdateManyArgs>(
      args: SelectSubset<T, collectionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {collectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
    **/
    upsert<T extends collectionUpsertArgs>(
      args: SelectSubset<T, collectionUpsertArgs>
    ): Prisma__collectionClient<collectionGetPayload<T>>

    /**
     * Find one Collection that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {collectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends collectionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, collectionFindUniqueOrThrowArgs>
    ): Prisma__collectionClient<collectionGetPayload<T>>

    /**
     * Find the first Collection that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends collectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, collectionFindFirstOrThrowArgs>
    ): Prisma__collectionClient<collectionGetPayload<T>>

    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends collectionCountArgs>(
      args?: Subset<T, collectionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__collectionClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    aikuCollectionMap<T extends aikuCollectionMapFindManyArgs= {}>(args?: Subset<T, aikuCollectionMapFindManyArgs>): PrismaPromise<Array<aikuCollectionMapGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * collection base type for findUnique actions
   */
  export type collectionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the collection
     * 
    **/
    select?: collectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: collectionInclude | null
    /**
     * Filter, which collection to fetch.
     * 
    **/
    where: collectionWhereUniqueInput
  }

  /**
   * collection: findUnique
   */
  export interface collectionFindUniqueArgs extends collectionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * collection base type for findFirst actions
   */
  export type collectionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the collection
     * 
    **/
    select?: collectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: collectionInclude | null
    /**
     * Filter, which collection to fetch.
     * 
    **/
    where?: collectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collections to fetch.
     * 
    **/
    orderBy?: Enumerable<collectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for collections.
     * 
    **/
    cursor?: collectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of collections.
     * 
    **/
    distinct?: Enumerable<CollectionScalarFieldEnum>
  }

  /**
   * collection: findFirst
   */
  export interface collectionFindFirstArgs extends collectionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * collection findMany
   */
  export type collectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the collection
     * 
    **/
    select?: collectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: collectionInclude | null
    /**
     * Filter, which collections to fetch.
     * 
    **/
    where?: collectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collections to fetch.
     * 
    **/
    orderBy?: Enumerable<collectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing collections.
     * 
    **/
    cursor?: collectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collections.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CollectionScalarFieldEnum>
  }


  /**
   * collection create
   */
  export type collectionCreateArgs = {
    /**
     * Select specific fields to fetch from the collection
     * 
    **/
    select?: collectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: collectionInclude | null
    /**
     * The data needed to create a collection.
     * 
    **/
    data: XOR<collectionCreateInput, collectionUncheckedCreateInput>
  }


  /**
   * collection createMany
   */
  export type collectionCreateManyArgs = {
    /**
     * The data used to create many collections.
     * 
    **/
    data: Enumerable<collectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * collection update
   */
  export type collectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the collection
     * 
    **/
    select?: collectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: collectionInclude | null
    /**
     * The data needed to update a collection.
     * 
    **/
    data: XOR<collectionUpdateInput, collectionUncheckedUpdateInput>
    /**
     * Choose, which collection to update.
     * 
    **/
    where: collectionWhereUniqueInput
  }


  /**
   * collection updateMany
   */
  export type collectionUpdateManyArgs = {
    /**
     * The data used to update collections.
     * 
    **/
    data: XOR<collectionUpdateManyMutationInput, collectionUncheckedUpdateManyInput>
    /**
     * Filter which collections to update
     * 
    **/
    where?: collectionWhereInput
  }


  /**
   * collection upsert
   */
  export type collectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the collection
     * 
    **/
    select?: collectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: collectionInclude | null
    /**
     * The filter to search for the collection to update in case it exists.
     * 
    **/
    where: collectionWhereUniqueInput
    /**
     * In case the collection found by the `where` argument doesn't exist, create a new collection with this data.
     * 
    **/
    create: XOR<collectionCreateInput, collectionUncheckedCreateInput>
    /**
     * In case the collection was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<collectionUpdateInput, collectionUncheckedUpdateInput>
  }


  /**
   * collection delete
   */
  export type collectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the collection
     * 
    **/
    select?: collectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: collectionInclude | null
    /**
     * Filter which collection to delete.
     * 
    **/
    where: collectionWhereUniqueInput
  }


  /**
   * collection deleteMany
   */
  export type collectionDeleteManyArgs = {
    /**
     * Filter which collections to delete
     * 
    **/
    where?: collectionWhereInput
  }


  /**
   * collection: findUniqueOrThrow
   */
  export type collectionFindUniqueOrThrowArgs = collectionFindUniqueArgsBase
      

  /**
   * collection: findFirstOrThrow
   */
  export type collectionFindFirstOrThrowArgs = collectionFindFirstArgsBase
      

  /**
   * collection without action
   */
  export type collectionArgs = {
    /**
     * Select specific fields to fetch from the collection
     * 
    **/
    select?: collectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: collectionInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AikuCollectionMapScalarFieldEnum: {
    id: 'id',
    aikuId: 'aikuId',
    collectionId: 'collectionId'
  };

  export type AikuCollectionMapScalarFieldEnum = (typeof AikuCollectionMapScalarFieldEnum)[keyof typeof AikuCollectionMapScalarFieldEnum]


  export const AikuScalarFieldEnum: {
    createdAt: 'createdAt',
    lineOne: 'lineOne',
    lineTwo: 'lineTwo',
    lineThree: 'lineThree',
    presetId: 'presetId',
    userId: 'userId',
    sdUrl: 'sdUrl',
    id: 'id'
  };

  export type AikuScalarFieldEnum = (typeof AikuScalarFieldEnum)[keyof typeof AikuScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    name: 'name'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const PresetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    isDefault: 'isDefault'
  };

  export type PresetScalarFieldEnum = (typeof PresetScalarFieldEnum)[keyof typeof PresetScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type aikuWhereInput = {
    AND?: Enumerable<aikuWhereInput>
    OR?: Enumerable<aikuWhereInput>
    NOT?: Enumerable<aikuWhereInput>
    createdAt?: DateTimeFilter | Date | string
    lineOne?: StringFilter | string
    lineTwo?: StringFilter | string
    lineThree?: StringFilter | string
    presetId?: IntNullableFilter | number | null
    userId?: UuidFilter | string
    sdUrl?: StringFilter | string
    id?: UuidFilter | string
    preset?: XOR<PresetRelationFilter, presetWhereInput> | null
    aikuCollectionMap?: AikuCollectionMapListRelationFilter
  }

  export type aikuOrderByWithRelationInput = {
    createdAt?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrder
    lineThree?: SortOrder
    presetId?: SortOrder
    userId?: SortOrder
    sdUrl?: SortOrder
    id?: SortOrder
    preset?: presetOrderByWithRelationInput
    aikuCollectionMap?: aikuCollectionMapOrderByRelationAggregateInput
  }

  export type aikuWhereUniqueInput = {
    id?: string
  }

  export type aikuOrderByWithAggregationInput = {
    createdAt?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrder
    lineThree?: SortOrder
    presetId?: SortOrder
    userId?: SortOrder
    sdUrl?: SortOrder
    id?: SortOrder
    _count?: aikuCountOrderByAggregateInput
    _avg?: aikuAvgOrderByAggregateInput
    _max?: aikuMaxOrderByAggregateInput
    _min?: aikuMinOrderByAggregateInput
    _sum?: aikuSumOrderByAggregateInput
  }

  export type aikuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<aikuScalarWhereWithAggregatesInput>
    OR?: Enumerable<aikuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<aikuScalarWhereWithAggregatesInput>
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    lineOne?: StringWithAggregatesFilter | string
    lineTwo?: StringWithAggregatesFilter | string
    lineThree?: StringWithAggregatesFilter | string
    presetId?: IntNullableWithAggregatesFilter | number | null
    userId?: UuidWithAggregatesFilter | string
    sdUrl?: StringWithAggregatesFilter | string
    id?: UuidWithAggregatesFilter | string
  }

  export type presetWhereInput = {
    AND?: Enumerable<presetWhereInput>
    OR?: Enumerable<presetWhereInput>
    NOT?: Enumerable<presetWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    value?: StringNullableFilter | string | null
    isDefault?: BoolFilter | boolean
    aiku?: AikuListRelationFilter
  }

  export type presetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isDefault?: SortOrder
    aiku?: aikuOrderByRelationAggregateInput
  }

  export type presetWhereUniqueInput = {
    id?: number
  }

  export type presetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isDefault?: SortOrder
    _count?: presetCountOrderByAggregateInput
    _avg?: presetAvgOrderByAggregateInput
    _max?: presetMaxOrderByAggregateInput
    _min?: presetMinOrderByAggregateInput
    _sum?: presetSumOrderByAggregateInput
  }

  export type presetScalarWhereWithAggregatesInput = {
    AND?: Enumerable<presetScalarWhereWithAggregatesInput>
    OR?: Enumerable<presetScalarWhereWithAggregatesInput>
    NOT?: Enumerable<presetScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    value?: StringNullableWithAggregatesFilter | string | null
    isDefault?: BoolWithAggregatesFilter | boolean
  }

  export type aikuCollectionMapWhereInput = {
    AND?: Enumerable<aikuCollectionMapWhereInput>
    OR?: Enumerable<aikuCollectionMapWhereInput>
    NOT?: Enumerable<aikuCollectionMapWhereInput>
    id?: UuidFilter | string
    aikuId?: UuidFilter | string
    collectionId?: UuidFilter | string
    aiku?: XOR<AikuRelationFilter, aikuWhereInput>
    collection?: XOR<CollectionRelationFilter, collectionWhereInput>
  }

  export type aikuCollectionMapOrderByWithRelationInput = {
    id?: SortOrder
    aikuId?: SortOrder
    collectionId?: SortOrder
    aiku?: aikuOrderByWithRelationInput
    collection?: collectionOrderByWithRelationInput
  }

  export type aikuCollectionMapWhereUniqueInput = {
    id?: string
  }

  export type aikuCollectionMapOrderByWithAggregationInput = {
    id?: SortOrder
    aikuId?: SortOrder
    collectionId?: SortOrder
    _count?: aikuCollectionMapCountOrderByAggregateInput
    _max?: aikuCollectionMapMaxOrderByAggregateInput
    _min?: aikuCollectionMapMinOrderByAggregateInput
  }

  export type aikuCollectionMapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<aikuCollectionMapScalarWhereWithAggregatesInput>
    OR?: Enumerable<aikuCollectionMapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<aikuCollectionMapScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    aikuId?: UuidWithAggregatesFilter | string
    collectionId?: UuidWithAggregatesFilter | string
  }

  export type collectionWhereInput = {
    AND?: Enumerable<collectionWhereInput>
    OR?: Enumerable<collectionWhereInput>
    NOT?: Enumerable<collectionWhereInput>
    id?: UuidFilter | string
    createdAt?: DateTimeFilter | Date | string
    userId?: UuidFilter | string
    name?: StringFilter | string
    aikuCollectionMap?: AikuCollectionMapListRelationFilter
  }

  export type collectionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    aikuCollectionMap?: aikuCollectionMapOrderByRelationAggregateInput
  }

  export type collectionWhereUniqueInput = {
    id?: string
  }

  export type collectionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    _count?: collectionCountOrderByAggregateInput
    _max?: collectionMaxOrderByAggregateInput
    _min?: collectionMinOrderByAggregateInput
  }

  export type collectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<collectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<collectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<collectionScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type aikuCreateInput = {
    createdAt?: Date | string
    lineOne: string
    lineTwo: string
    lineThree: string
    userId: string
    sdUrl: string
    id: string
    preset?: presetCreateNestedOneWithoutAikuInput
    aikuCollectionMap?: aikuCollectionMapCreateNestedManyWithoutAikuInput
  }

  export type aikuUncheckedCreateInput = {
    createdAt?: Date | string
    lineOne: string
    lineTwo: string
    lineThree: string
    presetId?: number | null
    userId: string
    sdUrl: string
    id: string
    aikuCollectionMap?: aikuCollectionMapUncheckedCreateNestedManyWithoutAikuInput
  }

  export type aikuUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: StringFieldUpdateOperationsInput | string
    lineThree?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sdUrl?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    preset?: presetUpdateOneWithoutAikuNestedInput
    aikuCollectionMap?: aikuCollectionMapUpdateManyWithoutAikuNestedInput
  }

  export type aikuUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: StringFieldUpdateOperationsInput | string
    lineThree?: StringFieldUpdateOperationsInput | string
    presetId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    sdUrl?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    aikuCollectionMap?: aikuCollectionMapUncheckedUpdateManyWithoutAikuNestedInput
  }

  export type aikuCreateManyInput = {
    createdAt?: Date | string
    lineOne: string
    lineTwo: string
    lineThree: string
    presetId?: number | null
    userId: string
    sdUrl: string
    id: string
  }

  export type aikuUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: StringFieldUpdateOperationsInput | string
    lineThree?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sdUrl?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type aikuUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: StringFieldUpdateOperationsInput | string
    lineThree?: StringFieldUpdateOperationsInput | string
    presetId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    sdUrl?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type presetCreateInput = {
    name: string
    value?: string | null
    isDefault: boolean
    aiku?: aikuCreateNestedManyWithoutPresetInput
  }

  export type presetUncheckedCreateInput = {
    id?: number
    name: string
    value?: string | null
    isDefault: boolean
    aiku?: aikuUncheckedCreateNestedManyWithoutPresetInput
  }

  export type presetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    aiku?: aikuUpdateManyWithoutPresetNestedInput
  }

  export type presetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    aiku?: aikuUncheckedUpdateManyWithoutPresetNestedInput
  }

  export type presetCreateManyInput = {
    id?: number
    name: string
    value?: string | null
    isDefault: boolean
  }

  export type presetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type presetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type aikuCollectionMapCreateInput = {
    id: string
    aiku: aikuCreateNestedOneWithoutAikuCollectionMapInput
    collection: collectionCreateNestedOneWithoutAikuCollectionMapInput
  }

  export type aikuCollectionMapUncheckedCreateInput = {
    id: string
    aikuId: string
    collectionId: string
  }

  export type aikuCollectionMapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiku?: aikuUpdateOneRequiredWithoutAikuCollectionMapNestedInput
    collection?: collectionUpdateOneRequiredWithoutAikuCollectionMapNestedInput
  }

  export type aikuCollectionMapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aikuId?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
  }

  export type aikuCollectionMapCreateManyInput = {
    id: string
    aikuId: string
    collectionId: string
  }

  export type aikuCollectionMapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type aikuCollectionMapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aikuId?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
  }

  export type collectionCreateInput = {
    id: string
    createdAt?: Date | string
    userId: string
    name: string
    aikuCollectionMap?: aikuCollectionMapCreateNestedManyWithoutCollectionInput
  }

  export type collectionUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    userId: string
    name: string
    aikuCollectionMap?: aikuCollectionMapUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type collectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aikuCollectionMap?: aikuCollectionMapUpdateManyWithoutCollectionNestedInput
  }

  export type collectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aikuCollectionMap?: aikuCollectionMapUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type collectionCreateManyInput = {
    id: string
    createdAt?: Date | string
    userId: string
    name: string
  }

  export type collectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type collectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type PresetRelationFilter = {
    is?: presetWhereInput | null
    isNot?: presetWhereInput | null
  }

  export type AikuCollectionMapListRelationFilter = {
    every?: aikuCollectionMapWhereInput
    some?: aikuCollectionMapWhereInput
    none?: aikuCollectionMapWhereInput
  }

  export type aikuCollectionMapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type aikuCountOrderByAggregateInput = {
    createdAt?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrder
    lineThree?: SortOrder
    presetId?: SortOrder
    userId?: SortOrder
    sdUrl?: SortOrder
    id?: SortOrder
  }

  export type aikuAvgOrderByAggregateInput = {
    presetId?: SortOrder
  }

  export type aikuMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrder
    lineThree?: SortOrder
    presetId?: SortOrder
    userId?: SortOrder
    sdUrl?: SortOrder
    id?: SortOrder
  }

  export type aikuMinOrderByAggregateInput = {
    createdAt?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrder
    lineThree?: SortOrder
    presetId?: SortOrder
    userId?: SortOrder
    sdUrl?: SortOrder
    id?: SortOrder
  }

  export type aikuSumOrderByAggregateInput = {
    presetId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type AikuListRelationFilter = {
    every?: aikuWhereInput
    some?: aikuWhereInput
    none?: aikuWhereInput
  }

  export type aikuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type presetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isDefault?: SortOrder
  }

  export type presetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type presetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isDefault?: SortOrder
  }

  export type presetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isDefault?: SortOrder
  }

  export type presetSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type AikuRelationFilter = {
    is?: aikuWhereInput
    isNot?: aikuWhereInput
  }

  export type CollectionRelationFilter = {
    is?: collectionWhereInput
    isNot?: collectionWhereInput
  }

  export type aikuCollectionMapCountOrderByAggregateInput = {
    id?: SortOrder
    aikuId?: SortOrder
    collectionId?: SortOrder
  }

  export type aikuCollectionMapMaxOrderByAggregateInput = {
    id?: SortOrder
    aikuId?: SortOrder
    collectionId?: SortOrder
  }

  export type aikuCollectionMapMinOrderByAggregateInput = {
    id?: SortOrder
    aikuId?: SortOrder
    collectionId?: SortOrder
  }

  export type collectionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type collectionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type collectionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type presetCreateNestedOneWithoutAikuInput = {
    create?: XOR<presetCreateWithoutAikuInput, presetUncheckedCreateWithoutAikuInput>
    connectOrCreate?: presetCreateOrConnectWithoutAikuInput
    connect?: presetWhereUniqueInput
  }

  export type aikuCollectionMapCreateNestedManyWithoutAikuInput = {
    create?: XOR<Enumerable<aikuCollectionMapCreateWithoutAikuInput>, Enumerable<aikuCollectionMapUncheckedCreateWithoutAikuInput>>
    connectOrCreate?: Enumerable<aikuCollectionMapCreateOrConnectWithoutAikuInput>
    createMany?: aikuCollectionMapCreateManyAikuInputEnvelope
    connect?: Enumerable<aikuCollectionMapWhereUniqueInput>
  }

  export type aikuCollectionMapUncheckedCreateNestedManyWithoutAikuInput = {
    create?: XOR<Enumerable<aikuCollectionMapCreateWithoutAikuInput>, Enumerable<aikuCollectionMapUncheckedCreateWithoutAikuInput>>
    connectOrCreate?: Enumerable<aikuCollectionMapCreateOrConnectWithoutAikuInput>
    createMany?: aikuCollectionMapCreateManyAikuInputEnvelope
    connect?: Enumerable<aikuCollectionMapWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type presetUpdateOneWithoutAikuNestedInput = {
    create?: XOR<presetCreateWithoutAikuInput, presetUncheckedCreateWithoutAikuInput>
    connectOrCreate?: presetCreateOrConnectWithoutAikuInput
    upsert?: presetUpsertWithoutAikuInput
    disconnect?: boolean
    delete?: boolean
    connect?: presetWhereUniqueInput
    update?: XOR<presetUpdateWithoutAikuInput, presetUncheckedUpdateWithoutAikuInput>
  }

  export type aikuCollectionMapUpdateManyWithoutAikuNestedInput = {
    create?: XOR<Enumerable<aikuCollectionMapCreateWithoutAikuInput>, Enumerable<aikuCollectionMapUncheckedCreateWithoutAikuInput>>
    connectOrCreate?: Enumerable<aikuCollectionMapCreateOrConnectWithoutAikuInput>
    upsert?: Enumerable<aikuCollectionMapUpsertWithWhereUniqueWithoutAikuInput>
    createMany?: aikuCollectionMapCreateManyAikuInputEnvelope
    set?: Enumerable<aikuCollectionMapWhereUniqueInput>
    disconnect?: Enumerable<aikuCollectionMapWhereUniqueInput>
    delete?: Enumerable<aikuCollectionMapWhereUniqueInput>
    connect?: Enumerable<aikuCollectionMapWhereUniqueInput>
    update?: Enumerable<aikuCollectionMapUpdateWithWhereUniqueWithoutAikuInput>
    updateMany?: Enumerable<aikuCollectionMapUpdateManyWithWhereWithoutAikuInput>
    deleteMany?: Enumerable<aikuCollectionMapScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type aikuCollectionMapUncheckedUpdateManyWithoutAikuNestedInput = {
    create?: XOR<Enumerable<aikuCollectionMapCreateWithoutAikuInput>, Enumerable<aikuCollectionMapUncheckedCreateWithoutAikuInput>>
    connectOrCreate?: Enumerable<aikuCollectionMapCreateOrConnectWithoutAikuInput>
    upsert?: Enumerable<aikuCollectionMapUpsertWithWhereUniqueWithoutAikuInput>
    createMany?: aikuCollectionMapCreateManyAikuInputEnvelope
    set?: Enumerable<aikuCollectionMapWhereUniqueInput>
    disconnect?: Enumerable<aikuCollectionMapWhereUniqueInput>
    delete?: Enumerable<aikuCollectionMapWhereUniqueInput>
    connect?: Enumerable<aikuCollectionMapWhereUniqueInput>
    update?: Enumerable<aikuCollectionMapUpdateWithWhereUniqueWithoutAikuInput>
    updateMany?: Enumerable<aikuCollectionMapUpdateManyWithWhereWithoutAikuInput>
    deleteMany?: Enumerable<aikuCollectionMapScalarWhereInput>
  }

  export type aikuCreateNestedManyWithoutPresetInput = {
    create?: XOR<Enumerable<aikuCreateWithoutPresetInput>, Enumerable<aikuUncheckedCreateWithoutPresetInput>>
    connectOrCreate?: Enumerable<aikuCreateOrConnectWithoutPresetInput>
    createMany?: aikuCreateManyPresetInputEnvelope
    connect?: Enumerable<aikuWhereUniqueInput>
  }

  export type aikuUncheckedCreateNestedManyWithoutPresetInput = {
    create?: XOR<Enumerable<aikuCreateWithoutPresetInput>, Enumerable<aikuUncheckedCreateWithoutPresetInput>>
    connectOrCreate?: Enumerable<aikuCreateOrConnectWithoutPresetInput>
    createMany?: aikuCreateManyPresetInputEnvelope
    connect?: Enumerable<aikuWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type aikuUpdateManyWithoutPresetNestedInput = {
    create?: XOR<Enumerable<aikuCreateWithoutPresetInput>, Enumerable<aikuUncheckedCreateWithoutPresetInput>>
    connectOrCreate?: Enumerable<aikuCreateOrConnectWithoutPresetInput>
    upsert?: Enumerable<aikuUpsertWithWhereUniqueWithoutPresetInput>
    createMany?: aikuCreateManyPresetInputEnvelope
    set?: Enumerable<aikuWhereUniqueInput>
    disconnect?: Enumerable<aikuWhereUniqueInput>
    delete?: Enumerable<aikuWhereUniqueInput>
    connect?: Enumerable<aikuWhereUniqueInput>
    update?: Enumerable<aikuUpdateWithWhereUniqueWithoutPresetInput>
    updateMany?: Enumerable<aikuUpdateManyWithWhereWithoutPresetInput>
    deleteMany?: Enumerable<aikuScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type aikuUncheckedUpdateManyWithoutPresetNestedInput = {
    create?: XOR<Enumerable<aikuCreateWithoutPresetInput>, Enumerable<aikuUncheckedCreateWithoutPresetInput>>
    connectOrCreate?: Enumerable<aikuCreateOrConnectWithoutPresetInput>
    upsert?: Enumerable<aikuUpsertWithWhereUniqueWithoutPresetInput>
    createMany?: aikuCreateManyPresetInputEnvelope
    set?: Enumerable<aikuWhereUniqueInput>
    disconnect?: Enumerable<aikuWhereUniqueInput>
    delete?: Enumerable<aikuWhereUniqueInput>
    connect?: Enumerable<aikuWhereUniqueInput>
    update?: Enumerable<aikuUpdateWithWhereUniqueWithoutPresetInput>
    updateMany?: Enumerable<aikuUpdateManyWithWhereWithoutPresetInput>
    deleteMany?: Enumerable<aikuScalarWhereInput>
  }

  export type aikuCreateNestedOneWithoutAikuCollectionMapInput = {
    create?: XOR<aikuCreateWithoutAikuCollectionMapInput, aikuUncheckedCreateWithoutAikuCollectionMapInput>
    connectOrCreate?: aikuCreateOrConnectWithoutAikuCollectionMapInput
    connect?: aikuWhereUniqueInput
  }

  export type collectionCreateNestedOneWithoutAikuCollectionMapInput = {
    create?: XOR<collectionCreateWithoutAikuCollectionMapInput, collectionUncheckedCreateWithoutAikuCollectionMapInput>
    connectOrCreate?: collectionCreateOrConnectWithoutAikuCollectionMapInput
    connect?: collectionWhereUniqueInput
  }

  export type aikuUpdateOneRequiredWithoutAikuCollectionMapNestedInput = {
    create?: XOR<aikuCreateWithoutAikuCollectionMapInput, aikuUncheckedCreateWithoutAikuCollectionMapInput>
    connectOrCreate?: aikuCreateOrConnectWithoutAikuCollectionMapInput
    upsert?: aikuUpsertWithoutAikuCollectionMapInput
    connect?: aikuWhereUniqueInput
    update?: XOR<aikuUpdateWithoutAikuCollectionMapInput, aikuUncheckedUpdateWithoutAikuCollectionMapInput>
  }

  export type collectionUpdateOneRequiredWithoutAikuCollectionMapNestedInput = {
    create?: XOR<collectionCreateWithoutAikuCollectionMapInput, collectionUncheckedCreateWithoutAikuCollectionMapInput>
    connectOrCreate?: collectionCreateOrConnectWithoutAikuCollectionMapInput
    upsert?: collectionUpsertWithoutAikuCollectionMapInput
    connect?: collectionWhereUniqueInput
    update?: XOR<collectionUpdateWithoutAikuCollectionMapInput, collectionUncheckedUpdateWithoutAikuCollectionMapInput>
  }

  export type aikuCollectionMapCreateNestedManyWithoutCollectionInput = {
    create?: XOR<Enumerable<aikuCollectionMapCreateWithoutCollectionInput>, Enumerable<aikuCollectionMapUncheckedCreateWithoutCollectionInput>>
    connectOrCreate?: Enumerable<aikuCollectionMapCreateOrConnectWithoutCollectionInput>
    createMany?: aikuCollectionMapCreateManyCollectionInputEnvelope
    connect?: Enumerable<aikuCollectionMapWhereUniqueInput>
  }

  export type aikuCollectionMapUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<Enumerable<aikuCollectionMapCreateWithoutCollectionInput>, Enumerable<aikuCollectionMapUncheckedCreateWithoutCollectionInput>>
    connectOrCreate?: Enumerable<aikuCollectionMapCreateOrConnectWithoutCollectionInput>
    createMany?: aikuCollectionMapCreateManyCollectionInputEnvelope
    connect?: Enumerable<aikuCollectionMapWhereUniqueInput>
  }

  export type aikuCollectionMapUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<Enumerable<aikuCollectionMapCreateWithoutCollectionInput>, Enumerable<aikuCollectionMapUncheckedCreateWithoutCollectionInput>>
    connectOrCreate?: Enumerable<aikuCollectionMapCreateOrConnectWithoutCollectionInput>
    upsert?: Enumerable<aikuCollectionMapUpsertWithWhereUniqueWithoutCollectionInput>
    createMany?: aikuCollectionMapCreateManyCollectionInputEnvelope
    set?: Enumerable<aikuCollectionMapWhereUniqueInput>
    disconnect?: Enumerable<aikuCollectionMapWhereUniqueInput>
    delete?: Enumerable<aikuCollectionMapWhereUniqueInput>
    connect?: Enumerable<aikuCollectionMapWhereUniqueInput>
    update?: Enumerable<aikuCollectionMapUpdateWithWhereUniqueWithoutCollectionInput>
    updateMany?: Enumerable<aikuCollectionMapUpdateManyWithWhereWithoutCollectionInput>
    deleteMany?: Enumerable<aikuCollectionMapScalarWhereInput>
  }

  export type aikuCollectionMapUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<Enumerable<aikuCollectionMapCreateWithoutCollectionInput>, Enumerable<aikuCollectionMapUncheckedCreateWithoutCollectionInput>>
    connectOrCreate?: Enumerable<aikuCollectionMapCreateOrConnectWithoutCollectionInput>
    upsert?: Enumerable<aikuCollectionMapUpsertWithWhereUniqueWithoutCollectionInput>
    createMany?: aikuCollectionMapCreateManyCollectionInputEnvelope
    set?: Enumerable<aikuCollectionMapWhereUniqueInput>
    disconnect?: Enumerable<aikuCollectionMapWhereUniqueInput>
    delete?: Enumerable<aikuCollectionMapWhereUniqueInput>
    connect?: Enumerable<aikuCollectionMapWhereUniqueInput>
    update?: Enumerable<aikuCollectionMapUpdateWithWhereUniqueWithoutCollectionInput>
    updateMany?: Enumerable<aikuCollectionMapUpdateManyWithWhereWithoutCollectionInput>
    deleteMany?: Enumerable<aikuCollectionMapScalarWhereInput>
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type presetCreateWithoutAikuInput = {
    name: string
    value?: string | null
    isDefault: boolean
  }

  export type presetUncheckedCreateWithoutAikuInput = {
    id?: number
    name: string
    value?: string | null
    isDefault: boolean
  }

  export type presetCreateOrConnectWithoutAikuInput = {
    where: presetWhereUniqueInput
    create: XOR<presetCreateWithoutAikuInput, presetUncheckedCreateWithoutAikuInput>
  }

  export type aikuCollectionMapCreateWithoutAikuInput = {
    id: string
    collection: collectionCreateNestedOneWithoutAikuCollectionMapInput
  }

  export type aikuCollectionMapUncheckedCreateWithoutAikuInput = {
    id: string
    collectionId: string
  }

  export type aikuCollectionMapCreateOrConnectWithoutAikuInput = {
    where: aikuCollectionMapWhereUniqueInput
    create: XOR<aikuCollectionMapCreateWithoutAikuInput, aikuCollectionMapUncheckedCreateWithoutAikuInput>
  }

  export type aikuCollectionMapCreateManyAikuInputEnvelope = {
    data: Enumerable<aikuCollectionMapCreateManyAikuInput>
    skipDuplicates?: boolean
  }

  export type presetUpsertWithoutAikuInput = {
    update: XOR<presetUpdateWithoutAikuInput, presetUncheckedUpdateWithoutAikuInput>
    create: XOR<presetCreateWithoutAikuInput, presetUncheckedCreateWithoutAikuInput>
  }

  export type presetUpdateWithoutAikuInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type presetUncheckedUpdateWithoutAikuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type aikuCollectionMapUpsertWithWhereUniqueWithoutAikuInput = {
    where: aikuCollectionMapWhereUniqueInput
    update: XOR<aikuCollectionMapUpdateWithoutAikuInput, aikuCollectionMapUncheckedUpdateWithoutAikuInput>
    create: XOR<aikuCollectionMapCreateWithoutAikuInput, aikuCollectionMapUncheckedCreateWithoutAikuInput>
  }

  export type aikuCollectionMapUpdateWithWhereUniqueWithoutAikuInput = {
    where: aikuCollectionMapWhereUniqueInput
    data: XOR<aikuCollectionMapUpdateWithoutAikuInput, aikuCollectionMapUncheckedUpdateWithoutAikuInput>
  }

  export type aikuCollectionMapUpdateManyWithWhereWithoutAikuInput = {
    where: aikuCollectionMapScalarWhereInput
    data: XOR<aikuCollectionMapUpdateManyMutationInput, aikuCollectionMapUncheckedUpdateManyWithoutAikuCollectionMapInput>
  }

  export type aikuCollectionMapScalarWhereInput = {
    AND?: Enumerable<aikuCollectionMapScalarWhereInput>
    OR?: Enumerable<aikuCollectionMapScalarWhereInput>
    NOT?: Enumerable<aikuCollectionMapScalarWhereInput>
    id?: UuidFilter | string
    aikuId?: UuidFilter | string
    collectionId?: UuidFilter | string
  }

  export type aikuCreateWithoutPresetInput = {
    createdAt?: Date | string
    lineOne: string
    lineTwo: string
    lineThree: string
    userId: string
    sdUrl: string
    id: string
    aikuCollectionMap?: aikuCollectionMapCreateNestedManyWithoutAikuInput
  }

  export type aikuUncheckedCreateWithoutPresetInput = {
    createdAt?: Date | string
    lineOne: string
    lineTwo: string
    lineThree: string
    userId: string
    sdUrl: string
    id: string
    aikuCollectionMap?: aikuCollectionMapUncheckedCreateNestedManyWithoutAikuInput
  }

  export type aikuCreateOrConnectWithoutPresetInput = {
    where: aikuWhereUniqueInput
    create: XOR<aikuCreateWithoutPresetInput, aikuUncheckedCreateWithoutPresetInput>
  }

  export type aikuCreateManyPresetInputEnvelope = {
    data: Enumerable<aikuCreateManyPresetInput>
    skipDuplicates?: boolean
  }

  export type aikuUpsertWithWhereUniqueWithoutPresetInput = {
    where: aikuWhereUniqueInput
    update: XOR<aikuUpdateWithoutPresetInput, aikuUncheckedUpdateWithoutPresetInput>
    create: XOR<aikuCreateWithoutPresetInput, aikuUncheckedCreateWithoutPresetInput>
  }

  export type aikuUpdateWithWhereUniqueWithoutPresetInput = {
    where: aikuWhereUniqueInput
    data: XOR<aikuUpdateWithoutPresetInput, aikuUncheckedUpdateWithoutPresetInput>
  }

  export type aikuUpdateManyWithWhereWithoutPresetInput = {
    where: aikuScalarWhereInput
    data: XOR<aikuUpdateManyMutationInput, aikuUncheckedUpdateManyWithoutAikuInput>
  }

  export type aikuScalarWhereInput = {
    AND?: Enumerable<aikuScalarWhereInput>
    OR?: Enumerable<aikuScalarWhereInput>
    NOT?: Enumerable<aikuScalarWhereInput>
    createdAt?: DateTimeFilter | Date | string
    lineOne?: StringFilter | string
    lineTwo?: StringFilter | string
    lineThree?: StringFilter | string
    presetId?: IntNullableFilter | number | null
    userId?: UuidFilter | string
    sdUrl?: StringFilter | string
    id?: UuidFilter | string
  }

  export type aikuCreateWithoutAikuCollectionMapInput = {
    createdAt?: Date | string
    lineOne: string
    lineTwo: string
    lineThree: string
    userId: string
    sdUrl: string
    id: string
    preset?: presetCreateNestedOneWithoutAikuInput
  }

  export type aikuUncheckedCreateWithoutAikuCollectionMapInput = {
    createdAt?: Date | string
    lineOne: string
    lineTwo: string
    lineThree: string
    presetId?: number | null
    userId: string
    sdUrl: string
    id: string
  }

  export type aikuCreateOrConnectWithoutAikuCollectionMapInput = {
    where: aikuWhereUniqueInput
    create: XOR<aikuCreateWithoutAikuCollectionMapInput, aikuUncheckedCreateWithoutAikuCollectionMapInput>
  }

  export type collectionCreateWithoutAikuCollectionMapInput = {
    id: string
    createdAt?: Date | string
    userId: string
    name: string
  }

  export type collectionUncheckedCreateWithoutAikuCollectionMapInput = {
    id: string
    createdAt?: Date | string
    userId: string
    name: string
  }

  export type collectionCreateOrConnectWithoutAikuCollectionMapInput = {
    where: collectionWhereUniqueInput
    create: XOR<collectionCreateWithoutAikuCollectionMapInput, collectionUncheckedCreateWithoutAikuCollectionMapInput>
  }

  export type aikuUpsertWithoutAikuCollectionMapInput = {
    update: XOR<aikuUpdateWithoutAikuCollectionMapInput, aikuUncheckedUpdateWithoutAikuCollectionMapInput>
    create: XOR<aikuCreateWithoutAikuCollectionMapInput, aikuUncheckedCreateWithoutAikuCollectionMapInput>
  }

  export type aikuUpdateWithoutAikuCollectionMapInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: StringFieldUpdateOperationsInput | string
    lineThree?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sdUrl?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    preset?: presetUpdateOneWithoutAikuNestedInput
  }

  export type aikuUncheckedUpdateWithoutAikuCollectionMapInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: StringFieldUpdateOperationsInput | string
    lineThree?: StringFieldUpdateOperationsInput | string
    presetId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    sdUrl?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type collectionUpsertWithoutAikuCollectionMapInput = {
    update: XOR<collectionUpdateWithoutAikuCollectionMapInput, collectionUncheckedUpdateWithoutAikuCollectionMapInput>
    create: XOR<collectionCreateWithoutAikuCollectionMapInput, collectionUncheckedCreateWithoutAikuCollectionMapInput>
  }

  export type collectionUpdateWithoutAikuCollectionMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type collectionUncheckedUpdateWithoutAikuCollectionMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type aikuCollectionMapCreateWithoutCollectionInput = {
    id: string
    aiku: aikuCreateNestedOneWithoutAikuCollectionMapInput
  }

  export type aikuCollectionMapUncheckedCreateWithoutCollectionInput = {
    id: string
    aikuId: string
  }

  export type aikuCollectionMapCreateOrConnectWithoutCollectionInput = {
    where: aikuCollectionMapWhereUniqueInput
    create: XOR<aikuCollectionMapCreateWithoutCollectionInput, aikuCollectionMapUncheckedCreateWithoutCollectionInput>
  }

  export type aikuCollectionMapCreateManyCollectionInputEnvelope = {
    data: Enumerable<aikuCollectionMapCreateManyCollectionInput>
    skipDuplicates?: boolean
  }

  export type aikuCollectionMapUpsertWithWhereUniqueWithoutCollectionInput = {
    where: aikuCollectionMapWhereUniqueInput
    update: XOR<aikuCollectionMapUpdateWithoutCollectionInput, aikuCollectionMapUncheckedUpdateWithoutCollectionInput>
    create: XOR<aikuCollectionMapCreateWithoutCollectionInput, aikuCollectionMapUncheckedCreateWithoutCollectionInput>
  }

  export type aikuCollectionMapUpdateWithWhereUniqueWithoutCollectionInput = {
    where: aikuCollectionMapWhereUniqueInput
    data: XOR<aikuCollectionMapUpdateWithoutCollectionInput, aikuCollectionMapUncheckedUpdateWithoutCollectionInput>
  }

  export type aikuCollectionMapUpdateManyWithWhereWithoutCollectionInput = {
    where: aikuCollectionMapScalarWhereInput
    data: XOR<aikuCollectionMapUpdateManyMutationInput, aikuCollectionMapUncheckedUpdateManyWithoutAikuCollectionMapInput>
  }

  export type aikuCollectionMapCreateManyAikuInput = {
    id: string
    collectionId: string
  }

  export type aikuCollectionMapUpdateWithoutAikuInput = {
    id?: StringFieldUpdateOperationsInput | string
    collection?: collectionUpdateOneRequiredWithoutAikuCollectionMapNestedInput
  }

  export type aikuCollectionMapUncheckedUpdateWithoutAikuInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
  }

  export type aikuCollectionMapUncheckedUpdateManyWithoutAikuCollectionMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
  }

  export type aikuCreateManyPresetInput = {
    createdAt?: Date | string
    lineOne: string
    lineTwo: string
    lineThree: string
    userId: string
    sdUrl: string
    id: string
  }

  export type aikuUpdateWithoutPresetInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: StringFieldUpdateOperationsInput | string
    lineThree?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sdUrl?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    aikuCollectionMap?: aikuCollectionMapUpdateManyWithoutAikuNestedInput
  }

  export type aikuUncheckedUpdateWithoutPresetInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: StringFieldUpdateOperationsInput | string
    lineThree?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sdUrl?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    aikuCollectionMap?: aikuCollectionMapUncheckedUpdateManyWithoutAikuNestedInput
  }

  export type aikuUncheckedUpdateManyWithoutAikuInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: StringFieldUpdateOperationsInput | string
    lineThree?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sdUrl?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type aikuCollectionMapCreateManyCollectionInput = {
    id: string
    aikuId: string
  }

  export type aikuCollectionMapUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiku?: aikuUpdateOneRequiredWithoutAikuCollectionMapNestedInput
  }

  export type aikuCollectionMapUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    aikuId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}