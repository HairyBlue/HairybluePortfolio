const setSeoMeta = {
    title: 'Nicki Marty Pecision | Hairyblue',
    description:
        'Nicki Marty Pecision is a student and an aspiring web developer working with different areas of web technology, including front-end development, back-end development, and some basic UI/UX design, to embark on my imaginary ideas.',
};
const setMeta = {
    htmlAttrs: {
        lang: 'en',
    },
    meta: [
        {
            name: 'keywords',
            content:
                'Nicki Marty Pecision, nickimartypecision, Nicki Pecision, Hairyblue, HairyBlue, student, web developer',
        },
        {
            name: 'copyright',
            content: 'Nicki Marty Pecision',
        },
        {
            name: 'robots',
            content: 'index, follow',
        },
        {
            name: 'author',
            content: 'Nicki Marty Pecision',
        },
    ],
};

export default function () {
    return {
        setSeoMeta,
        setMeta,
    };
}
