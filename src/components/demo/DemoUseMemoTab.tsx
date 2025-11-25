import { useMovieTabs } from "./useMovieTab";

const DemoUseMemoTab = () => {
    // Fake data
    const allMovies = [
        { id: 1, name: "Avengers", statusName: "sắp chiếu" },
        { id: 2, name: "Batman", statusName: "đang chiếu" },
        { id: 3, name: "Superman", statusName: "suất chiếu đặc biệt" },
        { id: 4, name: "Deadpool", statusName: "đang chiếu" },
        { id: 5, name: "One Piece", statusName: "sắp chiếu" }
    ];


    // Tab đang active
    const {
        activeTab,
        handleChangeTab,
        moviesToDisplay
    } = useMovieTabs(allMovies);

    const tabs = [
        { id: "comingSoon", label: "Phim sắp chiếu" },
        { id: "nowShowing", label: "Phim đang chiếu" },
        { id: "special", label: "Suất chiếu đặc biệt" }
    ];

    return (
        <div style={{ padding: 20 }}>
            <h1>🎬 Danh sách phim theo Tabs (useMemo + useCallback)</h1>

            {/* Render Tabs */}
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => handleChangeTab(tab.id as any)}
                        style={{
                            padding: "10px 20px",
                            borderRadius: 6,
                            cursor: "pointer",
                            border: "none",
                            background:
                                activeTab === tab.id ? "black" : "#ddd",
                            color: activeTab === tab.id ? "white" : "black"
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Danh sách phim */}
            <ul>
                {moviesToDisplay.map(movie => (
                    <li key={movie.id} style={{ marginBottom: 8 }}>
                        {movie.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DemoUseMemoTab;
