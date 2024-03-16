'use client';
import React, { useMemo, useState } from 'react';
import { useQuery as useApolloQuery } from '@apollo/client';
import { Continent, Country } from '@/gql/graphql';
import CountryDescription from '@/components/CountryDescription';
import { Card } from 'primereact/card';
import CountryDropdown from '@/components/CountrySelector';
import dynamic from 'next/dynamic';
import ContinentSelector from '@/components/ContinentSelector';
import { GetAllContinents } from '@/queries';

const DynamicMapContainer = dynamic(() => import('@/components/map/MapWrapper'), { ssr: false });


const Dashboard = () => {
    const { data } = useApolloQuery<{ continents: Continent[] }>(GetAllContinents);

    const [selectedCountry, setSelectedCountry] = useState<Country>();
    const [selectedContinent, setSelectedContinent] = useState<Continent>();

    const unfilteredCountries = useMemo(() => data?.continents?.map(c => c.countries).flat() ?? [], [data]);
    const continentCodes = useMemo(() => data?.continents?.map(c => c.code).flat() ?? [], [data]);

    return (
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-3">
                <Card className="mb-0">
                    <div className="flex justify-content-between mb-3 p-fluid">
                        <span className="block text-500 font-medium mb-3">Narrow yor search:</span>
                    </div>
                    <ContinentSelector selectedContinent={selectedContinent}
                                       setSelectedContinent={setSelectedContinent}
                                       continents={data?.continents}
                    />

                    <CountryDropdown continentCodes={continentCodes}
                                     selectedContinent={selectedContinent?.code}
                                     selectedCountry={selectedCountry}
                                     setSelectedCountry={setSelectedCountry} />

                </Card>
            </div>

            <div className="col-12 lg:col-6 xl:col-6">
                <DynamicMapContainer country={selectedCountry} onCountryClick={(selectedCountry) => {

                    setSelectedCountry(unfilteredCountries.find(c => c.code === selectedCountry));
                }} />
            </div>

            {selectedCountry?.code && <div className="col-12">
                <CountryDescription code={selectedCountry?.code}></CountryDescription>
            </div>}
        </div>
    );
};

export default Dashboard;
