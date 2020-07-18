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

export const categoriesColors: any = {
    "blind": "#464c88",
    "deaf": "#884b20",
    "motor": "#881234",
    "wheelchair": "#26885c",
    "all": "#77881a"
};

export const statuses = [
    "not started",
    "in progress",
    "done"
];

export const faces = [
    "akimat",
    "volunteer",
    "directors"
];

export const facesTranslations = {
    "akimat": "Акимат",
    "volunteer": "Волонтеры",
    "directors": "Директор частного предприятия"
};

export const statusesTranslations: {[key: string]: string} = {
    "not started": "Не начато",
    "in progress": "В процессе",
    "done": "Готово"
};

export const statusesColors: {[key: string]: string} = {
    "not started": "white",
    "in progress": "yellow",
    "done": "green"
};

export const appealDescriptions: any = {
    "blind": ["нет звуковой информации", "нет алфавита Braille", "нет компетентного персонала", "Не созданы условия для инвалидов!"],
    "deaf": ["нет визуальных картинок", "нет понятных объяснений", "персонал не может обслужить", "О готовности заказа можно только услышать"],
    "motor": ["нет лифта", "лифт не работает"],
    "wheelchair": ["нет пандуса", "нет перил", "эскалатор не работает", "Нет отдельных мест для людей с ограниченными возможностями"],
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