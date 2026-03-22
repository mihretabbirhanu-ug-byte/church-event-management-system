
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventInviteLink
 * 
 */
export type EventInviteLink = $Result.DefaultSelection<Prisma.$EventInviteLinkPayload>
/**
 * Model Registration
 * 
 */
export type Registration = $Result.DefaultSelection<Prisma.$RegistrationPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskAssignment
 * 
 */
export type TaskAssignment = $Result.DefaultSelection<Prisma.$TaskAssignmentPayload>
/**
 * Model TaskUpdate
 * 
 */
export type TaskUpdate = $Result.DefaultSelection<Prisma.$TaskUpdatePayload>
/**
 * Model EventGoal
 * 
 */
export type EventGoal = $Result.DefaultSelection<Prisma.$EventGoalPayload>
/**
 * Model EventNote
 * 
 */
export type EventNote = $Result.DefaultSelection<Prisma.$EventNotePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
  VOLUNTEER: 'VOLUNTEER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AttendanceStatus: {
  NOT_MARKED: 'NOT_MARKED',
  PRESENT: 'PRESENT'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const TaskStatus: {
  PENDING: 'PENDING',
  DONE: 'DONE',
  CLOSED: 'CLOSED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.eventInviteLink`: Exposes CRUD operations for the **EventInviteLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventInviteLinks
    * const eventInviteLinks = await prisma.eventInviteLink.findMany()
    * ```
    */
  get eventInviteLink(): Prisma.EventInviteLinkDelegate<ExtArgs>;

  /**
   * `prisma.registration`: Exposes CRUD operations for the **Registration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registrations
    * const registrations = await prisma.registration.findMany()
    * ```
    */
  get registration(): Prisma.RegistrationDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.taskAssignment`: Exposes CRUD operations for the **TaskAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskAssignments
    * const taskAssignments = await prisma.taskAssignment.findMany()
    * ```
    */
  get taskAssignment(): Prisma.TaskAssignmentDelegate<ExtArgs>;

  /**
   * `prisma.taskUpdate`: Exposes CRUD operations for the **TaskUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskUpdates
    * const taskUpdates = await prisma.taskUpdate.findMany()
    * ```
    */
  get taskUpdate(): Prisma.TaskUpdateDelegate<ExtArgs>;

  /**
   * `prisma.eventGoal`: Exposes CRUD operations for the **EventGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventGoals
    * const eventGoals = await prisma.eventGoal.findMany()
    * ```
    */
  get eventGoal(): Prisma.EventGoalDelegate<ExtArgs>;

  /**
   * `prisma.eventNote`: Exposes CRUD operations for the **EventNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventNotes
    * const eventNotes = await prisma.eventNote.findMany()
    * ```
    */
  get eventNote(): Prisma.EventNoteDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Event: 'Event',
    EventInviteLink: 'EventInviteLink',
    Registration: 'Registration',
    Task: 'Task',
    TaskAssignment: 'TaskAssignment',
    TaskUpdate: 'TaskUpdate',
    EventGoal: 'EventGoal',
    EventNote: 'EventNote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "event" | "eventInviteLink" | "registration" | "task" | "taskAssignment" | "taskUpdate" | "eventGoal" | "eventNote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventInviteLink: {
        payload: Prisma.$EventInviteLinkPayload<ExtArgs>
        fields: Prisma.EventInviteLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventInviteLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInviteLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventInviteLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInviteLinkPayload>
          }
          findFirst: {
            args: Prisma.EventInviteLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInviteLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventInviteLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInviteLinkPayload>
          }
          findMany: {
            args: Prisma.EventInviteLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInviteLinkPayload>[]
          }
          create: {
            args: Prisma.EventInviteLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInviteLinkPayload>
          }
          createMany: {
            args: Prisma.EventInviteLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventInviteLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInviteLinkPayload>[]
          }
          delete: {
            args: Prisma.EventInviteLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInviteLinkPayload>
          }
          update: {
            args: Prisma.EventInviteLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInviteLinkPayload>
          }
          deleteMany: {
            args: Prisma.EventInviteLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventInviteLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventInviteLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventInviteLinkPayload>
          }
          aggregate: {
            args: Prisma.EventInviteLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventInviteLink>
          }
          groupBy: {
            args: Prisma.EventInviteLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventInviteLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventInviteLinkCountArgs<ExtArgs>
            result: $Utils.Optional<EventInviteLinkCountAggregateOutputType> | number
          }
        }
      }
      Registration: {
        payload: Prisma.$RegistrationPayload<ExtArgs>
        fields: Prisma.RegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findFirst: {
            args: Prisma.RegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findMany: {
            args: Prisma.RegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          create: {
            args: Prisma.RegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          createMany: {
            args: Prisma.RegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          delete: {
            args: Prisma.RegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          update: {
            args: Prisma.RegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          aggregate: {
            args: Prisma.RegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistration>
          }
          groupBy: {
            args: Prisma.RegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskAssignment: {
        payload: Prisma.$TaskAssignmentPayload<ExtArgs>
        fields: Prisma.TaskAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          findFirst: {
            args: Prisma.TaskAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          findMany: {
            args: Prisma.TaskAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>[]
          }
          create: {
            args: Prisma.TaskAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          createMany: {
            args: Prisma.TaskAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>[]
          }
          delete: {
            args: Prisma.TaskAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          update: {
            args: Prisma.TaskAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.TaskAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAssignmentPayload>
          }
          aggregate: {
            args: Prisma.TaskAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskAssignment>
          }
          groupBy: {
            args: Prisma.TaskAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<TaskAssignmentCountAggregateOutputType> | number
          }
        }
      }
      TaskUpdate: {
        payload: Prisma.$TaskUpdatePayload<ExtArgs>
        fields: Prisma.TaskUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskUpdatePayload>
          }
          findFirst: {
            args: Prisma.TaskUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskUpdatePayload>
          }
          findMany: {
            args: Prisma.TaskUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskUpdatePayload>[]
          }
          create: {
            args: Prisma.TaskUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskUpdatePayload>
          }
          createMany: {
            args: Prisma.TaskUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskUpdatePayload>[]
          }
          delete: {
            args: Prisma.TaskUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskUpdatePayload>
          }
          update: {
            args: Prisma.TaskUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskUpdatePayload>
          }
          deleteMany: {
            args: Prisma.TaskUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskUpdatePayload>
          }
          aggregate: {
            args: Prisma.TaskUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskUpdate>
          }
          groupBy: {
            args: Prisma.TaskUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<TaskUpdateCountAggregateOutputType> | number
          }
        }
      }
      EventGoal: {
        payload: Prisma.$EventGoalPayload<ExtArgs>
        fields: Prisma.EventGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGoalPayload>
          }
          findFirst: {
            args: Prisma.EventGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGoalPayload>
          }
          findMany: {
            args: Prisma.EventGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGoalPayload>[]
          }
          create: {
            args: Prisma.EventGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGoalPayload>
          }
          createMany: {
            args: Prisma.EventGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventGoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGoalPayload>[]
          }
          delete: {
            args: Prisma.EventGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGoalPayload>
          }
          update: {
            args: Prisma.EventGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGoalPayload>
          }
          deleteMany: {
            args: Prisma.EventGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGoalPayload>
          }
          aggregate: {
            args: Prisma.EventGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventGoal>
          }
          groupBy: {
            args: Prisma.EventGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventGoalCountArgs<ExtArgs>
            result: $Utils.Optional<EventGoalCountAggregateOutputType> | number
          }
        }
      }
      EventNote: {
        payload: Prisma.$EventNotePayload<ExtArgs>
        fields: Prisma.EventNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventNotePayload>
          }
          findFirst: {
            args: Prisma.EventNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventNotePayload>
          }
          findMany: {
            args: Prisma.EventNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventNotePayload>[]
          }
          create: {
            args: Prisma.EventNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventNotePayload>
          }
          createMany: {
            args: Prisma.EventNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventNotePayload>[]
          }
          delete: {
            args: Prisma.EventNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventNotePayload>
          }
          update: {
            args: Prisma.EventNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventNotePayload>
          }
          deleteMany: {
            args: Prisma.EventNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventNotePayload>
          }
          aggregate: {
            args: Prisma.EventNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventNote>
          }
          groupBy: {
            args: Prisma.EventNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventNoteCountArgs<ExtArgs>
            result: $Utils.Optional<EventNoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdEvents: number
    registrations: number
    taskAssignments: number
    taskUpdates: number
    notes: number
    tasks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdEvents?: boolean | UserCountOutputTypeCountCreatedEventsArgs
    registrations?: boolean | UserCountOutputTypeCountRegistrationsArgs
    taskAssignments?: boolean | UserCountOutputTypeCountTaskAssignmentsArgs
    taskUpdates?: boolean | UserCountOutputTypeCountTaskUpdatesArgs
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskUpdateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventNoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    registrations: number
    tasks: number
    goals: number
    notes: number
    inviteLinks: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | EventCountOutputTypeCountRegistrationsArgs
    tasks?: boolean | EventCountOutputTypeCountTasksArgs
    goals?: boolean | EventCountOutputTypeCountGoalsArgs
    notes?: boolean | EventCountOutputTypeCountNotesArgs
    inviteLinks?: boolean | EventCountOutputTypeCountInviteLinksArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventGoalWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventNoteWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountInviteLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventInviteLinkWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    assignments: number
    updates: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | TaskCountOutputTypeCountAssignmentsArgs
    updates?: boolean | TaskCountOutputTypeCountUpdatesArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskAssignmentWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskUpdateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    phone: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdEvents?: boolean | User$createdEventsArgs<ExtArgs>
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    taskAssignments?: boolean | User$taskAssignmentsArgs<ExtArgs>
    taskUpdates?: boolean | User$taskUpdatesArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdEvents?: boolean | User$createdEventsArgs<ExtArgs>
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    taskAssignments?: boolean | User$taskAssignmentsArgs<ExtArgs>
    taskUpdates?: boolean | User$taskUpdatesArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdEvents: Prisma.$EventPayload<ExtArgs>[]
      registrations: Prisma.$RegistrationPayload<ExtArgs>[]
      taskAssignments: Prisma.$TaskAssignmentPayload<ExtArgs>[]
      taskUpdates: Prisma.$TaskUpdatePayload<ExtArgs>[]
      notes: Prisma.$EventNotePayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      phone: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdEvents<T extends User$createdEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    registrations<T extends User$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany"> | Null>
    taskAssignments<T extends User$taskAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$taskAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany"> | Null>
    taskUpdates<T extends User$taskUpdatesArgs<ExtArgs> = {}>(args?: Subset<T, User$taskUpdatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskUpdatePayload<ExtArgs>, T, "findMany"> | Null>
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventNotePayload<ExtArgs>, T, "findMany"> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.createdEvents
   */
  export type User$createdEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.registrations
   */
  export type User$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * User.taskAssignments
   */
  export type User$taskAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    where?: TaskAssignmentWhereInput
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    cursor?: TaskAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * User.taskUpdates
   */
  export type User$taskUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateInclude<ExtArgs> | null
    where?: TaskUpdateWhereInput
    orderBy?: TaskUpdateOrderByWithRelationInput | TaskUpdateOrderByWithRelationInput[]
    cursor?: TaskUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskUpdateScalarFieldEnum | TaskUpdateScalarFieldEnum[]
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteInclude<ExtArgs> | null
    where?: EventNoteWhereInput
    orderBy?: EventNoteOrderByWithRelationInput | EventNoteOrderByWithRelationInput[]
    cursor?: EventNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventNoteScalarFieldEnum | EventNoteScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    location: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    location: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startDate: number
    endDate: number
    location: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    location?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    location?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    location?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string | null
    startDate: Date
    endDate: Date | null
    location: string | null
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    registrations?: boolean | Event$registrationsArgs<ExtArgs>
    tasks?: boolean | Event$tasksArgs<ExtArgs>
    goals?: boolean | Event$goalsArgs<ExtArgs>
    notes?: boolean | Event$notesArgs<ExtArgs>
    inviteLinks?: boolean | Event$inviteLinksArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    registrations?: boolean | Event$registrationsArgs<ExtArgs>
    tasks?: boolean | Event$tasksArgs<ExtArgs>
    goals?: boolean | Event$goalsArgs<ExtArgs>
    notes?: boolean | Event$notesArgs<ExtArgs>
    inviteLinks?: boolean | Event$inviteLinksArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      registrations: Prisma.$RegistrationPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      goals: Prisma.$EventGoalPayload<ExtArgs>[]
      notes: Prisma.$EventNotePayload<ExtArgs>[]
      inviteLinks: Prisma.$EventInviteLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      startDate: Date
      endDate: Date | null
      location: string | null
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    registrations<T extends Event$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Event$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany"> | Null>
    tasks<T extends Event$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Event$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    goals<T extends Event$goalsArgs<ExtArgs> = {}>(args?: Subset<T, Event$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventGoalPayload<ExtArgs>, T, "findMany"> | Null>
    notes<T extends Event$notesArgs<ExtArgs> = {}>(args?: Subset<T, Event$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventNotePayload<ExtArgs>, T, "findMany"> | Null>
    inviteLinks<T extends Event$inviteLinksArgs<ExtArgs> = {}>(args?: Subset<T, Event$inviteLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventInviteLinkPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly createdById: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.registrations
   */
  export type Event$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Event.tasks
   */
  export type Event$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Event.goals
   */
  export type Event$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGoal
     */
    select?: EventGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGoalInclude<ExtArgs> | null
    where?: EventGoalWhereInput
    orderBy?: EventGoalOrderByWithRelationInput | EventGoalOrderByWithRelationInput[]
    cursor?: EventGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventGoalScalarFieldEnum | EventGoalScalarFieldEnum[]
  }

  /**
   * Event.notes
   */
  export type Event$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteInclude<ExtArgs> | null
    where?: EventNoteWhereInput
    orderBy?: EventNoteOrderByWithRelationInput | EventNoteOrderByWithRelationInput[]
    cursor?: EventNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventNoteScalarFieldEnum | EventNoteScalarFieldEnum[]
  }

  /**
   * Event.inviteLinks
   */
  export type Event$inviteLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInviteLink
     */
    select?: EventInviteLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteLinkInclude<ExtArgs> | null
    where?: EventInviteLinkWhereInput
    orderBy?: EventInviteLinkOrderByWithRelationInput | EventInviteLinkOrderByWithRelationInput[]
    cursor?: EventInviteLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventInviteLinkScalarFieldEnum | EventInviteLinkScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventInviteLink
   */

  export type AggregateEventInviteLink = {
    _count: EventInviteLinkCountAggregateOutputType | null
    _min: EventInviteLinkMinAggregateOutputType | null
    _max: EventInviteLinkMaxAggregateOutputType | null
  }

  export type EventInviteLinkMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    eventId: string | null
    createdAt: Date | null
  }

  export type EventInviteLinkMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    eventId: string | null
    createdAt: Date | null
  }

  export type EventInviteLinkCountAggregateOutputType = {
    id: number
    token: number
    expiresAt: number
    eventId: number
    createdAt: number
    _all: number
  }


  export type EventInviteLinkMinAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    eventId?: true
    createdAt?: true
  }

  export type EventInviteLinkMaxAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    eventId?: true
    createdAt?: true
  }

  export type EventInviteLinkCountAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    eventId?: true
    createdAt?: true
    _all?: true
  }

  export type EventInviteLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventInviteLink to aggregate.
     */
    where?: EventInviteLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventInviteLinks to fetch.
     */
    orderBy?: EventInviteLinkOrderByWithRelationInput | EventInviteLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventInviteLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventInviteLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventInviteLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventInviteLinks
    **/
    _count?: true | EventInviteLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventInviteLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventInviteLinkMaxAggregateInputType
  }

  export type GetEventInviteLinkAggregateType<T extends EventInviteLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateEventInviteLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventInviteLink[P]>
      : GetScalarType<T[P], AggregateEventInviteLink[P]>
  }




  export type EventInviteLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventInviteLinkWhereInput
    orderBy?: EventInviteLinkOrderByWithAggregationInput | EventInviteLinkOrderByWithAggregationInput[]
    by: EventInviteLinkScalarFieldEnum[] | EventInviteLinkScalarFieldEnum
    having?: EventInviteLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventInviteLinkCountAggregateInputType | true
    _min?: EventInviteLinkMinAggregateInputType
    _max?: EventInviteLinkMaxAggregateInputType
  }

  export type EventInviteLinkGroupByOutputType = {
    id: string
    token: string
    expiresAt: Date | null
    eventId: string
    createdAt: Date
    _count: EventInviteLinkCountAggregateOutputType | null
    _min: EventInviteLinkMinAggregateOutputType | null
    _max: EventInviteLinkMaxAggregateOutputType | null
  }

  type GetEventInviteLinkGroupByPayload<T extends EventInviteLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventInviteLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventInviteLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventInviteLinkGroupByOutputType[P]>
            : GetScalarType<T[P], EventInviteLinkGroupByOutputType[P]>
        }
      >
    >


  export type EventInviteLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    eventId?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventInviteLink"]>

  export type EventInviteLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    eventId?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventInviteLink"]>

  export type EventInviteLinkSelectScalar = {
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    eventId?: boolean
    createdAt?: boolean
  }

  export type EventInviteLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventInviteLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventInviteLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventInviteLink"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiresAt: Date | null
      eventId: string
      createdAt: Date
    }, ExtArgs["result"]["eventInviteLink"]>
    composites: {}
  }

  type EventInviteLinkGetPayload<S extends boolean | null | undefined | EventInviteLinkDefaultArgs> = $Result.GetResult<Prisma.$EventInviteLinkPayload, S>

  type EventInviteLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventInviteLinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventInviteLinkCountAggregateInputType | true
    }

  export interface EventInviteLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventInviteLink'], meta: { name: 'EventInviteLink' } }
    /**
     * Find zero or one EventInviteLink that matches the filter.
     * @param {EventInviteLinkFindUniqueArgs} args - Arguments to find a EventInviteLink
     * @example
     * // Get one EventInviteLink
     * const eventInviteLink = await prisma.eventInviteLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventInviteLinkFindUniqueArgs>(args: SelectSubset<T, EventInviteLinkFindUniqueArgs<ExtArgs>>): Prisma__EventInviteLinkClient<$Result.GetResult<Prisma.$EventInviteLinkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventInviteLink that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventInviteLinkFindUniqueOrThrowArgs} args - Arguments to find a EventInviteLink
     * @example
     * // Get one EventInviteLink
     * const eventInviteLink = await prisma.eventInviteLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventInviteLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, EventInviteLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventInviteLinkClient<$Result.GetResult<Prisma.$EventInviteLinkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventInviteLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteLinkFindFirstArgs} args - Arguments to find a EventInviteLink
     * @example
     * // Get one EventInviteLink
     * const eventInviteLink = await prisma.eventInviteLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventInviteLinkFindFirstArgs>(args?: SelectSubset<T, EventInviteLinkFindFirstArgs<ExtArgs>>): Prisma__EventInviteLinkClient<$Result.GetResult<Prisma.$EventInviteLinkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventInviteLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteLinkFindFirstOrThrowArgs} args - Arguments to find a EventInviteLink
     * @example
     * // Get one EventInviteLink
     * const eventInviteLink = await prisma.eventInviteLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventInviteLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, EventInviteLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventInviteLinkClient<$Result.GetResult<Prisma.$EventInviteLinkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventInviteLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventInviteLinks
     * const eventInviteLinks = await prisma.eventInviteLink.findMany()
     * 
     * // Get first 10 EventInviteLinks
     * const eventInviteLinks = await prisma.eventInviteLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventInviteLinkWithIdOnly = await prisma.eventInviteLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventInviteLinkFindManyArgs>(args?: SelectSubset<T, EventInviteLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventInviteLinkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventInviteLink.
     * @param {EventInviteLinkCreateArgs} args - Arguments to create a EventInviteLink.
     * @example
     * // Create one EventInviteLink
     * const EventInviteLink = await prisma.eventInviteLink.create({
     *   data: {
     *     // ... data to create a EventInviteLink
     *   }
     * })
     * 
     */
    create<T extends EventInviteLinkCreateArgs>(args: SelectSubset<T, EventInviteLinkCreateArgs<ExtArgs>>): Prisma__EventInviteLinkClient<$Result.GetResult<Prisma.$EventInviteLinkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventInviteLinks.
     * @param {EventInviteLinkCreateManyArgs} args - Arguments to create many EventInviteLinks.
     * @example
     * // Create many EventInviteLinks
     * const eventInviteLink = await prisma.eventInviteLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventInviteLinkCreateManyArgs>(args?: SelectSubset<T, EventInviteLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventInviteLinks and returns the data saved in the database.
     * @param {EventInviteLinkCreateManyAndReturnArgs} args - Arguments to create many EventInviteLinks.
     * @example
     * // Create many EventInviteLinks
     * const eventInviteLink = await prisma.eventInviteLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventInviteLinks and only return the `id`
     * const eventInviteLinkWithIdOnly = await prisma.eventInviteLink.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventInviteLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, EventInviteLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventInviteLinkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventInviteLink.
     * @param {EventInviteLinkDeleteArgs} args - Arguments to delete one EventInviteLink.
     * @example
     * // Delete one EventInviteLink
     * const EventInviteLink = await prisma.eventInviteLink.delete({
     *   where: {
     *     // ... filter to delete one EventInviteLink
     *   }
     * })
     * 
     */
    delete<T extends EventInviteLinkDeleteArgs>(args: SelectSubset<T, EventInviteLinkDeleteArgs<ExtArgs>>): Prisma__EventInviteLinkClient<$Result.GetResult<Prisma.$EventInviteLinkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventInviteLink.
     * @param {EventInviteLinkUpdateArgs} args - Arguments to update one EventInviteLink.
     * @example
     * // Update one EventInviteLink
     * const eventInviteLink = await prisma.eventInviteLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventInviteLinkUpdateArgs>(args: SelectSubset<T, EventInviteLinkUpdateArgs<ExtArgs>>): Prisma__EventInviteLinkClient<$Result.GetResult<Prisma.$EventInviteLinkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventInviteLinks.
     * @param {EventInviteLinkDeleteManyArgs} args - Arguments to filter EventInviteLinks to delete.
     * @example
     * // Delete a few EventInviteLinks
     * const { count } = await prisma.eventInviteLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventInviteLinkDeleteManyArgs>(args?: SelectSubset<T, EventInviteLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventInviteLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventInviteLinks
     * const eventInviteLink = await prisma.eventInviteLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventInviteLinkUpdateManyArgs>(args: SelectSubset<T, EventInviteLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventInviteLink.
     * @param {EventInviteLinkUpsertArgs} args - Arguments to update or create a EventInviteLink.
     * @example
     * // Update or create a EventInviteLink
     * const eventInviteLink = await prisma.eventInviteLink.upsert({
     *   create: {
     *     // ... data to create a EventInviteLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventInviteLink we want to update
     *   }
     * })
     */
    upsert<T extends EventInviteLinkUpsertArgs>(args: SelectSubset<T, EventInviteLinkUpsertArgs<ExtArgs>>): Prisma__EventInviteLinkClient<$Result.GetResult<Prisma.$EventInviteLinkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventInviteLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteLinkCountArgs} args - Arguments to filter EventInviteLinks to count.
     * @example
     * // Count the number of EventInviteLinks
     * const count = await prisma.eventInviteLink.count({
     *   where: {
     *     // ... the filter for the EventInviteLinks we want to count
     *   }
     * })
    **/
    count<T extends EventInviteLinkCountArgs>(
      args?: Subset<T, EventInviteLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventInviteLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventInviteLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventInviteLinkAggregateArgs>(args: Subset<T, EventInviteLinkAggregateArgs>): Prisma.PrismaPromise<GetEventInviteLinkAggregateType<T>>

    /**
     * Group by EventInviteLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventInviteLinkGroupByArgs} args - Group by arguments.
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
      T extends EventInviteLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventInviteLinkGroupByArgs['orderBy'] }
        : { orderBy?: EventInviteLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EventInviteLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventInviteLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventInviteLink model
   */
  readonly fields: EventInviteLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventInviteLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventInviteLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventInviteLink model
   */ 
  interface EventInviteLinkFieldRefs {
    readonly id: FieldRef<"EventInviteLink", 'String'>
    readonly token: FieldRef<"EventInviteLink", 'String'>
    readonly expiresAt: FieldRef<"EventInviteLink", 'DateTime'>
    readonly eventId: FieldRef<"EventInviteLink", 'String'>
    readonly createdAt: FieldRef<"EventInviteLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventInviteLink findUnique
   */
  export type EventInviteLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInviteLink
     */
    select?: EventInviteLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteLinkInclude<ExtArgs> | null
    /**
     * Filter, which EventInviteLink to fetch.
     */
    where: EventInviteLinkWhereUniqueInput
  }

  /**
   * EventInviteLink findUniqueOrThrow
   */
  export type EventInviteLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInviteLink
     */
    select?: EventInviteLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteLinkInclude<ExtArgs> | null
    /**
     * Filter, which EventInviteLink to fetch.
     */
    where: EventInviteLinkWhereUniqueInput
  }

  /**
   * EventInviteLink findFirst
   */
  export type EventInviteLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInviteLink
     */
    select?: EventInviteLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteLinkInclude<ExtArgs> | null
    /**
     * Filter, which EventInviteLink to fetch.
     */
    where?: EventInviteLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventInviteLinks to fetch.
     */
    orderBy?: EventInviteLinkOrderByWithRelationInput | EventInviteLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventInviteLinks.
     */
    cursor?: EventInviteLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventInviteLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventInviteLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventInviteLinks.
     */
    distinct?: EventInviteLinkScalarFieldEnum | EventInviteLinkScalarFieldEnum[]
  }

  /**
   * EventInviteLink findFirstOrThrow
   */
  export type EventInviteLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInviteLink
     */
    select?: EventInviteLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteLinkInclude<ExtArgs> | null
    /**
     * Filter, which EventInviteLink to fetch.
     */
    where?: EventInviteLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventInviteLinks to fetch.
     */
    orderBy?: EventInviteLinkOrderByWithRelationInput | EventInviteLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventInviteLinks.
     */
    cursor?: EventInviteLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventInviteLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventInviteLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventInviteLinks.
     */
    distinct?: EventInviteLinkScalarFieldEnum | EventInviteLinkScalarFieldEnum[]
  }

  /**
   * EventInviteLink findMany
   */
  export type EventInviteLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInviteLink
     */
    select?: EventInviteLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteLinkInclude<ExtArgs> | null
    /**
     * Filter, which EventInviteLinks to fetch.
     */
    where?: EventInviteLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventInviteLinks to fetch.
     */
    orderBy?: EventInviteLinkOrderByWithRelationInput | EventInviteLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventInviteLinks.
     */
    cursor?: EventInviteLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventInviteLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventInviteLinks.
     */
    skip?: number
    distinct?: EventInviteLinkScalarFieldEnum | EventInviteLinkScalarFieldEnum[]
  }

  /**
   * EventInviteLink create
   */
  export type EventInviteLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInviteLink
     */
    select?: EventInviteLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a EventInviteLink.
     */
    data: XOR<EventInviteLinkCreateInput, EventInviteLinkUncheckedCreateInput>
  }

  /**
   * EventInviteLink createMany
   */
  export type EventInviteLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventInviteLinks.
     */
    data: EventInviteLinkCreateManyInput | EventInviteLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventInviteLink createManyAndReturn
   */
  export type EventInviteLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInviteLink
     */
    select?: EventInviteLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventInviteLinks.
     */
    data: EventInviteLinkCreateManyInput | EventInviteLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventInviteLink update
   */
  export type EventInviteLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInviteLink
     */
    select?: EventInviteLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a EventInviteLink.
     */
    data: XOR<EventInviteLinkUpdateInput, EventInviteLinkUncheckedUpdateInput>
    /**
     * Choose, which EventInviteLink to update.
     */
    where: EventInviteLinkWhereUniqueInput
  }

  /**
   * EventInviteLink updateMany
   */
  export type EventInviteLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventInviteLinks.
     */
    data: XOR<EventInviteLinkUpdateManyMutationInput, EventInviteLinkUncheckedUpdateManyInput>
    /**
     * Filter which EventInviteLinks to update
     */
    where?: EventInviteLinkWhereInput
  }

  /**
   * EventInviteLink upsert
   */
  export type EventInviteLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInviteLink
     */
    select?: EventInviteLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the EventInviteLink to update in case it exists.
     */
    where: EventInviteLinkWhereUniqueInput
    /**
     * In case the EventInviteLink found by the `where` argument doesn't exist, create a new EventInviteLink with this data.
     */
    create: XOR<EventInviteLinkCreateInput, EventInviteLinkUncheckedCreateInput>
    /**
     * In case the EventInviteLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventInviteLinkUpdateInput, EventInviteLinkUncheckedUpdateInput>
  }

  /**
   * EventInviteLink delete
   */
  export type EventInviteLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInviteLink
     */
    select?: EventInviteLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteLinkInclude<ExtArgs> | null
    /**
     * Filter which EventInviteLink to delete.
     */
    where: EventInviteLinkWhereUniqueInput
  }

  /**
   * EventInviteLink deleteMany
   */
  export type EventInviteLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventInviteLinks to delete
     */
    where?: EventInviteLinkWhereInput
  }

  /**
   * EventInviteLink without action
   */
  export type EventInviteLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventInviteLink
     */
    select?: EventInviteLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInviteLinkInclude<ExtArgs> | null
  }


  /**
   * Model Registration
   */

  export type AggregateRegistration = {
    _count: RegistrationCountAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  export type RegistrationMinAggregateOutputType = {
    id: string | null
    ticketNumber: string | null
    attendanceStatus: $Enums.AttendanceStatus | null
    eventId: string | null
    userId: string | null
    registeredAt: Date | null
  }

  export type RegistrationMaxAggregateOutputType = {
    id: string | null
    ticketNumber: string | null
    attendanceStatus: $Enums.AttendanceStatus | null
    eventId: string | null
    userId: string | null
    registeredAt: Date | null
  }

  export type RegistrationCountAggregateOutputType = {
    id: number
    ticketNumber: number
    attendanceStatus: number
    eventId: number
    userId: number
    registeredAt: number
    _all: number
  }


  export type RegistrationMinAggregateInputType = {
    id?: true
    ticketNumber?: true
    attendanceStatus?: true
    eventId?: true
    userId?: true
    registeredAt?: true
  }

  export type RegistrationMaxAggregateInputType = {
    id?: true
    ticketNumber?: true
    attendanceStatus?: true
    eventId?: true
    userId?: true
    registeredAt?: true
  }

  export type RegistrationCountAggregateInputType = {
    id?: true
    ticketNumber?: true
    attendanceStatus?: true
    eventId?: true
    userId?: true
    registeredAt?: true
    _all?: true
  }

  export type RegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registration to aggregate.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registrations
    **/
    _count?: true | RegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationMaxAggregateInputType
  }

  export type GetRegistrationAggregateType<T extends RegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistration[P]>
      : GetScalarType<T[P], AggregateRegistration[P]>
  }




  export type RegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithAggregationInput | RegistrationOrderByWithAggregationInput[]
    by: RegistrationScalarFieldEnum[] | RegistrationScalarFieldEnum
    having?: RegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationCountAggregateInputType | true
    _min?: RegistrationMinAggregateInputType
    _max?: RegistrationMaxAggregateInputType
  }

  export type RegistrationGroupByOutputType = {
    id: string
    ticketNumber: string
    attendanceStatus: $Enums.AttendanceStatus
    eventId: string
    userId: string
    registeredAt: Date
    _count: RegistrationCountAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  type GetRegistrationGroupByPayload<T extends RegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNumber?: boolean
    attendanceStatus?: boolean
    eventId?: boolean
    userId?: boolean
    registeredAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNumber?: boolean
    attendanceStatus?: boolean
    eventId?: boolean
    userId?: boolean
    registeredAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectScalar = {
    id?: boolean
    ticketNumber?: boolean
    attendanceStatus?: boolean
    eventId?: boolean
    userId?: boolean
    registeredAt?: boolean
  }

  export type RegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registration"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketNumber: string
      attendanceStatus: $Enums.AttendanceStatus
      eventId: string
      userId: string
      registeredAt: Date
    }, ExtArgs["result"]["registration"]>
    composites: {}
  }

  type RegistrationGetPayload<S extends boolean | null | undefined | RegistrationDefaultArgs> = $Result.GetResult<Prisma.$RegistrationPayload, S>

  type RegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegistrationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegistrationCountAggregateInputType | true
    }

  export interface RegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registration'], meta: { name: 'Registration' } }
    /**
     * Find zero or one Registration that matches the filter.
     * @param {RegistrationFindUniqueArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationFindUniqueArgs>(args: SelectSubset<T, RegistrationFindUniqueArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Registration that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RegistrationFindUniqueOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Registration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationFindFirstArgs>(args?: SelectSubset<T, RegistrationFindFirstArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Registration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registrations
     * const registrations = await prisma.registration.findMany()
     * 
     * // Get first 10 Registrations
     * const registrations = await prisma.registration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationWithIdOnly = await prisma.registration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationFindManyArgs>(args?: SelectSubset<T, RegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Registration.
     * @param {RegistrationCreateArgs} args - Arguments to create a Registration.
     * @example
     * // Create one Registration
     * const Registration = await prisma.registration.create({
     *   data: {
     *     // ... data to create a Registration
     *   }
     * })
     * 
     */
    create<T extends RegistrationCreateArgs>(args: SelectSubset<T, RegistrationCreateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Registrations.
     * @param {RegistrationCreateManyArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registration = await prisma.registration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationCreateManyArgs>(args?: SelectSubset<T, RegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registrations and returns the data saved in the database.
     * @param {RegistrationCreateManyAndReturnArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registration = await prisma.registration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registrations and only return the `id`
     * const registrationWithIdOnly = await prisma.registration.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Registration.
     * @param {RegistrationDeleteArgs} args - Arguments to delete one Registration.
     * @example
     * // Delete one Registration
     * const Registration = await prisma.registration.delete({
     *   where: {
     *     // ... filter to delete one Registration
     *   }
     * })
     * 
     */
    delete<T extends RegistrationDeleteArgs>(args: SelectSubset<T, RegistrationDeleteArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Registration.
     * @param {RegistrationUpdateArgs} args - Arguments to update one Registration.
     * @example
     * // Update one Registration
     * const registration = await prisma.registration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationUpdateArgs>(args: SelectSubset<T, RegistrationUpdateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Registrations.
     * @param {RegistrationDeleteManyArgs} args - Arguments to filter Registrations to delete.
     * @example
     * // Delete a few Registrations
     * const { count } = await prisma.registration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationDeleteManyArgs>(args?: SelectSubset<T, RegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registrations
     * const registration = await prisma.registration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationUpdateManyArgs>(args: SelectSubset<T, RegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Registration.
     * @param {RegistrationUpsertArgs} args - Arguments to update or create a Registration.
     * @example
     * // Update or create a Registration
     * const registration = await prisma.registration.upsert({
     *   create: {
     *     // ... data to create a Registration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registration we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationUpsertArgs>(args: SelectSubset<T, RegistrationUpsertArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCountArgs} args - Arguments to filter Registrations to count.
     * @example
     * // Count the number of Registrations
     * const count = await prisma.registration.count({
     *   where: {
     *     // ... the filter for the Registrations we want to count
     *   }
     * })
    **/
    count<T extends RegistrationCountArgs>(
      args?: Subset<T, RegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationAggregateArgs>(args: Subset<T, RegistrationAggregateArgs>): Prisma.PrismaPromise<GetRegistrationAggregateType<T>>

    /**
     * Group by Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationGroupByArgs} args - Group by arguments.
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
      T extends RegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registration model
   */
  readonly fields: RegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Registration model
   */ 
  interface RegistrationFieldRefs {
    readonly id: FieldRef<"Registration", 'String'>
    readonly ticketNumber: FieldRef<"Registration", 'String'>
    readonly attendanceStatus: FieldRef<"Registration", 'AttendanceStatus'>
    readonly eventId: FieldRef<"Registration", 'String'>
    readonly userId: FieldRef<"Registration", 'String'>
    readonly registeredAt: FieldRef<"Registration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Registration findUnique
   */
  export type RegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findUniqueOrThrow
   */
  export type RegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findFirst
   */
  export type RegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findFirstOrThrow
   */
  export type RegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findMany
   */
  export type RegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration create
   */
  export type RegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Registration.
     */
    data: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
  }

  /**
   * Registration createMany
   */
  export type RegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationCreateManyInput | RegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registration createManyAndReturn
   */
  export type RegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationCreateManyInput | RegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registration update
   */
  export type RegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Registration.
     */
    data: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
    /**
     * Choose, which Registration to update.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration updateMany
   */
  export type RegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationWhereInput
  }

  /**
   * Registration upsert
   */
  export type RegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Registration to update in case it exists.
     */
    where: RegistrationWhereUniqueInput
    /**
     * In case the Registration found by the `where` argument doesn't exist, create a new Registration with this data.
     */
    create: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
    /**
     * In case the Registration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
  }

  /**
   * Registration delete
   */
  export type RegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter which Registration to delete.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration deleteMany
   */
  export type RegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registrations to delete
     */
    where?: RegistrationWhereInput
  }

  /**
   * Registration without action
   */
  export type RegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    deadline: Date | null
    status: $Enums.TaskStatus | null
    eventId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    deadline: Date | null
    status: $Enums.TaskStatus | null
    eventId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    deadline: number
    status: number
    eventId: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    status?: true
    eventId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    status?: true
    eventId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    deadline?: true
    status?: true
    eventId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    deadline: Date | null
    status: $Enums.TaskStatus
    eventId: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    status?: boolean
    eventId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | Task$assignmentsArgs<ExtArgs>
    updates?: boolean | Task$updatesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    status?: boolean
    eventId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    deadline?: boolean
    status?: boolean
    eventId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | Task$assignmentsArgs<ExtArgs>
    updates?: boolean | Task$updatesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      assignments: Prisma.$TaskAssignmentPayload<ExtArgs>[]
      updates: Prisma.$TaskUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      deadline: Date | null
      status: $Enums.TaskStatus
      eventId: string
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    assignments<T extends Task$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Task$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany"> | Null>
    updates<T extends Task$updatesArgs<ExtArgs> = {}>(args?: Subset<T, Task$updatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskUpdatePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly deadline: FieldRef<"Task", 'DateTime'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly eventId: FieldRef<"Task", 'String'>
    readonly createdById: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.assignments
   */
  export type Task$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    where?: TaskAssignmentWhereInput
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    cursor?: TaskAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * Task.updates
   */
  export type Task$updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateInclude<ExtArgs> | null
    where?: TaskUpdateWhereInput
    orderBy?: TaskUpdateOrderByWithRelationInput | TaskUpdateOrderByWithRelationInput[]
    cursor?: TaskUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskUpdateScalarFieldEnum | TaskUpdateScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskAssignment
   */

  export type AggregateTaskAssignment = {
    _count: TaskAssignmentCountAggregateOutputType | null
    _min: TaskAssignmentMinAggregateOutputType | null
    _max: TaskAssignmentMaxAggregateOutputType | null
  }

  export type TaskAssignmentMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    assignedAt: Date | null
  }

  export type TaskAssignmentMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    assignedAt: Date | null
  }

  export type TaskAssignmentCountAggregateOutputType = {
    id: number
    taskId: number
    userId: number
    assignedAt: number
    _all: number
  }


  export type TaskAssignmentMinAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    assignedAt?: true
  }

  export type TaskAssignmentMaxAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    assignedAt?: true
  }

  export type TaskAssignmentCountAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    assignedAt?: true
    _all?: true
  }

  export type TaskAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskAssignment to aggregate.
     */
    where?: TaskAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAssignments to fetch.
     */
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskAssignments
    **/
    _count?: true | TaskAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskAssignmentMaxAggregateInputType
  }

  export type GetTaskAssignmentAggregateType<T extends TaskAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskAssignment[P]>
      : GetScalarType<T[P], AggregateTaskAssignment[P]>
  }




  export type TaskAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskAssignmentWhereInput
    orderBy?: TaskAssignmentOrderByWithAggregationInput | TaskAssignmentOrderByWithAggregationInput[]
    by: TaskAssignmentScalarFieldEnum[] | TaskAssignmentScalarFieldEnum
    having?: TaskAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskAssignmentCountAggregateInputType | true
    _min?: TaskAssignmentMinAggregateInputType
    _max?: TaskAssignmentMaxAggregateInputType
  }

  export type TaskAssignmentGroupByOutputType = {
    id: string
    taskId: string
    userId: string
    assignedAt: Date
    _count: TaskAssignmentCountAggregateOutputType | null
    _min: TaskAssignmentMinAggregateOutputType | null
    _max: TaskAssignmentMaxAggregateOutputType | null
  }

  type GetTaskAssignmentGroupByPayload<T extends TaskAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], TaskAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type TaskAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    assignedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskAssignment"]>

  export type TaskAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    assignedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskAssignment"]>

  export type TaskAssignmentSelectScalar = {
    id?: boolean
    taskId?: boolean
    userId?: boolean
    assignedAt?: boolean
  }

  export type TaskAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskAssignment"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      userId: string
      assignedAt: Date
    }, ExtArgs["result"]["taskAssignment"]>
    composites: {}
  }

  type TaskAssignmentGetPayload<S extends boolean | null | undefined | TaskAssignmentDefaultArgs> = $Result.GetResult<Prisma.$TaskAssignmentPayload, S>

  type TaskAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskAssignmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskAssignmentCountAggregateInputType | true
    }

  export interface TaskAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskAssignment'], meta: { name: 'TaskAssignment' } }
    /**
     * Find zero or one TaskAssignment that matches the filter.
     * @param {TaskAssignmentFindUniqueArgs} args - Arguments to find a TaskAssignment
     * @example
     * // Get one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskAssignmentFindUniqueArgs>(args: SelectSubset<T, TaskAssignmentFindUniqueArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TaskAssignment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskAssignmentFindUniqueOrThrowArgs} args - Arguments to find a TaskAssignment
     * @example
     * // Get one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TaskAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentFindFirstArgs} args - Arguments to find a TaskAssignment
     * @example
     * // Get one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskAssignmentFindFirstArgs>(args?: SelectSubset<T, TaskAssignmentFindFirstArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TaskAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentFindFirstOrThrowArgs} args - Arguments to find a TaskAssignment
     * @example
     * // Get one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TaskAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskAssignments
     * const taskAssignments = await prisma.taskAssignment.findMany()
     * 
     * // Get first 10 TaskAssignments
     * const taskAssignments = await prisma.taskAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskAssignmentWithIdOnly = await prisma.taskAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskAssignmentFindManyArgs>(args?: SelectSubset<T, TaskAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TaskAssignment.
     * @param {TaskAssignmentCreateArgs} args - Arguments to create a TaskAssignment.
     * @example
     * // Create one TaskAssignment
     * const TaskAssignment = await prisma.taskAssignment.create({
     *   data: {
     *     // ... data to create a TaskAssignment
     *   }
     * })
     * 
     */
    create<T extends TaskAssignmentCreateArgs>(args: SelectSubset<T, TaskAssignmentCreateArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TaskAssignments.
     * @param {TaskAssignmentCreateManyArgs} args - Arguments to create many TaskAssignments.
     * @example
     * // Create many TaskAssignments
     * const taskAssignment = await prisma.taskAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskAssignmentCreateManyArgs>(args?: SelectSubset<T, TaskAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskAssignments and returns the data saved in the database.
     * @param {TaskAssignmentCreateManyAndReturnArgs} args - Arguments to create many TaskAssignments.
     * @example
     * // Create many TaskAssignments
     * const taskAssignment = await prisma.taskAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskAssignments and only return the `id`
     * const taskAssignmentWithIdOnly = await prisma.taskAssignment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TaskAssignment.
     * @param {TaskAssignmentDeleteArgs} args - Arguments to delete one TaskAssignment.
     * @example
     * // Delete one TaskAssignment
     * const TaskAssignment = await prisma.taskAssignment.delete({
     *   where: {
     *     // ... filter to delete one TaskAssignment
     *   }
     * })
     * 
     */
    delete<T extends TaskAssignmentDeleteArgs>(args: SelectSubset<T, TaskAssignmentDeleteArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TaskAssignment.
     * @param {TaskAssignmentUpdateArgs} args - Arguments to update one TaskAssignment.
     * @example
     * // Update one TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskAssignmentUpdateArgs>(args: SelectSubset<T, TaskAssignmentUpdateArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TaskAssignments.
     * @param {TaskAssignmentDeleteManyArgs} args - Arguments to filter TaskAssignments to delete.
     * @example
     * // Delete a few TaskAssignments
     * const { count } = await prisma.taskAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskAssignmentDeleteManyArgs>(args?: SelectSubset<T, TaskAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskAssignments
     * const taskAssignment = await prisma.taskAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskAssignmentUpdateManyArgs>(args: SelectSubset<T, TaskAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskAssignment.
     * @param {TaskAssignmentUpsertArgs} args - Arguments to update or create a TaskAssignment.
     * @example
     * // Update or create a TaskAssignment
     * const taskAssignment = await prisma.taskAssignment.upsert({
     *   create: {
     *     // ... data to create a TaskAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskAssignment we want to update
     *   }
     * })
     */
    upsert<T extends TaskAssignmentUpsertArgs>(args: SelectSubset<T, TaskAssignmentUpsertArgs<ExtArgs>>): Prisma__TaskAssignmentClient<$Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TaskAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentCountArgs} args - Arguments to filter TaskAssignments to count.
     * @example
     * // Count the number of TaskAssignments
     * const count = await prisma.taskAssignment.count({
     *   where: {
     *     // ... the filter for the TaskAssignments we want to count
     *   }
     * })
    **/
    count<T extends TaskAssignmentCountArgs>(
      args?: Subset<T, TaskAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAssignmentAggregateArgs>(args: Subset<T, TaskAssignmentAggregateArgs>): Prisma.PrismaPromise<GetTaskAssignmentAggregateType<T>>

    /**
     * Group by TaskAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAssignmentGroupByArgs} args - Group by arguments.
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
      T extends TaskAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: TaskAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskAssignment model
   */
  readonly fields: TaskAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskAssignment model
   */ 
  interface TaskAssignmentFieldRefs {
    readonly id: FieldRef<"TaskAssignment", 'String'>
    readonly taskId: FieldRef<"TaskAssignment", 'String'>
    readonly userId: FieldRef<"TaskAssignment", 'String'>
    readonly assignedAt: FieldRef<"TaskAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskAssignment findUnique
   */
  export type TaskAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignment to fetch.
     */
    where: TaskAssignmentWhereUniqueInput
  }

  /**
   * TaskAssignment findUniqueOrThrow
   */
  export type TaskAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignment to fetch.
     */
    where: TaskAssignmentWhereUniqueInput
  }

  /**
   * TaskAssignment findFirst
   */
  export type TaskAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignment to fetch.
     */
    where?: TaskAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAssignments to fetch.
     */
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskAssignments.
     */
    cursor?: TaskAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskAssignments.
     */
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * TaskAssignment findFirstOrThrow
   */
  export type TaskAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignment to fetch.
     */
    where?: TaskAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAssignments to fetch.
     */
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskAssignments.
     */
    cursor?: TaskAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskAssignments.
     */
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * TaskAssignment findMany
   */
  export type TaskAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAssignments to fetch.
     */
    where?: TaskAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAssignments to fetch.
     */
    orderBy?: TaskAssignmentOrderByWithRelationInput | TaskAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskAssignments.
     */
    cursor?: TaskAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAssignments.
     */
    skip?: number
    distinct?: TaskAssignmentScalarFieldEnum | TaskAssignmentScalarFieldEnum[]
  }

  /**
   * TaskAssignment create
   */
  export type TaskAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskAssignment.
     */
    data: XOR<TaskAssignmentCreateInput, TaskAssignmentUncheckedCreateInput>
  }

  /**
   * TaskAssignment createMany
   */
  export type TaskAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskAssignments.
     */
    data: TaskAssignmentCreateManyInput | TaskAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskAssignment createManyAndReturn
   */
  export type TaskAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TaskAssignments.
     */
    data: TaskAssignmentCreateManyInput | TaskAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskAssignment update
   */
  export type TaskAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskAssignment.
     */
    data: XOR<TaskAssignmentUpdateInput, TaskAssignmentUncheckedUpdateInput>
    /**
     * Choose, which TaskAssignment to update.
     */
    where: TaskAssignmentWhereUniqueInput
  }

  /**
   * TaskAssignment updateMany
   */
  export type TaskAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskAssignments.
     */
    data: XOR<TaskAssignmentUpdateManyMutationInput, TaskAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TaskAssignments to update
     */
    where?: TaskAssignmentWhereInput
  }

  /**
   * TaskAssignment upsert
   */
  export type TaskAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskAssignment to update in case it exists.
     */
    where: TaskAssignmentWhereUniqueInput
    /**
     * In case the TaskAssignment found by the `where` argument doesn't exist, create a new TaskAssignment with this data.
     */
    create: XOR<TaskAssignmentCreateInput, TaskAssignmentUncheckedCreateInput>
    /**
     * In case the TaskAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskAssignmentUpdateInput, TaskAssignmentUncheckedUpdateInput>
  }

  /**
   * TaskAssignment delete
   */
  export type TaskAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
    /**
     * Filter which TaskAssignment to delete.
     */
    where: TaskAssignmentWhereUniqueInput
  }

  /**
   * TaskAssignment deleteMany
   */
  export type TaskAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskAssignments to delete
     */
    where?: TaskAssignmentWhereInput
  }

  /**
   * TaskAssignment without action
   */
  export type TaskAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAssignment
     */
    select?: TaskAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model TaskUpdate
   */

  export type AggregateTaskUpdate = {
    _count: TaskUpdateCountAggregateOutputType | null
    _min: TaskUpdateMinAggregateOutputType | null
    _max: TaskUpdateMaxAggregateOutputType | null
  }

  export type TaskUpdateMinAggregateOutputType = {
    id: string | null
    message: string | null
    taskId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type TaskUpdateMaxAggregateOutputType = {
    id: string | null
    message: string | null
    taskId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type TaskUpdateCountAggregateOutputType = {
    id: number
    message: number
    taskId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type TaskUpdateMinAggregateInputType = {
    id?: true
    message?: true
    taskId?: true
    userId?: true
    createdAt?: true
  }

  export type TaskUpdateMaxAggregateInputType = {
    id?: true
    message?: true
    taskId?: true
    userId?: true
    createdAt?: true
  }

  export type TaskUpdateCountAggregateInputType = {
    id?: true
    message?: true
    taskId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type TaskUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskUpdate to aggregate.
     */
    where?: TaskUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskUpdates to fetch.
     */
    orderBy?: TaskUpdateOrderByWithRelationInput | TaskUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskUpdates
    **/
    _count?: true | TaskUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskUpdateMaxAggregateInputType
  }

  export type GetTaskUpdateAggregateType<T extends TaskUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskUpdate[P]>
      : GetScalarType<T[P], AggregateTaskUpdate[P]>
  }




  export type TaskUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskUpdateWhereInput
    orderBy?: TaskUpdateOrderByWithAggregationInput | TaskUpdateOrderByWithAggregationInput[]
    by: TaskUpdateScalarFieldEnum[] | TaskUpdateScalarFieldEnum
    having?: TaskUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskUpdateCountAggregateInputType | true
    _min?: TaskUpdateMinAggregateInputType
    _max?: TaskUpdateMaxAggregateInputType
  }

  export type TaskUpdateGroupByOutputType = {
    id: string
    message: string
    taskId: string
    userId: string
    createdAt: Date
    _count: TaskUpdateCountAggregateOutputType | null
    _min: TaskUpdateMinAggregateOutputType | null
    _max: TaskUpdateMaxAggregateOutputType | null
  }

  type GetTaskUpdateGroupByPayload<T extends TaskUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], TaskUpdateGroupByOutputType[P]>
        }
      >
    >


  export type TaskUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    taskId?: boolean
    userId?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskUpdate"]>

  export type TaskUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    taskId?: boolean
    userId?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskUpdate"]>

  export type TaskUpdateSelectScalar = {
    id?: boolean
    message?: boolean
    taskId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type TaskUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskUpdate"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      taskId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["taskUpdate"]>
    composites: {}
  }

  type TaskUpdateGetPayload<S extends boolean | null | undefined | TaskUpdateDefaultArgs> = $Result.GetResult<Prisma.$TaskUpdatePayload, S>

  type TaskUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskUpdateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskUpdateCountAggregateInputType | true
    }

  export interface TaskUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskUpdate'], meta: { name: 'TaskUpdate' } }
    /**
     * Find zero or one TaskUpdate that matches the filter.
     * @param {TaskUpdateFindUniqueArgs} args - Arguments to find a TaskUpdate
     * @example
     * // Get one TaskUpdate
     * const taskUpdate = await prisma.taskUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskUpdateFindUniqueArgs>(args: SelectSubset<T, TaskUpdateFindUniqueArgs<ExtArgs>>): Prisma__TaskUpdateClient<$Result.GetResult<Prisma.$TaskUpdatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TaskUpdate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskUpdateFindUniqueOrThrowArgs} args - Arguments to find a TaskUpdate
     * @example
     * // Get one TaskUpdate
     * const taskUpdate = await prisma.taskUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskUpdateClient<$Result.GetResult<Prisma.$TaskUpdatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TaskUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateFindFirstArgs} args - Arguments to find a TaskUpdate
     * @example
     * // Get one TaskUpdate
     * const taskUpdate = await prisma.taskUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskUpdateFindFirstArgs>(args?: SelectSubset<T, TaskUpdateFindFirstArgs<ExtArgs>>): Prisma__TaskUpdateClient<$Result.GetResult<Prisma.$TaskUpdatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TaskUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateFindFirstOrThrowArgs} args - Arguments to find a TaskUpdate
     * @example
     * // Get one TaskUpdate
     * const taskUpdate = await prisma.taskUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskUpdateClient<$Result.GetResult<Prisma.$TaskUpdatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TaskUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskUpdates
     * const taskUpdates = await prisma.taskUpdate.findMany()
     * 
     * // Get first 10 TaskUpdates
     * const taskUpdates = await prisma.taskUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskUpdateWithIdOnly = await prisma.taskUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskUpdateFindManyArgs>(args?: SelectSubset<T, TaskUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskUpdatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TaskUpdate.
     * @param {TaskUpdateCreateArgs} args - Arguments to create a TaskUpdate.
     * @example
     * // Create one TaskUpdate
     * const TaskUpdate = await prisma.taskUpdate.create({
     *   data: {
     *     // ... data to create a TaskUpdate
     *   }
     * })
     * 
     */
    create<T extends TaskUpdateCreateArgs>(args: SelectSubset<T, TaskUpdateCreateArgs<ExtArgs>>): Prisma__TaskUpdateClient<$Result.GetResult<Prisma.$TaskUpdatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TaskUpdates.
     * @param {TaskUpdateCreateManyArgs} args - Arguments to create many TaskUpdates.
     * @example
     * // Create many TaskUpdates
     * const taskUpdate = await prisma.taskUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskUpdateCreateManyArgs>(args?: SelectSubset<T, TaskUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskUpdates and returns the data saved in the database.
     * @param {TaskUpdateCreateManyAndReturnArgs} args - Arguments to create many TaskUpdates.
     * @example
     * // Create many TaskUpdates
     * const taskUpdate = await prisma.taskUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskUpdates and only return the `id`
     * const taskUpdateWithIdOnly = await prisma.taskUpdate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskUpdatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TaskUpdate.
     * @param {TaskUpdateDeleteArgs} args - Arguments to delete one TaskUpdate.
     * @example
     * // Delete one TaskUpdate
     * const TaskUpdate = await prisma.taskUpdate.delete({
     *   where: {
     *     // ... filter to delete one TaskUpdate
     *   }
     * })
     * 
     */
    delete<T extends TaskUpdateDeleteArgs>(args: SelectSubset<T, TaskUpdateDeleteArgs<ExtArgs>>): Prisma__TaskUpdateClient<$Result.GetResult<Prisma.$TaskUpdatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TaskUpdate.
     * @param {TaskUpdateUpdateArgs} args - Arguments to update one TaskUpdate.
     * @example
     * // Update one TaskUpdate
     * const taskUpdate = await prisma.taskUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateUpdateArgs>(args: SelectSubset<T, TaskUpdateUpdateArgs<ExtArgs>>): Prisma__TaskUpdateClient<$Result.GetResult<Prisma.$TaskUpdatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TaskUpdates.
     * @param {TaskUpdateDeleteManyArgs} args - Arguments to filter TaskUpdates to delete.
     * @example
     * // Delete a few TaskUpdates
     * const { count } = await prisma.taskUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskUpdateDeleteManyArgs>(args?: SelectSubset<T, TaskUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskUpdates
     * const taskUpdate = await prisma.taskUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateUpdateManyArgs>(args: SelectSubset<T, TaskUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskUpdate.
     * @param {TaskUpdateUpsertArgs} args - Arguments to update or create a TaskUpdate.
     * @example
     * // Update or create a TaskUpdate
     * const taskUpdate = await prisma.taskUpdate.upsert({
     *   create: {
     *     // ... data to create a TaskUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskUpdate we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpdateUpsertArgs>(args: SelectSubset<T, TaskUpdateUpsertArgs<ExtArgs>>): Prisma__TaskUpdateClient<$Result.GetResult<Prisma.$TaskUpdatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TaskUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateCountArgs} args - Arguments to filter TaskUpdates to count.
     * @example
     * // Count the number of TaskUpdates
     * const count = await prisma.taskUpdate.count({
     *   where: {
     *     // ... the filter for the TaskUpdates we want to count
     *   }
     * })
    **/
    count<T extends TaskUpdateCountArgs>(
      args?: Subset<T, TaskUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskUpdateAggregateArgs>(args: Subset<T, TaskUpdateAggregateArgs>): Prisma.PrismaPromise<GetTaskUpdateAggregateType<T>>

    /**
     * Group by TaskUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateGroupByArgs} args - Group by arguments.
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
      T extends TaskUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskUpdateGroupByArgs['orderBy'] }
        : { orderBy?: TaskUpdateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskUpdate model
   */
  readonly fields: TaskUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskUpdate model
   */ 
  interface TaskUpdateFieldRefs {
    readonly id: FieldRef<"TaskUpdate", 'String'>
    readonly message: FieldRef<"TaskUpdate", 'String'>
    readonly taskId: FieldRef<"TaskUpdate", 'String'>
    readonly userId: FieldRef<"TaskUpdate", 'String'>
    readonly createdAt: FieldRef<"TaskUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskUpdate findUnique
   */
  export type TaskUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TaskUpdate to fetch.
     */
    where: TaskUpdateWhereUniqueInput
  }

  /**
   * TaskUpdate findUniqueOrThrow
   */
  export type TaskUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TaskUpdate to fetch.
     */
    where: TaskUpdateWhereUniqueInput
  }

  /**
   * TaskUpdate findFirst
   */
  export type TaskUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TaskUpdate to fetch.
     */
    where?: TaskUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskUpdates to fetch.
     */
    orderBy?: TaskUpdateOrderByWithRelationInput | TaskUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskUpdates.
     */
    cursor?: TaskUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskUpdates.
     */
    distinct?: TaskUpdateScalarFieldEnum | TaskUpdateScalarFieldEnum[]
  }

  /**
   * TaskUpdate findFirstOrThrow
   */
  export type TaskUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TaskUpdate to fetch.
     */
    where?: TaskUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskUpdates to fetch.
     */
    orderBy?: TaskUpdateOrderByWithRelationInput | TaskUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskUpdates.
     */
    cursor?: TaskUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskUpdates.
     */
    distinct?: TaskUpdateScalarFieldEnum | TaskUpdateScalarFieldEnum[]
  }

  /**
   * TaskUpdate findMany
   */
  export type TaskUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TaskUpdates to fetch.
     */
    where?: TaskUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskUpdates to fetch.
     */
    orderBy?: TaskUpdateOrderByWithRelationInput | TaskUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskUpdates.
     */
    cursor?: TaskUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskUpdates.
     */
    skip?: number
    distinct?: TaskUpdateScalarFieldEnum | TaskUpdateScalarFieldEnum[]
  }

  /**
   * TaskUpdate create
   */
  export type TaskUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskUpdate.
     */
    data: XOR<TaskUpdateCreateInput, TaskUpdateUncheckedCreateInput>
  }

  /**
   * TaskUpdate createMany
   */
  export type TaskUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskUpdates.
     */
    data: TaskUpdateCreateManyInput | TaskUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskUpdate createManyAndReturn
   */
  export type TaskUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TaskUpdates.
     */
    data: TaskUpdateCreateManyInput | TaskUpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskUpdate update
   */
  export type TaskUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskUpdate.
     */
    data: XOR<TaskUpdateUpdateInput, TaskUpdateUncheckedUpdateInput>
    /**
     * Choose, which TaskUpdate to update.
     */
    where: TaskUpdateWhereUniqueInput
  }

  /**
   * TaskUpdate updateMany
   */
  export type TaskUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskUpdates.
     */
    data: XOR<TaskUpdateUpdateManyMutationInput, TaskUpdateUncheckedUpdateManyInput>
    /**
     * Filter which TaskUpdates to update
     */
    where?: TaskUpdateWhereInput
  }

  /**
   * TaskUpdate upsert
   */
  export type TaskUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskUpdate to update in case it exists.
     */
    where: TaskUpdateWhereUniqueInput
    /**
     * In case the TaskUpdate found by the `where` argument doesn't exist, create a new TaskUpdate with this data.
     */
    create: XOR<TaskUpdateCreateInput, TaskUpdateUncheckedCreateInput>
    /**
     * In case the TaskUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateUpdateInput, TaskUpdateUncheckedUpdateInput>
  }

  /**
   * TaskUpdate delete
   */
  export type TaskUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateInclude<ExtArgs> | null
    /**
     * Filter which TaskUpdate to delete.
     */
    where: TaskUpdateWhereUniqueInput
  }

  /**
   * TaskUpdate deleteMany
   */
  export type TaskUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskUpdates to delete
     */
    where?: TaskUpdateWhereInput
  }

  /**
   * TaskUpdate without action
   */
  export type TaskUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskUpdate
     */
    select?: TaskUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUpdateInclude<ExtArgs> | null
  }


  /**
   * Model EventGoal
   */

  export type AggregateEventGoal = {
    _count: EventGoalCountAggregateOutputType | null
    _min: EventGoalMinAggregateOutputType | null
    _max: EventGoalMaxAggregateOutputType | null
  }

  export type EventGoalMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    eventId: string | null
    createdAt: Date | null
  }

  export type EventGoalMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    eventId: string | null
    createdAt: Date | null
  }

  export type EventGoalCountAggregateOutputType = {
    id: number
    title: number
    description: number
    eventId: number
    createdAt: number
    _all: number
  }


  export type EventGoalMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    eventId?: true
    createdAt?: true
  }

  export type EventGoalMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    eventId?: true
    createdAt?: true
  }

  export type EventGoalCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    eventId?: true
    createdAt?: true
    _all?: true
  }

  export type EventGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventGoal to aggregate.
     */
    where?: EventGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventGoals to fetch.
     */
    orderBy?: EventGoalOrderByWithRelationInput | EventGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventGoals
    **/
    _count?: true | EventGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventGoalMaxAggregateInputType
  }

  export type GetEventGoalAggregateType<T extends EventGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateEventGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventGoal[P]>
      : GetScalarType<T[P], AggregateEventGoal[P]>
  }




  export type EventGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventGoalWhereInput
    orderBy?: EventGoalOrderByWithAggregationInput | EventGoalOrderByWithAggregationInput[]
    by: EventGoalScalarFieldEnum[] | EventGoalScalarFieldEnum
    having?: EventGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventGoalCountAggregateInputType | true
    _min?: EventGoalMinAggregateInputType
    _max?: EventGoalMaxAggregateInputType
  }

  export type EventGoalGroupByOutputType = {
    id: string
    title: string
    description: string | null
    eventId: string
    createdAt: Date
    _count: EventGoalCountAggregateOutputType | null
    _min: EventGoalMinAggregateOutputType | null
    _max: EventGoalMaxAggregateOutputType | null
  }

  type GetEventGoalGroupByPayload<T extends EventGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGoalGroupByOutputType[P]>
            : GetScalarType<T[P], EventGoalGroupByOutputType[P]>
        }
      >
    >


  export type EventGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    eventId?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventGoal"]>

  export type EventGoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    eventId?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventGoal"]>

  export type EventGoalSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    eventId?: boolean
    createdAt?: boolean
  }

  export type EventGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventGoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventGoal"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      eventId: string
      createdAt: Date
    }, ExtArgs["result"]["eventGoal"]>
    composites: {}
  }

  type EventGoalGetPayload<S extends boolean | null | undefined | EventGoalDefaultArgs> = $Result.GetResult<Prisma.$EventGoalPayload, S>

  type EventGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventGoalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventGoalCountAggregateInputType | true
    }

  export interface EventGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventGoal'], meta: { name: 'EventGoal' } }
    /**
     * Find zero or one EventGoal that matches the filter.
     * @param {EventGoalFindUniqueArgs} args - Arguments to find a EventGoal
     * @example
     * // Get one EventGoal
     * const eventGoal = await prisma.eventGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventGoalFindUniqueArgs>(args: SelectSubset<T, EventGoalFindUniqueArgs<ExtArgs>>): Prisma__EventGoalClient<$Result.GetResult<Prisma.$EventGoalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventGoal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventGoalFindUniqueOrThrowArgs} args - Arguments to find a EventGoal
     * @example
     * // Get one EventGoal
     * const eventGoal = await prisma.eventGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, EventGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventGoalClient<$Result.GetResult<Prisma.$EventGoalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGoalFindFirstArgs} args - Arguments to find a EventGoal
     * @example
     * // Get one EventGoal
     * const eventGoal = await prisma.eventGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventGoalFindFirstArgs>(args?: SelectSubset<T, EventGoalFindFirstArgs<ExtArgs>>): Prisma__EventGoalClient<$Result.GetResult<Prisma.$EventGoalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGoalFindFirstOrThrowArgs} args - Arguments to find a EventGoal
     * @example
     * // Get one EventGoal
     * const eventGoal = await prisma.eventGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, EventGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventGoalClient<$Result.GetResult<Prisma.$EventGoalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventGoals
     * const eventGoals = await prisma.eventGoal.findMany()
     * 
     * // Get first 10 EventGoals
     * const eventGoals = await prisma.eventGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventGoalWithIdOnly = await prisma.eventGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventGoalFindManyArgs>(args?: SelectSubset<T, EventGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventGoalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventGoal.
     * @param {EventGoalCreateArgs} args - Arguments to create a EventGoal.
     * @example
     * // Create one EventGoal
     * const EventGoal = await prisma.eventGoal.create({
     *   data: {
     *     // ... data to create a EventGoal
     *   }
     * })
     * 
     */
    create<T extends EventGoalCreateArgs>(args: SelectSubset<T, EventGoalCreateArgs<ExtArgs>>): Prisma__EventGoalClient<$Result.GetResult<Prisma.$EventGoalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventGoals.
     * @param {EventGoalCreateManyArgs} args - Arguments to create many EventGoals.
     * @example
     * // Create many EventGoals
     * const eventGoal = await prisma.eventGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventGoalCreateManyArgs>(args?: SelectSubset<T, EventGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventGoals and returns the data saved in the database.
     * @param {EventGoalCreateManyAndReturnArgs} args - Arguments to create many EventGoals.
     * @example
     * // Create many EventGoals
     * const eventGoal = await prisma.eventGoal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventGoals and only return the `id`
     * const eventGoalWithIdOnly = await prisma.eventGoal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventGoalCreateManyAndReturnArgs>(args?: SelectSubset<T, EventGoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventGoalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventGoal.
     * @param {EventGoalDeleteArgs} args - Arguments to delete one EventGoal.
     * @example
     * // Delete one EventGoal
     * const EventGoal = await prisma.eventGoal.delete({
     *   where: {
     *     // ... filter to delete one EventGoal
     *   }
     * })
     * 
     */
    delete<T extends EventGoalDeleteArgs>(args: SelectSubset<T, EventGoalDeleteArgs<ExtArgs>>): Prisma__EventGoalClient<$Result.GetResult<Prisma.$EventGoalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventGoal.
     * @param {EventGoalUpdateArgs} args - Arguments to update one EventGoal.
     * @example
     * // Update one EventGoal
     * const eventGoal = await prisma.eventGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventGoalUpdateArgs>(args: SelectSubset<T, EventGoalUpdateArgs<ExtArgs>>): Prisma__EventGoalClient<$Result.GetResult<Prisma.$EventGoalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventGoals.
     * @param {EventGoalDeleteManyArgs} args - Arguments to filter EventGoals to delete.
     * @example
     * // Delete a few EventGoals
     * const { count } = await prisma.eventGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventGoalDeleteManyArgs>(args?: SelectSubset<T, EventGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventGoals
     * const eventGoal = await prisma.eventGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventGoalUpdateManyArgs>(args: SelectSubset<T, EventGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventGoal.
     * @param {EventGoalUpsertArgs} args - Arguments to update or create a EventGoal.
     * @example
     * // Update or create a EventGoal
     * const eventGoal = await prisma.eventGoal.upsert({
     *   create: {
     *     // ... data to create a EventGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventGoal we want to update
     *   }
     * })
     */
    upsert<T extends EventGoalUpsertArgs>(args: SelectSubset<T, EventGoalUpsertArgs<ExtArgs>>): Prisma__EventGoalClient<$Result.GetResult<Prisma.$EventGoalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGoalCountArgs} args - Arguments to filter EventGoals to count.
     * @example
     * // Count the number of EventGoals
     * const count = await prisma.eventGoal.count({
     *   where: {
     *     // ... the filter for the EventGoals we want to count
     *   }
     * })
    **/
    count<T extends EventGoalCountArgs>(
      args?: Subset<T, EventGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventGoalAggregateArgs>(args: Subset<T, EventGoalAggregateArgs>): Prisma.PrismaPromise<GetEventGoalAggregateType<T>>

    /**
     * Group by EventGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGoalGroupByArgs} args - Group by arguments.
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
      T extends EventGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGoalGroupByArgs['orderBy'] }
        : { orderBy?: EventGoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EventGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventGoal model
   */
  readonly fields: EventGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventGoal model
   */ 
  interface EventGoalFieldRefs {
    readonly id: FieldRef<"EventGoal", 'String'>
    readonly title: FieldRef<"EventGoal", 'String'>
    readonly description: FieldRef<"EventGoal", 'String'>
    readonly eventId: FieldRef<"EventGoal", 'String'>
    readonly createdAt: FieldRef<"EventGoal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventGoal findUnique
   */
  export type EventGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGoal
     */
    select?: EventGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGoalInclude<ExtArgs> | null
    /**
     * Filter, which EventGoal to fetch.
     */
    where: EventGoalWhereUniqueInput
  }

  /**
   * EventGoal findUniqueOrThrow
   */
  export type EventGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGoal
     */
    select?: EventGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGoalInclude<ExtArgs> | null
    /**
     * Filter, which EventGoal to fetch.
     */
    where: EventGoalWhereUniqueInput
  }

  /**
   * EventGoal findFirst
   */
  export type EventGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGoal
     */
    select?: EventGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGoalInclude<ExtArgs> | null
    /**
     * Filter, which EventGoal to fetch.
     */
    where?: EventGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventGoals to fetch.
     */
    orderBy?: EventGoalOrderByWithRelationInput | EventGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventGoals.
     */
    cursor?: EventGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventGoals.
     */
    distinct?: EventGoalScalarFieldEnum | EventGoalScalarFieldEnum[]
  }

  /**
   * EventGoal findFirstOrThrow
   */
  export type EventGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGoal
     */
    select?: EventGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGoalInclude<ExtArgs> | null
    /**
     * Filter, which EventGoal to fetch.
     */
    where?: EventGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventGoals to fetch.
     */
    orderBy?: EventGoalOrderByWithRelationInput | EventGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventGoals.
     */
    cursor?: EventGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventGoals.
     */
    distinct?: EventGoalScalarFieldEnum | EventGoalScalarFieldEnum[]
  }

  /**
   * EventGoal findMany
   */
  export type EventGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGoal
     */
    select?: EventGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGoalInclude<ExtArgs> | null
    /**
     * Filter, which EventGoals to fetch.
     */
    where?: EventGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventGoals to fetch.
     */
    orderBy?: EventGoalOrderByWithRelationInput | EventGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventGoals.
     */
    cursor?: EventGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventGoals.
     */
    skip?: number
    distinct?: EventGoalScalarFieldEnum | EventGoalScalarFieldEnum[]
  }

  /**
   * EventGoal create
   */
  export type EventGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGoal
     */
    select?: EventGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a EventGoal.
     */
    data: XOR<EventGoalCreateInput, EventGoalUncheckedCreateInput>
  }

  /**
   * EventGoal createMany
   */
  export type EventGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventGoals.
     */
    data: EventGoalCreateManyInput | EventGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventGoal createManyAndReturn
   */
  export type EventGoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGoal
     */
    select?: EventGoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventGoals.
     */
    data: EventGoalCreateManyInput | EventGoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventGoal update
   */
  export type EventGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGoal
     */
    select?: EventGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a EventGoal.
     */
    data: XOR<EventGoalUpdateInput, EventGoalUncheckedUpdateInput>
    /**
     * Choose, which EventGoal to update.
     */
    where: EventGoalWhereUniqueInput
  }

  /**
   * EventGoal updateMany
   */
  export type EventGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventGoals.
     */
    data: XOR<EventGoalUpdateManyMutationInput, EventGoalUncheckedUpdateManyInput>
    /**
     * Filter which EventGoals to update
     */
    where?: EventGoalWhereInput
  }

  /**
   * EventGoal upsert
   */
  export type EventGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGoal
     */
    select?: EventGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the EventGoal to update in case it exists.
     */
    where: EventGoalWhereUniqueInput
    /**
     * In case the EventGoal found by the `where` argument doesn't exist, create a new EventGoal with this data.
     */
    create: XOR<EventGoalCreateInput, EventGoalUncheckedCreateInput>
    /**
     * In case the EventGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventGoalUpdateInput, EventGoalUncheckedUpdateInput>
  }

  /**
   * EventGoal delete
   */
  export type EventGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGoal
     */
    select?: EventGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGoalInclude<ExtArgs> | null
    /**
     * Filter which EventGoal to delete.
     */
    where: EventGoalWhereUniqueInput
  }

  /**
   * EventGoal deleteMany
   */
  export type EventGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventGoals to delete
     */
    where?: EventGoalWhereInput
  }

  /**
   * EventGoal without action
   */
  export type EventGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGoal
     */
    select?: EventGoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGoalInclude<ExtArgs> | null
  }


  /**
   * Model EventNote
   */

  export type AggregateEventNote = {
    _count: EventNoteCountAggregateOutputType | null
    _min: EventNoteMinAggregateOutputType | null
    _max: EventNoteMaxAggregateOutputType | null
  }

  export type EventNoteMinAggregateOutputType = {
    id: string | null
    content: string | null
    eventId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type EventNoteMaxAggregateOutputType = {
    id: string | null
    content: string | null
    eventId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type EventNoteCountAggregateOutputType = {
    id: number
    content: number
    eventId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type EventNoteMinAggregateInputType = {
    id?: true
    content?: true
    eventId?: true
    userId?: true
    createdAt?: true
  }

  export type EventNoteMaxAggregateInputType = {
    id?: true
    content?: true
    eventId?: true
    userId?: true
    createdAt?: true
  }

  export type EventNoteCountAggregateInputType = {
    id?: true
    content?: true
    eventId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type EventNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventNote to aggregate.
     */
    where?: EventNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventNotes to fetch.
     */
    orderBy?: EventNoteOrderByWithRelationInput | EventNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventNotes
    **/
    _count?: true | EventNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventNoteMaxAggregateInputType
  }

  export type GetEventNoteAggregateType<T extends EventNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateEventNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventNote[P]>
      : GetScalarType<T[P], AggregateEventNote[P]>
  }




  export type EventNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventNoteWhereInput
    orderBy?: EventNoteOrderByWithAggregationInput | EventNoteOrderByWithAggregationInput[]
    by: EventNoteScalarFieldEnum[] | EventNoteScalarFieldEnum
    having?: EventNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventNoteCountAggregateInputType | true
    _min?: EventNoteMinAggregateInputType
    _max?: EventNoteMaxAggregateInputType
  }

  export type EventNoteGroupByOutputType = {
    id: string
    content: string
    eventId: string
    userId: string
    createdAt: Date
    _count: EventNoteCountAggregateOutputType | null
    _min: EventNoteMinAggregateOutputType | null
    _max: EventNoteMaxAggregateOutputType | null
  }

  type GetEventNoteGroupByPayload<T extends EventNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventNoteGroupByOutputType[P]>
            : GetScalarType<T[P], EventNoteGroupByOutputType[P]>
        }
      >
    >


  export type EventNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    eventId?: boolean
    userId?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventNote"]>

  export type EventNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    eventId?: boolean
    userId?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventNote"]>

  export type EventNoteSelectScalar = {
    id?: boolean
    content?: boolean
    eventId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type EventNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventNote"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      eventId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["eventNote"]>
    composites: {}
  }

  type EventNoteGetPayload<S extends boolean | null | undefined | EventNoteDefaultArgs> = $Result.GetResult<Prisma.$EventNotePayload, S>

  type EventNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventNoteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventNoteCountAggregateInputType | true
    }

  export interface EventNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventNote'], meta: { name: 'EventNote' } }
    /**
     * Find zero or one EventNote that matches the filter.
     * @param {EventNoteFindUniqueArgs} args - Arguments to find a EventNote
     * @example
     * // Get one EventNote
     * const eventNote = await prisma.eventNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventNoteFindUniqueArgs>(args: SelectSubset<T, EventNoteFindUniqueArgs<ExtArgs>>): Prisma__EventNoteClient<$Result.GetResult<Prisma.$EventNotePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventNote that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventNoteFindUniqueOrThrowArgs} args - Arguments to find a EventNote
     * @example
     * // Get one EventNote
     * const eventNote = await prisma.eventNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, EventNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventNoteClient<$Result.GetResult<Prisma.$EventNotePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventNoteFindFirstArgs} args - Arguments to find a EventNote
     * @example
     * // Get one EventNote
     * const eventNote = await prisma.eventNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventNoteFindFirstArgs>(args?: SelectSubset<T, EventNoteFindFirstArgs<ExtArgs>>): Prisma__EventNoteClient<$Result.GetResult<Prisma.$EventNotePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventNoteFindFirstOrThrowArgs} args - Arguments to find a EventNote
     * @example
     * // Get one EventNote
     * const eventNote = await prisma.eventNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, EventNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventNoteClient<$Result.GetResult<Prisma.$EventNotePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventNotes
     * const eventNotes = await prisma.eventNote.findMany()
     * 
     * // Get first 10 EventNotes
     * const eventNotes = await prisma.eventNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventNoteWithIdOnly = await prisma.eventNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventNoteFindManyArgs>(args?: SelectSubset<T, EventNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventNotePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventNote.
     * @param {EventNoteCreateArgs} args - Arguments to create a EventNote.
     * @example
     * // Create one EventNote
     * const EventNote = await prisma.eventNote.create({
     *   data: {
     *     // ... data to create a EventNote
     *   }
     * })
     * 
     */
    create<T extends EventNoteCreateArgs>(args: SelectSubset<T, EventNoteCreateArgs<ExtArgs>>): Prisma__EventNoteClient<$Result.GetResult<Prisma.$EventNotePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventNotes.
     * @param {EventNoteCreateManyArgs} args - Arguments to create many EventNotes.
     * @example
     * // Create many EventNotes
     * const eventNote = await prisma.eventNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventNoteCreateManyArgs>(args?: SelectSubset<T, EventNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventNotes and returns the data saved in the database.
     * @param {EventNoteCreateManyAndReturnArgs} args - Arguments to create many EventNotes.
     * @example
     * // Create many EventNotes
     * const eventNote = await prisma.eventNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventNotes and only return the `id`
     * const eventNoteWithIdOnly = await prisma.eventNote.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, EventNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventNotePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventNote.
     * @param {EventNoteDeleteArgs} args - Arguments to delete one EventNote.
     * @example
     * // Delete one EventNote
     * const EventNote = await prisma.eventNote.delete({
     *   where: {
     *     // ... filter to delete one EventNote
     *   }
     * })
     * 
     */
    delete<T extends EventNoteDeleteArgs>(args: SelectSubset<T, EventNoteDeleteArgs<ExtArgs>>): Prisma__EventNoteClient<$Result.GetResult<Prisma.$EventNotePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventNote.
     * @param {EventNoteUpdateArgs} args - Arguments to update one EventNote.
     * @example
     * // Update one EventNote
     * const eventNote = await prisma.eventNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventNoteUpdateArgs>(args: SelectSubset<T, EventNoteUpdateArgs<ExtArgs>>): Prisma__EventNoteClient<$Result.GetResult<Prisma.$EventNotePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventNotes.
     * @param {EventNoteDeleteManyArgs} args - Arguments to filter EventNotes to delete.
     * @example
     * // Delete a few EventNotes
     * const { count } = await prisma.eventNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventNoteDeleteManyArgs>(args?: SelectSubset<T, EventNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventNotes
     * const eventNote = await prisma.eventNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventNoteUpdateManyArgs>(args: SelectSubset<T, EventNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventNote.
     * @param {EventNoteUpsertArgs} args - Arguments to update or create a EventNote.
     * @example
     * // Update or create a EventNote
     * const eventNote = await prisma.eventNote.upsert({
     *   create: {
     *     // ... data to create a EventNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventNote we want to update
     *   }
     * })
     */
    upsert<T extends EventNoteUpsertArgs>(args: SelectSubset<T, EventNoteUpsertArgs<ExtArgs>>): Prisma__EventNoteClient<$Result.GetResult<Prisma.$EventNotePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventNoteCountArgs} args - Arguments to filter EventNotes to count.
     * @example
     * // Count the number of EventNotes
     * const count = await prisma.eventNote.count({
     *   where: {
     *     // ... the filter for the EventNotes we want to count
     *   }
     * })
    **/
    count<T extends EventNoteCountArgs>(
      args?: Subset<T, EventNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventNoteAggregateArgs>(args: Subset<T, EventNoteAggregateArgs>): Prisma.PrismaPromise<GetEventNoteAggregateType<T>>

    /**
     * Group by EventNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventNoteGroupByArgs} args - Group by arguments.
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
      T extends EventNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventNoteGroupByArgs['orderBy'] }
        : { orderBy?: EventNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EventNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventNote model
   */
  readonly fields: EventNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventNote model
   */ 
  interface EventNoteFieldRefs {
    readonly id: FieldRef<"EventNote", 'String'>
    readonly content: FieldRef<"EventNote", 'String'>
    readonly eventId: FieldRef<"EventNote", 'String'>
    readonly userId: FieldRef<"EventNote", 'String'>
    readonly createdAt: FieldRef<"EventNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventNote findUnique
   */
  export type EventNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteInclude<ExtArgs> | null
    /**
     * Filter, which EventNote to fetch.
     */
    where: EventNoteWhereUniqueInput
  }

  /**
   * EventNote findUniqueOrThrow
   */
  export type EventNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteInclude<ExtArgs> | null
    /**
     * Filter, which EventNote to fetch.
     */
    where: EventNoteWhereUniqueInput
  }

  /**
   * EventNote findFirst
   */
  export type EventNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteInclude<ExtArgs> | null
    /**
     * Filter, which EventNote to fetch.
     */
    where?: EventNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventNotes to fetch.
     */
    orderBy?: EventNoteOrderByWithRelationInput | EventNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventNotes.
     */
    cursor?: EventNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventNotes.
     */
    distinct?: EventNoteScalarFieldEnum | EventNoteScalarFieldEnum[]
  }

  /**
   * EventNote findFirstOrThrow
   */
  export type EventNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteInclude<ExtArgs> | null
    /**
     * Filter, which EventNote to fetch.
     */
    where?: EventNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventNotes to fetch.
     */
    orderBy?: EventNoteOrderByWithRelationInput | EventNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventNotes.
     */
    cursor?: EventNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventNotes.
     */
    distinct?: EventNoteScalarFieldEnum | EventNoteScalarFieldEnum[]
  }

  /**
   * EventNote findMany
   */
  export type EventNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteInclude<ExtArgs> | null
    /**
     * Filter, which EventNotes to fetch.
     */
    where?: EventNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventNotes to fetch.
     */
    orderBy?: EventNoteOrderByWithRelationInput | EventNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventNotes.
     */
    cursor?: EventNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventNotes.
     */
    skip?: number
    distinct?: EventNoteScalarFieldEnum | EventNoteScalarFieldEnum[]
  }

  /**
   * EventNote create
   */
  export type EventNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a EventNote.
     */
    data: XOR<EventNoteCreateInput, EventNoteUncheckedCreateInput>
  }

  /**
   * EventNote createMany
   */
  export type EventNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventNotes.
     */
    data: EventNoteCreateManyInput | EventNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventNote createManyAndReturn
   */
  export type EventNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventNotes.
     */
    data: EventNoteCreateManyInput | EventNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventNote update
   */
  export type EventNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a EventNote.
     */
    data: XOR<EventNoteUpdateInput, EventNoteUncheckedUpdateInput>
    /**
     * Choose, which EventNote to update.
     */
    where: EventNoteWhereUniqueInput
  }

  /**
   * EventNote updateMany
   */
  export type EventNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventNotes.
     */
    data: XOR<EventNoteUpdateManyMutationInput, EventNoteUncheckedUpdateManyInput>
    /**
     * Filter which EventNotes to update
     */
    where?: EventNoteWhereInput
  }

  /**
   * EventNote upsert
   */
  export type EventNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the EventNote to update in case it exists.
     */
    where: EventNoteWhereUniqueInput
    /**
     * In case the EventNote found by the `where` argument doesn't exist, create a new EventNote with this data.
     */
    create: XOR<EventNoteCreateInput, EventNoteUncheckedCreateInput>
    /**
     * In case the EventNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventNoteUpdateInput, EventNoteUncheckedUpdateInput>
  }

  /**
   * EventNote delete
   */
  export type EventNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteInclude<ExtArgs> | null
    /**
     * Filter which EventNote to delete.
     */
    where: EventNoteWhereUniqueInput
  }

  /**
   * EventNote deleteMany
   */
  export type EventNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventNotes to delete
     */
    where?: EventNoteWhereInput
  }

  /**
   * EventNote without action
   */
  export type EventNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventNote
     */
    select?: EventNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventNoteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phone: 'phone',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    location: 'location',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventInviteLinkScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    eventId: 'eventId',
    createdAt: 'createdAt'
  };

  export type EventInviteLinkScalarFieldEnum = (typeof EventInviteLinkScalarFieldEnum)[keyof typeof EventInviteLinkScalarFieldEnum]


  export const RegistrationScalarFieldEnum: {
    id: 'id',
    ticketNumber: 'ticketNumber',
    attendanceStatus: 'attendanceStatus',
    eventId: 'eventId',
    userId: 'userId',
    registeredAt: 'registeredAt'
  };

  export type RegistrationScalarFieldEnum = (typeof RegistrationScalarFieldEnum)[keyof typeof RegistrationScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    deadline: 'deadline',
    status: 'status',
    eventId: 'eventId',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskAssignmentScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    assignedAt: 'assignedAt'
  };

  export type TaskAssignmentScalarFieldEnum = (typeof TaskAssignmentScalarFieldEnum)[keyof typeof TaskAssignmentScalarFieldEnum]


  export const TaskUpdateScalarFieldEnum: {
    id: 'id',
    message: 'message',
    taskId: 'taskId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type TaskUpdateScalarFieldEnum = (typeof TaskUpdateScalarFieldEnum)[keyof typeof TaskUpdateScalarFieldEnum]


  export const EventGoalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    eventId: 'eventId',
    createdAt: 'createdAt'
  };

  export type EventGoalScalarFieldEnum = (typeof EventGoalScalarFieldEnum)[keyof typeof EventGoalScalarFieldEnum]


  export const EventNoteScalarFieldEnum: {
    id: 'id',
    content: 'content',
    eventId: 'eventId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type EventNoteScalarFieldEnum = (typeof EventNoteScalarFieldEnum)[keyof typeof EventNoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdEvents?: EventListRelationFilter
    registrations?: RegistrationListRelationFilter
    taskAssignments?: TaskAssignmentListRelationFilter
    taskUpdates?: TaskUpdateListRelationFilter
    notes?: EventNoteListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdEvents?: EventOrderByRelationAggregateInput
    registrations?: RegistrationOrderByRelationAggregateInput
    taskAssignments?: TaskAssignmentOrderByRelationAggregateInput
    taskUpdates?: TaskUpdateOrderByRelationAggregateInput
    notes?: EventNoteOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdEvents?: EventListRelationFilter
    registrations?: RegistrationListRelationFilter
    taskAssignments?: TaskAssignmentListRelationFilter
    taskUpdates?: TaskUpdateListRelationFilter
    notes?: EventNoteListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeNullableFilter<"Event"> | Date | string | null
    location?: StringNullableFilter<"Event"> | string | null
    createdById?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    registrations?: RegistrationListRelationFilter
    tasks?: TaskListRelationFilter
    goals?: EventGoalListRelationFilter
    notes?: EventNoteListRelationFilter
    inviteLinks?: EventInviteLinkListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    registrations?: RegistrationOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    goals?: EventGoalOrderByRelationAggregateInput
    notes?: EventNoteOrderByRelationAggregateInput
    inviteLinks?: EventInviteLinkOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeNullableFilter<"Event"> | Date | string | null
    location?: StringNullableFilter<"Event"> | string | null
    createdById?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    registrations?: RegistrationListRelationFilter
    tasks?: TaskListRelationFilter
    goals?: EventGoalListRelationFilter
    notes?: EventNoteListRelationFilter
    inviteLinks?: EventInviteLinkListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdById?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventInviteLinkWhereInput = {
    AND?: EventInviteLinkWhereInput | EventInviteLinkWhereInput[]
    OR?: EventInviteLinkWhereInput[]
    NOT?: EventInviteLinkWhereInput | EventInviteLinkWhereInput[]
    id?: StringFilter<"EventInviteLink"> | string
    token?: StringFilter<"EventInviteLink"> | string
    expiresAt?: DateTimeNullableFilter<"EventInviteLink"> | Date | string | null
    eventId?: StringFilter<"EventInviteLink"> | string
    createdAt?: DateTimeFilter<"EventInviteLink"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
  }

  export type EventInviteLinkOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type EventInviteLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: EventInviteLinkWhereInput | EventInviteLinkWhereInput[]
    OR?: EventInviteLinkWhereInput[]
    NOT?: EventInviteLinkWhereInput | EventInviteLinkWhereInput[]
    expiresAt?: DateTimeNullableFilter<"EventInviteLink"> | Date | string | null
    eventId?: StringFilter<"EventInviteLink"> | string
    createdAt?: DateTimeFilter<"EventInviteLink"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
  }, "id" | "token">

  export type EventInviteLinkOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    _count?: EventInviteLinkCountOrderByAggregateInput
    _max?: EventInviteLinkMaxOrderByAggregateInput
    _min?: EventInviteLinkMinOrderByAggregateInput
  }

  export type EventInviteLinkScalarWhereWithAggregatesInput = {
    AND?: EventInviteLinkScalarWhereWithAggregatesInput | EventInviteLinkScalarWhereWithAggregatesInput[]
    OR?: EventInviteLinkScalarWhereWithAggregatesInput[]
    NOT?: EventInviteLinkScalarWhereWithAggregatesInput | EventInviteLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventInviteLink"> | string
    token?: StringWithAggregatesFilter<"EventInviteLink"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"EventInviteLink"> | Date | string | null
    eventId?: StringWithAggregatesFilter<"EventInviteLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventInviteLink"> | Date | string
  }

  export type RegistrationWhereInput = {
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    id?: StringFilter<"Registration"> | string
    ticketNumber?: StringFilter<"Registration"> | string
    attendanceStatus?: EnumAttendanceStatusFilter<"Registration"> | $Enums.AttendanceStatus
    eventId?: StringFilter<"Registration"> | string
    userId?: StringFilter<"Registration"> | string
    registeredAt?: DateTimeFilter<"Registration"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RegistrationOrderByWithRelationInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    attendanceStatus?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    registeredAt?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketNumber?: string
    eventId_userId?: RegistrationEventIdUserIdCompoundUniqueInput
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    attendanceStatus?: EnumAttendanceStatusFilter<"Registration"> | $Enums.AttendanceStatus
    eventId?: StringFilter<"Registration"> | string
    userId?: StringFilter<"Registration"> | string
    registeredAt?: DateTimeFilter<"Registration"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "ticketNumber" | "eventId_userId">

  export type RegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    attendanceStatus?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    registeredAt?: SortOrder
    _count?: RegistrationCountOrderByAggregateInput
    _max?: RegistrationMaxOrderByAggregateInput
    _min?: RegistrationMinOrderByAggregateInput
  }

  export type RegistrationScalarWhereWithAggregatesInput = {
    AND?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    OR?: RegistrationScalarWhereWithAggregatesInput[]
    NOT?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Registration"> | string
    ticketNumber?: StringWithAggregatesFilter<"Registration"> | string
    attendanceStatus?: EnumAttendanceStatusWithAggregatesFilter<"Registration"> | $Enums.AttendanceStatus
    eventId?: StringWithAggregatesFilter<"Registration"> | string
    userId?: StringWithAggregatesFilter<"Registration"> | string
    registeredAt?: DateTimeWithAggregatesFilter<"Registration"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    deadline?: DateTimeNullableFilter<"Task"> | Date | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    eventId?: StringFilter<"Task"> | string
    createdById?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    assignments?: TaskAssignmentListRelationFilter
    updates?: TaskUpdateListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrder
    eventId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    assignments?: TaskAssignmentOrderByRelationAggregateInput
    updates?: TaskUpdateOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    deadline?: DateTimeNullableFilter<"Task"> | Date | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    eventId?: StringFilter<"Task"> | string
    createdById?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    assignments?: TaskAssignmentListRelationFilter
    updates?: TaskUpdateListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrder
    eventId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    deadline?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    eventId?: StringWithAggregatesFilter<"Task"> | string
    createdById?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type TaskAssignmentWhereInput = {
    AND?: TaskAssignmentWhereInput | TaskAssignmentWhereInput[]
    OR?: TaskAssignmentWhereInput[]
    NOT?: TaskAssignmentWhereInput | TaskAssignmentWhereInput[]
    id?: StringFilter<"TaskAssignment"> | string
    taskId?: StringFilter<"TaskAssignment"> | string
    userId?: StringFilter<"TaskAssignment"> | string
    assignedAt?: DateTimeFilter<"TaskAssignment"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TaskAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TaskAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    taskId_userId?: TaskAssignmentTaskIdUserIdCompoundUniqueInput
    AND?: TaskAssignmentWhereInput | TaskAssignmentWhereInput[]
    OR?: TaskAssignmentWhereInput[]
    NOT?: TaskAssignmentWhereInput | TaskAssignmentWhereInput[]
    taskId?: StringFilter<"TaskAssignment"> | string
    userId?: StringFilter<"TaskAssignment"> | string
    assignedAt?: DateTimeFilter<"TaskAssignment"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "taskId_userId">

  export type TaskAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    _count?: TaskAssignmentCountOrderByAggregateInput
    _max?: TaskAssignmentMaxOrderByAggregateInput
    _min?: TaskAssignmentMinOrderByAggregateInput
  }

  export type TaskAssignmentScalarWhereWithAggregatesInput = {
    AND?: TaskAssignmentScalarWhereWithAggregatesInput | TaskAssignmentScalarWhereWithAggregatesInput[]
    OR?: TaskAssignmentScalarWhereWithAggregatesInput[]
    NOT?: TaskAssignmentScalarWhereWithAggregatesInput | TaskAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskAssignment"> | string
    taskId?: StringWithAggregatesFilter<"TaskAssignment"> | string
    userId?: StringWithAggregatesFilter<"TaskAssignment"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"TaskAssignment"> | Date | string
  }

  export type TaskUpdateWhereInput = {
    AND?: TaskUpdateWhereInput | TaskUpdateWhereInput[]
    OR?: TaskUpdateWhereInput[]
    NOT?: TaskUpdateWhereInput | TaskUpdateWhereInput[]
    id?: StringFilter<"TaskUpdate"> | string
    message?: StringFilter<"TaskUpdate"> | string
    taskId?: StringFilter<"TaskUpdate"> | string
    userId?: StringFilter<"TaskUpdate"> | string
    createdAt?: DateTimeFilter<"TaskUpdate"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TaskUpdateOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TaskUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskUpdateWhereInput | TaskUpdateWhereInput[]
    OR?: TaskUpdateWhereInput[]
    NOT?: TaskUpdateWhereInput | TaskUpdateWhereInput[]
    message?: StringFilter<"TaskUpdate"> | string
    taskId?: StringFilter<"TaskUpdate"> | string
    userId?: StringFilter<"TaskUpdate"> | string
    createdAt?: DateTimeFilter<"TaskUpdate"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TaskUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: TaskUpdateCountOrderByAggregateInput
    _max?: TaskUpdateMaxOrderByAggregateInput
    _min?: TaskUpdateMinOrderByAggregateInput
  }

  export type TaskUpdateScalarWhereWithAggregatesInput = {
    AND?: TaskUpdateScalarWhereWithAggregatesInput | TaskUpdateScalarWhereWithAggregatesInput[]
    OR?: TaskUpdateScalarWhereWithAggregatesInput[]
    NOT?: TaskUpdateScalarWhereWithAggregatesInput | TaskUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskUpdate"> | string
    message?: StringWithAggregatesFilter<"TaskUpdate"> | string
    taskId?: StringWithAggregatesFilter<"TaskUpdate"> | string
    userId?: StringWithAggregatesFilter<"TaskUpdate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TaskUpdate"> | Date | string
  }

  export type EventGoalWhereInput = {
    AND?: EventGoalWhereInput | EventGoalWhereInput[]
    OR?: EventGoalWhereInput[]
    NOT?: EventGoalWhereInput | EventGoalWhereInput[]
    id?: StringFilter<"EventGoal"> | string
    title?: StringFilter<"EventGoal"> | string
    description?: StringNullableFilter<"EventGoal"> | string | null
    eventId?: StringFilter<"EventGoal"> | string
    createdAt?: DateTimeFilter<"EventGoal"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
  }

  export type EventGoalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type EventGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventGoalWhereInput | EventGoalWhereInput[]
    OR?: EventGoalWhereInput[]
    NOT?: EventGoalWhereInput | EventGoalWhereInput[]
    title?: StringFilter<"EventGoal"> | string
    description?: StringNullableFilter<"EventGoal"> | string | null
    eventId?: StringFilter<"EventGoal"> | string
    createdAt?: DateTimeFilter<"EventGoal"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
  }, "id">

  export type EventGoalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    _count?: EventGoalCountOrderByAggregateInput
    _max?: EventGoalMaxOrderByAggregateInput
    _min?: EventGoalMinOrderByAggregateInput
  }

  export type EventGoalScalarWhereWithAggregatesInput = {
    AND?: EventGoalScalarWhereWithAggregatesInput | EventGoalScalarWhereWithAggregatesInput[]
    OR?: EventGoalScalarWhereWithAggregatesInput[]
    NOT?: EventGoalScalarWhereWithAggregatesInput | EventGoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventGoal"> | string
    title?: StringWithAggregatesFilter<"EventGoal"> | string
    description?: StringNullableWithAggregatesFilter<"EventGoal"> | string | null
    eventId?: StringWithAggregatesFilter<"EventGoal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventGoal"> | Date | string
  }

  export type EventNoteWhereInput = {
    AND?: EventNoteWhereInput | EventNoteWhereInput[]
    OR?: EventNoteWhereInput[]
    NOT?: EventNoteWhereInput | EventNoteWhereInput[]
    id?: StringFilter<"EventNote"> | string
    content?: StringFilter<"EventNote"> | string
    eventId?: StringFilter<"EventNote"> | string
    userId?: StringFilter<"EventNote"> | string
    createdAt?: DateTimeFilter<"EventNote"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EventNoteOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EventNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventNoteWhereInput | EventNoteWhereInput[]
    OR?: EventNoteWhereInput[]
    NOT?: EventNoteWhereInput | EventNoteWhereInput[]
    content?: StringFilter<"EventNote"> | string
    eventId?: StringFilter<"EventNote"> | string
    userId?: StringFilter<"EventNote"> | string
    createdAt?: DateTimeFilter<"EventNote"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type EventNoteOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: EventNoteCountOrderByAggregateInput
    _max?: EventNoteMaxOrderByAggregateInput
    _min?: EventNoteMinOrderByAggregateInput
  }

  export type EventNoteScalarWhereWithAggregatesInput = {
    AND?: EventNoteScalarWhereWithAggregatesInput | EventNoteScalarWhereWithAggregatesInput[]
    OR?: EventNoteScalarWhereWithAggregatesInput[]
    NOT?: EventNoteScalarWhereWithAggregatesInput | EventNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventNote"> | string
    content?: StringWithAggregatesFilter<"EventNote"> | string
    eventId?: StringWithAggregatesFilter<"EventNote"> | string
    userId?: StringWithAggregatesFilter<"EventNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventNote"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    taskUpdates?: TaskUpdateCreateNestedManyWithoutUserInput
    notes?: EventNoteCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    taskUpdates?: TaskUpdateUncheckedCreateNestedManyWithoutUserInput
    notes?: EventNoteUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    taskUpdates?: TaskUpdateUpdateManyWithoutUserNestedInput
    notes?: EventNoteUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    taskUpdates?: TaskUpdateUncheckedUpdateManyWithoutUserNestedInput
    notes?: EventNoteUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    tasks?: TaskCreateNestedManyWithoutEventInput
    goals?: EventGoalCreateNestedManyWithoutEventInput
    notes?: EventNoteCreateNestedManyWithoutEventInput
    inviteLinks?: EventInviteLinkCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    tasks?: TaskUncheckedCreateNestedManyWithoutEventInput
    goals?: EventGoalUncheckedCreateNestedManyWithoutEventInput
    notes?: EventNoteUncheckedCreateNestedManyWithoutEventInput
    inviteLinks?: EventInviteLinkUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    tasks?: TaskUpdateManyWithoutEventNestedInput
    goals?: EventGoalUpdateManyWithoutEventNestedInput
    notes?: EventNoteUpdateManyWithoutEventNestedInput
    inviteLinks?: EventInviteLinkUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutEventNestedInput
    goals?: EventGoalUncheckedUpdateManyWithoutEventNestedInput
    notes?: EventNoteUncheckedUpdateManyWithoutEventNestedInput
    inviteLinks?: EventInviteLinkUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventInviteLinkCreateInput = {
    id?: string
    token: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutInviteLinksInput
  }

  export type EventInviteLinkUncheckedCreateInput = {
    id?: string
    token: string
    expiresAt?: Date | string | null
    eventId: string
    createdAt?: Date | string
  }

  export type EventInviteLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutInviteLinksNestedInput
  }

  export type EventInviteLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventInviteLinkCreateManyInput = {
    id?: string
    token: string
    expiresAt?: Date | string | null
    eventId: string
    createdAt?: Date | string
  }

  export type EventInviteLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventInviteLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationCreateInput = {
    id?: string
    ticketNumber: string
    attendanceStatus?: $Enums.AttendanceStatus
    registeredAt?: Date | string
    event: EventCreateNestedOneWithoutRegistrationsInput
    user: UserCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateInput = {
    id?: string
    ticketNumber: string
    attendanceStatus?: $Enums.AttendanceStatus
    eventId: string
    userId: string
    registeredAt?: Date | string
  }

  export type RegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationCreateManyInput = {
    id?: string
    ticketNumber: string
    attendanceStatus?: $Enums.AttendanceStatus
    eventId: string
    userId: string
    registeredAt?: Date | string
  }

  export type RegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutTasksInput
    createdBy: UserCreateNestedOneWithoutTasksInput
    assignments?: TaskAssignmentCreateNestedManyWithoutTaskInput
    updates?: TaskUpdateCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    eventId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput
    updates?: TaskUpdateUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTasksNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTasksNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutTaskNestedInput
    updates?: TaskUpdateUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    eventId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput
    updates?: TaskUpdateUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    eventId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    eventId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAssignmentCreateInput = {
    id?: string
    assignedAt?: Date | string
    task: TaskCreateNestedOneWithoutAssignmentsInput
    user: UserCreateNestedOneWithoutTaskAssignmentsInput
  }

  export type TaskAssignmentUncheckedCreateInput = {
    id?: string
    taskId: string
    userId: string
    assignedAt?: Date | string
  }

  export type TaskAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutTaskAssignmentsNestedInput
  }

  export type TaskAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAssignmentCreateManyInput = {
    id?: string
    taskId: string
    userId: string
    assignedAt?: Date | string
  }

  export type TaskAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutUpdatesInput
    user: UserCreateNestedOneWithoutTaskUpdatesInput
  }

  export type TaskUpdateUncheckedCreateInput = {
    id?: string
    message: string
    taskId: string
    userId: string
    createdAt?: Date | string
  }

  export type TaskUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutUpdatesNestedInput
    user?: UserUpdateOneRequiredWithoutTaskUpdatesNestedInput
  }

  export type TaskUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateCreateManyInput = {
    id?: string
    message: string
    taskId: string
    userId: string
    createdAt?: Date | string
  }

  export type TaskUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventGoalCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutGoalsInput
  }

  export type EventGoalUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    eventId: string
    createdAt?: Date | string
  }

  export type EventGoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type EventGoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventGoalCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    eventId: string
    createdAt?: Date | string
  }

  export type EventGoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventGoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventNoteCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutNotesInput
    user: UserCreateNestedOneWithoutNotesInput
  }

  export type EventNoteUncheckedCreateInput = {
    id?: string
    content: string
    eventId: string
    userId: string
    createdAt?: Date | string
  }

  export type EventNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutNotesNestedInput
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type EventNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventNoteCreateManyInput = {
    id?: string
    content: string
    eventId: string
    userId: string
    createdAt?: Date | string
  }

  export type EventNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type RegistrationListRelationFilter = {
    every?: RegistrationWhereInput
    some?: RegistrationWhereInput
    none?: RegistrationWhereInput
  }

  export type TaskAssignmentListRelationFilter = {
    every?: TaskAssignmentWhereInput
    some?: TaskAssignmentWhereInput
    none?: TaskAssignmentWhereInput
  }

  export type TaskUpdateListRelationFilter = {
    every?: TaskUpdateWhereInput
    some?: TaskUpdateWhereInput
    none?: TaskUpdateWhereInput
  }

  export type EventNoteListRelationFilter = {
    every?: EventNoteWhereInput
    some?: EventNoteWhereInput
    none?: EventNoteWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventGoalListRelationFilter = {
    every?: EventGoalWhereInput
    some?: EventGoalWhereInput
    none?: EventGoalWhereInput
  }

  export type EventInviteLinkListRelationFilter = {
    every?: EventInviteLinkWhereInput
    some?: EventInviteLinkWhereInput
    none?: EventInviteLinkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventGoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventInviteLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EventRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventInviteLinkCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventInviteLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventInviteLinkMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type RegistrationEventIdUserIdCompoundUniqueInput = {
    eventId: string
    userId: string
  }

  export type RegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    attendanceStatus?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    registeredAt?: SortOrder
  }

  export type RegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    attendanceStatus?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    registeredAt?: SortOrder
  }

  export type RegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    attendanceStatus?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    registeredAt?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    eventId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    eventId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    eventId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type TaskRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskAssignmentTaskIdUserIdCompoundUniqueInput = {
    taskId: string
    userId: string
  }

  export type TaskAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type TaskAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type TaskAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type TaskUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventGoalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventGoalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventNoteCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventNoteMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type RegistrationCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type TaskAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput> | TaskAssignmentCreateWithoutUserInput[] | TaskAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutUserInput | TaskAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: TaskAssignmentCreateManyUserInputEnvelope
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
  }

  export type TaskUpdateCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskUpdateCreateWithoutUserInput, TaskUpdateUncheckedCreateWithoutUserInput> | TaskUpdateCreateWithoutUserInput[] | TaskUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskUpdateCreateOrConnectWithoutUserInput | TaskUpdateCreateOrConnectWithoutUserInput[]
    createMany?: TaskUpdateCreateManyUserInputEnvelope
    connect?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
  }

  export type EventNoteCreateNestedManyWithoutUserInput = {
    create?: XOR<EventNoteCreateWithoutUserInput, EventNoteUncheckedCreateWithoutUserInput> | EventNoteCreateWithoutUserInput[] | EventNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventNoteCreateOrConnectWithoutUserInput | EventNoteCreateOrConnectWithoutUserInput[]
    createMany?: EventNoteCreateManyUserInputEnvelope
    connect?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type RegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type TaskAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput> | TaskAssignmentCreateWithoutUserInput[] | TaskAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutUserInput | TaskAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: TaskAssignmentCreateManyUserInputEnvelope
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
  }

  export type TaskUpdateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskUpdateCreateWithoutUserInput, TaskUpdateUncheckedCreateWithoutUserInput> | TaskUpdateCreateWithoutUserInput[] | TaskUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskUpdateCreateOrConnectWithoutUserInput | TaskUpdateCreateOrConnectWithoutUserInput[]
    createMany?: TaskUpdateCreateManyUserInputEnvelope
    connect?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
  }

  export type EventNoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventNoteCreateWithoutUserInput, EventNoteUncheckedCreateWithoutUserInput> | EventNoteCreateWithoutUserInput[] | EventNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventNoteCreateOrConnectWithoutUserInput | EventNoteCreateOrConnectWithoutUserInput[]
    createMany?: EventNoteCreateManyUserInputEnvelope
    connect?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatedByInput | EventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatedByInput | EventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatedByInput | EventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type RegistrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutUserInput | RegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutUserInput | RegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutUserInput | RegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type TaskAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput> | TaskAssignmentCreateWithoutUserInput[] | TaskAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutUserInput | TaskAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: TaskAssignmentUpsertWithWhereUniqueWithoutUserInput | TaskAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskAssignmentCreateManyUserInputEnvelope
    set?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    disconnect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    delete?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    update?: TaskAssignmentUpdateWithWhereUniqueWithoutUserInput | TaskAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskAssignmentUpdateManyWithWhereWithoutUserInput | TaskAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
  }

  export type TaskUpdateUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskUpdateCreateWithoutUserInput, TaskUpdateUncheckedCreateWithoutUserInput> | TaskUpdateCreateWithoutUserInput[] | TaskUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskUpdateCreateOrConnectWithoutUserInput | TaskUpdateCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpdateUpsertWithWhereUniqueWithoutUserInput | TaskUpdateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskUpdateCreateManyUserInputEnvelope
    set?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    disconnect?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    delete?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    connect?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    update?: TaskUpdateUpdateWithWhereUniqueWithoutUserInput | TaskUpdateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateUpdateManyWithWhereWithoutUserInput | TaskUpdateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskUpdateScalarWhereInput | TaskUpdateScalarWhereInput[]
  }

  export type EventNoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventNoteCreateWithoutUserInput, EventNoteUncheckedCreateWithoutUserInput> | EventNoteCreateWithoutUserInput[] | EventNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventNoteCreateOrConnectWithoutUserInput | EventNoteCreateOrConnectWithoutUserInput[]
    upsert?: EventNoteUpsertWithWhereUniqueWithoutUserInput | EventNoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventNoteCreateManyUserInputEnvelope
    set?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    disconnect?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    delete?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    connect?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    update?: EventNoteUpdateWithWhereUniqueWithoutUserInput | EventNoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventNoteUpdateManyWithWhereWithoutUserInput | EventNoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventNoteScalarWhereInput | EventNoteScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatedByInput | TaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatedByInput | EventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatedByInput | EventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatedByInput | EventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type RegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutUserInput | RegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutUserInput | RegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutUserInput | RegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput> | TaskAssignmentCreateWithoutUserInput[] | TaskAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutUserInput | TaskAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: TaskAssignmentUpsertWithWhereUniqueWithoutUserInput | TaskAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskAssignmentCreateManyUserInputEnvelope
    set?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    disconnect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    delete?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    update?: TaskAssignmentUpdateWithWhereUniqueWithoutUserInput | TaskAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskAssignmentUpdateManyWithWhereWithoutUserInput | TaskAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
  }

  export type TaskUpdateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskUpdateCreateWithoutUserInput, TaskUpdateUncheckedCreateWithoutUserInput> | TaskUpdateCreateWithoutUserInput[] | TaskUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskUpdateCreateOrConnectWithoutUserInput | TaskUpdateCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpdateUpsertWithWhereUniqueWithoutUserInput | TaskUpdateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskUpdateCreateManyUserInputEnvelope
    set?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    disconnect?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    delete?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    connect?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    update?: TaskUpdateUpdateWithWhereUniqueWithoutUserInput | TaskUpdateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateUpdateManyWithWhereWithoutUserInput | TaskUpdateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskUpdateScalarWhereInput | TaskUpdateScalarWhereInput[]
  }

  export type EventNoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventNoteCreateWithoutUserInput, EventNoteUncheckedCreateWithoutUserInput> | EventNoteCreateWithoutUserInput[] | EventNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventNoteCreateOrConnectWithoutUserInput | EventNoteCreateOrConnectWithoutUserInput[]
    upsert?: EventNoteUpsertWithWhereUniqueWithoutUserInput | EventNoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventNoteCreateManyUserInputEnvelope
    set?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    disconnect?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    delete?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    connect?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    update?: EventNoteUpdateWithWhereUniqueWithoutUserInput | EventNoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventNoteUpdateManyWithWhereWithoutUserInput | EventNoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventNoteScalarWhereInput | EventNoteScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatedByInput | TaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedEventsInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput
    connect?: UserWhereUniqueInput
  }

  export type RegistrationCreateNestedManyWithoutEventInput = {
    create?: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput> | RegistrationCreateWithoutEventInput[] | RegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutEventInput | RegistrationCreateOrConnectWithoutEventInput[]
    createMany?: RegistrationCreateManyEventInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutEventInput = {
    create?: XOR<TaskCreateWithoutEventInput, TaskUncheckedCreateWithoutEventInput> | TaskCreateWithoutEventInput[] | TaskUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutEventInput | TaskCreateOrConnectWithoutEventInput[]
    createMany?: TaskCreateManyEventInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EventGoalCreateNestedManyWithoutEventInput = {
    create?: XOR<EventGoalCreateWithoutEventInput, EventGoalUncheckedCreateWithoutEventInput> | EventGoalCreateWithoutEventInput[] | EventGoalUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventGoalCreateOrConnectWithoutEventInput | EventGoalCreateOrConnectWithoutEventInput[]
    createMany?: EventGoalCreateManyEventInputEnvelope
    connect?: EventGoalWhereUniqueInput | EventGoalWhereUniqueInput[]
  }

  export type EventNoteCreateNestedManyWithoutEventInput = {
    create?: XOR<EventNoteCreateWithoutEventInput, EventNoteUncheckedCreateWithoutEventInput> | EventNoteCreateWithoutEventInput[] | EventNoteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventNoteCreateOrConnectWithoutEventInput | EventNoteCreateOrConnectWithoutEventInput[]
    createMany?: EventNoteCreateManyEventInputEnvelope
    connect?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
  }

  export type EventInviteLinkCreateNestedManyWithoutEventInput = {
    create?: XOR<EventInviteLinkCreateWithoutEventInput, EventInviteLinkUncheckedCreateWithoutEventInput> | EventInviteLinkCreateWithoutEventInput[] | EventInviteLinkUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventInviteLinkCreateOrConnectWithoutEventInput | EventInviteLinkCreateOrConnectWithoutEventInput[]
    createMany?: EventInviteLinkCreateManyEventInputEnvelope
    connect?: EventInviteLinkWhereUniqueInput | EventInviteLinkWhereUniqueInput[]
  }

  export type RegistrationUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput> | RegistrationCreateWithoutEventInput[] | RegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutEventInput | RegistrationCreateOrConnectWithoutEventInput[]
    createMany?: RegistrationCreateManyEventInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TaskCreateWithoutEventInput, TaskUncheckedCreateWithoutEventInput> | TaskCreateWithoutEventInput[] | TaskUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutEventInput | TaskCreateOrConnectWithoutEventInput[]
    createMany?: TaskCreateManyEventInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EventGoalUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventGoalCreateWithoutEventInput, EventGoalUncheckedCreateWithoutEventInput> | EventGoalCreateWithoutEventInput[] | EventGoalUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventGoalCreateOrConnectWithoutEventInput | EventGoalCreateOrConnectWithoutEventInput[]
    createMany?: EventGoalCreateManyEventInputEnvelope
    connect?: EventGoalWhereUniqueInput | EventGoalWhereUniqueInput[]
  }

  export type EventNoteUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventNoteCreateWithoutEventInput, EventNoteUncheckedCreateWithoutEventInput> | EventNoteCreateWithoutEventInput[] | EventNoteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventNoteCreateOrConnectWithoutEventInput | EventNoteCreateOrConnectWithoutEventInput[]
    createMany?: EventNoteCreateManyEventInputEnvelope
    connect?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
  }

  export type EventInviteLinkUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventInviteLinkCreateWithoutEventInput, EventInviteLinkUncheckedCreateWithoutEventInput> | EventInviteLinkCreateWithoutEventInput[] | EventInviteLinkUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventInviteLinkCreateOrConnectWithoutEventInput | EventInviteLinkCreateOrConnectWithoutEventInput[]
    createMany?: EventInviteLinkCreateManyEventInputEnvelope
    connect?: EventInviteLinkWhereUniqueInput | EventInviteLinkWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutCreatedEventsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput
    upsert?: UserUpsertWithoutCreatedEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedEventsInput, UserUpdateWithoutCreatedEventsInput>, UserUncheckedUpdateWithoutCreatedEventsInput>
  }

  export type RegistrationUpdateManyWithoutEventNestedInput = {
    create?: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput> | RegistrationCreateWithoutEventInput[] | RegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutEventInput | RegistrationCreateOrConnectWithoutEventInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutEventInput | RegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: RegistrationCreateManyEventInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutEventInput | RegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutEventInput | RegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutEventNestedInput = {
    create?: XOR<TaskCreateWithoutEventInput, TaskUncheckedCreateWithoutEventInput> | TaskCreateWithoutEventInput[] | TaskUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutEventInput | TaskCreateOrConnectWithoutEventInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutEventInput | TaskUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TaskCreateManyEventInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutEventInput | TaskUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutEventInput | TaskUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type EventGoalUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventGoalCreateWithoutEventInput, EventGoalUncheckedCreateWithoutEventInput> | EventGoalCreateWithoutEventInput[] | EventGoalUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventGoalCreateOrConnectWithoutEventInput | EventGoalCreateOrConnectWithoutEventInput[]
    upsert?: EventGoalUpsertWithWhereUniqueWithoutEventInput | EventGoalUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventGoalCreateManyEventInputEnvelope
    set?: EventGoalWhereUniqueInput | EventGoalWhereUniqueInput[]
    disconnect?: EventGoalWhereUniqueInput | EventGoalWhereUniqueInput[]
    delete?: EventGoalWhereUniqueInput | EventGoalWhereUniqueInput[]
    connect?: EventGoalWhereUniqueInput | EventGoalWhereUniqueInput[]
    update?: EventGoalUpdateWithWhereUniqueWithoutEventInput | EventGoalUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventGoalUpdateManyWithWhereWithoutEventInput | EventGoalUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventGoalScalarWhereInput | EventGoalScalarWhereInput[]
  }

  export type EventNoteUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventNoteCreateWithoutEventInput, EventNoteUncheckedCreateWithoutEventInput> | EventNoteCreateWithoutEventInput[] | EventNoteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventNoteCreateOrConnectWithoutEventInput | EventNoteCreateOrConnectWithoutEventInput[]
    upsert?: EventNoteUpsertWithWhereUniqueWithoutEventInput | EventNoteUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventNoteCreateManyEventInputEnvelope
    set?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    disconnect?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    delete?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    connect?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    update?: EventNoteUpdateWithWhereUniqueWithoutEventInput | EventNoteUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventNoteUpdateManyWithWhereWithoutEventInput | EventNoteUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventNoteScalarWhereInput | EventNoteScalarWhereInput[]
  }

  export type EventInviteLinkUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventInviteLinkCreateWithoutEventInput, EventInviteLinkUncheckedCreateWithoutEventInput> | EventInviteLinkCreateWithoutEventInput[] | EventInviteLinkUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventInviteLinkCreateOrConnectWithoutEventInput | EventInviteLinkCreateOrConnectWithoutEventInput[]
    upsert?: EventInviteLinkUpsertWithWhereUniqueWithoutEventInput | EventInviteLinkUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventInviteLinkCreateManyEventInputEnvelope
    set?: EventInviteLinkWhereUniqueInput | EventInviteLinkWhereUniqueInput[]
    disconnect?: EventInviteLinkWhereUniqueInput | EventInviteLinkWhereUniqueInput[]
    delete?: EventInviteLinkWhereUniqueInput | EventInviteLinkWhereUniqueInput[]
    connect?: EventInviteLinkWhereUniqueInput | EventInviteLinkWhereUniqueInput[]
    update?: EventInviteLinkUpdateWithWhereUniqueWithoutEventInput | EventInviteLinkUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventInviteLinkUpdateManyWithWhereWithoutEventInput | EventInviteLinkUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventInviteLinkScalarWhereInput | EventInviteLinkScalarWhereInput[]
  }

  export type RegistrationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput> | RegistrationCreateWithoutEventInput[] | RegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutEventInput | RegistrationCreateOrConnectWithoutEventInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutEventInput | RegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: RegistrationCreateManyEventInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutEventInput | RegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutEventInput | RegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TaskCreateWithoutEventInput, TaskUncheckedCreateWithoutEventInput> | TaskCreateWithoutEventInput[] | TaskUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutEventInput | TaskCreateOrConnectWithoutEventInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutEventInput | TaskUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TaskCreateManyEventInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutEventInput | TaskUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutEventInput | TaskUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type EventGoalUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventGoalCreateWithoutEventInput, EventGoalUncheckedCreateWithoutEventInput> | EventGoalCreateWithoutEventInput[] | EventGoalUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventGoalCreateOrConnectWithoutEventInput | EventGoalCreateOrConnectWithoutEventInput[]
    upsert?: EventGoalUpsertWithWhereUniqueWithoutEventInput | EventGoalUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventGoalCreateManyEventInputEnvelope
    set?: EventGoalWhereUniqueInput | EventGoalWhereUniqueInput[]
    disconnect?: EventGoalWhereUniqueInput | EventGoalWhereUniqueInput[]
    delete?: EventGoalWhereUniqueInput | EventGoalWhereUniqueInput[]
    connect?: EventGoalWhereUniqueInput | EventGoalWhereUniqueInput[]
    update?: EventGoalUpdateWithWhereUniqueWithoutEventInput | EventGoalUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventGoalUpdateManyWithWhereWithoutEventInput | EventGoalUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventGoalScalarWhereInput | EventGoalScalarWhereInput[]
  }

  export type EventNoteUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventNoteCreateWithoutEventInput, EventNoteUncheckedCreateWithoutEventInput> | EventNoteCreateWithoutEventInput[] | EventNoteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventNoteCreateOrConnectWithoutEventInput | EventNoteCreateOrConnectWithoutEventInput[]
    upsert?: EventNoteUpsertWithWhereUniqueWithoutEventInput | EventNoteUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventNoteCreateManyEventInputEnvelope
    set?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    disconnect?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    delete?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    connect?: EventNoteWhereUniqueInput | EventNoteWhereUniqueInput[]
    update?: EventNoteUpdateWithWhereUniqueWithoutEventInput | EventNoteUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventNoteUpdateManyWithWhereWithoutEventInput | EventNoteUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventNoteScalarWhereInput | EventNoteScalarWhereInput[]
  }

  export type EventInviteLinkUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventInviteLinkCreateWithoutEventInput, EventInviteLinkUncheckedCreateWithoutEventInput> | EventInviteLinkCreateWithoutEventInput[] | EventInviteLinkUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventInviteLinkCreateOrConnectWithoutEventInput | EventInviteLinkCreateOrConnectWithoutEventInput[]
    upsert?: EventInviteLinkUpsertWithWhereUniqueWithoutEventInput | EventInviteLinkUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventInviteLinkCreateManyEventInputEnvelope
    set?: EventInviteLinkWhereUniqueInput | EventInviteLinkWhereUniqueInput[]
    disconnect?: EventInviteLinkWhereUniqueInput | EventInviteLinkWhereUniqueInput[]
    delete?: EventInviteLinkWhereUniqueInput | EventInviteLinkWhereUniqueInput[]
    connect?: EventInviteLinkWhereUniqueInput | EventInviteLinkWhereUniqueInput[]
    update?: EventInviteLinkUpdateWithWhereUniqueWithoutEventInput | EventInviteLinkUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventInviteLinkUpdateManyWithWhereWithoutEventInput | EventInviteLinkUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventInviteLinkScalarWhereInput | EventInviteLinkScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutInviteLinksInput = {
    create?: XOR<EventCreateWithoutInviteLinksInput, EventUncheckedCreateWithoutInviteLinksInput>
    connectOrCreate?: EventCreateOrConnectWithoutInviteLinksInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutInviteLinksNestedInput = {
    create?: XOR<EventCreateWithoutInviteLinksInput, EventUncheckedCreateWithoutInviteLinksInput>
    connectOrCreate?: EventCreateOrConnectWithoutInviteLinksInput
    upsert?: EventUpsertWithoutInviteLinksInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutInviteLinksInput, EventUpdateWithoutInviteLinksInput>, EventUncheckedUpdateWithoutInviteLinksInput>
  }

  export type EventCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRegistrationsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type EventUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRegistrationsInput
    upsert?: EventUpsertWithoutRegistrationsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutRegistrationsInput, EventUpdateWithoutRegistrationsInput>, EventUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    upsert?: UserUpsertWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegistrationsInput, UserUpdateWithoutRegistrationsInput>, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type EventCreateNestedOneWithoutTasksInput = {
    create?: XOR<EventCreateWithoutTasksInput, EventUncheckedCreateWithoutTasksInput>
    connectOrCreate?: EventCreateOrConnectWithoutTasksInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskAssignmentCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput> | TaskAssignmentCreateWithoutTaskInput[] | TaskAssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutTaskInput | TaskAssignmentCreateOrConnectWithoutTaskInput[]
    createMany?: TaskAssignmentCreateManyTaskInputEnvelope
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
  }

  export type TaskUpdateCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskUpdateCreateWithoutTaskInput, TaskUpdateUncheckedCreateWithoutTaskInput> | TaskUpdateCreateWithoutTaskInput[] | TaskUpdateUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskUpdateCreateOrConnectWithoutTaskInput | TaskUpdateCreateOrConnectWithoutTaskInput[]
    createMany?: TaskUpdateCreateManyTaskInputEnvelope
    connect?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
  }

  export type TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput> | TaskAssignmentCreateWithoutTaskInput[] | TaskAssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutTaskInput | TaskAssignmentCreateOrConnectWithoutTaskInput[]
    createMany?: TaskAssignmentCreateManyTaskInputEnvelope
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
  }

  export type TaskUpdateUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskUpdateCreateWithoutTaskInput, TaskUpdateUncheckedCreateWithoutTaskInput> | TaskUpdateCreateWithoutTaskInput[] | TaskUpdateUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskUpdateCreateOrConnectWithoutTaskInput | TaskUpdateCreateOrConnectWithoutTaskInput[]
    createMany?: TaskUpdateCreateManyTaskInputEnvelope
    connect?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EventUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<EventCreateWithoutTasksInput, EventUncheckedCreateWithoutTasksInput>
    connectOrCreate?: EventCreateOrConnectWithoutTasksInput
    upsert?: EventUpsertWithoutTasksInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTasksInput, EventUpdateWithoutTasksInput>, EventUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type TaskAssignmentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput> | TaskAssignmentCreateWithoutTaskInput[] | TaskAssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutTaskInput | TaskAssignmentCreateOrConnectWithoutTaskInput[]
    upsert?: TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput | TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskAssignmentCreateManyTaskInputEnvelope
    set?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    disconnect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    delete?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    update?: TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput | TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskAssignmentUpdateManyWithWhereWithoutTaskInput | TaskAssignmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
  }

  export type TaskUpdateUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskUpdateCreateWithoutTaskInput, TaskUpdateUncheckedCreateWithoutTaskInput> | TaskUpdateCreateWithoutTaskInput[] | TaskUpdateUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskUpdateCreateOrConnectWithoutTaskInput | TaskUpdateCreateOrConnectWithoutTaskInput[]
    upsert?: TaskUpdateUpsertWithWhereUniqueWithoutTaskInput | TaskUpdateUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskUpdateCreateManyTaskInputEnvelope
    set?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    disconnect?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    delete?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    connect?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    update?: TaskUpdateUpdateWithWhereUniqueWithoutTaskInput | TaskUpdateUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskUpdateUpdateManyWithWhereWithoutTaskInput | TaskUpdateUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskUpdateScalarWhereInput | TaskUpdateScalarWhereInput[]
  }

  export type TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput> | TaskAssignmentCreateWithoutTaskInput[] | TaskAssignmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAssignmentCreateOrConnectWithoutTaskInput | TaskAssignmentCreateOrConnectWithoutTaskInput[]
    upsert?: TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput | TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskAssignmentCreateManyTaskInputEnvelope
    set?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    disconnect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    delete?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    connect?: TaskAssignmentWhereUniqueInput | TaskAssignmentWhereUniqueInput[]
    update?: TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput | TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskAssignmentUpdateManyWithWhereWithoutTaskInput | TaskAssignmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
  }

  export type TaskUpdateUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskUpdateCreateWithoutTaskInput, TaskUpdateUncheckedCreateWithoutTaskInput> | TaskUpdateCreateWithoutTaskInput[] | TaskUpdateUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskUpdateCreateOrConnectWithoutTaskInput | TaskUpdateCreateOrConnectWithoutTaskInput[]
    upsert?: TaskUpdateUpsertWithWhereUniqueWithoutTaskInput | TaskUpdateUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskUpdateCreateManyTaskInputEnvelope
    set?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    disconnect?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    delete?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    connect?: TaskUpdateWhereUniqueInput | TaskUpdateWhereUniqueInput[]
    update?: TaskUpdateUpdateWithWhereUniqueWithoutTaskInput | TaskUpdateUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskUpdateUpdateManyWithWhereWithoutTaskInput | TaskUpdateUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskUpdateScalarWhereInput | TaskUpdateScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<TaskCreateWithoutAssignmentsInput, TaskUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssignmentsInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTaskAssignmentsInput = {
    create?: XOR<UserCreateWithoutTaskAssignmentsInput, UserUncheckedCreateWithoutTaskAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<TaskCreateWithoutAssignmentsInput, TaskUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssignmentsInput
    upsert?: TaskUpsertWithoutAssignmentsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutAssignmentsInput, TaskUpdateWithoutAssignmentsInput>, TaskUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutTaskAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutTaskAssignmentsInput, UserUncheckedCreateWithoutTaskAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskAssignmentsInput
    upsert?: UserUpsertWithoutTaskAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskAssignmentsInput, UserUpdateWithoutTaskAssignmentsInput>, UserUncheckedUpdateWithoutTaskAssignmentsInput>
  }

  export type TaskCreateNestedOneWithoutUpdatesInput = {
    create?: XOR<TaskCreateWithoutUpdatesInput, TaskUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutUpdatesInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTaskUpdatesInput = {
    create?: XOR<UserCreateWithoutTaskUpdatesInput, UserUncheckedCreateWithoutTaskUpdatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskUpdatesInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutUpdatesNestedInput = {
    create?: XOR<TaskCreateWithoutUpdatesInput, TaskUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutUpdatesInput
    upsert?: TaskUpsertWithoutUpdatesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutUpdatesInput, TaskUpdateWithoutUpdatesInput>, TaskUncheckedUpdateWithoutUpdatesInput>
  }

  export type UserUpdateOneRequiredWithoutTaskUpdatesNestedInput = {
    create?: XOR<UserCreateWithoutTaskUpdatesInput, UserUncheckedCreateWithoutTaskUpdatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskUpdatesInput
    upsert?: UserUpsertWithoutTaskUpdatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskUpdatesInput, UserUpdateWithoutTaskUpdatesInput>, UserUncheckedUpdateWithoutTaskUpdatesInput>
  }

  export type EventCreateNestedOneWithoutGoalsInput = {
    create?: XOR<EventCreateWithoutGoalsInput, EventUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: EventCreateOrConnectWithoutGoalsInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<EventCreateWithoutGoalsInput, EventUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: EventCreateOrConnectWithoutGoalsInput
    upsert?: EventUpsertWithoutGoalsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutGoalsInput, EventUpdateWithoutGoalsInput>, EventUncheckedUpdateWithoutGoalsInput>
  }

  export type EventCreateNestedOneWithoutNotesInput = {
    create?: XOR<EventCreateWithoutNotesInput, EventUncheckedCreateWithoutNotesInput>
    connectOrCreate?: EventCreateOrConnectWithoutNotesInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<EventCreateWithoutNotesInput, EventUncheckedCreateWithoutNotesInput>
    connectOrCreate?: EventCreateOrConnectWithoutNotesInput
    upsert?: EventUpsertWithoutNotesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutNotesInput, EventUpdateWithoutNotesInput>, EventUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EventCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    tasks?: TaskCreateNestedManyWithoutEventInput
    goals?: EventGoalCreateNestedManyWithoutEventInput
    notes?: EventNoteCreateNestedManyWithoutEventInput
    inviteLinks?: EventInviteLinkCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    tasks?: TaskUncheckedCreateNestedManyWithoutEventInput
    goals?: EventGoalUncheckedCreateNestedManyWithoutEventInput
    notes?: EventNoteUncheckedCreateNestedManyWithoutEventInput
    inviteLinks?: EventInviteLinkUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput>
  }

  export type EventCreateManyCreatedByInputEnvelope = {
    data: EventCreateManyCreatedByInput | EventCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type RegistrationCreateWithoutUserInput = {
    id?: string
    ticketNumber: string
    attendanceStatus?: $Enums.AttendanceStatus
    registeredAt?: Date | string
    event: EventCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateWithoutUserInput = {
    id?: string
    ticketNumber: string
    attendanceStatus?: $Enums.AttendanceStatus
    eventId: string
    registeredAt?: Date | string
  }

  export type RegistrationCreateOrConnectWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
  }

  export type RegistrationCreateManyUserInputEnvelope = {
    data: RegistrationCreateManyUserInput | RegistrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskAssignmentCreateWithoutUserInput = {
    id?: string
    assignedAt?: Date | string
    task: TaskCreateNestedOneWithoutAssignmentsInput
  }

  export type TaskAssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    taskId: string
    assignedAt?: Date | string
  }

  export type TaskAssignmentCreateOrConnectWithoutUserInput = {
    where: TaskAssignmentWhereUniqueInput
    create: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput>
  }

  export type TaskAssignmentCreateManyUserInputEnvelope = {
    data: TaskAssignmentCreateManyUserInput | TaskAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpdateCreateWithoutUserInput = {
    id?: string
    message: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutUpdatesInput
  }

  export type TaskUpdateUncheckedCreateWithoutUserInput = {
    id?: string
    message: string
    taskId: string
    createdAt?: Date | string
  }

  export type TaskUpdateCreateOrConnectWithoutUserInput = {
    where: TaskUpdateWhereUniqueInput
    create: XOR<TaskUpdateCreateWithoutUserInput, TaskUpdateUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateCreateManyUserInputEnvelope = {
    data: TaskUpdateCreateManyUserInput | TaskUpdateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventNoteCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutNotesInput
  }

  export type EventNoteUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    eventId: string
    createdAt?: Date | string
  }

  export type EventNoteCreateOrConnectWithoutUserInput = {
    where: EventNoteWhereUniqueInput
    create: XOR<EventNoteCreateWithoutUserInput, EventNoteUncheckedCreateWithoutUserInput>
  }

  export type EventNoteCreateManyUserInputEnvelope = {
    data: EventNoteCreateManyUserInput | EventNoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutTasksInput
    assignments?: TaskAssignmentCreateNestedManyWithoutTaskInput
    updates?: TaskUpdateCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput
    updates?: TaskUpdateUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskCreateManyCreatedByInputEnvelope = {
    data: TaskCreateManyCreatedByInput | TaskCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCreatedByInput, EventUncheckedUpdateWithoutCreatedByInput>
    create: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCreatedByInput, EventUncheckedUpdateWithoutCreatedByInput>
  }

  export type EventUpdateManyWithWhereWithoutCreatedByInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeNullableFilter<"Event"> | Date | string | null
    location?: StringNullableFilter<"Event"> | string | null
    createdById?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type RegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutUserInput, RegistrationUncheckedUpdateWithoutUserInput>
    create: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutUserInput, RegistrationUncheckedUpdateWithoutUserInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutUserInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutUserInput>
  }

  export type RegistrationScalarWhereInput = {
    AND?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
    OR?: RegistrationScalarWhereInput[]
    NOT?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
    id?: StringFilter<"Registration"> | string
    ticketNumber?: StringFilter<"Registration"> | string
    attendanceStatus?: EnumAttendanceStatusFilter<"Registration"> | $Enums.AttendanceStatus
    eventId?: StringFilter<"Registration"> | string
    userId?: StringFilter<"Registration"> | string
    registeredAt?: DateTimeFilter<"Registration"> | Date | string
  }

  export type TaskAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskAssignmentWhereUniqueInput
    update: XOR<TaskAssignmentUpdateWithoutUserInput, TaskAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<TaskAssignmentCreateWithoutUserInput, TaskAssignmentUncheckedCreateWithoutUserInput>
  }

  export type TaskAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskAssignmentWhereUniqueInput
    data: XOR<TaskAssignmentUpdateWithoutUserInput, TaskAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type TaskAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: TaskAssignmentScalarWhereInput
    data: XOR<TaskAssignmentUpdateManyMutationInput, TaskAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskAssignmentScalarWhereInput = {
    AND?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
    OR?: TaskAssignmentScalarWhereInput[]
    NOT?: TaskAssignmentScalarWhereInput | TaskAssignmentScalarWhereInput[]
    id?: StringFilter<"TaskAssignment"> | string
    taskId?: StringFilter<"TaskAssignment"> | string
    userId?: StringFilter<"TaskAssignment"> | string
    assignedAt?: DateTimeFilter<"TaskAssignment"> | Date | string
  }

  export type TaskUpdateUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskUpdateWhereUniqueInput
    update: XOR<TaskUpdateUpdateWithoutUserInput, TaskUpdateUncheckedUpdateWithoutUserInput>
    create: XOR<TaskUpdateCreateWithoutUserInput, TaskUpdateUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskUpdateWhereUniqueInput
    data: XOR<TaskUpdateUpdateWithoutUserInput, TaskUpdateUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateUpdateManyWithWhereWithoutUserInput = {
    where: TaskUpdateScalarWhereInput
    data: XOR<TaskUpdateUpdateManyMutationInput, TaskUpdateUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskUpdateScalarWhereInput = {
    AND?: TaskUpdateScalarWhereInput | TaskUpdateScalarWhereInput[]
    OR?: TaskUpdateScalarWhereInput[]
    NOT?: TaskUpdateScalarWhereInput | TaskUpdateScalarWhereInput[]
    id?: StringFilter<"TaskUpdate"> | string
    message?: StringFilter<"TaskUpdate"> | string
    taskId?: StringFilter<"TaskUpdate"> | string
    userId?: StringFilter<"TaskUpdate"> | string
    createdAt?: DateTimeFilter<"TaskUpdate"> | Date | string
  }

  export type EventNoteUpsertWithWhereUniqueWithoutUserInput = {
    where: EventNoteWhereUniqueInput
    update: XOR<EventNoteUpdateWithoutUserInput, EventNoteUncheckedUpdateWithoutUserInput>
    create: XOR<EventNoteCreateWithoutUserInput, EventNoteUncheckedCreateWithoutUserInput>
  }

  export type EventNoteUpdateWithWhereUniqueWithoutUserInput = {
    where: EventNoteWhereUniqueInput
    data: XOR<EventNoteUpdateWithoutUserInput, EventNoteUncheckedUpdateWithoutUserInput>
  }

  export type EventNoteUpdateManyWithWhereWithoutUserInput = {
    where: EventNoteScalarWhereInput
    data: XOR<EventNoteUpdateManyMutationInput, EventNoteUncheckedUpdateManyWithoutUserInput>
  }

  export type EventNoteScalarWhereInput = {
    AND?: EventNoteScalarWhereInput | EventNoteScalarWhereInput[]
    OR?: EventNoteScalarWhereInput[]
    NOT?: EventNoteScalarWhereInput | EventNoteScalarWhereInput[]
    id?: StringFilter<"EventNote"> | string
    content?: StringFilter<"EventNote"> | string
    eventId?: StringFilter<"EventNote"> | string
    userId?: StringFilter<"EventNote"> | string
    createdAt?: DateTimeFilter<"EventNote"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCreatedByInput, TaskUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCreatedByInput, TaskUncheckedUpdateWithoutCreatedByInput>
  }

  export type TaskUpdateManyWithWhereWithoutCreatedByInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    deadline?: DateTimeNullableFilter<"Task"> | Date | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    eventId?: StringFilter<"Task"> | string
    createdById?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type UserCreateWithoutCreatedEventsInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    taskUpdates?: TaskUpdateCreateNestedManyWithoutUserInput
    notes?: EventNoteCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedEventsInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    taskUpdates?: TaskUpdateUncheckedCreateNestedManyWithoutUserInput
    notes?: EventNoteUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
  }

  export type RegistrationCreateWithoutEventInput = {
    id?: string
    ticketNumber: string
    attendanceStatus?: $Enums.AttendanceStatus
    registeredAt?: Date | string
    user: UserCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateWithoutEventInput = {
    id?: string
    ticketNumber: string
    attendanceStatus?: $Enums.AttendanceStatus
    userId: string
    registeredAt?: Date | string
  }

  export type RegistrationCreateOrConnectWithoutEventInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput>
  }

  export type RegistrationCreateManyEventInputEnvelope = {
    data: RegistrationCreateManyEventInput | RegistrationCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutEventInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutTasksInput
    assignments?: TaskAssignmentCreateNestedManyWithoutTaskInput
    updates?: TaskUpdateCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutEventInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput
    updates?: TaskUpdateUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutEventInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutEventInput, TaskUncheckedCreateWithoutEventInput>
  }

  export type TaskCreateManyEventInputEnvelope = {
    data: TaskCreateManyEventInput | TaskCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventGoalCreateWithoutEventInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
  }

  export type EventGoalUncheckedCreateWithoutEventInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
  }

  export type EventGoalCreateOrConnectWithoutEventInput = {
    where: EventGoalWhereUniqueInput
    create: XOR<EventGoalCreateWithoutEventInput, EventGoalUncheckedCreateWithoutEventInput>
  }

  export type EventGoalCreateManyEventInputEnvelope = {
    data: EventGoalCreateManyEventInput | EventGoalCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventNoteCreateWithoutEventInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
  }

  export type EventNoteUncheckedCreateWithoutEventInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
  }

  export type EventNoteCreateOrConnectWithoutEventInput = {
    where: EventNoteWhereUniqueInput
    create: XOR<EventNoteCreateWithoutEventInput, EventNoteUncheckedCreateWithoutEventInput>
  }

  export type EventNoteCreateManyEventInputEnvelope = {
    data: EventNoteCreateManyEventInput | EventNoteCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventInviteLinkCreateWithoutEventInput = {
    id?: string
    token: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EventInviteLinkUncheckedCreateWithoutEventInput = {
    id?: string
    token: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EventInviteLinkCreateOrConnectWithoutEventInput = {
    where: EventInviteLinkWhereUniqueInput
    create: XOR<EventInviteLinkCreateWithoutEventInput, EventInviteLinkUncheckedCreateWithoutEventInput>
  }

  export type EventInviteLinkCreateManyEventInputEnvelope = {
    data: EventInviteLinkCreateManyEventInput | EventInviteLinkCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedEventsInput = {
    update: XOR<UserUpdateWithoutCreatedEventsInput, UserUncheckedUpdateWithoutCreatedEventsInput>
    create: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedEventsInput, UserUncheckedUpdateWithoutCreatedEventsInput>
  }

  export type UserUpdateWithoutCreatedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    taskUpdates?: TaskUpdateUpdateManyWithoutUserNestedInput
    notes?: EventNoteUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    taskUpdates?: TaskUpdateUncheckedUpdateManyWithoutUserNestedInput
    notes?: EventNoteUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type RegistrationUpsertWithWhereUniqueWithoutEventInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutEventInput, RegistrationUncheckedUpdateWithoutEventInput>
    create: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutEventInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutEventInput, RegistrationUncheckedUpdateWithoutEventInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutEventInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutEventInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutEventInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutEventInput, TaskUncheckedUpdateWithoutEventInput>
    create: XOR<TaskCreateWithoutEventInput, TaskUncheckedCreateWithoutEventInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutEventInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutEventInput, TaskUncheckedUpdateWithoutEventInput>
  }

  export type TaskUpdateManyWithWhereWithoutEventInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutEventInput>
  }

  export type EventGoalUpsertWithWhereUniqueWithoutEventInput = {
    where: EventGoalWhereUniqueInput
    update: XOR<EventGoalUpdateWithoutEventInput, EventGoalUncheckedUpdateWithoutEventInput>
    create: XOR<EventGoalCreateWithoutEventInput, EventGoalUncheckedCreateWithoutEventInput>
  }

  export type EventGoalUpdateWithWhereUniqueWithoutEventInput = {
    where: EventGoalWhereUniqueInput
    data: XOR<EventGoalUpdateWithoutEventInput, EventGoalUncheckedUpdateWithoutEventInput>
  }

  export type EventGoalUpdateManyWithWhereWithoutEventInput = {
    where: EventGoalScalarWhereInput
    data: XOR<EventGoalUpdateManyMutationInput, EventGoalUncheckedUpdateManyWithoutEventInput>
  }

  export type EventGoalScalarWhereInput = {
    AND?: EventGoalScalarWhereInput | EventGoalScalarWhereInput[]
    OR?: EventGoalScalarWhereInput[]
    NOT?: EventGoalScalarWhereInput | EventGoalScalarWhereInput[]
    id?: StringFilter<"EventGoal"> | string
    title?: StringFilter<"EventGoal"> | string
    description?: StringNullableFilter<"EventGoal"> | string | null
    eventId?: StringFilter<"EventGoal"> | string
    createdAt?: DateTimeFilter<"EventGoal"> | Date | string
  }

  export type EventNoteUpsertWithWhereUniqueWithoutEventInput = {
    where: EventNoteWhereUniqueInput
    update: XOR<EventNoteUpdateWithoutEventInput, EventNoteUncheckedUpdateWithoutEventInput>
    create: XOR<EventNoteCreateWithoutEventInput, EventNoteUncheckedCreateWithoutEventInput>
  }

  export type EventNoteUpdateWithWhereUniqueWithoutEventInput = {
    where: EventNoteWhereUniqueInput
    data: XOR<EventNoteUpdateWithoutEventInput, EventNoteUncheckedUpdateWithoutEventInput>
  }

  export type EventNoteUpdateManyWithWhereWithoutEventInput = {
    where: EventNoteScalarWhereInput
    data: XOR<EventNoteUpdateManyMutationInput, EventNoteUncheckedUpdateManyWithoutEventInput>
  }

  export type EventInviteLinkUpsertWithWhereUniqueWithoutEventInput = {
    where: EventInviteLinkWhereUniqueInput
    update: XOR<EventInviteLinkUpdateWithoutEventInput, EventInviteLinkUncheckedUpdateWithoutEventInput>
    create: XOR<EventInviteLinkCreateWithoutEventInput, EventInviteLinkUncheckedCreateWithoutEventInput>
  }

  export type EventInviteLinkUpdateWithWhereUniqueWithoutEventInput = {
    where: EventInviteLinkWhereUniqueInput
    data: XOR<EventInviteLinkUpdateWithoutEventInput, EventInviteLinkUncheckedUpdateWithoutEventInput>
  }

  export type EventInviteLinkUpdateManyWithWhereWithoutEventInput = {
    where: EventInviteLinkScalarWhereInput
    data: XOR<EventInviteLinkUpdateManyMutationInput, EventInviteLinkUncheckedUpdateManyWithoutEventInput>
  }

  export type EventInviteLinkScalarWhereInput = {
    AND?: EventInviteLinkScalarWhereInput | EventInviteLinkScalarWhereInput[]
    OR?: EventInviteLinkScalarWhereInput[]
    NOT?: EventInviteLinkScalarWhereInput | EventInviteLinkScalarWhereInput[]
    id?: StringFilter<"EventInviteLink"> | string
    token?: StringFilter<"EventInviteLink"> | string
    expiresAt?: DateTimeNullableFilter<"EventInviteLink"> | Date | string | null
    eventId?: StringFilter<"EventInviteLink"> | string
    createdAt?: DateTimeFilter<"EventInviteLink"> | Date | string
  }

  export type EventCreateWithoutInviteLinksInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    tasks?: TaskCreateNestedManyWithoutEventInput
    goals?: EventGoalCreateNestedManyWithoutEventInput
    notes?: EventNoteCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutInviteLinksInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    tasks?: TaskUncheckedCreateNestedManyWithoutEventInput
    goals?: EventGoalUncheckedCreateNestedManyWithoutEventInput
    notes?: EventNoteUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutInviteLinksInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutInviteLinksInput, EventUncheckedCreateWithoutInviteLinksInput>
  }

  export type EventUpsertWithoutInviteLinksInput = {
    update: XOR<EventUpdateWithoutInviteLinksInput, EventUncheckedUpdateWithoutInviteLinksInput>
    create: XOR<EventCreateWithoutInviteLinksInput, EventUncheckedCreateWithoutInviteLinksInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutInviteLinksInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutInviteLinksInput, EventUncheckedUpdateWithoutInviteLinksInput>
  }

  export type EventUpdateWithoutInviteLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    tasks?: TaskUpdateManyWithoutEventNestedInput
    goals?: EventGoalUpdateManyWithoutEventNestedInput
    notes?: EventNoteUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutInviteLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutEventNestedInput
    goals?: EventGoalUncheckedUpdateManyWithoutEventNestedInput
    notes?: EventNoteUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutRegistrationsInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    tasks?: TaskCreateNestedManyWithoutEventInput
    goals?: EventGoalCreateNestedManyWithoutEventInput
    notes?: EventNoteCreateNestedManyWithoutEventInput
    inviteLinks?: EventInviteLinkCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutEventInput
    goals?: EventGoalUncheckedCreateNestedManyWithoutEventInput
    notes?: EventNoteUncheckedCreateNestedManyWithoutEventInput
    inviteLinks?: EventInviteLinkUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutRegistrationsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
  }

  export type UserCreateWithoutRegistrationsInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    taskUpdates?: TaskUpdateCreateNestedManyWithoutUserInput
    notes?: EventNoteCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    taskUpdates?: TaskUpdateUncheckedCreateNestedManyWithoutUserInput
    notes?: EventNoteUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutRegistrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
  }

  export type EventUpsertWithoutRegistrationsInput = {
    update: XOR<EventUpdateWithoutRegistrationsInput, EventUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutRegistrationsInput, EventUncheckedUpdateWithoutRegistrationsInput>
  }

  export type EventUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    tasks?: TaskUpdateManyWithoutEventNestedInput
    goals?: EventGoalUpdateManyWithoutEventNestedInput
    notes?: EventNoteUpdateManyWithoutEventNestedInput
    inviteLinks?: EventInviteLinkUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutEventNestedInput
    goals?: EventGoalUncheckedUpdateManyWithoutEventNestedInput
    notes?: EventNoteUncheckedUpdateManyWithoutEventNestedInput
    inviteLinks?: EventInviteLinkUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutRegistrationsInput = {
    update: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    taskUpdates?: TaskUpdateUpdateManyWithoutUserNestedInput
    notes?: EventNoteUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    taskUpdates?: TaskUpdateUncheckedUpdateManyWithoutUserNestedInput
    notes?: EventNoteUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type EventCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    goals?: EventGoalCreateNestedManyWithoutEventInput
    notes?: EventNoteCreateNestedManyWithoutEventInput
    inviteLinks?: EventInviteLinkCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    goals?: EventGoalUncheckedCreateNestedManyWithoutEventInput
    notes?: EventNoteUncheckedCreateNestedManyWithoutEventInput
    inviteLinks?: EventInviteLinkUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTasksInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTasksInput, EventUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    taskUpdates?: TaskUpdateCreateNestedManyWithoutUserInput
    notes?: EventNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    taskUpdates?: TaskUpdateUncheckedCreateNestedManyWithoutUserInput
    notes?: EventNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type TaskAssignmentCreateWithoutTaskInput = {
    id?: string
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutTaskAssignmentsInput
  }

  export type TaskAssignmentUncheckedCreateWithoutTaskInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
  }

  export type TaskAssignmentCreateOrConnectWithoutTaskInput = {
    where: TaskAssignmentWhereUniqueInput
    create: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput>
  }

  export type TaskAssignmentCreateManyTaskInputEnvelope = {
    data: TaskAssignmentCreateManyTaskInput | TaskAssignmentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpdateCreateWithoutTaskInput = {
    id?: string
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTaskUpdatesInput
  }

  export type TaskUpdateUncheckedCreateWithoutTaskInput = {
    id?: string
    message: string
    userId: string
    createdAt?: Date | string
  }

  export type TaskUpdateCreateOrConnectWithoutTaskInput = {
    where: TaskUpdateWhereUniqueInput
    create: XOR<TaskUpdateCreateWithoutTaskInput, TaskUpdateUncheckedCreateWithoutTaskInput>
  }

  export type TaskUpdateCreateManyTaskInputEnvelope = {
    data: TaskUpdateCreateManyTaskInput | TaskUpdateCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutTasksInput = {
    update: XOR<EventUpdateWithoutTasksInput, EventUncheckedUpdateWithoutTasksInput>
    create: XOR<EventCreateWithoutTasksInput, EventUncheckedCreateWithoutTasksInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTasksInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTasksInput, EventUncheckedUpdateWithoutTasksInput>
  }

  export type EventUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    goals?: EventGoalUpdateManyWithoutEventNestedInput
    notes?: EventNoteUpdateManyWithoutEventNestedInput
    inviteLinks?: EventInviteLinkUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    goals?: EventGoalUncheckedUpdateManyWithoutEventNestedInput
    notes?: EventNoteUncheckedUpdateManyWithoutEventNestedInput
    inviteLinks?: EventInviteLinkUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    taskUpdates?: TaskUpdateUpdateManyWithoutUserNestedInput
    notes?: EventNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    taskUpdates?: TaskUpdateUncheckedUpdateManyWithoutUserNestedInput
    notes?: EventNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskAssignmentWhereUniqueInput
    update: XOR<TaskAssignmentUpdateWithoutTaskInput, TaskAssignmentUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskAssignmentCreateWithoutTaskInput, TaskAssignmentUncheckedCreateWithoutTaskInput>
  }

  export type TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskAssignmentWhereUniqueInput
    data: XOR<TaskAssignmentUpdateWithoutTaskInput, TaskAssignmentUncheckedUpdateWithoutTaskInput>
  }

  export type TaskAssignmentUpdateManyWithWhereWithoutTaskInput = {
    where: TaskAssignmentScalarWhereInput
    data: XOR<TaskAssignmentUpdateManyMutationInput, TaskAssignmentUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskUpdateUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskUpdateWhereUniqueInput
    update: XOR<TaskUpdateUpdateWithoutTaskInput, TaskUpdateUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskUpdateCreateWithoutTaskInput, TaskUpdateUncheckedCreateWithoutTaskInput>
  }

  export type TaskUpdateUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskUpdateWhereUniqueInput
    data: XOR<TaskUpdateUpdateWithoutTaskInput, TaskUpdateUncheckedUpdateWithoutTaskInput>
  }

  export type TaskUpdateUpdateManyWithWhereWithoutTaskInput = {
    where: TaskUpdateScalarWhereInput
    data: XOR<TaskUpdateUpdateManyMutationInput, TaskUpdateUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutTasksInput
    createdBy: UserCreateNestedOneWithoutTasksInput
    updates?: TaskUpdateCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    eventId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updates?: TaskUpdateUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAssignmentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignmentsInput, TaskUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutTaskAssignmentsInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    taskUpdates?: TaskUpdateCreateNestedManyWithoutUserInput
    notes?: EventNoteCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTaskAssignmentsInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    taskUpdates?: TaskUpdateUncheckedCreateNestedManyWithoutUserInput
    notes?: EventNoteUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTaskAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskAssignmentsInput, UserUncheckedCreateWithoutTaskAssignmentsInput>
  }

  export type TaskUpsertWithoutAssignmentsInput = {
    update: XOR<TaskUpdateWithoutAssignmentsInput, TaskUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<TaskCreateWithoutAssignmentsInput, TaskUncheckedCreateWithoutAssignmentsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutAssignmentsInput, TaskUncheckedUpdateWithoutAssignmentsInput>
  }

  export type TaskUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTasksNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTasksNestedInput
    updates?: TaskUpdateUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    eventId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: TaskUpdateUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutTaskAssignmentsInput = {
    update: XOR<UserUpdateWithoutTaskAssignmentsInput, UserUncheckedUpdateWithoutTaskAssignmentsInput>
    create: XOR<UserCreateWithoutTaskAssignmentsInput, UserUncheckedCreateWithoutTaskAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskAssignmentsInput, UserUncheckedUpdateWithoutTaskAssignmentsInput>
  }

  export type UserUpdateWithoutTaskAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    taskUpdates?: TaskUpdateUpdateManyWithoutUserNestedInput
    notes?: EventNoteUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    taskUpdates?: TaskUpdateUncheckedUpdateManyWithoutUserNestedInput
    notes?: EventNoteUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TaskCreateWithoutUpdatesInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutTasksInput
    createdBy: UserCreateNestedOneWithoutTasksInput
    assignments?: TaskAssignmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUpdatesInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    eventId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUpdatesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUpdatesInput, TaskUncheckedCreateWithoutUpdatesInput>
  }

  export type UserCreateWithoutTaskUpdatesInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    notes?: EventNoteCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTaskUpdatesInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    notes?: EventNoteUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTaskUpdatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskUpdatesInput, UserUncheckedCreateWithoutTaskUpdatesInput>
  }

  export type TaskUpsertWithoutUpdatesInput = {
    update: XOR<TaskUpdateWithoutUpdatesInput, TaskUncheckedUpdateWithoutUpdatesInput>
    create: XOR<TaskCreateWithoutUpdatesInput, TaskUncheckedCreateWithoutUpdatesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutUpdatesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutUpdatesInput, TaskUncheckedUpdateWithoutUpdatesInput>
  }

  export type TaskUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTasksNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTasksNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    eventId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutTaskUpdatesInput = {
    update: XOR<UserUpdateWithoutTaskUpdatesInput, UserUncheckedUpdateWithoutTaskUpdatesInput>
    create: XOR<UserCreateWithoutTaskUpdatesInput, UserUncheckedCreateWithoutTaskUpdatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskUpdatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskUpdatesInput, UserUncheckedUpdateWithoutTaskUpdatesInput>
  }

  export type UserUpdateWithoutTaskUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    notes?: EventNoteUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    notes?: EventNoteUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type EventCreateWithoutGoalsInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    tasks?: TaskCreateNestedManyWithoutEventInput
    notes?: EventNoteCreateNestedManyWithoutEventInput
    inviteLinks?: EventInviteLinkCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutGoalsInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    tasks?: TaskUncheckedCreateNestedManyWithoutEventInput
    notes?: EventNoteUncheckedCreateNestedManyWithoutEventInput
    inviteLinks?: EventInviteLinkUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutGoalsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutGoalsInput, EventUncheckedCreateWithoutGoalsInput>
  }

  export type EventUpsertWithoutGoalsInput = {
    update: XOR<EventUpdateWithoutGoalsInput, EventUncheckedUpdateWithoutGoalsInput>
    create: XOR<EventCreateWithoutGoalsInput, EventUncheckedCreateWithoutGoalsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutGoalsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutGoalsInput, EventUncheckedUpdateWithoutGoalsInput>
  }

  export type EventUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    tasks?: TaskUpdateManyWithoutEventNestedInput
    notes?: EventNoteUpdateManyWithoutEventNestedInput
    inviteLinks?: EventInviteLinkUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutEventNestedInput
    notes?: EventNoteUncheckedUpdateManyWithoutEventNestedInput
    inviteLinks?: EventInviteLinkUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutNotesInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    tasks?: TaskCreateNestedManyWithoutEventInput
    goals?: EventGoalCreateNestedManyWithoutEventInput
    inviteLinks?: EventInviteLinkCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutNotesInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    tasks?: TaskUncheckedCreateNestedManyWithoutEventInput
    goals?: EventGoalUncheckedCreateNestedManyWithoutEventInput
    inviteLinks?: EventInviteLinkUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutNotesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutNotesInput, EventUncheckedCreateWithoutNotesInput>
  }

  export type UserCreateWithoutNotesInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentCreateNestedManyWithoutUserInput
    taskUpdates?: TaskUpdateCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: string
    fullName: string
    phone: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    taskAssignments?: TaskAssignmentUncheckedCreateNestedManyWithoutUserInput
    taskUpdates?: TaskUpdateUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type EventUpsertWithoutNotesInput = {
    update: XOR<EventUpdateWithoutNotesInput, EventUncheckedUpdateWithoutNotesInput>
    create: XOR<EventCreateWithoutNotesInput, EventUncheckedCreateWithoutNotesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutNotesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutNotesInput, EventUncheckedUpdateWithoutNotesInput>
  }

  export type EventUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    tasks?: TaskUpdateManyWithoutEventNestedInput
    goals?: EventGoalUpdateManyWithoutEventNestedInput
    inviteLinks?: EventInviteLinkUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutEventNestedInput
    goals?: EventGoalUncheckedUpdateManyWithoutEventNestedInput
    inviteLinks?: EventInviteLinkUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUpdateManyWithoutUserNestedInput
    taskUpdates?: TaskUpdateUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    taskAssignments?: TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput
    taskUpdates?: TaskUpdateUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type EventCreateManyCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationCreateManyUserInput = {
    id?: string
    ticketNumber: string
    attendanceStatus?: $Enums.AttendanceStatus
    eventId: string
    registeredAt?: Date | string
  }

  export type TaskAssignmentCreateManyUserInput = {
    id?: string
    taskId: string
    assignedAt?: Date | string
  }

  export type TaskUpdateCreateManyUserInput = {
    id?: string
    message: string
    taskId: string
    createdAt?: Date | string
  }

  export type EventNoteCreateManyUserInput = {
    id?: string
    content: string
    eventId: string
    createdAt?: Date | string
  }

  export type TaskCreateManyCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    tasks?: TaskUpdateManyWithoutEventNestedInput
    goals?: EventGoalUpdateManyWithoutEventNestedInput
    notes?: EventNoteUpdateManyWithoutEventNestedInput
    inviteLinks?: EventInviteLinkUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutEventNestedInput
    goals?: EventGoalUncheckedUpdateManyWithoutEventNestedInput
    notes?: EventNoteUncheckedUpdateManyWithoutEventNestedInput
    inviteLinks?: EventInviteLinkUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    eventId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    eventId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAssignmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type TaskAssignmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutUpdatesNestedInput
  }

  export type TaskUpdateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventNoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutNotesNestedInput
  }

  export type EventNoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventNoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTasksNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutTaskNestedInput
    updates?: TaskUpdateUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput
    updates?: TaskUpdateUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationCreateManyEventInput = {
    id?: string
    ticketNumber: string
    attendanceStatus?: $Enums.AttendanceStatus
    userId: string
    registeredAt?: Date | string
  }

  export type TaskCreateManyEventInput = {
    id?: string
    title: string
    description?: string | null
    deadline?: Date | string | null
    status?: $Enums.TaskStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventGoalCreateManyEventInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
  }

  export type EventNoteCreateManyEventInput = {
    id?: string
    content: string
    userId: string
    createdAt?: Date | string
  }

  export type EventInviteLinkCreateManyEventInput = {
    id?: string
    token: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RegistrationUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    userId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    attendanceStatus?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    userId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutTasksNestedInput
    assignments?: TaskAssignmentUpdateManyWithoutTaskNestedInput
    updates?: TaskUpdateUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput
    updates?: TaskUpdateUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventGoalUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventGoalUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventGoalUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventNoteUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type EventNoteUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventNoteUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventInviteLinkUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventInviteLinkUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventInviteLinkUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAssignmentCreateManyTaskInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
  }

  export type TaskUpdateCreateManyTaskInput = {
    id?: string
    message: string
    userId: string
    createdAt?: Date | string
  }

  export type TaskAssignmentUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTaskAssignmentsNestedInput
  }

  export type TaskAssignmentUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAssignmentUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTaskUpdatesNestedInput
  }

  export type TaskUpdateUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventCountOutputTypeDefaultArgs instead
     */
    export type EventCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskCountOutputTypeDefaultArgs instead
     */
    export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventInviteLinkDefaultArgs instead
     */
    export type EventInviteLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventInviteLinkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegistrationDefaultArgs instead
     */
    export type RegistrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegistrationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskAssignmentDefaultArgs instead
     */
    export type TaskAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskAssignmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventGoalDefaultArgs instead
     */
    export type EventGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventGoalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventNoteDefaultArgs instead
     */
    export type EventNoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventNoteDefaultArgs<ExtArgs>

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