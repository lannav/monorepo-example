exports.handler = function(event, context, callback) {
    const data = JSON.parse(event.body);

    callback(null, {
        statusCode: 200,
        body: JSON.stringify([
            { title: data.data },
            { title: 'title 1' },
            { title: 'title 2' },
        ])
    });
};
