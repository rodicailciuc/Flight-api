import { v4 as Id } from 'uuid';

const flights = [
    {
        id : Id(),
        from : 'Bruxelles',
        to : 'Paris',
        date : '2024-11-02',
        price : 200,
        company : 'Lufthansa'
    },
    {
        id : Id(),
        from : 'New York',
        to : 'Torronto',
        date : '2023-01-20',
        price : 150,
        company : 'Tarom'
    },
    {
        id : Id(),
        from : 'Berlin',
        to : 'Praga',
        date : '2024-05-23',
        price : 260,
        company : 'Wizzair'
    }
]


class Flight {
    static getAll() {
        return flights;
    }
    static getById(id) {
        return flights.find((flight) => flight.id === id);
    }
    static add(flight) {
        const newFlight = {
            id: Id(),
            ...flight
        };
        flights.unshift(newFlight);
        return newFlight;
    }
    static update (id, flight){
        const updateFlight = flights.find((flight) => flight.id === id);
        if(updateFlight) {
            updateFlight.from = flight.from;
            updateFlight.to = flight.to;
            updateFlight.date = flight.date;
            updateFlight.price = flight.price;
            updateFlight.company = flight.company;
        }
    }
    static delete (id) {
        const index = flights.findIndex((flight) => flight.id === id);
        flights.splice(index, 1);
        return { id };
    }
};

export default Flight;