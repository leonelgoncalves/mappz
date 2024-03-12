import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PrimeReactProvider } from 'primereact/api';
import userEvent from '@testing-library/user-event';
import ContinentSelector from '@/components/ContinentSelector';
import { Continent } from '@/gql/graphql';

describe('ContinentSelector', () => {
    it('should render list of continents', async () => {
        const setSelectedContinent = jest.fn();
        const user = userEvent.setup();

        const comp = render(
            <PrimeReactProvider>
                <ContinentSelector continents={CONTINENTS} setSelectedContinent={setSelectedContinent} />
            </PrimeReactProvider>
        );

        await user.click(comp.getByTestId('continent-dropdown'));
        await Promise.all(CONTINENTS.map((continent) => {
            expect(comp.getByText(continent.name!)).toBeInTheDocument();
        }));
    });

    it('should call setSelectedContinent with selected country', async () => {
        const setSelectedContinent = jest.fn();
        const user = userEvent.setup();

        const comp = render(
            <PrimeReactProvider>
                <ContinentSelector continents={CONTINENTS} setSelectedContinent={setSelectedContinent} />
            </PrimeReactProvider>
        );

        await user.click(comp.getByTestId('continent-dropdown'));
        await user.click(comp.getByText('Africa'));
        expect(setSelectedContinent).toHaveBeenCalledWith(CONTINENTS[0]);

    });
});

const CONTINENTS: Partial<Continent>[] = [
    {
        'name': 'Africa',
        'code': 'AF'
    },
    {
        'name': 'Antarctica',
        'code': 'AN'
    },
    {
        'name': 'Asia',
        'code': 'AS'
    },
    {
        'name': 'Europe',
        'code': 'EU'
    },
    {
        'name': 'North America',
        'code': 'NA'
    },
    {
        'name': 'Oceania',
        'code': 'OC'
    },
    {
        'name': 'South America',
        'code': 'SA'
    }
];

