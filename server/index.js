const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const multer = require('multer')
const bodyparser = require('body-parser')

const app = express()

app.use(express.static(__dirname + '/uploads'))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// app.use(require('body-parser').json)

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'root',
    database: 'flipkart'
})

connection.connect(error => {
    if(error){
        return error
    }
})

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello from Developer")
})

let cur_time;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {        
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {        
        cur_time = Date.now()
        cb(null, cur_time + "_" + file.originalname)
    }
})

var upload = multer({storage: storage}).single('file')

app.get('/users', (req, response) => {
    const { id } = req.query

    const GET_USER = `SELECT * FROM flipkart_users WHERE id = '${id}' AND is_active = 1`
    const SELECT_USERS = 'SELECT * FROM flipkart_users WHERE is_active = 1'
    
    if(id !== '' && id > 0){        
        connection.query(GET_USER, (error, result) => {
            if(error){
                return response.send(err)
            }else{
                return response.json({
                    data: result
                })
            }
        })
    }else{    
        connection.query(SELECT_USERS, (error, result) => {
            if(error){
                return response.send(err)
            }else{
                return response.json({
                    data: result
                })
            }
        })
    }    
})

app.get('/user/add', (req, res) => {
    const { name, email, password } = req.query
    const INSERT_USER = `INSERT INTO flipkart_users (name, email, password) VALUES('${name}', '${email}', ${password})`
    connection.query(INSERT_USER, (error, result) => {
        if(error){
            return res.send(error)
        }else{
            return res.send('User Added Successfully')
        }
    })
})

app.get('/user/login', (req, res) => {
    const { email, password, id } = req.query   
    const CHECK_USER_IF_EXISTS = `SELECT * FROM flipkart_users WHERE email='${email}' AND password='${password}'`

    connection.query(CHECK_USER_IF_EXISTS, (error, result) => {
        if(error){
            return res.send(error)
        }else{            
            if(result !== '' && result.length > 0){
                
                if(id == 0){
                    
                    const UPDATE_CART_IF_HAS_ITEMS = `UPDATE flipkart_cart set cust_id=${result[0].id} WHERE cust_id=${id}`
                    
                    connection.query(UPDATE_CART_IF_HAS_ITEMS, (error, results) => {
                        if(error){
                            return res.json({
                                data: 'Invalid data',
                                status: false    
                            })
                        }else{
                            return res.json({
                                data: result,
                                status: true
                            })
                        }
                    })
                }else{
                    return res.json({
                        data: result,
                        status: true
                    })
                }    
            }else{
                return res.json({
                    data: 'Invalid password or email',
                    status: false    
                })
            }    
        }
    })
})

app.post('/add-product', (req, res) => {        
    upload(req, res, function (err) {
    
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
    
        const{ name, desc, type, price, offer, brand, discount, message, category, file, filename } = req.query
        let file_name = cur_time + "_" + filename        
        const INSERT_PRODUCT = `INSERT INTO flipkart_products (name, image, brand, category, type, description, price, discount, offer, message) VALUES ("${name}", "${file_name}", "${brand}", "${category}", "${type}", "${desc}", ${price}, "${discount}", "${offer}", "${message}")`

        connection.query(INSERT_PRODUCT, (error, result) => {
            if(error){
                return res.send(error)
            }else{
                return res.send('Success')                
                // return res.status(200).send(req.file)
            }
        })        
    })      
})

app.get('/get-product', (req, res) => {
    const { type, id } = req.query
    let where =  ''    
    
    if( type == "deals"){
        where = "WHERE offer = 'Deals of the Day'"
    }else if(type == "limited"){
        where = "WHERE offer = 'Limited Period Deals'"
    }else if(type == "offers"){
        where = "WHERE offer = 'Trending Offers'"
    }else if(type == "fashion"){
        where = "WHERE offer = 'Best of Fashion Deals'"
    }else if(type == "latest"){
        where = "WHERE offer = 'Latest Launches'"
    }else if(type == "speaker"){
        where = "WHERE offer = 'Headphones & Speakers'"
    }else if(type == "accessory"){
        where = "WHERE offer = 'Fashion Accessories'"
    }else if(type == "more"){
        where = "WHERE offer = 'Books & More'"
    }else if( type == "storage"){
        where = "WHERE offer = 'Data Storage Devices'"
    }
    
    if(id !== '' && id > 0 && type === undefined){
        where = "WHERE prod_id="+id
    }
    // else if( id && id.length > 1 ){
    //     where = "WHERE prod_id IN (" + id + ")"
    // }

    const GET_PRODUCT = "SELECT * FROM flipkart_products " + where
    
    connection.query(GET_PRODUCT, (error, result) => {
        if(error){
            return res.send(error)
        }else{
            if(result !== '' && result.length > 0){
                return res.json({
                    data: result
                })
            }else{
                return res.send("Invalid data")
            }    
        }
    })
})

app.delete('/delete-user', (req, res) => {
    const { id } = req.query

    const DELETE_QUERY = 'UPDATE flipkart_users SET is_active = 0 WHERE id = '+ id

    connection.query(DELETE_QUERY, (error, result) => {
        if(error){
            res.send("Something Went Wrong!")
        }else{
            res.send("User Deleted Successfully")
        }
    })
})

app.post('/edit-user', (req, res) => {
    const { id, name, email} = req.query
    const UPDATE_USER = `UPDATE flipkart_users SET name='${name}', email='${email}' WHERE id = '${id}'`
    
    connection.query(UPDATE_USER, (error, result) => {
        if(error){
            return res.json({
                data: error,
                status: false
            })            
        }else{
            return res.json({
                data: 'User Updated Successfully',
                status: true
            })        
        }
    })
})

