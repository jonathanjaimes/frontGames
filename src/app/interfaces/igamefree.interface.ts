export interface IGameFree {
    appid:           number;
    name:            string;
    developer:       string;
    publisher:       string;
    score_rank:      number | string;
    positive:        number;
    negative:        number;
    userscore:       number;
    owners:          Owners;
    average_forever: number;
    average_2weeks:  number;
    median_forever:  number;
    median_2weeks:   number;
    price:           string;
    initialprice:    string;
    discount:        string;
    ccu:             number;
}

export enum Owners {
    The020000 = "0 .. 20,000",
    The100000000200000000 = "100,000,000 .. 200,000,000",
    The1000000020000000 = "10,000,000 .. 20,000,000",
    The10000002000000 = "1,000,000 .. 2,000,000",
    The100000200000 = "100,000 .. 200,000",
    The2000000050000000 = "20,000,000 .. 50,000,000",
    The20000005000000 = "2,000,000 .. 5,000,000",
    The200000500000 = "200,000 .. 500,000",
    The2000050000 = "20,000 .. 50,000",
    The50000000100000000 = "50,000,000 .. 100,000,000",
    The500000010000000 = "5,000,000 .. 10,000,000",
    The5000001000000 = "500,000 .. 1,000,000",
    The50000100000 = "50,000 .. 100,000",
}
