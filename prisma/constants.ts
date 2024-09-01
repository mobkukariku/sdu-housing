export const Filters = [
    {
        name: 'Photo is Available'
    },
    {
        name: 'Next to SDU'
    },
    {
        name: '1 Room'
    },
    {
        name: '2 Rooms'
    },
    {
        name: '3 Rooms'
    },
    {
        name: '4+ Rooms'
    },
    {
        name: 'Men'
    },
    {
        name: 'Women'
    },
    {
        name: "Doesn't matter"
    },
    {
        name: 'Furnished'
    },
    {
        name: 'partially furnished' 
    },
    {
        name: 'Not furnished'
    }
].map((obj, index) => ({ id: index + 1, ...obj }))
