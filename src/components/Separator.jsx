export default function Separator({shape, count}) {
    return(
        <>
        <h1>{`${shape}`.repeat(count)}</h1>      
        </>
    )
}