/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query country($code: ID!) {\n        country(code: $code) {\n            name,\n            code,\n            emoji,\n            native,\n            capital,\n            phone,\n            awsRegion,\n            states {\n                code,\n                name\n            }\n            continent {\n                name\n            }\n            currency,\n            languages {\n                name\n            }\n\n        }\n    }\n": types.CountryDocument,
    "\n    query GetContinentCountries($continentCode: String!) {\n        countries(filter: { continent: { eq: $continentCode } }) {\n            emoji\n            name\n            code\n        }\n\n    }\n": types.GetContinentCountriesDocument,
    "\n    query GetAllCountries( $continentCodes: [String!]) {\n        countries(filter: { continent: { in:  $continentCodes } }) {\n            emoji\n            name\n            code\n        }\n    }\n": types.GetAllCountriesDocument,
    "\n   query GetAllContinents {\n        continents {\n            code,\n            name,\n            countries {\n                native\n                code\n                name\n                emoji\n            }\n        }\n    }\n": types.GetAllContinentsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query country($code: ID!) {\n        country(code: $code) {\n            name,\n            code,\n            emoji,\n            native,\n            capital,\n            phone,\n            awsRegion,\n            states {\n                code,\n                name\n            }\n            continent {\n                name\n            }\n            currency,\n            languages {\n                name\n            }\n\n        }\n    }\n"): (typeof documents)["\n    query country($code: ID!) {\n        country(code: $code) {\n            name,\n            code,\n            emoji,\n            native,\n            capital,\n            phone,\n            awsRegion,\n            states {\n                code,\n                name\n            }\n            continent {\n                name\n            }\n            currency,\n            languages {\n                name\n            }\n\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetContinentCountries($continentCode: String!) {\n        countries(filter: { continent: { eq: $continentCode } }) {\n            emoji\n            name\n            code\n        }\n\n    }\n"): (typeof documents)["\n    query GetContinentCountries($continentCode: String!) {\n        countries(filter: { continent: { eq: $continentCode } }) {\n            emoji\n            name\n            code\n        }\n\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetAllCountries( $continentCodes: [String!]) {\n        countries(filter: { continent: { in:  $continentCodes } }) {\n            emoji\n            name\n            code\n        }\n    }\n"): (typeof documents)["\n    query GetAllCountries( $continentCodes: [String!]) {\n        countries(filter: { continent: { in:  $continentCodes } }) {\n            emoji\n            name\n            code\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query GetAllContinents {\n        continents {\n            code,\n            name,\n            countries {\n                native\n                code\n                name\n                emoji\n            }\n        }\n    }\n"): (typeof documents)["\n   query GetAllContinents {\n        continents {\n            code,\n            name,\n            countries {\n                native\n                code\n                name\n                emoji\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;