import { Dropdown } from 'primereact/dropdown';
import React, { FC } from 'react';
import { Continent } from '@/gql/graphql';

type Props = {
    continents?: Partial<Continent>[],
    selectedContinent?: Continent,
    setSelectedContinent(continent: Continent): void
};

const ContinentSelector: FC<Props> = ({ setSelectedContinent, selectedContinent, continents = [] }) => {
    const getOptionTemplate = (name: string) => {
        return (
            <div className="flex align-items-center">
                <div>{name}</div>
            </div>
        );
    };

    const OptionTemplate = ({ name }: { name?: string }) => {
        if (name) return getOptionTemplate(name);
        return <span>Select continent</span>;
    };

    return (
        <div className="field">
            <label htmlFor="Continent">Continent</label>
            <Dropdown data-testid="continent-dropdown"
                      value={selectedContinent}
                      onChange={(e) => setSelectedContinent(e.value)}
                      options={continents ?? []}
                      optionLabel="name" placeholder="Select a Continent"
                      filter valueTemplate={option => <OptionTemplate name={option?.name} />}
                      itemTemplate={option => getOptionTemplate(option.name)}
                      className="w-full" />
        </div>
    );
};

export default ContinentSelector;