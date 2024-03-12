import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import { useQuery as useApolloQuery } from '@apollo/client';
import { Country } from '@/gql/graphql';
import { GetAllCountries, GetContinentCountries } from '@/queries';

type Props = {
    selectedContinent?: string,
    selectedCountry?: Country,
    setSelectedCountry: (country: Country) => void
    continentCodes: string[]
};


const CountryDropdown: React.FC<Props> = ({
                                              selectedContinent,
                                              selectedCountry,
                                              setSelectedCountry,
                                              continentCodes
                                          }) => {
    /*
    * Honestly these queries are not necessary, I could pass this data from the parent component
    * but I wanted to show how to use useApolloQuery hook with variables.
    * */
    const { data } = useApolloQuery<{
        countries: Country[],
    }>(GetContinentCountries, { variables: { continentCode: selectedContinent } });

    const { data: allCountriesData } = useApolloQuery<{
        countries: Country[],
    }>(GetAllCountries, { variables: { continentCodes } });

    const selectOptionTemplate = (name: string, emoji: string) => {
        return (
            <div className="flex align-items-center">
                <div>{emoji}</div>
                <div>{name}</div>
            </div>
        );
    };
    const OptionTemplate = ({ name, emoji }: { name?: string, emoji?: string }) => {
        if (name) {
            return (
                <div className="flex align-items-center">
                    <div>{emoji}</div>
                    <div>{name}</div>
                </div>
            );
        }

        return <span>Select a country to zoom!</span>;
    };

    return (
        <div className="field">
            <label htmlFor="Country">Country</label>
            <Dropdown
                filter

                data-testid="country-dropdown"
                value={selectedCountry}
                onChange={(e) => {
                    setSelectedCountry(e.value);
                }}
                options={(selectedContinent ? data?.countries : allCountriesData?.countries) ?? []}
                optionLabel="name" placeholder="Select a Country"
                valueTemplate={option => <OptionTemplate name={option?.name} emoji={option?.emoji} />}
                itemTemplate={option => selectOptionTemplate(option.name, option?.emoji)}
                className="w-full" />
        </div>
    );
};

export default CountryDropdown;
