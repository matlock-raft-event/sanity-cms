// schemas/summary.ts
export default {
    name: 'summary',
    type: 'document',
    title: 'Summary',
    fields: [
        {
            name: "yearsActive",
            type: "string",
            title: "Years Active",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "bio",
            type: "string",
            title: "Biography",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'eventCount',
            type: 'string',
            title: 'Event Count'
        },
        {
            name: 'moneyRaised',
            type: 'string',
            title: 'Money Raised'
        }
    ]
}
