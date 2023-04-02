const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vh3xqbm.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        const allsCollection = client.db('photoGallery').collection('alls');
        const bikeCollection = client.db('photoGallery').collection('bikes');
        const shirtCollection = client.db('photoGallery').collection('shirts');
        const shoesCollection = client.db('photoGallery').collection('shoes');
        const mobilesCollection = client.db('photoGallery').collection('mobiles');
        

        app.get('/alls', async (req, res) => {
            const alls = await allsCollection.find({}).toArray();
            res.send(alls);
        })

        app.get('/alls/:id', async (req, res) => {
            id = req.params.id;
            const one = await allsCollection.findOne({ _id: new ObjectId(id) });
            res.send(one);
        })

        app.get('/bikes', async (req, res) => {
            const bikes = await bikeCollection.find({}).toArray();
            res.send(bikes);
        })

        app.get('/bikes/:id', async (req, res) => {
            id = req.params.id;
            const bike = await bikeCollection.findOne({ _id: new ObjectId(id) });
            res.send(bike);
        })

        app.get('/shirts', async (req, res) => {
            const shirts = await shirtCollection.find({}).toArray();
            res.send(shirts);
        })

        app.get('/shirts/:id', async (req, res) => {
            id = req.params.id;
            const shirt = await shirtCollection.findOne({ _id: new ObjectId(id) });
            res.send(shirt);
        })

        app.get('/shoes', async (req, res) => {
            const shoes = await shoesCollection.find({}).toArray();
            res.send(shoes);
        })

        app.get('/shoes/:id', async (req, res) => {
            id = req.params.id;
            const shoes = await shoesCollection.findOne({ _id: new ObjectId(id) });
            res.send(shoes);
        })

        app.get('/mobiles', async (req, res) => {
            const mobiles = await mobilesCollection.find({}).toArray();
            res.send(mobiles);
        })

        app.get('/mobiles/:id', async (req, res) => {
            id = req.params.id;
            const mobile = await mobilesCollection.findOne({ _id: new ObjectId(id) });
            res.send(mobile);
        })

    }
    finally {

    }
}

run().catch(e => console.error(e));

app.get('/', (req, res) => {
    res.send('photo gallery server is running')
})


app.listen(port, () => {
    console.log(`photo gallery server running on ${port}`);
})