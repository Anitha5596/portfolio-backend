const express = require('express');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5596;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));

const uri = 'mongodb+srv://anitha:Qwerty1!@cluster0.szv3odk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = "Anitha's";
const collectionName = 'Portfolio';
const mainDocId = '6822d2b5d476798ef806293f';

async function fetchFullData() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const doc = await client
      .db(dbName)
      .collection(collectionName)
      .findOne({ _id: new ObjectId(mainDocId) });

    return doc || null;
  } catch (error) {
    console.error('Error fetching full data:', error);
    return null;
  } finally {
    await client.close();
  }
}

app.get('/api', async (req, res) => {
  const fullData = await fetchFullData();
  if (fullData) {
    res.json(fullData);
  } else {
    res.status(404).json({ message: 'No data found' });
  }
});

app.post('/api', async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const result = await client
      .db(dbName)
      .collection(collectionName)
      .updateOne(
        { _id: new ObjectId(mainDocId) },
        { $push: { projects: req.body } }
      );

    res.status(201).json({ message: 'Project added', result });
  } catch (error) {
    console.error('Error inserting project:', error);
    res.status(500).json({ message: 'Failed to insert project' });
  } finally {
    await client.close();
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
