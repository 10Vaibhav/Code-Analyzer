const aiService = require("../services/ai.service")

module.exports.getReview = async (req, res) => {
    try {
        // Check if req.body exists
        if (!req.body) {
            return res.status(400).send("Request body is missing");
        }

        const code = req.body.code;

        if (!code) {
            return res.status(400).send("Code parameter is required");
        }

        const response = await aiService(code);
        res.send(response);
    } catch (error) {
        console.error("Error in getReview:", error);
        res.status(500).send("Internal server error");
    }
}