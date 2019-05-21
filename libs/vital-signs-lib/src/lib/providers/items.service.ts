import { Injectable } from "@graphql-modules/di";
// const MongoClient = require('mongodb').MongoClient;
import mongodb from 'mongodb';
const uri = "mongodb+srv://cwestAdmin:Conner12!@visionteam-jmozf.gcp.mongodb.net/test?retryWrites=true";
const client = new mongodb.MongoClient(uri, { useNewUrlParser: true });

@Injectable()
export class ItemsService {
    // public getItems = async () => {
    //     return new Promise((res, rej) => {
    //         res([{ name: 'blue', type: 'color' }, { name: 'black', type: 'color' }, { name: 'purple', type: 'color' }, { name: 'yellow', type: 'color' }])
    //     });
    // }

    public findItems = async () => {
        return new Promise((res, rej) => {
            client.connect(err => {
                const db = client.db('kingwood').collection('items');
                db.find().toArray((err2, res2) => {
                    res(res2);
                })
            })
        })
    }
}