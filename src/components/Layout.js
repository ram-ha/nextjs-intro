import NavBar from "./NavBar";

export default function Layout({ Children }) {
    return (
        <>
            <NavBar />
            <div>{Children}</div>
        </>
    )
}