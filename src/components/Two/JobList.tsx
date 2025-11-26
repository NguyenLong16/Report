const JobList = () => {
    return (
        <>
            <div className="flex items-center w-full max-w-[40rem] gap-2 rounded-md bg-white p-16 mx-auto">
                <div className="relative rounded-lg border-2 px-4 border-gray-200 flex-1">
                    <svg className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                    <input type="text"
                        className="w-full rounded-md outline-none border-gray-300 px-4 py-2"
                        placeholder="Search"
                    />

                </div>
                <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-300">Search</button>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-4">
                <div className="bg-gray-300 p-4">
                    <p>Columns</p>
                </div>
                <div className="bg-gray-300 p-4">
                    <p>Columns</p>
                </div>
                <div className="bg-gray-300 p-4">
                    <p>Columns</p>
                </div>
                <div className="bg-gray-300 p-4">
                    <p>Columns</p>
                </div>
            </div>
        </>
    )
}

export default JobList