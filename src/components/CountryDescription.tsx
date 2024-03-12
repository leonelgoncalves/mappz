import { Country } from '@/gql/graphql';
import { gql, useQuery as useApolloQuery } from '@apollo/client';
import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import { FC } from 'react';
export const GetCountryByCode = gql`
    query country($code: ID!) {
        country(code: $code) {
            name,
            code,
            emoji,
            native,
            capital,
            phone,
            awsRegion,
            states {
                code,
                name
            }
            continent {
                name
            }
            currency,
            languages {
                name
            }

        }
    }
`;
const CountryDescription: FC<{ code: string }> = ({ code }) => {

    const { data } = useApolloQuery<{ country: Country }>(GetCountryByCode, {
        variables: {
            code
        }
    });

    return (
        <Card>
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Continent</div>
                    <div
                        className="text-900 w-full  md:flex-order-0 flex-order-1">{data?.country.continent.name}</div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Name</div>
                    <div
                        className="text-900 w-full  md:flex-order-0 flex-order-1">{data?.country.name} ({data?.country.native}) {data?.country.emoji}</div>
                </li>

                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Capital</div>
                    <div className="text-900 w-full md:flex-order-0 flex-order-1">{data?.country.capital}</div>
                </li>

                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Phone</div>
                    <div
                        className="text-900 w-full  md:flex-order-0 flex-order-1">+{data?.country.phone}</div>
                </li>

                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Languages</div>
                    <div className="text-900 w-full md:flex-order-0 flex-order-1 gap-1">
                        {data?.country?.languages.map((lang, index) => (
                            <Chip label={lang.name} className="mr-2 mb-1" key={index} />))}
                    </div>
                </li>

                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Currency</div>
                    <div className="text-900 w-full  md:flex-order-0 flex-order-1">{data?.country.currency}</div>
                </li>
            </ul>
        </Card>
    );
};

export default CountryDescription;
