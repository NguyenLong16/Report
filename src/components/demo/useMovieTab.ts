import { useState, useMemo, useCallback } from "react";

export type Movie = {
    id: number;
    name: string;
    statusName: string;
};

export type TabKey = "comingSoon" | "nowShowing" | "special";

export const useMovieTabs = (allMovies: Movie[]) => {
    const [activeTab, setActiveTab] = useState<TabKey>("comingSoon");

    const categorizedMovies = useMemo<Record<TabKey, Movie[]>>(() => {
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

    const handleChangeTab = useCallback((tab: TabKey) => {
        setActiveTab(tab);
    }, []);

    const moviesToDisplay = useMemo(() => {
        return categorizedMovies[activeTab];
    }, [activeTab, categorizedMovies]);

    return {
        activeTab,
        handleChangeTab,
        moviesToDisplay,
        categorizedMovies,
    };
};
