const CurrentRent = () => {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Your current rent</h2>
            <div className="bg-white border p-4 rounded flex justify-between items-center">
                <span>Sun Hotel / 2 beds / 1 day / $120</span>
                <button className="px-4 py-2 bg-red-500 text-white rounded">Cancel rent</button>
            </div>
        </div>
    );
};

export default CurrentRent;