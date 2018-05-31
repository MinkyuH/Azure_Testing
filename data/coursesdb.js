var SampleData = require ('./sampleCourses');
var docdb = require('documentdb');
var async = require('async');


var config = {
    host: 'https://webapptestcosmosdb.documents.azure.com:443/',
    auth: {
        masterKey: 'SfXBtfobU3NiE1adAG768WxHQwkbJATryAJ1CxxGUHpIaRTOwn1voKKLXKk4tvdAa3Ok5kB4NqWJDgTIQuSH1Q=='
    }
}

var client = docdb.DocumentClient(config.host, config.auth)

var coursesLink = docdb.UriFactory.createDocumentCollectionUri("testdbcosmos", "courses")

var createCourses = function(callback) {
    async.forEachOf(sampleData, (course, key, next) => {
        client.createDocument(coursesLink, course, (err, document)=>{
            if (err){
                return next `${error}`
                documents.push(document);
                next();
            }

        }, err =>callback(err, documents))
    })
}

var querySpec = {
    query: 'SELECT * FROM c',
    parameters: []
}

var queryCourses = function(callback) {
    client.queryDocuments(coursesLink, querySpec).toArray(((err, result) =>{
        callback(err, result)
    }))
}