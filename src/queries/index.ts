import { gql } from '@apollo/client';

export const GetContinentCountries = gql`
    query Countries($continentCode: String!) {
        countries(filter: { continent: { eq: $continentCode } }) {
            emoji
            name
            code
        }

    }
`;

export const GetAllCountries = gql`
    query Countries( $continentCodes: [String!]) {
        countries(filter: { continent: { in:  $continentCodes } }) {
            emoji
            name
            code
        }
    }
`;

export const getAllContinents = gql`
    {
        continents {
            code,
            name,
            countries {
                code
                name
                emoji
            }
        }
    }
`;