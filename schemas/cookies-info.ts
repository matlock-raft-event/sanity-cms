// schemas/cookiesInfo.ts
export default {
    name: "cookiesInfo",
    type: "document",
    title: "Cookies Information",
    fields: [
        {
            name: "content",
            type: "array",
            of: [{ type: "block" }],
            title: "Content",
            validation: (Rule: any) => Rule.required()
        }
    ]
};
