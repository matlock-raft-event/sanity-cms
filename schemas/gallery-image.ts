// schemas/gallery-image.js
export default {
    name: 'galleryImage',
    type: 'document',
    title: 'Gallery Image',
    fields: [
        {
            name: 'year',
            type: 'number',
            title: 'Year'
        },
        {
            name: 'img',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'author',
            type: 'string',
            title: 'Author'
        },
    ]
}
