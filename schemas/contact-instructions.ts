// schemas/summary.ts
export default {
    name: "contactInstructions",
    type: "document",
    title: "Contact Instructions",
    fields: [
        {
            name: "general",
            type: 'array',
            of: [{type: 'block'}],
            title: "General Instructions",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "press",
            type: 'array',
            of: [{type: 'block'}],
            title: "Press Instructions",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "sponsors",
            type: 'array',
            of: [{type: 'block'}],
            title: "Sponsors Instructions",
            validation: (Rule: any) => Rule.required()
        },
    ]
};
