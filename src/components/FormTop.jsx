export default function FormTop({ data }) {
    const { main, sub } = data
    return (
        <>
            <legend id="form-title">{main}</legend>
            <p className="sub-heading">{sub}</p></>
    )
}
