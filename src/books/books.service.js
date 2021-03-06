const _ = require('lodash');
const Books = require('./books.model');

const BookService = {
    async entry(req, res) {
        try {
            res.status(200).json({

                status: "success",
                message: "Welcome to the baby steps to APIs",
                resources: {
                    books: "/books",
                    book: "/book/id"
                }
            })
        } catch (error) {
            res.json({
                status: "failure",
                error: error
            })
        }

    },
    async getBooks(req, res) {
        try {
            res.status(200).json({
                status: "success",
                data: Books
            })
        } catch (error) {
            res.json({
                status: "failure",
                error: error
            })
        }
    },
    async getBook(req, res) {
        try {
            let id = parseInt(req.params.id);
            let result;
            await Books.forEach(book => {
                if (book.id == id) result = book;
            })

            if (_.isEmpty(result)) {
                return res.status(404).json({
                    message: "Data not found"
                })
            } res.status(200).json({
                data: result
            })
        } catch (error) {
            return res.send(error)
        }
    }
}

module.exports = BookService