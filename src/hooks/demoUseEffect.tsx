import { useState, useEffect } from 'react';
import { Movie } from '../lib/movie';
import { getMovies } from '../services/apiService';

export const useMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                const data = await getMovies();
                setMovies(data);
            } catch (err) {
                if (err instanceof Error) setError(err.message);
                else setError('Đã có lỗi không xác định xảy ra');
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovies();
    }, []);

    return { movies, isLoading, error };
};