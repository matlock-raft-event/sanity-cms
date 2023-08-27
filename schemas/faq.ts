// schemas/faq.ts
export default {
    name: "faq",
    type: "document",
    title: "FAQ",
    fields: [
        {
            name: "question",
            type: "string",
            title: "Question"
        },
        {
            name: "answer",
            type: "array",
            title: "Answer",
            of: [{ type: "block" }]
        }
    ]
};
