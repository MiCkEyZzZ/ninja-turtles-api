module.exports = [
    {
        model: "person",
        path: "/person",
        handler: "find",
    },
    {
        model: 'person',
        path: '/person/:id',
        handler: "findById",
    },
    {
        model: "location",
        path: "/location",
        handler: "find",
    },
    {
        model: "location",
        path: "/location/:id",
        handler: "findById",
    }
]