app.get('/get-category', (req, res) => {

    const SELECT_CATEGORY = 'SELECT DISTINCT(category), prod_id FROM flipkart_products LIMIT 7'

    connection.query(SELECT_CATEGORY, (error, result) => {
        if(error){
            return res.send(error)
        }else{
            return res.json({
                data: result
            })
        }
    })
})

app.get('/get-search-product', (req, res) => {
    const { q } = req.query

    const SELECT_CATEGORY = `SELECT prod_id, name, image FROM flipkart_products WHERE name LIKE '%${q}%' OR 
                            brand LIKE '%${q}%' OR 
                            category LIKE '%${q}%' OR 
                            type LIKE '%${q}%' OR 
                            description LIKE '%${q}%'`

    connection.query(SELECT_CATEGORY, (error, result) => {
        if(error){
            return res.send(error)
        }else{
            return res.json({
                data: result
            })
        }
    })
})

app.get('/add-into-cart', (req, res) => {
    const { id, prodId, price, type } = req.query 
    let quantity = 1
    let amount = 0
    let CART_QUERY = ''   

    const FETCH_ITEM = `SELECT quantity, total_amount FROM flipkart_cart WHERE cust_id=${id} AND prod_id=${prodId}`
   
    connection.query(FETCH_ITEM, (error, result) => {
        if(error){
            return res.json({
                data: "Something Went Wrong",
                status: false
            })
        }else{                                    
            if(result.length > 0 ){
                if(type === 'decr'){
                    if(result[0].quantity === 1){
                        quantity = result[0].quantity
                        amount = price
                    }else{
                        quantity = result[0].quantity - quantity
                        amount = quantity * price
                    }
                }else{
                    quantity = result[0].quantity + quantity
                    amount = quantity * price
                }

                CART_QUERY = `UPDATE flipkart_cart SET quantity=${quantity}, total_amount=${amount} WHERE
                              cust_id=${id} AND prod_id=${prodId}`
            }else{
                if(type !== 'decr'){
                    quantity = 1
                    amount = price * quantity                    
                    CART_QUERY = `INSERT INTO flipkart_cart (cust_id, prod_id, quantity, total_amount) VALUES
                                (${id}, ${prodId}, ${quantity}, ${amount})`
                }                
            }
            
            connection.query(CART_QUERY, (error, result) => {
                if(error){
                    return res.json({
                        data: "Something Went Wrong",
                        status: false
                    })
                }else{
                    // const UPDATED_DATA = `SELECT * FROM flipkart_cart WHERE cust_id=${id} AND prod_id=${prodId}` 
                    const UPDATED_DATA = `SELECT fc.id, fc.cust_id, fc.prod_id, fc.quantity, fc.total_amount, fp.name,
                                         fp.image, fp.brand, fp.category, fp.type, fp.description, fp.price, fp.discount,
                                         fp.offer, fp.message FROM flipkart_cart fc INNER JOIN flipkart_products fp ON 
                                         fc.prod_id = fp.prod_id WHERE fc.cust_id = ${id} AND fc.prod_id=${prodId}`
                    connection.query(UPDATED_DATA, (error, result) => {
                        if(error){
                            return res.json({
                                data: "Something Went Wrong",
                                status: false
                            })
                        }else{
                            return res.json({
                                data: result
                            })
                        }
                    })                    
                }
            }) 
        }
    })       
})

app.get('/order-history', (req, res) => {
    const { id, items} = req.query    
    
    const ORDER_QUERY = `INSERT INTO flipkart_order_history (cust_id, items) VALUES(${id}, '${items}')`
    
    connection.query(ORDER_QUERY, (error, result) => {
        if(error){
            return res.json({
                data: "Something Went Wrong",
                status: false
            })
        }else{
            return res.json({
                data: "Data inserted into history successfully",
                status: true
            })
        }
    })   
})

app.get('/remove-cart-item', (req, res) => {
    const { id, prodId } = req.query

    let where = ''
    if(prodId > 0){
        where = `WHERE cust_id=${id} AND prod_id=${prodId}`
    }else{
        where = `WHERE cust_id=${id}`
    }

    const DELETE_CART_OF_USER = `DELETE FROM flipkart_cart ${where}`

    connection.query(DELETE_CART_OF_USER, (error, result) => {        
        if(error){
            return res.json({
                data: "Something Went Wrong",
                status: false
            })
        }else{
            return res.json({
                data: "Items removed from cart successfully",
                status: true
            })
        }
    })
})

app.get('/get-cart-items', (req, res) => {
    const { id } = req.query
    // const GET_ITEMS = `SELECT * FROM flipkart_cart WHERE cust_id = ${id}`
    const GET_ITEMS = `SELECT fc.id, fc.cust_id, fc.prod_id, fc.quantity, fc.total_amount, fp.name, fp.image, fp.brand,
                      fp.category, fp.type, fp.description, fp.price, fp.discount, fp.offer, fp.message FROM 
                      flipkart_cart fc INNER JOIN flipkart_products fp ON fc.prod_id = fp.prod_id WHERE fc.cust_id = ${id}`
                   
    connection.query(GET_ITEMS, (error, result) => {
        if(error){
            return res.json({
                data: "Something Went Wrong",
                status: false
            })
        }else{
            return res.json({
                data: result,
                status: true
            })
        }
    })
})

app.get('/get-user', (req, res) => {
    const { id } = req.query

    const GET_USER = `SELECT * FROM flipkart_users WHERE id = '${id}' AND is_active = 1`    
    
    if(id !== '' && id > 0){
        connection.query(GET_USER, (error, result) => {
            if(error){
                return res.json({
                    data: "Something Went Wrong",
                    status: false
                })
            }else{
                return res.json({
                    data: result,
                    status: true
                })
            }
        })
    }    
})

app.listen(3002, () => {
    console.log("Listening to port 3002")
})