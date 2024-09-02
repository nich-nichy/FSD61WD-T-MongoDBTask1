/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'learning';
const collection = 'Learn_MongoDB';

// Create a new database.
use(database);

// Find All
db.getCollection(collection).find({});

// Find product price between 400 to 800
db.getCollection(collection).find({
    product_price: {
        $gt: 400,
        $lt: 800
    }
});

// Find product price not between 400 to 800
db.getCollection(collection).find({
    $or:
        [
            { "product_price": { $lte: 400 } },
            { "product_price": { $gte: 800 } }
        ]
})

// Products greater than 500
db.getCollection(collection).find({ product_price: { $gt: 500 } })

// Product name and material of each products
db.getCollection(collection).find({},
    { product_name: 1, product_material: 1, _id: 0 }
)

// Find the product with a row id of 10
db.getCollection(collection).findOne({ id: "10" });

// Find the product with a row id of 10
db.getCollection(collection).findOne({ id: "10" },
    { product_name: 1, product_material: 1, id: 1 }
);

// Find all products which contain the value of soft in product material
db.getCollection(collection).find({ product_material: { $regex: "Soft" } });

// Find products which contain product color indigo  and product price 492.00
db.getCollection(collection).find({ product_color: "indigo", product_price: 492.00 })

// Delete the products which product price value are 28
db.getCollection(collection).deleteMany({ product_price: 28 })

