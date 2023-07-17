let mongodb = require('mongodb')
let connectionstring = "mongodb://localhost:27017/demo_db" //THIS IS A DEMO STRING WILL NOT WORK

mongodb.connect(connectionstring,(err,db)=>{
    if (err)
        throw err
    console.log(db)
    db.collection("demo").insertOne({name:'folarin', age:20},(err)=>{
        if (err)
            throw err
        console.log("Successfully added to database")
    }) //TO INSERT A NEW RECORD INTO DB COLLECTION


    db.collection("demo").findOne({ }, (err: never, data: any)=>{
        if (err)
            throw err
        console.log(data)
        console.log("One record fetched successfully")
    }) //TO FIND A RECORD FROM DB COLLECTION


    let query: object = {}
    db.collection('demo').find(query).toArray((err:never, data:any)=>{
        if (err) throw err;
        console.log(data)
        console.log("All records fetched successfully!")
    }) // TO FIND ALL RECORDS THAT FULFIL A GIVEN SERACH QUERY


    let id : string ='01'
    let update = {};
    db.collection("demo").updateOne({id: id},update, (err, data)=>{
        if (err) throw err;
        console.log(data)
        console.log(`Record with id ${id} updated successfully`)
    }) // TO UPDATE THE FIRST RECORD IN THE DB THAT FULFILS THE SEARCH QUERY


    db.collection('demo').deleteMany({name:"suei"},(err,data)=>{
        if (err) throw err;
        console.log(data)
    })  // TO DELETE ALL RECORDS IN THE DB THAT FULFILS THE SERACH QUERY


    db.close()
})