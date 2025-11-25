import { Movie } from "../lib/movie";

export const getMovies = async (): Promise<Movie[]> => {

    // Gọi API GET đến endpoint /api/movies
    const response = await fetch("https://localhost:7080/api/movies");

    // Kiểm tra nếu server trả lỗi (status code không nằm trong khoảng 200–299)
    // thì ném ra lỗi để nơi gọi hàm có thể xử lý (try...catch)
    if (!response.ok) {
        throw new Error('Không thể tải danh sách phim.');
    }

    // Nếu thành công, parse dữ liệu JSON từ response
    // và trả về kết quả là mảng các đối tượng Movie
    return response.json();
};