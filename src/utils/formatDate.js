const formatDate = dateString => {
    return new Date(dateString)
        .toLocaleDateString(
            'en-US',
            { year: "numeric", month: "long", day: "numeric" }
        )
}

export default formatDate;