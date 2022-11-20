export const Card = ({ className, width, height, children }) => {
    return (
        <div className={`${width} ${height} ${className} bg-white rounded-lg shadow-sm shadow-[#f1f7ff]`}>
            {children}
        </div>
    )
}

export const Title = ({ className, children }) => {
    return (
        <div className={className}>{children}</div>
    )
}

export const Body = ({ className, children }) => {
    return (
        <div className={className}>{children}</div>
    )
}

var _default = Object.assign(Card, {
    Title, Body
})

export default _default