import Read from "../models/Read.js";

export const addread = async (req, res) => {
    try {
        const { title, author, date, rating, notes } = req.body;
        const read = await Read.create({
            title,
            author,
            date,
            rating,
            notes,
            user: req.user.id,
        });
        res.json({ success: true, message: "New read Added", result: read })
    } catch (err) {
        res.json({ success: false, message: "Couldn't add", error: err.message })
    }
}