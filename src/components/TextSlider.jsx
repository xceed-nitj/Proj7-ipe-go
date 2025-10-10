const TextSlider = () => {
    const sliderData = [
        "NITJ has been ranked in the 2025 THE (Times Higher Education) Asia University Rankings in the ranking band of 351-400",
        "NITJ Ranked 58th in Engineering Category and Rank-Band: 101-150 in Overall Ranking of NIRF Ranking, 2024",
        "NITJ has been ranked in the 2025 THE (Times Higher Education) Engineering and Technology in the ranking band of 801-1000",
        "NITJ has been ranked in the THE (Times Higher Education) World University Rankings 2025 in the ranking band of 1001-1200",
        "NITJ Placed in ranking band of 661-680 amongst Asian Universities",
        "NITJ secured 202nd position amongst Southern Asia Universities in QS Asia University Rankings 2025",
        "NITJ has been ranked 39th in the IIRF Rankings 2024"
    ];
    const combined = sliderData.join(" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
    // console.log("Combined Text:", combined);
    return (
        <div className="w-full overflow-hidden whitespace-nowrap bg-blue-800 text-white text-center py-6 px-4 flex items-center">
            <div className="inline-block wave-strip">
                {/* Duplicate content for seamless scrolling */}
                <span className="px-4 text-lg sm:text-xl md:text-2xl font-semibold">{combined}</span>
                <span className="px-4 text-lg sm:text-xl md:text-2xl font-semibold">{combined}</span>
            </div>
        </div>
    )
}

export default TextSlider