
export default function ProfilePicture() {
    const imageUrl = "./src/assets/messi.jpg";
    const handleClick = (e) => {
        e.target.style.display = "none"
    }
    return (
        <>
            <img src={imageUrl} onClick={(e) => handleClick(e)}/>
        </>
    );
}