// --- MOVIE CONTROLLER ---
const Movie = require('../models/movieModel');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const addMovie = async (req, res) => {
    try {
        const { title, genre, description, rating } = req.body;

        const newMovie = new Movie({ title, genre, description, rating });
        await newMovie.save();

        res.status(201).json({ message: 'Movie added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getAllMovies, addMovie };

