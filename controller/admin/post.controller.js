const Book = require('../../models/Book');


module.exports.addABook = async (req, res, next) => {
    try {
        const book = new Book(req.body);
        const result = await book.save();

        if (result) {
            return res.status(200).json({
                "result": "Book Added Successfully"
            });
        }
        return res.status(500).json({
            "result": "Something went wrong."
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            "result": error
        });
    }
}