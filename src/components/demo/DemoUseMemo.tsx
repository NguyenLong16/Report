import { useMemo } from "react";

const DemoUseMemo = () => {
    // Fake data (giả lập như API trả về)
    const allMovies = [
        { id: 1, name: "Avengers", statusName: "sắp chiếu" },
        { id: 2, name: "Batman", statusName: "đang chiếu" },
        { id: 3, name: "Superman", statusName: "suất chiếu đặc biệt" },
        { id: 4, name: "Deadpool", statusName: "đang chiếu" },
        { id: 5, name: "One Piece Film", statusName: "sắp chiếu" }
    ];

    // Dùng useMemo để phân loại (giống code bạn đang có)
    const categorizedMovies = useMemo(() => {
        if (!allMovies) return { nowShowing: [], comingSoon: [], special: [] };

        const comingSoon = allMovies.filter(
            m => m.statusName.trim().toLowerCase() === "sắp chiếu"
        );

        const nowShowing = allMovies.filter(
            m => m.statusName.trim().toLowerCase() === "đang chiếu"
        );

        const special = allMovies.filter(
            m => m.statusName.trim().toLowerCase() === "suất chiếu đặc biệt"
        );

        return { nowShowing, comingSoon, special };
    }, [allMovies]);

    return (
        <div>
            <h1>Phân loại phim bằng useMemo</h1>

            <h2>Phim sắp chiếu</h2>
            <ul>
                {categorizedMovies.comingSoon.map(m => (
                    <li key={m.id}>{m.name}</li>
                ))}
            </ul>

            <h2>Phim đang chiếu</h2>
            <ul>
                {categorizedMovies.nowShowing.map(m => (
                    <li key={m.id}>{m.name}</li>
                ))}
            </ul>

            <h2>Suất chiếu đặc biệt</h2>
            <ul>
                {categorizedMovies.special.map(m => (
                    <li key={m.id}>{m.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default DemoUseMemo
