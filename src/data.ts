// eslint-disable-next-line prefer-const
let invoices = [
    {
        name: "Wide Open Spaces",
        number: 1998,
        amount: "$4,600",
        due: "01/27/1998,"
    },
    {
        name: "Neon Horizons",
        number: 2001,
        amount: "$3,250",
        due: "03/15/2001,"
    },
    {
        name: "Crimson Skies",
        number: 1999,
        amount: "$5,100",
        due: "06/08/1999,"
    },
    {
        name: "Silver Dust",
        number: 2005,
        amount: "$2,890",
        due: "11/23/2005,"
    },
    {
        name: "Midnight Echoes",
        number: 2003,
        amount: "$4,450",
        due: "09/02/2003,"
    },
    {
        name: "Golden Plains",
        number: 1997,
        amount: "$6,125",
        due: "12/18/1997,"
    }

];

export function getInvoices() {
    return invoices;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getInvoice(number: any){
    return invoices.find(
        (invoice) => invoice.number === number
    );
}