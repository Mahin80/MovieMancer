// --- RECOMMENDATION CONTROLLER ---
const getRecommendations = async (req, res) => {
    try {
        const { userId } = req.query;

        // Placeholder logic for static recommendations
        const recommendedMovies = [
            { title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
            { title: 'The Dark Knight', genre: 'Action', rating: 9.0 },
            { title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6 },
        ];

        res.json(recommendedMovies);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getRecommendations };




