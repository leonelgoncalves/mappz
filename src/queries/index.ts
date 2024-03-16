import { gql } from '@apollo/client';
import { graphql } from '@/gql';

export const GetContinentCountries = gql`
    query GetContinentCountries($continentCode: String!) {
        countries(filter: { continent: { eq: $continentCode } }) {
            emoji
            name
            code
        }

    }
`;

export const GetAllCountries = gql`
    query GetAllCountries( $continentCodes: [String!]) {
        countries(filter: { continent: { in:  $continentCodes } }) {
            emoji
            name
            code
        }
    }
`;

export const GetAllContinents = graphql(`
   query GetAllContinents {
        continents {
            code,
            name,
            countries {
                native
                code
                name
                emoji
            }
        }
    }
`);