export const appeals: Array<AppealI> = [
    {
        name: "KFC",
        appealsNumber: 228,
        districtFitness: 40,
    },
    {
        name: "Районный суд",
        appealsNumber: 700,
        districtFitness: 26,

    },
    {
        name: "ТД - Есиль",
        appealsNumber: 5,
        districtFitness: 70,

    },
    {
        name: "ТЦ Хан Шатыр",
        appealsNumber: 400,
        districtFitness: 80,

    },
    {
        name: "Цон Есильский",
        appealsNumber: 1250,
        districtFitness: 20,

    },
    {
        name: "Цон Алматинского района",
        appealsNumber: 2000,
        districtFitness: 35,

    },
    {
        name: "Отель Думан",
        appealsNumber: 2,
        districtFitness: 60,

    },
    {
        name: "ТЦ Керуен Сити",
        appealsNumber: 500,
        districtFitness: 15,

    },
    {
        name: "Burger King",
        appealsNumber: 211,
        districtFitness: 46,

    },
    {
        name: "Дом Министерств",
        appealsNumber: 1700,
        districtFitness: 18,

    },
    {
        name: "ТД Евразия",
        appealsNumber: 1001,
        districtFitness: 53,

    },
    {
        name: "Ресторан Туран",
        appealsNumber: 60,
        districtFitness: 71,

    },
    {
        name: "Ресторан Якитория",
        appealsNumber: 49,
        districtFitness: 64,

    },
    {
        name: "Гипермаркет Магнум",
        appealsNumber: 350,
        districtFitness: 87,

    },
    {
        name: "Сеть супермаркетов SMALL",
        appealsNumber: 125,
        districtFitness: 42,

    },
    {
        name: "Кофейня Coffee Shot",
        appealsNumber: 41,
        districtFitness: 20,

    },
    {
        name: "Ледовый дворец Алау",
        appealsNumber: 302,
        districtFitness: 77,

    },
    {
        name: "Стадион Астана-Арена",
        appealsNumber: 326,
        districtFitness: 82,

    },
    {
        name: "Президентский парк",
        appealsNumber: 667,
        districtFitness: 23,

    },
    {
        name: "Ботанический сад",
        appealsNumber: 100,
        districtFitness: 91,

    },
    {
        name: "Шар Экспо",
        appealsNumber: 20,
        districtFitness: 96,

    },
    {
        name: "ТЦ Mega Silkway",
        appealsNumber: 654,
        districtFitness: 64,

    },
    {
        name: "Музей искусств",
        appealsNumber: 147,
        districtFitness: 68,

    }];

// export const appealDescriptions: any = {
//     "blind": [
//         `Нет визуальных источников информации`,
//     ],
//     ""
// }




export const categories: Array<string> = [
    "blind",
    "deaf",
    "motor",
    "wheelchair"
];

export const categoriesTranslation: any = {
    "blind": "Слепота",
    "deaf": "Глухота",
    "motor": "Опорно-двигательные отклонения",
    "wheelchair": "Колясочники"
};



export const featureMap: any = {
    "appealsNumber": "количества жалоб",
    "districtFitness": "приспособленности района",
    "rating": "рейтинга"
};

export interface AppealI {
    name: string,
    appealsNumber: number,
    districtFitness: number,
    rating?: number
}